import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAIL,
  ADD_FOOD,
  DELETE_FOOD,
  EDIT_FOOD
} from "../actions";

const initialState = {
  APIdata: {
    fullname: "User",
    userid: null,
    username: "",
    usereatz: []
  },
  petData: {
    stage: "baby",
    health: "happy"
  },
  isLoading: false,
  error: null,
  changeTrigger: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      console.log("reducer FETCH_START");
      return {
        ...state,
        isLoading: true
      };
    case FETCH_SUCCESS:
      console.log("reducer FETCH_SUCCESS");
      return {
        ...state,
        APIdata: {
          ...action.payload
        },
        isLoading: false
      };
    case FETCH_FAIL:
      console.log("reducer FETCH_FAIL", action.payload);
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    case ADD_FOOD:
      console.log("reducer ADD_FOOD", action.payload);
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false
      };
    case DELETE_FOOD:
      console.log("reducer DELETE_FOOD", action.payload);
      return {
        ...state,
        APIdata: {
          ...state.APIdata,
          usereatz: state.APIdata.usereatz.filter(
            item => item.eatzid !== action.payload
          )
        }
      };
    case EDIT_FOOD:
      console.log("reducer EDIT_FOOD", action.payload);

      return {
        ...state,
        data: [...state.data, action.payload]
      };

    default:
      return state;
  }
};

export default reducer;
