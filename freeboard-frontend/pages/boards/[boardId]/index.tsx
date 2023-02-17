import BoardDetail from "../../../src/components/units/board/detail/BoardDetail.container";
import BoardCommentList from "../../../src/components/units/boardcomment/list/BoardCommentList.container";
import BoardCommentWrite from "../../../src/components/units/boardcomment/write/BoardCommentWrite.container";

export default function Freeboard(){
  

  return(
    <>
      <BoardDetail/>
      <BoardCommentWrite/>
      <BoardCommentList/>
    </>
  )
}