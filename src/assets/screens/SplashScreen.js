import { Text, View, StyleSheet, Image } from 'react-native';

function SplashScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image style={styles.icon} source={require('../images/icon.png')}></Image>
            </View>
            <View style={styles.logoContainer}>
                <Text style={styles.from}>From</Text>
                <View style={styles.logoTextWrapper}>
                    <Image style={styles.logo} source={require('../images/facebookTextLogo.png')}></Image>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        // justifyContent:'flex-end',
        color:'white'
    },
    iconContainer: {
        marginTop:300,
        display:'flex',
        flex:1,
        // justifyContent:'flex-end',
        alignItems:'center'
    },
    logoContainer:{
        display:'flex',
        flex:1,
        // justifyContent:'flex-end',
        alignItems:'center',
        marginTop:75
    },
    logoTextWrapper:{
        width:'35%',
        height:20,
    },
    icon:{
        width:100,
        height:100
    },
    logo:{
        flex:1,
        width:undefined 
    },
    from:{
        color:'grey',
        marginBottom:15
    }
})

export default SplashScreen;