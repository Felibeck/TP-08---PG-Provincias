import pkg from 'pg'
import config from '../configs/db-config.js';
const { Client } = pkg;

class ProvinceRepository {
    async getAllAsync() {
        let returnArray = null;
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
            const sql = "INSERT INTO Provincias VALUES ($1, $2, $3, $4, $5))";
            const result = await client.query(sql, [entity.nombre, entity.full_name, entity.latitude, entity.longitude, entity.display_order]);
            await client.end();
        } catch (error) {
            console.error(error);
        }
    }
}


export default ProvinceRepository;