import React, {PureComponent, PropTypes} from 'react';

class Form extends PureComponent {
    static propTypes = {
        onAdd: PropTypes.func.isRequired
    };
    static defaultProps = {
        className: 'Form'
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            text: ''
        };
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerAdd = this.handlerAdd.bind(this);
    }

    handlerChange(e){
        this.setState({
            text: e.target.value
        })
    }
    handlerAdd(){
        this.props.onAdd(this.state.text);
        this.setState({
            text: ''
        })
    }
    render() {
        return (
            <div className="form">
                <input type="text" onChange={this.handlerChange} value={this.state.text}/>
                <button onClick={this.handlerAdd}>add</button>
            </div>
        );
    }
}

export default Form;
