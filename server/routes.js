import main from './controller/main'
import todo from './controller/todo'

export default function (app) {
    app.get('/', main);
    app.get('/todo', todo);
}
