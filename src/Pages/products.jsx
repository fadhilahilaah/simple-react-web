import React, { Fragment } from "react";
import CardProduct from "../components/Fragments/CardProduct";
import Button from "../components/Elements/Button";

const products = [
  {
    id: 1,
    image: "/images/shoes-1.jpg",
    name: "Sepatu Hijau",
    desc: "Sepatu hijau yang trendi, nyaman dan stylish, sempurna untuk aktivitas sehari-hari dan menambah gaya dalam penampilan Anda.",
    price: "Rp 1.200.000",
  },
  {
    id: 2,
    image: "/images/shoes-2.jpg",
    name: "Sepatu Putih",
    desc: "Sepatu putih yang elegan dan nyaman, cocok untuk segala aktivitas, memberikan sentuhan stylish dan modern pada penampilan Anda.",
    price: "Rp 2.100.000",
  },
  {
    id: 3,
    image: "/images/shoes-3.jpg",
    name: "Sepatu Merah",
    desc: "Sepatu merah menawan, nyaman, dan stylish. Ideal untuk segala aktivitas, memberikan sentuhan berani pada penampilan Anda setiap hari.",
    price: "Rp 1.000.000",
  },
];

const email = localStorage.getItem("email");

const ProductsPage = () => {
  const handleLogout = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("password");
    window.location.href = "/login";
  };

  return (
    <Fragment>
      <div className="flex items-center px-10 justify-end h-20 bg-blue-400 text-white">
        {email}
        <Button onClick={handleLogout} style="ml-5 bg-black">
          Logout
        </Button>
      </div>

      <div className="flex justify-center py-5">
        {products.map((product) => (
          <CardProduct key={product.id}>
            <CardProduct.Header image={product.image} />
            <CardProduct.Body name={product.name}>
              {product.desc}
            </CardProduct.Body>
            <CardProduct.Footer price={product.price} />
          </CardProduct>
        ))}
      </div>
    </Fragment>
  );
};

export default ProductsPage;
