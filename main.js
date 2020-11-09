var app = new Vue(
    {
        el: '#root',
        data: {
            img_index: 0,
            imgs: [
                "https://www.rockandmore.net/wp-content/uploads/2019/06/GettyImages-692380400-920x584.jpg",
                "https://i.pinimg.com/originals/f4/a1/61/f4a161ae5dadc1c46f3c5c9b757fa6a5.jpg",
                "https://images1.phoenixnewtimes.com/imager/u/745xauto/10264873/innings_2018_day_1_bands_kbecker-28.jpg",
                "https://i.ytimg.com/vi/enk_cB0jGbI/maxresdefault.jpg"
            ]
        },
        methods: {
            img_forward(){

                this.img_index += 1;

                if(this.img_index >= this.imgs.length) {

                    this.img_index = 0;

                }

            },
            img_back(){

                this.img_index -= 1;

                if(this.img_index < 0) {
                    this.img_index = this.imgs.length - 1;
                }

            }
        },
        mounted() {

            setInterval(() => {

                if(this.img_index == this.imgs.length - 1) {

                    this.img_index = 0;

                }else{
                    this.img_index += 1;
                }

            }, 3000);

        }
    }
);
