import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardCommentListUI from "./BoardCommentList.presenter";
import { gql } from "@apollo/client";

export const FETCH_BOARD_COMMENTS = gql`
  query fetchBoardComments($boardId: ID!) {
    fetchBoardComments(boardId: $boardId) {
      _id
      writer
      contents
      createdAt
      rating
    }
  }
`;

export const DELETE_BOARD_COMMENT = gql`
  mutation deleteBoardComment($password: String, $boardCommentId: ID!) {
    deleteBoardComment(password: $password, boardCommentId: $boardCommentId)
  }
`;



export default function BoardCommentList (props){
  const router = useRouter()
  const [deleteBoardComment] = useMutation(DELETE_BOARD_COMMENT)

  const { data } = useQuery(FETCH_BOARD_COMMENTS, { 
    variables: { boardId: router.query.boardId }
  });

  const onClickDelete = async (e) => {
    const myPassword = prompt("비밀번호를 입력하세요.")
    try {
      await deleteBoardComment({
        variables: {
          password: myPassword,
          boardCommentId: e.target.id,
        },
        refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      });
    } catch (error) {
      alert(error.message)
    }
  };

  return(
    <>
      <BoardCommentListUI
        data={data}
        onClickDelete={onClickDelete}
      />
    </>
  )
}