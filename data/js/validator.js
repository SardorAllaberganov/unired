$(document).ready(function () {
    $("#innNumber").on("keypress", function () {
        if (this.value.length == 9) return false;
    });

    $("#zipcode").on("keypress", function () {
        if (this.value.length == 6) return false;
    });

    $("#dateOfCreate").focusin(function () {
        $(this).attr("type", "date");
    });
    $("#dateOfCreate").focusout(function () {
        if ($(this).val() != 0) {
        } else {
            $(this).attr("type", "text");
        }
    });

    $("#phone-number")
        .keydown(function (e) {
            var key = e.which || e.charCode || e.keyCode || 0;
            $phone = $(this);

            // Don't let them remove the starting '('
            if ($phone.val().length === 1 && (key === 8 || key === 46)) {
                $phone.val("(");
                return false;
            }
            // Reset if they highlight and type over first char.
            else if ($phone.val().charAt(0) !== "(") {
                $phone.val("(" + String.fromCharCode(e.keyCode) + "");
            }

            // Auto-format- do not expose the mask as the user begins to type
            if (key !== 8 && key !== 9) {
                if ($phone.val().length === 3) {
                    $phone.val($phone.val() + ")");
                }
                if ($phone.val().length === 4) {
                    $phone.val($phone.val() + " ");
                }
                if ($phone.val().length === 8) {
                    $phone.val($phone.val() + "-");
                }
                if ($phone.val().length === 11) {
                    $phone.val($phone.val() + "-");
                }
            }

            // Allow numeric (and tab, backspace, delete) keys only
            return (
                key == 8 ||
                key == 9 ||
                key == 46 ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105)
            );
        })

        .bind("focus click", function () {
            $phone = $(this);

            if ($phone.val().length === 0) {
                $phone.val("(");
            } else {
                var val = $phone.val();
                $phone.val("").val(val); // Ensure cursor remains at the end
            }
        })

        .blur(function () {
            $phone = $(this);

            if ($phone.val() === "(") {
                $phone.val("");
            }
        });

        $("#email").on("keydown", function () {
            var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{1,4})?$/;
            console.log(emailReg.test($(this).val()))
            if(!emailReg.test($(this).val()) && $(this).val() !== ''){
                $("#email").css("border-color", "#e20001")
            }
            else{
                $("#email").css("border-color", "#333")
            }
        });

        $("#email").focusin(function () {
            if ($("#email").val() === '') {
                $("#email").css("border", "1px solid #333")
            }
        });
        
        $("#email").focusout(function () {
            if ($("#email").val() === '') {
                $("#email").css("border", "1px solid transparent")
            }
        });

});
