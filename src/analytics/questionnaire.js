import React, { Component } from "react";
import { Dimensions, View, Text, StyleSheet, Button} from "react-native";
import { SimplePanel } from '../components/panel';
import { CircleSlider } from '../components/CircleSlider';
import { SwitchComponent } from '../components/Switch';
import { Q_TYPES, KEYS } from '../analytics/questionnaire_constants';
import { getDataObj, setDataObj } from "../save_new";


const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const SLIDER_FACTOR = 3.59
const CIRCLE_SLIDER_DIAL_R = 0.1*SCREEN_HEIGHT;
const CIRCLE_SLIDER_BUTTON_R = 0.02*SCREEN_HEIGHT;
const CIRCLE_SLIDER_STROKE = 6.5;
const CIRCLE_SLIDER_FONT_SIZE = 32;


class Questionnaire extends Component {

    constructor(props) {
        super(props);

        if (!props.qList) {
            throw new Error("qList was not set!");
        }

        this.qAnswers = (props.qAnswers == null)
            ? Array(this.props.qList.length).fill(null)
            : props.qAnswers;

        this.state = {
            value: null
        }

        // Get data for the current question
        let currentQ = this.props.qList[this.props.qID];
        this.titleStr = currentQ.titleStr;

        // Choose a different component depending on our qType
        // Add more qType components here
        switch (currentQ.qType) {
            case Q_TYPES.CIRCLE_SLIDER:
                this.qComponent = this.createCircleSlider();
                break;
            case Q_TYPES.SWITCH:
                this.qComponent = this.createToggle();
                break;
            default:
                console.log("ERROR, invalid qType");
                console.log(currentQ.qType);
        }

        this.prevButton = <Button title="Prev" onPress={() => this.goToQ(props.qID-1)}/>
        this.qButton = props.qList.length != (props.qID+1)
            ? <Button title="Next" onPress={() => this.goToQ(props.qID+1)}/>
            : <Button title="Complete" onPress={() => this.complete()}/>
    }

    createCircleSlider() {
        let defaultVal = (this.qAnswers[this.props.qID] == null)
            ? 1 : this.qAnswers[this.props.qID]*SLIDER_FACTOR;
        let circleCb = (v) => this.onValueChange(Math.round(v/SLIDER_FACTOR));

        return <CircleSlider
            onValueChange={circleCb}
            value={defaultVal}
            dialRadius={CIRCLE_SLIDER_DIAL_R}
            btnRadius={CIRCLE_SLIDER_BUTTON_R}
            strokeWidth={CIRCLE_SLIDER_STROKE}
            textSize={CIRCLE_SLIDER_FONT_SIZE}
            meterStrokeWidth={0}
            textColor='white'
            fillColor='rgba(0, 124, 161, 0.15)'
            meterColor='rgba(255, 255, 255, 1.0)'
            strokeColor='#5A6978'
        />
    }

    createToggle() {
        return <SwitchComponent
            value={this.qAnswers[this.props.qID]}
            onValueChange={(v) => this.onValueChange(v)}
        />
    }

    onValueChange(val) {
        this.qAnswers[this.props.qID] = val;
        return val;
    }

    complete() {
        this.props.viewController.goToHome();
        this.props.viewController.toggleToolbar(true);

        getDataObj(KEYS.Q_COUNT, (q_result_id) => {
            let q_key = KEYS.Q_SUB_KEY_PREFIX+q_result_id;
            console.log('Saving results with key: ' + q_key);
            setDataObj(KEYS.Q_COUNT, q_result_id+1);
            setDataObj(q_key, this.qAnswers);
        }, 0)
    }

    goToQ(toID) {
        this.props.viewController.changeView(
            <Questionnaire 
                viewController={this.props.viewController}
                qList={this.props.qList}
                qAnswers={this.qAnswers}
                qID={toID}
                key={toID}
        />);
    }

    render() {
        return (
            <View style={{flex:1}}>
                <SimplePanel>
                    <View style={styles.title}>
                        <Text style={styles.textStyle}>
                            {this.titleStr}
                        </Text>
                        <View style={styles.hrule}/>
                    </View>
                    <View style={styles.qBody}>
                        {this.qComponent}
                    </View>
                    <View style={styles.qButton}>
                        {this.props.qID != 0 && this.prevButton}
                    </View>
                    <View style={styles.qButton}>
                        {this.qButton}
                    </View>
                </SimplePanel>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        flex: 1.5,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    textStyle: {
        fontSize: 0.035*SCREEN_HEIGHT,
        color: 'white',
    },
    hrule: {
        marginTop: 2,
        width: '80%',
        height: 2,
        backgroundColor: 'white',
        alignItems: 'center',
    },
    qBody: {
        flex: 6.5,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    qButton: {
        flex: 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
})

Questionnaire.defaultProps = {
    viewController: null,
    qList: null,
    qAnswers: null,
    qID: 0,
    key: 0,
}

export {Questionnaire};
