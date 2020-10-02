import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Login from '../screens/Login.js'
import CreateAccount from '../screens/CreateAccount'    

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    CreateAccount: {
        screen: CreateAccount,
        navigationOptions: {
            headerShown: false
        }
    },
}

const RootStack = createStackNavigator(screens)

export default createAppContainer(RootStack)