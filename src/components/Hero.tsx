import { css } from "@acab/ecsstatic";
import iconSrc from "#/assets/icon.jpg";
import { breakPoints } from "#/styles/variables";

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
  display: grid;
  place-items: center;
`;

const commentWrapper = css`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-size: 5vw;

  @media screen and (max-width: ${breakPoints.md}) {
    flex-direction: column-reverse;
    font-size: 10vw;
  }
`;

const icon = css`
  width: 2.5em;
  height: 2.5em;
  border-radius: 50%;
`;

const comment = css`
  padding: 0.25em 0.5em;
  border: 2px solid #6c757d;
  border-radius: 0.25em;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    border: 0.25em solid transparent;
    top: 50%;
    right: 100%;

    @media screen and (max-width: ${breakPoints.md}) {
      top: unset;
      right: unset;
      top: 100%;
      left: 50%;
    }
  }

  &::before {
    border-right-color: #6c757d;
    transform: translateY(-50%);

    @media screen and (max-width: 768px) {
      border-right-color: transparent;
      border-top-color: #6c757d;
      transform: translateX(-50%);
    }
  }

  &::after {
    border-right-color: #fff;
    transform: translateY(-50%) translateX(3px);

    @media screen and (max-width: 768px) {
      border-right-color: transparent;
      border-top-color: #fff;
      transform: translateX(-50%) translateY(-3px);
    }
  }
`;
