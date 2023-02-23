import styled from "@emotion/styled";

const Wraper = styled.div`
  width: 100%;
  height: 100px;
  background: yellow;
`;

export default function LayoutBanner() {
  return (
    <>
      <Wraper>여기는 배너입니다. </Wraper>
    </>
  );
}
