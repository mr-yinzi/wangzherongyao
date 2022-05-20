var toIndex1 = document.getElementsByClassName('btn')[0];
toIndex1.onclick = function () {
    var name = document.querySelector("input[name='name']").value;
    var pwd = document.querySelector("input[name='pwd']").value;
    var pwd2 = document.querySelector("input[name='pwd2']").value;
    if (name == "" || name == null) {
        alert("用户名不能为空");
        return false;
    }
    if (pwd == "" || pwd == null) {
        alert("密码不能为空");
        return false;
    }
    if (pwd != pwd2) {
        alert("两次密码不一致");
        return false;
    } else {
        location.href = '../index.html'
    }
}