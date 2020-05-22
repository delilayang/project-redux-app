import store from "./store"; // Without default syntax, store should be {store}
// import * as actions from "./actionTypes";
import { bugAdded, bugResolved, bugRemoved } from "./actions";

// state = reducer(state, action)
// notify the subscribers

// Step 3: Save the change
const unsubscribe = store.subscribe(() => {
  console.log("Store changed! ", store.getState());
});

// Step 1: Get the bug
// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     description: "Bug1",
//   },
// });

store.dispatch(bugAdded("Bug1"));

// bug resolved
store.dispatch(bugResolved(1));

// If user navigate to other page which doesn't have the same UI component
unsubscribe();

// Step 2: Remove the bug
store.dispatch(bugRemoved(1));

console.log(store.getState());
