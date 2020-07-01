import { Todo } from "./todo.class";



export class TodoList {



    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todos) {
        this.todos.push(todos);
        this.guarrdarLocalStorage();

    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id)
        this.guarrdarLocalStorage();
    }

    marcarCompletado(id) {
        for (const todo of this.todos) {

            // console.log(id, todo.id);

            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guarrdarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado)

    }

    guarrdarLocalStorage() {

        localStorage.setItem('todo', JSON.stringify(this.todos))

    }

    cargarLocalStorage() {

        this.todos = (localStorage.getItem('todo'))
            ? JSON.parse(localStorage.getItem('todo'))
            : [];

        this.todos = this.todos.map(Todo.fromJson) //Se puede reemplazar: obj => Todo.fromJson(obj)

    }
}