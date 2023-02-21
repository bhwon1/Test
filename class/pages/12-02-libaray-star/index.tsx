import { useState } from "react";
import styled from "@emotion/styled";
import { Rate } from "antd";

const MyStar = styled(Rate)`
  color: blue;
  font-size: 50px;
`;

export default function LibarayIconPage() {
  const [value, setValue] = useState(3);

  const qqq = (value: number) => {
    setValue(value);
  };

  return (
    <>
      <MyStar onChange={qqq} />
      <Rate allowHalf defaultValue={2.5} />
    </>
  );
}
