import { ActionTypes } from "../action-types";

ActionTypes;

interface SearchRepositories {
  type: ActionTypes.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccess {
  type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesError {
  type: ActionTypes.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositories
  | SearchRepositoriesError
  | SearchRepositoriesSuccess;
