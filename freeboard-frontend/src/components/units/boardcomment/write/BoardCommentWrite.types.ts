import { ChangeEvent } from "react";

export interface IBoardCommentWriteUIProps {
  onChangeWriter : (e: ChangeEvent<HTMLInputElement>) => void
  onChangePassword : (e: ChangeEvent<HTMLInputElement>) => void
  onChangeContents : (e: ChangeEvent<HTMLTextAreaElement>) => void
  onClickCommentSubmit : (e: MouseEvent) => void
  contents : string
}