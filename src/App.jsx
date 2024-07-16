import { products as initialProducts } from './mocks/products.json';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Products } from './components/Products';
import { useFilters } from './hooks/useFilters';

import { IS_DEVELOPMENT } from './config';

function App() {
    const { filterProducts } = useFilters();

    const filteredProducts = filterProducts(initialProducts);

    return (
        <>
            <Header />
            <Products products={filteredProducts} />
            {IS_DEVELOPMENT && <Footer />}
        </>
    );
}

export default App;
