import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { useState } from "react";
import { FETCH_BOARD_COMMENTS } from "../list/BoardCommentList.container";
import BoardCommentWriteUI from "./BoardCommentWrite.presenter";

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


  

export default function BoardCommentWrite (props){
  const router = useRouter()
  const [writer, setWriter] = useState("")
  const [password, setPassword] = useState("")
  const [contents, setContents] = useState("")

  const [createCommentBoard] = useMutation(CREATE_COMMENT_BOARD)

  const onChangeWriter = (e) => {
    setWriter(e.target.value)
  }

  const onChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onChangeContents = (e) => {
    setContents(e.target.value)
  }

  const onClickCommentSubmit =async (e)=>{
    await createCommentBoard({
      variables : {
        createBoardCommentInput : {
          writer,
          password,
          contents,
          rating : 0, 
        },
        boardId : router.query.boardId
      },
      refetchQueries: [
          {
            query: FETCH_BOARD_COMMENTS,
            variables: { boardId: router.query.boardId },
          },
        ],
      
    })

    // 새로고침하면서 화면에 보이기 
  }

  return(
    <>
      <BoardCommentWriteUI
        onClickCommentSubmit={onClickCommentSubmit}
        onChangeWriter={onChangeWriter}
        onChangePassword={onChangePassword}
        onChangeContents={onChangeContents}
        contents={contents}
      />
    </>
  )
}