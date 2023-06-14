import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import CardForm from "./CardForm";
import { readDeck, createCard } from "../utils/api/index";

//function to add a card to a deck

function AddCard() {
    const history= useHistory();
    const { deckId } = useParams();
    const [deck, setDeck] = useState({});

    useEffect (() => {
        const abortController = new AbortController();
        
        // loads a deck from the api
        async function loadDeck() {
            try {
                const deckInfo = await readDeck(deckId, abortController.signal);
                setDeck(deckInfo);
            } catch (error) {
                if (error.name === "AbortError") {
                    console.info("aborted");
                } else {
                    throw error;
                }
            }
        }
        loadDeck();
        return () => abortController.abort();
    }, [deckId]);

    // function to create a card
    async function handleSubmit(card) {
        try {
          await createCard(deckId, card);
          history.push(`/decks/${deck.id}`);
        } catch (err) {
          if (err.name === "AbortError") {
            console.info("aborted");
          } else {
            throw err;
          }
        }
    }

    //function to cancel card creation
    function handleCancel() {
        history.push(`/decks/${deckId}`)
    }

    
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">
                    <span className="oi oi-plus"></span> Add Card
                    </li>
                </ol>
            </nav>
            <h1>{`${deck.name}`}</h1>
            <CardForm
                handleSubmit={handleSubmit}
                handleCancel={handleCancel}
                />
        </div>
    );
};

export default AddCard;