import axios from "axios"

const instance=axios.create({
    baseURL:"https://cube-app-reza-default-rtdb.firebaseio.com"
})

export default instance