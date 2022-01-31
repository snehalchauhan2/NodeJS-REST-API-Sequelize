const request = require('supertest')
const app = require('./../server')
const {exec} = require('child_process');

describe('User Endpoints', () => {
    let userid = 123, phoneNumber = 1234567890;

    //exec('yarn migrate:undo:all')
    exec('yarn migrate')

    it('create a new user', async () => {
        const createdUser = await request(app)
            .post('/api_v1/users')
            .send({
                userid: userid,
                phoneNumber: phoneNumber,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        expect(createdUser.statusCode).toEqual(200);
    });

    it('create a new user with string phone', async () => {
        phoneNumber="121-222-333"
        const createdUser = await request(app)
            .post('/api_v1/users')
            .send({
                userid: userid,
                phoneNumber: phoneNumber,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        expect(createdUser.statusCode).toEqual(200);
    });

    it('create a new user with string user id , should fail', async () => {
        userid="snehal"
        const createdUser = await request(app)
            .post('/api_v1/users')
            .send({
                userid: userid,
                phoneNumber: phoneNumber,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        expect(createdUser.statusCode).toEqual(500);
    });


    it('update a user', async () => {
        const updatedUser = await request(app)
            .patch(`/api_v1/users/${userid}/${phoneNumber}`)
            .send({
                userid: 321,
                phoneNumber: 9876543210,
                createdAt: new Date(),
                updatedAt: new Date()
            });
        userid = 321
        phoneNumber = 9876543210
        expect(updatedUser.statusCode).toEqual(200);
    });

    it('get a user', async () => {
        const getUser = await request(app)
            .get(`/api_v1/users/${userid}/${phoneNumber}`)
            .send()
        expect(getUser.statusCode).toEqual(200)
    })

    it('delete a user', async () => {
        const deletedUser = await request(app)
            .delete(`/api_v1/users/${userid}/${phoneNumber}`)
            .send()
        expect(deletedUser.statusCode).toEqual(200)
    })
})
