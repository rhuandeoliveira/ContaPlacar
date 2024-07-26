import { StyleSheet, Dimensions } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    scoreContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
    teamContainer: {
        alignItems: 'center',
        width: Dimensions.get('window').width * 0.4,
    },
    resetContainer: {
        marginTop: 30,
    },
})