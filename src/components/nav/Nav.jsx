import {NavLink} from 'react-router-dom';
import SearchBar from '../searchBar/SearchBar'; 
import styles from './nav.module.css';

export default function Nav (props) {

    const {onSearch, random} = props;
    return (
        <nav className={styles.nav}>
            <SearchBar onSearch={onSearch} random={random}/>
            <NavLink to='/Home'>
                <button className={styles.buttons}>Home</button>
            </NavLink>
            <NavLink to='/About'>
                <button className={styles.buttons}>About</button>
            </NavLink>
            <NavLink to='/Favorites'>
                <button className={styles.buttons}>Favorites</button>
            </NavLink>
        </nav>
    );
}