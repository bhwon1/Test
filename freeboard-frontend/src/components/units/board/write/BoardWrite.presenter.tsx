import { Modal } from "antd";
import * as S from "./BoardWrite.styled";
import type { IBoardWriteUIProps } from "./BoardWrite.types";
import DaumPostcodeEmbed from "react-daum-postcode";

export default function BoardWriteUI(props: IBoardWriteUIProps) {
  return (
    <>
      <S.Container>
        <S.Title>{props.isEdit ? "게시물등록" : "게시물수정"}</S.Title>
        <S.TitleWrap>
          <S.TitleBox>
            <S.Title1>아이디</S.Title1>
            <S.Title1Input
              type="text"
              placeholder="제목을 작성해주세요"
              onChange={props.onChangeId}
              defaultValue={props.data?.fetchBoard.writer ?? ""}
              readOnly={!!props.data?.fetchBoard.writer}
            />
            <S.Error>{props.idError}</S.Error>
          </S.TitleBox>
          <S.TitleBox>
            <S.Title1>비밀번호</S.Title1>
            <S.Title1Input
              type="password"
              placeholder="비밀번호를 작성해주세요"
              onChange={props.onChangePw}
            />
            <S.Error>{props.pwError}</S.Error>
          </S.TitleBox>
        </S.TitleWrap>
        <S.Title1>작성자</S.Title1>
        <S.Title1Input
          type="text"
          placeholder="제목을 작성해주세요"
          onChange={props.onChangeWriter}
          defaultValue={props.data?.fetchBoard.title}
        />
        <S.Error>{props.writerError}</S.Error>
        <S.Content>내용</S.Content>
        <S.ContentInput
          placeholder="내용을 작성해주세요"
          onChange={props.onChangeContent}
          defaultValue={props.data?.fetchBoard.contents}
        />
        <S.Error>{props.contentError}</S.Error>
        <S.Addr>주소</S.Addr>
        <S.AddrWrap>
          <S.AddrInputNumber
            placeholder="07250"
            readOnly
            value={
              props.address ||
              props.data?.fetchBoard.boardAddress?.address ||
              ""
            }
          ></S.AddrInputNumber>
          <S.AddrButton onClick={props.onToggleAddrModal}>
            우편번호 검색
          </S.AddrButton>
          {props.isopen && (
            <Modal
              title="우편번호 검색"
              open={props.isopen}
              onOk={props.onToggleAddrModal}
              onCancel={props.onToggleAddrModal}
              okText="OK"
              cancelText="Cancel"
            >
              <DaumPostcodeEmbed onComplete={props.onCompleteAddressSearch} />
            </Modal>
          )}
        </S.AddrWrap>
        <S.AddrInput
          type="text"
          readOnly
          value={
            props.zipcode || props.data?.fetchBoard.boardAddress?.zipcode || ""
          }
        />
        <S.AddrInput
          onChange={props.onChangeAddressDetail}
          defaultValue={
            props.data?.fetchBoard.boardAddress?.addressDetail || ""
          }
        />
        <S.Title1>유투브</S.Title1>
        <S.Title1Input
          type="text"
          placeholder="링크를 복사해주세요"
          onChange={props.onChangeYoutubeUrl}
          defaultValue={props.data?.fetchBoard.youtubeUrl || ""}
        />
        <S.Title1>사진첨부</S.Title1>
        <S.GalleryBox>
          <S.Gallery>+</S.Gallery>
          <S.Gallery>+</S.Gallery>
          <S.Gallery>+</S.Gallery>
        </S.GalleryBox>
        <S.Title1>메인설정</S.Title1>
        <S.RadioBox>
          <S.RadioInput
            type="radio"
            id="youtube"
            name="radio-button"
          ></S.RadioInput>
          <S.RadioLabel htmlFor="youtube">유튜브</S.RadioLabel>
          <S.RadioInput
            type="radio"
            id="image"
            name="radio-button"
          ></S.RadioInput>
          <S.RadioLabel htmlFor="image">사진</S.RadioLabel>
        </S.RadioBox>
        <S.Box>
          <S.CheckBox
            onClick={props.isEdit ? props.onClickSubmit : props.onClickUpdate}
            success={props.isEdit ? props.success : true} // 수정할때는 개별가능하게끔
          >
            {props.isEdit ? "등록하기" : "수정하기"}
          </S.CheckBox>
        </S.Box>
      </S.Container>
    </>
  );
}
