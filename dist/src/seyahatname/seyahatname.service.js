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
exports.SeyahatnameService = void 0;
const common_1 = require("@nestjs/common");
const seyahatname_entity_1 = require("./seyahatname.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let SeyahatnameService = class SeyahatnameService {
    constructor(seyahatnameRepository) {
        this.seyahatnameRepository = seyahatnameRepository;
    }
    async create(data) {
        const user = this.seyahatnameRepository.create(data);
        await this.seyahatnameRepository.save(user);
        return user;
    }
    async findAll() {
        return await this.seyahatnameRepository.find();
    }
    async findOne(id) {
        return await this.seyahatnameRepository.findOne({ where: { Id: id } });
    }
    update(id, updateSeyahatnameDto) {
        return `This action updates a #${id} seyahatname`;
    }
    async remove(id) {
        await this.seyahatnameRepository.delete({ Id: id });
    }
};
exports.SeyahatnameService = SeyahatnameService;
exports.SeyahatnameService = SeyahatnameService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(seyahatname_entity_1.SeyahatnameEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SeyahatnameService);
//# sourceMappingURL=seyahatname.service.js.map