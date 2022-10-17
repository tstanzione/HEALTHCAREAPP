import "react-native-gesture-handler";
//import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { StyleSheet, Text, View,Image,  TouchableOpacity } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from '@react-navigation/native';
import Grid from "./Screens/Grid.js"; 
import MapNew from "./Screens/MapNew.js";
import Details from "./Screens/Details.js";
import OurMission from "./Screens/OurMission.js";
import Disclaimer from "./Screens/Disclaimer.js";

const Stack = createNativeStackNavigator();

function LogoTitle() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("OurMission")}>
      <Image
        style={{ width: 35, height: 35 }}
        source={require('./assets/icon.png')}
      />
      </TouchableOpacity>
    
  );
}

export default function App() {
 
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Grid"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#B5BCB7',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: (props) =>   <LogoTitle {...props} /> 
        }}
        >
        <Stack.Screen
          name="Grid"
          component={Grid}
          options={{
            title: "Clinic Specialties",
            
          }}
        >
        </Stack.Screen>
 
        <Stack.Screen    
          name ="MapNew"
          component={MapNew}     
          options={({ route }) => ({ title: route.params.item.key})}
        >    
        </Stack.Screen>

        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            title: "Clinic Details"
          }}
        >         
        </Stack.Screen>

        <Stack.Screen
          name="OurMission"
          component={OurMission}
          options={{
            title: "OurMission"
          }}
        >         
        </Stack.Screen>

        <Stack.Screen
          name="Disclaimer"
          component={Disclaimer}
          options={{
            title: "Disclaimer"
          }}
        >         
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//const styles = StyleSheet.create({
//  container: {
 //   flex: 1,
 //   backgroundColor: "#F3E2A9",
   //alignItems: "center",
 
//  },
//});