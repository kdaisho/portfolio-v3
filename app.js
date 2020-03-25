const express = require("express");
const flash = require("connect-flash");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const path = require("path");
const expressHandlebars = require("express-handlebars");
const routes = require("./routes");
const helpers = require("./helpers");
const data = require("./data");

const app = express();

const ehbs = expressHandlebars.create({
    extname: ".hbs",
    defaultLayout: "main",
    helpers: {
        getIcon: name => helpers.icon(name),
        getYear: () => helpers.getYear()
    }
});

app.engine(".hbs", ehbs.engine);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", ".hbs");

app.use(
    express.static(path.join(__dirname, "public"), {
        etag: true,
        lastModified: false,
        setHeaders: (res, path) => {
            if (path.endsWith(".html")) {
                res.setHeader("Cache-Control", "no-cache");
            } else {
                res.setHeader("Cache-Control", "max-age=31536000");
            }
        }
    })
);

app.use(express.json());
app.use(
    express.urlencoded({
        extended: true
    })
);
app.use(cookieParser("wave_check_dish_mostly"));
app.use(session({ cookie: { maxAge: 60000 } }));
app.use(flash());

app.use((req, res, next) => {
    res.locals.data = data;
    res.locals.flashes = req.flash();
    next();
});

app.use("/", routes);

module.exports = app;
