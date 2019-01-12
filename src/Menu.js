import React from 'react'
import { createDrawerNavigator } from 'react-navigation'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import { Inverter } from './componentes/Multi'

export default createDrawerNavigator(
    {
        Inverter: {
            screen: () => <Inverter text='React Native' />
        },
        ParImpar:{
            screen: () => <ParImpar numero={30} />
        },
        Simples: {
            screen: () => <Simples texto='Flexivel!!' />
        }

    }, 
    { drawerWidth: 300}
)