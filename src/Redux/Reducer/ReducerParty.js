import { LIST_PARTY } from "../../Action/ActionParty";

const initialState = {
    listParty: [],
    listPartyError: false,
}

function party(state = initialState, action) {
    switch (action.type) {
        case LIST_PARTY:
            return {
                listParty: action.payload.data
            }
        default:
            return state
    }
}

export default party