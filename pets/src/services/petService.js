import { getRequest } from '../utils/requestUtil'
import { PET_URL } from '../constants'

export const getPetData = () => {
    return getRequest(`${PET_URL}/owners`, {})
        .then((response) => {
            console.log(response)
            let res = { data: { maleCat: [], femaleCat: [] }, isSuccess: true }
            response.forEach((item, i) => {
                if (item.pets !== null) {
                    item.pets.forEach((subItem, subI) => {
                        if (subItem.type === "Cat") {
                            if (item.gender === "Male") {
                                res.data.maleCat.push(subItem.name)
                            } else {
                                res.data.femaleCat.push(subItem.name)
                            }
                        }
                    })
                }
            })
            return res
        })
        .catch(() => {
            console.log("Error")
        })
}