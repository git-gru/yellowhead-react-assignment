import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../services/api'

export const loginWithEmail = createAsyncThunk(
  'users/loginWithEmail',
  async (credential: any, { getState }) => {
    const { email, password } = credential
    const response = await API({
      endpoint: '/users/login',
      method: 'POST',
      query: {
        email,
        password
      }
    }, getState)
    return response
  }
)