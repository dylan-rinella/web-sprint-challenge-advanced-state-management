
export const initialState = {
  smurfs: [],
  isLoading: false,
  error: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type){
    case('FETCH_SMURF_START'):
    return({
      ...state,
      isLoading: true,
      error: '',
    })
    case('FETCH_SMURF_SUCCESS'):
    return({
      ...state,
      smurfs: action.payload,
      isLoading: false,
      error: '',
    })
    case('FETCH_SMURF_FAIL'):
    return({
      ...state,
      isLoading: false,
      error: action.payload
    })
    case('ADD_SMURF'):
    return({
      ...state, 
      smurfs: [...state.smurfs,
      {
        name: action.payload.name,
        position: action.payload.position,
        nickname: action.payload.nickname,
        description: action.payload.description
      }],
      isLoading: false,
      error: ''
    })
    case('ADD_SMURF_FAIL'):
    return({
      ...state,
      isLoading: false,
      error: action.payload
    })
    default:
      return state;
  }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary