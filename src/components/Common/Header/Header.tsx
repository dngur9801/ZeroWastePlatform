import { Link } from "react-router-dom";
import {
  HeaderBagImg,
  HeaderBellImg,
  HeaderBoldText,
  HeaderBox,
  HeaderHeartImg,
  HeaderLayout,
  HeaderLogoImg,
  HeaderNotLoggedInMenuBox,
  HeaderText,
} from "./Header.styles";
import HeaderLoggedInMenuContainer from "./LoggedInMenu/LoggedInMenuContainer";
import SearchContainer from "./Search/SearchContainer";

interface HeaderProps {
  isLogin: boolean;
}

const Header = ({ isLogin }: HeaderProps) => {
  return (
    <HeaderLayout>
      <HeaderBox>
        <Link to="/">
          <HeaderLogoImg />
        </Link>
        <Link to="/store">
          <HeaderBoldText>스토어</HeaderBoldText>
        </Link>
        <Link to="/community/board">
          <HeaderBoldText>커뮤니티</HeaderBoldText>
        </Link>
        <SearchContainer />
        {isLogin && (
          <>
            <Link to="/">
              <HeaderHeartImg />
            </Link>
            <Link to="/store/basket">
              <HeaderBagImg />
            </Link>
          </>
        )}
        {isLogin ? (
          <HeaderLoggedInMenuContainer />
        ) : (
          <HeaderNotLoggedInMenuBox>
            <Link to="/login">
              <HeaderText>로그인</HeaderText>
            </Link>
            |
            <Link to="/">
              <HeaderText>고객센터</HeaderText>
            </Link>
          </HeaderNotLoggedInMenuBox>
        )}
      </HeaderBox>
    </HeaderLayout>
  );
};

export default Header;
