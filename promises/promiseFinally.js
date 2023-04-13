// In synchronous code, you use the finally block to clean up the resources. In asynchronous code, you use the finally() method instead.
class Connection {
    execute(query) {
        if (query != 'Insert' && query != 'Update' && query != 'Delete') {
            throw new Error(`The ${query} is not supported`);
        }
        console.log(`Execute the ${query}`);
        return this;
    }
    close() {
        console.log('Close the connection')
    }
}

const success = true;

function connect() {
    return new Promise((resolve, rejected) => {
        if (success)
            resolve(new Connection());
        else
            rejected('Could not open the database connection');
    });
}


let globalConnection;

connect()
    .then((connection) => {
        globalConnection = connection;
        return globalConnection.execute('Insert');
    })
    .then((connection) => {
        globalConnection = connection;
        return connection.execute('Select');
    })
    .catch(console.log)
    .finally(() => {
        if (globalConnection) {
            globalConnection.`close()`;
        }
    });