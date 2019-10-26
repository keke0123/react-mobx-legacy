import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Fruit from '../views/fruit';
import Test1 from '../views/test1';

class TopLayout extends React.Component {
    constructor() {
        super();
    }

    getChilrenData = (data) => {
        console.log('data', data);
        console.log('this', this);
    }

    render() {
        return (
            <div>
                TopLayout page
                <Router>
                    <div>
                        <Link to={'/'}>fruit</Link>&nbsp;
                        <Link to={'/test1'}>test1</Link>
                    </div>
                    <Switch>
                        <Route exact path={'/'}>
                            <Fruit getData={(data)=>this.getChilrenData(data)}></Fruit>
                        </Route>
                        <Route path={'/test1'} component={Test1}></Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default TopLayout;