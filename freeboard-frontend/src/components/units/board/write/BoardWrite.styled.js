import styled from '@emotion/styled'


export const Container = styled.div`
  width : 996px ;
  margin : 0 auto ; 
`

export const TitleWrap= styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`
export const TitleBox= styled.div`
  width: 49%;
`

export const Title= styled.h1`
  font-size : 36px; 
  text-align : center;
  padding : 100px 0 10px 0;
`

export const Title1 = styled.h2`
  width : 100%;
  font-size : 16px; 
  padding : 16px 0;
  
`

export const Title1Input = styled.input`
  width : 100%; 
  height : 52px; 
  padding : 0 16px;
  box-sizing: border-box;
  margin : 0;
`
export const Error = styled.h2`
  color : red;
  font-size : 14px;
`

export const Content = styled.h2`
  width : 100% ;
  font-size : 16px; 
  padding : 40px 0 16px 0;
`

export const ContentInput = styled.textarea`
  width : 100%; 
  height : 480px;  
  padding :  16px; 
  box-sizing: border-box;
`

export const Addr = styled.h2`
  width : 100% ;
  font-size : 16px; 
  padding : 20px 0;
`

export const AddrWrap = styled.div`
  display : flex; 
  align-items : center;
`

export const AddrInputNumber = styled.input`
  width : 77px ;
  height : 52px; 
  padding : 0 16px; 
  box-sizing: border-box;
`
export const AddrButton = styled.button`
  width : 124px ;
  height : 52px; 
  font-size : 16px;
  background : #000;
  color : #fff;
  margin : 0 0 0 20px;
  border-radius: 4px;
  cursor: pointer;
`

export const AddrInput = styled.input`
  width : 100%; 
  height : 52px;  
  margin : 16px 0 0 0;
  padding : 0 16px; 
  box-sizing: border-box;
`

export const RadioInput = styled.input`
  cursor: pointer;
`

export const GalleryBox = styled.div`
  width: 100%;
  display : flex; 
`

export const Gallery = styled.a`
  background: #ddd;
  width: 78px;
  height: 78px;
  margin : 0 20px 0 0;
  cursor: pointer;
  display: flex;
  justify-content : center;
  align-items: center;
`

export const Box = styled.div`
  width: 100%;
  display: flex; 
  justify-content: center;
  padding : 50px 0 ;
`

export const CheckBox = styled.button`
  padding: 14px 60px;
  background : ${ (props) => 
  { return props.success ? "#ffd600" : "ddd"}};
  border : 0;
  font-size : 16px;
  font-weight: 700; 
  display : flex;
  border-radius: 4px;
  cursor: pointer;
`
export const RadioBox = styled.div`

`

export const RadioLabel = styled.label`
  margin-left: 8px;
  margin-right: 20px;
  font-weight: 500;
  cursor: pointer;
`

