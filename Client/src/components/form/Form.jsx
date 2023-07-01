import {useState} from 'react';
import {Validate} from '../../validation.js'
import styles from './form.module.css';

function Form(props) {

    const {login} = props;

    const [userData, setUserData] = useState({email: '', password: ''});
    const [errors, setErrors] = useState({email: '', password: ''});

    function handleChange (event) {
        setUserData ({
            ...userData, 
            [event.target.name]: event.target.value
        });
        setErrors(
            Validate({
                ...userData,
                [event.target.name]: event.target.value
        }));
    };
    
    function submitHandler (event) {
        event.preventDefault();
        if (!errors.name && !errors.password){
            login(userData)
        }
        else {
            window.alert('incorrecto "BBUUURP"');
        }

    } 

    return (
        <form className={styles.formContainer} onSubmit={submitHandler}>
            <img src='../../../login.webp' alt='login' className={styles.image}></img>
            <label className={styles.font}>EMAIL</label>
            <input type="text" 
                placeholder="email" 
                onChange={handleChange} 
                className={styles.input}
                name='email'
                value={userData.email}>
            </input>
            {errors.email && <span className={styles.span}>{errors.email}</span>}
            <label className={styles.font}>PASSWORD</label>
            <input type="password"
                 placeholder="password" 
                 onChange={handleChange} 
                 className={styles.input}
                 name='password'
                 value={userData.password}>
            </input>
            {errors.password && <span className={styles.span}>{errors.password}</span>}
            {errors.email || errors.password ? null :
                <button type='submit' className={styles.button} login={login}>Sign in</button>
            }
            <button className={styles.button}>Sign up!</button>
        </form>
    )
}

export default Form;