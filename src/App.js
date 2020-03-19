import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import {ToolBar} from './components/toolbar';
import {HomeView} from './views/home';
import {AnalyticsView} from './views/analytics';
import {PersonalView} from './views/personal';
import {ResourcesView} from './views/resources';
// Load Josefin Sans typeface

export default function App() {
  return <MainPanel/>
}

class MainPanel extends Component {

    constructor(props) {
        super(props);

        this.updateHeader = this.updateHeader.bind(this);
        this.toggleToolbar = this.toggleToolbar.bind(this);
        this.changeBodyView = this.changeBodyView.bind(this);
        this.goToHome = this.goToHome.bind(this);
        this.goToAnalytics = this.goToAnalytics.bind(this);
        this.goToPersonal = this.goToPersonal.bind(this);
        this.goToResources = this.goToResources.bind(this);

        this.viewController = {
            updateHeader: this.updateHeader,
            toggleToolbar: this.toggleToolbar,
            changeView: this.changeBodyView,
            goToHome: this.goToHome,
            goToAnalytics: this.goToAnalytics,
            goToPersonal: this.goToPersonal,
            goToResources: this.goToResources,
        }

        this.state = {
            titleMsg: 'Welcome to KnowU',
        
            toolbarState: true,
            bodyView: (<HomeView viewController={this.viewController}/>),
        };
    }

    updateHeader(headerStr) {
        this.setState(state => ({titleMsg: headerStr}));
    }

    toggleToolbar(toolbarNewState) {
        this.setState(state => ({toolbarState: toolbarNewState}));
    }

    changeBodyView(newView) {
        this.setState(state => ({bodyView: newView}));
    }

    goToHome() {
        this.changeBodyView(<HomeView viewController={this.viewController}/>);
    }
    
    goToAnalytics() {
        this.changeBodyView(<AnalyticsView viewController={this.viewController}/>);
    }
    
    goToPersonal() {
        this.changeBodyView(<PersonalView viewController={this.viewController}/>);
    }
    
    goToResources() {
        this.changeBodyView(<ResourcesView viewController={this.viewController}/>);
    }

    
    render() {
        return (
          <View style={styles.backgroundStyle}>
                <ImageBackground 
                    source={backgroundImage}
                    style={styles.backgroundStyle}>
                    <View style={styles.headerStyle}>
                        
                        <Image
                            style={{width: 80, height: 80}}
                            source = {logo}
                            
                        />
                        <Text>{this.state.titleMsg}</Text>
                    </View>
                    <View style={styles.bodyStyle}>
                    {this.state.bodyView}
                    </View>
                    <View style={styles.toolbarStyle}>
                    {this.state.toolbarState &&
                        <ToolBar viewController={this.viewController}/>
                    }
                    </View>
                </ImageBackground>
          </View>
        );
    }
}

const backgroundImage = require('./assets/background.jpg');
const logo = require('./assets/icon.png');

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
   Text: {
         fontFamily: 'AvenirNextCondensed-DemiBold'
   },
    headerStyle: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        paddingBottom: 20,
        fontFamily: 'AvenirNextCondensed-DemiBold'
    },
    bodyStyle: {
        fontFamily: 'AvenirNextCondensed-DemiBold',
        flex: 7,
    },
    toolbarStyle: {
        flex: 1,
    }
});
