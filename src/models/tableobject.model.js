const { filterNullColumn, combineObject } = require("../utils/object.util");
const { getNextVal, createSeq } = require("../utils/sequence.mongodb.util");

class TableObject {

    _id = undefined;
    _state = undefined;
    tableName = this.constructor.name.toLowerCase();
    sequence = {
        name: this.constructor.name.toLowerCase() + "_seq",
        start: this.constructor.name.substring(0, 4).toUpperCase(),
    };

    getSanitizedObject() {
        const object = { ...this };
        delete object.tableName;
        delete object.sequence;
        return object;
    }

    async setId(db) {
        await getNextVal(db, this.sequence.name).then((value) => {
            this._id = this.sequence.start + value;
        });
    }

    async create(db) {
        await createSeq(db, this.sequence.name);
        await this.setId(db);
        this._state = 1;
        await db.collection(this.tableName).insertOne(this.getSanitizedObject());
    }

    async read(db, afterWhereString) {
        let whereObject = this.getSanitizedObject();
        let combinedWhere = combineObject(filterNullColumn(whereObject));
        if (afterWhereString) combinedWhere = combineObject(combinedWhere, afterWhereString);
        console.log(combinedWhere)
        return await db.collection(this.tableName).find(combinedWhere).toArray();
    }

    async update(db, setObject, afterWhereString, afterSetString) {    
        let whereObject = this.getSanitizedObject();
        setObject = setObject?.getSanitizedObject();
        let combinedWhere = combineObject(filterNullColumn(whereObject));
        let combinedSet = combineObject(filterNullColumn(setObject));
        if (afterWhereString) combinedWhere = combineObject(combinedWhere, afterWhereString);
        if (afterSetString) combinedSet = combineObject(combinedSet, afterSetString);
        await db.collection(this.tableName).updateMany(combinedWhere, { $set: combinedSet });
    }

    async delete(db, afterWhereString) {
        let whereObject = this.getSanitizedObject();
        let combinedWhere = combineObject(filterNullColumn(whereObject));
        if (afterWhereString) combinedWhere = combineObject(combinedWhere, afterWhereString);
        await db.collection(this.tableName).deleteMany(combinedWhere);
    }
}

exports.TableObject = TableObject;
