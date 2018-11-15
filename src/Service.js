import { AsyncStorage } from "react-native"

import Config from './Config';

function fetchAPI(url, method = 'GET', body = null, isBlob = false) {
  let request;

  if (method === 'POST') {
    request = fetch(url, {
      method,
      body: isBlob ? body : JSON.stringify(body),
      headers: {
        Accept: 'application/json',
        'Content-Type': isBlob ? 'multipart/form-data' : 'application/json',
      },
    });
  } else {
    request = fetch(url, {
      method,
    });
  }

  return request
    .then(result => result.json())
    .then(resultJson => resultJson)
    .catch((error) => {
      console.log(error);
      return Promise.reject(`${error}`);
    });

  // return request
  //   .then(response =>
  //     response.json().then(json => ({
  //       status: response.status,
  //       statusType: response.statusType,
  //       json,
  //     })),
  //   )
  //   .then(({ status, statusType, json }) => {
  //     if (status !== 200 || !json.success) {
  //       const unknownError = json.errors
  //         ? json.errors
  //         : `Unknown Error. ${statusType}`;
  //       const errorMsg = json.message ? json.message : unknownError;
  //       return Promise.reject(errorMsg);
  //     }
  //     return json;
  //   })
  //   .catch(e => {
  //     return Promise.reject(`${e}`);
  //   });
}

function findAll(entidad) {
    const url = Config.API_URL + entidad;
    return fetchAPI(url);
}
  
function findById(entidad, id) {
    let url = Config.API_URL + "/" + entidad + "/" + id;
        return fetchAPI(url);
}
  
function update(entidad, body) {
    let url = Config.API_URL + "/" + entidad
    return fetchAPI(url, 'POST', body);
}

function create(entidad, body) {
    let url = Config.API_URL + "/" + entidad
    return fetchAPI(url, 'POST', body);
}

function deleteObject(entidad, id) {
    let url = Config.API_URL + "/" + entidad + "/" + id;
    return fetchAPI(url, 'DELETE');
}

function deactivate(entidad) {
    let url = Config.API_URL + "/" + entidad;
    return fetchAPI(url, 'POST', body);
}
  
function uploadImage(entidad, body) {
    let url = Config.API_URL + "/" + entidad;
    return fetchAPI(url, 'POST', body, true);
}

function setItem(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
}

function getItem(key) {
    return AsyncStorage.getItem(key)
        .then(req => JSON.parse(req))
        .then(json => json)
        .catch((error) => {
            console.error('AsyncStorage#getItem error deserializing JSON for key: ' + key, error.message);
            return Promise.reject(`${error}`);
        });
}
function removeItem(key) {
  return AsyncStorage.removeItem(key);
}
  
export default {
    findAll,
    findById,
    create,
    update,
    deleteObject,
    deactivate,
    uploadImage,
    setItem,
    getItem,
    removeItem
};
  