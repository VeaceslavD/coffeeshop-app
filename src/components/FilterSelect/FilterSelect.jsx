import classes from "./FilterSelect.module.css";

function FilterSelect(props) {
    return (
        <div className={classes.filtersContainer}>
            <select
                className={classes.listFilter}
                value={props.value}
                onChange={props.onChange}
            >
                <option value="">{props.label}</option>
                {props.options.map((option,index) => (
                    <option key={index} value={option.type}>
                        {option.name}
                    </option> 
                ))}
            </select>
        </div>
    )
};

export default FilterSelect;