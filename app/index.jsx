import { Image, StyleSheet, Text, View } from 'react-native'
import Logo from '../assets/img/Pikachu.png'
import { Link } from 'expo-router';

const Home = () => {
  return (
    <View style={styles.container}>
        <Image source={Logo} style={styles.imgStyle}></Image>
        <Text style={styles.title}>The number 1</Text>
        <Text style={{margin: 10, marginTop: 40}}>Reading list app</Text>
        <Link href="/about" style={styles.link}>About page</Link>
        <Link href="/contact" style={styles.link}>Contact page</Link>
    </View>
  )
}

export default Home 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    imgStyle: {
        height: 100,
        width: 100
    },
    link: {
        color: '#2e5efd',
        fontStyle: 'italic'
    }
})