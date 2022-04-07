import React from 'react';
import {useSelector} from "react-redux";
import SnackBar from "./snackBar";

function SnackBarList(props) {
	const snackBar = useSelector(state => state.snackbar)
	return (
		<>
			{/*<SnackbarsProvider limit={10} autoHideDuration={5000}>*/}
				{snackBar.map(el => {
					return <SnackBar key={el.id} {...el} />
				})}
			{/*</SnackbarsProvider>*/}
			
		</>
	);
}

export default SnackBarList;
