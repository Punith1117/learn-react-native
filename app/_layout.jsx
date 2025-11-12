import { Stack } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const RootLayout = () => {
  return (
    <Stack screenOptions={{
        headerStyle: { backgroundColor: '#e3ff95'},
        headerTintColor: '#1c3eff'
    }}>
        <Stack.Screen name='index' options={{title: 'Home', headerShown: false} }/>
        <Stack.Screen name='about' options={{title: 'About'}}/>
    </Stack>
  )
}

export default RootLayout

const styles = StyleSheet.create({})