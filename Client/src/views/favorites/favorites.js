import Cards from "../../components/cards/Cards";
import {useDispatch, useSelector} from "react-redux";
import { orderFavorites, filterFavorites, resetFavorites } from "../../redux/actions"; 
import {useState} from "react";

export default function Favorites (props) {

    const favorites = useSelector((state) => state.myFavorites);
    
    const dispatch = useDispatch();

    const [aux, setAux] = useState(false)

    function handleOrder (e) {
        dispatch(orderFavorites(e.target.value));
        setAux(true);
    };

    function handleFilter (e) {
        dispatch(filterFavorites(e.target.value));
    };

    function handleReset () {
        dispatch(resetFavorites());
    };

    return (
        <div>
            <select placeholder="Order" onChange={handleOrder}>
                {["Ascendente", "Descendente"].map((order) => (
                    <option value={order}>{order}</option>
                    ))}
            </select>
            <select placeholder="Gender" onChange={handleFilter}>
                {["Male", "Female", "unknown", "Genderless"].map((gender) => (
                    <option value={gender}>{gender}</option>
                    ))}
            </select>
            <button onClick={handleReset}>Reset filters</button>
            <Cards characters={favorites} onClose={props.onClose}/>;
        </div>
    );
} 

