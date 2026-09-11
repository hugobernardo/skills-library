/* @ds-bundle: {"format":4,"namespace":"WestToWestDesignSystem_929717","components":[{"name":"InvolvedCard","sourcePath":"components/cards/InvolvedCard.jsx"},{"name":"OfficerCard","sourcePath":"components/cards/OfficerCard.jsx"},{"name":"ServiceCard","sourcePath":"components/cards/ServiceCard.jsx"},{"name":"TestimonialSlider","sourcePath":"components/cards/TestimonialSlider.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"NewsletterForm","sourcePath":"components/core/NewsletterForm.jsx"},{"name":"SectionHeader","sourcePath":"components/core/SectionHeader.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SponsorRow","sourcePath":"components/navigation/SponsorRow.jsx"}],"sourceHashes":{"components/cards/InvolvedCard.jsx":"9211e02e2c97","components/cards/OfficerCard.jsx":"f12fe6d0454c","components/cards/ServiceCard.jsx":"1d758238d38e","components/cards/TestimonialSlider.jsx":"485d7c4bf734","components/core/Button.jsx":"3df142fb64f5","components/core/NewsletterForm.jsx":"6a4637cf9e0a","components/core/SectionHeader.jsx":"e1d7e679b3da","components/navigation/Footer.jsx":"ed42aa770b6d","components/navigation/NavBar.jsx":"036b43a0c96c","components/navigation/SponsorRow.jsx":"2e09313181e3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.WestToWestDesignSystem_929717 = window.WestToWestDesignSystem_929717 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/OfficerCard.jsx
try { (() => {
function OfficerCard({
  name,
  company,
  role,
  photo,
  linkedin
}) {
  const [h, setH] = React.useState(false);
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: 'var(--white)',
      border: '1px solid var(--slate-200)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--sp-4)',
      textAlign: 'center',
      minWidth: '200px',
      flex: '0 0 200px',
      transition: 'transform 0.3s var(--ease), box-shadow 0.3s var(--ease)',
      transform: h ? 'translateY(-4px)' : 'none',
      boxShadow: h ? 'var(--shadow-md)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '80px',
      height: '80px',
      borderRadius: '50%',
      overflow: 'hidden',
      margin: '0 auto var(--sp-2)',
      background: 'var(--cloud)'
    }
  }, photo ? /*#__PURE__*/React.createElement("img", {
    src: photo,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, var(--dark-ocean), #0e4a70)',
      color: 'var(--white)',
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      fontWeight: 700
    }
  }, initials)), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '15px',
      lineHeight: '20px',
      fontWeight: 600,
      color: 'var(--ink)',
      margin: '0 0 4px'
    }
  }, name), company && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '13px',
      color: 'var(--dark-ocean)',
      fontWeight: 500,
      marginBottom: '2px'
    }
  }, company), role && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '12px',
      color: 'var(--slate-600)',
      marginBottom: 'var(--sp-1)'
    }
  }, role), linkedin && /*#__PURE__*/React.createElement("a", {
    href: linkedin,
    target: "_blank",
    "aria-label": "LinkedIn",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '28px',
      height: '28px',
      borderRadius: 'var(--radius-sm)',
      background: 'var(--cloud)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    style: {
      width: '14px',
      height: '14px',
      fill: 'var(--slate-600)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
  }))));
}
Object.assign(__ds_scope, { OfficerCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/OfficerCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceCard.jsx
try { (() => {
function ServiceCard({
  icon,
  title,
  children
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      background: 'var(--white)',
      border: h ? '1px solid transparent' : '1px solid var(--slate-200)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--sp-6) var(--sp-4)',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform 0.3s var(--ease), box-shadow 0.3s var(--ease), border-color 0.3s',
      transform: h ? 'translateY(-4px)' : 'none',
      boxShadow: h ? 'var(--shadow-lg)' : 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '3px',
      background: 'var(--flag-green)',
      transform: h ? 'scaleX(1)' : 'scaleX(0)',
      transformOrigin: 'left',
      transition: 'transform 0.4s var(--ease)'
    }
  }), icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: '48px',
      height: '48px',
      background: 'rgba(11,57,88,0.06)',
      borderRadius: 'var(--radius-sm)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 'var(--sp-3)',
      color: 'var(--dark-ocean)'
    }
  }, icon), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 600,
      color: 'var(--ink)',
      margin: '0 0 var(--sp-2)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-600)',
      fontSize: '16px',
      lineHeight: '26px',
      margin: 0
    }
  }, children));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/TestimonialSlider.jsx
