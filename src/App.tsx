import { Characters } from "./components/Characters";
import { Counter } from "./components/Counter";
import { Forms } from "./components/Forms";
import { Login } from "./components/Login";
import { Users } from "./components/Users";
import { BasicTypes } from "./typescript/BasicTypes";
import { Functions } from "./typescript/Functions";
import { LiteralObjects } from "./typescript/LiteralObjects";

const App = () => {
  return (
    <div className="mt-2 mb-5">
      <h1>Introduccion a React</h1>
      <hr />
      <BasicTypes />
      <hr />
      <LiteralObjects />
      <hr />
      <Functions />
      <hr />
      <Counter />
      <hr />
      <Login />
      <hr />
      <Users />
      <hr />
      <Characters />
      <hr />
      <Forms />
    </div>
  );
};

export default App;
