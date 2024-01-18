function createVoiture(req, res) {
    res.send("create voiture");
}

function readVoiture(req, res) {
    res.send("read voiture");
}

function updateVoiture(req, res) {
    res.send("update voiture");
}

function deleteVoiture(req, res) {
    res.send("delete voiture");
}

exports.createVoiture = createVoiture;
exports.readVoiture = readVoiture;
exports.updateVoiture = updateVoiture;
exports.deleteVoiture = deleteVoiture;