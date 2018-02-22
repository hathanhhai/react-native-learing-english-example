import React, { Component } from 'react'
import { View,StyleSheet,Text,TextInput,TouchableOpacity } from 'react-native';
import {Provider} from 'react-redux'
import getTemp from '../api/temp';
import {connect} from 'react-redux'
import {fetchError,fetchSuccess,startFechData,fetchDataThunk} from '../actions/action'
////////////////

////////////////
 class App  extends Component {
    constructor(props){
        super(props);
        this.state = {
            cityName:'',
            value:null
        }
    }
    componentWillMount(){
        this.props.startFechData();
        const {cityName,error,isLoading,temp} = this.props;
        if(isLoading) return '...Loading';
        if(error) return 'Try Again'
        if(!cityName) return "You must enter you city of you"
      //  return `${cityName} current is : ${temp} oC` 
        // this.setState({value:temp})
    }

    getWeatherMessage(){
       
    }

    getTempCityName(){
    this.props.fetchDataThunk(this.state.cityName);

    }


    render() {
        return (

            <View style={styles.container}>
                <Text style={styles.message}>
                {this.props.isLoading ? '...Loading' : null}
                {this.props.error ? 'Try again late' : null}
                {this.props.temp ? this.state.cityName+" is : "+this.props.temp : this.props.isLoading }
                </Text>
                <TextInput  style={styles.textInput} value={this.state.cityName} 
                onChangeText={e=>{
                    this.setState({cityName:e})
                }}
               
                />
                <TouchableOpacity style={styles.button}
                onPress={this.getTempCityName.bind(this)}
                
                >
                    <Text style={styles.buttonText}>Lấy Nhiệt Độ</Text>
                </TouchableOpacity>
            </View>
         
        );
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'lightblue',
        flex:1,
        alignSelf:'stretch',
        justifyContent:'center',
        alignItems:'center'
    } ,
    message:{
        color:'white',
        fontSize:15,
    },
    button:{
        backgroundColor:'gray',
        padding:10,
        margin:30,
        borderRadius:10
    },
    buttonText:{
        color:'white',
    },
    textInput:{
        margin:10,
        minWidth:200
    }
});
 function mapStateToProps(state){
     return {
         cityName:state.cityName,
         temp:state.temp,
         isLoading:state.isLoading,
         error:state.error
     }
 }

export default connect(mapStateToProps,{fetchError,fetchSuccess,startFechData,fetchDataThunk})(App);