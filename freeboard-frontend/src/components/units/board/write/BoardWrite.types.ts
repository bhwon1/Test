import type { IQuery } from "../../../../commons/types/generated/types";
import type { ChangeEvent } from "react";

export interface IBoardWriteProps {
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
}

export interface IUpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  boardAddress?: {
    zipcode?: string;
    address?: string;
    addressDetail?: string;
  };
}

export interface IBoardWriteUIProps {
  success: boolean;
  isEdit: boolean;
  data?: Pick<IQuery, "fetchBoard">;
  onChangeId: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangePw: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeWriter: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeContent: (e: ChangeEvent<HTMLTextAreaElement>) => void;

  onChangeAddressDetail: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>) => void;
  onCompleteAddressSearch: (data: any) => void;

  onClickSubmit: () => void;
  onClickUpdate: () => void;

  idError: string;
  pwError: string;
  writerError: string;
  contentError: string;

  address: string;
  zipcode: string;
  addressDetail: string;

  onToggleAddrModal: () => void;
  isopen: boolean;
}

export interface ISubmitButtonProps {
  success: boolean;
}
