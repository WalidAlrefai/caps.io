'use strict';
const port = 3000;
const io = require('socket.io')(port);
const { faker } = require('@faker-js/faker');

let socketObj ={};
let vendorData = {
    store: "ASAC store",
    orderID: faker.datatype.uuid(),
    customer: faker.name.findName(),
    address: faker.address.cityName(),
};
describe('testing the connection ',()=>{
    let consoleSpy;
    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })
it('testing the client connection',async()=>{
        io.emit('connection',socketObj);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
})

describe('testing the server (caps)', () => {
    let consoleSpy;
    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    })
    afterAll(() =>{
        consoleSpy.mockRestore();
    })
    it('pickup emiting', async () => {
        io.emit('pickup',vendorData);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('in-transit emiting', async () => {
        io.emit('in-transit',vendorData);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
    it('delivered emiting', async () => {
        io.emit('delivered',vendorData);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    })
})