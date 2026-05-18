import pkg from 'pg'
import Province from '../entities/province';
import config from '../configs/db-config';
const { Client, Pool } = pkg;

const ProvinceRepository = () => {
    getAllSync = async () => {
        let returnArray = null;
        const client = new Client(config);

    try 
    {
        await client.connect();
        const sql = "SELECT * FROM Provincias";
        const result = await client.query(sql);
        await client.end();
        returnArray = result.rows;

    } catch (error) {
            console.log(error);
    }
        return returnArray;
    }
}


export default ProvinceRepository;