const fs = require('fs');
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, HeadingLevel,
  WidthType, ShadingType, AlignmentType, BorderStyle, LevelFormat, PageBreak, Footer, PageNumber,
} = require('docx');

const SRC = process.argv[2];
if (!SRC) { console.error('usage: node build_docx.js <report.md> [out.docx] ["Footer title"] ["Author"]'); process.exit(1); }
const OUT = process.argv[3] || SRC.replace(/\.md$/, '.docx');
const FOOTER = process.argv[4] || 'SEO / AEO Audit';
const md = fs.readFileSync(SRC, 'utf8').split('\n');

const FONT = 'Calibri';
const INK = '1E1919';
const ACCENT = '1F4E79';
const HEAD_FILL = 'DCE6F1';
const ALT_FILL = 'F5F7FA';
const PAGE_W = 12240, MARGIN = 1080, CONTENT_W = PAGE_W - 2 * MARGIN; // 10080 DXA

// ---- inline parsing: **bold**, `code`, plain
function runs(text, base = {}) {
  const out = [];
  const re = /(\*\*[^*]+\*\*|`[^`]+`)/g;
  let last = 0, m;
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) out.push(new TextRun({ text: text.slice(last, m.index), font: FONT, ...base }));
    const tok = m[0];
    if (tok.startsWith('**')) out.push(new TextRun({ text: tok.slice(2, -2), bold: true, font: FONT, ...base }));
    else out.push(new TextRun({ text: tok.slice(1, -1), font: 'Consolas', size: (base.size || 20) - 1, ...base }));
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(new TextRun({ text: text.slice(last), font: FONT, ...base }));
  return out;
}

function para(text, opts = {}) {
  return new Paragraph({ children: runs(text, opts.run || {}), spacing: { after: 120, line: 276 }, ...opts.p });
}

function heading(text, level) {
  const map = { 1: HeadingLevel.TITLE, 2: HeadingLevel.HEADING_1, 3: HeadingLevel.HEADING_2, 4: HeadingLevel.HEADING_3 };
  const kids = [];
  if (level === 2 && !/^1\./.test(text)) kids.push(new Paragraph({ children: [new PageBreak()] }));
  kids.push(new Paragraph({ text, heading: map[level], spacing: { before: level === 2 ? 240 : 200, after: 120 } }));
  return kids;
}

function splitRow(line) {
  return line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map(c => c.trim());
}

function table(rows) {
  const header = rows[0];
  const n = header.length;
  // width heuristic: weight columns by average content length, clamp
  const lens = header.map((_, i) => rows.reduce((a, r) => a + (r[i] || '').length, 0) / rows.length);
  const clamped = lens.map(l => Math.min(Math.max(l, 8), 60));
  const total = clamped.reduce((a, b) => a + b, 0);
  const widths = clamped.map(w => Math.round(CONTENT_W * w / total));
  widths[n - 1] += CONTENT_W - widths.reduce((a, b) => a + b, 0);
  const border = { style: BorderStyle.SINGLE, size: 4, color: 'BFBFBF' };
  const borders = { top: border, bottom: border, left: border, right: border };
  const trs = rows.map((r, ri) => new TableRow({
    tableHeader: ri === 0,
    cantSplit: true,
    children: header.map((_, ci) => new TableCell({
      width: { size: widths[ci], type: WidthType.DXA },
      borders,
      shading: ri === 0 ? { fill: HEAD_FILL, type: ShadingType.CLEAR, color: 'auto' }
        : (ri % 2 === 0 ? { fill: ALT_FILL, type: ShadingType.CLEAR, color: 'auto' } : undefined),
      margins: { top: 60, bottom: 60, left: 90, right: 90 },
      children: [new Paragraph({
        children: runs(r[ci] || '', { size: 18, bold: ri === 0 }),
        spacing: { after: 0, line: 240 },
      })],
    })),
  }));
  return new Table({ rows: trs, width: { size: CONTENT_W, type: WidthType.DXA }, columnWidths: widths });
}

const children = [];
let i = 0;
let tableBuf = null;
function flushTable() { if (tableBuf) { children.push(table(tableBuf)); children.push(new Paragraph({ spacing: { after: 120 } })); tableBuf = null; } }

while (i < md.length) {
  const line = md[i];
  if (/^\s*\|/.test(line)) {
    const cells = splitRow(line);
    if (!cells.every(c => /^:?-+:?$/.test(c))) { tableBuf = tableBuf || []; tableBuf.push(cells); }
    i++; continue;
  }
  flushTable();
  if (line.trim() === '' || line.trim() === '---') { i++; continue; }
  let m;
  if ((m = line.match(/^(#{1,4})\s+(.*)$/))) { children.push(...heading(m[2], m[1].length)); i++; continue; }
  if ((m = line.match(/^- (.*)$/))) {
    children.push(new Paragraph({ children: runs(m[1]), numbering: { reference: 'bullets', level: 0 }, spacing: { after: 80, line: 260 } }));
    i++; continue;
  }
  if ((m = line.match(/^(\d+)\. (.*)$/))) {
    children.push(new Paragraph({ children: runs(m[2]), numbering: { reference: 'numbers', level: 0 }, spacing: { after: 80, line: 260 } }));
    i++; continue;
  }
  children.push(para(line));
  i++;
}
flushTable();

const doc = new Document({
  creator: process.argv[5] || 'Website Audit',
  title: FOOTER,
  styles: {
    default: { document: { run: { font: FONT, size: 21, color: INK } } },
    paragraphStyles: [
      { id: 'Title', name: 'Title', basedOn: 'Normal', run: { size: 44, bold: true, color: ACCENT, font: FONT }, paragraph: { spacing: { after: 200 } } },
      { id: 'Heading1', name: 'Heading 1', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 30, bold: true, color: ACCENT, font: FONT }, paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 } },
      { id: 'Heading2', name: 'Heading 2', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 24, bold: true, color: INK, font: FONT }, paragraph: { spacing: { before: 200, after: 100 }, outlineLevel: 1 } },
      { id: 'Heading3', name: 'Heading 3', basedOn: 'Normal', next: 'Normal', quickFormat: true, run: { size: 21, bold: true, italics: true, color: INK, font: FONT }, paragraph: { spacing: { before: 160, after: 80 }, outlineLevel: 2 } },
    ],
  },
  numbering: {
    config: [
      { reference: 'bullets', levels: [{ level: 0, format: LevelFormat.BULLET, text: '\u2022', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] },
      { reference: 'numbers', levels: [{ level: 0, format: LevelFormat.DECIMAL, text: '%1.', alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 540, hanging: 270 } } } }] },
    ],
  },
  sections: [{
    properties: { page: { size: { width: PAGE_W, height: 15840 }, margin: { top: MARGIN, bottom: MARGIN, left: MARGIN, right: MARGIN } } },
    footers: {
      default: new Footer({ children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [
        new TextRun({ text: FOOTER + '  ·  Page ', size: 16, color: '7F7F7F', font: FONT }),
        new TextRun({ children: [PageNumber.CURRENT], size: 16, color: '7F7F7F', font: FONT }),
      ] })] }),
    },
    children,
  }],
});

Packer.toBuffer(doc).then(buf => { fs.writeFileSync(OUT, buf); console.log('wrote', OUT, buf.length); });
