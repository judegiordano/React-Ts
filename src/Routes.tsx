import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NotFound } from "./Pages/NotFound";
import { Home } from "./Pages/Home";

export const Routes: React.FC = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/" exact component={Home} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
};