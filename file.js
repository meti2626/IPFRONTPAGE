class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }

    off(event, listenerToRemove) {
        if (!this.events[event]) return;

        this.events[event] = this.events[event].filter(listener => listener !== listenerToRemove);
    }

    emit(event, ...args) {
        if (!this.events[event]) return;

        this.events[event].forEach(listener => listener(...args));
    }
}

// Example usage:
const emitter = new EventEmitter();

function onFoo(data) {
    console.log('foo event received with data:', data);
}

emitter.on('foo', onFoo);
emitter.emit('foo', { some: 'data' }); // foo event received with data: { some: 'data' }

emitter.off('foo', onFoo);
emitter.emit('foo', { some: 'data' }); // No output
