import mongoose, { ConnectionStates } from 'mongoose';

const connection = { isConnected: ConnectionStates.connected };

async function connect() {
    if (connection.isConnected) {
        console.log('already connected');
        return;
    }

    // Connection queue has few connections.
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;

        // Return if already connected.
        if (connection.isConnected === 1) {
            console.log('use previous connection');
            return;
        }
        await mongoose.disconnect();
    }

    const uri = process.env.MONGODB_URI;
    if (uri === undefined) return;

    const db = await mongoose.connect(uri);
    console.log('new connection');

    connection.isConnected = db.connections[0].readyState;
}

export const db = { connect };
