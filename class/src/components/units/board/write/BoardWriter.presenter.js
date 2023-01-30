import { BlueButton, RedInput } from "./BoardWrite.styled";


// 아래는 export default 와 export 를 같이 사용하는 방법 
// import qqq , { BlueButton, RedInput } from "./BoardWrite.styled";

export default function BoardWriteUI(Props){

  // 자바스크립트

  return(
    // html 영역
    <>
    <div>qqq</div>
      작성자 : <RedInput type="text" onChange={Props.onChangeWriter}/><br />
      제목 : <input type="text" onChange={Props.onChangeTitle} /><br />
      내용 : <input type="text" onChange={Props.onChangeContents}/><br />
      <BlueButton onClick={Props.onClickSubmit}>GRAPHQL-API(동기)</BlueButton>
    </>
  )
}