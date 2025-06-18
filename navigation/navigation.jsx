import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LoginScreen from "../app/LoginScreen";
import QuestionariesScreen from "../app/QuestionariesScreen";
import QuestionaryScreen from "../app/QuestionaryScreen";
import QuestionPage from "../app/QuestionPage";
import QuestionListPage from "../app/QuestionListPage";

const Stack = createNativeStackNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Questionary" component={QuestionariesScreen} />
                <Stack.Screen name="Questionaries" component={QuestionaryScreen} />
                <Stack.Screen nam="Preguntas" component={QuestionListPage} />
                <Stack.Screen name="Pregunta" component={QuestionPage} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}