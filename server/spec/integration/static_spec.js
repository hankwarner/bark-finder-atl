const request = require('request');
const base = 'http://localhost:8080/#';

describe('routes : static', () => {
    describe('GET /', () => {
        it("should return status code 200", () => {
            request.get(base, (err, res, body) => {
                expect(res.statusCode).toBe(200);
            })
        })
    })

    describe('GET /parks', () => {
        it("should return status code 200", () => {
            request.get(`${base}/parks`, (err, res, body) => {
                expect(res.statusCode).toBe(200);
            })
        })
    })

    describe('GET /restaurants', () => {
        it("should return status code 200", () => {
            request.get(`${base}/restaurants`, (err, res, body) => {
                expect(res.statusCode).toBe(200);
            })
        })
    })

    describe('GET /events', () => {
        it("should return status code 200", () => {
            request.get(`${base}/events`, (err, res, body) => {
                expect(res.statusCode).toBe(200);
            })
        })
    })
})