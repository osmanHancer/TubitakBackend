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
exports.ArazicalismasiEntity = void 0;
const typeorm_1 = require("typeorm");
let ArazicalismasiEntity = class ArazicalismasiEntity {
};
exports.ArazicalismasiEntity = ArazicalismasiEntity;
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "Envanter_Kodu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "Yapi_Adi", void 0);
__decorate([
    (0, typeorm_1.Column)("double", { precision: 16, scale: 14 }),
    __metadata("design:type", Number)
], ArazicalismasiEntity.prototype, "enlem", void 0);
__decorate([
    (0, typeorm_1.Column)("double", { precision: 16, scale: 14 }),
    __metadata("design:type", Number)
], ArazicalismasiEntity.prototype, "boylam", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "Guzergah", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "Alternatif_Adi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "Donemi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "Kitabesi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "Banisi", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "Seyahatnamelerdeki_Anlatimi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "Durumu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "Bugunki_Kullanimi", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "Mimari_Ozellikler", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "Yasama_Ve_Eski_Kullanima_Dair_Izler", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "Literatur_Ve_Arsiv_Kaynaklarindan_Notlar", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "yapi_monografisi_var_yok", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ArazicalismasiEntity.prototype, "Arazi_Calismasi_Tarihi", void 0);
exports.ArazicalismasiEntity = ArazicalismasiEntity = __decorate([
    (0, typeorm_1.Entity)('arazicalismasi')
], ArazicalismasiEntity);
//# sourceMappingURL=arazicalismasi.entity.js.map