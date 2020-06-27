import React from 'react';
import { render } from "react-dom";
import P5Wrapper from "react-p5-wrapper";
import p5 from "p5";
import Blade from "./Blade.js"
import Fruit from "./Fruit.js"
import * as posenet from '@tensorflow-models/posenet'
import {drawKeyPoints, drawSkeleton} from './utils'
import "./Challenge.css"
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
const BAD_FRUIT_PROBABILITY = 0.4;
const confidenceThreshold = 0.3;
  export default class Challenge extends React.Component {
    static defaultProps = {
      videoWidth: window.innerWidth,
      videoHeight: window.innerHeight,
      flipHorizontal: true,
      algorithm: 'single-pose',
      showVideo: true,
      showSkeleton: false,
      showPoints: false,
      minPoseConfidence: 0.1,
      minPartConfidence: 0.5,
      maxPoseDetections: 2,
      nmsRadius: 20,
      outputStride: 16,
      imageScaleFactor: 0.5,
      skeletonColor: '#ffadea',
      skeletonLineWidth: 6,
      loadingText: 'Loading...please be patient...'
    }

    constructor(props) {
        super(props, Challenge.defaultProps);

        this.state = {
          score: 0,
          fruit: [],
          poses: [],
          loading: true,
          questions: [
            {discription: "An ________ a day keeps the doctor away.", choice: ["apple", "banana", "orange", "dog", "cat"], answer: "apple"},
            {discription: "Lying on the table were some apples and two bunches of _________.", choice: ["apple", "banana", "orange", "dog", "cat"], answer: "banana"},
          ],
          currentQuestionIdx: 0,
          lives: 3,
          gameState: 0,
          isEnd: false,
        };
        this.sketch = this.sketch.bind(this);
    }
    getCanvas = elem => {
      this.canvas = elem
    }
  
    getVideo = elem => {
      this.video = elem
    }

    async componentDidMount() {
      try {
        await this.setupCamera()
      } catch (error) {
        throw new Error(
          'This browser does not support video capture, or this device does not have a camera'
        )
      }
  
      try {
        this.posenet = await posenet.load()
        this.setState({
          loading: false
        })
      } catch (error) {
        console.log(error)
        throw new Error('PoseNet failed to load')
      } finally {
        setTimeout(() => {
          this.setState({loading: false})
        }, 200)
        console.log(this.state.loading)
      }

      
      this.detectPose()
      // if(this.state.countTime === 0){
      //   this.setState({
      //     isStart: true
      //   })
      // }else{
      //   setTimeout(() => {
      //     this.setState((prevState, props)=>({countTime: prevState.countTime - 1}))
      //   }, 
      //     1000)
      // }
      
    }

    async setupCamera() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error(
          'Browser API navigator.mediaDevices.getUserMedia not available'
        )
      }
      const {videoWidth, videoHeight} = this.props
      const video = this.video
      video.width = videoWidth
      video.height = videoHeight
  
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          facingMode: 'user',
          width: videoWidth,
          height: videoHeight
        }
      })
  
      video.srcObject = stream
  
      return new Promise(resolve => {
        video.onloadedmetadata = () => {
          video.play()
          resolve(video)
        }
      })
    }

    detectPose() {
      const {videoWidth, videoHeight} = this.props
      const canvas = this.canvas
      const canvasContext = canvas.getContext('2d')
      canvasContext.globalAlpha = 0.4;
      canvas.width = videoWidth
      canvas.height = videoHeight
  
      this.poseDetectionFrame(canvasContext)
    }

    poseDetectionFrame(canvasContext) {
      const {
        algorithm,
        imageScaleFactor, 
        flipHorizontal, 
        outputStride, 
        minPoseConfidence, 
        minPartConfidence, 
        maxPoseDetections, 
        nmsRadius, 
        videoWidth, 
        videoHeight, 
        showVideo, 
        showPoints, 
        showSkeleton, 
        skeletonColor, 
        skeletonLineWidth 
        } = this.props
  
      const posenetModel = this.posenet
      const video = this.video
  
      const findPoseDetectionFrame = async () => {
        let poses = []
  
        switch (algorithm) {
          case 'multi-pose': {
            poses = await posenetModel.estimateMultiplePoses(
            video, 
            imageScaleFactor, 
            flipHorizontal, 
            outputStride, 
            maxPoseDetections, 
            minPartConfidence, 
            nmsRadius
            )
            this.setState({
              poses: poses
            })
            break
          }
          case 'single-pose': {
            const pose = await posenetModel.estimateSinglePose(
            video, 
            imageScaleFactor, 
            flipHorizontal, 
            outputStride
            )
            poses.push(pose)
            this.setState({
              poses: poses
            })

            break
          }
        }
  
        canvasContext.clearRect(0, 0, videoWidth, videoHeight)
  
        if (showVideo) {
          canvasContext.save()
          canvasContext.scale(-1, 1)
          canvasContext.globalAlpha = 0.2
          canvasContext.translate(-videoWidth, 0)
          canvasContext.drawImage(video, 0, 0, videoWidth, videoHeight)
          canvasContext.restore()
        }
  
        poses.forEach(({score, keypoints}) => {
          if (score >= minPoseConfidence) {
            if (showPoints) {
              drawKeyPoints(
                keypoints,
                minPartConfidence,
                skeletonColor,
                canvasContext
              )
            }
            if (showSkeleton) {
              drawSkeleton(
                keypoints,
                minPartConfidence,
                skeletonColor,
                skeletonLineWidth,
                canvasContext
              )
            }
          }
        })
        requestAnimationFrame(findPoseDetectionFrame)
      }
      findPoseDetectionFrame()
    }
    
    sketch(p) {
        console.log('sketch.....')
        var this_= this
        var sword = new Blade(p, p.color("#FFF0EE"));
        p.setup = () => {
          p.createCanvas(window.innerWidth, window.innerHeight);
          // p.createCanvas(600, 400);
          p.frameRate(200);

        };
        function handleMouse() {
          // if (p.mouseIsPressed) { // swinging
          //   sword.swing(p.mouseX, p.mouseY);
          // }
          var poseArray, rightWrist, rightWristX, rightWristY
          if(this_.state.poses.length > 0){
            poseArray = this_.state.poses[0].keypoints
            rightWrist = poseArray[10]
            if(rightWrist.score > confidenceThreshold){
              rightWristX = rightWrist.position.x
              rightWristY = rightWrist.position.y
              sword.swing(rightWristX, rightWristY);
            }
          }
          if (p.frameCount % 2 === 0) { // update half the time
            sword.update();
          }
          sword.display();
        }

        function randomFruit() {
          /* randomize position */
          var x = p.random(p.width);
          var y = p.height ;
          var rdnQuestionIdx = Math.floor(Math.random() * this_.state.questions[this_.state.currentQuestionIdx].choice.length)
          var text = this_.state.questions[this_.state.currentQuestionIdx].choice[rdnQuestionIdx];
          var size = p.noise(p.frameCount) * 20 + 50; // random size
          var bad;
          var answer = this_.state.questions[this_.state.currentQuestionIdx].answer
          var isAnswer = (p.random() > BAD_FRUIT_PROBABILITY)
          if(isAnswer || text === answer){
            text = answer
            bad = 0;
          }else{
            bad = 1;
          }
          // var bad = (p.random() > BAD_FRUIT_PROBABILITY); // good or bad
          // if(isAnswer) {
          //   text = this_.state.questions[this_.state.currentQuestionIdx].answer;
          // }else{
          //   rdnQuestionIdx = Math.floor(Math.random() * this_.state.questions[this_.state.currentQuestionIdx].choice.length)
          // }
    
          /* base color upon bad */
          // var r = (bad) ? 225 : 0;
          // var g = (bad) ? 0 : p.noise(p.frameCount * 2) * 255;
          // var b = (bad) ? 0 : p.noise(p.frameCount * 3) * 255;
          var r = p.noise(p.frameCount * 1) * 255;
          var g = p.noise(p.frameCount * 2) * 255;
          var b = p.noise(p.frameCount * 3) * 255;
    
          var col = p.color(r, g, b); // color
          return new Fruit(p, x, y, size, col, bad, text); // return fruit
        }

        function handleFruit() {
            /* push new fruit */
          // setInterval(() => {
          //   if (p.frameCount % 10 === 0) {
          //     if (p.noise(p.frameCount) > 0.66) {
          //       // console.log("===========new ball==============")
          //       var tmpFruitArray = this_.state.fruit;
          //       tmpFruitArray.push(randomFruit())
          //       // console.log('------length-----', tmpFruitArray)
          //       this_.setState({
          //         fruit: tmpFruitArray
          //       }, ()=>{
          //         // console.log("-----length:------",this_.state.fruit.length)
          //       })
          //     }
          //   }
          // }, 5000)
          if (p.frameCount % 8 === 0) {
            if (p.noise(p.frameCount) > 0.66) {
              var tmpFruitArray = this_.state.fruit;
              tmpFruitArray.push(randomFruit())
              this_.setState({
                fruit: tmpFruitArray
              }, ()=>{
              })
            }
        }
          var points = 0;
          for(var i = this_.state.fruit.length - 1; i>=0; i--){
            var targetFruit = this_.state.fruit[i]
            targetFruit.update()
            targetFruit.display()

            if(!targetFruit.visible){
              // if(!targetFruit.sliced && !targetFruit.bad){
              //   this_.setState((prevState, props)=>({
              //     lives: prevState.lives - 1
              //   }))
              // }
              if(targetFruit.sliced && targetFruit.bad){
                this_.setState((prevState, props)=>({
                  lives: prevState.lives - 1
                }))
              }
              if(this_.state.lives < 1 || targetFruit.isEndGame){
                // endGame()
              }
              var tmpFruitArray = this_.state.fruit;
              tmpFruitArray.splice(i,1)
              this_.setState({
                fruit: tmpFruitArray
              })
            }
            else{
              var isSliced = sword.checkForSlice(targetFruit)
              if(isSliced && targetFruit.text === this_.state.questions[this_.state.currentQuestionIdx].answer){
                console.log('================================')
                points += isSliced
                var nowQuestionIdx = this_.state.currentQuestionIdx
                if(nowQuestionIdx === this_.state.questions.length - 1){
                  endGame();
                }else{
                  this_.setState({
                    currentQuestionIdx: nowQuestionIdx + 1
                  })
                }
                
              }
              // points += (sword.checkForSlice(targetFruit, this_.state.questions[this_.state.currentQuestionIdx].answer)) ? 1 : 0;
            }
          }
          return points
        }

        function drawScore() {
          p.textAlign(p.LEFT);
          p.noStroke();
          p.fill(255);
          p.textSize(50);
          p.text(this_.state.score, 10, 50);
        }

        function drawLives() {
          p.stroke(255);
          p.strokeWeight(3);
          p.fill("#FF00EE");
          for (var i = this_.state.lives; i > 0; i--) {
            p.ellipse(p.width - (i * 20 + 20), 50, 20);
          }
        }
        function endGame() {
          p.noLoop();
          p.textAlign(p.CENTER);
          p.noStroke();
          p.fill("#888888");
          p.textSize(100);
          p.text("Game over!", p.width / 2, p.height / 2);
          this_.setState({
            isEnd: true
          })
        }
        if(this.state.loading){
          p.draw = () => {
            p.background('#01212D');
            handleMouse();
            // var tmpScore = handleFruit();
            //   this.setState((prevState, props)=>({
            //     score: prevState.score + tmpScore
            //   }))
            //   drawScore()
            //   drawLives();
            if(this.state.gameState===0){
              var startTarget = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2,
                size: 20
              }
              p.fill('#FC335A');
              p.ellipse(startTarget.x, startTarget.y, startTarget.size*2);

              p.fill('#fff');
              p.textAlign(p.CENTER, p.CENTER);
              p.textSize(startTarget.size)
              p.text("Ready ? Swipe over me ! ", startTarget.x, startTarget.y)
              // p.ellipse(startTarget.x, startTarget.y, startTarget.size);
              if(sword.checkForStart(startTarget)){
                this.setState({
                  gameState: 1
                })
                p.clear();
              }
            }else{
              var tmpScore = handleFruit();
              this.setState((prevState, props)=>({
                score: prevState.score + tmpScore
              }))
              drawScore()
              drawLives();
            }
            
          };
        }
        

        
      }
    
    render(){
        return(
            <div>
              {/* <div className={{"is-none" : !this.state.isStart, "is-display":this.state.isStart}}> */}
              <div className="container">
                <h1 className={`question-discription ${this.state.gameState === 1? "is-display" : "is-none"}`}>{this.state.currentQuestionIdx + 1}. {this.state.questions[this.state.currentQuestionIdx].discription}</h1>
              </div>
                
                <div className="canvas-block">
                  <video id="videoNoShow" playsInline ref={this.getVideo} />
                  <canvas className="webcam" ref={this.getCanvas} />
                  <P5Wrapper sketch={this.sketch} />
                </div>
                <div className={`${this.state.isEnd? "is-display" : "is-none"}`}>
                  <Link to="/ChallengeResult">
                      <div id="more-data-box">
                          <div>點擊查看戰積  &nbsp; > </div>
                      </div>
                  </Link>
                </div>
                
              </div>
            // </div>
        )
    }
    
}


