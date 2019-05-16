// we'll need axios
import axios from "axios";
// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const FETCHING_DATA = "FETCHING_DATA";

export const FETCHING_SUCCESS = "FETCHING_SUCCESS";

export const FETCHING_FAIL = "FETCHING_FAIL";
// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator


const fetchingData = () => dispatch => {
    dispatch({type : FETCHING_DATA})
    axios
    .get("https://swapi.co/api/people/")
    .then( res => {
        console.log(res.data.results)
        dispatch({
            type : FETCHING_SUCCESS,
            payload : res.data.results
        })

    })
    .catch( err => {
        dispatch({
            type: FETCHING_FAIL, 
            payload : err
        })
    })
}


export default fetchingData;