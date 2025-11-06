const axios = {
  post: jest.fn(),
  get: jest.fn(),
  create: () => axios,
} as any;
export default axios;