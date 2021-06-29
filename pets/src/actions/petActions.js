 import * as Service from '../services/petService'
 import * as Constant from '../constants/index'

 export const petDataHandler = () => {
     return dispatch => {
         Service.getPetData().then((response) => {
             console.log(response)
             if (response.isSuccess) {
                 dispatch(petData(response.data))
             } else {
                 dispatch(petData(response.error))
             }
         })
     }
 }

 export const petData = data => {
     return {
         type: Constant.PET_DATA,
         data
     }
 }

 export const petError = data => {
     return {
         type: Constant.PET_ERROR,
         data
     }
 }