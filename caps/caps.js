'use strict';

const port = process.env.PORT || 3000;
const io = require('socket.io')(port);


io.on('connection', (socket) => {
    console.log('connection', socket.id);
    socket.on('pickup', (vendorData) => {
        console.log('Event :',{
            event: 'Pickup',
            time: new Date().toString(),
            payload: vendorData
        });
        io.emit('pickup',vendorData);
    })
    socket.on('in-transit',(vendorData)=>{
        console.log('Event :',{
            event : 'in-transit',
            time: new Date().toString(),
            payload: vendorData
        });
    })
    socket.on('delivered', (vendorData) => {
        console.log('Event :',{
            event: 'Delivered',
            time: new Date().toString(),
            payload: vendorData
        });
        io.emit('delivered',vendorData);
    })
});
