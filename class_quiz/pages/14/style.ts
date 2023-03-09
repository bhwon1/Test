import styled from "@emotion/styled";

export const Number = styled.span`
  margin: 10px;
  cursor: pointer;
  color: ${(props) => {
    return props.color ? "green" : "yellow";
  }};
  font-size: 20px;
`;
