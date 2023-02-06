import { Sequelize } from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

// LOCAL:
// const db = new Sequelize(
//     process.env.DB_NAME,
//     process.env.DB_USER,
//     process.env.DB_PASS,
//     {
//         host:process.env.DB_HOST,
//         port:process.env.DB_PORT,
//         dialect:'postgres',
//         // dialectOptions: {
//         //     ssl: {
//         //       require: true,
//         //       rejectUnauthorized: false 
//         //     }
//           // },
//     }
// )

const db = new Sequelize(process.env.DATABASE_URL, {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
  }
);

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

export default db;