const defalutState = {
    cityName:null,
    temp:null,
    isLoading:false,
    error:false,

};

const  reducer = (state=defalutState,action)=>{
    switch(action.type){
        case 'START_FETCH':
            return {
                isLoading:true,
                cityName:null,
                error:false,
                temp:null,    
            }
        
        case 'FETCH_SUCCESS':
        return {
            cityname:action.cityName,temp:action.temp,
            error:false,isLoading:false
        }
        
        case 'FETCH_ERROR':
        return {
             cityName: null, error: true, isLoading: false, temp: null 
            };
        
        default:
        return state;
    }
}
export default reducer;