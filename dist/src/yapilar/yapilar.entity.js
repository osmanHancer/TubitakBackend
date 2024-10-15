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
exports.YapilarEntity = void 0;
const typeorm_1 = require("typeorm");
let YapilarEntity = class YapilarEntity {
};
exports.YapilarEntity = YapilarEntity;
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "ana_guzergah", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "guzergah_kesimi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "bulundugu_sehir", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "yapinin_adi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "yapinin_donemi", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "envanter_kodu", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "yap\u0131m_y\u0131l\u0131_yada_yuzy\u0131l\u0131", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "bilinen_banisi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "g\u00FCncel_durum", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "enlem", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "boylam", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "kesinlik", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "notlar", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "online_kaynak", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "cizimler", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "g\u00F6rseller", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "anahtar_kelimeler", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "literatur_taramasi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "klasor_baglant\u0131s\u0131", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "k\u00FClt\u00FCr_envanteri_listesi", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], YapilarEntity.prototype, "arsiv_ekibi", void 0);
exports.YapilarEntity = YapilarEntity = __decorate([
    (0, typeorm_1.Entity)('yapilar')
], YapilarEntity);
//# sourceMappingURL=yapilar.entity.js.map