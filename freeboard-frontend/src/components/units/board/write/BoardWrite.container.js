import { useRouter } from 'next/router';
import {useState} from 'react'
import { useMutation } from '@apollo/client'
import BoardWriteUI from './BoardWrite.presenter';
import { CREATE_BOARD, UPDATE_BOARD} from './BaordWrite.mutation';



export default function BoardWrite(props){

  const [success, setSuccess] = useState(false)

  const router = useRouter()

  const [createBoard] = useMutation(CREATE_BOARD)
  const [updateBoard] = useMutation(UPDATE_BOARD)
  
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
    if(e.target.value && pw && writer && content ){
      setSuccess(true)
    }
    else {
      setSuccess(false)
    }
  }
  function onChangePw (e){
    setPw(e.target.value);
    if(e.target.value !== ""){
      setPwError("")
    }
    if(id && e.target.value && writer && content ){
      setSuccess(true)
    }
    else {
      setSuccess(false)
    }
  }
  function onChangeWriter (e){
    setWriter(e.target.value);
    if(e.target.value !== ""){
      setWriterErrorError("")
    }
    if(id && pw && e.target.value && content ){
      setSuccess(true)
    }
    else {
      setSuccess(false)
    }
  }
  function onChangeContent (e){
    setContent(e.target.value);
    if(e.target.value !== ""){
      setContentErrorError("")
    }
    if(id && pw && writer && e.target.value ){
      setSuccess(true)
    }
    else {
      setSuccess(false)
    }
  }


  const onClickSubmit = async(e)=>{
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

  const onClickUpdate = async(e)=>{
    const result = updateBoard({
      variables : {
        updateBoardInput : {
          title : writer,
          contents : content,
        } ,
        password : pw,
        boardId : router.query.boardId,
      }
    })
    alert('수정')
    router.push(`/boards/${router.query.boardId}`)
  }


  return(
    <>
      <BoardWriteUI
        onChangeId={onChangeId}
        onChangePw={onChangePw}
        onChangeWriter={onChangeWriter}
        onChangeContent={onChangeContent}
        onClickSubmit={onClickSubmit}
        onClickUpdate={onClickUpdate}

        idError={idError}
        pwError={pwError}
        writerError={writerError}
        contentError={contentError}

        success={success}

        isEdit={props.isEdit}
      />
    </>
  )
}