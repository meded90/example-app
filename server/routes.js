import main from './controller/main'
import todo from './controller/todo'

export default function (app) {
    app.get('/', todo);
    app.get('/square', main);
}
