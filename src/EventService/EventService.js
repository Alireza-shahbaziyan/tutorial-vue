import axios from "axios"

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  withCredentials: false,
  headers: {
    Accept: 'application/json',
  }
})

export default {
  getEvents() {
    return api.get('/users')
  },
  getEvent(id) {
    return api.get('/users/'+id)
  },
}
