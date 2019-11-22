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
  axiosWithAuth()
    //delete}/eatz/delete/ [eatzid]
    .delete(`/eatz/delete/${id}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      alert("There was a problem. Please try again later");
    });
};

export const editFood = (id, editedObj) => dispatch => {
  console.log("addNewFood AC", editedObj);
  dispatch({ type: EDIT_FOOD, payload: {id, editedObj} });
  axiosWithAuth()
    .put(`/eatz/update/${id}`, editedObj)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.log(err.response));
};

export const fetchUserData = () => dispatch => {
  //console.log("fetchUserData started");
  dispatch({ type: FETCH_START });
  axiosWithAuth()
    .get("/users/getuserinfo")
    .then(res => {
      console.log("API GET res.data", res.data);
      dispatch({ type: FETCH_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: FETCH_FAIL, payload: err });
    });
};
