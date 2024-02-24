//import axios
import axios from 'axios'

const Api = axios.create({
    //set default endpoint API
    baseURL: 'https://donasi.assalamkubar.com/api'
})

export default Api