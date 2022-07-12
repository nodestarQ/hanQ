import * as THREE from 'https://unpkg.com/three@0.126.1/build/three.module.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js';

//sound 
var snd1  = new Audio();
snd1.crossOrigin = "anonymous";
var src1  = document.createElement("source");
src1.type = "audio/mpeg";
src1.src  = "https://arweave.net/Pw13izzMO1woOccge2M4cS_RhgrSFjNsdieFqItFKiQ";
snd1.appendChild(src1);
snd1.loop = true;

var snd2  = new Audio();
snd2.crossOrigin = "anonymous";
var src2  = document.createElement("source");
src2.type = "audio/mpeg";
src2.src  = "https://arweave.net/FgTzLeXDII44g_pOgUEa8sQhgT8b8FvnowjwxATzM9g";
snd2.appendChild(src2);
snd2.loop = true;

var snd3  = new Audio();
snd3.crossOrigin = "anonymous";
var src3  = document.createElement("source");
src3.type = "audio/mpeg";
src3.src  = "https://arweave.net/RQFIZ3J5zhmVCAjl3GIjrELueJJdq2leU9XusNH9WH8";
snd3.appendChild(src3);
snd3.loop = true;

var snd4  = new Audio();
snd4.crossOrigin = "anonymous";
var src4  = document.createElement("source");
src4.type = "audio/mpeg";
src4.src  = "https://arweave.net/8SUpZL4skdJjuSOqm05gTJwJNidorAZUfzgedhPCzwQ";
snd4.appendChild(src4);
snd4.loop = true;

var snd5  = new Audio();
snd5.crossOrigin = "anonymous";
var src5  = document.createElement("source");
src5.type = "audio/mpeg";
src5.src  = "https://arweave.net/SElsXKnekETnR5lsRhyzaptVdG-DrykMzdGqUe3oEvA";
snd5.appendChild(src5);
snd5.loop = true;

var snd6  = new Audio();
var src6  = document.createElement("source");
snd6.crossOrigin = "anonymous";
src6.type = "audio/mpeg";
src6.src  = "https://arweave.net/o_Tmog2uCIRbBK2PIhJE2I_snt9xoB3hQK_pjPkJOAI";
snd6.appendChild(src6);
snd6.loop = true;

var src7  = document.createElement("source");
var snd7  = new Audio();
snd7.crossOrigin = "anonymous";
src7.type = "audio/mpeg";
src7.src  = "https://arweave.net/hj8FAAGy1p7CKXir49FS4F6QjfmWvy6ewRyTw4vdHkU";
snd7.appendChild(src7);
snd7.loop = true;

var isPlayingSound = false;
let soundVolume = 1;

let context, analyser,source, volumeMe;
let hand;

let pcmData1,pcmData2,pcmData3,pcmData4,pcmData5,pcmData6,pcmData7;
let a1, a2, a3, a4, a5, a6, a7;
let ctx1,ctx2, ctx3,ctx4,ctx5,ctx6,ctx7;
let s1,s2,s3,s4,s5,s6,s7;
let vol1,vol2,vol3,vol4,vol5,vol6,vol7;

