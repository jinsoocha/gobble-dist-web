import path from 'path';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import { __express as jade } from 'jade';

const initialize = (app, express) => {
  app.use(morgan('dev'));
  app.use(express.static(path.join(__dirname, './../../dist')));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.engine('jade', jade);
  app.set('view engine', 'jade');
  app.set('views', path.join(__dirname, './../views'));
};

export default initialize;
