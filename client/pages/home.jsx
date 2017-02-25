import React, {PureComponent} from 'react';
import Square from '../elements/square';

// A very simple page with a square on it.
class HomePage extends PureComponent {
    static defaultProps = {
            size: 100
    };

    render() {
        const {...rest} = this.props;
        return (
            <Square {...rest}/>
        );
    }
};

export default HomePage;
