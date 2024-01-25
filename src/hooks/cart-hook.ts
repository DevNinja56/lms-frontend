import { useEffect, useState } from "react";
import toast from "react-hot-toast";
export interface ItemType {
  id: string;
  image: string;
  name: string;
  price: string;
}

const useCourseCart = () => {
  const [cartItems, setCartItems] = useState<ItemType[]>([]);

  const fetchCart = () => {
    const cartState = JSON.parse(localStorage.getItem("CartItem") || "[]");
    setCartItems(cartState);
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    for (const item of cartItems) {
      totalPrice = totalPrice + +item.price;
    }
    return totalPrice;
  };

  useEffect(() => {
    fetchCart();
    calculateTotalPrice();
  }, []);

  const addToCart = (item: ItemType) => {
    const itemExists = cartItems.some((cartItem) => cartItem.id === item.id);
    if (itemExists) {
      toast.error("Item already in the cart");
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, item]);
      localStorage.setItem("CartItem", JSON.stringify([...cartItems, item]));
      toast.success("Course added to Cart");
    }
  };

  const removeFromCart = (itemId: string) => {
    setCartItems((prevCartItems) => {
      const newCartItems = prevCartItems.filter((item) => item.id !== itemId);
      localStorage.setItem("CartItem", JSON.stringify(newCartItems));
      return newCartItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    fetchCart,
    calculateTotalPrice,
  };
};

export default useCourseCart;
