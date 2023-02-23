import { Rate } from "antd";
import { useState } from "react";

export default function AntdPage() {
  const StarPoint = [1, 2, 3, 4, 5];
  const [point, setPoint] = useState(0);

  const onClickPoint = (num) => {
    alert(`${point}점`);
    setPoint(num);
  };

  return (
    <>
      <div active={num <= point} onClick={() => onClickPoint(num)}>
        <Rate tooltips={StarPoint} value={point} />
      </div>
      <div>{point}점</div>
    </>
  );
}
