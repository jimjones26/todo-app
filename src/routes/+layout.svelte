<script>
  import { invalidate } from "$app/navigation";
  import { onMount } from "svelte";

  // Refresh data when the page becomes visible again
  // (useful for when the user comes back to the tab)
  onMount(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        invalidate("app:todos");
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  });
</script>

<svelte:head>
  <link rel="icon" href="/favicon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</svelte:head>

<div class="app">
  <header>
    <div class="corner">
      <!-- An SVG logo could go here -->
    </div>

    <nav>
      <a href="/" class="active">Todos</a>
      <a href="/about">About</a>
    </nav>

    <div class="corner">
      <!-- Maybe a theme switcher could go here -->
    </div>
  </header>

  <main>
    <slot></slot>
  </main>

  <footer>
    <p>Built with SvelteKit - {new Date().getFullYear()}</p>
  </footer>
</div>

<style>
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1200px;
    margin: 0 auto;
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #ff3e00;
    color: white;
  }

  .corner {
    width: 3rem;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  nav a {
    color: white;
    text-decoration: none;
    padding: 0.5rem;
    border-radius: 4px;
    transition: background-color 0.2s;
  }

  nav a:hover,
  nav a.active {
    background-color: rgba(255, 255, 255, 0.2);
  }

  main {
    flex: 1;
    padding: 1rem;
  }

  footer {
    padding: 1rem;
    text-align: center;
    font-size: 0.8rem;
    color: #888;
    border-top: 1px solid #eee;
  }
</style>
