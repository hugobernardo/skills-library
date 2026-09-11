export function NewsletterForm({heading='Stay Up-to-Date', text='Get updates on news, events and relevant content from our blog.', onSubmit}) {
  const [state, setState] = React.useState('idle');
  const inp = {flex:1,minWidth:0,padding:'12px 16px',background:'rgba(255,255,255,0.08)',border:'1.5px solid rgba(255,255,255,0.15)',borderRadius:'var(--radius-sm)',color:'var(--white)',fontSize:'14px',fontFamily:'var(--font-body)',outline:'none'};
  const submit = (e)=>{e.preventDefault();setState('success');onSubmit&&onSubmit();};
  return <div style={{background:'var(--dark-ocean)',padding:'var(--sp-6) var(--sp-4)'}}>
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'var(--sp-6)',flexWrap:'wrap',maxWidth:'var(--container-max)',margin:'0 auto'}}>
      <div><h3 style={{color:'var(--white)',fontFamily:'var(--font-display)',fontSize:'24px',lineHeight:'32px',fontWeight:600,margin:'0 0 var(--sp-1)'}}>{heading}</h3>
      <p style={{color:'rgba(255,255,255,0.6)',fontSize:'15px',margin:0}}>{text}</p></div>
      <div style={{flex:1,maxWidth:'600px',minWidth:'280px'}}>
        {state==='success' && <div style={{background:'var(--flag-green)',color:'var(--ink)',padding:'var(--sp-2)',borderRadius:'var(--radius-sm)',fontWeight:600,marginBottom:'var(--sp-2)',fontSize:'14px'}}>Thanks! Please check your email to confirm your subscription.</div>}
        {state==='error' && <div style={{background:'var(--error-bg)',color:'var(--error-fg)',padding:'var(--sp-2)',borderRadius:'var(--radius-sm)',fontSize:'14px',marginBottom:'var(--sp-2)',border:'1px solid var(--error-border)'}}>Something went wrong. Please check your details and try again.</div>}
        <form onSubmit={submit} style={{display:'flex',gap:'var(--sp-1)',flexWrap:'wrap'}}>
          <input style={inp} placeholder="First Name" required></input>
          <input style={inp} placeholder="Last Name" required></input>
          <input style={inp} type="email" placeholder="E-mail" required></input>
          <button type="submit" style={{padding:'12px 24px',background:'var(--flag-green)',color:'var(--ink)',fontSize:'14px',fontWeight:600,fontFamily:'var(--font-body)',borderRadius:'var(--radius-sm)',whiteSpace:'nowrap',border:'none',cursor:'pointer'}}>Subscribe</button>
        </form>
      </div>
    </div>
  </div>;
}
