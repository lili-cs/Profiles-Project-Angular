import axios from 'axios';
// import { Profile } from '../interfaces/profile';

export default axios.create({
        baseURL: 'http://localhost:3000',
        headers: {
            "Content-type": "application/json"
        }
    });
