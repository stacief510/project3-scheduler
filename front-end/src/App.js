import React, { Component } from 'react';
import routes from './config/routes'

class App extends Component {
    render() {
        return(
            <div>
                {routes}
            </div>
        )
    }
}

export default App;