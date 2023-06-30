
const server = require("./app");
const PORT = 3001;
const {conn} = require('./DB_connection')


server.listen(PORT, () => {
    conn.sync({force: true}); // esto hay que cambiarlo a false despues. AVERIGUAR!!!!
    console.log('Server raised in port: ' + PORT);
});


      