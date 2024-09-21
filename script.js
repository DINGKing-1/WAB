document.querySelectorAll('.play-btn').forEach(button => {  
    button.addEventListener('click', function() {  
        // 获取对应的音频元素ID  
        const audioId = this.getAttribute('data-audio');  
        // 获取音频元素  
        const audio = document.getElementById(audioId);  

        // 暂停其它音乐  
        document.querySelectorAll('audio').forEach(otherAudio => {  
            if (otherAudio !== audio) {  
                otherAudio.pause();  
                otherAudio.currentTime = 0; // 重置播放时间  
            }  
        });  

        // 切换播放/暂停  
        if (audio.paused) {  
            audio.play();  
            this.textContent = '暂停'; // 改变按钮文本为暂停  
        } else {  
            audio.pause();  
            this.textContent = '播放'; // 改变按钮文本为播放  
        }  
    });  
});