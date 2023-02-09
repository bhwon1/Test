import * as S from './BoardWrite.styled'  ;

export default function BoardWriteUI(props){

  return(
    <>
    <S.Container>
      <S.Title>{props.isEdit ? "게시물등록": "게시물수정"}</S.Title>
      <S.TitleWrap>
        <S.TitleBox>
          <S.Title1>아이디</S.Title1>
          <S.Title1Input type="text" placeholder='제목을 작성해주세요' onChange={props.onChangeId}/>
          <S.Error>{props.idError}</S.Error>
        </S.TitleBox>
        <S.TitleBox>
          <S.Title1>비밀번호</S.Title1>
          <S.Title1Input type="password" placeholder='비밀번호를 작성해주세요' onChange={props.onChangePw}/>
          <S.Error>{props.pwError}</S.Error>
        </S.TitleBox>
      </S.TitleWrap>
      <S.Title1>작성자</S.Title1>
      <S.Title1Input type="text" placeholder='제목을 작성해주세요' onChange={props.onChangeWriter}/>
      <S.Error>{props.writerError}</S.Error>
      <S.Content>내용</S.Content>
      <S.ContentInput type="text" placeholder='내용을 작성해주세요' onChange={props.onChangeContent}/>
      <S.Error>{props.contentError}</S.Error>
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
        <S.CheckBox 
        onClick={props.isEdit ? props.onClickSubmit : props.onClickUpdate}
        success={props.isEdit ?  props.success : true } // 수정할때는 개별가능하게끔 
        >{props.isEdit ? "등록하기" : "수정하기" }</S.CheckBox>
      </S.Box>
    </S.Container>
    </>
  )
}