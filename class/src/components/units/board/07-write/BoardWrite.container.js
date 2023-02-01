import BoardWriteUI from "./BoardWriter.presenter"
import {useMutation} from "@apollo/client"
import {useState} from 'react'
import { CREATE_BOARD } from "./BoardWrite.queries"

export default function BoardWrite(props){

  const [mycolor, setMycolor] = useState(false)

  // 자바스크립트
  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const [나의함수] = useMutation(CREATE_BOARD)

  const onClickSubmit = async () => {
    // const writer = "qqq"  // 이 함수에 있으면 현재 스코프
    const result = await 나의함수({
      variables: { // variables 가 $ 가 되는것 이다(역할을 해줌).
        writer: writer,
        title: title,
        contents: contents
      }
    })
    alert(result.data.createBoard.message)
  }

  const onChangeWriter =(e)=>{
    setWriter(e.target.value)
    if(e.target.value && title && contents){
      setMycolor(true)
    }
  }
  const onChangeTitle =(e)=>{
    setTitle( e.target.value)
    if(writer && e.target.value && contents){
      setMycolor(true)
    }
  }
  const onChangeContents =(e)=>{
    setContents (e.target.value)
    if(writer && title && e.target.value){
      setMycolor(true)
    }
  }

  
  return(
    // html 영역
    <>
      <div>rrrr</div>
      <BoardWriteUI 
        onClickSubmit={onClickSubmit}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        mycolor={mycolor}
      />
    </>
  )
}