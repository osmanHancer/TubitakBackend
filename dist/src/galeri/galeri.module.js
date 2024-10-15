"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GaleriModule = void 0;
const common_1 = require("@nestjs/common");
const galeri_service_1 = require("./galeri.service");
const galeri_controller_1 = require("./galeri.controller");
const typeorm_1 = require("@nestjs/typeorm");
const galeri_entity_1 = require("./galeri.entity");
let GaleriModule = class GaleriModule {
};
exports.GaleriModule = GaleriModule;
exports.GaleriModule = GaleriModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([galeri_entity_1.GaleriEntity])],
        providers: [galeri_service_1.GaleriService],
        controllers: [galeri_controller_1.GaleriController]
    })
], GaleriModule);
//# sourceMappingURL=galeri.module.js.map