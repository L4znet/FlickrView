const initialState = [
    {id:1, title:'Enregistrer le tutoriel', completed:true},
    {id:2, title:'Préparer le tutoriel', completed:false}
]

const ADD_TOOD_ACTION = "ADD_TODO_ACTION"

function TodoReducer(state = initialState, action){
    switch(action.type){
        case ADD_TOOD_ACTION:
            return [...state, {id: ++id, completed: false, ...action.payload}]
        default:
            return state
    }
}
