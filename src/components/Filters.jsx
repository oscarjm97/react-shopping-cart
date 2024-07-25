import { useId } from 'react';
import { useFilters } from '../hooks/useFilters';
import '../styles/Filters.css';

export function Filters() {
    const { filters, setFilters } = useFilters();

    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) => {
        setFilters((prevState) => ({
            ...prevState,
            minPrice: event.target.value,
        }));
    };

    const handleChangeCategory = (event) => {
        setFilters((prevState) => ({
            ...prevState,
            category: event.target.value,
        }));
    };

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Price from:</label>
                <input
                    type='range'
                    id={minPriceFilterId}
                    min='0'
                    max='1000'
                    value={filters.minPrice}
                    onChange={handleChangeMinPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value='all'>All</option>
                    <option value='beauty'>Beauty</option>
                    <option value='fragrances'>Fragrances</option>
                    <option value='furniture'>Furniture</option>
                    <option value='groceries'>Groceries</option>
                </select>
            </div>
        </section>
    );
}
