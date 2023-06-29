import { auth } from '../configs/firebase-config'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'

// const auth = getAuth();

export const userSignUp = (email, password) => {
    const createUserWithEmailAndPassword = useCreateUserWithEmailAndPassword(auth)

    createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('Successfully signed up!')
        console.log(userCredential)
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ': ' + errorMessage)
    });
}

// export userSignUp