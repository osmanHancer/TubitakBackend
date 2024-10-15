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
exports.lokasyonsController = void 0;
const common_1 = require("@nestjs/common");
const lokasyon_service_1 = require("./lokasyon.service");
const lokasyon_dto_1 = require("./lokasyon.dto");
let lokasyonsController = class lokasyonsController {
    constructor(lokasyonService) {
        this.lokasyonService = lokasyonService;
    }
    async createUser(data) {
        console.log(data);
        const lokasyon = await this.lokasyonService.create(data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'lokasyon created successfully',
            lokasyon
        };
    }
    async readAlllokasyons() {
        const lokasyon = await this.lokasyonService.readAll();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'lokasyon fetched successfully',
            lokasyon
        };
    }
    async readLokasyons(id) {
        const lokasyon = await this.lokasyonService.read(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'lokasyon fetched successfully',
            lokasyon
        };
    }
    async findLokasyon(id) {
        const Id = await this.lokasyonService.findId(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'lokasyon fetched successfully',
            Id
        };
    }
    async findLokasyonEnlemBoylam(enlem, boylam) {
        const result = await this.lokasyonService.findIdEnlemBoylam(enlem, boylam);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'lokasyon fetched successfully',
            result
        };
    }
    async deleteUser(id) {
        await this.lokasyonService.delete(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User deleted successfully',
        };
    }
};
exports.lokasyonsController = lokasyonsController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [lokasyon_dto_1.LokasyonDTO]),
    __metadata("design:returntype", Promise)
], lokasyonsController.prototype, "createUser", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], lokasyonsController.prototype, "readAlllokasyons", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], lokasyonsController.prototype, "readLokasyons", null);
__decorate([
    (0, common_1.Get)("getId/:envanter_kod"),
    __param(0, (0, common_1.Param)('envanter_kod')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], lokasyonsController.prototype, "findLokasyon", null);
__decorate([
    (0, common_1.Get)("getId/:enlem/:boylam"),
    __param(0, (0, common_1.Param)('enlem')),
    __param(1, (0, common_1.Param)('boylam')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], lokasyonsController.prototype, "findLokasyonEnlemBoylam", null);
__decorate([
    (0, common_1.Post)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], lokasyonsController.prototype, "deleteUser", null);
exports.lokasyonsController = lokasyonsController = __decorate([
    (0, common_1.Controller)('lokasyon'),
    __metadata("design:paramtypes", [lokasyon_service_1.lokasyonsService])
], lokasyonsController);
//# sourceMappingURL=lokasyon.controller.js.map