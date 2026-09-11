export function OfficerCard({name, company, role, photo, linkedin}) {
  const [h, setH] = React.useState(false);
  const initials = name.split(' ').map(w=>w[0]).join('').slice(0,3).toUpperCase();
  return <div onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{background:'var(--white)',border:'1px solid var(--slate-200)',borderRadius:'var(--radius-md)',padding:'var(--sp-4)',textAlign:'center',minWidth:'200px',flex:'0 0 200px',transition:'transform 0.3s var(--ease), box-shadow 0.3s var(--ease)',transform:h?'translateY(-4px)':'none',boxShadow:h?'var(--shadow-md)':'none'}}>
    <div style={{width:'80px',height:'80px',borderRadius:'50%',overflow:'hidden',margin:'0 auto var(--sp-2)',background:'var(--cloud)'}}>
      {photo ? <img src={photo} alt={name} style={{width:'100%',height:'100%',objectFit:'cover'}}></img>
        : <div style={{width:'100%',height:'100%',display:'flex',alignItems:'center',justifyContent:'center',background:'linear-gradient(135deg, var(--dark-ocean), #0e4a70)',color:'var(--white)',fontFamily:'var(--font-display)',fontSize:'22px',fontWeight:700}}>{initials}</div>}
    </div>
    <h3 style={{fontFamily:'var(--font-display)',fontSize:'15px',lineHeight:'20px',fontWeight:600,color:'var(--ink)',margin:'0 0 4px'}}>{name}</h3>
    {company && <div style={{fontSize:'13px',color:'var(--dark-ocean)',fontWeight:500,marginBottom:'2px'}}>{company}</div>}
    {role && <div style={{fontSize:'12px',color:'var(--slate-600)',marginBottom:'var(--sp-1)'}}>{role}</div>}
    {linkedin && <a href={linkedin} target="_blank" aria-label="LinkedIn" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',width:'28px',height:'28px',borderRadius:'var(--radius-sm)',background:'var(--cloud)'}}>
      <svg viewBox="0 0 24 24" style={{width:'14px',height:'14px',fill:'var(--slate-600)'}}><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    </a>}
  </div>;
}
