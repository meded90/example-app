import React, {PureComponent,PropTypes} from 'react';

class Item extends PureComponent {
    static propTypes = {
        onRemove: PropTypes.func,
        id: PropTypes.number
    };

    constructor(props, context) {
        super(props, context);
        this.handlerRemove = this.handlerRemove.bind(this)
    }

    handlerRemove(){
        if (this.props.onRemove) {
            this.props.onRemove(this.props.id)
        }
    }

    render() {
        const {children} = this.props;
        return (<li className="item">
            {children}
            <button onClick={this.handlerRemove}>X</button>
        </li>);
    }
}

export default Item;
