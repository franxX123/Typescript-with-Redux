import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "../typescript-redux";

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
