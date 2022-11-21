import Home from "./routes/home/home.component.jsx";
import Shop from "./routes/shop/shop.component";
import Authentication from "./routes/authentication/authentication.component.jsx";
import Checkout from "./routes/checkout/checkout.component.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/home/navigation/navigation.component.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop" element={<Shop />} />
				<Route path="auth" element={<Authentication />} />
				<Route path="checkout" element={<Checkout />} />
			</Route>
		</Routes>
	);
};

export default App;
