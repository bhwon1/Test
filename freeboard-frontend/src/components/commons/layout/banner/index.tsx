import * as S from "./Banner.styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LayoutBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <S.Wrap>
        <S.Container>
          <Slider {...settings}>
            <div>
              <S.FirstImg src="../../freeboard_img/banner1.jpg" />
            </div>
            <div>
              <S.SecondImg src="../../freeboard_img/banner2.jpg" />
            </div>
            <div>
              <S.ThridImg src="../../freeboard_img/banner3.jpg" />
            </div>
            <div>
              <S.FourImg src="../../freeboard_img/banner4.jpg" />
            </div>
            <div>
              <S.FivetImg src="../../freeboard_img/banner5.jpg" />
            </div>
            <div>
              <S.SixImg src="../../freeboard_img/banner6.jpg" />
            </div>
          </Slider>
        </S.Container>
      </S.Wrap>
    </>
  );
}
