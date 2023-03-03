import styled from "@emotion/styled";

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  padding: 100px 0;
`;

export const Title = styled.h1`
  font-size: 36px;
  font-family: 700;
  text-align: center;
  padding: 50px 0;
`;

export const ContentWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0 0 20px 0;
  margin: 0;
`;

export const BestListBox = styled.div`
  width: 282px;
  height: 257px;
  border: 1px solid #ddd;
  border-radius: 10px;
  margin: 0;
  padding: 0;
  box-shadow: 3px 3px 10px gray;
`;

export const Row1 = styled.div`
  width: 100%;
  height: 50%;
`;

export const RowImg = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

export const Row2 = styled.div`
  width: 100%;
  height: 50%;
  padding: 0 16px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

export const TitleName = styled.h2`
  font-size: 18px;
  font-weight: 600;
  margin: 0;
  padding: 10px 0;
`;
export const ProfileWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;
export const ProfileColumn = styled.div`
  display: block;
`;

export const ProfileImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const ProfileName = styled.h3`
  width: 100%;
  font-size: 15px;
  font-weight: 600;
  margin: 0;
  padding: 0 0 0 6px;
`;

export const ProfileDate = styled.p`
  font-size: 12px;
  font-weight: 400;
  color: #ddd;
  padding: 5px 0;
  margin: 0;
`;

export const LikeWrap = styled.div`
  width: 30%;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

export const LikeUp = styled.img`
  width: 20px;
  height: 18px;
`;

export const LikeCount = styled.h4`
  font-size: 16px;
  font-weight: 400;
  padding: 5px 0;
  margin: 0;
  text-align: center;
`;

export const ContentBoxWrap = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;
export const SearchInput = styled.input`
  background: #f2f2f2;
  width: 776px;
  height: 52px;
  padding: 0 20px 0 50px;
  border-radius: 10px;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 400;
  border: 0;
  ::placeholder {
    color: black;
    font-weight: 700;
  }
`;

export const SearchInputDate = styled.input`
  border: 1px solid #bdbdbd;
  width: 244px;
  height: 52px;
  padding: 0 20px;
  box-sizing: border-box;
`;

export const SearchButton = styled.button`
  width: 92px;
  height: 52px;
  background: #000;
  color: #fff;
  border-radius: 10px;
  font-weight: 700;
`;

export const SerachIconBlack = styled.img`
  position: absolute;
  top: 68px;
  left: 20px;
  width: 17px;
  height: 17px;
`;

export const SearchWrap = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
`;

export const ListRow1 = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid #ddd;
`;

export const ListNumber = styled.h1`
  width: 10%;
  font-size: 18px;
  font-weight: 700;
`;
export const ListTitle = styled.h1`
  width: 60%;
  font-size: 18px;
  font-weight: 700;
`;
export const ListName = styled.h1`
  width: 20%;
  font-size: 18px;
  font-weight: 700;
`;
export const ListDate = styled.h1`
  width: 10%;
  font-size: 18px;
  font-weight: 700;
`;
export const ListNumber2 = styled.h1`
  width: 10%;
  font-size: 16px;
  font-weight: 400;
`;
export const ListTitle2 = styled.h1`
  width: 60%;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
`;
export const ListName2 = styled.h1`
  width: 20%;
  font-size: 16px;
  font-weight: 400;
`;
export const ListDate2 = styled.h1`
  width: 10%;
  font-size: 16px;
  font-weight: 400;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 50px;
`;

export const Button = styled.button`
  width: 171px;
  height: 52px;
  background-color: white;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid #ddd;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  :hover {
    background-color: #ddd;
  }
`;

export const PencilIcon = styled.img``;
