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
exports.SeyyahsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const seyyahs_entity_1 = require("./seyyahs.entity");
let SeyyahsService = class SeyyahsService {
    constructor(seyyahsRepository) {
        this.seyyahsRepository = seyyahsRepository;
    }
    async readAll() {
        return await this.seyyahsRepository.find();
    }
    async read(id) {
        return await this.seyyahsRepository.findOne({ where: { id: id } });
    }
    async update(id, data) {
        await this.seyyahsRepository.update({ id }, data);
        return await this.seyyahsRepository.findOne({ where: { id: id, name: data.name } });
    }
    async create(data) {
        const user = this.seyyahsRepository.create(data);
        await this.seyyahsRepository.save(user);
        return user;
    }
    async delete(id) {
        await this.seyyahsRepository.delete({ id });
        return { deleted: true };
    }
};
exports.SeyyahsService = SeyyahsService;
exports.SeyyahsService = SeyyahsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(seyyahs_entity_1.SeyyahsEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SeyyahsService);
//# sourceMappingURL=seyyahs.service.js.map