<script>
  import TodoItem from "./TodoItem.svelte";

  // Props - receive todos array and functions from parent
  let { todos, toggleTodo, deleteTodo } = $props();
</script>

<div class="todo-list">
  {#if todos.length === 0}
    <p class="empty-message">No todos yet. Add some!</p>
  {:else}
    <ul>
      {#each todos as todo (todo.id)}
        <TodoItem
          {todo}
          onToggle={() => toggleTodo(todo.id)}
          onDelete={() => deleteTodo(todo.id)}
        />
      {/each}
    </ul>
  {/if}
</div>

<style>
  .todo-list {
    margin-top: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  .empty-message {
    text-align: center;
    color: #888;
    font-style: italic;
  }
</style>
