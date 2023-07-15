import { useContext } from "react";
import { dataContext } from "../Context/DataContext";

const CartItemCounter = ({ Product,}) => {
  const { cart, setCart, buyProducts } = useContext(dataContext);

  const decrese = ()=>{
    const productrepeat = cart.find((item) => item.id === Product.id);
   
    productrepeat.quanty !== 1 && 
    setCart(cart.map((item)=> item.id ===Product.id ? {...Product, quanty: productrepeat.quanty - 1} : item));
    };

return (
   <>
   <p className='counter-button' onClick={decrese}>-</p>
   <p>{Product.quanty}</p>
   <p className='counter-button'onClick={() => buyProducts(Product)}>+</p>
   </>
  );
};

export default CartItemCounter;
