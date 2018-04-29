import React, {Component} from 'react';
import { View, Text } from "react-native";

class Index extends Component {

    static navigationOptions = ({navigation}) => {

        return {
            headerTitle: "To-Do",
            headerStyle: {
                backgroundColor: "#fff"
            },
            headerRight: (
                <Text
                    onPress = { () => {
                        navigation.navigate("ToDo");
                    }
                    }

                >
                    Add
                </Text>
            )
        }
    }

    render() {
        return(
            <Text>
                Welcome to your personal ToDo-List
            </Text>
        )
    }

}

export default Index;