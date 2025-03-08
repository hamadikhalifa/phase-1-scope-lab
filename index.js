var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob'; // Declaring a global variable inside a function (bad practice)
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Reassigning the global bestCustomer
}

const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'someone else'; // This will throw an error since const cannot be reassigned
}
