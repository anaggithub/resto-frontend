import React from "react";
import "./index.scss";
import Pet from "../../components/pet";
import DefaultLayout from "../../components/layout";
import dogAnimation from "../../data/dog.json";
import catAnimation from "../../data/cat.json";
import { useDispatch } from "react-redux";
import { setPet } from "../../actions/";

const Home = ({ history }) => {
  const dispatch = useDispatch();

  function handleOnClick(pet) {
    dispatch(setPet(pet));
    history.push("/chat");
  }

  return (
    <DefaultLayout>
      <div className="home">
        <header className="home--header">
          <h1> Welcome to PetBot </h1>
          <h2>Are you a dog or a cat person?</h2>
        </header>
        <main className="home--pets-container">
          <Pet
            classes="home--pets dog"
            animation={dogAnimation}
            history={history}
            handleOnClick={(e) => handleOnClick("dog")}
          />

          <Pet
            classes="home--pets cat"
            animation={catAnimation}
            history={history}
            handleOnClick={(e) => handleOnClick("cat")}
          />
        </main>
      </div>
    </DefaultLayout>
  );
};

export default Home;
