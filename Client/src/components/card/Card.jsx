import {useNavigate} from 'react-router-dom';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import {addFav, removeFav} from '../../redux/actions'; 
import styles from './card.module.css';

function Card(props) {

   const navigate = useNavigate();

   const {character, onClose, addFav, removeFav, favorites} = props;
   
   const [fav, setFav] = useState(false);
   
   useEffect(() => {
      favorites.forEach((fav) => {
         if (fav.id === character.id) {
            setFav(true);
         }
      });
   }, [favorites]);
   
   
   const navigateHandler = () => {
      navigate(`/detail/${character.id}`);
   };
   
   function handleFavorite (data) {
      if (!fav) {
         addFav(data)
         setFav(true)
      }
      else {
         removeFav(data)
         setFav(false)
      }
   }

   return (
      <div className={styles.card}>
         <button className={styles.button} onClick={()=>{onClose(character.id)}}>X</button>
         <img src={character.image} alt={character.name} className={styles.images}
         onClick={navigateHandler} 
         />
         {fav ? (
            <button onClick={() => handleFavorite(character.id)}>❤️</button>
         ) : (
            <button onClick={() => handleFavorite(character)}>🤍</button>
         )}
         <div className={styles.info}>
            <h2 className={styles.font}> + Name: {character.name}</h2>
            <h2 className={styles.font}> + Species: {character.species}</h2>
            <h2 className={styles.font}> + Genre: {character.gender}</h2>
         </div>
            <h3 className={styles.number}>{character.id}</h3>
      </div>
   );
}

const mapDispatchToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),

      removeFav: (id) => dispatch(removeFav(id))
   }
}

const mapStateToProps = (state) => {
   return {
      favorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)