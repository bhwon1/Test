import * as S from './BoardDetail.styled';

export default function BoardWriterUI(props){

  return(
    <>
    <S.Wrap>
      <S.Section1>
        <S.Container>
          <S.ProfileBox>
            <S.Profile src='../freeboard_img/profile.png'></S.Profile>
            <S.NameBox>
              <S.User>{props.data?.fetchBoard?.writer}</S.User>
              <S.Date>{props.data?.fetchBoard?.createdAt}</S.Date>
            </S.NameBox>
            <S.ImgBox>
              <S.Chain src='../freeboard_img/chain.png'></S.Chain>
              <S.Location src='../freeboard_img/location.png'></S.Location>
            </S.ImgBox>
          </S.ProfileBox>
          <S.Contents>
            <S.Title>{props.data?.fetchBoard?.title}</S.Title>
            <S.ContentBox></S.ContentBox>
            <S.ContentDetail>{props.data?.fetchBoard?.contents}</S.ContentDetail>
            <S.VideoBox>
              <S.Video src='../freeboard_img/location.png'></S.Video>
            </S.VideoBox>
          </S.Contents>
          <S.LikeWrap>
            <S.LikeBox>
              <S.LikeImg src="../freeboard_img/up.png"></S.LikeImg>
              <S.LikeUpCount>1234</S.LikeUpCount>
            </S.LikeBox>
            <S.LikeBox>
              <S.LikeImg src="../freeboard_img/down.png"></S.LikeImg>
              <S.LikeDownCount>1234</S.LikeDownCount>
            </S.LikeBox>
          </S.LikeWrap>
        </S.Container>
      </S.Section1>
      <S.ButtonWrap>
        <S.GobackButton>목록으로</S.GobackButton>
        <S.GobackButton>수정하기</S.GobackButton>
        <S.GobackButton>삭제하기</S.GobackButton>
      </S.ButtonWrap>
    </S.Wrap>
    </>
  )
}