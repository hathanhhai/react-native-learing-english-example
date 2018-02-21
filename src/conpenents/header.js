import React, { Component } from 'react'
import { View,Text,FlatList,TouchableOpacity,StyleSheet } from 'react-native';
import {connect} from 'react-redux'
import {isAdding} from '../actions/actions'
class  Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                    <Text/>
                    <Text>My Word</Text>
                    <TouchableOpacity onPress={()=>{
                        this.props.isAdding ()
                    }}>
                    <Text style={{fontWeight:'bold',color:'black'}}>+</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:'silver',
        padding:5,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row'
    }
});


export default connect(null,{isAdding})(Header)