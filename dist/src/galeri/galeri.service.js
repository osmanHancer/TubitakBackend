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
exports.GaleriService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const galeri_entity_1 = require("./galeri.entity");
const typeorm_2 = require("typeorm");
let GaleriService = class GaleriService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(data) {
        const galeri = this.usersRepository.create(data);
        await this.usersRepository.save(galeri);
        return galeri;
    }
    async readAll() {
        return await this.usersRepository.find();
    }
    async read(imgname) {
        return await this.usersRepository.findOne({ where: { imgname: imgname } });
    }
    async readAllId(ıd) {
        return await this.usersRepository.find({ where: { envanterNo: ıd } });
    }
    async delete(imgname) {
        await this.usersRepository.delete(imgname);
    }
};
exports.GaleriService = GaleriService;
exports.GaleriService = GaleriService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(galeri_entity_1.GaleriEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], GaleriService);
//# sourceMappingURL=galeri.service.js.map