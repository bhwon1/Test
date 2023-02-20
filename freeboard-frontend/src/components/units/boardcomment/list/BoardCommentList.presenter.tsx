import { getDate } from '../../../../../src/components/commons/utils/utils'
import * as S from '../../boardcomment/list/BoardCommnetList.styled'
import {IBoardCommentListUIProps } from './BoardCommentList.types'

export default function BoardCommentListUI(props : IBoardCommentListUIProps){

  const onClickWriterName = (e) => {
    alert( e.currentTarget.id + "님이 작성한 글입니다.")
  }

  return(
    <>
    {props.data?.fetchBoardComments.map((el)=>(
      <S.Wrap>
      <S.Seciton2>
        <S.CommentBox>
          <S.CommentProfile src='../freeboard_img/profile.png'  id={el.writer} onClick={onClickWriterName}/>
          <S.NameBox id={el.writer} onClick={onClickWriterName}>
            <S.CommentUserBox>
              <S.CommentUser >{el.writer}</S.CommentUser>
              <S.ProfileStarBlack src='../freeboard_img/star_black.png'></S.ProfileStarBlack>
              <S.ProfileStarBlack src='../freeboard_img/star_black.png'></S.ProfileStarBlack>
              <S.ProfileStarBlack src='../freeboard_img/star_black.png'></S.ProfileStarBlack> 
              <S.ProfileStarBlack src='../freeboard_img/star_black.png'></S.ProfileStarBlack>
              <S.ProfileStarBlack src='../freeboard_img/star_black.png'></S.ProfileStarBlack>
            </S.CommentUserBox>
            <S.CommentContents>{el.contents}</S.CommentContents>
            <S.CommentDate >{getDate(el.createdAt)} 날짜</S.CommentDate>
          </S.NameBox>
          <S.CommentDeleteRemote>
            <S.Remove src='../freeboard_img/remove.png'/>
            <S.Delete 
              id={el._id}
              src='../freeboard_img/delete.png'
              onClick={props.onClickDelete}
            />
          </S.CommentDeleteRemote>
        </S.CommentBox>
      </S.Seciton2>
    </S.Wrap>
    ))}

    </>
  )
}