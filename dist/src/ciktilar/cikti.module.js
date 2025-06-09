"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CiktiModule = void 0;
const common_1 = require("@nestjs/common");
const cikti_service_1 = require("./cikti.service");
const cikti_controller_1 = require("./cikti.controller");
const cikti_entity_1 = require("./cikti.entity");
const typeorm_1 = require("@nestjs/typeorm");
let CiktiModule = class CiktiModule {
};
exports.CiktiModule = CiktiModule;
exports.CiktiModule = CiktiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([cikti_entity_1.CiktilarEntity])],
        providers: [cikti_service_1.CiktilarService],
        controllers: [cikti_controller_1.CiktilarController]
    })
], CiktiModule);
//# sourceMappingURL=cikti.module.js.map