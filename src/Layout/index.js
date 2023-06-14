import React from "react";
import {
  Link,
  Route,
  Switch,
} from "react-router-dom";
import Header from "./Header";
import NotFound from "../Layout/NotFound";
import DeckList from "../DeckComponents/DeckList";
import DeckView from "../DeckComponents/DeckView"
import CreateDeck from "../DeckComponents/CreateDeck"
import EditDeck from "../DeckComponents/EditDeck";
import AddCard from "../CardComponents/AddCard";
import EditCard from "../CardComponents/EditCard";
import StudyDeck from "../DeckComponents/StudyDeck";

function Layout() {  
  //backbone of website, the "home page" is created here in the first Route of the Switch
  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Link to="/decks/new" className="btn btn-secondary">Create Deck</Link>
            <DeckList />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />        
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />        
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />        
          </Route>
          <Route path="/decks/:deckId/study">
             <StudyDeck />
          </Route>
          <Route path="/decks/:deckId/edit">
             <EditDeck />
          </Route>
          <Route path="/decks/:deckId">
            <DeckView />        
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;