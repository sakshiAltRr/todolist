// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
//   const data = await response.json();
//   return data;
// });

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState: {
//     todos: [],
//     status: 'idle',
//     error: null,
//   },
//   reducers: {
//     addTodo: (state, action) => {
//       state.todos.push({ title: action.payload });
//     },
//     deleteTodo: (state, action) => {
//       state.todos.splice(action.payload, 1);
//     },
//     editTodo: (state, action) => {
//       const { index, title } = action.payload;
//       state.todos[index].title = title;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchTodos.pending, (state) => {
//         state.status = 'loading';
//       })
//       .addCase(fetchTodos.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.todos = action.payload;
//       })
//       .addCase(fetchTodos.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.error.message;
//       });
//   },
// });

// export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

// export default todoSlice.reducer;



import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  const data = await response.json();
  return data;
});

export const fetchTaskById = createAsyncThunk('todos/fetchTaskById', async (id) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await response.json();
  return data;
});

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    task: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ title: action.payload });
    },
    deleteTodo: (state, action) => {
      state.todos.splice(action.payload, 1);
    },
    editTodo: (state, action) => {
      const { index, title } = action.payload;
      state.todos[index].title = title;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchTaskById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTaskById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.task = action.payload;
      })
      .addCase(fetchTaskById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { addTodo, deleteTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;