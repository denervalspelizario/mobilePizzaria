import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';

import { AuthProvider } from './src/contexts/AuthContext';

export default function App() {
  return (
    <NavigationContainer>
      
      {/* AuthProvider passando os dados de autenticação as rotas*/}
      <AuthProvider>
        <StatusBar 
          backgroundColor="#1d1d2e"
          barStyle="light-content" 
          translucent={false}
        />

        {/* Todas as rotas*/}
        <Routes />
      </AuthProvider>
      
    </NavigationContainer>
  );
}

