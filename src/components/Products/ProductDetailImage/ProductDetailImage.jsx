import { useEffect, useState } from "react";
import { ProductDetailImageWrapper } from "./styled";

const ProductDetailImage = ({ locationData }) => {
  const [imageData, setImageData] = useState([]);

  useEffect(() => {
    if (locationData) {
      setImageData(locationData.state.data.detailInfoImage);
    }
  }, []);

  return (
    <ProductDetailImageWrapper>
      <h2 className="hidden">상세 이미지</h2>
      {imageData.map((el, idx) => (
        <img src={`https://test.api.weniv.co.kr/${el}`} key={idx} />
      ))}
    </ProductDetailImageWrapper>
  );
};

export default ProductDetailImage;
