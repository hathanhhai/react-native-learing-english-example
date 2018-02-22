
export function isAdding(){
    return {
        type:'TOGGLE_FORM'
    }
}

export function addWord(en,vn){
    return {
        type:"ADD_WORD",
        en,vn
    };
}


export function toggleMemorized(id){
    return {
        type:'TOGGLE_MEMORIZED',id
    }
}

export function toggleShow(id){
    return {
        type:'TOGGLE_SHOW',
        id
    }
}

//fillter


export function showAll(){
    return {
        type:'FILTER_SHOW_ALL'
    }
}

export function showMemorized(){
    return {
        type:'FILTER_MEMORIZED'
    }
}

export function showReview(){
    return {
        type:'FILTER_NEED_PRATICE'
    }
}