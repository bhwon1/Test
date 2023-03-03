import styled from "@emotion/styled";
import { Carousel } from "antd";
import React from "react";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const Wraper = styled.div`
  width: 100%;
  height: 300px;
  background: pink;
`;

export default function LayoutBanner() {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Wraper>
        여기는 베너입니다.
        <Carousel afterChange={onChange}>
          <div>
            <h3 style={contentStyle}></h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </Wraper>
    </>
  );
}
