export default function Child1(props: any) {
  // 부모의 state 조작방법2
  const onClick = () => {
    props.setCount((prev: Number) => prev + 1);
  };
  return (
    <>
      <div>자식1 카운트{props.count}</div>
      <button onClick={onClick}>카운트 올리기!!! </button>
    </>
  );
}
