const mongoose = require('mongoose');
const { Schema } = mongoose;
mongoose.set('useCreateIndex', true);

const SocioSchema = new Schema({
    primer_nombre: { type: String, required: true, uppercase : true },
    segundo_nombre: { type: String, required: false, uppercase : true },
    primer_apellido: { type: String, required: true, uppercase : true },
    segundo_apellido: { type: String, required: false, uppercase : true },
    titulo: { type: String, required: true, },
    celulares: { type: Array, required: true },
    empresa: { type: String, required: true, },
    puesto: { type: String, required: true, },
    direccion_empresa: { type: String, required: true, },
    celulares_empresa: { type: Array, required: true },
});

module.exports = mongoose.model('Socio', SocioSchema);