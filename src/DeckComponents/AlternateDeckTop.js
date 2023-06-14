import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteDeck } from "../utils/api/index";

// alternate deck interface for the deck view, with buttonss to edit, study, and delete the deck; as well as a button to add cards
function AlternateDeckTop({deck}) {
    const history = useHistory();
    const handleDelete = async () => {
        const result = window.confirm("Delete this deck? You will not be able to recover it.");
        if (result) {
          await deleteDeck(deck.id);
          history.push("/");
        }
      };

    return (

      <article className="col-12 col-md-6 col-xl-3 my-2 align-self-stretch">
        <div className="border p-4 h-100 d-flex flex-column">
          <h3>{deck.name}</h3>
          <p>{deck.description}</p>
          <Link className="btn btn-secondary" deck={deck} to={`/decks/${deck.id}/edit`}><span className="oi oi-pencil"></span> Edit deck</Link>
          <Link className="btn btn-primary" to={`/decks/${deck.id}/study`}><span className="oi oi-book"></span> Study this deck</Link>
          <Link className="btn btn-secondary" to={`/decks/${deck.id}/cards/new`}><span className="oi oi-plus"></span> Add cards</Link>
          <button className="btn btn-danger" onClick={handleDelete}>
          <span className="oi oi-trash"></span> Delete deck
          </button>
        </div>
      </article>
    ) 
};
  
  export default AlternateDeckTop;