document.getElementById('me').addEventListener('click', function() {
    document.body.style.backgroundColor = 'white';
    this.style.display = 'none';
    
    const wrapper = document.getElementById('text-wrapper');
    wrapper.style.display = 'block';
    
    const screenHeight = window.innerHeight;
    const lineHeight = 40;
    const linesNeeded = Math.ceil(screenHeight / lineHeight);
    
    for(let i = 0; i < linesNeeded; i++) {
        const lineDiv = document.createElement('div');
        lineDiv.className = `text-line ${i % 2 === 0 ? 'move-left' : 'move-right'}`;
        lineDiv.textContent = 'wanna be yours <3 '.repeat(20);
        wrapper.appendChild(lineDiv);
        
        lineDiv.style.animationDelay = `${i * 0.1}s`;
    }
});

