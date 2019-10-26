import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Fruit from '../views/fruit';

class TopLayout extends React.Component {
    render() {
        return (
            <div>
                TopLayout page
                <Router>
                    <Switch>
                        <Route exact path={'/'} component={Fruit}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default TopLayout;