"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeyyahsEntity = void 0;
const typeorm_1 = require("typeorm");
let SeyyahsEntity = class SeyyahsEntity {
};
exports.SeyyahsEntity = SeyyahsEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SeyyahsEntity.prototype, "yuzyil", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SeyyahsEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SeyyahsEntity.prototype, "tarih", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SeyyahsEntity.prototype, "anadil", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], SeyyahsEntity.prototype, "ceviri", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], SeyyahsEntity.prototype, "notlar", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], SeyyahsEntity.prototype, "id", void 0);
exports.SeyyahsEntity = SeyyahsEntity = __decorate([
    (0, typeorm_1.Entity)('seyyah')
], SeyyahsEntity);
//# sourceMappingURL=seyyahs.entity.js.map