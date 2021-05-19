const express = require('express');
const app = express();
var session = require('express-session')

app.set('trust proxy', 1) // trust first proxy
app.use(session({
  secret: 'vN9:fdw@',
  name: 'sessionId'
}))

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.listen(8000, () => {
    console.log('server is listening on port 2020');
});
