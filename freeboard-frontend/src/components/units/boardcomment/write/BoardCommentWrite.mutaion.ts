import { gql } from "@apollo/client";

export const CREATE_COMMENT_BOARD = gql`
  mutation createBoardComment(
    $createBoardCommentInput: CreateBoardCommentInput! 
    $boardId: ID!
  ) {
    createBoardComment(
      createBoardCommentInput : $createBoardCommentInput 
      boardId: $boardId
    ) {
      _id
    }
  }
`;