import React, { Component } from 'react';
import { View, TextInput, Button, Text, Alert, StyleSheet, Console, Card, SafeAreaView, FlatList } from 'react-native';
import Constants from 'expo-constants';
import { SimplePanel } from '../components/panel';
import { setDataStr, setDataObj } from "../save_new";
import moment from 'moment';

let DATA = [];
class JournalEntry extends Component {
    constructor(props) {
        super(props);

         this.state = {
            description: ' ',
         };
     }


    // function once user is done
     _handlePress(){
          var dateAndTime= moment().format("DD-MM-YYYYHH.mm.ss")
          let J_KEY = 'JOUR' + dateAndTime.toString();
          Alert.alert('Entry Saved!');
          console.log(J_KEY);
          DATA.push(J_KEY);
          console.log(this.state.description);
          setDataStr(J_KEY, this.state.description);
          console.log(DATA);
}


     render () {
         return (
              <>
                 <Text style={styles.header}>
                     how are you today?
                 </Text>
                 <TextInput style={styles.box}
                      multiline
                      numberOfLines={8}
                      placeholder={ "Write..." }
                      onChangeText={(text) => this.setState({description: text})}
                 />
                 <Button
                     title={"Done"}
                     onPress={() => this._handlePress()}

                 />
              </>
         );

     }

}
const styles = StyleSheet.create({

  header: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  width:{
        borderColor: '#000000',
        borderBottomWidth: 1,
        borderWidth: 0.6,
  },
  box:{
   height:'50%',
   width:'70%',
   borderColor: 'gray',
   borderRadius: 10,
   borderWidth: 2,
   },

});

export {JournalEntry};
export {DATA};
