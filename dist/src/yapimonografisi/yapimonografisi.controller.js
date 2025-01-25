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
exports.YapimonografisiController = void 0;
const common_1 = require("@nestjs/common");
const yapimonografisi_service_1 = require("./yapimonografisi.service");
let YapimonografisiController = class YapimonografisiController {
    constructor(YapimonografisiService) {
        this.YapimonografisiService = YapimonografisiService;
    }
    async read(yapi_ismi) {
        const data = await this.YapimonografisiService.read(yapi_ismi);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Users fetched successfully',
            data
        };
    }
    async readAll() {
        const data = await this.YapimonografisiService.readAll();
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'Users fetched successfully',
            data
        };
    }
    async createUser(data) {
        console.log(data);
        await this.YapimonografisiService.create(data);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User create successfully',
        };
    }
    async deleteUser(id) {
        await this.YapimonografisiService.delete(id);
        return {
            statusCode: common_1.HttpStatus.OK,
            message: 'User deleted successfully',
        };
    }
};
exports.YapimonografisiController = YapimonografisiController;
__decorate([
    (0, common_1.Get)(":yapi_ismi"),
    __param(0, (0, common_1.Param)('yapi_ismi')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], YapimonografisiController.prototype, "read", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], YapimonografisiController.prototype, "readAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], YapimonografisiController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], YapimonografisiController.prototype, "deleteUser", null);
exports.YapimonografisiController = YapimonografisiController = __decorate([
    (0, common_1.Controller)('yapimonografisi'),
    __metadata("design:paramtypes", [yapimonografisi_service_1.YapimonografisiService])
], YapimonografisiController);
//# sourceMappingURL=yapimonografisi.controller.js.map