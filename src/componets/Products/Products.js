import { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import "./Products.css";

const Products = () => {
const { data, buyProducts } = useContext(dataContext);

return data.map((Product)=> {
    return (
        <div className='card' key={Product.id}>
            <img src={Product.img} alt='img-product-card' />
            <h3>{Product.name}</h3>
            <h4>{Product.Price}$</h4>
            <button onClick={() => buyProducts(Product)}>Añadir al Carrito</button>
            </div>
    );
  });
};

export default Products;
