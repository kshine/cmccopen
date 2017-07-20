$(document).ready(function() {

    $("#login-form").validate({
        onfocusout: function(element){
            $(element).valid();
        },
        errorElement : 'span',
        errorClass : 'help-block',

        rules : {
            username : {
                required : true,
            },
            password : {
                required : true,

            }
        },
        messages : {
            username : {
                required : "请输入用户名",

            },
            password : {
                required : "请输入密码",
            }
        },
        //自定义错误消息放到哪里
        errorPlacement : function(error, element) {
            element.next().remove();//删除显示图标
            element.after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
            element.closest('.form-group').append(error);//显示错误消息提示
        },
        //给未通过验证的元素进行处理
        highlight : function(element) {
            $(element).closest('.form-group').addClass('has-error has-feedback');
        },
        //验证通过的处理
        success : function(label) {
            var el=label.closest('.form-group').find("input");
            el.next().remove();//与errorPlacement相似
            el.after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
            label.closest('.form-group').removeClass('has-error').addClass("has-feedback has-success");
            label.remove();
        },

    });
});