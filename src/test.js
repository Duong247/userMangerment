

import {UserContext} from './Component1'
import { useContext } from "react";

function Component2() {
  const user = useContext(UserContext);

  return (
    <>
      <h1>Component 2</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </>
  );
}


export default Component2

