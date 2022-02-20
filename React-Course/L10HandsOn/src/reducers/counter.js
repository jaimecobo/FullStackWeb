const initialState = {
  count: 0,
  countInDe: 0,
  inputtedNumber: 1
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      // state.countInDe += 1;
      return {
        ...state,
        count: state.count + parseInt(state.inputtedNumber),
        // countInDe: state.countInDe + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - state.inputtedNumber,
      };
      case 'IN_DE_COUNT':
        return {
          ...state,
          countInDe: state.countInDe + 1,
        };
      case 'INPUT_NUMBER':
        return{
          ...state,
          inputtedNumber: state.inputtedNumber,
        };
      case 'CHANGE':
      return {
        ...state,
        inputtedNumber: action.number
      };
    default:
      return state;
  }
}

export default counterReducer;