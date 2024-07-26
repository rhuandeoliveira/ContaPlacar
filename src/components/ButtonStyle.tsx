import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    button: {
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
      },    
    buttonText: {
        color: '#FFFFFF',
        textAlign: 'center'
      },
    buttonTextReset: {
        color: '#FFFFFF',
        fontSize: 25,
        textAlign: 'center',
      },
    buttonDirection: {
        flexDirection: "row"
      },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch'
      }, 
    resetButton: {
        backgroundColor: '#FF0000',
      }, 
})