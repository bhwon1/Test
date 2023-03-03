import styled from "@emotion/styled";

const Wraper = styled.div`
  width: 100%;
  height: 50px;
  background: red;
`;

export default function LayoutHeader() {
  return (
    <>
      <Wraper>여기는 헤더입니다.</Wraper>
    </>
  );
}
