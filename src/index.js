import app from './app.js'
import {connectDB} from './db.js';

//conectarse a la base de datos
connectDB();
//corre en el puerto 4000
app.listen(4000)
console.log('Server on port', 4000)
