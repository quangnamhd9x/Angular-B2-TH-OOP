var Hocsinh = /** @class */ (function () {
    function Hocsinh() {
    }
    //hanhdong
    Hocsinh.prototype.setTien = function (n) {
        if (n >= 0) {
            this.tien = n;
        }
        else {
            this.tien = 0;
        }
    };
    Hocsinh.prototype.getTien = function () {
        return this.tien;
    };
    return Hocsinh;
}());
var Giaovien = /** @class */ (function () {
    function Giaovien(m, h, n) {
        this.maso = m;
        this.hoten = h;
        this.namsinh = n;
    }
    return Giaovien;
}());
var nam = new Hocsinh();
nam.maso = "123";
nam.hoten = "Hoang Nam"; // goi bien de gan tham so
nam.namsinh = 1992;
//nam.tien = -100;
nam.setTien(-500); //set dung de gan gia tri ben tren
var teacher = new Giaovien("007", "Nhu Thao", 1990);
// khai bao truc tiep tham so
console.log(teacher.hoten);
console.log(nam.hoten);
console.log(nam);
console.log(nam.getTien()); // get dung de lay gia tri
