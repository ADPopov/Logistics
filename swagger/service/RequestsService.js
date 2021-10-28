'use strict';


/**
 * Get all request
 *
 * returns Request
 **/
exports.requestsGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new request
 *
 * body Request Request object that needs to be added
 * no response value expected for this operation
 **/
exports.requestsPOST = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete request
 *
 * requestId Long ID of request to return
 * returns Request
 **/
exports.requestsRequestIdDELETE = function(requestId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Find request by ID
 * Returns a single request
 *
 * requestId Long ID of request to return
 * returns Request
 **/
exports.requestsRequestIdGET = function(requestId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Updates a reguest with form data
 * 
 *
 * requestId Long ID of request to return
 * body Request request
 * returns Request
 **/
exports.requestsRequestIdPUT = function(requestId,body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {"empty": false};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

