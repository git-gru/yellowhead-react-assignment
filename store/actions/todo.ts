import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../services/api'

export const fetchTodoList = createAsyncThunk(
  'todo/list',
  async (_, { getState }) => await API({
    endpoint: '/tasks',
    method: 'GET',
    query: {},
  }, getState)
)