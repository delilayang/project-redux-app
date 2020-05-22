// Design the store
// Define the actions
// Create a reducer
// Set up the store
// In Redux, reducer have to be pure.
// Pure function (Once created, can't be changed.)

// import { BUG_ADDED, BUG_REMOVED } from "./actionTypes";
import * as actions from "./actionTypes";

let lastId = 0;

// switch case writing style
export default function reducer(state = [], action) {
  switch (action.type) {
    case actions.BUG_ADDED:
      return [
        ...state,
        {
          id: ++lastId,
          description: action.payload.description,
          resolved: false,
        },
      ];

    case actions.BUG_REMOVED:
      return state.filter((bug) => bug.id !== bug.id);

    case actions.BUG_RESOLVED:
      return state.map((bug) =>
        bug.id !== action.payload.id ? bug : { ...bug, resolved: true }
      );

    default:
      return state;
  }
}

// if statement writing style
// function reducer(state = [], action) {
//   if (action.type === "bugAdded") {
//     return [
//       ...state,
//       {
//         id: ++lastId,
//         description: action.payload.description,
//         resolved: flase,
//       },
//     ];
//   } else if (action.type === "bugRemoved") {
//     return state.filter((bug) => bug.id !== bug.id);
//   } else {
//     return state;
//   }
// }
