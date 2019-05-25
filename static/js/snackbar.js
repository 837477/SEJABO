var snackbar_cnt = 0;
function snackbar(snackbar_value) {
    snackbar_cnt++;
    var temp = "snackbar" + snackbar_cnt;
    $('#board1').append('<div id="snackbar" class=' + temp + '></div>');

    var temp2 = "." + temp;

    $(temp2).text(snackbar_value);
    show_snackbar(temp2);
}

function show_snackbar(temp2) {
    $(temp2).addClass("show");

    setTimeout(function(){
        $(temp2).removeClass("show");
        $(temp2).remove();
    }, 3000);

}


var test_snackbar = document.getElementById("new_page");

test_snackbar.onclick = function() {
    snackbar('새로고침 스낵바 테스트입니다.');
    refleshPage();
}