import { MakeStore, createWrapper, Context } from 'next-redux-wrapper'

import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'

export const rootStore = configureStore({
  reducer: rootReducer,
})

const makeStore: MakeStore = (context: Context) => rootStore

export const wrapper = createWrapper(makeStore)
