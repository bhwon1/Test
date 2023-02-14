import { getDate } from '@/src/components/commons/utils/utils'
import * as S from '../../board/detail/BoardDetail.styled'

export default function BoardCommentListUI(props){

  return(
    <>
    {props.data?.fetchBoardComments.map((el)=>(
      <S.Wrap>
      <S.Seciton2>
        <S.CommentBox>
          <S.CommentProfile src='../freeboard_img/profile.png'/>
          <S.NameBox>
            <S.CommentUserBox>
              <S.CommentUser>{el.writer}</S.CommentUser>
              <S.ProfileStarBlack src='../freeboard_img/star_black.png'></S.ProfileStarBlack>
              <S.ProfileStarBlack src='../freeboard_img/star_black.png'></S.ProfileStarBlack>
              <S.ProfileStarBlack src='../freeboard_img/star_black.png'></S.ProfileStarBlack>
              <S.ProfileStarBlack src='../freeboard_img/star_black.png'></S.ProfileStarBlack>
              <S.ProfileStarBlack src='../freeboard_img/star_black.png'></S.ProfileStarBlack>
            </S.CommentUserBox>
            <S.CommentContents>{el.contents}</S.CommentContents>
            <S.CommentDate>{getDate(el.createdAt)} 날짜</S.CommentDate>
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