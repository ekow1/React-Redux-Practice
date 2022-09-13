import { legacy_createStore as createStore} from "redux";
import dataReducer from './reducers'

const store = createStore(dataReducer)

export default store;