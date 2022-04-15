const { expect } = require('chai');
const sinon = require('sinon');

const userController = require('../../../../controllers/user');
const userService = require('../../../../services/user');

describe('Testa camada de controle para login do usuário', function () {
    const req = {};
    const res = {};

    describe('sucesso', function () {
        const USER_RESPONSE = {
            id: '507f1f77bcf86cd799439011',
            name: 'User Test',
            email: 'test@test.com',
            token: 'ha31msAjsaMdak1',
        };

        before(async function () {
            req.body = {
                email: 'test@test.com',
                password: '12345678',
            };
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
            sinon.stub(userService, 'login').resolves(USER_RESPONSE);

            await userController.login(req, res);
        });

        it('retorna status 200 (OK)', async function () {
            expect(res.status.calledWith(200)).to.be.equal(true);
        });

        it('retorna arquivo json corretamente', async function () {
            expect(res.json.calledWith(USER_RESPONSE)).to.be.equal(true);
        });
    });
});