<script>
  // No script needed for this simple page
</script>

<svelte:head>
  <title>About | SvelteKit Todo App</title>
</svelte:head>

<div class="about">
  <h1>About this Todo App</h1>

  <p>
    This is a simple Todo application built with SvelteKit. It demonstrates
    various SvelteKit features:
  </p>

  <ul>
    <li>File-based routing</li>
    <li>Page layouts</li>
    <li>Data loading with load functions</li>
    <li>Form actions for progressive enhancement</li>
    <li>Client-side reactivity with state</li>
    <li>Persistent storage with localStorage and cookies</li>
  </ul>

  <h2>How It Works</h2>

  <p>
    This app uses SvelteKit's routing system to create different pages. Data is
    loaded both on the server and client for the best user experience. Todos are
    stored in cookies on the server and localStorage on the client.
  </p>

  <p>
    The app is built with progressive enhancement in mind, so it works even if
    JavaScript is disabled!
  </p>

  <a href="/" class="button">Back to Todos</a>
</div>

<style>
  .about {
    max-width: 800px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
  }

  h2 {
    color: #333;
    margin-top: 2rem;
  }

  p {
    line-height: 1.6;
  }

  ul {
    margin: 1rem 0;
    padding-left: 1.5rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  .button {
    display: inline-block;
    background-color: #ff3e00;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-decoration: none;
    margin-top: 1rem;
    transition: background-color 0.2s;
  }

  .button:hover {
    background-color: #ff6b3d;
  }
</style>
