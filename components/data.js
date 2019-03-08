import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';

export default class Data extends Component {
  render() {
    return (
      <View>

          <View style={{alignItems:"center"}}>
          <View style={{alignItems:"center", width:"50%", borderBottomWidth:0.5, borderColor:'black'}}>
            <Text style={{fontSize:20,color:'black', marginTop:10,}}>Patients</Text>
          </View>
          </View>

          <View>
             <Text style={{fontSize:14,color:'black', marginTop:10, marginLeft:15}}>Name :- {this.props.name}</Text>      
             <Text style={{fontSize:14,color:'black',marginLeft:15}}>Father name :- {this.props.fname}</Text>      
             <Text style={{fontSize:14,color:'black',marginLeft:15}}>Mobile :- {this.props.mobile}</Text>      
             <Text style={{fontSize:14,color:'black',marginLeft:15}}>CNIC :- {this.props.cnic}</Text>      
             <Text style={{fontSize:14,color:'black',marginLeft:15}}>Payment method :- {this.props.payment}</Text>      
          </View>
      </View>
    );
  }
}
