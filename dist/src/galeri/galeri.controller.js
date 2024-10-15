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
exports.GaleriController = void 0;
const common_1 = require("@nestjs/common");
const galeri_service_1 = require("./galeri.service");
let GaleriController = class GaleriController {
    constructor(galeriService) {
        this.galeriService = galeriService;
    }
    async readAlllokasyons() {
        const galeri = await this.galeriService.readAll();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'lokasyon fetched successfully',
            galeri
        };
    }
    async readfilter(id) {
        const images = await this.galeriService.readAllId(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'lokasyon fetched successfully',
            images
        };
    }
    async readGaleri(imgname) {
        const galeri = await this.galeriService.read(imgname);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'lokasyon fetched successfully',
            galeri
        };
    }
    async createUser(data) {
        console.log(data);
        await this.galeriService.create(data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User create successfully',
        };
    }
    async deleteImg(imgname) {
        await this.galeriService.delete(imgname);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User create successfully',
        };
    }
};
exports.GaleriController = GaleriController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GaleriController.prototype, "readAlllokasyons", null);
__decorate([
    (0, common_1.Get)("filter/:id"),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GaleriController.prototype, "readfilter", null);
__decorate([
    (0, common_1.Get)(":name"),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GaleriController.prototype, "readGaleri", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GaleriController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)("delete/:imgname"),
    __param(0, (0, common_1.Param)('imgname')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GaleriController.prototype, "deleteImg", null);
exports.GaleriController = GaleriController = __decorate([
    (0, common_1.Controller)('galeri'),
    __metadata("design:paramtypes", [galeri_service_1.GaleriService])
], GaleriController);
//# sourceMappingURL=galeri.controller.js.map