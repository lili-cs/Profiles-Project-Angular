const app = require('./app');

require('dotenv').config();
const port = process.env.PORT || 3000;

require('./db').once('open', ()=>{
    app.listen(port, ()=>{
        console.log(`Server is up and running on port ${port}`);
    });
});

