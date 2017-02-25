import React, {PureComponent, PropTypes} from 'react';

/**
 A simple component that doubles in size on click
 */
class Square extends PureComponent {
    static defaultProps = {
        size: 100,
        color: "#D1ECE7"
    };

    constructor(props, context) {
        super(props, context);
        this.state = {
            size: this.props.size,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        if (this.state.size === this.props.size) {
            this.setState({size: this.props.size * 2});
        } else {
            this.setState({size: this.props.size});
        }
    }

    render() {
        return (
            <div
                onClick={this.handleClick}
                style={{
                    width: this.state.size,
                    height: this.state.size,
                    backgroundColor: this.props.color
                }}/>
        );
    }
}

export default Square;