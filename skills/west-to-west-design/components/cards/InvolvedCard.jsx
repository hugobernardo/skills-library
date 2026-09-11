import {Button} from '../core/Button.jsx';
export function InvolvedCard({title, ctaLabel, href='#', children}) {
  return <div style={{background:'var(--cloud)',border:'1px solid var(--slate-200)',borderRadius:'var(--radius-md)',padding:'var(--sp-6)',display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
    <h3 style={{fontFamily:'var(--font-display)',fontSize:'24px',lineHeight:'32px',fontWeight:600,color:'var(--ink)',margin:'0 0 var(--sp-2)'}}>{title}</h3>
    <p style={{color:'var(--slate-600)',fontSize:'16px',lineHeight:'26px',margin:'0 0 var(--sp-4)',flex:1}}>{children}</p>
    <Button variant="outline" href={href}>{ctaLabel}</Button>
  </div>;
}
