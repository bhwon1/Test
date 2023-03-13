import { Column, Page, PaginationBox } from "./Pagination01.styles";
import type { IPagination01UIProps } from "./Pagination01.types";

export default function Pagination01UI(props: IPagination01UIProps) {
  return (
    <>
      <PaginationBox>
        <Column onClick={props.onClickPrevPage}>{`<`}</Column>
        {new Array(10).fill(1).map((_, idx) => (
          <Page
            key={idx + props.startPage}
            id={String(idx + props.startPage)}
            onClick={props.onClickMovePage}
            isActive={props.startPage + idx === props.activedPage}
          >
            {idx + props.startPage}
          </Page>
        ))}

        <Column onClick={props.onClickNextPage}>{`>`}</Column>
      </PaginationBox>
    </>
  );
}
