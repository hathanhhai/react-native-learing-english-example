import React, { Component } from 'react'
import { View,Text,FlatList,StyleSheet,TouchableOpacity } from 'react-native';
import {connect} from 'react-redux';
import {showAll,showMemorized,showReview} from '../actions/actions'
class Filter extends Component {
    
    getTextStyle(stateName){
        const {myFilterStatus} = this.props;
        if(stateName === myFilterStatus){
            return {
                color:'yellow',fontWeight:'bold'
            }
        }
        return styles.buttonText;
    }
    onShowAll(){
        this.props.showAll();
    }

    onMemorized(){
        this.props.showMemorized();
    }

    onReview(){
        this.props.showReview();
    }

   
    render() {
        return (
            <View style={styles.container}>
            <TouchableOpacity
            onPress={this.onShowAll.bind(this)}
            >
                <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL</Text>
            </TouchableOpacity>
            <TouchableOpacity
          onPress={this.onMemorized.bind(this)}
            >
                <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZED</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={this.onReview.bind(this)}
            >
                <Text style={this.getTextStyle('NEED_PRATICE')}>REVIEW</Text>
            </TouchableOpacity>
            </View> 
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#583c3c',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        padding:10
    
    },
    buttonText:{
        color:'white'
    }
});

 const mapStateToProps = (state, ownProps) => {
    return {
        myFilterStatus:state.filterStatus
    }
}

export default connect(mapStateToProps,{showMemorized,showAll,showReview})(Filter);