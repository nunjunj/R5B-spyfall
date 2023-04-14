import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Typewriter = () => {
	const [text, setText] = useState("");
	const [index, setIndex] = useState(0);

	useEffect(() => {
		if (index < "Hello World!".length) {
			const interval = setInterval(() => {
				setText((prevText) => prevText + "Hello World!"[index]);
				setIndex((prevIndex) => prevIndex + 1);
			}, 200);

			return () => clearInterval(interval);
		}
	}, [index]);
	useEffect(() => {
		document.body.style.overflow = "hidden";
		document.body.style.backgroundColor = "#000";
		document.body.style.color = "#fff";

		return () => {
			document.body.style.overflow = "auto";
			document.body.style.backgroundColor = "";
			document.body.style.color = "";
		};
	}, []);

	return (
		<div>
			<h1>{text}</h1>
		</div>
	);
};

const Layout = ({ children }) => {
	const router = useRouter();

	return (
		<div>
			<Typewriter />
			{children}
		</div>
	);
};

export default Layout;
