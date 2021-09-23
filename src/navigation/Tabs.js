import React from "react";
import {
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import { createBottomTabNavigator, BottomTabBar } from "@react-navigation/bottom-tabs";

import {Food} from "../srceens";

import { COLORS, icons } from "../constants";

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Move"
                component={Food}
                options={{
                    tabBarIcon: ({focused})  => (
                        <Image 
                            source={icons.move}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.black,
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen 
                name="Food"
                component={Food}
                options={{
                    tabBarIcon: ({focused})  => (
                        <Image 
                            source={icons.food}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.black,
                            }}
                        />
                    )
                }}
            />

            <Tab.Screen 
                name="More"
                component={Food}
                options={{
                    tabBarIcon: ({focused})  => (
                        <Image 
                            source={icons.more}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.black,
                            }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;