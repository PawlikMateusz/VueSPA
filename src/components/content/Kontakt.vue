<template>
    <div class="container" style="font-family: 'Krub', sans-serif;">
        <div>
            <div class="row">
                <div class="col-md-12">
                    <h1>Kontakt</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-md-6 centerContent kontakt">
                    <h4>
                        <img class="contactIcon" src="../../assets/images/phone.png" alt="">Telefon
                    </h4>
                    <h5>
                        <strong>506 991 033</strong>
                    </h5>
                    <br>
                    <h4>
                        <img class="contactIcon" src="../../assets/images/email.png" alt="">Email
                    </h4>
                    <h5>
                        <strong>
                            <a href="mailto:damiansawio@gmail.com">damiansawio@gmail.com</a>
                        </strong>
                    </h5>
                    <a href="https://www.facebook.com/sawioofficial/">
                        <img src="../../assets/images/facebook.png" alt="" class="socialIcon">
                    </a>
                    <a
                        href="https://www.youtube.com/channel/UCiM0WiZd4z8KexLObVaIzAA/videos?view_as=subscriber"
                    >
                        <img src="../../assets/images/youtube.png" alt="" class="socialIcon">
                    </a>
                    <a href="https://soundcloud.com/sawiomusic">
                        <img src="../../assets/images/soundcloud.png" alt="" class="socialIcon">
                    </a>
                </div>
                <div class="col-md-6 centerContent kontakt">
                    <h2>Wyślij wiadomość</h2>
                    <form id="contact-form" method="post" action="sendEmail.php" role="form">
                        <div class="messages"></div>
                        <div class="controls">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="form_name">Imię</label>
                                        <input
                                            id="form_name"
                                            type="text"
                                            name="name"
                                            class="form-control"
                                            placeholder="Wprowadź swoje Imię"
                                            required="required"
                                            data-error="Firstname is required."
                                        >
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="form_email">Email</label>
                                        <input
                                            id="form_email"
                                            type="email"
                                            name="email"
                                            class="form-control"
                                            placeholder="Wprowadź swój email"
                                            required="required"
                                            data-error="Valid email is required."
                                        >
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="form_email">Telefon kontaktowy</label>
                                        <input
                                            id="form_email"
                                            type="phone"
                                            name="phone"
                                            class="form-control"
                                            placeholder="Numer kontaktowy"
                                            required="required"
                                            data-error="Valid email is required."
                                        >
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="form_message">Wiadomość</label>
                                        <textarea
                                            id="form_message"
                                            name="message"
                                            class="form-control"
                                            placeholder="Wiadomość do DJ SAWIO"
                                            rows="4"
                                            required="required"
                                            data-error="Please, leave us a message."
                                        ></textarea>
                                        <div class="help-block with-errors"></div>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <input
                                        type="submit"
                                        class="btn btn-success btn-send"
                                        value="Wyślij wiadomość"
                                    >
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
    color: white;
    margin-top: 5vh;
    text-align: center;
    padding-bottom: 10vh;
}
h1 {
    font-weight: bold;
}
.kontakt {
    margin-top: 20px;
}
.centerContent {
    text-align: center;
}
.socialIcon {
    margin-top: 3vh;
    max-height: 40px;
    width: auto;
    margin-right: 10px;
    margin-left: 10px;
}
.icon {
    max-height: 20px;
    width: auto;
}
.contactIcon {
    max-height: 30px;
    margin-right: 15px;
    width: auto;
}
</style>
