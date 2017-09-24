
export function generateInvoiceID () { return "INV"+Math.floor(1000 + Math.random() * 9000); }

export function getInvoices() {
	let invoiceLength = window.localStorage.length;
    let invoiceArray = [];
    for (let i = 0; i < invoiceLength; i++) {
    	let invoiceKey = localStorage.key(i);
        invoiceArray[i] = JSON.parse(localStorage.getItem(invoiceKey));
    }
    console.log(invoiceArray);
    return invoiceArray;
}


