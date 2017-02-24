import HomePage from '../../client/pages/home';
import {reactRender} from '../untils/index'

export default function (req, res) {
    reactRender(res, HomePage, { size: 200 });
}