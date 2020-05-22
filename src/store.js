import { createStore } from "redux";
import reducer from "./reducer"; // Without default syntax, reducer -> {reducer}

const store = createStore(reducer);
export default store;
