export function SectionHeader({eyebrow, title, subtitle, center=true, dark=false}) {
  const tick = {content:'""',width:'24px',height:'2px',background:'var(--flag-green)',borderRadius:'1px',display:'inline-block'};
  return <div style={{marginBottom:'var(--sp-8)',textAlign:center?'center':'left'}}>
    {eyebrow && <div style={{display:'inline-flex',alignItems:'center',gap:'var(--sp-1)',fontSize:'14px',fontWeight:600,color:dark?'var(--flag-green)':'var(--dark-ocean)',letterSpacing:'0.06em',textTransform:'uppercase',marginBottom:'var(--sp-2)'}}><span style={tick}></span>{eyebrow}</div>}
    <h2 style={{fontFamily:'var(--font-display)',fontSize:'var(--h2-size)',lineHeight:'var(--h2-line)',fontWeight:700,color:dark?'var(--white)':'var(--ink)',marginBottom:subtitle?'var(--sp-2)':0,marginTop:0}}>{title}</h2>
    {subtitle && <p style={{fontSize:'18px',lineHeight:'28px',color:dark?'rgba(255,255,255,0.55)':'var(--slate-600)',maxWidth:'560px',margin:center?'0 auto':'0'}}>{subtitle}</p>}
  </div>;
}
