import { css } from "@acab/ecsstatic";

const title = css`
  font-size: 2rem;
`;

function App(): JSX.Element {
  return (
    <main>
      <h1 className={title}>Hello, world!</h1>
      {/* <Hero /> */}
    </main>
  );
}

export default App;
