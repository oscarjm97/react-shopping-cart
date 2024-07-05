import { useState } from 'react';
import { products as initialProducts } from './mocks/products.json';
import { Header } from './components/Header';
import { Products } from './components/Products';

function App() {
    const [products] = useState(initialProducts);
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0,
    });

    const filterProducts = (products) => {
        return products.filter((product) => {
            return (
                product.price >= filters.minPrice &&
                (filters.category === 'all' || product.category === filters.category)
            );
        });
    };

    return (
        <>
            <Header onChangeFilters={setFilters} />
            <Products products={filterProducts(products)} />
        </>
    );
}

export default App;
