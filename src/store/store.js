import { combineReducers, createStore } from "redux";
import { leagueReducer } from "./league.reducer";

const rootReducer = combineReducers({
    leagueModule: leagueReducer
})

const middleware = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)

store.subscribe(() => {
  
  })
  