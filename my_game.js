let random = [];

        function getRandomIntUpTo(max) {
            return Math.floor(Math.random() * (max + 1));
        }

        while (random.length != 4) {
            let a = getRandomIntUpTo(24);
            if (!random.includes(a)) {
                random.push(a + 1);
            }
        }

        console.log(random);

        function changeImage(id) {
            const element = document.getElementById(id);
            element.src = "https://ak1.picdn.net/shutterstock/videos/30860491/thumb/1.jpg";

            if (random.includes(parseInt(id))) {
                element.src = "http://thumbs.dreamstime.com/z/red-bomb-12527957.jpg";
                gameover();
            }
        }
        function overchangeImage(id) {
            const element = document.getElementById(id);
            element.src = "https://ak1.picdn.net/shutterstock/videos/30860491/thumb/1.jpg";

            if (random.includes(parseInt(id))) {
                element.src = "http://thumbs.dreamstime.com/z/red-bomb-12527957.jpg";
            }
        }

        show_all = () => {
            for (let i = 1; i < 26; i++) {

                overchangeImage(i);
            }
        }

        function gameover() {
            console.log("game over");
            document.getElementById("text").style.opacity = ".6";
            document.getElementById("over").style.height = "800px";
            document.getElementById("over").style.width = "800px";
            show_all();
        }