export function NavBar({logo, links=[], ctaLabel='Subscribe', ctaHref='#', scrolled=false}) {
  const linkColor = scrolled ? 'var(--slate-600)' : 'var(--white)';
  return <nav style={{position:'sticky',top:0,zIndex:100,background:scrolled?'rgba(255,255,255,0.96)':'transparent',backdropFilter:scrolled?'blur(12px)':'none',boxShadow:scrolled?'0 1px 0 var(--slate-200)':'none',transition:'background 0.35s var(--ease), box-shadow 0.35s var(--ease)'}}>
    <div style={{maxWidth:'var(--container-max)',margin:'0 auto',padding:'0 var(--sp-4)',display:'flex',alignItems:'center',justifyContent:'space-between',height:'72px'}}>
      <a href="#">{logo ? <img src={logo} alt="West to West" style={{height:'36px',display:'block'}}></img> : <span style={{fontFamily:'var(--font-display)',fontWeight:700,letterSpacing:'0.04em',color:scrolled?'var(--ink)':'var(--white)'}}>WEST TO WEST</span>}</a>
      <div style={{display:'flex',alignItems:'center',gap:'var(--sp-4)'}}>
        {links.map((l,k)=><a key={k} href={l.href||'#'} style={{fontSize:'14px',fontWeight:500,color:linkColor,letterSpacing:'0.01em',textDecoration:'none'}}>{l.label}</a>)}
        <a href={ctaHref} style={{padding:'10px 20px',background:scrolled?'var(--dark-ocean)':'rgba(255,255,255,0.12)',color:'var(--white)',borderRadius:'var(--radius-sm)',fontSize:'14px',fontWeight:600,textDecoration:'none'}}>{ctaLabel}</a>
      </div>
    </div>
  </nav>;
}
