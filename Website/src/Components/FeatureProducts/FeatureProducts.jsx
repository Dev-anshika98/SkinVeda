import React, { useState } from "react";
import css from "./FeatureProducts.module.css";
import Plane from "../../assets/Decoration/plane.png";
import { FeatureProductsData } from "../../data/FeatureProducts";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const Products = () => {
    const [parent] = useAutoAnimate();
    const [menuProducts, setMenuProducts] = useState(FeatureProductsData);

    const filter = (type) => {
        setMenuProducts(FeatureProductsData.filter((product) => product.type === type));
    };

    return (
        <div className={css.container}>
            <img src={Plane} alt="decoration" />
            <h1>Our Feature Products</h1>

            <div className={css.products}>
                <ul className={css.menu}>
                    <li onClick={() => setMenuProducts(FeatureProductsData)}>All</li>
                    <li onClick={() => filter("skin care")}>Skin Care</li>
                    <li onClick={() => filter("conditioner")}>Conditioners</li>
                    <li onClick={() => filter("foundation")}>Foundations</li>
                </ul>
                <div className={css.list} ref={parent}>
                    {menuProducts.map((product, idx) => (
                        <div className={css.product} key={idx}>
                            <img src={product.img} alt="Product" className={css.imgP} />
                            <div className={css.name}>
                                <span>{product.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
