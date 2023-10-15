import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import SignIn from "../pages/Signin";

const Stack = createNativeStackNavigator();

function AuthRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="SignIn" // nome da rota
        component={SignIn} // renderizacao da rota
        options={{headerShown : false}}
      />

    </Stack.Navigator>
  )
}

export default AuthRoutes;