const Socio = require('../models/socios');
const socioCtrl = {};

socioCtrl.getSocios = async (req, res) => {
    const socios = await Socio.find();
    res.json(socios);
};

socioCtrl.createSocio = async (req, res) => {
    const socio = new Socio({
        primer_nombre: req.body.primer_nombre,
        segundo_nombre: req.body.segundo_nombre,
        primer_apellido: req.body.primer_apellido,
        segundo_apellido: req.body.segundo_apellido,
        titulo: req.body.titulo,
        celulares: req.body.celulares,
        empresa: req.body.empresa,
        puesto: req.body.puesto,
        direccion_empresa: req.body.direccion_empresa,
        celulares_empresa: req.body.celulares_empresa,
    });
    await socio.save();
    res.json(socio);
};

socioCtrl.getSocio = async (req, res) => {
    const socio = await Socio.findById(req.params.id);
    res.json(socio);
}

socioCtrl.editSocio = async (req, res) => {
    const { id } = req.params;
    const socio = {
        primer_nombre: req.body.primer_nombre,
        segundo_nombre: req.body.segundo_nombre,
        primer_apellido: req.body.primer_apellido,
        segundo_apellido: req.body.segundo_apellido,
        titulo: req.body.titulo,
        celulares: req.body.celulares,
        empresa: req.body.empresa,
        puesto: req.body.puesto,
        direccion_empresa: req.body.direccion_empresa,
        celulares_empresa: req.body.celulares_empresa,
    };

    await Socio.findByIdAndUpdate(id, { $set: socio }, {new: true});
    res.json(socio)
}

socioCtrl.deleteSocio = async (req, res) => {
    await Socio.findByIdAndRemove(req.params.id);
    res.json({status: 'Socio eliminado.'})
}

module.exports = socioCtrl;

