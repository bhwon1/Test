import { gql } from "@apollo/client";

export const FECTH_BOARDS = gql`
  query fetchBoards($page : Int ){
    fetchBoards(page: $page){
      _id
      writer
      title
      contents
      createdAt
    }
  }
`