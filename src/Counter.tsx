//コンポーネントの実装
import React, { useState } from 'react'; //useStateで状態を管理

//カウンターコンポーネント(FunctionComponentをFC)
const Counter: React.FC<{}> = () => {
  const initialValue: any = 0;
  const [value, setValue] = useState<number>(initialValue); //useStateを使って初期化

  //+1ボタンを押した時の動作
  const increment = () => {
    setValue(prevState => prevState + 1);
  };

  //-1ボタンを押した時の動作
  const decrement = () => {
    setValue(prevState => prevState - 1);
  };

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;