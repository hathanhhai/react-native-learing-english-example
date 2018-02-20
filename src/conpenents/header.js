import React, { Component } from 'react'
import { View,Text,FlatList,TouchableOpacity,StyleSheet } from 'react-native';
import {connect} from 'react-redux'
class  Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                    <Text/>
                    <Text>My Word</Text>
                    <TouchableOpacity onPress={()=>{
                        this.props.dispatch({
                            type:'TOGGLE_FORM'
                        })
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

export default connect()(Header)