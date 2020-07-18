import axios from 'axios'

export default axios.create({
  baseURL: 'https://schedule-school-13e34.firebaseio.com/'
})