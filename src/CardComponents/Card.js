import React from "react";
import { Link, useHistory } from "react-router-dom";
import { deleteCard } from "../utils/api/index";

// component for a single card, with edit and delete buttons

function Card({card}) {
    const history= useHistory();
    const handleDelete = async () => {
        const result = window.confirm("Delete this card?");
        if (result) {
            await deleteCard(card.id);
            history.push("/");
        }
    };

    return(
        <article className="col-12 col-md-6 col-xl-3 my-2 align-self-stretch">
            <div className="border p-4 h-100 d-flex flex-column">
                <p>{card.front}</p>
                <p>{card.back}</p>
                <Link className="btn btn-secondary" to={`/decks/${card.deckId}/cards/${card.id}/edit`}><span className="oi oi-pencil"></span> Edit card</Link>
                <button className="btn btn-danger" onClick={handleDelete}><span className="oi oi-trash"></span> Delete card</button>
            </div>
        </article>
    )
};

export default Card;