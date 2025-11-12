import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About</Text>
      <Link href="/" style={styles.link}>Back home</Link>
    </View>
  )
} 

export default About

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    link: {
        color: '#2e5efd',
        fontStyle: 'italic'
    }
})