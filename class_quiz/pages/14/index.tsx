import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import * as S from "./style";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

const FECTH_BOARDS_COUNT = gql`
  query fetchBoardsCount {
    fetchBoardsCount
  }
`;

export default function PageNation() {
  const [startPage, setStartPage] = useState(1);
  const { data, refetch } = useQuery(FETCH_BOARDS);
  const { data: dataBoardsCount } = useQuery(FECTH_BOARDS_COUNT);
  const [color, setColor] = useState(true);

  const lastPage = dataBoardsCount
    ? Math.ceil(dataBoardsCount.fetchBoardsCount / 10)
    : 0;

  const onClickPageMove = async (e) => {
    await refetch({ page: Number(e.currentTarget.id) });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage((prev) => prev + 10);
      void refetch({ page: startPage + 10 });
    }
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => prev - 10);
    void refetch({ page: startPage - 10 });
  };

  const onChnageColor = (e) => {
    setColor(true);
  };

  return (
    <>
      {data?.fetchBoards.map((el) => (
        <div key={el._id}>{el.writer}</div>
      ))}
      <br />

      <span onClick={onClickPrevPage}>이전페이지</span>
      {Array(10)
        .fill(1)
        .map((_, index) => {
          if (index + startPage <= lastPage) {
            return (
              <S.Number
                key={index + startPage}
                id={String(index + startPage)}
                onClick={onClickPageMove}
                onChange={onChnageColor}
              >
                {index + startPage}
              </S.Number>
            );
          } else {
            return <span>...</span>;
          }
        })}
      <span onClick={onClickNextPage}>다음페이지</span>

      {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1].map((el, index) => (
        <span key={index + 1} id={index + 1} onClick={onClickPageMove}>
          {index + 1}
        </span>
      ))} */}

      {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el) => (
        <span key={el} id={el}  onClick={onClickPageMove}>{el}</span>
      ))} */}

      {/* <span id="1" onClick={onClickPageMove}>1</span>
      <span id="2" onClick={onClickPageMove}>2</span>
      <span id="3" onClick={onClickPageMove}>3</span> */}
      <div>{dataBoardsCount?.fetchBoardsCount}</div>
    </>
  );
}
