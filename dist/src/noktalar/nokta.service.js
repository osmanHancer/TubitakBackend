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
exports.NoktaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const nokta_entity_1 = require("./nokta.entity");
let NoktaService = class NoktaService {
    constructor(usersRepository) {
        this.usersRepository = usersRepository;
    }
    async create(data) {
        const user = this.usersRepository.create(data);
        await this.usersRepository.save(user);
        return user;
    }
    async readAllseyyah(seyahname_kodu) {
        return await this.usersRepository.find({ where: { seyahname_kodu: seyahname_kodu } });
    }
    async findAlintilar(enlem, boylam) {
        return await this.usersRepository.find({ where: { enlem: enlem, boylam: boylam } });
    }
    async readAll() {
        return await this.usersRepository.find();
    }
    async readSeyyah(seyahname_kodu, id) {
        return await this.usersRepository.find({ where: { seyahname_kodu: seyahname_kodu, id: id } });
    }
    async update(id, SeyyahKodu, data) {
        await this.usersRepository.update({ id: id, seyahname_kodu: SeyyahKodu }, data);
        return await this.usersRepository.findOne({ where: { id: id, seyahname_kodu: SeyyahKodu } });
    }
    async delete(id, kod) {
        console.log(id, kod);
        await this.usersRepository.delete({ id: id, seyahname_kodu: kod });
        return { deleted: true };
    }
    async getTop10Locations() {
        return this.usersRepository.query(`
      SELECT 
        allpoint.enlem, 
        allpoint.boylam, 
        allpoint.mekanin_gunumuzdeki_adi,
        COUNT(*) AS kullanim_sayisi
      FROM 
        allpoint
      WHERE
        allpoint.enlem != 0 
        AND allpoint.boylam != 0
      GROUP BY 
        allpoint.enlem, 
        allpoint.boylam
      ORDER BY 
        kullanim_sayisi DESC
      LIMIT 10;
    `);
    }
    async getTop10Seyyah() {
        return this.usersRepository.query(`
    SELECT 
      allpoint.yazar,
      COUNT(*) AS kullanim_sayisi
    FROM 
      allpoint
    GROUP BY 
     allpoint.yazar
    ORDER BY 
     kullanim_sayisi DESC
    LIMIT 10;
    `);
    }
};
exports.NoktaService = NoktaService;
exports.NoktaService = NoktaService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(nokta_entity_1.NoktaEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], NoktaService);
//# sourceMappingURL=nokta.service.js.map