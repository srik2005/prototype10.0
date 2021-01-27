import * as React from 'react';
import { Text, View, Button,TouchableOpacity,StyleSheet, Alert} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import AppHeader from './components/AppHeader';
import db from './config';
import firebase from 'firebase';
export default class AdviceScreen extends React.Component {
constructor(){
super();
this.state={total:null}


}



  

calculate =async () => {
 const english =await db.collection('subjects/english').get();
 const math =await db.collection('subjects/math').get();
 const science =await db.collection('subjects/science').get();
 const social =await db.collection('subjects/social').get();
 const hindi =await db.collection('subjects/hindi').get();
 
 var time = (english+math+science+social+hindi)*1.98;

 this.setState({total:time})

 Alert.alert(this.state.total)
};



 

   goToHome = () => {
    this.props.navigation.navigate('HomeScreen');
  };
  
  render() {
    return (
      <View>
      <AppHeader/>
  

   
       

      <TouchableOpacity 
            style={styles.button} 
            onPress={this.calculate}>
            <Text style={styles.buttonText2}>See Time</Text>
          </TouchableOpacity>
            


   <TouchableOpacity 
            style={styles.button} 
            onPress={this.goToHome}>
            <Text style={styles.buttonText2}>Go  Back</Text>
          </TouchableOpacity>
     
      </View>





 


    )
  }
}
const styles = StyleSheet.create({
    button:{
    justifyContent : 'center',
    alignSelf : 'center',
    borderWidth : 2,
    borderRadius : 15,
    marginTop:150,
    width : 200,
    height:50,
    backgroundColor:'blue'
  },
 
   buttonText2 : {
    
    textAlign : 'center',
    color : 'gold',
    fontSize:35,
  }
})