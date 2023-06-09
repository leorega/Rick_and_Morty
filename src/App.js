import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';
import About from './views/about/About';
import Nav from './components/nav/Nav';
import Cards from './components/cards/Cards';
import Detail from './views/detail/Detail';
import Form from './components/form/Form';
import ErrorPage from './views/error/ErrorPage';
import './App.css';
import Favorites from './views/favorites/favorites';

function App() {

   const [characters, setCharacters] = useState([]);

   const location = useLocation();
   let showNav = location.pathname !== '/';

   const Navigate = useNavigate();

   const [access, setAccess] = useState(false);

   const EMAIL = 'leo@gmail.com';
   const PASSWORD = 'euskadi69';

   useEffect(() => {
      !access && Navigate('/');
   }, [access]);

   function login (userData) {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         Navigate('/home');
      }
      else {
         alert('Datos incorrectos. Acceso denegado BUUUURP!')
      }
   }

   function onSearch (id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   };

   function closeHandler (id) {
      let filtrados = characters.filter(character => character.id !== Number(id))
      setCharacters(filtrados);
   };

   function randomHandler() {

      let haveIt = [];

      //Generate random number
      let random = (Math.random() * 826).toFixed();
  
      //Coerce to number by boxing
      random = Number(random);
  
      if (!haveIt.includes(random)) {
        haveIt.push(random);
        fetch(`https://rickandmortyapi.com/api/character/${random}`)
          .then((response) => response.json())
          .then((data) => {
            if (data.name) {
              setCharacters((oldChars) => [...oldChars, data]);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          });
      }
      else {
        alert("Ya agregaste todos los personajes");
        return false;
      };
   };

   return (
      <div className='App'>
         <h1 className='title'>Rick and Morty</h1>
         {showNav && <Nav onSearch={onSearch} random={randomHandler}/>}
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path='/home' element={<Cards characters={characters} onClose={closeHandler}/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites onClose={closeHandler}/>}/>
            <Route path='*' element={<ErrorPage/>}/>
         </Routes>
      </div>
   );
}

export default App;

