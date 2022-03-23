import { useState } from 'react';
import axios from 'axios';

function useProvideAuth() {
    const [user, setUser] = useState(localStorage.getItem('user'));

    const signin = (username, password) => {
        return axios.post('auth/login', { username, password }).then((res) => {
            setUser(res.data);
            localStorage.setItem('user', res.data);
        })
    }

    const signout = () => {
        setUser(null);
        localStorage.removeItem('user');
    }

    return {
        user,
        signin,
        signout
    }
}

export default useProvideAuth;