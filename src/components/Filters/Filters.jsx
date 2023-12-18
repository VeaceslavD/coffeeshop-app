import FilterSelect from "../FilterSelect/FilterSelect";
import classes from "./Filters.module.css";
import { useEffect, useState } from "react";

function Filters(props) {
    const defaultFilters = {
        brand: '',
        category: props.category,
        weight: '',
        sort: '',
    };
    const [filters, setFilters] = useState(defaultFilters);
    const sort = [
        { name: 'Price high to low', type: 'maxMin' },
        { name: 'Price low to high', type: 'minMax' }
    ];
    const brands = [
        { name: 'Lavazza', type: 'Lavazza' },
        { name: 'Illy', type: 'Illy' },
        { name: 'Julius Meinl', type: 'Julius Meinl' },
        { name: 'Melitta', type: 'Melitta' },
    ];
    const categories = [
        { name: 'Whole Beans', type: 'wholeBeans' },
        { name: 'Ground Beans', type: 'groundBeans' },
        { name: 'Capsules', type: 'capsules' }
    ];
    const weights = [
        { name: '1kg', type: '1kg' },
        { name: '500g', type: '500g' },
        { name: '250g', type: '250g' },
        { name: '125g', type: '125g' },
        { name: '8g', type: '8g' },
    ];

    useEffect(() => {
        props.handleFilters(filters);
    }, [filters]);

    return (
        <div className={classes.filters}>
            <FilterSelect
                label="Sort"
                value={filters.sort}
                options={sort}
                onChange={(event) => setFilters({ ...filters, sort: event.target.value })} />

            <FilterSelect
                label="Brand"
                value={filters.brand}
                options={brands}
                onChange={(event) => setFilters({ ...filters, brand: event.target.value })} />

            <FilterSelect
                label="Category"
                value={filters.category}
                options={categories}
                onChange={(event) => setFilters({ ...filters, category: event.target.value })} />

            <FilterSelect
                label="Weight"
                value={filters.weight}
                options={weights}
                onChange={(event) => setFilters({ ...filters, weight: event.target.value })} />

            <div className={classes.filtersContainer}>
                <button onClick={() => setFilters(defaultFilters)}>Clear</button>
            </div>
        </div >
    )
};

export default Filters;