"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var routers_1 = __importDefault(require("./routers"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = require("./config/config");
var dotenv_1 = __importDefault(require("dotenv"));
var cors = require('cors');
var app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use((0, morgan_1.default)('tiny'));
app.use(express_1.default.static('public'));
app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(undefined, {
    swaggerOptions: {
        url: '/swagger.json',
    },
}));
app.use(routers_1.default);
mongoose_1.default
    .connect("" + config_1.URL + config_1.DATABASE_NAME, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(function () {
    app.listen(config_1.PORT, function () {
        console.log('Server ve database aktif. ', config_1.PORT);
    });
})
    .catch(function (hata) {
    console.log("" + hata);
});
