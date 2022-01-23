function clickfunction() {
    var checkBox1 = document.getElementById("wl");
    var checkBox2 = document.getElementById("ml");
    var checkBox3 = document.getElementById("nu");
    var checkBox4 = document.getElementById("zs");

    var wielkie = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var male = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var liczby = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var znaki = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", ",", "<", ">", ".", "/", "?", ";", ":", "'", '"', "[", "]", "{", "}"];




    if (checkBox1.checked == true) {
        if (checkBox2.checked == true) {
            if (checkBox3.checked == true) {
                if (checkBox4.checked == true) {
                    var k = wielkie.concat(male, liczby, znaki);
                    //1,2,3,4
                } else {
                    var k = wielkie.concat(male, liczby);
                    //1,2,3
                }

            } else {
                if (checkBox4.checked == true) {
                    var k = wielkie.concat(male, znaki);
                    //1,2,4
                } else {
                    var k = wielkie.concat(male);
                    //1,2
                }
            }
        } else {
            if (checkBox3.checked == true) {
                if (checkBox4.checked == true) {
                    var k = wielkie.concat(liczby, znaki);
                    //1,3,4
                } else {
                    var k = wielkie.concat(liczby);
                    //1,3
                }
            } else {
                if (checkBox4.checked == true) {
                    var k = wielkie.concat(znaki);
                    //1,4
                } else {
                    var k = wielkie;
                    //1
                }
            }
        }
    } else {
        if (checkBox2.checked == true) {
            if (checkBox3.checked == true) {
                if (checkBox4.checked == true) {
                    var k = male.concat(liczby, znaki);
                    //2,3,4
                } else {
                    var k = male.concat(liczby);
                    //2,3
                }
            } else {

                if (checkBox4.checked == true) {
                    var k = liczby.concat(znaki);
                    //2,4

                } else {
                    var k = male;
                    //2
                }
            }
        } else {
            if (checkBox3.checked == true) {
                if (checkBox4.checked == true) {
                    var k = liczby.concat(znaki);
                    //3,4
                } else {
                    var k = liczby;
                    //3

                }
            }
            if (checkBox4.checked == true) {
                var k = znaki;
                //4
            } else {

            }

        }
    }

    let text = "";
    var moze = document.getElementById('iz');
    var kuj = parseInt(moze.value);

    for (let i = 0; i < kuj; i++) {

        text += k[Math.floor(Math.random() * k.length)]; + i;
    }

    document.getElementById("dupa").innerHTML = text;
}