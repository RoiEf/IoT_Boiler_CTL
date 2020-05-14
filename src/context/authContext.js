import { createContext } from "preact";
import { useState } from "preact/hooks";

const AuthContext = createContext([{}, () => { }]);

const AuthContextProvider = (props) => {
    const [state, setState] = useState({
        user: null,
        password: null,
        isAutenticated: false,
    });

    return (<AuthContext.Provider value={[state, setState]}>
        {props.children}
    </AuthContext.Provider>);
};

export { AuthContext, AuthContextProvider };