const { expect } = require('chai');
const sinon = require('sinon');

const userService = require('../../../../services/user');
const userModel = require('../../../../models/user');

describe('Testa camada de serviço do login de usuário', function () {
    let LOGIN_PAYLOAD = null;
    let LOGIN_MODEL_RESPONSE = null;
    const USER_PROPERTIES = ['id', 'name', 'email', 'token'];

    describe('sucesso', function () {
        LOGIN_PAYLOAD = {
            email: 'test@test.com',
            password: 'test123',
        };
        LOGIN_MODEL_RESPONSE = {
            id: '507f1f77bcf86cd799439011',
            name: 'User Test',
            email: 'test@test.com',
        };

        let user = null;
        before(async function () {
            sinon.stub(userModel, 'findByEmail').resolves(true);
            sinon.stub(userModel, 'login').resolves(LOGIN_MODEL_RESPONSE);
            user = await userService.login(LOGIN_PAYLOAD);
        });

        after(function () {
            userModel.login.restore();
            userModel.findByEmail.restore();
        });

        it('retorna um objeto', function () {
            expect(user).to.be.an('object');
        });

        it('retorna um objeto com as propriedades corretas', function () {
            USER_PROPERTIES.forEach((property) => {
                expect(user).to.have.property(property);
            });
        });
    });
});