import styled from "@emotion/styled";

const Wraper = styled.div`
  width: 100%;
  height: 50px;
  background: green;
`;

export default function LayoutFooter() {
  return (
    <>
      <Wraper>여기는 푸터입니다.</Wraper>
    </>
  );
}
