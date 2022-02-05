/* Deliverables
[HT > HC] When the app first loads, display a tile for each hog in the porker_data.js file. In the tile, display the name and image for each hog.

[HD > HT] When the user clicks on the hog tile, display the other details about the hog (its specialty, weight, greased, and highest medal achieved)

[HC] Allow the user to filter the hogs that are greased

[HC] Allow the user to sort the hogs based on name or weight

[] BONUS: Allow users to hide hogs (not delete them, just hide them from view!)

[] BONUS: Add a form to allow users to add new hogs to the page

[] BONUS: Implement Semantic Cards (Links to an external site.) for each hog

*/

import React from "react";
import Nav from "./Nav";
import HogsContainer from "./HogsContainer";

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<HogsContainer hogsInfo={hogs}/>
		</div>
	);
}

export default App;
