import firebase from '../../firebase';


export const signInWithEmailAndPassword = (userCredentials) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(firebase.default.auth().signInWithEmailAndPassword(userCredentials.email, userCredentials.password))
        }, 300)
    })
}

export const createUserWithEmailAndPassword = (userCredentials) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(firebase.default.auth().createUserWithEmailAndPassword(userCredentials.email, userCredentials.password))
        }, 300);
    });
}

export const signOut = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve(firebase.default.auth().signOut),
            300
        )
    })
}