import SocialLinks from './SocialLinks';
import { portfolioData } from '../data/portfolioData';
import { LogoLM } from './LogoLM';
import VisitorCounter from './VisitorCounter';

export default function Footer() {
  const { footer } = portfolioData;

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <LogoLM size={32} />
              <span>{footer.logoName}</span>
            </div>
            <span className="footer-subtitle">{footer.subtitle}</span>
          </div>

          {/* Visitor Counter Badge */}
          <VisitorCounter />

          {/* Social Icons */}
          <SocialLinks className="footer-socials" />
        </div>

        {/* Bottom Copyright */}
        <div className="footer-bottom">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
