export function TestimonialSlider({quotes}) {
  const [i, setI] = React.useState(0);
  const n = quotes.length;
  const arrow = (dir) => <button onClick={()=>setI((i+dir+n)%n)} aria-label={dir>0?'Next':'Previous'} style={{width:'40px',height:'40px',borderRadius:'50%',border:'1.5px solid rgba(255,255,255,0.15)',background:'transparent',color:'rgba(255,255,255,0.5)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer'}}>
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">{dir>0?<polyline points="9 6 15 12 9 18"/>:<polyline points="15 18 9 12 15 6"/>}</svg></button>;
  return <div style={{maxWidth:'720px',margin:'0 auto'}}>
    <p style={{fontFamily:'var(--font-display)',fontSize:'22px',lineHeight:'36px',fontWeight:400,color:'rgba(255,255,255,0.85)',textAlign:'center',margin:'0 0 var(--sp-3)',minHeight:'108px'}}>{'\u201C'}{quotes[i]}{'\u201D'}</p>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'var(--sp-3)',marginTop:'var(--sp-6)'}}>
      {arrow(-1)}
      <div style={{display:'flex',gap:'8px'}}>
        {quotes.map((_,k)=><span key={k} onClick={()=>setI(k)} style={{width:k===i?'24px':'8px',height:'8px',borderRadius:'4px',background:k===i?'var(--flag-green)':'rgba(255,255,255,0.15)',cursor:'pointer',transition:'all 0.3s'}}></span>)}
      </div>
      {arrow(1)}
    </div>
  </div>;
}
