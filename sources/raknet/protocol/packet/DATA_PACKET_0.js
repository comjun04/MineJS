'use strict';

/* global minejs */
module.exports = {
    onLoad: ()=>{
        minejs.raknet.protocol.packet.DATA_PACKET_0 =
        
        class DATA_PACKET_0 extends minejs.raknet.protocol.DataPacket{
            static get ID() { return 0x80; }
            getID(){ return this.ID; }
        }
    }
}