import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";  

import Main from './Main';

function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Main/>
                </Route>
            </Switch>
        </Router>
    )
}

export default AppRouter;