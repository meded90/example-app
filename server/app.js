/**
 * Server
 */

import path from 'path';
import express from 'express';
import routes from './routes'
import Log from 'winston'
const log = Log.loggers.get('server');
const app = express();

const config = {
    port: 8000
};

// views
app.set('views', path.join(__dirname, 'view'));
app.set('view engine', 'ejs');

// routing and static files
routes(app);
app.use(express.static(path.join(__dirname, '../public')));

// start the server
app.listen(config.port, function (err) {
    log.info("Server started; listening on port " + config.port);
});
