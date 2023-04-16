import { css } from "@acab/ecsstatic";
import iconSrc from "#/assets/icon.jpg";
import { breakPoints } from "#/styles/variables";

export function Hero(): JSX.Element {
  return (
    <div className={hero}>
      <div className={content}>
        <img src={iconSrc} className={icon} />
        <hgroup className={nameGroup}>
          <h1>Shuntaro Nishizawa</h1>
          <div className={divider} />
          <p className={aka}>しゅん / shun</p>
        </hgroup>
        <p className={attribution}>
          <span>Kosen Student</span>
          <span>&</span>
          <span>“Yuruhuwa” Web App Developer</span>
        </p>
      </div>
    </div>
  );
}

const hero = css`
  width: 100%;
  min-height: 100dvh;
  padding: 3vmin;
  display: grid;
  place-items: center;
  background-color: #fdfdfd;
`;

const content = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25em;
  font-size: 8vw;
  text-align: center;

  @media screen and (min-width: ${breakPoints.lg}) {
    font-size: 4vw;
  }
`;

const icon = css`
  width: 5em;
  height: 5em;
  border-radius: 50%;
`;

const nameGroup = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const divider = css`
  width: 80%;
  height: 1px;
  background-color: #000;
`;

const aka = css`
  font-size: 0.5em;
`;

const attribution = css`
  font-size: 0.8em;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 0.25em;
`;
