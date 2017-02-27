import React, {PureComponent, PropTypes} from 'react';
import List from '../components/list/list';
import Form from '../components/form/form';

class Todo extends PureComponent {
    static propTypes = {
        list: PropTypes.array,
    };

    static defaultProps = {
        list: []
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            list: props.list
        };
        this.handlerAdd = this.handlerAdd.bind(this);
        this.handlerRemove = this.handlerRemove.bind(this)
    }

    handlerAdd(text) {
        this.setState({
            list: this.state.list.concat(text)
        })
    }

    handlerRemove(id){
        this.state.list.splice(id,1);
        this.setState({
            list: this.state.list.slice()
        })
    }

    render() {
        return (<div>
            <List list={this.state.list} onRemove={this.handlerRemove}/>
            <Form onAdd={this.handlerAdd}/>
        </div>
        );
    }
}

export default Todo;
