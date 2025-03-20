import React, {useState} from "react";

//create your first component
const Home = () => {
    const [InputValue, setInputValue] = useState ("")
	const [ToDo, setToDo] = useState ([])
    return (
		<div className="container">
			 <h1>To Do List</h1>
			 <ul>
				<li><input 
				           type ="text"
						   onChange={(e) => setInputValue(e.target.value)}
						   value={InputValue}
						   onKeyPress={(e) => {
							 if (e.key === "Enter") {
                                setToDo(ToDo.concat(InputValue));
								setInputValue("");
							}
						   }}
				           placeholder="What do you need to do"></input> 
				</li>
				{ToDo.map((t) => (
				   <li>
					 {t} <i class="fa-solid fa-xmark"></i>
				   </li>
				  
				
			))}
			
			 </ul>
			 <div>15 Tasks</div>


		</div>
	);
};

export default Home;