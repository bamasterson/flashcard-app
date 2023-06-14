import React from "react";
import { Link } from "react-router-dom";

//function for when a deck has less than three cards in it
function NotEnoughCards({ deck }) {
    return (
        <div>
            <h3>Not enough cards in this deck.</h3>
            <p>
                You need at least 3 cards to study. There are {deck?.cards?.length}{" "} cards in this deck.
            </p>
            <Link className="btn btn-primary" to={`/decks/${deck?.id}/cards/new`}>
                <i className="bi bi-plus-lg"></i> Add Cards
            </Link>
        </div>
    );
}

export default NotEnoughCards;