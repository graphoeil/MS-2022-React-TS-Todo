// Imports
import React, { useEffect, useState } from 'react';
import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";
import { Todo } from "./todo.model";

// Initial data
const data = [
	{ id:'t1', text:'Finish the course !' }
];

// Component
const App:React.FC = () => {

	// State
	// This state contains an array of Todo 
	// described in todo.model.tsx
	const [todos, setTodos] = useState<Todo[]>(data);

	// Init
	useEffect(() => {
		console.log('Init App !');
	},[]);

	// Add new todo
	const addTodo = (text:string) => {
		setTodos((oldTodos) => {
			return [
				...oldTodos,
				{ id:`t${ Math.random().toString() }`, text:text }
			];
		});
	};

	// Delete todo
	const deleteTodo = (todoId:string) => {
		setTodos((oldTodos) => {
			return oldTodos.filter((todo) => {
				return todo.id !== todoId;
			});
		});
	};

	// Return
	return(
		<div className="App">
			<NewTodo addTodo={ addTodo }/>
			<TodoList todos={ todos } deleteTodo={ deleteTodo }/>
		</div>
	);

};

// Export
export default App;