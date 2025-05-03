import { browser } from '$app/environment';

// This load function will inherit cookies from the server (if present)
export function load({ data, cookies }) {
  // Default data if no saved data
  const defaultTodos = [
    { id: 1, text: 'Learn Svelte', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false }
  ];

  // First check if we have data from the server
  if (data && data.todos && data.nextId) {
    return data;
  }

  // Otherwise, check localStorage in the browser
  if (browser) {
    try {
      const savedTodos = localStorage.getItem('todos');
      const savedNextId = localStorage.getItem('nextId');

      if (savedTodos && savedNextId) {
        return {
          todos: JSON.parse(savedTodos),
          nextId: parseInt(savedNextId, 10)
        };
      }
    } catch (e) {
      console.error('Error loading todos from localStorage:', e);
    }
  }

  // Return default data if no saved data
  return {
    todos: defaultTodos,
    nextId: 3
  };
}