import React, {PureComponent, PropTypes} from 'react';
import Item from '../item/item';

class List extends PureComponent {
    static defaultProps = {
        list: PropTypes.list,
        onRemove: PropTypes.func
    };

    render() {
        return (
            <ul>
                {this.props.list.map((item,index) => (<Item onRemove={this.props.onRemove} key={index} id={index}>{item}</Item>))}
            </ul>
        );
    }
}

export default List;
