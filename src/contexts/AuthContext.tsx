import React, {useState, createContext, ReactNode} from 'react';

// tipagem de context
type AuthContextData = {
  user: UserProps; 
  isAuthenticated: boolean; 
}

// tipagem de user
type UserProps = {
  id: string;
  name: string;
  email: string;
  token: string;
}

// tipagem de children com ReactNode ou seja se comportamentará como react
type AuthProviderProps = {
  children: ReactNode  
}

export const AuthContext = createContext({} as AuthContextData);


// children é todo as paginas que serão abraçadas pelo auth context
export function AuthProvider({children}: AuthProviderProps){
  // state que vai receber dados do usuário atravez da tipagem UserProps
  const [user, setUser] = useState<UserProps>({
    id: '',
    name: '',
    email: '',
    token: ''
  })

  // !! tranforma user para um boolean e se state user não tiver dados será false tendo dados true 
  const isAuthenticated = !!user.name;

  return (
    // passado de fato dados de user e autenticação 
    <AuthContext.Provider value={{user, isAuthenticated}}>
      {children}
    </AuthContext.Provider>
  )
}