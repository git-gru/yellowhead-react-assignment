import { createAsyncThunk } from '@reduxjs/toolkit'
import API from '../../services/api'

export const loginWithEmail = createAsyncThunk(
  'users/loginWithEmail',
  async (credential: any, { getState }) => {
    const { email, password } = credential
    return await API({
      endpoint: '/users/login',
      method: 'POST',
      query: {
        email,
        password
      },
      withoutAuthorization: true
    }, getState)
  }
)