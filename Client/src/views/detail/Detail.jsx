import axios from 'axios';
import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import styles from './detail.module.css'

function Detail() {

    const {id} = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

    return (
        <div className={styles.detailContainer}>
            <div className={styles.detail}>
                <h1 className={styles.font}>+ Name: {character.name}</h1>
                <h2 className={styles.font}>+  Status: {character.status}</h2>
                <h2 className={styles.font}>+  Specie: {character.species}</h2>
                <h2 className={styles.font}>+  Gender: {character.gender}</h2>
                <h2 className={styles.font}>+  Origin: {character.origin?.name}</h2>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={character.image} alt={character.name}/>
            </div>
        </div>
    );
}

export default Detail;