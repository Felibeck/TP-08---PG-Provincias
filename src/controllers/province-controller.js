import { Router } from 'express';
import ProvinceService from './../services/province-service.js'
const router = Router();
const svc = new ProvinceService(); // Instanciación del Service.


router.get('/', async (req, res) => {
    let respuesta;
    const returnArray = await svc.getAllAsync();
    if (returnArray != null) {
        respuesta = res.status(200).json(returnArray);
    } else {
        respuesta = res.status(500).send("Error interno.");
    }
    return respuesta;
});

router.get('/:id', async (req, res) => {
    let respuesta;
    const returnArray = await svc.getByIdAsync(req.params.id);
    if (returnArray != null) {
        respuesta = res.status(200).json(returnArray);
    } else {
        respuesta = res.status(404).send("Provincia no encontrada.");
    }
    return respuesta;
});

router.post('/', async (req, res) => {
    await svc.createAsync(req.body);
    if (res.statusCode === 201) {
        res.status(201).send("Provincia creada correctamente.");
    } else {
        res.status(400).send("Bad Request. Verifique los datos enviados.");
    }
});

export default router;