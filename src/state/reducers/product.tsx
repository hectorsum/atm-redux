//cada reducer tiene su propio state
const initialState = {
  products: [],
  error:null,
  loading:false
}

type ActionType = 
              {type: ''}

export default function(state: typeof initialState, action: ActionType){
  switch(action.type){
    default:
      return state;
  }
}