import { useEffect, useState } from "react";
import { getProductData } from "../../../api/api";
import Product from "../Product/Product";
import { ProductListWrapper } from "./styled";

const ProductList = ({ setCartData }) => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    getProductData().then((data) => {
      setProductData(data);
    });
  }, []);

  const onClickLikeHanlder = (setState, data) => {
    setState((prev) => !prev);
    setCartData((prev) => [...prev, { ...data }]);
  };

  return (
    <ProductListWrapper>
      {productData.map((item) => (
        <Product
          key={item.id}
          data={item}
          onClickLikeBtn={onClickLikeHanlder}
        />
      ))}
    </ProductListWrapper>
  );
};

export default ProductList;
