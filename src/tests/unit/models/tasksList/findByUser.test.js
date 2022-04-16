const { expect } = require('chai');
const sinon = require('sinon');

const { MongoClient } = require('mongodb');
const { connectionMemory } = require('../util/connectionMemory');

const tasksListModel = require('../../../../models/tasksList');

require('dotenv').config();

const { DB_NAME } = process.env;

describe('Testa camada de modelo para busca de listas por usuário', function () {
    const TASKS_LIST_PAYLOAD = {
        userId: '6226111317c0d522ca2af129',
        name: 'List Name',
        tasks: [{ name: 'Task Name' }],
        description: 'Task Description',
        status: 'In progress',
        priority: { important: true, urgent: true },
    };
    const LIST_PROPERTIES = ['_id', 'userId', 'name', 'tasks', 'description', 'status', 'priority'];
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
                .collection('tasksLists')
                .insertOne(TASKS_LIST_PAYLOAD);

            response = await tasksListModel.findByUser('6226111317c0d522ca2af129');
        });

        it('retorna um documento', async function () {
            expect(response).to.be.an('object');
        });

        it('retorna um documento de objetos com as propriedades corretas', async function () {
            LIST_PROPERTIES.forEach((property) => {
                expect(response[0]).to.have.property(property);
            });
        });
    });
});
