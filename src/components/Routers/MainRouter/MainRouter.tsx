import React from 'react';
import useRouterPaths from '../../../hooks/Apollo/useRouterPaths/useRouterPaths';
import Page from '../../pages/Page/Page';
import { Route, Switch } from 'react-router';
import Form from '../../pages/Form/Form';

const MainRouter: React.FC = () => {
    const { 
        //loading,
        //error,
        homepagePath,
        formPaths
     } = useRouterPaths();

    const homepageRoute = homepagePath && <Route to={homepagePath.path}><Page /></Route>
     const formRoutes = formPaths && formPaths.map((route: {path: string, id: string}) => <Route path={`/${route.path}`}><Form id={route.id} /></Route>)

    return (
        <Switch>
            {formRoutes}
            {homepageRoute}
        </Switch>
    )
}

export default MainRouter;