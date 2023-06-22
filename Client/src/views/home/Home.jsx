import Cards from '../../components/cards/Cards.jsx';
import {useState} from 'react';

function Home(props) {

   const [characters, setCharacters] = useState([]);

   function closeHandler (id) {
      let deleted = characters.filter(character => character.id !== Number(id))
      setCharacters(deleted);
   };

   return (
      <div>
         <Cards characters={characters} onClose={closeHandler} />
      </div>
   );
}

export default Home;

