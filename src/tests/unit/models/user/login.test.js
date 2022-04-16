const { expect } = require('chai');
const sinon = require('sinon');

const { MongoClient } = require('mongodb');
const { connectionMemory } = require('../util/connectionMemory');

const userModel = require('../../../../models/user');

require('dotenv').config();

const { DB_NAME } = process.env;

describe('Testa camada de modelo para login de usuário', function () {
    const REGISTER_PAYLOAD = {
        name: 'User Test',
        email: 'test@test.com',
        password: 'test123',
    };
    const LOGIN_PAYLOAD = {
        email: 'test@test.com',
        password: 'test123',
    };
    const USER_PROPERTIES = ['id', 'name', 'email'];
    let connectionMock = null;

    before(async function () {
        connectionMock = await connectionMemory();
        sinon.stub(MongoClient, 'connect').resolves(connectionMock);
    });

    after(function () {
        connectionMock.db(DB_NAME).dropDatabase();
        sinon.restore();
    });

    describe('sucesso', function () {
        let response = null;

        before(async function () {
            await connectionMock
                .db(DB_NAME)
                .collection('users')
                .insertOne(REGISTER_PAYLOAD);

            response = await userModel.login(LOGIN_PAYLOAD);
        });

        it('retorna um objeto', async function () {
            expect(response).to.be.an('object');
        });

        it('retorna um objeto com as propriedades corretas', async function () {
            USER_PROPERTIES.forEach((property) => {
                expect(response).to.have.property(property);
            });
        });
    });
});
