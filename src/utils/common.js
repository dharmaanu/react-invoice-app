/**
    Randomly generated 4 digit INV-**** invoice id
**/
export function generateInvoiceID () { return "INV"+Math.floor(1000 + Math.random() * 9000); }
/**
    Function to fetch invoices from LocalStorage
**/
export function getInvoices() {
	let invoiceLength = window.localStorage.length;
    let invoiceArray = [];
    for (let i = 0; i < invoiceLength; i++) {
    	let invoiceKey = localStorage.key(i);
        invoiceArray[i] = JSON.parse(localStorage.getItem(invoiceKey));
    }
    return invoiceArray;
}


