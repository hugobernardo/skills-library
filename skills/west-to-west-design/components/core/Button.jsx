export function Button({variant='primary', tone='light', href='#', onClick, children}) {
  const [h, setH] = React.useState(false);
  const base = {display:'inline-flex',alignItems:'center',gap:'var(--sp-1)',padding:'14px 28px',fontSize:'14px',lineHeight:'16px',fontWeight:600,fontFamily:'var(--font-body)',borderRadius:'var(--radius-sm)',textDecoration:'none',cursor:'pointer',transition:'all 0.25s var(--ease)',transform:h?'translateY(-1px)':'none'};
  let s;
  if (variant==='primary' && tone==='light') s={...base,background:h?'var(--dark-ocean-hover)':'var(--dark-ocean)',color:'var(--white)',border:'none',boxShadow:h?'0 4px 14px rgba(11,57,88,0.25)':'none'};
  else if (variant==='primary') s={...base,background:h?'var(--flag-green-hover)':'var(--flag-green)',color:'var(--ink)',border:'none',boxShadow:h?'0 4px 20px rgba(54,208,163,0.3)':'none'};
  else if (tone==='light') s={...base,background:h?'var(--dark-ocean)':'transparent',color:h?'var(--white)':'var(--dark-ocean)',border:'1.5px solid var(--dark-ocean)'};
  else s={...base,background:h?'rgba(255,255,255,0.08)':'transparent',color:'var(--white)',border:h?'1.5px solid rgba(255,255,255,0.4)':'1.5px solid rgba(255,255,255,0.25)'};
  return <a href={href} onClick={onClick} style={s} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}>{children}</a>;
}
