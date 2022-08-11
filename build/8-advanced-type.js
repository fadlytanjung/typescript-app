"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateUser(data) { }
CreateUser({
    age: 20,
    createdAt: new Date(),
});
const message = {
    id: '1',
    name: 'doe',
    address: '',
    age: '10',
};
const allUsers = {
    '1': { id: 1, name: 'doe', createdAt: new Date(), age: 20 },
    '2': { id: 2, name: 'foe', createdAt: new Date(), age: 20 },
};
