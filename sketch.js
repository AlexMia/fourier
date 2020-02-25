
let time = 0;
let wave = [];
let slider;

function setup() {
    createCanvas(600, 400);
    slider = createSlider(1, 200, 1);
}

function draw() {
    background(0);
    translate(150, 200);
    noFill();
    
    let x = 0;
    let y = 0;

    for(let i = 0; i < slider.value(); i++) {
        let prevx = x;
        let prevy = y;
        let n = 2 * i + 1;
        let radius = 75 * (4 / (n * PI));
        x += radius * cos(n * time);
        y += radius * sin(n * time);
        
        stroke(255, 100);
        ellipse(prevx, prevy, 2 * radius);

        stroke(255);
        line(prevx, prevy, x, y);
    
    }
        wave.unshift(y);
      
        noFill();
        translate(200, 0);
        beginShape();
        for(let i = 0; i < wave.length; i++) {
            vertex(i, wave[i]);
        }
        endShape();

    

    if(wave.length > 250) {
        wave.pop();
    }
    line(x-200, y, 0, wave[0]);


    time += 0.03;
}
