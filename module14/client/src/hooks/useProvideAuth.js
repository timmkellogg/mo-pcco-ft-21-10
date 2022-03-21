import { useState } from 'react';

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const signin = () => {

    }

    const signout = () => {

    }

    return {
        user,
        signin,
        signout
    }
}

export default useProvideAuth;