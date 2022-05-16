//コンポーネントの実装
import React, { useEffect, useRef, useState } from 'react'; //useStateで状態を管理

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

  const renderTimes = useRef(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  const ref = useRef<HTMLInputElement>(null!);
  const focusInput = () => {
  ref.current?.focus(); //nullかもしれないのでクエスチョンマークを追加

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times!</div>
      <input ref={ref} type="text" />
      <button onClick={focusInput}>Click Me!</button>
    </div>
  );
};

export default Counter;