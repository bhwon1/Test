import * as S from '../../styles/emotion-01'

export default function MyPage(){

  return(
    <>
      <S.Wrap>
        <S.Header>
          <S.Row1>
            <S.SearchImg src="img01/search.png"></S.SearchImg>
          </S.Row1>
          <S.Row2>
            <S.My>마이</S.My>
            <S.MyBox>
              <S.Face src="img01/girl.png"></S.Face>
              <S.MyName>임정아</S.MyName>
              <S.ArrowRow2 src="img01/arrow.png"></S.ArrowRow2>
            </S.MyBox>
          </S.Row2>
          <S.Row3>
            <S.TextList>공지사항</S.TextList>
            <S.TextList>이벤트</S.TextList>
            <S.TextList2>FAQ</S.TextList2>
            <S.TextList>Q&A</S.TextList>
          </S.Row3>
        </S.Header>
        <S.Main>
          <S.left>
            <S.QuestionNumber>Q.01</S.QuestionNumber>
            <S.Question>리뷰 작성은 어떻게 하나요?</S.Question>
          </S.left>
          <S.right>
            <S.Arrow src="img01/arrow.png"></S.Arrow>
          </S.right>
          <S.left>
            <S.QuestionNumber>Q.02</S.QuestionNumber>
            <S.Question>리뷰 작성은 어떻게 하나요?</S.Question>
          </S.left>
          <S.right>
            <S.Arrow src="img01/arrow.png"></S.Arrow>
          </S.right>
          <S.left>
            <S.QuestionNumber>Q.03</S.QuestionNumber>
            <S.Question>리뷰 작성은 어떻게 하나요?</S.Question>
          </S.left>
          <S.right>
            <S.Arrow src="img01/arrow.png"></S.Arrow>
          </S.right>
          <S.left>
            <S.QuestionNumber>Q.04</S.QuestionNumber>
            <S.Question>리뷰 작성은 어떻게 하나요?</S.Question>
          </S.left>
          <S.right>
            <S.Arrow src="img01/arrow.png"></S.Arrow>
          </S.right>
          <S.left>
            <S.QuestionNumber>Q.05</S.QuestionNumber>
            <S.Question>리뷰 작성은 어떻게 하나요?</S.Question>
          </S.left>
          <S.right>
            <S.Arrow src="img01/arrow.png"></S.Arrow>
          </S.right>
          <S.left>
            <S.QuestionNumber>Q.06</S.QuestionNumber>
            <S.Question>리뷰 작성은 어떻게 하나요?</S.Question>
          </S.left>
          <S.right>
            <S.Arrow src="img01/arrow.png"></S.Arrow>
          </S.right>
        </S.Main>
        <S.Footer>
          <S.FooterBox>
            <S.FooterList src="img01/home.png"></S.FooterList>
            <S.FooterText>홈</S.FooterText>
          </S.FooterBox>
          <S.FooterBox>
            <S.FooterList2 src="img01/locate.png"></S.FooterList2>
            <S.FooterText>잇츠로드</S.FooterText>
          </S.FooterBox>
          <S.FooterBox>
            <S.FooterList src="img01/heart.png"></S.FooterList>
            <S.FooterText>마이찜</S.FooterText>
          </S.FooterBox>
          <S.FooterBox>
            <S.FooterList src="img01/person.png"></S.FooterList>
            <S.FooterText>마이</S.FooterText>
          </S.FooterBox>
          
        </S.Footer>
      </S.Wrap>
    </>
  )

}