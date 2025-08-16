import React, { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_INFO } from "./graphql/Queries";

function Home() {
  const [name, setINFOSearched] = useState("");
  const [getINFO, { data, loading, error }] = useLazyQuery(GET_INFO, {
    variables: { name: name },
  });

  if (error) return <h1> {error.message}</h1>;

  if(loading) return <h1> Loading...</h1>;

  return (
    <div className="home">
      <h1>Search For INFO</h1>
      <input
        type="text"
        placeholder="INFO"
        onSubmit={(event) => {
          setINFOSearched(event.target.value);
        }}
      />
      <button onClick={() => getINFO()}> Search</button>
      <div className="INFO">
        {data && (
          <>
          <ul>
            {data.characters.results.map((info) => (
              <li key={info.id}>{info.name} </li>
            ))} 
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default Home;