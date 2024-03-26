const config = {
    user: 'admin',
    password: '12345678',
    server: 'demo.c1k2aiymw9ze.eu-north-1.rds.amazonaws.com',
    database: 'portfolio',
    options: {
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true,
    }
};

module.exports = config;
