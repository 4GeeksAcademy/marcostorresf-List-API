import React, { useEffect, useState } from "react";

//create your first component
const Home = () => {
	const [InputValue, setInputValue] = useState("")
	const [ToDo, setToDo] = useState([])

	useEffect(()=> {

		getUser()

	},[])

	const getUser = async() => {
		let response = await fetch('https://playground.4geeks.com/todo/users/marcostorresf')
        let data = await response.json()
		console.log(data)
		if(typeof data.name !='undefined') {
			setToDo(data.todos)
			console.log(data.name)
		}
		else if(typeof data.name !='undefined'){
			let response = await fetch('https://playground.4geeks.com/todo/users/marcostorresf',{
				method: "POST",
                headers: { "Content-type": "application/json" },
    
			})
			let data = await response.json()
			// console.log(data)
			
		}

	}
	return (
		<div className="container">
			<h1>To Do List</h1>
			<ul>
				<li><input
					type="text"
					onChange={(e) => setInputValue(e.target.value)}
					value={InputValue}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setToDo(ToDo.concat(InputValue));
							setInputValue("");
						}
					}}
					placeholder="What do you need to do?"></input>
				</li>
				{ToDo.map((item, index) => (
					<li>
						{item.label}{" "} <span className="" onClick={() => setToDo(ToDo.filter((t, currentIndex) => index != currentIndex))}>X</span>
					</li>


				))}

			</ul>
			<div className="item">{ToDo.length} item left </div>


		</div>
	);
};

export default Home;