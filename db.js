const { Sequelize } = require('sequelize')

// database
const sequelize = new Sequelize(
  process.env.DB_NAME, // Database name

  {

    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    define: {
      createdAt: 'added',
      updatedAt: 'updated',
    }
  },
)

sequelize.authenticate()
sequelize.sync()

module.exports = sequelize
