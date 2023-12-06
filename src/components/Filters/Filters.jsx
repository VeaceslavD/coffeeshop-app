import classes from "./Filters.module.css";
import { useEffect, useState } from "react";

function Filters(props) {
    const defaultFilters = {
        brand: '',
        category: '',
        weight: '',
        sort: '',
    };
    const [filters, setFilters] = useState(defaultFilters);

    useEffect(() => {
        props.handleFilters(filters);
    }, [filters]);

    const handleClear = () => {
        props.handleClearAllFilters()
        setFilters(defaultFilters);
    };


    return (
        <div className={classes.filters}>
            <div className={classes.filtersContainer}>
                <select className={classes.listFilter} value={filters.sort} onChange={(event) => setFilters({ ...filters, sort: event.target.value })}>
                    <option value="">Sort</option>
                    <option value="maxMin">Price high to low</option>
                    <option value="minMax">Price low to high</option>
                </select>
            </div>

            <div className={classes.filtersContainer}>
                <select className={classes.listFilter} value={filters.brand} onChange={(event) => setFilters({ ...filters, brand: event.target.value })}>
                    <option value="">Brand</option>
                    <option value="Lavazza">Lavazza</option>
                    <option value="Illy">Illy</option>
                    <option value="Julius Meinl">Julius Meinl</option>
                    <option value="Melitta">Melitta</option>
                </select>
            </div>

            <div className={classes.filtersContainer}>
                <select className={classes.listFilter} value={filters.category} onChange={(event) => setFilters({ ...filters, category: event.target.value })}>
                    <option value="">Category</option>
                    <option value="wholeBeans">Whole beans</option>
                    <option value="groundBeans">Ground beans</option>
                    <option value="capsules">Capsules</option>
                </select>
            </div>

            <div className={classes.filtersContainer}>
                <select className={classes.listFilter} value={filters.weight} onChange={(event) => setFilters({ ...filters, weight: event.target.value })}>
                    <option value="">Weight</option>
                    <option value="1kg">1kg</option>
                    <option value="500g">500g</option>
                    <option value="250g">250g</option>
                    <option value="125g">125g</option>
                    <option value="8g">8g</option>
                </select>
            </div>

            <div className={classes.filtersContainer}>
                <button onClick={() => handleClear()}>Clear</button>
            </div>
        </div >
    )
};

export default Filters;