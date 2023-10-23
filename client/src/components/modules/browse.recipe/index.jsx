import React from "react";

const BrowseRecipe = () => {
  const [product, SetProduct] = useState([]);
  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      SetProduct(data);
    };
    fetchProduct();
  }, []);

  return (
    <>
      <section className="text-slate-600 pt-28">
        <h2 className="text-center text-lg mt-5 tracking-widest uppercase">
          Product
        </h2>
        <h2 className="font-bold text-center text-2xl uppercase text-ungu">
          Browse All Product
        </h2>
        <div className="container px-5 py-20 mx-auto">
          <div className="flex flex-wrap mb-4 justify-center">
            {product.map((product) => {
              console.log(product, "product");
              const { id, title, price, category, image } = product;
              return (
                <Link
                  to={`/products/${id}`}
                  className="lg:w-1/4 md:w-1/2 p-4 w-full mb-5 mx-5 cursor-pointer rounded-lg shadow-md border border-opacity-50"
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
      </section>
    </>
  );
};

export default BrowseRecipe;
