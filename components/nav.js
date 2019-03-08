import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Text, Footer,Body,Title } from 'native-base';
import Sample from './content';
import {View, StyleSheet,Alert} from 'react-native';
import { BottomNavigation} from 'react-native-paper';
import Data from './data';

export default class Nav extends Component {
  state = {
    index: 0,
    routes: [
      { key: 'fields', icon: 'add-circle-outline' },
      { key: 'data', icon: 'supervisor-account' },
    ],
    name : "",
    fname : "",
    mobile : "",
    cnic : "",
    payment : null,
    nameA : [],
    fnameA : [],
    mobileA : [],
    cnicA : [],
    paymentA : [],
  }
  FieldsTab = () => <Sample name={this.name} fname={this.fname} mobile={this.mobile} cnic={this.cnic} payment={this.payment} nameA={this.state.name} fnameA={this.state.fname} mobileA={this.state.mobile} cnicA={this.state.cnic} paymentA={this.state.payment} validate={this.validate} />;

  DataTab = () => <Data name={this.state.name} fname={this.state.fname} mobile={this.state.mobile} cnic={this.state.cnic} payment={this.state.payment} />;
  
  _handleIndexChange = index => this.setState({ index });

  _renderScene = BottomNavigation.SceneMap({
    fields: this.FieldsTab,
    data: this.DataTab,
  });


  validate = () =>{
    if (this.state.name.trim() == "" || this.state.fname.trim() == "" || this.state.mobile.trim() == "" || this.state.cnic.trim() == "" || this.state.payment == null) {
      Alert.alert("Alert","Plz enter all fields");
    }
  }

name = val => {
  this.setState({
    name:val
  })
}

fname = val => {
  this.setState({
    fname:val
  })
}

mobile = val => {
  this.setState({
    mobile:val
  })
}

cnic = val => {
  this.setState({
    cnic:val
  })
}

payment = val => {
  this.setState({
    payment:val
  })
}

  render() {
    return (
      <Container>
         <Header style={style.header} hasTabs>
          <Body style={{alignItems:'center'}}>
            <Title style={{color:'black'}}><Icon type="FontAwesome" name="plus" style={{color:'red', fontSize:20,}}/> Holy hospital</Title>
          </Body>
        </Header>

      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
        shifting={true}
      />
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
}
)