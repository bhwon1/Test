import { BlueButton, RedInput } from "./BoardWrite.styled";
import { IBoardWriteUIProps } from './BoardWrite.types';


// 아래는 export default 와 export 를 같이 사용하는 방법 
// import qqq , { BlueButton, RedInput } from "./BoardWrite.styled";


export default function BoardWriteUI(props : IBoardWriteUIProps){

    // 자바스크립트

  return(
    // html 영역
    <>
      <div>qqq</div>
      작성자 : <RedInput type="text" onChange={props.onChangeWriter} defaultValue={props.data?.fetchBoard.writer}/><br />
      제목 : <input type="text" onChange={props.onChangeTitle} defaultValue={props.data?.fetchBoard.title}/><br />
      내용 : <input type="text" onChange={props.onChangeContents} defaultValue={props.data?.fetchBoard.contents}/><br />
      <BlueButton
        rrr='20px'
        qqq="yellow"
        zzz={props.mycolor}   
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정하기" : "등록하기"}
      </BlueButton>
    </>
  )
}