import { useState } from "react";
import type { MouseEvent } from "react";
import Pagination01UI from "./Pagination01.presenter";
import type { IPaginations01Props } from "./Pagination01.types";

export default function Pagination01(props: IPaginations01Props) {
  const [startPage, setStartPage] = useState(1);
  const [activedPage, setACtivePage] = useState(1);
  const lastPage = props.count != null ? Math.ceil(props.count / 10) : 0;

  const onClickMovePage = (e: MouseEvent<HTMLSpanElement>) => {
    const activedPage = Number(e.currentTarget.id);
    setACtivePage(activedPage);
    void props.refetch({ page: activedPage });
  };

  const onClickPrevPage = () => {
    if (startPage === 1) return;
    setStartPage(startPage - 10);
    setACtivePage(startPage - 10);
    void props.refetch({ page: startPage - 10 });
  };

  const onClickNextPage = () => {
    if (startPage + 10 <= lastPage) {
      setStartPage(startPage + 10);
      setACtivePage(startPage + 10);
      void props.refetch({ page: startPage + 10 });
    }
  };

  return (
    <>
      {Pagination01UI({
        onClickMovePage,
        onClickNextPage,
        onClickPrevPage,
        startPage,
        lastPage,
        activedPage,
      })}
    </>
  );
}
