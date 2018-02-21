import React from 'react'
import { View,Text,FlatList,StyleSheet,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {toggleShow,toggleMemorized} from '../actions/actions'
class Word  extends React.Component {
    memoziedWord(){
        this.props.toggleMemorized(this.props.myWord.id);
    }
    showWord(){
        this.props.toggleShow(this.props.myWord.id);
    }
 
    render() {
        const {en,vn,memorized,isShow} = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const memorizedButtonText = memorized ? 'Forget' :'Menoeized'
        const showButtonText = isShow ? 'Hidden' : 'Show'
        const showText = !isShow ? '-----' : vn
        return (
            <View style={styles.container}>
                     <Text style={{textDecorationLine}}>{en}</Text>
                    <Text>{showText}</Text>
                <View style={styles.controller}>
                    <TouchableOpacity style={styles.button}
                    onPress={this.memoziedWord.bind(this)}
                    >
                    <Text >{memorizedButtonText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}
                    onPress={this.showWord.bind(this)}
                    >
                    <Text>{showButtonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#D2DEF6',
        padding:10,
        margin:10
    },
    controller:{
        flex: 1, 
        flexDirection: 'row',
        justifyContent:'space-around'
    },
    button:{
        padding:10,
        backgroundColor:'silver',
        margin:10
    }
});

export default connect(null,{toggleMemorized,toggleShow})(Word)