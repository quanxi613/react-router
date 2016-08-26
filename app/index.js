import React from 'react';
import ReactDOM from 'react-dom';

import App from './component/app';
import Contact from './component/contact';
import About from './component/about';
import List from './component/list';
import Home from './component/home';

import {Router, Route, browserHistory, IndexRoute} from 'react-router';

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Home}/>
			<Route path="about" component={About} />
			<Route path="contact" component={Contact} />
			<Route path="list/:id" component={List} />
		</Route>
	</Router>
);

ReactDOM.render(router, document.getElementById('app'));