import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Dashboard from "../pages/Dashboard";

const Stack = createNativeStackNavigator();

function AppRoutes(){
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Dashboard" // nome da rota
        component={Dashboard} // renderizacao da rota
      />
      
    </Stack.Navigator>
  )
}

export default AppRoutes;