import React, {Component} from 'react';
import { View, Text, Button, TextInput } from "react-native";

class ToDo extends Component {

    constructor(props){

        super(props);
        this.state = {Task: ''};
    }

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

                    <TextInput
                        style = {styles.inputStyle}
                        placeholder = "Enter Your Task"
                    />

            </View>
        )
    }

}


const styles = {
    inputStyle:{
        height: 50
    }
}
export default ToDo;