try { (() => {
function TestimonialSlider({
  quotes
}) {
  const [i, setI] = React.useState(0);
  const n = quotes.length;
  const arrow = dir => /*#__PURE__*/React.createElement("button", {
    onClick: () => setI((i + dir + n) % n),
    "aria-label": dir > 0 ? 'Next' : 'Previous',
    style: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      border: '1.5px solid rgba(255,255,255,0.15)',
      background: 'transparent',
      color: 'rgba(255,255,255,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    width: "18",
    height: "18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, dir > 0 ? /*#__PURE__*/React.createElement("polyline", {
    points: "9 6 15 12 9 18"
  }) : /*#__PURE__*/React.createElement("polyline", {
    points: "15 18 9 12 15 6"
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '720px',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '22px',
      lineHeight: '36px',
      fontWeight: 400,
      color: 'rgba(255,255,255,0.85)',
      textAlign: 'center',
      margin: '0 0 var(--sp-3)',
      minHeight: '108px'
    }
  }, '\u201C', quotes[i], '\u201D'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'var(--sp-3)',
      marginTop: 'var(--sp-6)'
    }
  }, arrow(-1), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '8px'
    }
  }, quotes.map((_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    onClick: () => setI(k),
    style: {
      width: k === i ? '24px' : '8px',
      height: '8px',
      borderRadius: '4px',
      background: k === i ? 'var(--flag-green)' : 'rgba(255,255,255,0.15)',
      cursor: 'pointer',
      transition: 'all 0.3s'
    }
  }))), arrow(1)));
}
Object.assign(__ds_scope, { TestimonialSlider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/TestimonialSlider.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function Button({
  variant = 'primary',
  tone = 'light',
  href = '#',
  onClick,
  children
}) {
  const [h, setH] = React.useState(false);
  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 'var(--sp-1)',
    padding: '14px 28px',
    fontSize: '14px',
    lineHeight: '16px',
    fontWeight: 600,
    fontFamily: 'var(--font-body)',
    borderRadius: 'var(--radius-sm)',
    textDecoration: 'none',
    cursor: 'pointer',
    transition: 'all 0.25s var(--ease)',
    transform: h ? 'translateY(-1px)' : 'none'
  };
  let s;
  if (variant === 'primary' && tone === 'light') s = {
    ...base,
    background: h ? 'var(--dark-ocean-hover)' : 'var(--dark-ocean)',
    color: 'var(--white)',
    border: 'none',
    boxShadow: h ? '0 4px 14px rgba(11,57,88,0.25)' : 'none'
  };else if (variant === 'primary') s = {
    ...base,
    background: h ? 'var(--flag-green-hover)' : 'var(--flag-green)',
    color: 'var(--ink)',
    border: 'none',
    boxShadow: h ? '0 4px 20px rgba(54,208,163,0.3)' : 'none'
  };else if (tone === 'light') s = {
    ...base,
    background: h ? 'var(--dark-ocean)' : 'transparent',
    color: h ? 'var(--white)' : 'var(--dark-ocean)',
    border: '1.5px solid var(--dark-ocean)'
  };else s = {
    ...base,
    background: h ? 'rgba(255,255,255,0.08)' : 'transparent',
    color: 'var(--white)',
    border: h ? '1.5px solid rgba(255,255,255,0.4)' : '1.5px solid rgba(255,255,255,0.25)'
  };
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    style: s,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false)
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/cards/InvolvedCard.jsx
try { (() => {
function InvolvedCard({
  title,
  ctaLabel,
  href = '#',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--cloud)',
      border: '1px solid var(--slate-200)',
      borderRadius: 'var(--radius-md)',
      padding: 'var(--sp-6)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 600,
      color: 'var(--ink)',
      margin: '0 0 var(--sp-2)'
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--slate-600)',
      fontSize: '16px',
      lineHeight: '26px',
      margin: '0 0 var(--sp-4)',
      flex: 1
    }
  }, children), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    href: href
  }, ctaLabel));
}
Object.assign(__ds_scope, { InvolvedCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/InvolvedCard.jsx", error: String((e && e.message) || e) }); }

// components/core/NewsletterForm.jsx
try { (() => {
function NewsletterForm({
  heading = 'Stay Up-to-Date',
  text = 'Get updates on news, events and relevant content from our blog.',
  onSubmit
}) {
  const [state, setState] = React.useState('idle');
  const inp = {
    flex: 1,
    minWidth: 0,
    padding: '12px 16px',
    background: 'rgba(255,255,255,0.08)',
    border: '1.5px solid rgba(255,255,255,0.15)',
    borderRadius: 'var(--radius-sm)',
    color: 'var(--white)',
    fontSize: '14px',
    fontFamily: 'var(--font-body)',
    outline: 'none'
  };
  const submit = e => {
    e.preventDefault();
    setState('success');
    onSubmit && onSubmit();
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--dark-ocean)',
      padding: 'var(--sp-6) var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 'var(--sp-6)',
      flexWrap: 'wrap',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      color: 'var(--white)',
      fontFamily: 'var(--font-display)',
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: 600,
      margin: '0 0 var(--sp-1)'
    }
  }, heading), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'rgba(255,255,255,0.6)',
      fontSize: '15px',
      margin: 0
    }
  }, text)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      maxWidth: '600px',
      minWidth: '280px'
    }
  }, state === 'success' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--flag-green)',
      color: 'var(--ink)',
      padding: 'var(--sp-2)',
      borderRadius: 'var(--radius-sm)',
      fontWeight: 600,
      marginBottom: 'var(--sp-2)',
      fontSize: '14px'
    }
  }, "Thanks! Please check your email to confirm your subscription."), state === 'error' && /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--error-bg)',
      color: 'var(--error-fg)',
      padding: 'var(--sp-2)',
      borderRadius: 'var(--radius-sm)',
      fontSize: '14px',
      marginBottom: 'var(--sp-2)',
      border: '1px solid var(--error-border)'
    }
  }, "Something went wrong. Please check your details and try again."), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      gap: 'var(--sp-1)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("input", {
    style: inp,
    placeholder: "First Name",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    style: inp,
    placeholder: "Last Name",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    style: inp,
    type: "email",
    placeholder: "E-mail",
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      padding: '12px 24px',
      background: 'var(--flag-green)',
      color: 'var(--ink)',
      fontSize: '14px',
      fontWeight: 600,
      fontFamily: 'var(--font-body)',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      border: 'none',
      cursor: 'pointer'
    }
  }, "Subscribe")))));
}
Object.assign(__ds_scope, { NewsletterForm });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/NewsletterForm.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
  dark = false
}) {
  const tick = {
    content: '""',
    width: '24px',
    height: '2px',
    background: 'var(--flag-green)',
    borderRadius: '1px',
    display: 'inline-block'
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--sp-8)',
      textAlign: center ? 'center' : 'left'
    }
  }, eyebrow && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--sp-1)',
      fontSize: '14px',
      fontWeight: 600,
      color: dark ? 'var(--flag-green)' : 'var(--dark-ocean)',
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      marginBottom: 'var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tick
  }), eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--h2-size)',
      lineHeight: 'var(--h2-line)',
      fontWeight: 700,
      color: dark ? 'var(--white)' : 'var(--ink)',
      marginBottom: subtitle ? 'var(--sp-2)' : 0,
      marginTop: 0
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '18px',
      lineHeight: '28px',
      color: dark ? 'rgba(255,255,255,0.55)' : 'var(--slate-600)',
      maxWidth: '560px',
      margin: center ? '0 auto' : '0'
    }
  }, subtitle));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
