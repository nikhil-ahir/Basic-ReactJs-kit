/**
 * Created by nikhila on 9/25/2015.
 */
let React = require('react');
let { Route,
    DefaultRoute,
    NotFoundRoute,
    Redirect} = require('react-router');

let Main = require('./js/component/app/Main');

var Routes = (
    <Route path='/' component={Main}>
        <DefaultRoute component={Main}/>
    </Route> );

export default Routes;