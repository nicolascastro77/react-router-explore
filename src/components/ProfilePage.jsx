import React from 'react'
import { useAuth } from '../auth/auth'


export const ProfilePage = () => {
  const auth = useAuth();
  return (
      <div>Hola {auth.user.name} tu rol es de {auth.user.role.status}</div>

  )
}
