import {Action } from './actions';

export interface TokenState {
    tokens: string,
    id: string
    foto: string
}

const initialState = {
    tokens: '',
    id: '',
    foto: ''
}

export const tokenReducer = (state: TokenState = initialState, action: Action) =>{
    switch (action.type){
        case "ADD_TOKEN": {
            return {tokens: action.payload, id: state.id, foto: state.foto}
        }            
        case "ADD_ID": {
            return {id: action.payload, tokens: state.tokens, foto: state.foto}
        }
        case "ADD_FOTO": {
            return {foto: action.payload, tokens: state.tokens, id: state.id}
        }

        
        default: return state
    }
}