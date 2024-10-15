"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YapimonografisiModule = void 0;
const common_1 = require("@nestjs/common");
const yapimonografisi_service_1 = require("./yapimonografisi.service");
const yapimonografisi_controller_1 = require("./yapimonografisi.controller");
const yapimonografisi_entity_1 = require("./yapimonografisi.entity");
const typeorm_1 = require("@nestjs/typeorm");
let YapimonografisiModule = class YapimonografisiModule {
};
exports.YapimonografisiModule = YapimonografisiModule;
exports.YapimonografisiModule = YapimonografisiModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([yapimonografisi_entity_1.YapiMonografisiEntity])],
        providers: [yapimonografisi_service_1.YapimonografisiService],
        controllers: [yapimonografisi_controller_1.YapimonografisiController]
    })
], YapimonografisiModule);
//# sourceMappingURL=yapimonografisi.module.js.map