const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'
const posts = '/posts'

const urls = {
    users: {
        getUsers: users
    },
    posts: {
        getUserPosts: (id:number) => `${users}/${id}${posts}`
    }
}

export {
    baseURL,
    urls
}