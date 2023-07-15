import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import CartElements from "./CartElements";
import Navbar from "../Navbar/Navbar";
import CartTotal from "./CartTotal";
import "./CartContent.css";

const CartContent = () => {
  const { cart } = useContext(dataContext);
return (
  <>
  <Navbar />
  {cart.length > 0 ? (
    <>
 <CartElements />
  <CartTotal />
  </>
  ) : (
    <h2 className='cart-message-center'>Tu carrito esta vacio</h2>
 )}
 </> 
);
  };

export default CartContent;
