import {auth} from '../../firebase';
import {db} from '../../firebase';


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

export const forgetPassword = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        })
    })
}

export const authState = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(auth)
        }, 300)
    })
}

export const addFireStoreUserDetail = ({user}, form) => {
    return new Promise( async (resolve , reject) => {
        console.log('user being passed in to be added ', user);
        let response = await db.collection('users').doc(user.uid).set({
            displayName: form.username,
            email: user.email,
            profile_img: 'https://pm1.narvii.com/6761/d63cf8f1a27519a70c9e5b86c45a5b2bb1fe8f85v2_hq.jpg',
            address: {
                street: '2844 Torment Lane',
                city: 'sunnty diego',
                state: 'CA',
                zip: 12345
            }
        });
        setTimeout(() => {
            console.log('response from adduser to firestore ', response)
            resolve(response);
        }, 300)
    })
}

export const getFireStoreUserDetail = async (uid) => {
        console.log('user being passed in to be added ', uid);
        let user;
        let userRef = db.collection('users').doc(uid);
        await userRef.get().then((doc) => {
            if(doc.exists) {
                console.log('Success retrieval user ', doc.data());
                user = doc.data();
            } else {
                console.log("User doesn't exist")
            }
        });
        return user;
}