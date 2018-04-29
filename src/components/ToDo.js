import React, {Component} from 'react';
import { View, Text, Button, TextInput } from "react-native";
import {connect} from "react-redux";
import {addTask} from "../actions";

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
        console.log(this.props);
        return(
            <View>

                    <TextInput
                        style = {styles.inputStyle}
                        placeholder = "Enter Your Task"
                        value={this.state.Task}
                        onChangeText={text => {
                            this.setState({Task: text})
                        }}
                    />

                    <Button
                        title="+"
                        onPress = {() => {
                            this.props.addTask(this.state.Task);
                            this.props.navigation.goBack();
                        }}
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

export default connect(null, {addTask})(ToDo);