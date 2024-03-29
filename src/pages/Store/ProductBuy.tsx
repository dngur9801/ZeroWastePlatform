import styled from "styled-components";
import CouponPointContainer from "../../components/Store/ProductBuy/CouponPoint/CouponPointContainer";
import OrderInfo from "../../components/Store/ProductBuy/OrdererInfo/OrderInfo";
import OrderProductContainer from "../../components/Store/ProductBuy/OrderProduct/OrderProductContainer";
import PayMethodContainer from "../../components/Store/ProductBuy/PayMethod/PayMethodContainer";
import ShipInfoContainer from "../../components/Store/ProductBuy/ShipInfo/ShipInfoContainer";
import SlideBox from "../../components/Store/ProductBuy/SlideBox/SlideBox";

const ProductBuy = () => {
  return (
    <ProductBuyLayout>
      <ProductBuyContentList>
        <OrderInfo />
        <ShipInfoContainer />
        <OrderProductContainer />
        <CouponPointContainer />
        <PayMethodContainer />
      </ProductBuyContentList>
      <SlideBox />
    </ProductBuyLayout>
  );
};

const ProductBuyLayout = styled.main`
  display: flex;
  width: 1320px;
  margin: 100px auto 0 auto;
`;

const ProductBuyContentList = styled.div`
  width: calc(100% - 530px);
`;

export default ProductBuy;
