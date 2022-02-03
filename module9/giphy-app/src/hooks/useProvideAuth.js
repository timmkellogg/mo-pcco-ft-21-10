import { useState } from 'react';

const users = [

]

function useProvideAuth() {
    const [user, setUser] = useState({
        usename: '',
        balance: 0
    });

    const signin = (cb) => {
        setUser('tim')
        cb();
    }

    const signout = (cb) => {
        setUser(null)
        cb();
    }

    return {
        user,
        signin,
        signout
    }
}

export default useProvideAuth;