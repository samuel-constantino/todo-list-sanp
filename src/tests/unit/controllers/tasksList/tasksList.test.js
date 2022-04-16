const { expect } = require('chai');
const sinon = require('sinon');

const tasksListController = require('../../../../controllers/tasksList');
const tasksListService = require('../../../../services/tasksList');

describe('Testa camada de controle para busca de listas do usuário', function () {
    const req = {};
    const res = {};

    describe('sucesso', function () {
        const SERVICE_RESPONSE = [{
            id: '620e45f0b404aad8c73f2412',
            userId: '6226111317c0d522ca2af129',
            name: 'List Name',
            tasks: [{ name: 'Task Name' }],
            description: 'Task Description',
            status: 'In progress',
            priority: { important: true, urgent: true },
        }];

        before(async function () {
            req.loggedUser = { id: '123' };
            res.headers = ('authorization', 'bearer eyJhbGciOiJ.IUzI1NiIsInR5.cCI6IkpXVCJ9.');
            res.status = sinon.stub().returns(res);
            res.json = sinon.stub().returns();
            sinon.stub(tasksListService, 'findByUser').resolves(SERVICE_RESPONSE);

            await tasksListController.findByUser(req, res);
        });

        it('retorna status 200 (OK)', async function () {
            expect(res.status.calledWith(200)).to.be.equal(true);
        });

        it('retorna arquivo json corretamente', async function () {
            expect(res.json.calledWith(SERVICE_RESPONSE)).to.be.equal(true);
        });
    });
});