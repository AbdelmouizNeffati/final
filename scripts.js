// chatgpt assisted code
    document.addEventListener("DOMContentLoaded", function () {
        const canvas = document.createElement("canvas");
        document.body.insertBefore(canvas, document.body.firstChild);
        canvas.style.position = "fixed";
        canvas.style.top = 0;
        canvas.style.left = 0;
        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.style.zIndex = "-1";
        
        const ctx = canvas.getContext("2d");
        const particles = [];
        const particleCount = 100;

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        function resizeCanvas() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 3 + 1;
                this.speedX = Math.random() * 2 - 1;
                this.speedY = Math.random() * 2 - 1;
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }
            draw() {
                ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.closePath();
                ctx.fill();
            }
        }

        function initParticles() {
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        }

        function animateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach((particle) => {
                particle.update();
                particle.draw();
            });
            requestAnimationFrame(animateParticles);
        }

        initParticles();
        animateParticles();
    });


  
    window.addEventListener("load", function() {
        const audio = document.getElementById("backgroundMusic");

        // Check if the browser allows autoplay
        audio.play().catch(() => {
            console.log("Autoplay prevented; adding play control.");
            createAudioControl();
        });
        
        function createAudioControl() {
            const controlButton = document.createElement("button");
            controlButton.innerText = "Play Music";
            controlButton.style.position = "fixed";
            controlButton.style.bottom = "20px";
            controlButton.style.right = "20px";
            controlButton.style.padding = "10px 15px";
            controlButton.style.backgroundColor = "#007bff";
            controlButton.style.color = "#fff";
            controlButton.style.border = "none";
            controlButton.style.cursor = "pointer";

            document.body.appendChild(controlButton);

            controlButton.addEventListener("click", function() {
                if (audio.paused) {
                    audio.play();
                    controlButton.innerText = "Pause Music";
                } else {
                    audio.pause();
                    controlButton.innerText = "Play Music";
                }
            });
        }
    });

