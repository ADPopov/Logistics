'use strict';

var utils = require('../utils/writer.js');
var Requests = require('../service/RequestsService');

module.exports.requestsGET = function requestsGET (req, res, next) {
  Requests.requestsGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.requestsPOST = function requestsPOST (req, res, next) {
  var body = req.swagger.params['body'].value;
  Requests.requestsPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.requestsRequestIdDELETE = function requestsRequestIdDELETE (req, res, next) {
  var requestId = req.swagger.params['requestId'].value;
  Requests.requestsRequestIdDELETE(requestId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.requestsRequestIdGET = function requestsRequestIdGET (req, res, next) {
  var requestId = req.swagger.params['requestId'].value;
  Requests.requestsRequestIdGET(requestId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.requestsRequestIdPUT = function requestsRequestIdPUT (req, res, next) {
  var requestId = req.swagger.params['requestId'].value;
  var body = req.swagger.params['body'].value;
  Requests.requestsRequestIdPUT(requestId,body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
