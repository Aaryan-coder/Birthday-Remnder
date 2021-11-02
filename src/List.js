import React from 'react';

const List = (props) =>{
	const {list} = props
	return(
		<div>
		{list.map((item)=>{
			const {id,name,age,image} = item
			return(
				<div key = {id} className = "person">
				<img src = {image} alt = " "/>
				<div>
                <h4>{name}</h4>
                <p>{age} years</p>
                </div>
				</div>
				)
		})}
		</div>
		)
}

export default List;