import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Dimensions, Image } from 'react-native';
 import Feather from 'react-native-vector-icons/Feather';


const App = () => {
  const [teamAPoints, setTeamAPoints] = useState(0);
  const [teamBPoints, setTeamBPoints] = useState(0);

  const resetPoints = () => {
    setTeamAPoints(0);
    setTeamBPoints(0);
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.scoreContainer}>
        <View style={styles.teamContainer}>
          <Text style={styles.teamText}>Time A</Text>
          <Text style={styles.pointsText}>{teamAPoints}</Text>
          <View style={styles.buttonDirection}>
          <TouchableOpacity style={styles.button} onPress={() => setTeamAPoints(teamAPoints - 1)}>
                <Text style={styles.buttonText}>
                    <Feather name="minus" size={20} color="#FFFF" />
                </Text>
          </TouchableOpacity>             
         <TouchableOpacity style={styles.button} onPress={() => setTeamAPoints(teamAPoints + 1)}>
                <Text style={styles.buttonText}>
                    <Feather name="plus" size={20} color="#FFFF" />
                </Text>
         </TouchableOpacity>             
          </View>
        </View>
        <View style={styles.teamContainer}>
          <Text style={styles.teamText}>Time B</Text>
          <Text style={styles.pointsText}>{teamBPoints}</Text>
          <View style={styles.buttonDirection}>
          <TouchableOpacity style={styles.button} onPress={() => setTeamBPoints(teamBPoints - 1)}>
                <Text style={styles.buttonText}>
                    <Feather name="minus" size={20} color="#FFFF" />
                </Text>
            </TouchableOpacity>             
            <TouchableOpacity style={styles.button} onPress={() => setTeamBPoints(teamBPoints + 1)}>
                <Text style={styles.buttonText}>
                    <Feather name="plus" size={20} color="#FFFF" />
                </Text>
            </TouchableOpacity>             

          </View>
        </View>
      </View>
      <View style={styles.resetContainer}>
        <TouchableOpacity style={[styles.button, styles.resetButton]} onPress={resetPoints}>
        <Text style={styles.buttonTextReset}> Resetar Pontos</Text>   
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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
  teamText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  pointsText: {
    fontSize: 100,
    marginVertical: 20,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#007BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  resetContainer: {
    marginTop: 30,
  },
  resetButton: {
    backgroundColor: '#FF0000',
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
});

export default App;