function Footer({
  logo,
  description = 'Bridging Portugal and Silicon Valley.',
  columns = [],
  bottomNote
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--ink)',
      color: 'var(--white)',
      padding: 'var(--sp-6) var(--sp-4) var(--sp-3)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.5fr repeat(' + Math.max(columns.length, 1) + ', 1fr)',
      gap: 'var(--sp-6)',
      paddingBottom: 'var(--sp-6)',
      borderBottom: '1px solid rgba(255,255,255,0.08)',
      marginBottom: 'var(--sp-4)'
    }
  }, /*#__PURE__*/React.createElement("div", null, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "West to West",
    style: {
      height: '24px',
      marginBottom: 'var(--sp-1)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '16px',
      letterSpacing: '0.04em'
    }
  }, "WEST TO WEST"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '15px',
      color: 'rgba(255,255,255,0.5)',
      marginTop: 'var(--sp-2)',
      lineHeight: '24px',
      maxWidth: '280px'
    }
  }, description)), columns.map((col, k) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("h4", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: '13px',
      fontWeight: 600,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'rgba(255,255,255,0.35)',
      margin: '0 0 var(--sp-2)'
    }
  }, col.title), col.links.map((l, j) => /*#__PURE__*/React.createElement("a", {
    key: j,
    href: l.href || '#',
    style: {
      display: 'block',
      fontSize: '14px',
      color: 'rgba(255,255,255,0.6)',
      padding: '4px 0',
      textDecoration: 'none'
    }
  }, l.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: 'var(--sp-2)'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: '13px',
      color: 'rgba(255,255,255,0.3)',
      margin: 0
    }
  }, bottomNote || '\u00A9 ' + new Date().getFullYear() + ' West to West. All rights reserved.'))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavBar({
  logo,
  links = [],
  ctaLabel = 'Subscribe',
  ctaHref = '#',
  scrolled = false
}) {
  const linkColor = scrolled ? 'var(--slate-600)' : 'var(--white)';
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: scrolled ? 'rgba(255,255,255,0.96)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? '0 1px 0 var(--slate-200)' : 'none',
      transition: 'background 0.35s var(--ease), box-shadow 0.35s var(--ease)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 var(--sp-4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '72px'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, logo ? /*#__PURE__*/React.createElement("img", {
    src: logo,
    alt: "West to West",
    style: {
      height: '36px',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      letterSpacing: '0.04em',
      color: scrolled ? 'var(--ink)' : 'var(--white)'
    }
  }, "WEST TO WEST")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--sp-4)'
    }
  }, links.map((l, k) => /*#__PURE__*/React.createElement("a", {
    key: k,
    href: l.href || '#',
    style: {
      fontSize: '14px',
      fontWeight: 500,
      color: linkColor,
      letterSpacing: '0.01em',
      textDecoration: 'none'
    }
  }, l.label)), /*#__PURE__*/React.createElement("a", {
    href: ctaHref,
    style: {
      padding: '10px 20px',
      background: scrolled ? 'var(--dark-ocean)' : 'rgba(255,255,255,0.12)',
      color: 'var(--white)',
      borderRadius: 'var(--radius-sm)',
      fontSize: '14px',
      fontWeight: 600,
      textDecoration: 'none'
    }
  }, ctaLabel))));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SponsorRow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function SponsorRow({
  logos = []
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'var(--sp-8)',
      flexWrap: 'wrap'
    }
  }, logos.map((l, k) => /*#__PURE__*/React.createElement(SponsorLogo, _extends({
    key: k
  }, l))));
}
function SponsorLogo({
  src,
  alt,
  height
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      opacity: h ? 0.8 : 0.35,
      transition: 'opacity 0.3s',
      height: height || '48px',
      width: 'auto',
      display: 'block'
    }
  });
}
Object.assign(__ds_scope, { SponsorRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SponsorRow.jsx", error: String((e && e.message) || e) }); }

__ds_ns.InvolvedCard = __ds_scope.InvolvedCard;

__ds_ns.OfficerCard = __ds_scope.OfficerCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.TestimonialSlider = __ds_scope.TestimonialSlider;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.NewsletterForm = __ds_scope.NewsletterForm;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SponsorRow = __ds_scope.SponsorRow;

})();
