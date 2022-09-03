// Imports
import React, { useRef } from "react";
import styled from "styled-components";

// Interface
interface NewTodoProps {
	addTodo:(text:string)=>void;
};

// Component
const NewTodo:React.FC<NewTodoProps> = ({ addTodo }) => {

	// Uncontrolled form
	const inputRef = useRef<HTMLInputElement>(null);

	// Submit form
	const handleSubmit = (e:React.FormEvent) => {
		e.preventDefault();
		const text = inputRef.current!.value;
		addTodo(text);
		inputRef.current!.value = '';
	};

	// Return
	return(
		<Wrapper onSubmit={ handleSubmit }>
			<div className="form-control">
				<label htmlFor="todo-text">Todo text</label>
				<input type="text" id="todo-text" ref={ inputRef } />
			</div>
			<button type="submit">Add todo</button>
		</Wrapper>
	);

};

// Styled
const Wrapper = styled.form`
	width: 90%;
	max-width: 40rem;
	margin: 2rem auto;
	.form-control{
		margin-bottom: 1rem;
		label, input{ display: block; width: 100%; }
		label{ font-weight: bold; }
		input{
			font: inherit;
			border: 1px solid #ccc;
			padding: 0.25rem;
			&:focus{
				outline: none;
				border-color: #50005a;
			}
		}
	}
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
`;

// Export
export default NewTodo;