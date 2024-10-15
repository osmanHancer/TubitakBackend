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
exports.NoktaEntity = void 0;
const typeorm_1 = require("typeorm");
let NoktaEntity = class NoktaEntity {
};
exports.NoktaEntity = NoktaEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NoktaEntity.prototype, "seyahatname_adi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NoktaEntity.prototype, "yuzyil", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ unique: true }),
    __metadata("design:type", String)
], NoktaEntity.prototype, "seyahname_kodu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NoktaEntity.prototype, "yazar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NoktaEntity.prototype, "bolum_chapter_mektupnumarasi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], NoktaEntity.prototype, "sayfa_numarasi", void 0);
__decorate([
    (0, typeorm_1.Column)('double'),
    __metadata("design:type", Number)
], NoktaEntity.prototype, "seyahat_adimi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NoktaEntity.prototype, "anlatida_gecen_mekan_adi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NoktaEntity.prototype, "mekanin_gunumuzdeki_adi", void 0);
__decorate([
    (0, typeorm_1.Column)('double', { precision: 16, scale: 14 }),
    __metadata("design:type", Number)
], NoktaEntity.prototype, "enlem", void 0);
__decorate([
    (0, typeorm_1.Column)('double', { precision: 16, scale: 14 }),
    __metadata("design:type", Number)
], NoktaEntity.prototype, "boylam", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NoktaEntity.prototype, "tespit_edilen_konum_olcegi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NoktaEntity.prototype, "mekan_tipi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NoktaEntity.prototype, "konaklanma_durumu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NoktaEntity.prototype, "yapi_envanter_kodu", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], NoktaEntity.prototype, "alintilar", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], NoktaEntity.prototype, "notlar", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], NoktaEntity.prototype, "rota_notlari", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], NoktaEntity.prototype, "deniz_yoluyla_ulasim", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)({ unique: true }),
    __metadata("design:type", Number)
], NoktaEntity.prototype, "id", void 0);
exports.NoktaEntity = NoktaEntity = __decorate([
    (0, typeorm_1.Entity)('allpoint')
], NoktaEntity);
//# sourceMappingURL=nokta.entity.js.map