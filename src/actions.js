// create action
import * as actions from "./actionTypes";

export const bugAdded = (description) => ({
  type: actions.BUG_ADDED,
  payload: {
    // description: "Bug1",
    // description: description
    description,
  },
});

export const bugRemoved = (id) => ({
  type: actions.BUG_REMOVED,
  id: id,
});

export const bugResolved = (id) => ({
  type: actions.BUG_RESOLVED,
  payload: {
    id,
  },
  // id: id,
});

// export function bugAdded(description) {
//   return {
//     type: actions.BUG_REMOVED,
//     payload: {
//       description: "Bug1",
//     },
//   };
// }
