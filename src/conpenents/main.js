import React, { Component } from 'react'
import { View,Text,FlatList,TouchableOpacity,StyleSheet } from 'react-native';
import {connect} from 'react-redux';
import Word from './word';
import Filter from './filter'
import Header from './header';
import Form from './form';
 class Main  extends Component {
    _keyExtractor = (item, index) => String(item.id);
    getWordList(){
        const {myFilter,myWords} = this.props;
        switch(myFilter){
            case 'MEMORIZED':
              return myWords.filter(e=>e.memorized)  
            case 'NEED_PRATICE':
              return myWords.filter(e=>!e.memorized)    
            default:
            return myWords;
        }
    }
    render() {
        return (
            <View style={{backgroundColor:"yellow",flex:1,alignSelf:'stretch'}}>
                <Header/>
                {this.props.isAdding ? <Form /> : null}
               
                <FlatList
                    data={this.getWordList()}
                    extraData={this.state}
                    renderItem={({item})=> <Word myWord={item}  />}
                    keyExtractor={this._keyExtractor}
                 />
                <Filter/>
            </View>
        );
    }
}


const mapStateToProps = (state, ownProps) => {
    return {
        myFilter:state.filterStatus,
        myWords:state.arrWords,
        isAdding:state.isAdding
    }
}

export default connect(mapStateToProps)(Main)