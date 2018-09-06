import { GET_CONTACTS } from './types';
import { GET_CONTACT } from './types';
import { UPDATE_CONTACT } from './types';
import { DELETE_CONTACT } from '../actions/types';
import { ADD_CONTACT } from '../actions/types';
import axios from 'axios';

// actions file for contacts

export const getContacts = () => async dispatch => {
  const res = await axios.get('http://jsonplaceholder.typicode.com/users');
  dispatch({
    type: GET_CONTACTS,
    payload: res.data
  });
};

// get single contact for editting page
export const getContact = id => async dispatch => {
  const res = await axios.get(
    `http://jsonplaceholder.typicode.com/users/${id}`
  );
  dispatch({
    type: GET_CONTACT,
    payload: res.data
  });
};

export const deleteContact = id => async dispatch => {
  // added try catch as we are not really working with proper backend here
  // so it would try to delete something that does not exist on the website
  try {
    await axios.delete(`http://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  } catch (e) {
    dispatch({
      type: DELETE_CONTACT,
      payload: id
    });
  }
};

export const addContact = contact => async dispatch => {
  const res = await axios.post(
    'http://jsonplaceholder.typicode.com/users',
    contact
  );
  dispatch({
    type: ADD_CONTACT,
    payload: res.data
  });
};

export const updateContact = contact => async dispatch => {
  const res = await axios.put(
    `http://jsonplaceholder.typicode.com/users/${contact.id}`,
    contact
  );
  dispatch({
    type: UPDATE_CONTACT,
    payload: res.data
  });
};
