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

    #getSanitizedObject() {
        const object = { ...this };
        delete object.tableName;
        delete object.sequence;
        return object;
    }

    async #setId() {
        await getNextVal(this.sequence.name).then((value) => {
            this._id = this.sequence.start + value;
        });
    }

    async create(db) {
        await createSeq(this.sequence.name);
        await this.#setId();
        this._state = 1;
        await db.collection(this.tableName).insertOne(this.#getSanitizedObject());
    }

    async read(db, whereObject, afterWhereString) {
        whereObject = whereObject.#getSanitizedObject();
        let combinedWhere = combineObject(filterNullColumn(whereObject));
        if (afterWhereString) {
            combinedWhere = combineObject(combinedWhere, afterWhereString);
        }
        return await db.collection(this.tableName).find(combinedWhere).toArray();
    }

    async update(db, whereObject, setObject, afterWhereString, afterSetString) {    
        whereObject = whereObject.#getSanitizedObject();
        setObject = setObject.#getSanitizedObject();
    
        let combinedWhere = combineObject(filterNullColumn(whereObject));
        if (afterWhereString) {
            combinedWhere = combineObject(combinedWhere, afterWhereString);
        }
    
        let combinedSet = combineObject(filterNullColumn(setObject));
        if (afterSetString) {
            combinedSet = combineObject(combinedSet, afterSetString);
        }
    
        await db.collection(this.tableName).updateMany(combinedWhere, { $set: combinedSet });
    }

    async delete(db, whereObject, afterWhereString) {
        whereObject = whereObject.#getSanitizedObject();
        let combinedWhere = combineObject(filterNullColumn(whereObject));
        if (afterWhereString) {
            combinedWhere = combineObject(combinedWhere, afterWhereString);
        }
        await db.collection(this.tableName).deleteMany(combinedWhere);
    }
}

exports.TableObject = TableObject;
