import main from './controller/main'


export default function (app) {
    app.get('/', main);
}
