import { todosAdapter } from '../reducers/todos'
import { createSelector } from 'reselect'
import { rootStore } from '../'

type RootState = ReturnType<typeof rootStore.getState>

export const getState = (state: RootState) => state

const todosSelector = todosAdapter.getSelectors<RootState>(
  (state) => state.todos
)

export const getTodoList = createSelector(
  getState,
  state => todosSelector.selectAll(state)
)