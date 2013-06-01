$(function(){

        $('#commentForm').validate(
        {
                rules: {
                        name : {
                                required : true,
                                minlength : "2"
                        },
                        passwd : {
                                required: true,
                                minlength: 5
                        },
                        passwd2 : {
                                required: true,
                                minlength: 5,
                                equalTo: passwd
                        },
                        birthday : {
                                required: true,
                                dateISO: true
                        },
                        old : {
                                required: true,
                                number: true
                        },
                        gender : {
                                required : true
                            },
                            email : {
                                required : true,
                                email : true
                       //         remote : {
                       //             url : "same_check.php",
                       //             type : "get",
                       //             data : {
                       //                 email : function() {
                       //                     return $('#cemail').val();
                       //                 }
                       //             }
                       //         }
                        },
                        url: {
                                required : true,
                                url : true
                        }
                },
                errorElement: 'span',
                errorClass: 'help-inline',
                //onkeyup: false,

                highlight: function(element) {
                        $(element).closest('.control-group').removeClass('info').addClass('error');
                },

                success: function(element) {
                        $(element).closest('.control-group').removeClass('error').addClass('info');
                },

                errorPlacement: function (error, element) {
                        if(element.is(':checkbox') || element.is(':radio')) {
                                var controls = element.closest('.controls');
                                if(controls.find(':checkbox,:radio').length > 1) controls.append(error);
                                else error.insertAfter(element.nextAll('.lbl').eq(0));
                        }
                        else error.insertAfter(element);
                },

                submitHandler: function (form) { 
                        form.submit();
                }

        });
});