function getSource(){
	document.getElementById('snd1').appendChild(snd1);
	ctx1 = new AudioContext();
	a1 = ctx1.createAnalyser();
	s1 = ctx1.createMediaElementSource(snd1);
	s1.connect(a1);
	a1.connect(ctx1.destination);
	pcmData1 = new Float32Array(a1.fftSize);
	document.getElementById('snd2').appendChild(snd2);
	ctx2 = new AudioContext();
	a2 = ctx2.createAnalyser();
	s2 = ctx2.createMediaElementSource(snd2);
	s2.connect(a2);
	a2.connect(ctx2.destination);
	pcmData2 = new Float32Array(a2.fftSize);
	document.getElementById('snd3').appendChild(snd3);
	ctx3 = new AudioContext();
	a3 = ctx3.createAnalyser();
	s3 = ctx3.createMediaElementSource(snd3);
	s3.connect(a3);
	a3.connect(ctx3.destination);
	pcmData3 = new Float32Array(a3.fftSize);
	document.getElementById('snd7').appendChild(snd7);
	ctx4 = new AudioContext();
	a4 = ctx4.createAnalyser();
	s4 = ctx4.createMediaElementSource(snd7);
	s4.connect(a4);
	a4.connect(ctx4.destination);
	pcmData4 = new Float32Array(a4.fftSize);
	document.getElementById('snd6').appendChild(snd6);
	ctx5 = new AudioContext();
	a5 = ctx5.createAnalyser();
	s5 = ctx5.createMediaElementSource(snd6);
	s5.connect(a5);
	a5.connect(ctx5.destination);
	pcmData5 = new Float32Array(a5.fftSize);
	document.getElementById('snd5').appendChild(snd5);
	ctx6 = new AudioContext();
	a6 = ctx6.createAnalyser();
	s6 = ctx6.createMediaElementSource(snd5);
	s6.connect(a6);
	a6.connect(ctx6.destination);
	pcmData6 = new Float32Array(a6.fftSize);
	document.getElementById('snd4').appendChild(snd4);
	ctx7 = new AudioContext();
	a7 = ctx7.createAnalyser();
	s7 = ctx7.createMediaElementSource(snd4);
	s7.connect(a7);
	a7.connect(ctx7.destination);
	pcmData7 = new Float32Array(a7.fftSize);
}
function getRandomInt(max) {
	return Math.floor(Math.random() * max);
  }

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
function setUpAudio(){
	
	const onFrame = () =>{
			a1.getFloatTimeDomainData(pcmData1);
			a2.getFloatTimeDomainData(pcmData2);
			a3.getFloatTimeDomainData(pcmData3);
			a4.getFloatTimeDomainData(pcmData4);
			a5.getFloatTimeDomainData(pcmData5);
			a6.getFloatTimeDomainData(pcmData6);
			a7.getFloatTimeDomainData(pcmData7);
			let sS1 = 0.0; 
			let sS2 = 0.0; 
			let sS3 = 0.0; 
			let sS4 = 0.0; 
			let sS5 = 0.0; 
			let sS6 = 0.0; 
			let sS7 = 0.0; 
			for (const amplitude1 of pcmData1){sS1 += amplitude1*amplitude1;}
			vol1 = Math.sqrt(sS1/pcmData1.length);
			for (const amplitude2 of pcmData2){sS2 += amplitude2*amplitude2;}
			vol2 = Math.sqrt(sS2/pcmData2.length);
			for (const amplitude3 of pcmData3){sS3 += amplitude3*amplitude3;}
			vol3 = Math.sqrt(sS3/pcmData3.length);
			for (const amplitude4 of pcmData4){sS4 += amplitude4*amplitude4;}
			vol4 = Math.sqrt(sS4/pcmData4.length);
			for (const amplitude5 of pcmData5){sS5 += amplitude5*amplitude5;}
			vol5 = Math.sqrt(sS5/pcmData5.length);
			for (const amplitude6 of pcmData6){sS6 += amplitude6*amplitude6;}
			vol6 = Math.sqrt(sS6/pcmData6.length);
			for (const amplitude7 of pcmData7){sS7 += amplitude7*amplitude7;}
			vol7 = Math.sqrt(sS7/pcmData7.length);
			window.requestAnimationFrame(onFrame);
			//anim
			//wrist
			wrist[0].rotation.x = clamp(vol3*7.5,0,.25)*-1;
			wrist[1].rotation.x = clamp(vol3*7.5,0,.25)*-.5;
			wrist[2].rotation.x = clamp(vol3*7.5,0,.25)*0;
			wrist[3].rotation.x = clamp(vol3*7.5,0,.25)*.5;
			wrist[4].rotation.x = clamp(vol3*7.5,0,.25)*1;
			//thumb
			thumb[0].rotation.x = clamp(vol1*7.5,0,1.25);
			thumb[1].rotation.x = clamp(vol1,0,.125);
			//index
			index[0].rotation.x = clamp(vol2*10,0,1.25);
			index[1].rotation.x = clamp(vol2*7.5,0,1.25);
			index[2].rotation.x = clamp(vol2*5,0,1.25);
			//middle
			middle[0].rotation.x = clamp(vol7*7.5,0,1.25);
			middle[1].rotation.x = clamp(vol7*5,0,1.25);
			middle[2].rotation.x = clamp(vol7*2.5,0,1.25);
			//ring
			ring[0].rotation.x = clamp(vol4*2,0,1.25);
			ring[1].rotation.x = clamp(vol4*2,0,1.25);
			ring[2].rotation.x = clamp(vol4*2,0,1.25);
			//pinky
			pinky[0].rotation.x = clamp(vol5*10,0,1.25);
			pinky[1].rotation.x = clamp(vol5*7.5,0,1.25);
			pinky[2].rotation.x = clamp(vol5*5,0,1.25);

			//light
			light.position.y=clamp(vol3*10,-1,1) *30;
			light.position.z= clamp(vol3*10,-1,1) *30;
			light.position.x= clamp(vol1*10,-1,1) *30;
			//decay
			light.decay = clamp(vol3*50,1,10);

			//mats
			let mats = [material1,material2,material3, material4,material5,material6,material7];

			let isFlip =true;
			if(((vol1*50)>=1.0) && isFlip){
				isFlip = false;
				hand.material = mats[getRandomInt(6)];
			}
			else{
				
				delay(1000).then(() => isFlip = true);
			}
			
			
			if(!isPlayingSound){
				light.position.x= 0;
				light.position.y= 10;
				light.position.z= 10;
				return 0;
			}
			
		};
	window.requestAnimationFrame(onFrame);
}



