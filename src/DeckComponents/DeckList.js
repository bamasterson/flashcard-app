import React, { useEffect, useState } from "react";
import DeckTop from "./DeckTop";
import { listDecks } from "../utils/api/index";  
import ErrorMessage from "../Layout/ErrorMessage";

//function for displaying the decks on the home page
const DeckList = () => {
  const [decks, setDecks] = useState([]);
  const [error, setError] = useState(undefined);

  useEffect(() => {
    const abortController = new AbortController();

    listDecks(abortController.signal).then(setDecks).catch(setError); 

    return () => abortController.abort();
  }, []);

  if (error) {
    return <ErrorMessage error={error} />;
  }

  const list = decks.map((deck) => <DeckTop deck={deck} key={deck.id} />);

  return (
    <main className="container">
      <section className="row">{list}</section>
    </main>
  );
};

export default DeckList;