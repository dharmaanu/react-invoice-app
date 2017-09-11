import uuid from 'node-uuid';

class common {
generateInvoiceID = () => { return "INV"+uuid.v1(); }

}

export default common;