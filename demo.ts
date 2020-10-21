class Hocsinh{     //khai bao khong contructor
    //thuoc tinh

    maso:string;
    public hoten:string;
    public namsinh:number;
    private tien:number;    //tien > 0;    khong nhap gi mac dinh la"public"


    //hanhdong
    setTien(n:number){   // dung set co the truy cap vao private
        if (n >= 0){
            this.tien = n;
        } else {
            this.tien = 0;
        }
    }
    getTien(){
        return this.tien;
    }
}

class Giaovien{    //khai bao co contructor
    //thuoc tinh

    maso:string;
    hoten:string;
    namsinh:number;

    constructor(m:string, h:string, n:number) {
        this.maso = m;
        this.hoten = h;
        this.namsinh = n;
    }

    //hanhdong
}

var nam:Hocsinh = new Hocsinh();

nam.maso = "123";
nam.hoten = "Hoang Nam";  // goi bien de gan tham so
nam.namsinh = 1992;
//nam.tien = -100;
nam.setTien(-500);   //set dung de gan gia tri ben tren

var teacher:Giaovien = new Giaovien("007", "Nhu Thao", 1990 );
// khai bao truc tiep tham so

console.log(teacher.hoten);
console.log(nam.hoten);
console.log(nam);
console.log(nam.getTien());    // get dung de lay gia tri
