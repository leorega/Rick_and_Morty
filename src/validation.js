
export const Validate = (input) => {

    let errors = {};
    let nums = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    if (!input.email) errors.email = 'Ingrese un email válido'
    if (input.email.length > 35) errors.email = 'Email no válido'
    if (! /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(input.email)) errors.email = 'Formato de Email inválido'

    if (!nums.some(num => input.password.includes(num))) errors.password = 'La contraseña debe tener al menos un número'
    //if (!/\d/.test(input.password)) errors.password = 'La contraseña debe tener al menos un número'
    if (input.password.length < 6 || input.password.length > 10) errors.password = 'La contraseña debe tener entre 6 y 10 caracteres'

    return errors;
}

