export function ServiceCard({icon, title, children}) {
  const [h, setH] = React.useState(false);
  return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:'var(--white)',border:h?'1px solid transparent':'1px solid var(--slate-200)',borderRadius:'var(--radius-md)',padding:'var(--sp-6) var(--sp-4)',position:'relative',overflow:'hidden',transition:'transform 0.3s var(--ease), box-shadow 0.3s var(--ease), border-color 0.3s',transform:h?'translateY(-4px)':'none',boxShadow:h?'var(--shadow-lg)':'none'}}>
    <div style={{position:'absolute',top:0,left:0,right:0,height:'3px',background:'var(--flag-green)',transform:h?'scaleX(1)':'scaleX(0)',transformOrigin:'left',transition:'transform 0.4s var(--ease)'}}></div>
    {icon && <div style={{width:'48px',height:'48px',background:'rgba(11,57,88,0.06)',borderRadius:'var(--radius-sm)',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'var(--sp-3)',color:'var(--dark-ocean)'}}>{icon}</div>}
    <h3 style={{fontFamily:'var(--font-display)',fontSize:'24px',lineHeight:'32px',fontWeight:600,color:'var(--ink)',margin:'0 0 var(--sp-2)'}}>{title}</h3>
    <p style={{color:'var(--slate-600)',fontSize:'16px',lineHeight:'26px',margin:0}}>{children}</p>
  </div>;
}
