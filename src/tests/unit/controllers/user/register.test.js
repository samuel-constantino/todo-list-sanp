const { expect } = require('chai');
const sinon = require('sinon');

const userController = require('../../../../controllers/user');
const userService = require('../../../../services/user');

describe('testa camada de controle para registro de usuário', function () {
    const req = {};
    const res = {};

    describe('sucesso', function () {
        const NEW_USER_RESPONSE = {
            id: '507f1f77bcf86cd799439011',
            name: 'User Test',
            email: 'test@test.com',
        };
        before(async function () {
            req.body = {
                name: 'User Test',
                email: 'test@test.com',
                password: '12345678',
            };

            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
            sinon.stub(userService, 'register').resolves(NEW_USER_RESPONSE);

            await userController.register(req, res);
        });

        it('retorna status 201 (created)', async function () {
            expect(res.status.calledWith(201)).to.be.equal(true);
        });

        it('retorna arquivo com formato json', async function () {
            expect(res.json.calledWith(NEW_USER_RESPONSE)).to.be.equal(true);
        });
    });
});