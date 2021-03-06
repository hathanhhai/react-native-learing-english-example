import React, { Component } from 'react'
import { View,TextInput,TouchableOpacity,StyleSheet,Text } from 'react-native';
import {connect} from 'react-redux';
class Form  extends Component {
    constructor(props){
        super(props);
        this.state = {
            en:'',
            vn:''
        }
        this.onAdd = this.onAdd.bind(this);
    }
    onAdd(){
            const {en,vn} =this.state;
            this.props.dispatch({
                type:"ADD_WORD",
                en,vn
            })
            this.props.dispatch({
                type:"TOGGLE_FORM",
            })
    }
    render() {
        return (
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <TextInput  style={styles.input}
                    value={this.state.en}
                    onChangeText={e=>{
                        this.setState({en:e})
                    }}
                    placeholder="English"
                />
                <TextInput style={styles.input}
                value={this.state.vn}
                onChangeText={e=>{
                    this.setState({vn:e})
                }}
                placeholder="Vietnames"
                />
                <TouchableOpacity
                onPress={this.onAdd}
                >
                <Text>Add</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    input:{
        height:30,
        backgroundColor:'#E4F6D4',
        margin:5,
        width:300
    }
});

export default connect()(Form);