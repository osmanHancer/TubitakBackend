"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeyahatnameModule = void 0;
const common_1 = require("@nestjs/common");
const seyahatname_service_1 = require("./seyahatname.service");
const seyahatname_controller_1 = require("./seyahatname.controller");
const typeorm_1 = require("@nestjs/typeorm");
const seyahatname_entity_1 = require("./seyahatname.entity");
let SeyahatnameModule = class SeyahatnameModule {
};
exports.SeyahatnameModule = SeyahatnameModule;
exports.SeyahatnameModule = SeyahatnameModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([seyahatname_entity_1.SeyahatnameEntity])],
        controllers: [seyahatname_controller_1.SeyahatnameController],
        providers: [seyahatname_service_1.SeyahatnameService],
    })
], SeyahatnameModule);
//# sourceMappingURL=seyahatname.module.js.map