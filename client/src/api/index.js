import axios from 'axios';

export default {
  foo: () => axios.get('/api').then(res => res.data)
}
