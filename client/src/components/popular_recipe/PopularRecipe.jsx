import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const PopularRecipe = ({ initialProduct = [] }) => {
  const [product, SetProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=6");
      const data = await response.json();
      SetProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <div className="text-blackk bg-primary font-Poppins">
        <h2 className="text-center text-5xl pt-10 font-semibold">
          Popular Recipe
        </h2>
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap -mb-4 justify-center">
            {product.map((product) => {
              console.log(product, "product");
              const { id, title, price, category, image } = product;
              return (
                <Link
                  to={`/products/${id}`}
                  className="lg:w-1/4 md:w-1/2 p-4 bg-whitee w-full mb-5 mx-5 cursor-pointer rounded-lg shadow-md border border-opacity-50"
                  key={id}
                >
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      alt={title}
                      className="shadow-lg object-contain  mx-auto w-full h-full block"
                      src={image}
                    />
                  </a>
                  <div className="mt-4">
                    <h3 className="text-slate-500 text-xs tracking-widest uppercase title-font mb-1">
                      {category}
                    </h3>
                    <a href={`/products/${id}`}>
                      <h2 className="text-slate-900 title-font text-lg font-bold">
                        {title}
                      </h2>
                    </a>
                    <p className="mt-1">${price}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default PopularRecipe;
