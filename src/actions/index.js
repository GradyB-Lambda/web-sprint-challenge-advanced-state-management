import axios from 'axios';



export const SMURF = "FETCH_SMURF";
export const FAIL = "FETCH_FAIL";
export const ADD = "ADD_SMURF";
export const DATA_FAIL = "DATA_FAIL";

export const smurfData = () => dispatch => {
    

    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: SMURF, payload: res.data });
        })
        .catch(err => dispatch({ type: FAIL, payload: err }));
}

export const addNewSmurf = (smurfData) => dispatch => {
    axios
        .post("http://localhost:3333/smurfs", smurfData)
        .then(res => {
            dispatch({ type: ADD, payload: smurfData });
        })
        .catch(err => dispatch({ type: FAIL, payload: err }));
}

export const setError = (err) => {
    return({ type: DATA_FAIL, payload: err });
}