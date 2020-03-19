import React, { Component } from "react";
import { View, StyleSheet, Button, Picker } from "react-native";
import { SimplePanel } from '../components/panel';
import { setDataObj, getDataObj } from '../save_new';
import { KEYS } from '../analytics/questionnaire_constants'
import regression from 'regression';
import { Svg, G, Line, Rect, Text} from 'react-native-svg'


class AnalyticsView extends Component {
    constructor(props) {
        super(props);
        this.props.viewController.updateHeader("knowUR trends");

        this.data = [];
        this.questions = [];
        this.numQ = null;
        this.numSub = null;

        this.state = {
            xMax: 100,
            yMax: 100,
            lineY1Offset: 0,
            lineY2Offset: 0,
            keyUpdate: 0,
        }

        getDataObj(KEYS.Q_COUNT, (n) => {
            if (n < 2) return;

            this.numSub = n;
            console.log("Loading " + n + " entries...")

            getDataObj(KEYS.CURR_Q, (q) => {
                this.numQ = q.length;

                for(var i=0; i < this.numQ; i++) {
                    this.data.push(Array(this.numSub).fill(null));
                    this.questions.push(q[i].titleStr);
                }
                this.loadNextQ(0);
            }, 0);
        })
    }

    loadNextQ(subID) {
        if (subID != this.numSub) {
            let k = KEYS.Q_SUB_KEY_PREFIX + subID;
            getDataObj(k, (v) => {
                if (v == null) return;

                for(var i=0; i < this.numQ; i++) {
                    this.data[i][subID] = v[i];
                }
                this.loadNextQ(subID+1)
            })
        } else {
            this.loadComplete();
        }
    }

    loadComplete() {
        console.log("Finished loading the following entries: ");
        for(var i=0; i<this.numQ; i++) {
            console.log(' -- "'+this.questions[i]+'"');
        }

        let func = this.performLinearRegression(3,0);


        let y1Offset = func(0)[1];
        let y2Offset = func(100)[1];
        
        if (y1Offset < 0) y1Offset=0;
        if (y1Offset > 100) y1Offset=100;
        if (y2Offset < 0) y2Offset=0;
        if (y2Offset > 100) y2Offset=100;

        
        this.setState(state => ({lineY1Offset: y1Offset}));
        this.setState(state => ({lineY2Offset: y2Offset}));
        this.setState(state => ({keyUpdate: this.state.keyUpdate+1}));
    }

    boolToReal(id) {
        let x = [];
        for (var i=0; i<this.numSub; i++) {
            x.push(this.data[id][i] ? 1 : 0);
        }
        return x;
    }

    performLinearRegression(id1, id2) {
        let xyData = [];
        for (var i=0; i<this.numSub; i++) {
            xyData.push([this.data[id1][i], this.data[id2][i]])
        }
        
        return regression.linear(xyData).predict;
    }

    render() {
        return (
            <View style={{flex:1}} key={this.state.keyUpdate}>
                <SimplePanel>
                <View style={{flex:1}}>
                    <Svg width={500} height={500} >
                        <Rect x={135} y={350} height={2} width={250} fill="rgb(0,0,0)"/>
                        <Rect x={135} y={350} height={-250} width={2} fill="rgb(0,0,0)"/>

                        <Text
                            x={250} y={50} fontSize={28} fill="rgb(0,0,0)"
                            textAnchor="middle" fontWeight="bold">Anxiety vs. Mood</Text>
                        
                        <Text
                            x={250} y={380} fontSize={24} fill="rgb(0,0,0)"
                            textAnchor="middle" fontWeight="bold">Anxiety</Text>
                        
                        <Text
                            x={125} y={225} fontSize={24} fill="rgb(0,0,0)"
                            transform="rotate(-90,125,225)"
                            textAnchor="middle" fontWeight="bold">Mood</Text>
                        
                        <Text x={130} y={350+30} fontSize={24} fill="rgb(0,0,0)"
                            textAnchor="end" fontWeight="bold">0</Text>
                        
                        <Text x={375} y={350+30} fontSize={24} fill="rgb(0,0,0)"
                            textAnchor="middle" fontWeight="bold">{this.state.xMax}</Text>

                        <Text x={130} y={120} fontSize={24} fill="rgb(0,0,0)"
                            textAnchor="end" fontWeight="bold">{this.state.yMax}</Text>
                        
                        <Line
                            x1={135} y1={350-(this.state.lineY1Offset*250/100)}
                            x2={385} y2={350-(this.state.lineY2Offset*250/100)}
                            stroke="black"
                            strokeWidth={3}
                        />
                    </Svg>
                    </View>
                </SimplePanel>
            </View>
        );
    }
}


const styles = StyleSheet.create({
})


export {AnalyticsView};
