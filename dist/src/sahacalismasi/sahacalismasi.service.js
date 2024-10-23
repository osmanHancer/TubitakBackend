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
exports.SahacalısmasıService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const sahacalismasi_entity_1 = require("./sahacalismasi.entity");
const typeorm_2 = require("@nestjs/typeorm");
let SahacalısmasıService = class SahacalısmasıService {
    constructor(sahaRepository) {
        this.sahaRepository = sahaRepository;
    }
    async create(createSahacalısmasıDto) {
        const user = this.sahaRepository.create(createSahacalısmasıDto);
        await this.sahaRepository.save(user);
        return user;
    }
    async findAll() {
        return await this.sahaRepository.find();
    }
    async findOne(sahaismi) {
        return await this.sahaRepository.findOne({ where: { Sahaismi: sahaismi } });
    }
    update(id, updateSahacalısmasıDto) {
        return `This action updates a #${id} sahacalısması`;
    }
    async remove(sahaismi) {
        await this.sahaRepository.delete({ Sahaismi: sahaismi });
        return { deleted: true };
    }
};
exports.SahacalısmasıService = SahacalısmasıService;
exports.SahacalısmasıService = SahacalısmasıService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(sahacalismasi_entity_1.SahacalısmasıEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SahacalısmasıService);
//# sourceMappingURL=sahacalismasi.service.js.map