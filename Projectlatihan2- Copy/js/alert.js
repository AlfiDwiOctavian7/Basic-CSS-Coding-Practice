$(document).ready(function () {
    $("#form-email").submit(function (e) {
        e.preventDefault();

        // menampilkan alert
        $("#divAlert").removeClass("d-none");
        const email = $("#email").val();
        $("#alertText").html("Terima kasih <b>" + email + "</b> Link sudah dapat diliat");
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // close alert
        $("#btnClose").click(function () {
            $("#divAlert").addClass("d-none");
        });
    });

    // ganti gambar

    // click
    $(".card").click(function (e) {

        // nampilkan gambar

        const imgSrc = $("img", this).attr("src");
        $("#mainImg").attr("src", imgSrc);
        window.scrollTo({ top: 0, behavior: 'smooth' });

    })

    // form siping
    $("#formShipping").submit(function (e) {
        e.preventDefault();

        // $(this).addClass("d-none");

        const inputFirstname = $("#firstname").val();
        const inputLastname = $("#lastname").val();
        const fullName = inputFirstname + " " + inputLastname;
        const addres = $("#addres", this).val();

        $("#formMain").addClass("d-none");
        $("#klik").removeClass("d-none");

        $("h4", "#klik").text("Terimakasih..... " + fullName);
        $("p", "#klik").text("Paket akan dikirim ke " + addres + " Secepatnya");
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    $("#klik").click(function (e) {
        e.preventDefault();
        window.location.href = "luxSpace1.html";

    });

})