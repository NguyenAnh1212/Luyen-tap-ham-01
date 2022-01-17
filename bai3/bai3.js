
function func() {
    let a = Number(document.getElementById("input1").value);
    let b = Number(document.getElementById("input2").value);
    (a>b)?alert("Số "+a +" lớn hơn số "+b):alert("Tổng hai số vừa nhập bằng "+(a+b))
}
