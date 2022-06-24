import $ from "jquery";
import {useEffect} from "react";

const Loader = () => {
	useEffect(() => {
		window.$ = $
		window.jQuery = $
	}, [])
	return <></>
}

export default Loader