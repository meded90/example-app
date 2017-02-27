import React, {PureComponent} from 'react';
import Square from '../blocks/square/square';

// A very simple page with a square on it.
class HomePage extends PureComponent {


    render() {
        return (
            <Square {...this.props}/>
        );
    }
}

export default HomePage;
