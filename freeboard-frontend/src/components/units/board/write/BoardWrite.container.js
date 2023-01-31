import { useRouter } from 'next/router';
import {useState} from 'react'
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD } from './BaordWrite.mutation';



export default function BoardWrite(){

  const router = useRouter()

  const [createBoard] = useMutation(CREATE_BOARD)
  
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");

  const [idError, setIdError] = useState("")
  const [pwError, setPwError] = useState("")
  const [writerError, setWriterErrorError] = useState("")
  const [contentError, setContentErrorError] = useState("")

  function onChangeId (e){
    setId(e.target.value);
    if(e.target.value !== ""){
      setIdError("")
    }
  }
  function onChangePw (e){
    setPw(e.target.value);
    if(e.target.value !== ""){
      setPwError("")
    }
  }
  function onChangeWriter (e){
    setWriter(e.target.value);
    if(e.target.value !== ""){
      setWriterErrorError("")
    }
  }
  function onChangeContent (e){
    setContent(e.target.value);
    if(e.target.value !== ""){
      setContentErrorError("")
    }
  }


  const onClickSubmit = async()=>{
    if(!id){
      setIdError("아이디를 입력해주세요")
    }
    if(!pw){
      setPwError("비밀번호를 입력해주세요")
    }
    if(writer ===''){
      setWriterErrorError("작성자를 입력해주세요")
    }
    if(content ===''){
      setContentErrorError("내용을 입력해주세요")
    }
    else {
      try{
        const result = await createBoard({
        variables: {
          createBoardInput : {
            writer: id,
            password: pw,
            title : writer,
            contents: content
          }
        }
      })
      // 메시지 알림 이전, backend 컴퓨터에 있는 api(함수) 요청하기
      alert ("등록되었습니다")
      alert(result.data.createBoard._id)
      router.push(`/boards/${result.data.createBoard._id}`)
      }
      catch(error){
        alert(error.message)
      }
    }
  }


  return(
    <>
      <BoardWriteUI
        onChangeId={onChangeId}
        onChangePw={onChangePw}
        onChangeWriter={onChangeWriter}
        onChangeContent={onChangeContent}
        onClickSubmit={onClickSubmit}

        idError={idError}
        pwError={pwError}
        writerError={writerError}
        contentError={contentError}
      />
    </>
  )
}