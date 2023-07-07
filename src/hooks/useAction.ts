import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreator } from "../typescript-redux";

export const useAction = () => {
  const dispatch = useDispatch();

  return bindActionCreators(actionCreator, dispatch);
  //   NOTE: this returns an object similar to {actionCreator: (...params) => dispatch(actionCreator.someCreatorFunction(...params))}
};
