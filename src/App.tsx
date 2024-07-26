import React, { useState } from 'react';
import { SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import HomePageStyle from './components/HomePageStyle';
import TextStyle from './components/TextStyle';
import ButtonStyle from './components/ButtonStyle';
import Feather from 'react-native-vector-icons/Feather';


const App = () => {
  const [teamAPoints, setTeamAPoints] = useState(0);
  const [teamBPoints, setTeamBPoints] = useState(0);

  const resetPoints = () => {
    setTeamAPoints(0);
    setTeamBPoints(0);
  };


  return (
    <SafeAreaView style={HomePageStyle.container}>
      <View style={HomePageStyle.scoreContainer}>
        <View style={HomePageStyle.teamContainer}>
          <Text style={TextStyle.teamText}>Time A</Text>
          <Text style={TextStyle.pointsText}>{teamAPoints}</Text>
          <View style={ButtonStyle.buttonDirection}>
          <TouchableOpacity style={ButtonStyle.button} onPress={() => setTeamAPoints(teamAPoints - 1)}>
                <Text style={ButtonStyle.buttonText}>
                    <Feather name="minus" size={20} color="#FFFF" />
                </Text>
          </TouchableOpacity>             
         <TouchableOpacity style={ButtonStyle.button} onPress={() => setTeamAPoints(teamAPoints + 1)}>
                <Text style={ButtonStyle.buttonText}>
                    <Feather name="plus" size={20} color="#FFFF" />
                </Text>
         </TouchableOpacity>             
          </View>
        </View>
        <View style={HomePageStyle.teamContainer}>
          <Text style={TextStyle.teamText}>Time B</Text>
          <Text style={TextStyle.pointsText}>{teamBPoints}</Text>
          <View style={ButtonStyle.buttonDirection}>
          <TouchableOpacity style={ButtonStyle.button} onPress={() => setTeamBPoints(teamBPoints - 1)}>
                <Text style={ButtonStyle.buttonText}>
                    <Feather name="minus" size={20} color="#FFFF" />
                </Text>
            </TouchableOpacity>             
            <TouchableOpacity style={ButtonStyle.button} onPress={() => setTeamBPoints(teamBPoints + 1)}>
                <Text style={ButtonStyle.buttonText}>
                    <Feather name="plus" size={20} color="#FFFF" />
                </Text>
            </TouchableOpacity>             

          </View>
        </View>
      </View>
      <View style={HomePageStyle.resetContainer}>
        <TouchableOpacity style={[ButtonStyle.button, ButtonStyle.resetButton]} onPress={resetPoints}>
        <Text style={ButtonStyle.buttonTextReset}> Resetar Pontos</Text>   
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;
