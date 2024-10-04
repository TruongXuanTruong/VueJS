
// const nameUser = "Truong Xuan  Truong";
// const classname = "BHBF190092";

// document.getElementById("name").innerHTML = `Tên: ${nameUser}`;
// document.getElementById("classname").innerHTML = `Lớp: ${classname}`;
function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

Vue.createApp({
    data() {
        return {
            nameUser: "Trương Xuân Trường",
            className: "K4428-CNT1"
        }
    }
}).mount("#interpolation")

Vue.createApp({
    data() {
        return {
            ImgUrl: "https://ichef.bbci.co.uk/news/976/cpsprodpb/888C/production/_128065943_gettyimages-1450389057.jpg",
            linkInfo: "https://en.wikipedia.org/wiki/Lionel_Messi"
        }
    }
}).mount("#bind-attribute")

Vue.createApp({
    methods: {
        taosoNut() {
            const mangXucXac = [getRandomInt(1, 6), getRandomInt(1, 6), getRandomInt(1, 6)];
            const soNut = mangXucXac.reduce((tong, xucXac) => tong += xucXac, 0);
            return soNut;
        },
        renderTaiHayXiu() {
            const soNut = this.taosoNut();
            if (soNut > 11) {
                return "Tài"
            } else {
                return "Xỉu"
            }
        }
    }
}).mount("#method")

Vue.createApp({
    data() {
        return {
            message: `<h1> Học VueJs </h1>`
        }
    }
}).mount("#raw-html")

Vue.createApp({
    data() {
        return {
            count: 0,
        };
    },
    methods: {
        handleClickMe(event) {
            console.log(event.target);
            console.log("Click Me");
        },
        handleIncrement(params, event) {
            console.log(event.target);
            this.count = this.count + params;
        },
        handleSubmit() {
            alert("Submit thành công");
        },
        handleLogin() {
            console.log("handleLogin");
        },
    },
}).mount("#event")


Vue.createApp({
    data() {
        return {
            message: "",
        };
    },
    methods: {},
}).mount("#two-way-binding")


Vue.createApp({
    data() {
        return {
            count: 0,
            lastName: 'Trương',
            firstName: 'Xuân Trường',
            fullDataName: ""
        };
    },
    /**
     * watch dùng đẻ xử lý :
     * - theo dõi một data duy nhất
     */
    watch: {
        count(newValue, oldValue) {
            console.log("newValue : ", newValue);
            console.log("oldValue : ", oldValue);
            if (newValue > 10) {
                this.count = 0;
            }
        },
        lastName(newValue) {
            this.fullDataName = newValue + " " + this.firstName;
        },
        firstName(newValue) {
            this.fullDataName = this.lastName + " " + newValue;
        },
    },
    /**
     * computed dùng để xử lý : 
     * - tính toán nhiều data và cho ra một kết quả để hiển thị nên màn hình 
     */
    computed: {
        fullName() {
            console.log("run fullName");
            return this.lastName + " " + this.firstName;
        },
    },
    /**
     * methods dùng để xử lý :
     * - envents
     * - function (Tính năng trên trang web)
     * 
     */
    methods: {
       
        handleIncrement() {
            this.count += 1;
            this.fisrtName = "Minh Hiếu";
        },
    },
}).mount("#computed-and-watchers")

Vue.createApp({
    data() {
        return {
            active: false,
            styleForP: {
                backgroundColor: "red",
                color: "yellow",
                "font-size": "50px"
            },
            styleForText: {
                "text-align": "left",
            },
        };
    },
    methods: {
        handleStyle() {
            this.styleForP.color = "blue";
        },
        handleActive() {
            this.active = true;
        },
    },
}).mount("#styling")


Vue.createApp({
    data() {
        return {
            isLogin: false,
            nameDevice: "",
        };
    },
    methods: {
        handleLogin() {
            this.isLogin = true;
        },
        handleNameDevice(nameDevice) {
            this.nameDevice = nameDevice;
        },
    },
}).mount("#directive")

Vue.createApp({
    data() {
        return {
            championsLeague: [{
                name: "Cocacola",
                image: 'https://th.bing.com/th/id/OIP.amD-fqUHOeQ734dEz6--7wHaHa?w=154&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
            },
            {
                name: "Pepsi",
                image: 'https://th.bing.com/th/id/OIP.ALzuTN41RTso5F0c8kb7cAHaKS?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
            },
            {
                name: "Monters Energy",
                image: 'https://th.bing.com/th/id/OIP.RBC413olqI95sa_V2XBm0wHaHa?w=123&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
            },
            {
                name: "Sting",
                image: 'https://th.bing.com/th/id/OIP.sb6F614uyXfg73zTmar5kQHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
            }],
        };
    },
}).mount("#list-rendering")
