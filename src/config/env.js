// Good practice for passing environment variables into the code
// Instead of calling process.env everywhere, import from this file
const envConfig = {
  backendUrl: process.env.REACT_APP_BACKEND,
  endpoints: {
    workshops: 'workshops',
    products: 'products',
    vendors: 'vendors',
    auth: 'auth',
    students: 'students',
    search: 'search',
    orders: 'orders',
    events: 'events',
    photos: 'photos',
    admin: 'admin',
    home: 'home',
    donations: 'donations',
  },
};

module.exports = envConfig;
