import { useState } from "react";
import { useAction } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoriesList: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const { searchRepositories } = useAction();

  const { loading, error, data } = useTypedSelector(
    (state) => state.repositories
  );

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(keyword);
  };

  return (
    <>
      <h2>Search for a Package</h2>
      <div>
        <form onSubmit={submitHandler}>
          <input
            value={keyword}
            type="text"
            onChange={(e) => {
              setKeyword(e.target.value);
            }}
          />
          <button>Search</button>
        </form>

        {loading && <p>Loading...</p>}
        {error && <p>There was a problem!</p>}
        {data.map((item, idx) => {
          return <div key={idx}>{item}</div>;
        })}
      </div>
    </>
  );
};

export default RepositoriesList;
