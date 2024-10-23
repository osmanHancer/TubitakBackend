"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SahaAdımlarıModule = void 0;
const common_1 = require("@nestjs/common");
const saha_adimlari_service_1 = require("./saha-adimlari.service");
const saha_adimlari_controller_1 = require("./saha-adimlari.controller");
const saha_adimlari_entity_1 = require("./saha-adimlari.entity");
const typeorm_1 = require("@nestjs/typeorm");
let SahaAdımlarıModule = class SahaAdımlarıModule {
};
exports.SahaAdımlarıModule = SahaAdımlarıModule;
exports.SahaAdımlarıModule = SahaAdımlarıModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([saha_adimlari_entity_1.SahaAdımlarıEntity])],
        controllers: [saha_adimlari_controller_1.SahaAdımlarıController],
        providers: [saha_adimlari_service_1.SahaAdımlarıService],
    })
], SahaAdımlarıModule);
//# sourceMappingURL=saha-adimlari.module.js.map