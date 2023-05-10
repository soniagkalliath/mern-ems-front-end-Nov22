import { BASE_URL } from "./base_url"
import { commonRequest } from "./commonRequest"


//register api
export const empRegister = async(body,header)=>{
 return await  commonRequest("POST",`${BASE_URL}/employee/register`,body,header)
}
