"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SahacalısmasıModule = void 0;
const common_1 = require("@nestjs/common");
const sahacalismasi_service_1 = require("./sahacalismasi.service");
const sahacalismasi_controller_1 = require("./sahacalismasi.controller");
const typeorm_1 = require("@nestjs/typeorm");
const sahacalismasi_entity_1 = require("./sahacalismasi.entity");
let SahacalısmasıModule = class SahacalısmasıModule {
};
exports.SahacalısmasıModule = SahacalısmasıModule;
exports.SahacalısmasıModule = SahacalısmasıModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sahacalismasi_entity_1.SahacalısmasıEntity])],
        controllers: [sahacalismasi_controller_1.SahacalısmasıController],
        providers: [sahacalismasi_service_1.SahacalısmasıService],
    })
], SahacalısmasıModule);
//# sourceMappingURL=sahacalismasi.module.js.map