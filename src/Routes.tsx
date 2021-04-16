import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NotFound } from "./Pages/NotFound";
import { Home } from "./Pages/Home";
import { Error } from "./Pages/Error";
import { Counter } from "./Pages/Counter";

export const Routes: React.FC = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/error"  component={Error} />
				<Route path="/count"  component={Counter} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};