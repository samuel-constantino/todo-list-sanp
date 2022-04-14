const { expect } = require('chai');
const sinon = require('sinon');

const userService = require('../../../../services/user');
const userModel = require('../../../../models/user');

describe('Testa camada de serviço para registro de usuário', function () {
    let NEW_USER_PAYLOAD = null;
    let NEW_USER_RESPONSE = null;

    const USER_PROPERTIES = ['id', 'name', 'email'];

    describe('', function () {
        NEW_USER_PAYLOAD = {
            name: 'User Teste',
            email: 'test@test.com',
            password: 'test123',
        };
        NEW_USER_RESPONSE = {
            id: '507f1f77bcf86cd799439011',
            name: 'User Test',
            email: 'test@test.com',
        };

        let newUser = null;
        before(async function () {
            sinon.stub(userModel, 'register').resolves(NEW_USER_RESPONSE);
            newUser = await userService.register(NEW_USER_PAYLOAD);
        });

        after(function () {
            userModel.register.restore();
        });

        it('retorna um objeto', async function () {
            expect(newUser).to.be.an('object');
        });

        it('retorna um objeto com as propriedades corretas', async function () {
            USER_PROPERTIES.forEach((property) => {
                expect(newUser).to.have.property(property);
            });
        });
    });
});