import { Link } from "react-router-dom";
import ProductList from "../../components/Products/ProductList/ProductList";
import cartIcon from "../../asset/icon-shopping-cart-white.svg";
import { HomePageWrapper } from "./styled";
import { useState } from "react";

const HomePage = () => {
  const [cartData, setCartData] = useState([]);

  return (
    <HomePageWrapper>
      <h1 className="hidden">메인페이지</h1>
      <ProductList setCartData={setCartData} />
      <Link to={"cart"}>
        <img src={cartIcon} alt="장바구니" />
      </Link>
    </HomePageWrapper>
  );
};

export default HomePage;
