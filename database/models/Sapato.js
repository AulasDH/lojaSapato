import { DataTypes } from 'sequelize/types';

/**
 * 
 * @param {*} sequelize 
 * @param {DataTypes} dataTypes 
 * @returns 
 */
module.exports = (sequelize, dataTypes) => {
    const tableDefinitions = {
        id: {
            type: dataTypes.STRING,
            primaryKey: true,
        },
        descricao: {
            type: DataTypes.STRING,
        },
        valor: {
            type: DataTypes.INTEGER,
        },
        filename: {
            type: DataTypes.STRING,
        }
    }

    const tableConfiguration = {
        tableName: 'sapatos',
        timestamp: false,
    }
    
    const Sapato = sequelize.define('Sapato', tableDefinitions, tableConfiguration);
    return Sapato
}