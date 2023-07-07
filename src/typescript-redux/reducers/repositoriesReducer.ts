import { ActionTypes } from "../action-types";
import { Action } from "../actions";

export interface RepositoriesState {
  loading: boolean;
  error: string | null;
  data: string[];
}

const initialState: RepositoriesState = {
  loading: false,
  error: null,
  data: [],
};

const repositoryReducer = (
  state: RepositoriesState = initialState,
  action: Action
): RepositoriesState => {
  // NOTE: Typescript can identify whihc interface is utilized given the action type.
  // For example, if action type is "search_repositories" typescript immediately knows
  // that the action is a SearchRepositories type
  switch (action.type) {
    case ActionTypes.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case ActionTypes.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    case ActionTypes.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    default:
      return state;
  }
};

export default repositoryReducer;
