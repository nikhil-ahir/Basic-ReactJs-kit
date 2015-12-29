/**
 * Created by nikhila on 9/25/2015.
 */
let React = require('react');
let Router = require('react-router');
let Routes = require('./Routes');

Router.run(Routes, Router.HashLocation, Handler => React.render(<Handler />, document.body));