function preload(){

}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(350,220);

    video=createCapture(VIDEO);
    video.hide();

}

function draw(){
    let c = color('red');
    fill(c);
    circle(145, 130, 50);
    let c2 = color('green');
    fill(c2);
    rect(170, 120, 290, 20);
    fill(c);
    circle(485, 130, 50);
    fill(c2);
    rect(190, 120, 250, 20);
    fill(c);
    circle(485, 430, 50);
    fill(c2);
    rect(475, 155, 20, 250);
    fill(c);
    circle(145, 430, 50);
    fill(c2);
    rect(170, 420, 290, 20);
    fill(c2);
    rect(135, 155, 20, 250);

    image(video, 190 , 190, 260, 190 );
    

}

function take_snapshot(){
    save('frame.png');

}