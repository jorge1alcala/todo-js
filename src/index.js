import './styles.css';
import { Todo, TodoList } from './classes';
import { crearTodoHTML } from './js/componentes';


export const todoList = new TodoList();
// console.log(todoList.todos);
// todoList.todos.forEach(todo => crearTodoHTML(todo));
todoList.todos.forEach(crearTodoHTML);
/*const tarea = new Todo('Aprender JavaScript!!');
todoList.nuevoTodo(tarea);
// console.log(todoList);
crearTodoHTML(tarea);
*/

// const newTodo = new Todo('Aprender JavaScript');
// todoList.nuevoTodo(newTodo);
// todoList.todos[0].imprimirClasse();

console.log('todos', todoList.todos);
