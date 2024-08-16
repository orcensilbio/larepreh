// Example observables
const stringObservable = new Rx.Subject();
const numberObservable = new Rx.Subject();
const objectObservable = new Rx.Subject();

// Store observables by type
const observablesByType = {
    string: stringObservable,
    number: numberObservable,
    object: objectObservable
};

// Function to get observable by type
function getObservableByType(type) {
    return observablesByType[type];
}

// Example usage
const observableType = 'string';
const observable = getObservableByType(observableType);

observable.subscribe(data => {
    console.log(`Received data from ${observableType} observable:`, data);
});

// Example emission
stringObservable.next('Hello, world!');
