import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RoorState, AppDispatch } from "./store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RoorState> = useSelector;