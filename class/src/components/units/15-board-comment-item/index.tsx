import { useState } from "react";
import type { IBoard } from "../../../commons/types/generated/types";

interface IBoardCommentItemProps {
  el: IBoard;
}

export default function BoardCommentItem(props: IBoardCommentItemProps) {
  const [isEdit, setIsEdit] = useState(false);

  const onClickEdit = () => {
    setIsEdit(true);
  };

  return (
    <>
      <div>
        {isEdit && (
          <div>
            <span>{props.el.writer}</span>
            <span>{props.el.title}</span>
            <button onClick={onClickEdit}>수정하기</button>
          </div>
        )}
        {isEdit && (
          <div>
            수정할 내용 : <input type="text" />
          </div>
        )}
      </div>
    </>
  );
}
