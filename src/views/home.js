import React, { Component } from "react";
import { View, Button } from "react-native";
import { SimplePanel } from '../components/panel';
import { JournalEntry } from '../components/JournalEntry';
import { Questionnaire } from '../analytics/questionnaire';
import { DEFAULT_FORM, KEYS } from '../analytics/questionnaire_constants';
import { setDataObj, getDataObj } from '../save_new';


class HomeView extends Component {

    constructor(props) {
        super(props);
        this.props.viewController.updateHeader("knowU. knowURself.");
        this.startQuestionnaire = this.startQuestionnaire.bind(this);
    }
    
    startJournalEntry() {
        this.props.viewController.toggleToolbar(true);
        this.props.viewController.changeView(
            <JournalEntry
                viewController={this.props.viewController}
             />
                
        );
    }

    startQuestionnaire() {
        this.props.viewController.toggleToolbar(false);

        getDataObj(KEYS.CURR_Q, (v) => {
            if (v == null) {
                console.log("Storing default form...")
                v = DEFAULT_FORM;
                setDataObj(KEYS.CURR_Q,v);
            }

            this.props.viewController.changeView(
                <Questionnaire
                    viewController={this.props.viewController}
                    qList={v}/>
            );
        })
    }

    
    render() {
        return (
            <View style={{flex:3}}>
                <SimplePanel>
                    <Button title="Start Questionnaire"
                        onPress={() => this.startQuestionnaire()}/>
                </SimplePanel>
            </View>
        );
    }
}


export {HomeView};
