import * as S from '../../styles/list';

export default function list(){
  return(
    <>
    <S.Container>
      <S.Title>게시물등록</S.Title>
      <S.Title1>제목</S.Title1>
      <S.Title1Input type="text" placeholder='제목을 작성해주세요'/>
      <S.Content>내용</S.Content>
      <S.ContentInput type="text" placeholder='내용을 작성해주세요'/>
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
        <S.CheckBox>등록하기</S.CheckBox>
      </S.Box>
      

    </S.Container>
    </>
  )
}
