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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YapimonografisiService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const yapimonografisi_entity_1 = require("./yapimonografisi.entity");
let YapimonografisiService = class YapimonografisiService {
    constructor(yapimonografisiRepository) {
        this.yapimonografisiRepository = yapimonografisiRepository;
    }
    async read(yapi_ismi) {
        return await this.yapimonografisiRepository.findOne({ where: { yapi_ismi: yapi_ismi } });
    }
    async readAll() {
        return await this.yapimonografisiRepository.find();
    }
    async create(data) {
        const yapimonografisi = this.yapimonografisiRepository.create(data);
        await this.yapimonografisiRepository.save(data);
        return yapimonografisi;
    }
};
exports.YapimonografisiService = YapimonografisiService;
exports.YapimonografisiService = YapimonografisiService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(yapimonografisi_entity_1.YapiMonografisiEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], YapimonografisiService);
//# sourceMappingURL=yapimonografisi.service.js.map