import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';


import Index from "./src/components/index";


class App extends Component {

    render() {
        return (
            <View >
                <Index/>
            </View>

        );
    }
}

export default App;