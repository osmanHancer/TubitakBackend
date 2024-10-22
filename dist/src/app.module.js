"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const nokta_module_1 = require("./noktalar/nokta.module");
const lokasyon_module_1 = require("./lokasyon/lokasyon.module");
const seyyahs_module_1 = require("./seyyahs/seyyahs.module");
const yapimonografisi_module_1 = require("./yapimonografisi/yapimonografisi.module");
const fileupload_module_1 = require("./fileupload/fileupload.module");
const galeri_module_1 = require("./galeri/galeri.module");
const makale_module_1 = require("./makale/makale.module");
const sahacal_smas__module_1 = require("./sahacal\u0131smas\u0131/sahacal\u0131smas\u0131.module");
const saha_ad_mlar__module_1 = require("./saha-ad\u0131mlar\u0131/saha-ad\u0131mlar\u0131.module");
const seyahatname_module_1 = require("./seyahatname/seyahatname.module");
const arazicalismasi_module_1 = require("./arazicalismasi/arazicalismasi.module");
const allcordinats_module_1 = require("./allcordinats/allcordinats.module");
const mail_module_1 = require("./mail/mail.module");
const user_module_1 = require("./users/user.module");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forRoot({
                "type": "mysql",
                "host": "localhost",
                "port": 3306,
                "username": "root",
                "password": "",
                "database": "test",
                "timezone": "Z",
                "synchronize": true,
                "entities": ["dist/**/*.entity.js"]
            }), nokta_module_1.NoktaModule, auth_module_1.AuthModule, lokasyon_module_1.LokasyonModule, user_module_1.UserModule, seyyahs_module_1.SeyyahsModule, mail_module_1.MailModule, yapimonografisi_module_1.YapimonografisiModule, fileupload_module_1.FileuploadModule, galeri_module_1.GaleriModule, makale_module_1.MakaleModule, seyahatname_module_1.SeyahatnameModule, sahacal_smas__module_1.SahacalısmasıModule, saha_ad_mlar__module_1.SahaAdımlarıModule, arazicalismasi_module_1.ArazicalismasiModule, allcordinats_module_1.AllcordinatsModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map