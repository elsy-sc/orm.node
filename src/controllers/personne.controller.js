function createPersonne(req, res){
    res.send("create Personne");
}

function readPersonne(req, res){
    res.send("read Personne");
}

function updatePersonne(req, res){
    res.send("update Personne");
}

function deletePersonne(req, res){
    res.send("delete Personne");
}

exports.createPersonne = createPersonne;
exports.readPersonne = readPersonne;
exports.updatePersonne = updatePersonne;
exports.deletePersonne = deletePersonne;