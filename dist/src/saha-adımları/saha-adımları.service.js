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
exports.SahaAdımlarıService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const saha_ad_mlar__entity_1 = require("./saha-ad\u0131mlar\u0131.entity");
let SahaAdımlarıService = class SahaAdımlarıService {
    constructor(sahaRepository) {
        this.sahaRepository = sahaRepository;
    }
    async create(createSahaAdımlarıDto) {
        const user = this.sahaRepository.create(createSahaAdımlarıDto);
        await this.sahaRepository.save(user);
        return user;
    }
    async findAllSaha() {
        {
            const queryBuilder = this.sahaRepository.createQueryBuilder('sahadımları');
            return await queryBuilder
                .select('sahacalismasiadi')
                .distinct(true)
                .getRawMany();
        }
    }
    async findAll(saha_ismi) {
        return await this.sahaRepository.find({ where: { sahacalismasiadi: saha_ismi } });
    }
    findOne(id) {
        return `This action returns a #${id} sahaAdımları`;
    }
    update(id, updateSahaAdımlarıDto) {
        return `This action updates a #${id} sahaAdımları`;
    }
    async remove(deleteSahaAdımlarıDto) {
        await this.sahaRepository.delete({ sahacalismasiadi: deleteSahaAdımlarıDto.sahacalismasiadi, adimNo: deleteSahaAdımlarıDto.adimNo });
        return { deleted: true };
    }
};
exports.SahaAdımlarıService = SahaAdımlarıService;
exports.SahaAdımlarıService = SahaAdımlarıService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(saha_ad_mlar__entity_1.SahaAdımlarıEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], SahaAdımlarıService);
//# sourceMappingURL=saha-ad%C4%B1mlar%C4%B1.service.js.map