import React from 'react'
import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter } from './componentes/Multi'

const Menu = createDrawerNavigator(
    {
        Inverter: {
            screen: () => <Inverter texto='React Native' />
        },
        ParImpar:{
            screen: () => <ParImpar numero={30} />
        },
        Simples: {
            screen: () => <Simples texto='Flexivel!!' />
        }

    }, 
    {
        initialRouteName: "Simples"
    },
    { drawerWidth: 300}
)

export default createAppContainer(Menu)