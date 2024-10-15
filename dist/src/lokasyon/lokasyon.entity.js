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
exports.LokasyonEntity = void 0;
const typeorm_1 = require("typeorm");
let LokasyonEntity = class LokasyonEntity {
};
exports.LokasyonEntity = LokasyonEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LokasyonEntity.prototype, "Lokasyon_Adi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LokasyonEntity.prototype, "Mekanin_Gunumuzdeki_Adi", void 0);
__decorate([
    (0, typeorm_1.Column)("double", { precision: 16, scale: 14 }),
    __metadata("design:type", Number)
], LokasyonEntity.prototype, "Enlem", void 0);
__decorate([
    (0, typeorm_1.Column)("double", { precision: 16, scale: 14 }),
    __metadata("design:type", Number)
], LokasyonEntity.prototype, "Boylam", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LokasyonEntity.prototype, "Olcek", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LokasyonEntity.prototype, "mekan_adi", void 0);
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], LokasyonEntity.prototype, "Id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], LokasyonEntity.prototype, "Envanter_Kodu", void 0);
exports.LokasyonEntity = LokasyonEntity = __decorate([
    (0, typeorm_1.Entity)('lokasyon'),
    (0, typeorm_1.Unique)(["Enlem", "Boylam"])
], LokasyonEntity);
//# sourceMappingURL=lokasyon.entity.js.map