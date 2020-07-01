import './styles.css'

import { Todo, TodoList } from "./classes";
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();


// todoList.todos.forEach( todo => {
//     crearTodoHtml(todo)
// });

todoList.todos.forEach( crearTodoHtml);

// const tarea = new Todo('Aprender Javascript')


// todoList.nuevoTodo( tarea )
console.log('todos', todoList.todos);

// tarea.completado = true

// crearTodoHtml(tarea)
