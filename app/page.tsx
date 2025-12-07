"use client";

import { useEffect, useState } from "react";
import FilterHandler from "@/app/components/filterHandler";
import Header from "./components/header/header";
import CategorySelection from "@/app/components/categorySelection";
import ProductCard from "@/app/components/productCard";
import "@/app/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./redux/store";
import { fetchProductsRequest } from "./redux/actions/productActions";
import Loader from "@/app/components/loader";
import Footer from "./components/footer";

export default function Home() {
  const [activeRoute, setActiveRoute] = useState("shop");
  const [isFilterOpen, setIsFilterOpen] = useState(true);

  const dispatch = useDispatch<AppDispatch>();
  const data = useSelector((state: RootState) => state.products);

  // const renderContent = () => {
  //   switch (activeRoute) {
  //     case "about":
  //       return <About />;
  //     case "contact":
  //       return <Contact />;
  //     case "shop":
  //       return <Shop />;
  //     case "skills":
  //       return <Skills />;
  //     case "stories":
  //       return <Stories />;
  //     default:
  //       return <Shop />;
  //   }
  // };

  // const products = [
  // {
  //   id: 1,
  //   title: "Classic Cotton Hoodie",
  //   image: "/products/hoodie-1.jpg",
  //   price: 129.99,
  //   isFavorite: false,
  // },
  // {
  //   id: 2,
  //   title: "Slim Fit Denim Jacket",
  //   image: "/products/jacket-1.jpg",
  //   price: 189.49,
  //   isFavorite: true,
  // },
  // {
  //   id: 3,
  //   title: "Casual Sneakers",
  //   image: "/products/sneakers-1.jpg",
  //   price: 219.0,
  //   isFavorite: false,
  // },
  // {
  //   id: 4,
  //   title: "White Logo T-Shirt",
  //   image: "/products/tshirt-1.jpg",
  //   price: 59.99,
  //   isFavorite: false,
  // },
  // {
  //   id: 5,
  //   title: "White Logo T-Shirt",
  //   image: "/products/tshirt-1.jpg",
  //   price: 59.99,
  //   isFavorite: false,
  // },
  // {
  //   id: 6,
  //   title: "White Logo T-Shirt",
  //   image: "/products/tshirt-1.jpg",
  //   price: 59.99,
  //   isFavorite: false,
  // },
  // ];

  console.log("data", data);

  const products = data.products;

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  return (
    <div>
      <Header activeRoute={activeRoute} setActiveRoute={setActiveRoute} />
      <FilterHandler isOpen={isFilterOpen} setIsOpen={setIsFilterOpen} />
      {data.loading ? (
        <Loader />
      ) : (
        <div className={`layout ${!isFilterOpen ? "full-width" : ""}`}>
          {isFilterOpen && (
            <div className="sidebar">
              <CategorySelection
                data={[
                  {
                    title: "IDEAL FOR",
                    options: ["Men", "Women", "Baby & Kids"],
                  },
                  { title: "OCCASION" },
                  { title: "WORK" },
                  { title: "FABRIC" },
                  { title: "SEGMENT" },
                  { title: "SUITABLE FOR" },
                ]}
              />
            </div>
          )}

          <div className={`products-grid ${!isFilterOpen ? "full-width" : ""}`}>
            {products?.map((item) => (
              <ProductCard key={item.id} data={item} />
            ))}
          </div>
        </div>
      )}
      <Footer />
      {/* <div>{renderContent()}</div> */}
    </div>
  );
}
