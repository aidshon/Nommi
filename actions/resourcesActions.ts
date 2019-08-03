import axios from 'axios';
import { FETCH_RESOURCES_LIST, FETCH_SINGLE_RESOURCE } from './types';
import { SERVER } from '../constants';

const { BASE_URL } = SERVER;

export const fetchResources = () => dispatch => {
  axios.get(`${BASE_URL}unknown`).then(response => {
    dispatch({
      type: FETCH_RESOURCES_LIST,
      payload: response.data.data
    })
  });
}

export const fetchSingleResource = (id: number) => dispatch => {
  axios.get(`${BASE_URL}unknown/${id}`).then(response => {
    dispatch({
      type: FETCH_SINGLE_RESOURCE,
      payload: response.data.data,
    });
  });
};