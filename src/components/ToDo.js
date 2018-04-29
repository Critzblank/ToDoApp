import React, {Component} from 'react';
import { View, Text, Button } from "react-native";

class ToDo extends Component {

    static navigationOptions = () => {
        return {
            headerTitle: "New Task",
            headerRight: (
                <Text>
                    Done
                </Text>
            )
        }
    }

    render() {
        return(
            <View>
                <Text>

                </Text>

                <Text>

                </Text>

            </View>
        )
    }

}

export default ToDo;