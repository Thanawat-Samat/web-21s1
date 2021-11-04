"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.example = void 0;
const functions = require("firebase-functions");
const app_1 = require("./app");
//export const example = functions.region('namehost').https.onRequest(app)  //if you pay
exports.example = functions.https.onRequest(app_1.app);
//# sourceMappingURL=index.js.map