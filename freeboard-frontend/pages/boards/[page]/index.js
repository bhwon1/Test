import { gql, useQuery } from "@apollo/client";
import { useRouter } from 'next/router';
import * as S from '../../../styles/freeboard_emotion';

export const FETCH_BOARD = gql`
  query fetchBoard($boardId: ID!) {
    fetchBoard(boardId: $boardId) {
      _id
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function Freeboard(){
  const router = useRouter()

    const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.page }, // 가지고 오는 위치
    
  });

  return(
    <>
    <S.Wrap>
      <S.Section1>
        <S.Container>
          <S.ProfileBox>
            <S.Profile src='../freeboard_img/profile.png'></S.Profile>
            <S.NameBox>
              <S.User>{data?.fetchBoard?.writer}</S.User>
              <S.Date>{data?.fetchBoard?.createdAt}</S.Date>
            </S.NameBox>
            <S.ImgBox>
              <S.Chain src='../freeboard_img/chain.png'></S.Chain>
              <S.Location src='../freeboard_img/location.png'></S.Location>
            </S.ImgBox>
          </S.ProfileBox>
          <S.Contents>
            <S.Title>{data?.fetchBoard?.title}</S.Title>
            <S.ContentBox></S.ContentBox>
            <S.ContentDetail>{data?.fetchBoard?.contents}</S.ContentDetail>
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