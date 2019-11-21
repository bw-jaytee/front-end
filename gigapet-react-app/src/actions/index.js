import { axiosWithAuth } from "../utils/axiosWithAuth";

export const FETCH_START = "FETCH_LOADING";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const ADD_FOOD = "ADD_FOOD";
export const DELETE_FOOD = "DELETE_FOOD";
export const EDIT_FOOD = "EDIT_FOOD";

export const addNewFood = newFood => dispatch => {
  console.log("addNewFood AC", newFood);
  dispatch({ type: ADD_FOOD, payload: newFood });
};

export const deleteFood = id => dispatch => {
    console.log("deleteFood AC", id);
    dispatch({ type: DELETE_FOOD, payload: id });
  };

  export const editFood = edited => dispatch => {
    console.log("addNewFood AC", edited);
    dispatch({ type: EDIT_FOOD, payload: edited });
  };

export const fetchFood = () => dispatch => {
  dispatch({ type: FETCH_LOADING });
  axiosWithAuth()
    .get("/eatz/alleatzforuser")
    .then(res => {
      console.log("API GET res.data", res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAIL, payload: err });
    });
};
