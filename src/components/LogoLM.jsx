import logo from '../assets/logo-lm.svg';

export function LogoLM({ size = 34 }) {
  return (
    <img
      src={logo}
      width={size}
      height={size}
      className="logo-lm-svg"
      alt="Lucas Marques Logo"
      decoding="async"
    />
  );
}
