const { default: axios } = require('axios')
const getPosts = require('../fetch-posts')

jest.mock('axios')

describe('Fetch posts test', () => {
    const URL = 'https://jsonplaceholder.typicode.com'

    test(`getPosts should call axios.get with "${URL}/posts"`, async () => {
        axios.get.mockImplementation(() => Promise.resolve({}))

        await getPosts('/posts')

        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenCalledWith(`${URL}/posts`)
    })
})