import ProvinceRepository from '../repositories/province-repository.js';

export default class ProvinceService {
    // Clase con lógica de negocio.
    getAllAsync = async () => {
        const repo = new ProvinceRepository();
        const returnArray = await repo.getAllAsync();
        return returnArray;
    }

    getByIdAsync = async (id) => {
        const repo = new ProvinceRepository();
        const returnArray = await repo.getByIdAsync(id);
        return returnArray;
    }

        createAsync = async (entity) => {
        const repo = new ProvinceRepository();

        let puedeInsertar = true;

        const returnArray = await repo.getAllAsync();
        for (const item of returnArray) {

            if(entity.nombre === item.nombre || entity.full_name === item.full_name || entity.latitude === item.latitude || entity.longitude === item.longitude || entity.display_order === item.display_order || entity.nombre == null || entity.full_name == null || entity.latitude == null || entity.longitude == null || entity.display_order == null || entity.nombre.length < 3 || entity.full_name.length < 3 || isNaN(entity.latitude) || isNaN(entity.longitude) || isNaN(entity.display_order)) {
                return puedeInsertar = false;
            }
        }
        if(puedeInsertar)
            {
                await repo.createAsync(entity);
            }        
    }
}