function delay(time) {
	return new Promise(resolve => setTimeout(resolve, time));
  }










//3D
let base = [];
let wrist = []
let thumb = [];
let index = [];
let middle = [];
let ring = [];
let pinky = [];
let bone = [];
let index1,clock;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 1000 );
camera.focus = 100;

const light = new THREE.PointLight( 0xff0000, 1, 88);
light.position.set( 0, 10, 10 );
scene.add( light );
clock = new THREE.Clock();

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

controls.autoRotate = true;
//controls.enableRotate = false;
controls.enablePan = false;
controls.enableZoom = false;
controls.enableDamping = true;
controls.autoRotateSpeed = 0;
controls.minPolarAngle = Math.PI/2.125;
controls.maxPolarAngle = Math.PI/1.2;

controls.update();

function animates() {
	//Hand Rotation
	requestAnimationFrame( animates );
	// required if controls.enableDamping or controls.autoRotate are set to true
	controls.update();
	const t = clock.getElapsedTime();

	/*
	if ( ring[0] ) {
		ring[0].rotation.x += Math.sin( t*10 ) * 0.05;
		ring[1].rotation.x += Math.sin( t*10 ) * 0.05;
		ring[2].rotation.x += Math.sin( t*10 ) * 0.05;
	
	}*/

	renderer.render( scene, camera );
}

var geometry = new THREE.CylinderBufferGeometry(2, 5, 20, 16, 4, true);
geometry.computeBoundingBox();
var material5 = new THREE.MeshToonMaterial();



//mat for Hand
const material = new THREE.MeshBasicMaterial( { 
	color: 0x00ff00,
} );
const material1 = new THREE.MeshBasicMaterial( { 
	color: 0x00a2ff,
	wireframe: true, 
} );
const material2 = new THREE.MeshNormalMaterial();
const material3 = new THREE.MeshDepthMaterial();
const material4 = new THREE.MeshBasicMaterial( { 
	color: 0xfcba03,
	wireframe: true, 
} );
const material6 = new THREE.MeshBasicMaterial( { 
	color: 0xfc0303,
	wireframe: true, 
} );
const material7 = new THREE.MeshBasicMaterial( { 
	color: 0xffff00, 
} );
const material8 = new THREE.MeshBasicMaterial( { 
	color: 0xbf00ff,
} );
material8.skinning = true;
material7.skinning = true;
material6.skinning = true;
material5.skinning = true;
material4.skinning = true;
material3.skinning = true;
material2.skinning = true;
material1.skinning = true;
material.skinning = true;

