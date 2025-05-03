<script>
  import { enhance } from "$app/forms";

  // Props - receive the addTodo function from parent
  let { addTodo } = $props();

  // Local state for the input value
  let newTodo = $state("");

  // Handle client-side form submission
  function handleSubmit() {
    // Check if the input is not empty
    if (newTodo.trim()) {
      // Call the addTodo function from the parent
      addTodo(newTodo);
      // Reset the input field
      newTodo = "";
    }
  }
</script>

<form
  method="POST"
  action="?/addTodo"
  on:submit|preventDefault={handleSubmit}
  use:enhance={() => {
    return ({ form, result }) => {
      if (result.type === "success") {
        form.reset(); // Reset the form after successful submission
      }
    };
  }}
>
  <input
    name="text"
    type="text"
    bind:value={newTodo}
    placeholder="Add a new todo..."
  />
  <button type="submit">Add</button>
</form>

<style>
  form {
    display: flex;
    margin-bottom: 1rem;
  }

  input {
    flex: 1;
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 4px 0 0 4px;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #ff3e00;
    color: white;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
  }

  button:hover {
    background-color: #ff6b3d;
  }
</style>
