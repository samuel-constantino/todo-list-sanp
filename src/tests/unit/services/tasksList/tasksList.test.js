const { expect } = require('chai');
const sinon = require('sinon');

const tasksListService = require('../../../../services/tasksList');
const tasksListModel = require('../../../../models/tasksList');

describe('Testa camada de serviço para busca de listas de usuário', function () {
    let LIST_MODEL_RESPONSE = null;
    const LIST_PROPERTIES = ['id', 'userId', 'name', 'tasks', 'description', 'status', 'priority'];

    describe('sucesso', function () {
        LIST_MODEL_RESPONSE = [{
            id: '620e45f0b404aad8c73f2412',
            userId: '6226111317c0d522ca2af129',
            name: 'List Name',
            tasks: [{ name: 'Task Name' }],
            description: 'Task Description',
            status: 'In progress',
            priority: { important: true, urgent: true },
        }];

        let tasksList = null;
        before(async function () {
            sinon.stub(tasksListModel, 'findByUser').resolves(LIST_MODEL_RESPONSE);
            tasksList = await tasksListService.findByUser('6226111317c0d522ca2af129');
        });
        after(function () {
            tasksListModel.findByUser.restore();
        });

        it('retorna um array', function () {
            expect(tasksList).to.be.an('array');
        });

        it('retorna um array de objetos com as propriedades corretas', function () {
            LIST_PROPERTIES.forEach((property) => {
                expect(tasksList[0]).to.have.property(property);
            });
        });
    });
});
