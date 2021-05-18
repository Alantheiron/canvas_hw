var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
// 設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400)
  //座標繪製
  ctx.beginPath()
  for(var i=0; i<10; i++){
    let pos = i*50   //每隔50畫一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10)
    ctx.moveTo(0,pos)
    ctx.lineTo(400,pos)
    ctx.fillText(pos,10,pos)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()

  
 //   地面上的線
  ctx.beginPath()
  ctx.moveTo(25,350)
  ctx.lineTo(375,350)
  ctx.lineWidth = 2
  ctx.strokeStyle = "black"
  ctx.stroke()


// 左支柱
ctx.fillStyle = "	#A52A2A"
ctx.fillRect(100,250,50,100)//(x軸,y軸,寬,高)
ctx.strokeRect(100,250,50,100)

ctx.fillStyle = "	#E60000"
ctx.fillRect(100, 240, 10, 10)
ctx.strokeRect(100, 240, 10, 10)

ctx.fillStyle = "	#E60000"
ctx.fillRect(140, 240, 10, 10)
ctx.strokeRect(140, 240, 10, 10)


//右支柱
ctx.fillStyle = "	#A52A2A"
ctx.fillRect(250,250,50,100)//(x軸,y軸,寬,高)
ctx.strokeRect(250,250,50,100)

ctx.fillStyle = "	#E60000"
ctx.fillRect(250, 240, 10, 10)
ctx.strokeRect(250, 240, 10, 10)

ctx.fillStyle = "	#E60000"
ctx.fillRect(290, 240, 10, 10)
ctx.strokeRect(290, 240, 10, 10)

// 1屋頂
ctx.fillStyle = "	#FF2400"
ctx.fillRect(75, 215, 250, 25)
ctx.strokeRect(75, 215, 250, 25)
//12中間的小方塊
ctx.fillStyle = "	#E60000"
ctx.fillRect(75, 205, 10, 10)
ctx.strokeRect(75, 205, 10, 10)

ctx.fillStyle = "	#E60000"
ctx.fillRect(107, 205, 10, 10)
ctx.strokeRect(107, 205, 10, 10)

ctx.fillStyle = "	#E60000"
ctx.fillRect(140, 205, 10, 10)
ctx.strokeRect(140, 205, 10, 10)

ctx.fillStyle = "	#E60000"
ctx.fillRect(250, 205, 10, 10)
ctx.strokeRect(250, 205, 10, 10)

ctx.fillStyle = "	#E60000"
ctx.fillRect(285, 205, 10, 10)
ctx.strokeRect(285, 205, 10, 10)

ctx.fillStyle = "	#E60000"
ctx.fillRect(315, 205, 10, 10)
ctx.strokeRect(315, 205, 10, 10)

//2屋頂
ctx.fillStyle = "	#FF2400"
ctx.fillRect(50, 180, 300, 25)
ctx.strokeRect(50, 180, 300, 25)
//23屋頂間的方塊
ctx.fillStyle = "	#E60000"
ctx.fillRect(50, 170, 10, 10)
ctx.strokeRect(50, 170, 10, 10)

ctx.fillStyle = "	#E60000"
ctx.fillRect(85, 170, 10, 10)
ctx.strokeRect(85, 170, 10, 10)

ctx.fillStyle = "	#E60000"
ctx.fillRect(175, 170, 10, 10)
ctx.strokeRect(175, 170, 10, 10)

ctx.fillStyle = "	#E60000"
ctx.fillRect(210, 170, 10, 10)
ctx.strokeRect(210, 170, 10, 10)

ctx.fillStyle = "	#E60000"
ctx.fillRect(305, 170, 10, 10)
ctx.strokeRect(305, 170, 10, 10)

ctx.fillStyle = "	#E60000"
ctx.fillRect(340, 170, 10, 10)
ctx.strokeRect(340, 170, 10, 10)
//3屋頂
ctx.fillStyle = "	#FF2400"
ctx.fillRect(25, 145-mouse.y/5, 350, 25+mouse.y/5)
ctx.strokeRect(25, 145-mouse.y/5, 350, 25+mouse.y/5)


 //車子
    ctx.fillStyle="white"
    let carx = time%440-40
    ctx.fillRect(carx,370,40,5)
    ctx.strokeRect(carx,370,40,5)
  
    ctx.beginPath()
    ctx.moveTo(carx+10,370)
    ctx.lineTo(carx+10,355)
    ctx.lineTo(carx+15,355)
    ctx.lineTo(carx+15,370)
    ctx.moveTo(carx+15,370)
    ctx.lineTo(carx+25,370)
    ctx.lineTo(carx+25,367)
    ctx.lineTo(carx+15,367)

   ctx.fillStyle="black"
    ctx.fill()
    ctx.stroke()
  
      //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
  }

//draw()

setInterval(draw,30)

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})