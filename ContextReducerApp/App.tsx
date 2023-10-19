import React from 'react'
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { NavigationStack } from './src/navigation/NavigationStack';
import { ProfileProvider } from './src/context/profileContext';

const AppState = ({ children }: any) => {
  return (
    <ProfileProvider>
      {children}
    </ProfileProvider>
  )
}

export const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <NavigationStack />
      </AppState>
    </NavigationContainer>
  )
}

export default App;