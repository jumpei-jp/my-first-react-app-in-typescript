import React from 'react';
import CounterWithReducer from './CounterWithReducer';

//interfaceで型を外に出す
interface AppProps {
  message?: string;
  description?: string;
}

//関数に対して型を指定する必要がある。
const App: React.FunctionComponent<AppProps> = ({message}) => {
  return <div>
    <CounterWithReducer />
  </div>;
};

//デフォルトとして持たせたいkey value
App.defaultProps = {
  message: 'Hello, defaultProps!',
}

export default App;
