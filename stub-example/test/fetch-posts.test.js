const { default: axios } = require('axios')
const getPosts = require('../fetch-posts')

jest.mock('axios')

describe('Fetch posts test', () => {
    test('getPosts should return posts', async () => {
        const axiosResp = {
            data: [
                {
                    id: 1,
                    title: 'post 1'
                },
                {
                    id: 2,
                    title: 'post 2'
                }
            ]
        }
        axios.get.mockImplementation(() => Promise.resolve(axiosResp))

        const data = await getPosts('/posts')

        expect(data).toBe(axiosResp.data)
    })
})