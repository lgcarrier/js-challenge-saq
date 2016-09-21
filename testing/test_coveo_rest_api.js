var urlCoveo = 'https://cloudplatform.coveo.com/rest/search';
var urlCoveoToken = urlCoveo + '?access_token=6318103b-f9da-437c-854b-9e6f1f44e27b';
/**************************************************************************/

var Nightmare = require('nightmare');
var nightmare = Nightmare({show: true});

var chai = require('chai')
    ,expect = chai.expect;

var request = require("request");

function dataFound(term) {
    var serverResponse, responseBody;

    it('Expect status code 200', function (done) {
        request.get(urlCoveoToken+'&q='+term, function (error, response, body) {
            serverResponse = response.statusCode;
            responseBody = body;

            expect(serverResponse).to.equals(200);
            done();
        });
    });

    it('Expect response content to be JSON', function (done) {
        expect(responseBody).to.be.json;
        done();
    });

    it('Expect some results', function (done) {
        expect(JSON.parse(responseBody)).property('results').to.have.length.above(0);
        done();
    });
};

function noDataFound(term) {
    var serverResponse, responseBody;

    it('Expect status code 200', function (done) {
        request.get(urlCoveoToken+'&q='+term, function (error, response, body) {
            serverResponse = response.statusCode;
            responseBody = body;

            expect(serverResponse).to.equals(200);
            done();
        });
    });

    it('Expect response content to be JSON', function (done) {
        expect(responseBody).to.be.json;
        done();
    });

    it('Expect no results', function (done) {
        expect(JSON.parse(responseBody)).property('results').to.have.length(0);
        done();
    });
};

describe('Coveo REST API', function () {

    describe("Credentials", function () {
        var serverResponse, responseBody;

        describe("Valid...", function () {

            it("Expect status code 200", function (done) {
                request.get(urlCoveoToken, function (error, response, body) {
                    serverResponse = response.statusCode;
                    responseBody = body;
                    expect(response.statusCode).to.equals(200);
                    done();
                });
            });


            it('Expect response to be JSON', function (done) {
                expect(responseBody).to.be.json;
                done();
            });
        });

        describe("Invalid...", function () {
            it("Expect status code 401", function (done) {
                request.get(urlCoveo, function (error, response, body) {
                    expect(response.statusCode).to.equals(401);
                    done();
                });
            });

            it('Expect response to be JSON', function (done) {
                expect(responseBody).to.be.json;
                done();
            });
        });
    });

    describe('Queries', function () {
        describe('q=rhum', function () {
            dataFound('rhum');
        });
        describe('q=sadasdsadasdsadsa', function () {
            noDataFound('sadasdsadasdsadsa');
        });
        describe('gin', function () {
            dataFound('gin');
        });
        describe('q=absinthe', function () {
            dataFound('absinthe');
        });
    });
});