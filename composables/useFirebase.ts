//https://firebase.google.com/docs/auth/web/start

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'

export const createUser = async (email: string, password: string) => {
  const auth = getAuth()
  const router = useRouter()

  const credentials = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  )
    .then(userCredential => {
      // Signed in
      const user = userCredential.user
      router.push('/')
    })
    .catch(error => {
      const errorCode = error.code
      const errorMessage = error.message
    })
  return credentials
}

export const signInUser = async (email: string, password: string) => {
  const auth = getAuth()
  const credentials = await signInWithEmailAndPassword(
    auth,
    email,
    password
  ).catch(error => {
    const errorCode = error.code
    const errorMessage = error.message
  })
  return credentials
}

export const initUser = async () => {
  const auth = getAuth()
  const firebaseUser = useFirebaseUser()
  firebaseUser.value = auth.currentUser

  const userCookie = useCookie('userCookie', { sameSite: 'strict' })

  const router = useRouter()

  onAuthStateChanged(auth, user => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      router.push('/')
    } else {
      //if signed out
      router.push('/login')
    }

    firebaseUser.value = user

    userCookie.value = user as unknown as string

    $fetch('/api/auth', {
      method: 'POST',
      body: { user },
    })
  })
}

export const signOutUser = async () => {
  const auth = getAuth()
  const router = useRouter()

  signOut(auth)
    .then(() => {
      router.push('/login')
    })
    .catch(error => {
      // An error happened.
    })
}
