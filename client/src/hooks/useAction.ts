import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { allActionCreators } from "../store/action-creators";

export const useAction = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActionCreators, dispatch);
};
