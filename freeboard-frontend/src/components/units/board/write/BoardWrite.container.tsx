import { useRouter } from "next/router";
import { useState } from "react";
import type { ChangeEvent } from "react";
import { useMutation } from "@apollo/client";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.mutation";
import type {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import type { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";
import type { Address } from "react-daum-postcode";

export default function BoardWrite(props: IBoardWriteProps) {
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [writer, setWriter] = useState("");
  const [content, setContent] = useState("");

  const [idError, setIdError] = useState("");
  const [pwError, setPwError] = useState("");
  const [writerError, setWriterErrorError] = useState("");
  const [contentError, setContentErrorError] = useState("");

  function onChangeId(e: ChangeEvent<HTMLInputElement>) {
    setId(e.target.value);
    if (e.target.value !== "") {
      setIdError("");
    }
    if (e.target.value && pw && writer && content) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }
  function onChangePw(e: ChangeEvent<HTMLInputElement>) {
    setPw(e.target.value);
    if (e.target.value !== "") {
      setPwError("");
    }
    if (id && e.target.value && writer && content) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }
  function onChangeWriter(e: ChangeEvent<HTMLInputElement>) {
    setWriter(e.target.value);
    if (e.target.value !== "") {
      setWriterErrorError("");
    }
    if (id && pw && e.target.value && content) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }
  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    if (e.target.value !== "") {
      setContentErrorError("");
    }
    if (id && pw && writer && e.target.value) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  };

  const onClickSubmit = async () => {
    if (!id) {
      setIdError("???????????? ??????????????????");
    }
    if (!pw) {
      setPwError("??????????????? ??????????????????");
    }
    if (writer === "") {
      setWriterErrorError("???????????? ??????????????????");
    }
    if (content === "") {
      setContentErrorError("????????? ??????????????????");
    } else {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer: id,
              password: pw,
              title: writer,
              contents: content,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        // ????????? ?????? ??????, backend ???????????? ?????? api(??????) ????????????
        if (typeof result.data?.createBoard._id !== "string") {
          alert("???????????? ????????? ????????????. ???????????? ????????????! ");
          return;
        }
        alert("?????????????????????");
        alert(result.data?.createBoard._id);
        void router.push(`/boards/${result.data?.createBoard._id || ""}`);
      } catch (error) {
        if (error instanceof Error) alert(error.message);
      }
    }
  };

  const onClickUpdate = async () => {
    if (
      !writer &&
      !content &&
      !youtubeUrl &&
      !address &&
      !addressDetail &&
      !zipcode
    ) {
      alert("????????? ????????? ????????????.");
      return;
    }

    if (!pw) {
      alert("??????????????? ??????????????????.");
      return;
    }

    const updateBoardInput: IUpdateBoardInput = {};
    if (writer) updateBoardInput.title = writer;
    if (content) updateBoardInput.contents = content;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;
    if (zipcode || address || addressDetail) {
      updateBoardInput.boardAddress = {};
      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      const result = await updateBoard({
        variables: {
          updateBoardInput,
          password: pw,
          boardId: String(router.query.boardId),
        },
      });
      alert("??????");
      void router.push(`/boards/${result.data?.updateBoard._id ?? ""}`);
    } catch (error) {
      if (error instanceof Error) alert(error.message);
    }
  };

  // ????????????
  const [isopen, setIsOpen] = useState(false);
  const [zipcode, setZipcode] = useState("");
  const [address, setAddress] = useState("");
  const [addressDetail, setAddressDetail] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const onToggleAddrModal = () => {
    setIsOpen((prev) => !prev);
  };

  const onChangeAddressDetail = (e: ChangeEvent<HTMLInputElement>) => {
    setAddressDetail(e.target.value);
  };

  const onCompleteAddressSearch = (address: Address) => {
    setZipcode(address.address);
    setAddress(address.zonecode);
    setIsOpen((prev) => !prev);
  };

  // ?????????
  const onChangeYoutubeUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(e.target.value);
  };

  return (
    <>
      {BoardWriteUI({
        onChangeId: onChangeId,
        onChangePw: onChangePw,
        onChangeWriter: onChangeWriter,
        onChangeContent: onChangeContent,

        onClickSubmit: onClickSubmit,
        onClickUpdate: onClickUpdate,
        onToggleAddrModal,
        onCompleteAddressSearch,
        onChangeAddressDetail,
        onChangeYoutubeUrl,

        isopen,
        idError: idError,
        pwError: pwError,
        writerError: writerError,
        contentError: contentError,

        success: success,
        address,
        zipcode,
        addressDetail,

        isEdit: props.isEdit,
        data: props.data,
      })}
    </>
  );
}
