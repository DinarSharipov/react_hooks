import React, { Fragment, useContext } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import { GithubContext } from "../context/github/githubContext";

const Home = () => {
  const { loading, users } = useContext(GithubContext);

  return (
    <Fragment>
      <Search />
      <div className="row mt-4">
        {loading ? (
          <p className="text-center"> Загрузка...</p>
        ) : (
          users.map((user) => (
            <div key={user.id} className="col-sm-4 mb-4">
              <Card user={user} />
            </div>
          ))
        )}
      </div>
    </Fragment>
  );
};

export default Home;
