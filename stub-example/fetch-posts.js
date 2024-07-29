const { default: axios } = require('axios')

const URL = 'https://jsonplaceholder.typicode.com'

const getPosts = async (path) => {

    return await axios.get(`${URL}${path}`)
    .then(response => {
        return response.data
    })
    .catch(error => {
        console.log(error)
    })
}

module.exports = getPosts