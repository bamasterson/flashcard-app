import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { createDeck } from "../utils/api/index"
import DeckForm from "./DeckForm";

//function for creating a new deck
function CreateDeck() {
  const history = useHistory();
  const [deck, setDeck] = useState({});


  function handleSubmit(deck) {
    const abortController = new AbortController();
    async function addDeck() {
      try {
        const deckInfo = await createDeck(deck, abortController.signal);
        setDeck(deckInfo);
        history.push(`/decks/${deckInfo.id}`);
      } catch (err) {
        if (err.name === "AbortError") {
          console.info("aborted");
        } else {
          throw err;
        }
      }
    }
    addDeck();
    return () => {
      abortController.abort();
    };
  }

  function handleCancel() {
    history.push(`/`);
  }

  return (
    <div>
      <nav aria-label='breadcrumb'>
        <ol className='breadcrumb'>
          <li className='breadcrumb-item'>
            <Link to='/'>
              <i className='bi bi-house-door-fill'></i> Home
            </Link>
          </li>
          <li className='breadcrumb-item active' aria-current='page'>
            Create Deck
          </li>
        </ol>
      </nav>
      <h1>Create Deck</h1>
      <DeckForm
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
        deck={deck}
      />
    </div>
  );
};

export default CreateDeck;