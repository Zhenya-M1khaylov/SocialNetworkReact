import axios from "axios";

const instance = axios.create({
    withCredentials:true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        "API-KEY" : "2166576b-0034-4414-afd9-6b9f223707f5"
    }
})

export const userAPI = {
    getUsers(currentPage:number,pageSize:number = 1)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    unfollowUser (id:number)  {
        return instance.delete(`follow/${id}`)
            .then(response => response.data)
    },
    followUser (id:number) {
        return instance.post(`follow/${id}`, {})
            .then(response => response.data)
    }
}