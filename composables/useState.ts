import { User } from 'firebase/auth'

export const useFirebaseUser = () =>
  useState<User>('firebaseUser', () => ref<User>({} as User))
