import React from 'react';

//interfaceで型を外に出す
interface AppProp {
  message: string;
}
const App = ({message}: AppProp) => {
  return <div>{message}</div>;
};

export default App;
