import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../app/LoginScreen";
import QuestionariesScreen from "../app/QuestionariesScreen";
import QuestionaryScreen from "../app/QuestionaryScreen";

const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Questionary" component={QuestionaryScreen} />
                <Stack.Screen name="Questionaries" component={QuestionariesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}