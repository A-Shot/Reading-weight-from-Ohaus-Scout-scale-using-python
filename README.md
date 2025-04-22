# Reading-weight-from-Ohaus-Scout-scale-using-python
This project uses NodeJS to read the value of an Ohaus-Scout scale (exact model name will follow). Other scales have not been tested and might not work. 
# Networked Scale Reader

A simple Node.js + Express web UI to read weight from a serial‐connected scale.

## Prerequisites
- Node.js (v14+)
- Scale attached on COM3 (or change in `server.js`)

## Installation
```bash
git clone https://github.com/yourusername/scale‐reader.git
cd scale‐reader
npm install

Usage
bash
Copy
Edit
node server.js
Open your browser at http://localhost:3000 and click Read Weight.

Access from LAN
Find your PC’s IPv4 (e.g. 192.168.1.42).

Start server (listens on 0.0.0.0:3000).

On any device, browse to http://192.168.1.42:3000.
 
