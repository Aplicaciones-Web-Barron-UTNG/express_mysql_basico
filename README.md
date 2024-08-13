# Configuración de la base de datos
## Modificación de archivo db.ts
```
export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'xxxx',
    database: 'backend',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});
```

## Creación de la tabla
```
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE
);
```

