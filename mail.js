const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

exports.sendMessage = (req, res) => {
    // Honeypot
    if (req.body.address) {
        req.flash("danger", `Has it going? Agent Smith.`);
        res.redirect("/");
        return false;
    }

    const sender = {
        name: req.body.name,
        email: req.body.email,
        msg: req.body.message
    };

    mailOptions = {
        from: "Daisho <noreply@daishokomiyama@gmail.com>",
        to: "daishokomiyama@gmail.com",
        subject: `Message from ${sender.name}`,
        text: `Name: ${sender.name}. Content: ${sender.msg} Email: ${sender.email}`,
        html: `<p>Name: ${sender.name}</p><br><p>Message: ${sender.msg}</p><br><p>Email: ${sender.email}</p>`
    };

    transport.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
        } else {
            req.flash(
                "success",
                `Thank you ${sender.name}, I'll get back to you soon!`
            );
            res.redirect("/");
        }
    });
};
