import axios from "axios";
import { setFetchError, setIsFetching, setRepos } from "../../redux/legacy/reposReducer";

export const getRepos = (searchQuery = "stars:%3E1", currentPage, perPage) => {
  if (searchQuery.trim().length === 0) {
    searchQuery = "stars:%3E1"
  }
  return async (dispatch) => {
    try {
      dispatch(setIsFetching(true))
      const response = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${currentPage}`)
      dispatch(setRepos(response.data))
    } catch (error) {
      dispatch(setFetchError(true))
      dispatch(setIsFetching(false))
      setTimeout(() => {
        dispatch(setFetchError(false))
      }, 2000)
    }
  }
}

export const getCurrentRepo = async (username, reponame, setRepo) => {
  const response = await axios.get(`https://api.github.com/repos/${username}/${reponame}`)
  setRepo(response.data)
}

export const getCotributors = async (username, reponame, setContributors) => {
  const response = await axios.get(`https://api.github.com/repos/${username}/${reponame}/contributors?page=1&per_page=10`)
  setContributors(response.data)
}