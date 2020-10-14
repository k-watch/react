import { createAction } from "redux-actions"

const INITIALIZE = 'write/INITIALIZE'
const CHANGE_FIELD = 'write/CHANGE_FIELD'

export const initialize = createAction(INITIALIZE)
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
    key,
    value,
}))