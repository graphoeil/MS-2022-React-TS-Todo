// Imports
import React from "react";
import styled from "styled-components";

// Todos interface
interface TodoListProps {
	todos:{ id:string; text:string; }[];
	deleteTodo:(id:string)=>void;
};

// Component
// We indicate here that the type of TodoList is React.FC
// for React functional component, we also indicate
// the model of the props it receives.
const TodoList:React.FC<TodoListProps> = ({ todos, deleteTodo }) => {

	// Return
	return(
		<Wrapper>
			{
				todos.map((todo) => {
					return <li key={ todo.id }>
						<span>{ todo.text }</span>
						<button onClick={ () => { deleteTodo(todo.id); } }>
							Delete
						</button>
					</li>;
				})
			}
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.ul`
	list-style: none;
	width: 90%;
	max-width: 40rem;
	margin: 2rem auto;
	padding: 0;
	li{
		margin: 1rem 0;
		padding: 1rem;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
		border-radius: 6px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		button{
			background: #50005a;
			border: 1px solid #50005a;
			color: white;
			padding: 0.5rem 1.5rem;
			cursor: pointer;
			&:focus{ outline: none; }
			&:hover, &:active{
				background: #6a0a77;
				border-color: #6a0a77;
			}
		}
	}
`;

// Export
export default TodoList;