webpackJsonp(["app/js/course-manage/student-expiryday/index"],[function(a,e,r){"use strict";function t(a){return a&&a.__esModule?a:{default:a}}var n=r("b334fd7e4c5a19234db2"),s=t(n),i=$("#expiryday-set-form").parents(".modal"),o=$("#expiryday-set-form"),d=o.validate({rules:{expiryDay:{positive_integer:!0}}});$(".js-save-expiryday-set-form").click(function(){d.form()&&$.post(o.attr("action"),o.serialize(),function(){var a=$("#submit").data("user");(0,s.default)("success",Translator.trans("增加%name%有效期操作成功!",{name:a})),i.modal("hide"),window.location.reload()}).error(function(){var a=$("#submit").data("user");(0,s.default)("danger",Translator.trans("增加%name%有效期操作失败!",{name:a}))})})}]);