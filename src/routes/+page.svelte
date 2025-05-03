<script>
  import TodoForm from "$lib/TodoForm.svelte";
  import TodoList from "$lib/TodoList.svelte";
  import { browser } from "$app/environment";

  // Get the data from the page load function using $props()
  let { data } = $props();

  // Main state for todos
  let todos = $state(data.todos);

  // Generate unique ID for new todos
  let nextId = $state(data.nextId);

  // Save todos to localStorage when they change
  $effect(() => {
    if (browser) {
      localStorage.setItem("todos", JSON.stringify(todos));
      localStorage.setItem("nextId", nextId.toString());
    }
  });

  // Function to add a new todo
  function addTodo(text) {
    todos = [...todos, { id: nextId, text, completed: false }];
    nextId++;
  }

  // Function to toggle completed status
  function toggleTodo(id) {
    todos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
  }

  // Function to delete a todo
  function deleteTodo(id) {
    todos = todos.filter((todo) => todo.id !== id);
  }
</script>

<svelte:head>
  <title>Todo App | SvelteKit</title>
</svelte:head>

<main>
  <h1>SvelteKit Todo App</h1>
  <TodoForm {addTodo} />
  <TodoList {todos} {toggleTodo} {deleteTodo} />
</main>

<style>
  main {
    max-width: 500px;
    margin: 0 auto;
    padding: 1rem;
  }
  h1 {
    text-align: center;
    color: #ff3e00;
  }
</style>
