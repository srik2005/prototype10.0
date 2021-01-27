import * as React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,ToastAndroid,Alert, 
} from 'react-native';

import AppHeader from './components/AppHeader';
import Inputs from './inputs.js';
import db from './config';
import firebase from 'firebase';
export default class HomeScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      english: null,
      math: null,
      hindi: null,
      social: null,
      science: null,
      error:null,
      total:null,
    };
  }

  getInput= async()=>{
    db.collection('subjects').update({
      english:this.state.english,
      math:this.state.math,
      hindi:this.state.hindi,
      social:this.state.social,
      science:this.state.science,
      
    })
    Alert.alert('marks added');
    console.log(1234);
  }
validator(){
if(this.state.english==""||this.state.math==""||this.state.hindi==""||this.state.social==""||this.state.science==""){
this.setState({error:'no empty values please'})

}

}

goToAdvice = () => {
  this.props.navigation.navigate('AdviceScreen');
};
  render() {
    return (
      <View>
        <ScrollView>
          <AppHeader />

          <Text style={styles.buttonText}>English</Text>
          <TextInput
            style={styles.input}
            underlineColorAndroid="transparent"
            onBlur={()=>this.validator()}
            placeholder="Max Marks - Your Marks"
            placeholderTextColor="blue"
            autoCapitalize="none"
            keyboardType="numeric"
            onChangeText={(text) => {
              this.setState({
                english: text,
              });
            }}
            value={this.state.english}
          />
<Text style={{color:"red"}}>{this.state.error}</Text>
          <Text style={styles.buttonText}>Math</Text>
          <TextInput
            style={styles.input}
             onBlur={()=>this.validator()}
            underlineColorAndroid="transparent"
            placeholder="Max Marks - Your Marks"
            keyboardType="numeric"
            placeholderTextColor="magenta"
            autoCapitalize="none"
            onChangeText={(text) => {
              this.setState({
                math: text,
              });
            }}
            value={this.state.math}
          />
<Text style={{color:"red"}}>{this.state.error}</Text>
          <Text style={styles.buttonText}>Science</Text>
          <TextInput
            style={styles.input}
             onBlur={()=>this.validator()}
            underlineColorAndroid="transparent"
            placeholder="Max Marks - Your Marks"
            keyboardType="numeric"
            placeholderTextColor=" rgb(255,100,0)"
            autoCapitalize="none"
            onChangeText={(text) => {
              this.setState({
                science: text,
              });
            }}
            value={this.state.science}
          />
<Text style={{color:"red"}}>{this.state.error}</Text>
          <Text style={styles.buttonText}>Social</Text>
          <TextInput
            style={styles.input}
             onBlur={()=>this.validator()}
            underlineColorAndroid="transparent"
            placeholder="Max Marks - Your Marks"
            keyboardType="numeric"
            placeholderTextColor="blue"
            autoCapitalize="none"
            onChangeText={(text) => {
              this.setState({
                social: text,
              });
            }}
            value={this.state.social}
          />
          <Text style={{color:"red"}}>{this.state.error}</Text>
          <Text style={styles.buttonText}>Hindi</Text>
          <TextInput
            style={styles.input}
             onBlur={()=>this.validator()}
            underlineColorAndroid="transparent"
            placeholder="Max Marks - Your Marks"
            keyboardType="numeric"
            placeholderTextColor="orange"
            autoCapitalize="none"
            onChangeText={(text) => {
              this.setState({
                hindi: text,
              });
            }}
            value={this.state.hindi}
          />
<Text style={{color:"red"}}>{this.state.error}</Text>
<TouchableOpacity 
            style={styles.button} 
            onPress={this.goToAdvice}>
            <Text style={styles.buttonText2}>How Much Time You Should Study</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.button} 
            onPress={this.getInput}>
            <Text style={styles.buttonText2}>Save the data</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    marginTop: 20,
    textAlign: 'center',
    color: 'black',
    fontSize: 35,
  },
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
  input: {
    margin: 15,
    height: 40,
    borderColor: 'white',
    textAlign: 'center',
    borderWidth: 1,
    color: 'white',
  },
});
