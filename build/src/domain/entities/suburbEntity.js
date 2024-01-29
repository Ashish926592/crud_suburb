"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suburbEntity = void 0;
class suburbEntity {
    constructor(name, postcode, state, id) {
        this.name = name;
        this.postcode = postcode;
        this.state = state;
        this.id = id;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getState() {
        return this.state;
    }
    getPostcode() {
        return this.postcode;
    }
    setId(id) {
        this.id = id;
    }
    setName(name) {
        this.name = name;
    }
    setState(state) {
        this.state = state;
    }
    setPostcode(postcode) {
        this.postcode = postcode;
    }
}
exports.suburbEntity = suburbEntity;
//# sourceMappingURL=suburbEntity.js.map