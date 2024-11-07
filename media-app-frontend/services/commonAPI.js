
// 1 importing axios
import axios from 'axios'

// 2 configure the axios
export const commonAPI=async(httpMethod,url,reqBody)=>{
    let reqConfig={
        method:httpMethod,
        url:url,
        data:reqBody
    }
    return await axios(reqConfig).then((responce)=>{
        return responce.data
    }).catch((error)=>{
        return error
    })
}


