import { Routes as Switch, Route } from 'react-router-dom';

// COMPONENTS
import Products from '../../pages/Products';
import NotFound from '../../pages/NotFound';

export const ProductRoutes = () => {
	return (
		<Switch>
			<Route path="/products" element={<Products />} />
			<Route path="*" element={<NotFound />} />
		</Switch>
	);
};