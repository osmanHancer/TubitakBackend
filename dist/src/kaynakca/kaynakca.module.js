"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KaynakcaModule = void 0;
const common_1 = require("@nestjs/common");
const kaynakca_service_1 = require("./kaynakca.service");
const kaynakca_controller_1 = require("./kaynakca.controller");
const kaynakca_entity_1 = require("./kaynakca.entity");
const typeorm_1 = require("@nestjs/typeorm");
let KaynakcaModule = class KaynakcaModule {
};
exports.KaynakcaModule = KaynakcaModule;
exports.KaynakcaModule = KaynakcaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([kaynakca_entity_1.KaynakcaEntity])],
        providers: [kaynakca_service_1.KaynakcaService],
        controllers: [kaynakca_controller_1.KaynakcaController]
    })
], KaynakcaModule);
//# sourceMappingURL=kaynakca.module.js.map