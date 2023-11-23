import classes from "./Filters.module.css";
import { filterByBrand, filterByCategory, filterByCountry, filterByWeight, getProducts, sortPriceHighToLow, sortPriceLowToHigh } from "../../routes/Menu/Menu.services";
import arrowIcon from "../../assets/media/arrow.svg"

function Filters(props) {
    const brands = ['Lavazza', 'Julius Meinl', 'Illy', 'Melitta'];
    const countries = ['Italy', 'Germany', 'Hungary', 'Austria'];
    const categories = ['Whole beans', 'Ground beans', 'Capsules'];
    const weights = ['1kg', '500g', '250g', '125g'];

    const handleSortPriceHighToLow = () => {
        const dataProducts = getProducts();
        const sortedProducts = sortPriceHighToLow(dataProducts);

        props.setProducts(sortedProducts);
    };

    const handleSortPriceLowToHigh = () => {
        const dataProducts = getProducts();
        const sortedProducts = sortPriceLowToHigh(dataProducts);

        props.setProducts(sortedProducts);
    };

    const handleFilterByBrand = (brand) => {
        const filteredProducts = filterByBrand(brand);

        props.setProducts(filteredProducts);
    };

    const handleFilterByCountry = (country) => {
        const filteredProducts = filterByCountry(country);

        props.setProducts(filteredProducts);
    };

    const handleFilterByCategory = (category) => {
        const filteredProducts = filterByCategory(category);

        props.setProducts(filteredProducts);
    };

    const handleFilterByWeight = (weight) => {
        const filteredProducts = filterByWeight(weight);

        props.setProducts(filteredProducts);
    };

    return (
        <div className={classes.filters}>
            <div className={classes.filtersContainer}>
                <button>
                    Sort
                    <img src={arrowIcon} alt="arrowIcon" />
                </button>
                <ul className={classes.listFilter}>
                    <li onClick={() => handleSortPriceHighToLow()}>Price high to low</li>
                    <li onClick={() => handleSortPriceLowToHigh()}>Price low to high</li>
                </ul>
            </div>

            <div className={classes.filtersContainer}>
                <button>
                    Brand
                    <img src={arrowIcon} alt="arrowIcon" />
                </button>
                <ul className={classes.listFilter}>
                    {brands.map(brand => (
                        <li key={brand} onClick={() => handleFilterByBrand(brand)}>
                            {brand}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={classes.filtersContainer}>
                <button>
                    Country
                    <img src={arrowIcon} alt="arrowIcon" />
                </button>
                <ul className={classes.listFilter}>
                    {countries.map(country => (
                        <li key={country} onClick={() => handleFilterByCountry(country)}>
                            {country}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={classes.filtersContainer}>
                <button>
                    Category
                    <img src={arrowIcon} alt="arrowIcon" />
                </button>
                <ul className={classes.listFilter}>
                    {categories.map(category => (
                        <li key={category} onClick={() => handleFilterByCategory(category)}>
                            {category}
                        </li>
                    ))}
                </ul>
            </div>

            <div className={classes.filtersContainer}>
                <button>
                    Weight
                    <img src={arrowIcon} alt="arrowIcon" />
                </button>
                <ul className={classes.listFilter}>
                    {weights.map(weight => (
                        <li key={weight} onClick={() => handleFilterByWeight(weight)}>
                            {weight}
                        </li>
                    ))}
                </ul>
            </div>
        </div >
    )
};

export default Filters;