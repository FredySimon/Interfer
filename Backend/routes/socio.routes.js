const express = require('express');
const router = express.Router();
const socioCtrl = require('../controllers/socio.controllers');

router.get('/', socioCtrl.getSocios);
router.post('/', socioCtrl.createSocio);
router.get('/:id', socioCtrl.getSocio);
router.put('/:id', socioCtrl.editSocio);
router.delete('/:id', socioCtrl.deleteSocio);

module.exports = router;