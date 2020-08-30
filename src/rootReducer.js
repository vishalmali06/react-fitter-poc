import { combineReducers } from "redux";
import studentsReducer from "./components/StudentsList/reducer";

const rootReducer = combineReducers({
  students: studentsReducer,
});

export default rootReducer;