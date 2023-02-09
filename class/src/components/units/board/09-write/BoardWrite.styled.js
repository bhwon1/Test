import styled from "@emotion/styled";

export const RedInput = styled.input`
  border-color: red;
`

export const BlueButton = styled.button`
  font-size : ${(props)=> {
    return props.rrr
  }};
  background-color: ${(props)=> {
    return props.zzz ? "yellow" : "default"
  }};
`

// const qqq = "철수"
// export default qqq
