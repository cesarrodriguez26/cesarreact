import React, { useContext } from "react";
import { dataContext } from "../Context/DataContext";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('tu_clave_publica');

const CartTotal = () => {
  const { cart, clearCart } = useContext(dataContext); 

  const total = cart.reduce((acc, el) => acc + el.Price * el.quanty, 0);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: 'precio_123', quantity: 1 }], // Reemplaza 'precio_123' con el ID de tu producto/precio en Stripe
        mode: 'payment',
        successUrl: 'https://tudominio.com/success', // URL a la que redirigir al usuario después de un pago exitoso
        cancelUrl: 'https://tudominio.com/cancel', // URL a la que redirigir al usuario si cancela el pago
      });

      if (error) {
        console.error("Error al procesar el pago:", error);
      } else {
        console.log("Pago procesado exitosamente.");
        clearCart();
      }
    } catch (error) {
      console.error("Error al procesar el pago:", error);
    }
  };

  return (
    <div className="cartTotal">
      <h3>Total a pagar: {total} $</h3>
      <button onClick={handlePayment}>Pagar</button>
    </div>
  );
};

export default CartTotal;
