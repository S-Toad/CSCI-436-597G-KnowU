



import React, { Component } from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

class SimplePanel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            childComponents: []
        }


        if (props.children != undefined) {
            if (Array.isArray(props.children)) {
                props.children.forEach(
                    child => this.addChild(child, 1));
            } else {
                this.addChild(props.children, 1);
            }
        }
    }

    addChild(child, flexVal) {
        this.state.childComponents.push(child);
    }

    
    render() {
        return (
            <View style={styles.parentContainer}>
                <View style={styles.topPadding}/>
                <View style={styles.panel}>
                    {this.state.childComponents.map((r) => r)}
                </View>
                <View style={styles.bottomPadding}/>
            </View>
        );
    }
}

//                        <View style={styles.content}/>
//<Text>Test</Text>

const styles = StyleSheet.create({
    topPadding: {
        flex: 1,
    },
    bottomPadding: {
        flex: 2,
    },
    panel: {
        backgroundColor: 'rgba(190, 205, 225, 0.80)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
        height: '100%',
        borderRadius: 10,
        flex: 10,
    },
    parentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column',
    },
    content: {
        opacity: 1.0
    }
});

export {SimplePanel};
