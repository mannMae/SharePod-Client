import React from 'react';
import styled from 'styled-components';

const BoardItem = () => {
  return (
    <BoardItemWrapper>
      <div className="user-info">
        <img
          className="user-img"
          src={`${process.env.PUBLIC_URL}/assets/images/jungjin.jpeg`}
          alt=""
        />
        <div className="user-nickname">
          <p>휘뚜루마뚜루</p>
        </div>
      </div>
      {/* <img src={`${process.env.PUBLIC_URL}/assets/images/test.png`} alt="" /> */}
      <div className="board-img"></div>
      <div className="product-info">
        <p className="product-title">삼성전자 공기청정기</p>
        <p className="product-price">
          30,000원 <span>/1일 기준</span>
        </p>
        <p className="product-contents">
          공기청정기 1회 사용했습니다. 필요하시분은 대여해가세요.
        </p>
      </div>
      <div className="product-tag">
        <div className="tag">#디지털 기기</div>
        <div className="tag">#강남구</div>
      </div>
    </BoardItemWrapper>
  );
};

const BoardItemWrapper = styled.li`
  width: 254px;
  height: 368px;
  background-color: #c4c4c4;
  border-radius: 16px;

  // user-info
  .user-info {
    padding: 14px;
    display: flex;
    align-items: center;
    .user-img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #f2f2f2;
    }
    .user-nickname {
      margin-left: 8px;
      color: #8b8585;
      font-weight: bold;
      font-size: 14px;
    }
  }

  // board-img
  .board-img {
    margin: 0 14px;
    width: 220px;
    height: 189px;
    background-image: url('https://img.kr.news.samsung.com/kr/wp-content/uploads/2018/02/%EB%AA%A8%EB%93%88%ED%98%95-%EA%B3%B5%EA%B8%B0%EC%B2%AD%EC%A0%95%EA%B8%B0-%EC%82%BC%EC%84%B1-%ED%81%90%EB%B8%8C7_%EC%A0%9C%ED%92%88%EC%9D%B4%EB%AF%B8%EC%A7%80AX47N9980SSD_Silver.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 8px;
    margin-bottom: 16px;
  }

  // product-info
  .product-info {
    padding: 0 14px;
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 20px;
    .product-title {
      color: #777777;
      font-size: 1.6rem;
    }
    .product-price {
      font-size: 1.6rem;
      color: #777777;
      span {
        font-size: 1.2rem;
      }
    }
    .product-contents {
      width: 220px;
      font-size: 1.2rem;
      color: #777777;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

  // product-tag
  .product-tag {
    display: flex;
    padding: 0 14px;
    gap: 8px;
    .tag {
      color: #777777;
      background-color: #dedede;
      padding: 3px 6px;
      border-radius: 10px;
    }
  }
`;

export default BoardItem;
