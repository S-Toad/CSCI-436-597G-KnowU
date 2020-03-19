import React, { Component } from "react";
import { View, Text, StyleSheet} from "react-native";
import {JournalListView} from '../components/JournalListView';
import {JournalEntry} from '../components/JournalEntry';
import ActionBar from 'react-native-action-bar';
import { SimplePanel } from '../components/panel';


class PersonalView extends Component {
  state = { anchor: null };
    constructor(props) {
        super(props);
         this.props.viewController.updateHeader("knowURself");
        this.handleLeftAction = this.handleLeftAction.bind(this);
    }


    handleLeftAction() {
         this.props.viewController.changeView(
              <JournalListView viewController={this.props.viewController}/>);
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
                <View style = {styles.panel}>
                       <JournalEntry/>
                </View>
          </>
        );
    }
}

const styles = StyleSheet.create({

    panel: {
        backgroundColor: 'rgba(190, 205, 225, 0.80)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        borderRadius: 10,
        flex: 10,
    },
    content: {
        opacity: 1.0
    }
});
export {PersonalView};
