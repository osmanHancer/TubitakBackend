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
exports.lokasyonsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const lokasyon_entity_1 = require("./lokasyon.entity");
let lokasyonsService = class lokasyonsService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(data) {
        const user = this.usersRepository.create(data);
        await this.usersRepository.save(user);
        return user;
    }
    async read(id) {
        return await this.usersRepository.findOne({ where: { Id: id } });
    }
    async findId(id) {
        return (await this.usersRepository.findOne({ where: { Envanter_Kodu: id } })).Id;
    }
    async findIdEnlemBoylam(enlem, boylam) {
        return (await this.usersRepository.findOne({ where: { Enlem: enlem, Boylam: boylam } }));
    }
    async readAll() {
        return await this.usersRepository.find();
    }
    async delete(id) {
        await this.usersRepository.delete({ Id: id });
        return { deleted: true };
    }
};
exports.lokasyonsService = lokasyonsService;
exports.lokasyonsService = lokasyonsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(lokasyon_entity_1.LokasyonEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], lokasyonsService);
//# sourceMappingURL=lokasyon.service.js.map