const baseUrl = 'https://dummyjson.com'

const urls = {
    users: {
        getUsers: baseUrl + '/users'
    },
    products: {
        getProductsByUserId:(id:number): string => baseUrl + '/carts' + '/user' + '/' + id
    }
}

export {
    urls
}