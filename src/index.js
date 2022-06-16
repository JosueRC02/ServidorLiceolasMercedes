import app from "./app";
import './database/ConexionDB';
import 'mariadb';

const main = () => {
    app.listen(process.env.PORT);
    console.log(`Server on port ${process.env.PORT}`);
};

main();
