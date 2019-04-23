import React, { Component } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

import { Constants } from "expo";

class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count: 0
        }
    }

    inc = () => {
        console.log('increment!')
        this.setState(prevState => ({
            count: prevState.count + 1,
        }))
    }

    componentDidMount(){
        this.interval = setInterval(this.inc, 1000)
    }

    componentWillUnmount(){
        clearInterval(this.interval)
    }

    render(){
        return(
            <View>
                <Text style={styles.count}>{this.state.count} </Text>
            </View>
        )
    }
}

class Pomodoro extends Component{
    constructor(props){
        super(props)
        this.state = {
            showCounter: true
        }
    }

    toggleCounter = () => this.setState(preveState => ({
        showCounter: !preveState.showCounter
    }))

    render(){ 
        if(this.state.showCounter){
            return(
                <View>
                    <Button title="toggle" onPress={this.toggleCounter}/>
                    <Counter />
                </View>
            )
        } else {
            return <Button title="toggle" onPress={this.toggleCounter}/>
        }
    }
}


const styles = StyleSheet.create({
    count: {
        fontSize: 48,
    }
})

export default Pomodoro;