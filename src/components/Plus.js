//sample plus button from react-native docs

import CallToActionBox from 'react-native-plus-button-box';
import {StyleSheet,Button,View,Text} from 'react-native';

export default class Plus extends Component {
    _handlePress() {
        console.log('variable here');
    }

    render() {
        return (
            <CallToActionBox
                actions={[
                    {
                        key: '1',
                        text: '1',
                        onPress: () => this._handlePress()
                    },
                    {
                        //continue sections for each option.
                        key: '2',
                        text: '2',
                        onPress: () => this._handlePress()
                    }
                ]}
            />
        );
    }
}

//Exponent.registerRootComponent(App)