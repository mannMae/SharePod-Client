import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
      </Slider>
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  div {
    text-align: center;
    font-size: 4rem;
    width: 100%;
    height: 173px;
    background-color: #e5e5e5;
  }
  .slick-prev {
    color: #eee;
    position: absolute;
    top: 50%;
    left: 194px;
    z-index: 10;
    :before {
      font-size: 36px;
    }
  }

  .slick-next {
    color: #eee;
    position: absolute;
    top: 50%;
    right: 194px;
    :before {
      font-size: 36px;
    }
  }

  .slick-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 29px;
    .slick-active {
      button:before {
        content: ' ';
        width: 28px;
        height: 8px;
        margin-top: 5px;
        background-color: #000;
        border-radius: 8px;
      }
    }
  }
`;

export default SliderSection;
