import { Router } from 'express';
import ProvinceService from './../services/province-service.js'
const router = Router();
const svc = new ProvinceService(); // Instanciación del Service.


router.get('/', async (req, res) => {
    try {
        const returnArray = await svc.getAllAsync();
        if (returnArray != null) {
            return res.status(200).json(returnArray);
        } else {
            return res.status(500).send("Error interno.");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error interno.");
    }

});

router.get('/:id', async (req, res) => {
    try {
        const returnArray = await svc.getByIdAsync(req.params.id);
        if (returnArray != null) {
            return res.status(200).json(returnArray);
        } else {
            return res.status(404).send("Provincia no encontrada.");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error interno.");
    }

});

router.post('', async (req, res) => {
    let entity = req.body;
    try {
        const created = await svc.createAsync(entity);
        if (created) {
            return res.status(201).send("Provincia creada correctamente.");
        } else {
            return res.status(400).send("No se pudo crear la provincia. Verifique datos o conflicto.");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error interno.");
    }
});

router.put('/:id', async (req, res) => {
    let entity = req.body;
    entity.id = parseInt(req.params.id, 10);

    try {
        const updated = await svc.updateAsync(entity);
        if (updated === true) {
            return res.status(200).send("Provincia actualizada correctamente.");
        }
        if (updated === -1) {
            return res.status(404).send("Provincia no encontrada.");
        }
        if (updated === false) {
            return res.status(400).send("No se pudo actualizar la provincia. Verifique los datos.");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error interno.");
    }
});

router.delete('/:id', async (req, res) => {
    const id = req.params.id;

    try {
        const deleted = await svc.deleteAsync(id);
        if (deleted === true) {
            return res.status(200).send("Provincia eliminada correctamente.");
        }
        if (deleted === false) {
            return res.status(404).send("Provincia no encontrada.");
        }
    } catch (error) {
        console.error(error);
        return res.status(500).send("Error interno.");
    }

});

export default router;