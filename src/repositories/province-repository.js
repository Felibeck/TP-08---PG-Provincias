import pkg from 'pg'
import config from '../configs/db-config.js';
const { Client } = pkg;

class ProvinceRepository {
    async getAllAsync() {
        let returnArray = [];
        const client = new Client(config);

        try {
            await client.connect();
            const sql = "SELECT * FROM Provincias";
            const result = await client.query(sql);
            await client.end();
            returnArray = result.rows;
        } catch (error) {
            console.error(error);
        }

        return returnArray;
    }

    async getByIdAsync(id) {
        let returnItem = null;
        const client = new Client(config);

        try {
            await client.connect();
            const sql = "SELECT * FROM Provincias WHERE id = $1";
            const result = await client.query(sql, [id]);
            await client.end();
            returnItem = result.rows[0] || null;
        } catch (error) {
            console.error(error);
        }

        return returnItem;
    }



    async createAsync(entity) {
        const client = new Client(config);

        try {
            await client.connect();
            const sql = "INSERT INTO Provincias (nombre, full_name, latitude, longitude, display_order) VALUES ($1, $2, $3, $4, $5)";
            const result = await client.query(sql, [entity.nombre, entity.full_name, entity.latitude, entity.longitude, entity.display_order]);
            return (result.rowCount > 0);
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async updateAsync(entity) {
        const client = new Client(config);

        try {
            await client.connect();
            const sql = "UPDATE Provincias SET nombre = $1, full_name = $2, latitude = $3, longitude = $4, display_order = $5 WHERE id = $6";
            await client.query(sql, [entity.nombre, entity.full_name, entity.latitude, entity.longitude, entity.display_order, entity.id]);
            await client.end();
            return (result.rowCount > 0);
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    async deleteAsync(id) {

        const client = new Client(config);
        try {
            await client.connect();
            const sql = "DELETE FROM Provincias WHERE id = $1";
            await client.query(sql, [id]);
            await client.end();
            return true;
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }

}


export default ProvinceRepository;