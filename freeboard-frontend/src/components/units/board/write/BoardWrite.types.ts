import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data: Pick<IMutation, "createBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
}

export interface IBoardWriteUIProps {
  success: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  onChangeId: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;

  onClickSubmit: () => void;
  onClickUpdate: () => void;

  idError: string;
  pwError: string;
  writerError: string;
  contentError: string;
}

export interface ISubmitButtonProps {
  success: boolean;
}
