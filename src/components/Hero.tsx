import { css } from "@acab/ecsstatic";

export function Hero(): JSX.Element {
  return (
    <div className={hero}>
      <div className={heroInner}></div>
    </div>
  );
}

const hero = css`
  @layer base {
    width: 100%;
    height: 100dvh;
    padding: 3vmin;
    background-color: #fdfdfd;
  }
`;

const heroInner = css`
  @layer base {
    width: 100%;
    height: 100%;
    border: 2px solid #6c757d;
    border-radius: 2px;
    animation: hero-inner-in 0.75s ease-in-out;
  }

  @keyframes hero-inner-in {
    0% {
      opacity: 0;
      transform: scale(0.8);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
