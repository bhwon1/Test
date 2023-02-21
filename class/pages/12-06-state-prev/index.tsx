import { useState } from "react";

export default function CounterStatePage() {
  const [count, setCount] = useState(0); // 기존방식 : let count = 0

  function onClickCountUp() {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    // prev 는 임시저장공간에서 가지고 온다.
    // error 는 아에 빨간줄
    // bug 는 결과가 이상할때
    // exception 은 try, catch 에 들어온것들
  }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
    </>
  );
}
