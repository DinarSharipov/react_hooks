import React, { useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Repos from "../components/Repos";
import { GithubContext } from "../context/github/githubContext";

const Profile = ({ match }) => {
  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext);
  const urlName = match.params.name;

  useEffect(() => {
    getUser(urlName);
    getRepos(urlName);
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <p className="text-center">Загрузка...</p>;
  }

  const {
    name,
    company,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    publick_repos,
    publick_gists,
  } = user;

  return (
    <Fragment>
      <Link to="/" className="btn btn-link">
        На главную
      </Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-4 text-center">
              <img src={avatar_url} style={{ width: 180 }} alt={name} />
              <h1>{name}</h1>
              {location && <p>Местоположение {location}</p>}
            </div>
            <div className="col">
              {bio && (
                <Fragment>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </Fragment>
              )}
              <a
                href={html_url}
                className="btn btn-dark"
                target="_blank"
                rel="noreferrer"
              >
                Открыть профиль
              </a>
              <ul>
                {login && (
                  <li>
                    <strong>Username: </strong>
                    {login}
                  </li>
                )}
                {company && (
                  <li>
                    <strong>Компания: </strong>
                    {company}
                  </li>
                )}
                {blog && (
                  <li>
                    <strong>Website: </strong>
                    {blog}
                  </li>
                )}
              </ul>
              <div className="badge bg-primary">Подписчики: {followers}</div>
              <div className="badge bg-success">Подписан: {following}</div>
              <div className="badge bg-info">Репозитории: {publick_repos}</div>
              <div className="badge bg-dark">Gists: {publick_gists}</div>
            </div>
          </div>
        </div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );
};

export default Profile;
