import getTemp from '../api/temp';

export function startFechData(){
    return {
        type:'START_FETCH'
    }
}


export function fetchSuccess(cityName,temp){
    return {
        type:'FETCH_SUCCESS',
        cityName,
        temp
    }
}

export function fetchError(){
    return {
        type:'FETCH_ERROR'
    }
}
export function fetchDataThunk(cityName){
    return dispatch=>{
            dispatch({type:'START_FETCH'});

            getTemp(cityName).then(temp=>{
                dispatch(fetchSuccess(cityName,temp))  
            })
            
            .catch(()=>dispatch(fetchError()));
    }
}