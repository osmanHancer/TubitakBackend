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
exports.GaleriEntity = void 0;
const typeorm_1 = require("typeorm");
let GaleriEntity = class GaleriEntity {
};
exports.GaleriEntity = GaleriEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GaleriEntity.prototype, "envanterNo", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], GaleriEntity.prototype, "imgname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], GaleriEntity.prototype, "metin", void 0);
exports.GaleriEntity = GaleriEntity = __decorate([
    (0, typeorm_1.Entity)('galeri')
], GaleriEntity);
//# sourceMappingURL=galeri.entity.js.map