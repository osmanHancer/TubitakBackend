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
const sahacal_smas__service_1 = require("./sahacal\u0131smas\u0131.service");
const sahacal_smas__controller_1 = require("./sahacal\u0131smas\u0131.controller");
const typeorm_1 = require("@nestjs/typeorm");
const sahacal_smas__entity_1 = require("./sahacal\u0131smas\u0131.entity");
let SahacalısmasıModule = class SahacalısmasıModule {
};
exports.SahacalısmasıModule = SahacalısmasıModule;
exports.SahacalısmasıModule = SahacalısmasıModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([sahacal_smas__entity_1.SahacalısmasıEntity])],
        controllers: [sahacal_smas__controller_1.SahacalısmasıController],
        providers: [sahacal_smas__service_1.SahacalısmasıService],
    })
], SahacalısmasıModule);
//# sourceMappingURL=sahacal%C4%B1smas%C4%B1.module.js.map