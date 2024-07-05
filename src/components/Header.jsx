import { Filters } from './Filters.jsx';

export function Header({ onChangeFilters }) {
    return (
        <header>
            <h1>React Shop</h1>
            <Filters onChangeFilters={onChangeFilters} />
        </header>
    );
}
