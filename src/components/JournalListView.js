import * as React from 'react';
import { List } from 'react-native-paper';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Console} from 'react-native';
import Constants from 'expo-constants';
import ActionBar from 'react-native-action-bar';
import {JournalEntry, DATA} from '../components/JournalEntry';
import { getDataStr } from "../save_new";




function Item({ date, description }) {
  return (
    <List.Item
      description={description}
    />
  );
}
let items = []
class JournalListView extends React.Component {


    constructor(props) {
        super(props);
        this.props.viewController.updateHeader("knowURself");
        this.handleLeftAction = this.handleLeftAction.bind(this);
    }

  handleLeftAction() {
         this.props.viewController.changeView(
              <JournalEntry viewController={this.props.viewController}/>);
    }

    getData(){
     getDataStr(DATA, (n) => {
                if (DATA.length < 1) return;
                n = DATA.length;
                count = 0;
                console.log("Loading " + n + " entries...")

                getDataStr(DATA[count], (q) => {

                    for(var i=0; i < n; i++) {
                        items.push(
                         <List.Item
                             description={description}
                             />

                        );
                    }
                });
            })
    }



  render() {
    return (
      <>
          <ActionBar
               backgroundColor={'#3B373C'}
               leftIconName={'menu'}
               onLeftPress={this.handleLeftAction}
               leftText={'Left'}
               title={'Journal'}
               rightText={'Right'}
           />
        <SafeAreaView style={styles.container}>
          
          <FlatList
            data={getData()}
            renderItem={
             getDataStr(DATA, (n) => {
                            if (DATA.length < 1) return;
                            n = DATA.length;
                            count = 0;
                            console.log("Loading " + n + " entries...")

                            getDataStr(DATA[count], (q) => {

                                for(var i=0; i < n; i++) {
                                    items.push(
                                     <List.Item
                                         description={description}
                                         />

                                    );
                                }
                            });
                        })

            }
            keyExtractor={item => item.id}
          />  
        </SafeAreaView>
    
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});

export {JournalListView};

