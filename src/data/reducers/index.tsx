import { combineReducers } from 'redux';
import { ADD, DELETE } from '../actions';

function gradeData(state: any = {}, action: any) {
    switch (action.type) {
        case ADD:
            return {
                data: action.data
            };
        case DELETE:
            return {};
    }

    return state
}

const grade = combineReducers({
    grade: gradeData
})

export default grade;