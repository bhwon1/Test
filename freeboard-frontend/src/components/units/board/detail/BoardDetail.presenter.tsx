import { Tooltip } from "antd";
import { getDate } from "../../../../../src/components/commons/utils/utils";
import * as S from "./BoardDetail.styled";
import type { IBoardDetailUIProps } from "./BoardDetail.types";

export default function BoardDetailUI(props: IBoardDetailUIProps) {
  return (
    <>
      <S.Wrap>
        <S.Section1>
          <S.Container>
            <S.ProfileBox>
              <S.Profile src="../freeboard_img/profile.png"></S.Profile>
              <S.NameBox>
                <S.User>{props.data?.fetchBoard?.writer}</S.User>
                <S.Date>{getDate(props.data?.fetchBoard?.createdAt)}</S.Date>
              </S.NameBox>
              <S.ImgBox>
                <S.Chain src="../freeboard_img/chain.png"></S.Chain>
                <Tooltip
                  placement="topRight"
                  title={`${props.data?.fetchBoard.boardAddress?.address} ${props.data?.fetchBoard.boardAddress?.zipcode}`}
                >
                  <S.Location src="../freeboard_img/location.png" />
                </Tooltip>
              </S.ImgBox>
            </S.ProfileBox>
            <S.Contents>
              <S.Title>{props.data?.fetchBoard?.title}</S.Title>
              <S.ContentBox></S.ContentBox>
              <S.ContentDetail>
                {props.data?.fetchBoard?.contents}
              </S.ContentDetail>
              <S.VideoBox>
                {props.data?.fetchBoard.youtubeUrl && (
                  <S.Video url={props.data?.fetchBoard.youtubeUrl}></S.Video>
                )}
              </S.VideoBox>
            </S.Contents>
            <S.LikeWrap>
              <S.LikeBox>
                <S.LikeImg
                  onClick={props.onClickLike}
                  src="../freeboard_img/up.png"
                />
                <S.LikeUpCount>
                  {props.data?.fetchBoard.likeCount}
                </S.LikeUpCount>
              </S.LikeBox>
              <S.LikeBox>
                <S.LikeImg
                  onClick={props.onClickDislike}
                  src="../freeboard_img/down.png"
                />
                <S.LikeDownCount>
                  {props.data?.fetchBoard.dislikeCount}
                </S.LikeDownCount>
              </S.LikeBox>
            </S.LikeWrap>
          </S.Container>
        </S.Section1>
        <S.ButtonWrap>
          <S.GobackButton onClick={props.onClickMoveList}>
            목록으로
          </S.GobackButton>
          <S.GobackButton onClick={props.onClickMovetoEdit}>
            수정하기
          </S.GobackButton>
          <S.GobackButton
            id={props.data?.fetchBoard?._id}
            onClick={props.onClickDeleteList}
          >
            삭제하기
          </S.GobackButton>
          <S.UnderLine></S.UnderLine>
        </S.ButtonWrap>
      </S.Wrap>
    </>
  );
}
