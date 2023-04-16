import { css } from "@acab/ecsstatic";
import iconSrc from "#/assets/icon.jpg";

export function Hero(): JSX.Element {
  return (
    <div className={hero}>
      <div className={heroInner}>
        <h1 className={commentWrapper}>
          <img src={iconSrc} className={icon} />
          <div className={comment}>Hello, World!</div>
        </h1>
      </div>
    </div>
  );
}

const hero = css`
  width: 100%;
  height: 100dvh;
  padding: 3vmin;
  background-color: #fdfdfd;
`;

const heroInner = css`
  width: 100%;
  height: 100%;
  border: 2px solid #6c757d;
  border-radius: 2px;
  animation: hero-inner-in 0.75s ease-in-out;
  display: grid;
  place-items: center;

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

const commentWrapper = css`
  display: flex;
  align-items: center;
  gap: 1em;
  font-size: 2.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const icon = css`
  width: 3em;
  height: 3em;
  border-radius: 50%;
`;

const comment = css`
  padding: 0.5em;
  border: 2px solid #6c757d;
  border-radius: 8px;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border: 0.5em solid transparent;
    top: 50%;
    right: 100%;

    @media screen and (max-width: 768px) {
      top: unset;
      right: unset;
      bottom: 100%;
      left: 50%;
    }
  }

  &::before {
    border-right-color: #6c757d;
    transform: translateY(-50%);

    @media screen and (max-width: 768px) {
      border-right-color: transparent;
      border-bottom-color: #6c757d;
      transform: translateX(-50%);
    }
  }

  &::after {
    border-right-color: #fff;
    transform: translateY(-50%) translateX(3px);

    @media screen and (max-width: 768px) {
      border-right-color: transparent;
      border-bottom-color: #fff;
      transform: translateX(-50%) translateY(3px);
    }
  }
`;
