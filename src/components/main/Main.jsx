import React, { useEffect, useState } from 'react';
import './main.less'
import { useDispatch, useSelector } from 'react-redux';
import { getRepos } from '../actions/repos';
import Repo from './repo/Repo';
import { setCurrentPage } from '../../reducers/reposReducer';
import { createPages } from '../../utils/pagesCreator';
import { Navigate } from 'react-router-dom';

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector(state => state.repos.items)
  const isFetching = useSelector(state => state.repos.isFetching)
  const isFetchError = useSelector(state => state.repos.isFetchError)
  const totalCount = useSelector(state => state.repos.totalCount)
  const currentPage = useSelector(state => state.repos.currentPage)
  const perPage = useSelector(state => state.repos.perPage)
  const [searchValue, setSearchValue] = useState("")
  const pagesCount = Math.ceil(totalCount / perPage)
  const pages = []
  createPages(pages, pagesCount, currentPage)

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage))
  }, [currentPage])

  function handleSearch() {
    dispatch(setCurrentPage(1))
    dispatch(getRepos(searchValue, currentPage, perPage))
  }

  /* Error handling (isFetchError): Use either this code block (Navigate to stand-alone Error page) or block below (bootstrap alert component). */
  if (isFetchError) {
    return <Navigate to='/error' />
  }

  return (
    <div>
      {/* {isFetchError &&
        <div className="alert alert-danger" role="alert">
          Error occurred! Please reload the page!
        </div>
      } */}
      <div className="search">
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Input repo name" className="search-input" />
        <button onClick={handleSearch} className="search-btn">Search</button>
      </div>
      {
        isFetching === false
          ?
          repos.map(repo => <Repo key={repo.id} repo={repo} />)
          :
          <div className="fetching"></div>
      }
      <div className="pages">
        {pages.map((page, index) =>
          <span key={index}
            className={currentPage == page ? "current-page" : "page"}
            onClick={() => dispatch(setCurrentPage(page))}>
            {page}
          </span>)}
      </div>
    </div>
  );
};

export default Main;