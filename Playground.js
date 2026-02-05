class Playground{
    constructor(){
        this.simulation = new Simulation();
        this.mousePos = Vector2.Zero();
        this.lastMousePos = Vector2.Zero();
        //this.selectedShape = null;
        this.showDebugInfo = false;
        this.fps = 0;
        this.frameCount = 0;
        this.fpsUpdateTime = 0;
        this.elapsedTime = 0;
    }

    loadBackground(){
        this.background = new Image();
        this.background.src = 'img/background.jpg';
    }

    update(dt){
        this.simulation.update(0.25);
        this.elapsedTime += dt;
        this.frameCount++;
        this.fpsUpdateTime += dt;
        
        // Update FPS every 0.5 seconds
        if(this.fpsUpdateTime >= 0.5){
            this.fps = Math.round(this.frameCount / this.fpsUpdateTime);
            this.frameCount = 0;
            this.fpsUpdateTime = 0;
        }
        
        // Update emitter position to follow mouse constantly
        this.updateEmitterPosition();
    }

    updateEmitterPosition(){
        this.stepsMove = 20;
        this.emitterX = this.simulation.emitter.position.x;
        this.emitterY = this.simulation.emitter.position.y;
        this.distanceX= this.mousePos.x - this.emitterX;
        this.distanceY=  this.mousePos.y - this.emitterY;
        this.deltaX = this.distanceX / this.stepsMove;
        this.deltaY = this.distanceY / this.stepsMove;
        this.newEmpitterX = this.emitterX + this.deltaX;
        this.newEmpitterY = this.emitterY + this.deltaY;
        this.simulation.emitter.position.x= this.newEmpitterX;
        // Restrict emitter to top quarter of screen (0 to 270 on 1080px height canvas)
        this.simulation.emitter.position.y= Math.max(0, Math.min(270, this.newEmpitterY));
    }

    draw(){
        this.simulation.draw();
        
        if(this.showDebugInfo){
            this.drawDebugInfo();
        }
    }

    drawDebugInfo(){
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        
        ctx.save();
        ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        ctx.fillRect(10, 10, 300, 120);
        
        ctx.fillStyle = "white";
        ctx.font = "16px Arial";
        ctx.textAlign = "left";
        
        const emitterPos = this.simulation.emitter.position;
        ctx.fillText(`Emitter X: ${Math.round(emitterPos.x)}`, 20, 35);
        ctx.fillText(`Emitter Y: ${Math.round(emitterPos.y)}`, 20, 60);
        ctx.fillText(`Time: ${this.elapsedTime.toFixed(2)}s`, 20, 85);
        ctx.fillText(`FPS: ${this.fps}`, 20, 110);
        
        ctx.restore();
    }
    onMouseMove(position){
        this.mousePos = position;
    }

    onMouseDown(button){

        if(button === 0){
         this.simulation.emitter.amount = 3; // amount of particles to emit per frame
        }
    }

    onMouseUp(button){
        if(button === 0){
            this.simulation.emitter.amount = 0;
        }
    }

    toggleDebugInfo(){
        this.showDebugInfo = !this.showDebugInfo;
    }
}

