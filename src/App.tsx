import React from 'react';
import Counter from './Counter';

//interfaceで型を外に出す
interface AppProps {
  message?: string;
  description?: string;
}

//関数に対して型を指定する必要がある。
const App: React.FunctionComponent<AppProps> = ({message}) => {
  return <div>
    <Counter />
  </div>;
};

//デフォルトとして持たせたいkey value
App.defaultProps = {
  message: 'Hello, defaultProps!',
}

export default App;
