const container = document.querySelector('.container');
for(var i = 0; i <= 50; i++){
    const blocks = document.createElement('div');
    blocks.classList.add('block');
    container.appendChild(blocks);
}
function animeteBlocks(){
    anime({
        targets: '.block',
        translateX: function(){
            return anime.random(-700, 700);
        },
        translateY: function(){
            return anime.random(-500, 500);
        },
        scale: function(){
            return anime.random(1, 5);
        },
        duration: 2000,
        delay: anime.stagger(15),
        complete: animeteBlocks,
    });
}
animeteBlocks();