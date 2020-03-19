import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image} from "react-native";
import {HomeView} from '../views/home';
import {PersonalView} from '../views/personal';
import {ResourcesView} from '../views/resources';
import {AnalyticsView} from '../views/analytics';

class ToolBar extends Component {

    constructor(props) {
        super(props);

        this.onHomeClick = this.onHomeClick.bind(this);
        this.onAnalyticsClick = this.onAnalyticsClick.bind(this);
        this.onResourcesClick = this.onResourcesClick.bind(this);
        this.onPersonalClick = this.onPersonalClick.bind(this);
    }

    onHomeClick() {
        this.props.viewController.changeView(
            <HomeView viewController={this.props.viewController}/>);
    }

    onAnalyticsClick() {
        this.props.viewController.changeView(
            <AnalyticsView viewController={this.props.viewController}/>);
    }

    onResourcesClick() {
        this.props.viewController.changeView(
            <ResourcesView viewController={this.props.viewController}/>);
    }

    onPersonalClick() {
        this.props.viewController.changeView(
            <PersonalView viewController={this.props.viewController}/>);
    }

                                             
    render() {
        return (
            <View style={styles.toolbarBackground}>
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={() => this.onHomeClick()}>
                            <Image
                             style={{width: 50, height: 50}}
                             source={require('../assets/home.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={() => this.onAnalyticsClick()}>
                            <Image
                             style={{width: 60, height: 60}}
                             source={require('../assets/analytics.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={() => this.onResourcesClick()}>
                            <Image
                             style={{width: 60, height: 60}}
                             source={require('../assets/resources.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.iconContainer}>
                    <View style={styles.icon}>
                        <TouchableOpacity onPress={() => this.onPersonalClick()}>
                            <Image
                             style={{width: 60, height: 60}}
                             source={require('../assets/personal.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    toolbarBackground: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#000',
    },
    iconContainer: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        backgroundColor: '#000',
        width: '80%',
        height: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
    }
});



export {ToolBar};
