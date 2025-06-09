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
exports.KaynakcaEntity = void 0;
const typeorm_1 = require("typeorm");
let KaynakcaEntity = class KaynakcaEntity {
};
exports.KaynakcaEntity = KaynakcaEntity;
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], KaynakcaEntity.prototype, "Seyahatnameler", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], KaynakcaEntity.prototype, "Konaklama_ve_Seyahat_Kulturu", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], KaynakcaEntity.prototype, "Mimari_Sanat_ve_Tarih", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], KaynakcaEntity.prototype, "Diger", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], KaynakcaEntity.prototype, "id", void 0);
exports.KaynakcaEntity = KaynakcaEntity = __decorate([
    (0, typeorm_1.Entity)('kaynakca')
], KaynakcaEntity);
//# sourceMappingURL=kaynakca.entity.js.map