import * as S from "./LayoutNav.styled";
import type { ILayoutNavProps } from "./LayoutNav.types";

const QQQ = [
  { id: "/boards", aaa: "자유게시판" },
  { id: "/market", aaa: "중고마켓" },
  { id: "/mypage", aaa: "마이페이지" },
];

// prettier-ignore
export default function LayoutNavUI(props: ILayoutNavProps) {
  return (
    <>
      <S.Wrap>
        <S.Container>
          <S.Nav>
            {QQQ.map(el => (
              <S.MenuItem key={el.id} id={el.id} onClick={props.onClickMenu}>{el.aaa}</S.MenuItem>
            ))}
          </S.Nav>
        </S.Container>
      </S.Wrap>
    </>
  );
}
