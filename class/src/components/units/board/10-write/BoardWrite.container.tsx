import BoardWriteUI from "./BoardWrite.presenter"
import {useMutation} from "@apollo/client"
import { ChangeEvent , useState} from 'react'
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries"
import { useRouter } from "next/router"
import { IBoardWriteProps, IMyVariables } from "./BoardWrite.types"



export default function BoardWrite(props : IBoardWriteProps){
  const router = useRouter()
  const [mycolor, setMycolor] = useState(false)

  // 자바스크립트
  const [writer, setWriter] = useState("")
  const [title, setTitle] = useState("")
  const [contents, setContents] = useState("")
  const [나의함수] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)

  const onClickSubmit = async () => {
    console.log(router.query.number) // unddfind 이다, 이유는 주소에 number가 없기 때문에
    // const writer = "qqq"  // 이 함수에 있으면 현재 스코프
    const result = await 나의함수({
      variables: { // variables 가 $ 가 되는것 이다(역할을 해줌).
        writer,
        title,
        contents,
      }
    })
    console.log(result)
    alert(result.data.createBoard.message)
    router.push(`/10-01-typescript-boards/${result.data.createBoard.number}`)
  }

  const onClickUpdate = async () => {

    const myvariables : IMyVariables = {
      number : Number(router.query.number)
    }
    if(writer) myvariables.writer = writer //새로운 글을추가하는 방식
    if(title) myvariables.title = title 
    if(contents) myvariables.contents = contents

    console.log(router.query.number)

    // 1. 수정하기 뮤테이션 날리기 
    const result = await updateBoard({
      variables : myvariables
      })
    alert("수정하기를 클릭하셨군요")
    console.log(result)
    alert(result.data.updateBoard.message)
    router.push(`/10-01-typescript-boards/${result.data.updateBoard.number}`)
    
    // 2. 상세페이지로 이동하기
    // router.push(`/`)
  }

  const onChangeWriter =(e: ChangeEvent<HTMLInputElement>)=>{
    setWriter(e.target.value)
    if(e.target.value && title && contents){
      setMycolor(true)
    }
  }
  const onChangeTitle =(e : ChangeEvent<HTMLInputElement>)=>{
    setTitle( e.target.value)
    if(writer && e.target.value && contents){
      setMycolor(true)
    }
  }
  const onChangeContents =(e : ChangeEvent<HTMLInputElement>)=>{
    setContents (e.target.value)
    if(writer && title && e.target.value){
      setMycolor(true)
    }
  }

  
  return(
    // html 영역
    <>
      <div>rrrr</div>
      {BoardWriteUI({
        onClickSubmit : onClickSubmit,
        onClickUpdate : onClickUpdate,
        onChangeWriter : onChangeWriter,
        onChangeTitle : onChangeTitle,
        onChangeContents : onChangeContents,
        mycolor : mycolor,
        isEdit : props.isEdit,
        data : props.data
      })}
      {/* <BoardWriteUI
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}
        onChangeWriter={onChangeWriter}
        onChangeTitle={onChangeTitle}
        onChangeContents={onChangeContents}
        mycolor={mycolor}
        isEdit={props.isEdit}
        data={props.data}
      /> */}
    </>
  )
}