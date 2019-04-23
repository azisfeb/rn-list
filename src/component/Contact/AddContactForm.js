import React from 'react';
import { TextInput, View, Button, StyleSheet } from 'react-native';
import { Constants } from "expo";
import PropTypes from "prop-types";

export default class AddContactForm extends React.Component{
    static propTypes = {
        AddContact: PropTypes.func,
    }
    
    state = {
        name: '',
        phone: '', 
    }

    _onChangeName = (name) => {
        this.setState({ name })
    }

    _onChangePhone = (phone) => {
        this.setState({ phone })
    }

    render(){
        return(
            <View style={{ paddingTop: Constants.statusBarHeight }}>
                <TextInput 
                    onChangeText={this._onChangeName} 
                    style={styles.input} 
                    value={this.state.name}/>
                <TextInput 
                    onChangeText={this._onChangePhone} 
                    style={styles.input}
                    value={this.state.phone}
                    keyboardType='numeric' />                
                <Button 
                    title="Add Contact"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    input: {
        margin: 5,
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
    }
})