import {auth} from '../../firebase';


export const signInWithEmailAndPassword = (userCredentials) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(auth.signInWithEmailAndPassword(userCredentials.email, userCredentials.password))
        }, 300)
    })
}

export const createUserWithEmailAndPassword = (userCredentials) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(auth.createUserWithEmailAndPassword(userCredentials.email, userCredentials.password))
        }, 300);
    });
}

export const authState = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(auth)
        }, 300)
    })
}