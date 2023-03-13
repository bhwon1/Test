import styled from "@emotion/styled";
import type { IPageProps } from "./Pagination01.types";

export const Page = styled.span`
  margin: 0px 10px;
  color: ${(props: IPageProps) => (props.isActive ? "#000" : "#ddd")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;

export const Column = styled.span`
  margin: 0px 50px;
`;

export const PaginationBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
