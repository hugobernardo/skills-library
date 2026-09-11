export function SponsorRow({logos=[]}) {
  return <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'var(--sp-8)',flexWrap:'wrap'}}>
    {logos.map((l,k)=><SponsorLogo key={k} {...l}/>)}
  </div>;
}
function SponsorLogo({src, alt, height}) {
  const [h, setH] = React.useState(false);
  return <img src={src} alt={alt} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)} style={{opacity:h?0.8:0.35,transition:'opacity 0.3s',height:height||'48px',width:'auto',display:'block'}}></img>;
}
