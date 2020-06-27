import React from 'react';
import useRouterPaths from '../../../hooks/Apollo/useRouterPaths/useRouterPaths';
import Page from '../../pages/Page/Page';
import { Route, Switch, Router } from 'react-router';
import Form from '../../pages/Form/Form';
import history from '../../../utils/History';

const MainRouter: React.FC = () => {
    const { 
        //loading,
        //error,
        homepagePath,
        formPaths
     } = useRouterPaths();

    const homepageRoute = homepagePath && <Route to={homepagePath.path}><Page /></Route>
    const formRoutes = formPaths && formPaths.map((route: {path: string, id: string}) => <Route path={`/${route.path}`}><Form id={route.id} /></Route>)
     const defaultRoute = <Route path=""><Page /></Route>;

    return (
        <Router history={history}>
            <Switch>
                {formRoutes}
                {homepageRoute}
                {defaultRoute}
            </Switch>
        </Router>
    )
}

export default MainRouter;