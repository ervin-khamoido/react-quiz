import axios from 'axios'

export default axios.create({
   baseURL: 'https://react-quiz-b2b15-default-rtdb.firebaseio.com/'
})