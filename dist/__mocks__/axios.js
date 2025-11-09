var axios = {
    post: jest.fn(),
    get: jest.fn(),
    create: function () { return axios; },
};
export default axios;
