'use strict';

/* global minejs */
module.exports = {
    onLoad: ()=>{
        minejs.raknet.protocol.packet.DATA_PACKET_7 =
        
        class DATA_PACKET_7 extends minejs.raknet.protocol.DataPacket{
            static get ID() { return 0x87; }
            getID(){ return this.ID; }
        }
    }
}