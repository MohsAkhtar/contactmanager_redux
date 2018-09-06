import { GET_CONTACTS } from '../actions/types';
import { DELETE_CONTACT } from '../actions/types';
import { ADD_CONTACT } from '../actions/types';
import { GET_CONTACT } from '../actions/types';
import { UPDATE_CONTACT } from '../actions/types';

const initialState = {
  contacts: [],
  contact: {}
};

// The reducers for the contacts

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case GET_CONTACT:
      return {
        ...state,
        contact: action.payload
      };
    case UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map(
          contact =>
            contact.id === action.payload.id
              ? (contact = action.payload)
              : contact
        )
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
}
