import { View, Text, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
        headerShown: false
      }}>
        <Tabs.Screen name='Home'
            options={{
                tabBarIcon: ({ focused, color, size}) =>
                    <Image />
            }}
        />

        <Tabs.Screen name='Dashboard' />
        <Tabs.Screen name='Profile' />
    </Tabs>
  )
}