camera.position.z = 4;

LoadModel();
animates();
document.getElementById("sound").addEventListener("click", playButton);
let audioInit = false;
function playButton(){
	
	if(!audioInit){
		getSource(); 
		audioInit = true;
	}
	
	if(isPlayingSound){
		stopSounds();
		document.getElementById("sound").innerHTML = "Play";
		isPlayingSound = false;	
		controls.autoRotateSpeed = 0;
		
		
	}
	else{
		playSounds();
		document.getElementById("sound").innerHTML = "Stop";
		isPlayingSound = true;
		controls.autoRotateSpeed = -1;
		setUpAudio();
		
		
	}
	
}

function adjustVolume(x,y){
	let v = setInterval(function(x,y){
		if(x<y){
			y = y+ 0.1;
			if(x>=y){
				clearInterval(v);
			}
		}
		if(y<x){
			y = y- 0.1;
			if(x<=y){
				clearInterval(v);
			}
		}
		snd1.volume = parseFloat(y);
		snd2.volume = parseFloat(y);
		snd3.volume = parseFloat(y);
		snd4.volume = parseFloat(y);
		snd5.volume = parseFloat(y);
		snd6.volume = parseFloat(y);
		snd7.volume = parseFloat(y);

	}, 5 * 1000 / 100);
	
	
}

function playSounds(){
	snd1.play(); snd2.play(); snd3.play(); snd4.play(); snd5.play(); snd6.play(); snd7.play(); // Now both will play at the same time
}
function stopSounds(){
	snd1.pause(); snd2.pause(); snd3.pause(); snd4.pause(); snd5.pause(); snd6.pause(); snd7.pause(); // Now both will play at the same time
}

function LoadModel(){
	//import 3d model
	const loader = new GLTFLoader();

	loader.load( './assets/hand.glb',(gltf)=>{
		const model = gltf.scene;
		
		scene.add(model);
		//get mesh OBJ
		gltf.scene.traverse(o=>{
			if(o.isMesh){
				hand = o;
				hand.material = material5;
				base = [model.getObjectByName( 'arm0' ),model.getObjectByName( 'arm1' )];
				wrist = [model.getObjectByName( 'wrist0' ),model.getObjectByName( 'wrist1' ),model.getObjectByName( 'wrist2' ),model.getObjectByName( 'wrist3' ),model.getObjectByName( 'wrist4' )];
				thumb = [model.getObjectByName( 't0' ),model.getObjectByName( 't1' ),model.getObjectByName( 't2' ),model.getObjectByName( 't3' ),model.getObjectByName( 't4' )]; 
				index = [model.getObjectByName( 'i0' ),model.getObjectByName( 'i1' ),model.getObjectByName( 'i2' ),model.getObjectByName( 'i3' ),model.getObjectByName( 'i4' )]; 
				middle = [model.getObjectByName( 'm0' ),model.getObjectByName( 'm1' ),model.getObjectByName( 'm2' ),model.getObjectByName( 'm3' ),model.getObjectByName( 'wm' )]; 
				ring = [model.getObjectByName( 'r0' ),model.getObjectByName( 'r1' ),model.getObjectByName( 'r2' ),model.getObjectByName( 'r3' ),model.getObjectByName( 'r4' )]; 
				pinky = [model.getObjectByName( 'p0' ),model.getObjectByName( 'p1' ),model.getObjectByName( 'p2' ),model.getObjectByName( 'p3' ),model.getObjectByName( 'p4' )];
				bone = [base,wrist,thumb,index,middle,ring,pinky];

				base[0].position.y = -6;
				base[0].scale.set(2,2,2);
			}

		})

	} )
}