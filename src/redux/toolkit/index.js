import { configureStore } from '@reduxjs/toolkit'
import reposSlice from './reposSlice'

export const store = configureStore({
  reducer: {
    repos: reposSlice
  }
})