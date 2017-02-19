import {
    ADD_COMMENT
} from '../constants'
import {normalizedComments as defaultComments} from '../fixtures'
import {arrayToMap} from '../utils'

const defaultState = arrayToMap(defaultComments)

export default (state = defaultState, action) => {
    const {type, payload} = action

    switch (type) {
        case ADD_COMMENT:
            return {
                ...state,
                //вот этот спрэд лишний
                ...{
                    [payload.id]: {
                        ...payload.comment,
                        id: payload.id
                    }
                }
            }
    }

    return state
}
