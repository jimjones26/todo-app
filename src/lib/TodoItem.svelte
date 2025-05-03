<script>
  import { enhance } from "$app/forms";

  // Props - receive todo object and callback functions
  let { todo, onToggle, onDelete } = $props();

  // Combined function for both client-side toggling and form submission
  function handleToggle() {
    // Call the client-side toggle function
    onToggle();

    // Also submit the form for server-side persistence
    const form = document
      .querySelector(`form[action="?/toggleTodo"] input[value="${todo.id}"]`)
      .closest("form");
    if (form) form.requestSubmit();
  }
</script>

<li class="todo-item">
  <label class:completed={todo.completed}>
    <form
      method="POST"
      action="?/toggleTodo"
      use:enhance
      style="display: inline"
    >
      <input type="hidden" name="id" value={todo.id} />
      <input type="checkbox" checked={todo.completed} onchange={handleToggle} />
    </form>
    <span>{todo.text}</span>
  </label>

  <form method="POST" action="?/deleteTodo" use:enhance style="display: inline">
    <input type="hidden" name="id" value={todo.id} />
    <button class="delete-btn" type="submit" onclick={onDelete}>
      Delete
    </button>
  </form>
</li>

<style>
  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    background-color: #f9f9f9;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  .todo-item:hover {
    background-color: #f0f0f0;
  }

  label {
    display: flex;
    align-items: center;
    flex: 1;
    cursor: pointer;
  }

  input[type="checkbox"] {
    margin-right: 0.5rem;
  }

  .completed span {
    text-decoration: line-through;
    color: #888;
  }

  .delete-btn {
    background-color: #e74c3c;
    color: white;
    border: none;
    border-radius: 4px;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
  }

  .delete-btn:hover {
    background-color: #c0392b;
  }
</style>
