import request from '../utils/axios';


export function getAnswer (product,question) {

    let data = {product: product,question: question}
    return request({
        url: "/getAnswerPost",
        method: 'post',
        data: data,
        baseURL: '/api'
    })

}
