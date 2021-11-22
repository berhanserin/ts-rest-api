"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var _a = require('mongoose'), mongoose = _a.mongoose, model = _a.model, Schema = _a.Schema;
var UserSchema = new Schema({
    name: { type: String, required: true },
}, { collection: 'User', timestamps: true });
var User = model('User', UserSchema);
exports.User = User;
