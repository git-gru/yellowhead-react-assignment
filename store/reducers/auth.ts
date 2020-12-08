import { createSlice } from '@reduxjs/toolkit'
import { loginWithEmail } from '../actions/auth'

const initialState = {
  isLoading: false,
  isLoaded: false,
  token: null,
  error: null,
}

export default createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginWithEmail.pending, (state) => {
      state.isLoaded = false
      state.isLoading = true
      state.error = null
    })
    builder.addCase(loginWithEmail.fulfilled, (state, { payload: { token } }) => {
      state.token = token
      state.isLoading = false
      state.isLoaded = true
      state.error = null
    })
    builder.addCase(loginWithEmail.rejected, (state, { payload }) => {
      const { error } = payload as any
      state.error = error
      state.isLoading = false
      state.isLoaded = true
    })
  },
}).reducer