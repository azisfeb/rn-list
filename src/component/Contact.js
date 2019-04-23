import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity, ScrollView, Button, FlatList, SectionList } from "react-native";
import { Constants } from "expo";

import contacts, { compareNames } from '../services/contact';
import Row from "./Contact/Row";
import ContactList from './Contact/ContactList';
import AddContactForm from './Contact/AddContactForm';

class Contact extends Component{
    state = {
        showContact: false,
        showForm: false,
        contacts: contacts,
    }

    toggelContact = () => {
        this.setState(prevState => ({ showContact: !prevState.showContact }))
    }

    toggleForm = () => {
        this.setState(prevState => ({ showForm: !prevState.showForm }))
    }

    sort = () => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts].sort(compareNames)
        }))
    }

    render(){
        if(this.state.showForm) return <AddContactForm />

        return(
            <View style={styles.appContainer}>
                <View style={{alignItems: 'center', justifyContent:'space-evenly', flexDirection: 'row',}}>
                    <Button title="Toggle Contact" onPress={this.toggelContact} />
                    <Button title="Toggle Form" onPress={this.toggleForm} />
                </View>
                { this.state.showContact && (<ContactList contacts={this.state.contacts} />
                    /*<FlatList
                        renderItem={this.renderItem}
                        data={this.state.contacts}  
                        keyExtractor={(item, index) => item.key.toString()}  
                    />*/
                ) 
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: Constants.statusBarHeight,
      },
    touchable:{
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    touchableText: {
        color: 'blue',
    }
})

export default Contact;