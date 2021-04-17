import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";  

import Main from './Main';
import Tasks from './Tasks';
import Navbar from './Navbar';

function AppRouter() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact>
                    <Main/>
                </Route>
                <Route path="/tasks">
                    <Tasks/>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;