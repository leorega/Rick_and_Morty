import {useState} from 'react';
import styles from './searchBar.module.css';

export default function SearchBar(props) {

   const {onSearch, random} = props;

   const [id, setId] = useState('')

   function changeHandler (event) {
      event.preventDefault();
      let input = event.target.value

      setId(input)
   }

   return (
      <div className={styles.searchBar}>
         <input className={styles.input} type='search' value={id} onChange={changeHandler}/>
         <button className={styles.button} onClick={()=>onSearch(id)}>Search</button>
         <button className={styles.button} onClick={()=>random()}>Random</button>
      </div>
   );
}
