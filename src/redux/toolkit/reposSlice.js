import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  isFetching: true,
  isFetchError: false,
  currentPage: 1,
  perPage: 10,
  totalCount: 0
}

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {
    setRepos: (state, action) => {
      state.items = action.payload.items
      state.isFetching = false
      state.totalCount = action.payload.total_count
    },
    setIsFetching: (state) => {
      state.isFetching = true
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setFetchError: (state, action) => {
      state.isFetchError = action.payload
    }
  }
})

export const { setRepos, setIsFetching, setCurrentPage, setFetchError } = reposSlice.actions

export default reposSlice.reducer