import {GET_USER} from "../actions";

// const getUser = () => fetch("https://randomuser.me/api/")
// .then(res => res.json())
// .then(
//   (result) => {
//     // this.setState({
//     //   user: result.results[0].name.first
//     // });
    
//     console.log(result)
//   },
//   (error) => console.log(error)
// )



export const getUser = async (dispatch) => {
    console.log("fetching get User")
    try{
        const response = await fetch(
            "https://randomuser.me/api/"
        );
        const user = await response.json();
        console.log(user)
        dispatch({
            type: GET_USER,
            payload: user.results[0].name.first,
        })
    } catch (error) {
        console.log(error);
    }

}



// export const getOfferings = () => async (dispatch, getState) => {
//     try {
//       const response = await fetch(
//         `https://randomuser.me/api/`
//       );
//       const offerings = await response.json();
//       dispatch({
//         type: ENTITIES_RECEIVED,
//         payload: offerings,
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   };