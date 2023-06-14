import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api/index";

//standard deck top for the home page, with study and delete buttons
function DeckTop({deck}) {
    const history = useHistory();
    const handleDelete = async () => {
        const result = window.confirm("Delete this deck? You will not be able to recover it.");
        if (result) {
          await deleteDeck(deck.id);
          history.push("/");
          history.go(0);
        }
      };

    return (
      <article className="col-12 col-md-6 col-xl-3 my-2 align-self-stretch">
        <div className="border p-4 h-100 d-flex flex-column">
          <h3>{deck.name}</h3>
          <h5>{deck.cards.length} cards</h5>
          <p>{deck.description}</p>
          <Link className="btn btn-secondary" to={`/decks/${deck.id}`}>View</Link>
          <Link className="btn btn-primary" to={`/decks/${deck.id}/study`}>
            <span className="oi oi-book"></span> Study</Link>
          <button className="btn btn-danger" onClick={handleDelete}>
            <span className="oi oi-trash"></span> Delete Deck
          </button>
        </div>
      </article>
    )
};
  
  export default DeckTop;
