let c = document.getElementById("myCanvas");
let ctx = c.getContext("2d");

let loadImage = (src , callback) => {
    let img = document.createElement("imag");
    img.onload = () => callback(img);
    img.src = src;
};
let imagePath = (frameno , animation) =>{
    return "/images/"+animation+"/"+frameno+".png";
};
let frames = {
    idle : [1,2,3,4,5,6,7,8],
    kick : [1,2,3,4,5,6,7],
    punch: [1,2,3,4,5,6,7],
    // block : [1,2,3,4,5,6,7,8,9],
    forward : [1,2,3,4,5,6],
    backward : [1,2,3,4,5,6]
};
let loadImages = (callback) => {
    let images = {idle:[], kick:[], punch:[], forward:[], backward:[]};
    let imagesToLoad = imagesToLoad + animationFrames.length;
    animationFrames.forEach ((frameno) => {
        let path = imagePath(framenoanimation);
        loadImage(path,(image) => {
            images[animation][frameno-1] = image;
            imagesToLoad = imagesToLoad -1 ;
            if (imagesToLoad === 0){
                callback(images);
            }
        });
    });
};
let animate = (ctx, images , animation , callback) => {
    images[animation].forEach((image,index)=>{
        setTimeout(()=>{
            ctx.clearRect(0,0,1000,1000);
            ctx.drawImage(image,0,0,500,500);
        }, index*100);
    });
    setTimeout(allback,images[animation].length*100);
};
load ((images) =>{
    let selectedAnimation;
    if (queuedAnimations.length===0){
        selectedAnimation = "idle";
    } else{
        selectedAnimation = queuedAnimations.shift();
    }
    animate(ctz,images,selectedAnimation,aux);
});
aux();
document.getElementById("kick").onclick = () => {
    queuedAnimations.push("kick");
};
document.getElementById("punch").onclick = () => {
    queuedAnimations.push("punch");
};
// document.getElementById("block").onclick = () => {
//     queuedAnimations.push("block");
// };
document.getElementById("forward").onclick = () => {
    queuedAnimations.push("forward");
};
document.getElementById("backward").onclick = () => {
    queuedAnimations.push("backward");
};
document.addEventListener("keyup",(event) =>{
    const key = event.key;
    if(key === "ArrowLeft"){
        queuedAnimations.push("kick");
    }else if ( key === "ArrowRight"){
        queuedAnimations.push("punch");
    }else if ( key === "ArrowUp"){
        queuedAnimations.push("forward");
    }else if ( key === "ArrowDown"){
        queuedAnimations.push("backward");
    }
});
