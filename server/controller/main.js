import HomePage from '../../client/pages/home';
import {reactRender} from '../untils/index'
import SquareModel from '../model/SquareModel'

export default function (req, res) {
    reactRender(res, HomePage, SquareModel.getSize());
}
