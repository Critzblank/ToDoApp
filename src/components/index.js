import React, {Component} from 'react';
import { View, Text } from "react-native";
import {connect} from "react-redux";

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


    taskList(){
       return this.props.taskList.map(task => {
            return (

                <Text>
                    {task.taskText}
                </Text>

            )
        })

    }

    render() {

        console.log(this.props)
        return(
            <View>
                {this.taskList()}
            </View>

        )
    }

}

function mapStateToProps(state){

    return {
        taskList: state.tasks
    }

}

export default connect(mapStateToProps)(Index);