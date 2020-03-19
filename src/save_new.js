
import * as SecureStore from 'expo-secure-store';


/****    Storing data    ****/

export const setDataObj = async (k,v) => {
    let vJson = { data: v }
    await setDataJSON(k,vJson);
}

export const setDataJSON = async (k,v) => {
    // Parse JSON obj to string before storing
    let vStr = JSON.stringify(v);
    await setDataStr(k,vStr);
}

export const setDataStr = async (k,vStr) => {
    // Await on storing a key-value pair
    try {
        await SecureStore.setItemAsync(k,vStr);
    } catch (e) {
        console.error(e);
    }
}

/****    Retrieving data    ****/

export const getDataObj = async (k,callback,vDefault=null) => {
    await getDataJSON(k,(vJson) => {
        callback((vJson == null) ? vDefault : vJson.data)
    });
}

export const getDataJSON = async (k,callback,vDefault=null) => {
    // Get value as str first, then parse and callback
    await getDataStr(k,(vStr) => {
        callback((vStr == null) ? vDefault : JSON.parse(vStr))
    });
}

export const getDataStr = async (k,callback,vDefault=null) => {
    // Await on the promise and then callback with the stored string
    try {
        let vStr = await SecureStore.getItemAsync(k);
        callback(vStr);
    } catch (e) {
        callback(vDefault);
    }
}
