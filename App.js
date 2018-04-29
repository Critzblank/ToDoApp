import {Provider} from 'react-redux';
import React, { Component } from 'react';
import {StackNavigator} from "react-navigation";
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';

import {store} from './store';
import Index from "./src/components/index";
import ToDo from "./src/components/index";


class App extends Component {

    render() {

        const MainNavigator = StackNavigator({
            Index: {screen: Index},
            ToDo: {screen: ToDo}
        });

        return (
            <Provider store={store}>
                <View style={styles.container}>

                    <MainNavigator style={{ width: Dimensions.get('window').width }}/>

                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});

export default App;