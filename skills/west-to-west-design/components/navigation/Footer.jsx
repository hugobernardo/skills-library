export function Footer({logo, description='Bridging Portugal and Silicon Valley.', columns=[], bottomNote}) {
  return <footer style={{background:'var(--ink)',color:'var(--white)',padding:'var(--sp-6) var(--sp-4) var(--sp-3)'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto'}}>
      <div style={{display:'grid',gridTemplateColumns:'1.5fr repeat('+Math.max(columns.length,1)+', 1fr)',gap:'var(--sp-6)',paddingBottom:'var(--sp-6)',borderBottom:'1px solid rgba(255,255,255,0.08)',marginBottom:'var(--sp-4)'}}>
        <div>
          {logo ? <img src={logo} alt="West to West" style={{height:'24px',marginBottom:'var(--sp-1)'}}></img> : <span style={{fontFamily:'var(--font-display)',fontWeight:700,fontSize:'16px',letterSpacing:'0.04em'}}>WEST TO WEST</span>}
          <p style={{fontSize:'15px',color:'rgba(255,255,255,0.5)',marginTop:'var(--sp-2)',lineHeight:'24px',maxWidth:'280px'}}>{description}</p>
        </div>
        {columns.map((col,k)=><div key={k}>
          <h4 style={{fontFamily:'var(--font-display)',fontSize:'13px',fontWeight:600,letterSpacing:'0.06em',textTransform:'uppercase',color:'rgba(255,255,255,0.35)',margin:'0 0 var(--sp-2)'}}>{col.title}</h4>
          {col.links.map((l,j)=><a key={j} href={l.href||'#'} style={{display:'block',fontSize:'14px',color:'rgba(255,255,255,0.6)',padding:'4px 0',textDecoration:'none'}}>{l.label}</a>)}
        </div>)}
      </div>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:'var(--sp-2)'}}>
        <p style={{fontSize:'13px',color:'rgba(255,255,255,0.3)',margin:0}}>{bottomNote || ('\u00A9 ' + new Date().getFullYear() + ' West to West. All rights reserved.')}</p>
      </div>
    </div>
  </footer>;
}
