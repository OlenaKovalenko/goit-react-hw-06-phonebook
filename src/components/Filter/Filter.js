import { useDispatch, useSelector } from "react-redux"
import { FilterInput, FilterTitle } from "./Filter.styled"
import { getFilter } from "redux/selectors"
import { changeFilter } from "redux/filterSlice";

export const Filter = () => {
    const filterInput = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleFilterChange = filter => dispatch(changeFilter(filter));
    return (
        <>
            <FilterTitle>Find contacts by name</FilterTitle>
            <FilterInput type="text" name="name" id="nameFilter" value={filterInput} required onChange={() => handleFilterChange(filterInput)}/>
        </>
    )
}
