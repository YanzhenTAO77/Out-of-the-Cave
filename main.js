function RandomPN(){
    return Math.random() > 0.5 ? 1 : -1
}

window.onload=()=>{



        let ani  = lottie.loadAnimation({
            container: document.querySelector('#ani1'), // HTML元素

            loop: false,
            autoplay: false,
            path: './data.json', // 写自己动画文件的路径

        })

        let startSaturation = 0

        document.querySelectorAll('.ele').forEach(ele=>{
            ele.src = `./images/${Math.floor(Math.random()*32)+1}.png`

            ele.style.transform = `translate(${Math.random()*window.innerWidth/2*RandomPN()}px,${Math.random()*window.innerHeight/2*RandomPN()}px)`
            ele.style.filter = `hue-rotate(${Math.random()*50}deg)`
            ele.addEventListener('click',(e)=>{
                console.log(e.target);
                e.target.style.opacity = 0
                setTimeout(()=>{
                    e.target.style.display = 'none'
                },501)

                startSaturation += 0.1
                console.log(startSaturation);
                document.querySelector('#contentBox').style.filter = `saturate(${Math.min(0.9,startSaturation)}) `
                document.querySelector('#bgVideo').style.filter = `saturate(${Math.min(0.9,startSaturation)}) `
            })
        })


        function map(val, max, min) { return (val - min) / (max - min); }



       window.addEventListener('mousemove',e=>{
        ani.goToAndStop(map(e.offsetX,window.innerWidth,0)*ani.animationData.op,true)
       })

       document.querySelector('#desc').addEventListener('click',()=>{
           document.querySelector('#desc').classList.toggle('no-display')
           document.querySelector('#bgVideo').play()
       })


}
