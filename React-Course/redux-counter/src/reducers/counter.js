const initialState = {
  count: 0,
  decrementsCount: 0,
  incrementsCount: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        incrementsCount: state.incrementsCount + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        decrementsCount: state.decrementsCount + 1
      };
    // case 'RESET':
    //   return {
    //     ...state,
    //     count: (state.count = 0)
    //   };
    default:
      return state;
  }
}

export default counterReducer;