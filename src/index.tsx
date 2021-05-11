import { h, render } from "preact";
import type { FunctionComponent } from "preact";

const App: FunctionComponent = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
    </div>
  );
};

render(<App />, document.body);
