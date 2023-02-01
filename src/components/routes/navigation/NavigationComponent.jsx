import {LogoContainer, NavigationContainer, NavLink, NavLinks} from "./navigation.styles.jsx";
import { Outlet} from "react-router-dom";
import {ReactComponent as CrownLogo} from "../../../assets/crown.svg";
import {useContext} from "react";
import {UserContext} from "../../../context/UserContext";
import {signOutUser} from "../../../utils/firebase/Firebase";
import CartIcon from "../../cart-icon/CartIconComponent";
import CartDropdown from "../../cart-dropdown/CartDropdownComponent";
import {CartContext} from "../../../context/CartContext";

const Navigation = () => {
  const {currentUser} = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext);

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrownLogo className="logo" />
        </LogoContainer>

        <NavLinks>
          <NavLink to="/shop">
            SHOP
          </NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SIGN-IN
            </NavLink>
          )}
          <CartIcon/>
        </NavLinks>
        {isCartOpen && <CartDropdown/>}
      </NavigationContainer>
      <Outlet />
    </>
  );
};
export default Navigation;
