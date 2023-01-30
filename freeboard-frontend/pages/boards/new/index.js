import {useState} from 'react'
import * as S from '../../../styles/board_emotion';
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/router';

const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){
    createBoard(createBoardInput: $createBoardInput){
      _id
    }
  }
`

export default function board(){
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
    <S.Container>
      <S.Title>게시물등록</S.Title>
      <S.TitleWrap>
        <S.TitleBox>
          <S.Title1>아이디</S.Title1>
          <S.Title1Input type="text" placeholder='제목을 작성해주세요' onChange={onChangeId}/>
          <S.Error>{idError}</S.Error>
        </S.TitleBox>
        <S.TitleBox>
          <S.Title1>비밀번호</S.Title1>
          <S.Title1Input type="password" placeholder='비밀번호를 작성해주세요' onChange={onChangePw}/>
          <S.Error>{pwError}</S.Error>
        </S.TitleBox>
      </S.TitleWrap>
      <S.Title1>작성자</S.Title1>
      <S.Title1Input type="text" placeholder='제목을 작성해주세요' onChange={onChangeWriter}/>
      <S.Error>{writerError}</S.Error>
      <S.Content>내용</S.Content>
      <S.ContentInput type="text" placeholder='내용을 작성해주세요' onChange={onChangeContent}/>
      <S.Error>{contentError}</S.Error>
      <S.Addr>주소</S.Addr>
      <S.AddrWrap>
        <S.AddrInputNumber placeholder='07250'></S.AddrInputNumber>
        <S.AddrButton>우편번호 검색</S.AddrButton>
      </S.AddrWrap>
      <S.AddrInput type="text"/> 
      <S.AddrInput type="text"/>
      <S.Title1>유투브</S.Title1>
      <S.Title1Input type="text" placeholder='링크를 복사해주세요'/>
      <S.Title1>사진첨부</S.Title1>
      <S.GalleryBox>
        <S.Gallery>+</S.Gallery>
        <S.Gallery>+</S.Gallery>
        <S.Gallery>+</S.Gallery>
      </S.GalleryBox>
      <S.Title1>메인설정</S.Title1>
      <S.RadioBox>
        <S.RadioInput type='radio' id="youtube" name="radio-button"></S.RadioInput>
        <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
        <S.RadioInput type='radio' id="image" name="radio-button"></S.RadioInput>
        <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
      </S.RadioBox>
      <S.Box>
        <S.CheckBox onClick={onClickSubmit}>등록하기</S.CheckBox>
      </S.Box>
      

    </S.Container>
    </>
  )
}
