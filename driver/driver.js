'use strict';

const io = require('socket.io-client');
const host ='http://localhost:3000'; 
const capsConnection = io.connect(host);

capsConnection.on('pickup',(vendorData)=>{
    console.log('Driver : picked up' ,vendorData.orderId)
    setTimeout(() => {
        capsConnection.emit('in-transit',vendorData);
        console.log('Driver : in-transit');
    }, 2000);
    setTimeout(() => {
        capsConnection.emit('delivered',vendorData);
        console.log('Driver : delivered up',vendorData.orderId);
    },3000)
})