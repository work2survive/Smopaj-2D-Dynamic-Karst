class Simulation{
    constructor(){
        this.particles = [];
        this.particleEmitters = [];
        this.shapes = [];
        this.springs = new Map();

        this.showShapes = false;

        // Particle color randomization
        this.randomizeColor = true;
        this.color1 = "#39ccb8ff";
        this.color2 = "#ff6b9dff";


        this.AMOUNT_PARTICLES = 100;
        this.VELOCITY_DAMPING = 0.99;
        this.GRAVITY = new Vector2(0,2);
        this.REST_DENSITY = -5;
        this.K_NEAR = 3;
        this.K = 0.5;
        this.INTERACTION_RADIUS = 7; // chances to make clumbs of particles

        // viscouse parameters
        this.SIGMA = 0.1;
        this.BETA = 0.1;

        // plasticity parameters
        this.GAMMA = 0.1; //0.1
        this.PLASTICITY = 0.9;  //0.9
        this.SPRING_STIFFNESS = 20;


        this.fluidHashGrid = new FluidHashGrid(this.INTERACTION_RADIUS);
        //this.instantiateParticles();
        this.fluidHashGrid.initialize(this.particles);


        this.emitter = this.createParticleEmitter(
            new Vector2(960, 135), // position - center of top quarter
            new Vector2(0,1), // direction (0.01,0.1)
            100, // size 10
            0.4 ,  // spawn interval
            0, // amount - starts at 0, activated on first mouse press
            2  // speed 2
        );

        //let circle = new Circle(new Vector2(500,700), 100, "orange");
        let polygonV1 = new Polygon([
            new Vector2(0,300), 
            new Vector2(320,460),
            new Vector2(195,890),
            new Vector2(0,890)],"red");
        
        let polygonV2 = new Polygon([
            new Vector2(350,480), 
            new Vector2(430,510),
            new Vector2(375,630),
            new Vector2(320,570)],"aqua");

        let polygonV3 = new Polygon([
            new Vector2(440,510), 
            new Vector2(570,660),
            new Vector2(450,820),
            new Vector2(360,670)],"fuchsia");

       let polygonV4 = new Polygon([
            new Vector2(455,510), 
            new Vector2(600,520),
            new Vector2(780,700),
            new Vector2(625,700)],"red");
                
       let polygonV5 = new Polygon([
            new Vector2(630,530), 
            new Vector2(1026,570),
            new Vector2(1100,660),
            new Vector2(790,660)],"orange");

       let polygonV6 = new Polygon([
            new Vector2(1030,565), 
            new Vector2(1330,500),
            new Vector2(1444,686),
            new Vector2(1155,680)],"yellow");

       let polygonV7 = new Polygon([ 
            new Vector2(1226,705),
            new Vector2(1450,720),
            new Vector2(1280,760),
            new Vector2(1240,750)],"green");

       let polygonV21 = new Polygon([ 
            new Vector2(963,690),
            new Vector2(1220,696),
            new Vector2(1220,740),
            new Vector2(1010,715)],"white");

       let polygonV22 = new Polygon([
            new Vector2(1430,730),
            new Vector2(1460,710),
            new Vector2(1460,740),
            new Vector2(1450,740)],"grey");            

       let polygonV8 = new Polygon([
            new Vector2(1380,750),
            new Vector2(1670,800),
            new Vector2(1600,890),
            new Vector2(1400,790)],"aqua");
          
       let polygonV9 = new Polygon([
            new Vector2(1660,850),
            new Vector2(1900,930),
            new Vector2(1900,1300),
            new Vector2(1460,1300)],"red");

       let polygonV10 = new Polygon([
            new Vector2(290,560),
            new Vector2(350,640),
            new Vector2(190,890),
            new Vector2(0,1000)],"orange");

       let polygonV11 = new Polygon([
            new Vector2(190,890),
            new Vector2(350,1080),
            new Vector2(130,1080),
            new Vector2(0,890)],"yellow");
           
       let polygonV12 = new Polygon([
            new Vector2(320,870),
            new Vector2(540,1080),
            new Vector2(0,1080)],"green");
            
       let polygonV13 = new Polygon([
            new Vector2(440,880),
            new Vector2(690,1080),
            new Vector2(530,1080),
            new Vector2(350,910)],"red");
            
       let polygonV14 = new Polygon([
            new Vector2(570,690),
            new Vector2(670,850),
            new Vector2(550,920),
            new Vector2(450,850)],"blue");
            
       let polygonV15 = new Polygon([
            new Vector2(1070,980),
            new Vector2(1900,1080),
            new Vector2(600,1080)],"pink");

       let polygonV16 = new Polygon([
            new Vector2(1610,860),
            new Vector2(1580,1030),
            new Vector2(1240,1060)],"blue");         
    
       let polygonV17 = new Polygon([
            new Vector2(720,680),
            new Vector2(950,685),
            new Vector2(1000,770),
            new Vector2(980,860)],"fuchsia");    

       let polygonV18 = new Polygon([
            new Vector2(1110,750),
            new Vector2(1100,840),
            new Vector2(960,860),
            new Vector2(1000,770)],"red");   

       let polygonV19 = new Polygon([
            new Vector2(600,750),
            new Vector2(660,770),
            new Vector2(890,920),
            new Vector2(670,840)],"green");   

       let polygonV20 = new Polygon([
            new Vector2(690,730),
            new Vector2(860,800),
            new Vector2(890,920),
            new Vector2(650,780)],"aqua");   

        //this.shapes.push(circle);
        this.shapes.push(polygonV1);
        this.shapes.push(polygonV2);
        this.shapes.push(polygonV3);
        this.shapes.push(polygonV4);
        this.shapes.push(polygonV5);
        this.shapes.push(polygonV6);
        this.shapes.push(polygonV7);
        this.shapes.push(polygonV8);
        this.shapes.push(polygonV9);
        this.shapes.push(polygonV10);
        this.shapes.push(polygonV11);
        this.shapes.push(polygonV12);
        this.shapes.push(polygonV13);
        this.shapes.push(polygonV14);
        this.shapes.push(polygonV15);
        this.shapes.push(polygonV16);
        this.shapes.push(polygonV17);
        this.shapes.push(polygonV18);        
        this.shapes.push(polygonV19);
        this.shapes.push(polygonV20);
        this.shapes.push(polygonV21);
        this.shapes.push(polygonV22);


    }

    createParticleEmitter(position, direction, size, spawnInterval, amount, velocity){
        let emitter = new ParticleEmitter(position, direction, size, spawnInterval, amount, velocity, this);
        this.particleEmitters.push(emitter);
        return emitter;
    }

    getShapeAt(pos){
        for(let i=0; i< this.shapes.length; i++){
            if(this.shapes[i].isPointInside(pos)){
                return this.shapes[i];
            }
        }
        return null;
    }

    instantiateParticles(){
        let offsetBetweenParticles = 10; // changed 10 originally
        let offsetAllParticles = new Vector2(750, 100);

        let xParticles = Math.sqrt(this.AMOUNT_PARTICLES);
        let yParticles = xParticles;


        for(let x=0; x< xParticles; x++){
            for(let y=0; y< yParticles; y++){
                let position = new Vector2(
                    x*offsetBetweenParticles + offsetAllParticles.x,
                    y*offsetBetweenParticles + offsetAllParticles.y);

                let particle = new Particle(position);
                //particle.velocity = Scale(new Vector2(-0.5 + Math.random(),-0.5 + Math.random()), 200);


                this.particles.push(particle);
            }
        }
    }

    restart(){
        this.particles = [];
        this.springs.clear();
        this.emitter.amount = 0;
    }

    neighbourSearch(){
        this.fluidHashGrid.clearGrid();
        this.fluidHashGrid.mapParticleToCell();
    }

    update(dt){
        this.neighbourSearch();

        this.emitter.spawn(dt, this.particles);
        if(this.rotate){
            this.emitter.rotate(0.01);
        }

        this.applyGravity(dt);

        this.viscosity(dt);

        this.predictPositions(dt);

        //this.adjustSprings(dt);
        //this.springDisplacement(dt);

        this.doubleDensityRelaxation(dt);

        this.handleOneWayCoupling();
        this.worldBoundary();

        this.computeNextVelocity(dt);
    }

    handleOneWayCoupling(){
        for(let i=0; i< this.particles.length; i++){
            let particle = this.particles[i];
            for(let j=0; j<this.shapes.length;j++){
                let dir = this.shapes[j].getDirectionOut(particle.position);
                if(dir != null){
                    particle.position = Add(particle.position, dir);
                }
            }
        }
    }

    adjustSprings(dt){
        for(let i=0; i< this.particles.length; i++){
            let neighbours = this.fluidHashGrid.getNeighbourOfParticleIdx(i);
            let particleA = this.particles[i];

            for(let j = 0; j < neighbours.length;j++){
				let particleB = this.particles[neighbours[j]];
				if(particleA == particleB) continue;

                let springId = i + neighbours[j] * this.particles.length;

                if(this.springs.has(springId)){
                    continue;
                }

                let rij = Sub(particleB.position,particleA.position); 
                let q = rij.Length() / this.INTERACTION_RADIUS;

                if(q < 1){
                    let newSpring = new Spring(i, neighbours[j], this.INTERACTION_RADIUS);
                    this.springs.set(springId, newSpring);
                }
            }
        }


        for(let [key, spring] of this.springs){
            let pi = this.particles[spring.particleAIdx];
            let pj = this.particles[spring.particleBIdx];

            let rij = Sub(pi.position, pj.position).Length();
            let Lij = spring.length;
            let d = this.GAMMA * Lij;

            if(rij > Lij + d){
                spring.length += dt * this.PLASTICITY * (rij - Lij - d); // stretching

            }else if(rij < Lij - d){ 
                spring.length -= dt * this.PLASTICITY * (Lij - d - rij); // compression
            }

            if(spring.length > this.INTERACTION_RADIUS){
                this.springs.delete(key);
            }
        }
    }

    springDisplacement(dt){
        let dtSquared = dt * dt;

        for(let [key, spring] of this.springs){
            let pi = this.particles[spring.particleAIdx];
            let pj = this.particles[spring.particleBIdx];

            let rij = Sub(pi.position, pj.position);
            let distance = rij.Length();

            if(distance < 0.0001){
                continue;
            }

            rij.Normalize();
            let displacementTerm = dtSquared * this.SPRING_STIFFNESS * 
                (1 - spring.length / this.INTERACTION_RADIUS) * (spring.length - distance);

            rij = Scale(rij, displacementTerm * 0.5);

            pi.position = Add(pi.position, rij);
            pj.position = Sub(pj.position, rij);
        }
    }

    viscosity(dt){
        for(let i=0; i< this.particles.length; i++){
			let neighbours = this.fluidHashGrid.getNeighbourOfParticleIdx(i);
			let particleA = this.particles[i];

            for(let j = 0; j < neighbours.length;j++){
				let particleB = this.particles[neighbours[j]];
				if(particleA == particleB) continue;

                let rij = Sub(particleB.position,particleA.position);
                let velocityA = particleA.velocity;
                let velocityB = particleB.velocity;
                let q = rij.Length() / this.INTERACTION_RADIUS;
                
                if(q < 1){

                    rij.Normalize();
                    let u = Sub(velocityA, velocityB).Dot(rij);

                    if(u > 0){
                        let ITerm = dt * (1-q) * (this.SIGMA * u + this.BETA * u * u);
                        let I = Scale(rij, ITerm);

                        particleA.velocity = Sub(particleA.velocity, Scale(I, 0.5));
                        particleB.velocity = Add(particleB.velocity, Scale(I, 0.5));
                    }
                }
            }
        }
    }

    doubleDensityRelaxation(dt){
        for(let i=0; i< this.particles.length; i++){
			let density = 0;
			let densityNear = 0;
			let neighbours = this.fluidHashGrid.getNeighbourOfParticleIdx(i);
			let particleA = this.particles[i];

			for(let j = 0; j < neighbours.length;j++){
				let particleB = this.particles[neighbours[j]];
				if(particleA == particleB) continue;
				
				
				let rij = Sub(particleB.position,particleA.position);
				let q = rij.Length() / this.INTERACTION_RADIUS;
				
				if(q < 1){
					let oneMinusQ = (1-q);
					density += oneMinusQ*oneMinusQ;
					densityNear += oneMinusQ*oneMinusQ*oneMinusQ;					
				}
			}

            let pressure = this.K * (density - this.REST_DENSITY);
            let pressureNear = this.K_NEAR * densityNear;
            let particleADisplacement = Vector2.Zero();

            
            for(let j=0; j< neighbours.length; j++){
                let particleB = this.particles[neighbours[j]];
                if(particleA == particleB){
                    continue;
                }

                let rij = Sub(particleB.position, particleA.position);
                let q = rij.Length() / this.INTERACTION_RADIUS;

                if(q < 1.0){
                    rij.Normalize();
                    let displacementTerm = Math.pow(dt, 2) * 
                        (pressure * (1-q) + pressureNear * Math.pow(1-q, 2));
                    let D = Scale(rij, displacementTerm);

                    particleB.position = Add(particleB.position, Scale(D,0.5));
                    particleADisplacement = Sub(particleADisplacement, Scale(D,0.5));
                }
            }
            particleA.position = Add(particleA.position, particleADisplacement);
        }
    }

    applyGravity(dt){
        for(let i=0; i< this.particles.length; i++){
            this.particles[i].velocity = Add(this.particles[i].velocity, Scale(this.GRAVITY, dt));
        }
    }

    predictPositions(dt){
        for(let i=0; i< this.particles.length; i++){
            this.particles[i].prevPosition = this.particles[i].position.Cpy();
            let positionDelta = Scale(this.particles[i].velocity, dt * this.VELOCITY_DAMPING);
            this.particles[i].position = Add(this.particles[i].position, positionDelta);
        }
    }

    computeNextVelocity(dt){
        for(let i=0; i< this.particles.length; i++){
            let velocity = Scale(Sub(this.particles[i].position, this.particles[i].prevPosition), 1.0 / dt);
            this.particles[i].velocity = velocity;
        }
    }

    worldBoundary(){
        // Remove particles that leave the visible canvas bounds so they disappear forever.
        // Iterate backwards to safely splice while iterating.
        for(let i = this.particles.length - 1; i >= 0; i--){
            let pos = this.particles[i].position;

            if(pos.x < 0 || pos.y < 0 || pos.x > canvas.width || pos.y > canvas.height){
                this.particles.splice(i, 1);
            }
        }
    }




    draw(){

        if (this.showShapes) {
            for(let i=0; i< this.shapes.length; i++){
                this.shapes[i].draw();
            }
        }

        for(let i=0; i< this.particles.length; i++){
            let position = this.particles[i].position;
            let color = this.particles[i].color;
            DrawUtils.drawPoint(position, 5, color);
        }

        for(let i=0; i< this.particleEmitters.length; i++){
            this.particleEmitters[i].draw();
        }

    
    }



}