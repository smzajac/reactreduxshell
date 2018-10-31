export const GET_USER = "GET_USER";

// export function getUser(){
//     return function(dispatch) {
//           fetch("https://randomuser.me/api/")
//     .then(res => res.json())
//     .then(
//       (result) => {
//         dispatch({
//             type: GET_USER,
//             payload: user
//         })
//       },
//       (error) => console.log(error)
//     )
//     }
// }

//ES6 syntax

export const getUser = () => dispatch => {
    console.log("fetching")
          fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(
      (user) => {
        dispatch({
            type: GET_USER,
            payload: user
        })
      },
      (error) => console.log(error)
    )
    }