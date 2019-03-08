import React, { Component } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Item, Input,Label,Form, Picker  } from 'native-base';
import {View, StyleSheet,ScrollView} from 'react-native';
import {TextInput} from 'react-native-paper';

const payment = [
  {
      label: 'Cash',
      value: 'cash',
  },
  {
      label: 'Paypal',
      value: 'Paypal',
  },
  {
      label: 'Bank',
      value: 'bank',
  },
];

export default class Sample extends Component {
  
  render() {
    
    return (

      <Container>
        <Content padder>
      
        <TextInput
        label='Name'
        value={this.props.nameA}
        onChangeText={this.props.name}
        mode="outlined"
        style={{height:55}}
      />

<TextInput
        label="Father's Name"
        value={this.props.fnameA}
        onChangeText={this.props.fname}
        mode="outlined"
        style={{height:55}}
      />

<TextInput
        label='Mobile'
        value={this.props.mobileA}
        onChangeText={this.props.mobile}
        mode="outlined"
        style={{height:55}}
      />

<TextInput
        label='CNIC'
        value={this.props.cnicA}
        onChangeText={this.props.cnic}
        mode="outlined"
        style={{height:55}}
      />

              <RNPickerSelect
              placeholder={{label:"Select payment method", value: null,
              color: '#9EA0A4',}}
              style={pickerSelectStyles}
              items={payment}
              onValueChange={this.props.payment}
              value={this.props.paymentA}
              />

            <Button block success style={{marginTop:15,}} onPress={this.props.validate}>
                <Icon name="checkmark" />
                <Text>Submit</Text>
            </Button>
      
        
        </Content>
      </Container>

    );

  }

}

const style = StyleSheet.create({
header:{
    backgroundColor: 'white',
    borderBottomWidth:0.3,
    borderBottomColor:'grey'
},
txtInput:{
    borderColor:'red',
    borderBottomWidth:0.5,
    marginTop:10
}
}
)

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputAndroid: {
      fontSize: 16,
      marginTop:10,
      borderColor: 'red',
      borderRadius: 8,
      color: 'black', // to ensure the text is never behind the icon
  },
});