"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllcordinatsService = void 0;
const common_1 = require("@nestjs/common");
const fs_1 = require("fs");
const path = require("path");
let AllcordinatsService = class AllcordinatsService {
    findAll() {
        return `This action returns all allcordinats`;
    }
    async findOne(id) {
        try {
            const filePath = path.join('uploads', 'allcordinats', id + `.geojson`);
            const fileContent = await fs_1.promises.readFile(filePath, 'utf8');
            const geojson = JSON.parse(fileContent);
            return geojson.features[0].geometry.coordinates;
        }
        catch (error) {
            console.error('Dosya okunurken hata meydana geldi:', error);
            throw new Error('Dosya okunamadı');
        }
    }
};
exports.AllcordinatsService = AllcordinatsService;
exports.AllcordinatsService = AllcordinatsService = __decorate([
    (0, common_1.Injectable)()
], AllcordinatsService);
//# sourceMappingURL=allcordinats.service.js.map