function filterNullColumn(object){
    return Object.fromEntries(
        Object.entries(object).filter(([key, value]) => value != null)
    );
}

function combineObject(...objects){
    return Object.assign(...objects);
}

exports.combineObject = combineObject;
exports.filterNullColumn = filterNullColumn;