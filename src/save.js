// $ yarn add @react-native-community/async-storage
// ../projectfolder/$ react-native link @react-native-community/async-storage

//import AsyncStorage from 'async-storage';
//const AsyncStorage = require('async-storage');
//import AsyncStorage from "react-native";
import AsyncStorage from '@react-native-community/async-storage'
//import * as o from "./foo.d.ts";

//args      key1(string):   the key value of the input type ie: questionnaire
//          key2(string):   the nested json object key value ie: id of single questionnaire
//returns   item        :   the key's item, may be a json or a single value
export async function getObj (key1, key2) {
    try {
      const item1 = await AsyncStorage.getItem(key1);
      if(item1 === null) {
        AsyncStorage.setItem(key1, "{}");
      }
      let jitem1 = JSON.parse(item1);
      let item2 = jitem1[key2];
      return Promise.resolve(item2);
    } 
    catch(e) {
      alert(e);
      console.log(e);
    }
}

//  only use when accessing an item from the async json
//  returns all entries of a specific entry type
export async function getQList (key) {
  try {
    const item = await AsyncStorage.getItem(key);
    return JSON.parse(item);
  }
  catch(e) {
    console.log(e);
  }
}

//args      key1(string):   the key value of the input type ie: questionnaire
//          id          :   the nested json object key value ie: id of single questionnaire
//          input       :   the object to be saved to the key
export async function writeObj (id, key, input) {
  try{
    let keyItem = getObj(key);
    input = JSON.stringify(input);
    keyItem[id] =  input;
    keyitem = JSON.stringify(keyItem);
    AsyncStorage.setItem(key,keyitem);
  }
  catch(e) {
    console.log(e);
  }
}