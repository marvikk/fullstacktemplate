import {combineReducers} from 'redux';
import ListItems from './reducer_list';
import ActiveBook from './reducer_active_book';

const RootReducer = combineReducers({
    list: ListItems,
    activeBook: ActiveBook
});

export default RootReducer