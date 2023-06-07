import {useNavigate} from 'react-router-dom';
import styles from './card.module.css';

export default function Card(props) {

   const navigate = useNavigate();
   
   const {character, onClose} = props;

   const navigateHandler = () => {
      navigate(`/detail/${character.id}`);
   };

   return (
      <div className={styles.card}>
         <button className={styles.button} onClick={()=>{onClose(character.id)}}>X</button>
         <img src={character.image} alt={character.name} className={styles.images}
         onClick={navigateHandler} />
         <div>
            <h2 className={styles.font}>Name: {character.name}</h2>
            <h2 className={styles.font}>Species: {character.species}</h2>
            <h2 className={styles.font}>Genre: {character.gender}</h2>
         </div>
      </div>
   );
}
