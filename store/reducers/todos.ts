import { createEntityAdapter, createSlice } from '@reduxjs/toolkit'
import { fetchTodoList } from '../actions/todo'

export const todosAdapter = createEntityAdapter<yellowhead.Todo>({
  selectId: todo => todo.id,
  sortComparer: (a, b) => a.title.localeCompare(b.title)
})

export default createSlice({
  name: 'todos',
  initialState: todosAdapter.getInitialState({
    isLoading: false,
    error: null
  }),
  reducers: {
    todoAdded: todosAdapter.addOne,
    todoUpdated: todosAdapter.updateOne
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoList.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(fetchTodoList.fulfilled, (state, { payload }) => {
      todosAdapter.setAll(state, payload)
      state.isLoading = false
      state.error = null
    })
    builder.addCase(fetchTodoList.rejected, (state, { payload }) => {
      const { error } = payload as any
      state.isLoading = false
      state.error = error
    })
  },
}).reducer