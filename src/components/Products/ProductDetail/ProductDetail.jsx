import { useEffect, useState } from "react";

import { ProductDetailWrapper } from "./styled";
import cartImg from "../../../asset/icon-shopping-cart.svg";
import heartImg from "../../../asset/icon-heart.svg";
import heartOnImg from "../../../asset/icon-heart-on.svg";

const ProductDetail = ({ locationData }) => {
  const [data, setData] = useState();
  const [count, setCount] = useState(1);
  const [isLike, setIsLike] = useState(false);

  useEffect(() => {
    if (locationData) {
      setData(() => {
        return { ...locationData.state.data };
      });
    }
  }, []);

  const onClickCountHandler = (type) => {
    if (type === "increment") {
      if (data.stockCount > count) {
        setCount((prev) => prev + 1);
      }
    } else {
      if (count > 1) {
        setCount((prev) => prev - 1);
      }
    }
  };

  return (
    <ProductDetailWrapper>
      <h2 className="hidden">상품 가격 및 정보</h2>
      {data && (
        <div className="detail-main">
          <img
            src={`https://test.api.weniv.co.kr/${data.thumbnailImg}`}
            alt=""
          />
          <ul>
            <li className="product-title">{data.productName}</li>
            <li className="product-price">
              <strong>{data.price}</strong> 원
            </li>
            <li className="delivery">택배배송 / {data.shippingFee}원</li>
            <li className="quantity">
              <div className="quantity-btn-box">
                <button onClick={() => onClickCountHandler("decrement")}>
                  -
                </button>
                <p>{count}</p>
                <button onClick={() => onClickCountHandler("increment")}>
                  +
                </button>
              </div>
            </li>
            <li className="product-result-box">
              <strong className="result-title">총 상품 금액</strong>
              <span className="result-quantity">
                총 수량
                <strong> {count}</strong>개
              </span>
              <span className="result-price">
                <strong>
                  {(data.price * count)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </strong>
                원
              </span>
            </li>
            <li className="product-btn-box">
              <button className="buy-btn">바로 구매</button>
              <button className="cart-btn">
                <img src={cartImg} alt="장바구니" />
              </button>
              <button
                className="like-btn"
                onClick={() => {
                  setIsLike((prev) => !prev);
                }}
              >
                <img src={isLike ? heartOnImg : heartImg} alt="좋아요" />
              </button>
            </li>
          </ul>
        </div>
      )}
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
