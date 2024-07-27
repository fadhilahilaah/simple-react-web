import React, { Fragment, useEffect, useRef, useState } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    image: "/images/shoes-1.jpg",
    name: "Sepatu Hijau",
    desc: "Sepatu hijau yang trendi, nyaman dan stylish, sempurna untuk aktivitas sehari-hari dan menambah gaya dalam penampilan Anda.",
    price: 1200000,
  },
  {
    id: 2,
    image: "/images/shoes-2.jpg",
    name: "Sepatu Putih",
    desc: "Sepatu putih yang elegan dan nyaman, cocok untuk segala aktivitas, memberikan sentuhan stylish dan modern pada penampilan Anda.",
    price: 2100000,
  },
  {
    id: 3,
    image: "/images/shoes-3.jpg",
    name: "Sepatu Merah",
    desc: "Sepatu merah menawan, nyaman, dan stylish. Ideal untuk segala aktivitas, memberikan sentuhan berani pada penampilan Anda setiap hari.",
    price: 1000000,
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem("cart")) || []);
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  const handleAddToCart = (id) => {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  };

  // useRef
  const cartRef = useRef(null);

  useEffect(() => {
    if (cart.length > 0) {
      cartRef.current.style.display = "block";
    } else {
      cartRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <Fragment>
      {/* navbar start */}
      <div className="flex items-center px-10 justify-between h-20 bg-blue-400 text-white">
        <h1 className="text-3xl font-bold text-white">
          Nuka<span className="text-black">Dev</span>
        </h1>
        <div>
          {email}
          <Button onClick={handleLogout} style="ml-5 bg-black">
            Logout
          </Button>
        </div>
      </div>
      {/* navbar end */}

      {/* card product start */}
      <div className="flex justify-center py-5">
        <div className="flex w-4/6 flex-wrap">
          {products.map((product) => (
            <CardProduct key={product.id}>
              <CardProduct.Header image={product.image} />
              <CardProduct.Body name={product.name}>
                {product.desc}
              </CardProduct.Body>
              <CardProduct.Footer
                price={product.price}
                id={product.id}
                handleAddToCart={handleAddToCart}
              />
            </CardProduct>
          ))}
        </div>
        {/* card product end */}

        {/* cart start */}
        <div className="w-2/6 shadow-sm" ref={cartRef}>
          <h1 className="text-3xl font-bold text-blue-600 ml-5 mb-2">Cart</h1>

          <table className="text-left table-auto border-separate border-spacing-x-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                const product = products.find(
                  (product) => product.id === item.id
                );
                return (
                  <tr key={item.id}>
                    <td>{product.name}</td>
                    <td>
                      Rp{" "}
                      {product.price.toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                    <td>{item.qty}</td>
                    <td>
                      Rp{" "}
                      {(item.qty * product.price).toLocaleString("id-ID", {
                        styles: "currency",
                        currency: "IDR",
                      })}
                    </td>
                  </tr>
                );
              })}

              {/* total price */}
              <tr>
                <td colSpan={3}>
                  <b>Total Price</b>
                </td>
                <td>
                  <b>
                    Rp{" "}
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "IDR",
                    })}
                  </b>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* cart end */}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
