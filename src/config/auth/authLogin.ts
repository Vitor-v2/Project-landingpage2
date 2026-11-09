import {
  browserPopupRedirectResolver,
  GoogleAuthProvider,
  signInWithPopup
} from 'firebase/auth'
import { auth } from '../firebase.config'

export async function loginWithGoogle() {
  const provider = new GoogleAuthProvider()
  provider.setCustomParameters({
    prompt: 'select_account',
    hl: 'pt-BR'
  })

  try {
    const userCredential = await signInWithPopup(
      auth,
      provider,
      browserPopupRedirectResolver
    )
    return userCredential.user
  } catch (error) {
    console.error('Erro ao fazer login com Google:', error)
    throw error
  }
}
