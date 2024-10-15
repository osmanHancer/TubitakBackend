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
exports.SeyahatnameController = void 0;
const common_1 = require("@nestjs/common");
const seyahatname_service_1 = require("./seyahatname.service");
const create_seyahatname_dto_1 = require("./create-seyahatname.dto");
let SeyahatnameController = class SeyahatnameController {
    constructor(seyahatnameService) {
        this.seyahatnameService = seyahatnameService;
    }
    create(createSeyahatnameDto) {
        return this.seyahatnameService.create(createSeyahatnameDto);
    }
    async findAll() {
        const users = await this.seyahatnameService.findAll();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Users fetched successfully',
            users
        };
    }
    findOne(id) {
        return this.seyahatnameService.findOne(+id);
    }
    update(id, updateSeyahatnameDto) {
        return this.seyahatnameService.update(+id, updateSeyahatnameDto);
    }
    remove(id) {
        console.log(id);
        return this.seyahatnameService.remove(+id);
    }
};
exports.SeyahatnameController = SeyahatnameController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_seyahatname_dto_1.CreateSeyahatnameDto]),
    __metadata("design:returntype", void 0)
], SeyahatnameController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SeyahatnameController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeyahatnameController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_seyahatname_dto_1.CreateSeyahatnameDto]),
    __metadata("design:returntype", void 0)
], SeyahatnameController.prototype, "update", null);
__decorate([
    (0, common_1.Post)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeyahatnameController.prototype, "remove", null);
exports.SeyahatnameController = SeyahatnameController = __decorate([
    (0, common_1.Controller)('seyahatname'),
    __metadata("design:paramtypes", [seyahatname_service_1.SeyahatnameService])
], SeyahatnameController);
//# sourceMappingURL=seyahatname.controller.js.map