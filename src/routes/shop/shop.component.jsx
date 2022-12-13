import SHOP_DATA from "../../shop-data";
import { useContext } from "react";
import { CategoriesContext } from "../../contexts/categories.context.jsx";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";
import { Route, Routes } from "react-router-dom";

const Shop = () => {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />}/>
			<Route path=":category" element={<Category/>}/>
		</Routes>
	);
};

export default Shop;
