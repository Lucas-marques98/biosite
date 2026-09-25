import { portfolioData } from '../data/portfolioData';

export default function Technologies() {
  const { technologies } = portfolioData;

  const techList = [
    { name: "React", key: "react" },
    { name: "React Native", key: "reactnative" },
    { name: "Expo", key: "expo" },
    { name: "TypeScript", key: "typescript" },
    { name: "JavaScript", key: "javascript" },
    { name: "Supabase", key: "supabase" },
    { name: "Node.js", key: "nodejs" },
    { name: "Python", key: "python" },
    { name: "HTML", key: "html5" },
    { name: "CSS", key: "css3" },
    { name: "Figma", key: "figma" },
  ];

  const renderTechIcon = (key) => {
    switch (key) {
      case 'react':
      case 'reactnative':
        return (
          <svg viewBox="-11.5 -10.23174 23 20.46348" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
            <g stroke="#61DAFB" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2" />
              <ellipse rx="11" ry="4.2" transform="rotate(60)" />
              <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
          </svg>
        );
      case 'expo':
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" color="#F5F8FC">
            <path d="M12 2c-1.2 0-1.8.6-2.5 1.8L1 19.5c-.5 1 .2 2 1.3 2h1.5L12 7l8.2 14.5h1.5c1.1 0 1.8-1 1.3-2L14.5 3.8C13.8 2.6 13.2 2 12 2z" />
          </svg>
        );
      case 'typescript':
        return (
          <svg viewBox="0 0 24 24" fill="#3178C6">
            <rect width="24" height="24" rx="4" fill="#3178C6" />
            <path d="M12.5 16.5h-2V10h-2V8.5h6V10h-2v6.5zm3.5-1.2c.4.4.9.7 1.6.7.7 0 1.2-.3 1.2-.8 0-.5-.4-.7-1.3-1-1.3-.4-2-.9-2-2 0-1.2 1-2.1 2.5-2.1 1 0 1.8.3 2.3.8l-.7 1.1c-.4-.4-.9-.6-1.5-.6-.7 0-1.1.3-1.1.7 0 .4.4.6 1.2.9 1.4.5 2.1 1 2.1 2.1 0 1.3-1 2.2-2.7 2.2-1.2 0-2.1-.4-2.7-1l.7-1z" fill="#FFFFFF" />
          </svg>
        );
      case 'javascript':
        return (
          <svg viewBox="0 0 24 24" fill="#F7DF1E">
            <rect width="24" height="24" rx="4" fill="#F7DF1E" />
            <path d="M7 17.5c.7.4 1.5.6 2.3.6 1.3 0 2.2-.6 2.2-2.3V8.5H9.3V15.7c0 .7-.3 1-1 1-.5 0-.9-.1-1.3-.3v1.1zm6.5-1.2c.7.5 1.6.8 2.6.8 1.4 0 2.3-.7 2.3-1.8 0-1.1-.7-1.7-2.1-2.2-1.1-.4-1.6-.7-1.6-1.3 0-.6.5-1 1.4-1 .8 0 1.4.3 1.9.6l.6-1.3c-.6-.4-1.4-.6-2.4-.6-1.7 0-2.6.9-2.6 2.1 0 1.1.7 1.7 2 2.1 1.2.5 1.7.8 1.7 1.4 0 .7-.6 1.1-1.6 1.1-1 0-1.8-.4-2.4-.9l-.8 1.1z" fill="#000000" />
          </svg>
        );
      case 'supabase':
        return (
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M12.923 23.013c-.66.84-2.03.374-2.03-.692v-8.878h-8.08c-.99 0-1.535-1.15-.9-1.918L11.077.987c.66-.84 2.03-.374 2.03.692v8.878h8.08c.99 0 1.535 1.15.9 1.918L12.923 23.013z" fill="#3ECF8E" />
          </svg>
        );
      case 'nodejs':
        return (
          <svg viewBox="0 0 24 24" fill="#5FA04E">
            <path d="M12 2L2 7.78v11.55L12 25l10-5.67V7.78L12 2zm-1.1 17.84l-5.6-3.23V10.1l5.6 3.23v6.51zm1.1-7.84l-5.6-3.24L12 5.53l5.6 3.23-5.6 3.24zm6.7 4.61l-5.6 3.23v-6.51l5.6-3.23v6.51z" />
          </svg>
        );
      case 'python':
        return (
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M11.87 2c-5.18 0-4.86 2.25-4.86 2.25l.01 2.33h4.94v.7H5.06S2 6.93 2 12.14c0 5.2 2.67 5.01 2.67 5.01h1.59v-2.24s-.09-2.67 2.63-2.67h4.52s2.54.04 2.54-2.48V4.48S16.48 2 11.87 2zm-2.66 1.48c.51 0 .93.42.93.93s-.42.93-.93.93-.93-.42-.93-.93.42-.93.93-.93z" fill="#3776AB" />
            <path d="M12.13 22c5.18 0 4.86-2.25 4.86-2.25l-.01-2.33H12.04v-.7h6.9s3.06.35 3.06-4.86c0-5.2-2.67-5.01-2.67-5.01h-1.59v2.24s.09 2.67-2.63 2.67h-4.52s-2.54-.04-2.54 2.48v5.27S7.52 22 12.13 22zm2.66-1.48c-.51 0-.93-.42-.93-.93s.42-.93.93-.93.93.42.93.93-.42.93-.93.93z" fill="#FFD43B" />
          </svg>
        );
      case 'html5':
        return (
          <svg viewBox="0 0 24 24" fill="#E34F26">
            <path d="M2.5 2l1.7 19.3L12 24l7.8-2.7L21.5 2H2.5zm15.4 6.7H8.3l.3 3.3h9l-.7 7.7-4.9 1.4-4.9-1.4-.3-3.7h2.4l.2 1.9 2.6.7 2.6-.7.3-3.6H6.1L5.3 5.4h13l-.4 3.3z" />
          </svg>
        );
      case 'css3':
        return (
          <svg viewBox="0 0 24 24" fill="#1572B6">
            <path d="M2.5 2l1.7 19.3L12 24l7.8-2.7L21.5 2H2.5zm14.7 6.7h-8.8l.2 2.7h8.4l-.7 7.7-4.3 1.2-4.3-1.2-.3-3.2h2.4l.2 1.6 2 .5 2-.5.2-2.7H6.1L5.3 5.4h12.3l-.4 3.3z" />
          </svg>
        );
      case 'figma':
        return (
          <svg viewBox="0 0 24 24" fill="none">
            <path d="M8 24c2.2 0 4-1.8 4-4v-4H8c-2.2 0-4 1.8-4 4s1.8 4 4 4z" fill="#0ACF83" />
            <path d="M4 12c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#A259FF" />
            <path d="M4 4c0-2.2 1.8-4 4-4h4v8H8c-2.2 0-4-1.8-4-4z" fill="#F24E1E" />
            <path d="M12 0h4c2.2 0 4 1.8 4 4s-1.8 4-4 4h-4V0z" fill="#FF7262" />
            <path d="M20 12c0 2.2-1.8 4-4 4s-4-1.8-4-4 1.8-4 4-4 4 1.8 4 4z" fill="#1ABCFE" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="section" id="tecnologias">
      <div className="container">
        {/* Section Header Split */}
        <div className="section-header-split">
          <div className="section-header-left">
            <div className="badge-pill">
              <span className="badge-pill-dot" />
              <span>{technologies.label}</span>
            </div>
            <h2 className="section-title">
              Ferramentas que <br />
              transformam ideias
            </h2>
          </div>
          <div className="section-header-right">
            <p>{technologies.description}</p>
          </div>
        </div>

        {/* Tech Grid Row */}
        <div className="tech-grid">
          {techList.map((tech) => (
            <div key={tech.name} className="tech-card" title={tech.name}>
              <div className="tech-icon-wrap">{renderTechIcon(tech.key)}</div>
              <span className="tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
