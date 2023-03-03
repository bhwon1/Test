import * as S from "./LayoutHHeader.styled";

interface ILayoutHeaderUIProps {
  onClickLogo: () => void;
}

export default function LayoutHeaderUI(props: ILayoutHeaderUIProps) {
  return (
    <>
      <S.Wrap>
        <S.Container>
          <S.Logo
            src="../../freeboard_img/Logo.png"
            onClick={props.onClickLogo}
          ></S.Logo>
          <S.ButtonBox>
            <S.Login>로그인</S.Login>
            <S.MemberSignIn>회원가입</S.MemberSignIn>
          </S.ButtonBox>
        </S.Container>
      </S.Wrap>
    </>
  );
}
