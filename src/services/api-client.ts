import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'c795548cdcd74a77afb1c672b7e49cba'
    }
})