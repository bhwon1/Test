import { getDate } from '@/src/components/commons/utils/utils'
import * as S from './BoardList.styled'

export default function BoardListUI(props){

  return(
    <>
      <S.Container>
        <S.Title>베스트 게시글</S.Title>
        <S.ContentBoxWrap>
          <S.BestListBox>
            <S.Row1><S.RowImg src='../../freeboard_img/back.png'/></S.Row1>
            <S.Row2>
              <S.TitleName>게시물 제목입니다.</S.TitleName>
              <S.ContentWrap>
                <S.ProfileColumn>
                  <S.ProfileWrap>
                    <S.ProfileImg src='../../freeboard_img/profile.png'/>
                    <S.ProfileName>노원두</S.ProfileName>
                  </S.ProfileWrap>
                  <S.ProfileDate>Date : 2023.02.02</S.ProfileDate>
                </S.ProfileColumn>
                <S.LikeWrap>
                  <S.LikeUp src='../../freeboard_img/up.png'/>
                  <S.LikeCount>356</S.LikeCount>
                </S.LikeWrap>
              </S.ContentWrap>
            </S.Row2>
          </S.BestListBox>
          <S.BestListBox>
            <S.Row1><S.RowImg src='../../freeboard_img/back.png'/></S.Row1>
            <S.Row2>
              <S.TitleName>게시물 제목입니다.</S.TitleName>
              <S.ContentWrap>
                <S.ProfileColumn>
                  <S.ProfileWrap>
                    <S.ProfileImg src='../../freeboard_img/profile.png'/>
                    <S.ProfileName>노원두</S.ProfileName>
                  </S.ProfileWrap>
                  <S.ProfileDate>Date : 2023.02.02</S.ProfileDate>
                </S.ProfileColumn>
                <S.LikeWrap>
                  <S.LikeUp src='../../freeboard_img/up.png'/>
                  <S.LikeCount>356</S.LikeCount>
                </S.LikeWrap>
              </S.ContentWrap>
            </S.Row2>
          </S.BestListBox>
          <S.BestListBox>
            <S.Row1><S.RowImg src='../../freeboard_img/back.png'/></S.Row1>
            <S.Row2>
              <S.TitleName>게시물 제목입니다.</S.TitleName>
              <S.ContentWrap>
                <S.ProfileColumn>
                  <S.ProfileWrap>
                    <S.ProfileImg src='../../freeboard_img/profile.png'/>
                    <S.ProfileName>노원두</S.ProfileName>
                  </S.ProfileWrap>
                  <S.ProfileDate>Date : 2023.02.02</S.ProfileDate>
                </S.ProfileColumn>
                <S.LikeWrap>
                  <S.LikeUp src='../../freeboard_img/up.png'/>
                  <S.LikeCount>356</S.LikeCount>
                </S.LikeWrap>
              </S.ContentWrap>
            </S.Row2>
          </S.BestListBox>
          <S.BestListBox>
            <S.Row1><S.RowImg src='../../freeboard_img/back.png'/></S.Row1>
            <S.Row2>
              <S.TitleName>게시물 제목입니다.</S.TitleName>
              <S.ContentWrap>
                <S.ProfileColumn>
                  <S.ProfileWrap>
                    <S.ProfileImg src='../../freeboard_img/profile.png'/>
                    <S.ProfileName>노원두</S.ProfileName>
                  </S.ProfileWrap>
                  <S.ProfileDate>Date : 2023.02.02</S.ProfileDate>
                </S.ProfileColumn>
                <S.LikeWrap>
                  <S.LikeUp src='../../freeboard_img/up.png'/>
                  <S.LikeCount>356</S.LikeCount>
                </S.LikeWrap>
              </S.ContentWrap>
            </S.Row2>
          </S.BestListBox>
        </S.ContentBoxWrap>

        <S.SearchWrap>
          <S.SerachIconBlack src='../../freeboard_img/search_blackk.png'/>
          <S.SearchInput type='text' placeholder='제목을 입력해주세요'/>
          <S.SearchInputDate type='text' placeholder='YYYY.MM.DD - YYYY.MM.DD'/>
          <S.SearchButton>검색하기</S.SearchButton>
        </S.SearchWrap>

        <S.ListRow1>
          <S.ListNumber>번호</S.ListNumber>
          <S.ListTitle>제목</S.ListTitle>
          <S.ListName>작성자</S.ListName>
          <S.ListDate>날짜</S.ListDate>
        </S.ListRow1>
        
          {props.data?.fetchBoards.map( (el,index) => (
            <S.ListRow1 key={index}>  
              <S.ListNumber2>{String(el._id).slice(-4).toUpperCase()}</S.ListNumber2>
              <S.ListTitle2
              id = {el._id}
              onClick={props.onClickPage}
              >{el.title}</S.ListTitle2>
              <S.ListName2>{el.contents}</S.ListName2>
              <S.ListDate2>{getDate(el.createdAt)}</S.ListDate2>
            </S.ListRow1>
            ))}

        
        <S.Footer>
          <S.Button onClick={props.onClickMoveToBoardNew}>
            <S.PencilIcon src="../../freeboard_img/new.png" />
            게시물 등록하기
          </S.Button>
        </S.Footer>
      </S.Container>
    </>
  )
}