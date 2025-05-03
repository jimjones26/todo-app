// Import utilities for cookie handling
import { fail } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ cookies }) {
  const defaultTodos = [
    { id: 1, text: 'Learn Svelte', completed: false },
    { id: 2, text: 'Build a Todo App', completed: false }
  ];

  try {
    const todosJson = cookies.get('todos');
    const nextIdStr = cookies.get('nextId');

    if (todosJson) {
      return {
        todos: JSON.parse(todosJson),
        nextId: nextIdStr ? parseInt(nextIdStr, 10) : 3
      };
    }
  } catch (e) {
    console.error('Error parsing cookies:', e);
  }

  return {
    todos: defaultTodos,
    nextId: 3
  };
}

/** @type {import('./$types').Actions} */