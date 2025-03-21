import React, { useState } from "react";

//create your first component
const Home = () => {
	const [InputValue, setInputValue] = useState("")
	const [ToDo, setToDo] = useState([])
	return (
		<div className="container">
			<h1>To Do List</h1>
			<ul>
				<li><input
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={InputValue}
					onKeyPress={(e) => {
						if (e.key === "Enter") {
							setToDo(ToDo.concat(InputValue));
							setInputValue("");
						}
					}}
					placeholder="What do you need to do?"></input>
				</li>
				{ToDo.map((item, index) => (
					<li>
						{item}{" "} <span className="" onClick={() => setToDo(ToDo.filter((t, currentIndex) => index != currentIndex))}>X</span>
					</li>


				))}

			</ul>
			<div className="item">{ToDo.length} item left </div>


		</div>
	);
};

export default Home;