'use strict';

const io = require('socket.io-client');
const {faker} = require('@faker-js/faker');
const host ='http://localhost:3000'; 

const capsConnection = io.connect(host);
setInterval(() => {
    let vendorData = {
        'store' : 'ASAC store',
        'orderId': faker.datatype.uuid(),
        'customer': faker.name.findName(),
        'address': faker.address.cityName()
    }
    capsConnection.emit('pickup', vendorData);
}, 5000);

capsConnection.on('delivered',(vendorData)=>{
    console.log('Vendor : Thank you for delivering ',vendorData.orderId);
})