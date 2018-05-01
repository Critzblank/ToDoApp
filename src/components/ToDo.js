import React, {Component} from 'react';
import { View, Text, Button, TextInput } from "react-native";
import {connect} from "react-redux";
import {addTask, editTask} from "../actions";

class ToDo extends Component {

    constructor(props){

        super(props);
        this.state = {
            Task: this.props.navigation.state.params.text,
            edit: this.props.navigation.state.params.edit,
            id: this.props.navigation.state.params.id}
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

    EditCheck(edit, text, id){

        console.log("EDITCHECK", edit, text, id)
        if(edit){
            console.log("This is edit")
            this.props.editTask(text, id);
        }

        else{
            console.log("This is add")
            this.props.addTask(this.state.Task)
        }
    }

    render() {
        console.log("PROPS", this.props);

        const {params} = this.props.navigation.state;
        const edit = params ? params.edit : null;
        const text = params ? params.text : null;
        const id = params ? params.id: null;

        console.log("PROPERTIES", edit, text, id);
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
                        title="Done"
                        onPress = {() => {
                            console.log("ONPRESS", this.state.edit, this.state.text, this.state.id)
                            this.EditCheck(this.state.edit, this.state.Task, this.state.id);
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

export default connect(null, {addTask, editTask})(ToDo);