import axios from "axios";
import { Action } from "../actions";
import { ActionTypes } from "../action-types";
import { Dispatch } from "redux";

// NOTE: Create a thunk. This allows us to make use of the reducer and do some asynchronous
// task.

export const searchRepositories = (term: string) => {
  // NOTE: Dispatch<Action> specifies the type of paramater that must be passed to
  // to the dispatch function.
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionTypes.SEARCH_REPOSITORIES,
    });

    try {
      // NOTE: Make a request here
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
