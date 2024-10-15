"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArazicalismasiModule = void 0;
const common_1 = require("@nestjs/common");
const arazicalismasi_service_1 = require("./arazicalismasi.service");
const arazicalismasi_controller_1 = require("./arazicalismasi.controller");
const typeorm_1 = require("@nestjs/typeorm");
const arazicalismasi_entity_1 = require("./arazicalismasi.entity");
let ArazicalismasiModule = class ArazicalismasiModule {
};
exports.ArazicalismasiModule = ArazicalismasiModule;
exports.ArazicalismasiModule = ArazicalismasiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([arazicalismasi_entity_1.ArazicalismasiEntity])],
        controllers: [arazicalismasi_controller_1.ArazicalismasiController],
        providers: [arazicalismasi_service_1.ArazicalismasiService],
    })
], ArazicalismasiModule);
//# sourceMappingURL=arazicalismasi.module.js.map