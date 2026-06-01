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
        if (!entity) {
            return false;
        }

        const repo = new ProvinceRepository();

        let puedeInsertar = true;

        const returnArray = await repo.getAllAsync();
        for (const item of returnArray) {


            let entidadNull = entity.nombre == null || entity.full_name == null || entity.latitude == null || entity.longitude == null || entity.display_order == null;
            let entidadCorta = entity.nombre.length < 3 || entity.full_name.length < 3;
            let entidadNoNumerica = isNaN(entity.latitude) || isNaN(entity.longitude) || isNaN(entity.display_order);
            let entidadRepetida = entity.nombre === item.nombre || entity.full_name === item.full_name || entity.latitude === item.latitude || entity.longitude === item.longitude || entity.display_order === item.display_order;

            if (entidadNull || entidadCorta || entidadNoNumerica || entidadRepetida) {
                return puedeInsertar = false;
            }
        }
        if (puedeInsertar) {
            return await repo.createAsync(entity);
        }
        return puedeInsertar;
    }


    async updateAsync(entity) {
        if (!entity || !entity.id) {
            return false;
        }

        const repo = new ProvinceRepository();
        const returnArray = await repo.getAllAsync();
        if (!returnArray) {
            return false;
        }

        const itemToUpdate = returnArray.find(item => item.id === entity.id);
        if (!itemToUpdate) {
            return -1;
        }

        const entidadNull = entity.nombre == null || entity.full_name == null || entity.latitude == null || entity.longitude == null || entity.display_order == null;
        const entidadCorta = entity.nombre.length < 3 || entity.full_name.length < 3;
        const entidadNoNumerica = isNaN(entity.latitude) || isNaN(entity.longitude) || isNaN(entity.display_order);

        if (entidadNull || entidadCorta || entidadNoNumerica) {
            return false;
        }

        return await repo.updateAsync(entity);
    }
}
