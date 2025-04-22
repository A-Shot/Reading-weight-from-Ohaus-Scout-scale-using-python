const { SerialPort } = require('serialport');

async function readDataFromScale(serialPortPath, baudRate = 9600) {
    return new Promise((resolve, reject) => {
        const port = new SerialPort({
            path: serialPortPath,
            baudRate,
            autoOpen: true
        });

        let received = '';

        port.write('P\n\r', (err) => {
            if (err) return reject('Error writing to scale: ' + err.message);
            console.log('Command sent: P\\n\\r');
        });

        port.on('data', (data) => {
            const chunk = data.toString('utf8');
            received += chunk;
            console.log('Chunk:', chunk);

            // Try to extract a float like "2.37" from the received data
            const match = received.match(/-?\d+\.\d+/);
            if (match) {
                port.close();
                const weight = parseFloat(match[0]);
                resolve(weight);
            }
        });

        port.on('error', (err) => reject('Port error: ' + err.message));
    });
}

module.exports = { readDataFromScale };
