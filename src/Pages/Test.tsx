import React from "react";
import { useErrorHandler } from "../Hooks/useErrorHandler";

export const Test: React.FC = (): JSX.Element => {
	
	const { setError } = useErrorHandler();

	const test = () => {
		setError({ ok: false, errorMsg: "bad request" });
	};

	return (
		<div>
			this should thrown an error to useErrorHandler
			<br />
			<button onClick={test}>click</button>
		</div>
	);
};
