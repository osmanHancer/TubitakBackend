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
exports.SeyyahsController = void 0;
const common_1 = require("@nestjs/common");
const seyyahs_service_1 = require("./seyyahs.service");
const seyyahs_dto_1 = require("./seyyahs.dto");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
let SeyyahsController = class SeyyahsController {
    constructor(seyyahsService) {
        this.seyyahsService = seyyahsService;
    }
    async readAllUsers() {
        const users = await this.seyyahsService.readAll();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Users fetched successfully',
            users
        };
    }
    async readUser(id) {
        const lokasyon = await this.seyyahsService.read(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User fetched successfully',
            lokasyon
        };
    }
    async deleteUser(id) {
        await this.seyyahsService.delete(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User delete successfully',
        };
    }
    async createUser(data) {
        await this.seyyahsService.create(data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User create successfully',
        };
    }
};
exports.SeyyahsController = SeyyahsController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeyyahsController.prototype, "readAllUsers", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SeyyahsController.prototype, "readUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)("delete/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SeyyahsController.prototype, "deleteUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [seyyahs_dto_1.SeyyahDTO]),
    __metadata("design:returntype", Promise)
], SeyyahsController.prototype, "createUser", null);
exports.SeyyahsController = SeyyahsController = __decorate([
    (0, common_1.Controller)('seyyahs'),
    __metadata("design:paramtypes", [seyyahs_service_1.SeyyahsService])
], SeyyahsController);
//# sourceMappingURL=seyyahs.controller.js.map