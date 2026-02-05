class ParticleEmitter{
    constructor(position, direction, size, spawnInterval, amount, velocity, simulation = null){
        this.position = position;
        this.direction = direction;
        this.size = size;
        this.spawnInterval = spawnInterval;
        this.amount = amount;
        this.velocity = velocity;
        this.simulation = simulation;

        this.time = 0;
        // maximum angular spread (radians) for emitted particle directions
        this.spread = 0.3;
        
        // Cloud image positioning
        this.cloudOffsetX = 0;  // horizontal offset from emitter center
        this.cloudOffsetY = 50;  // vertical offset from emitter center
        
        // Load cloud image
        this.cloudImage = new Image();
        this.cloudImage.src = "img/cloud.png";
    }

    spawn(dt, particles){
        let offset = (this.size*2) / this.amount;
        this.time += dt;

        if(this.time > this.spawnInterval){
            this.time = 0;
            
            for(let i=0; i<this.amount; i++){
                let normal = this.direction.GetNormal();
                normal.Normalize();
                let plane = Scale(normal, -this.size);
                let planeStart = Add(this.position, plane);
                let position = Add(planeStart, Scale(normal, offset * i));

                let particle = new Particle(position);
                let normalizedDir = this.direction.Cpy();
                normalizedDir.Normalize();

                // Randomize color if enabled in simulation
                if(this.simulation && this.simulation.randomizeColor){
                    particle.color = Math.random() < 0.5 ? this.simulation.color1 : this.simulation.color2;
                }

                // randomize direction by rotating normalizedDir by a small random angle
                let angleOffset = (Math.random() - 0.5) * this.spread; // +/- spread/2
                const cosA = Math.cos(angleOffset);
                const sinA = Math.sin(angleOffset);
                const rotatedX = normalizedDir.x * cosA - normalizedDir.y * sinA;
                const rotatedY = normalizedDir.x * sinA + normalizedDir.y * cosA;
                const randomizedDir = new Vector2(rotatedX, rotatedY);

                particle.velocity = Scale(randomizedDir, this.velocity);
                particles.push(particle);
            }
        }
    }

    rotate(angleInRadians){
        const cosAngle = Math.cos(angleInRadians);
        const sinAngle = Math.sin(angleInRadians);
        const rotatedX = this.direction.x * cosAngle - this.direction.y * sinAngle;
        const rotatedY = this.direction.x * sinAngle + this.direction.y * cosAngle;
        this.direction.x = rotatedX;
        this.direction.y = rotatedY;
    }

    move(delta){
        this.position = Add(this.position, delta);
    }

    draw(){
        let dir = this.direction.Cpy();
        dir.Normalize();
        //DrawUtils.drawLine(this.position, Add(this.position, Scale(dir, 30)),"orange", 5);

        let normal = dir.GetNormal();
        let plane = Scale(normal, -this.size);
        let planeStart = Add(this.position, plane);
        let planeEnd = Sub(this.position, plane);

        //DrawUtils.drawLine(planeStart, planeEnd, "orange");
        let offset = (this.size*2) / this.amount;
        for(let i=0; i<this.amount; i++){
            let circlePos = Add(planeStart, Scale(normal, offset * i));
            DrawUtils.drawPoint(circlePos, 5, "orange");
        }
        
        // Draw cloud image at emitter position
        if(this.cloudImage.complete && this.cloudImage.naturalHeight !== 0){
            // Draw centered on emitter position (subtract half width/height)
            // Apply cloudOffsetX and cloudOffsetY
            const ctx = document.getElementById("canvas").getContext("2d");
            ctx.drawImage(
                this.cloudImage,
                this.position.x + this.cloudOffsetX - this.cloudImage.width / 2,
                this.position.y + this.cloudOffsetY - this.cloudImage.height / 2
            );
        }

    }
}