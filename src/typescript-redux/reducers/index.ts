import { combineReducers } from "redux";
import repositoriesReducer from "./repositoriesReducer";

const reducer = combineReducers({
  repositories: repositoriesReducer,
});

export default reducer;
// We are exporting the type of the reducer
export type RootState = ReturnType<typeof reducer>;
