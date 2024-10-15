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
exports.NoktaController = void 0;
const common_1 = require("@nestjs/common");
const nokta_service_1 = require("./nokta.service");
const nokta_dto_1 = require("./nokta.dto");
let NoktaController = class NoktaController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async getTop10Locations() {
        return this.usersService.getTop10Locations();
    }
    async getTop10Seyyahs() {
        return this.usersService.getTop10Seyyah();
    }
    async readSeyyah(seyahname_kodu, id) {
        const data = await this.usersService.readSeyyah(seyahname_kodu, id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User fetched successfully',
            data,
        };
    }
    async readAllSeyyah(seyahname_kodu, id) {
        const data = await this.usersService.readAllseyyah(seyahname_kodu);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User fetched successfully',
            data,
        };
    }
    async findAlintilar(enlem, boylam) {
        const Id = await this.usersService.findAlintilar(enlem, boylam);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'lokasyon fetched successfully',
            Id
        };
    }
    async readAllUsers() {
        const users = await this.usersService.readAll();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Users fetched successfully',
            users
        };
    }
    async uppdateUser(data) {
        await this.usersService.create(data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User updated successfully',
        };
    }
    async deleteUser(id, kod) {
        await this.usersService.delete(id, kod);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User deleted successfully',
        };
    }
};
exports.NoktaController = NoktaController;
__decorate([
    (0, common_1.Get)('top-locations'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoktaController.prototype, "getTop10Locations", null);
__decorate([
    (0, common_1.Get)('top-seyyah'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoktaController.prototype, "getTop10Seyyahs", null);
__decorate([
    (0, common_1.Get)(':seyahname_kodu/:id'),
    __param(0, (0, common_1.Param)('seyahname_kodu')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], NoktaController.prototype, "readSeyyah", null);
__decorate([
    (0, common_1.Get)(':seyahname_kodu'),
    __param(0, (0, common_1.Param)('seyahname_kodu')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number]),
    __metadata("design:returntype", Promise)
], NoktaController.prototype, "readAllSeyyah", null);
__decorate([
    (0, common_1.Get)("alinti/:enlem/:boylam"),
    __param(0, (0, common_1.Param)('enlem')),
    __param(1, (0, common_1.Param)('boylam')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], NoktaController.prototype, "findAlintilar", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NoktaController.prototype, "readAllUsers", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nokta_dto_1.NoktaDTO]),
    __metadata("design:returntype", Promise)
], NoktaController.prototype, "uppdateUser", null);
__decorate([
    (0, common_1.Post)('/delete/:id/:kod'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('kod')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", Promise)
], NoktaController.prototype, "deleteUser", null);
exports.NoktaController = NoktaController = __decorate([
    (0, common_1.Controller)('noktalar'),
    __metadata("design:paramtypes", [nokta_service_1.NoktaService])
], NoktaController);
//# sourceMappingURL=nokta.controller.js.map