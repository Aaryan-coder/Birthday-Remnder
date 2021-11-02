import React, {useState} from 'react';
import data from './data';
import List from './List';

function App(){
	const [list,setList] = useState(data)
	const handleClick = () =>{
		setList([])
	}
	return(
		<div>
		<div className = 'container'>
		<h3>{list.length} Birthdays left</h3>
		<List list = {list} />
		<button type = "button" onClick = {handleClick}>Clear All</button>
		</div>
		</div>
		)
}

export default App;