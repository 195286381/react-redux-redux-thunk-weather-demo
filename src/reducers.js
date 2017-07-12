import { reducer as weather, view } from './weather/'

import { combineReducers } from 'redux'


const reducers = combineReducers({
  weather
})

export default reducers