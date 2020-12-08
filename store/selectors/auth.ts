import { createSelector } from 'reselect'
import { rootStore } from '../'

type RootState = ReturnType<typeof rootStore.getState>

export const getState = (state: RootState) => state.auth

export const getToken = createSelector(
  getState,
  state => state.token
)

export const getIsLogingIn = createSelector(
  getState,
  state => state.isLoading
)