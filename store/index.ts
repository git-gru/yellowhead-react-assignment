import { MakeStore, createWrapper, Context } from 'next-redux-wrapper'

import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers'

const makeStore: MakeStore = (context: Context) => configureStore({
  reducer: rootReducer,
})

export const wrapper = createWrapper(makeStore)
