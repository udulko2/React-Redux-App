import React from 'react';
import './repo.less'
import { NavLink } from 'react-router-dom';

const Repo = (props) => {
  const repo = props.repo;

  return (
    <div className="repo">
      <div className="repo-header">
        <div className="repo-header-name"><NavLink to={'/card'}>{repo.name}</NavLink></div>
        <div className="repo-header-stars">Stars: {repo.stargazers_count}</div>
      </div>
      <div className="repo-last-commit">Last commit: {repo.updated_at}</div>
      <div className="repo-link-wrapper">Link to repo: <a href={repo.html_url} className="repo-link">{repo.html_url}</a></div>
    </div>
  );
};

export default Repo;