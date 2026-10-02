(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=1021,S=1022,C=1023,w=1024,ee=1025,T=1026,te=1027,ne=1028,E=1029,re=1030,D=1031,ie=1033,ae=33776,oe=33777,se=33778,ce=33779,le=35840,ue=35841,de=35842,fe=35843,pe=36196,me=37492,he=37496,ge=37808,_e=37809,ve=37810,ye=37811,be=37812,xe=37813,Se=37814,Ce=37815,O=37816,we=37817,Te=37818,Ee=37819,De=37820,Oe=37821,ke=36492,Ae=36494,je=36495,Me=36283,Ne=36284,Pe=36285,Fe=36286,Ie=2300,Le=2301,Re=2302,ze=2400,Be=2401,Ve=2402,He=3200,Ue=3201,We=`srgb`,Ge=`srgb-linear`,Ke=`linear`,qe=`srgb`,Je=7680,Ye=35044,Xe=35048,Ze=2e3,Qe=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},$e=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),et=Math.PI/180,tt=180/Math.PI;function nt(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return($e[e&255]+$e[e>>8&255]+$e[e>>16&255]+$e[e>>24&255]+`-`+$e[t&255]+$e[t>>8&255]+`-`+$e[t>>16&15|64]+$e[t>>24&255]+`-`+$e[n&63|128]+$e[n>>8&255]+`-`+$e[n>>16&255]+$e[n>>24&255]+$e[r&255]+$e[r>>8&255]+$e[r>>16&255]+$e[r>>24&255]).toLowerCase()}function rt(e,t,n){return Math.max(t,Math.min(n,e))}function it(e,t){return(e%t+t)%t}function at(e,t,n){return(1-n)*e+n*t}function ot(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function st(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var k=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ct=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(lt.makeScale(e,t)),this}rotate(e){return this.premultiply(lt.makeRotation(-e)),this}translate(e,t){return this.premultiply(lt.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},lt=new ct;function ut(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function dt(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ft(){let e=dt(`canvas`);return e.style.display=`block`,e}var pt={};function mt(e){e in pt||(pt[e]=!0,console.warn(e))}function ht(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function gt(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function _t(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var vt={enabled:!0,workingColorSpace:Ge,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=yt(e.r),e.g=yt(e.g),e.b=yt(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=bt(e.r),e.g=bt(e.g),e.b=bt(e.b)),e)},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ke:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function yt(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function bt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var xt=[.64,.33,.3,.6,.15,.06],St=[.2126,.7152,.0722],Ct=[.3127,.329],wt=new ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Tt=new ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);vt.define({[Ge]:{primaries:xt,whitePoint:Ct,transfer:Ke,toXYZ:wt,fromXYZ:Tt,luminanceCoefficients:St,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:xt,whitePoint:Ct,transfer:qe,toXYZ:wt,fromXYZ:Tt,luminanceCoefficients:St,outputColorSpaceConfig:{drawingBufferColorSpace:We}}});var Et,Dt=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Et===void 0&&(Et=dt(`canvas`)),Et.width=e.width,Et.height=e.height;let n=Et.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Et}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=dt(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=yt(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(yt(t[e]/255)*255):t[e]=yt(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},Ot=0,kt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ot++}),this.uuid=nt(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(At(r[t].image)):e.push(At(r[t]))}else e=At(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function At(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Dt.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var jt=0,Mt=class r extends Qe{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=C,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jt++}),this.uuid=nt(),this.name=``,this.source=new kt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new k(0,0),this.repeat=new k(1,1),this.center=new k(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Mt.DEFAULT_IMAGE=null,Mt.DEFAULT_MAPPING=300,Mt.DEFAULT_ANISOTROPY=1;var Nt=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Pt=class extends Qe{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Nt(0,0,e,t),this.scissorTest=!1,this.viewport=new Nt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Mt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new kt(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},Ft=class extends Pt{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},It=class extends Mt{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Lt=class extends Mt{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(rt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},A=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bt.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bt.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zt.copy(this).projectOnVector(e),this.sub(zt)}reflect(e){return this.sub(zt.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(rt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},zt=new A,Bt=new Rt,Vt=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ut.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ut.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ut.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,Ut):Ut.fromBufferAttribute(r,t),Ut.applyMatrix4(e.matrixWorld),this.expandByPoint(Ut);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Wt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Wt.copy(e.boundingBox)),Wt.applyMatrix4(e.matrixWorld),this.union(Wt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ut),Ut.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Zt),Qt.subVectors(this.max,Zt),Gt.subVectors(e.a,Zt),Kt.subVectors(e.b,Zt),qt.subVectors(e.c,Zt),Jt.subVectors(Kt,Gt),Yt.subVectors(qt,Kt),Xt.subVectors(Gt,qt);let t=[0,-Jt.z,Jt.y,0,-Yt.z,Yt.y,0,-Xt.z,Xt.y,Jt.z,0,-Jt.x,Yt.z,0,-Yt.x,Xt.z,0,-Xt.x,-Jt.y,Jt.x,0,-Yt.y,Yt.x,0,-Xt.y,Xt.x,0];return!tn(t,Gt,Kt,qt,Qt)||(t=[1,0,0,0,1,0,0,0,1],!tn(t,Gt,Kt,qt,Qt))?!1:($t.crossVectors(Jt,Yt),t=[$t.x,$t.y,$t.z],tn(t,Gt,Kt,qt,Qt))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ut).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ut).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ht[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ht[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ht[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ht[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ht[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ht[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ht[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ht[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ht),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Ht=[new A,new A,new A,new A,new A,new A,new A,new A],Ut=new A,Wt=new Vt,Gt=new A,Kt=new A,qt=new A,Jt=new A,Yt=new A,Xt=new A,Zt=new A,Qt=new A,$t=new A,en=new A;function tn(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){en.fromArray(e,a);let o=i.x*Math.abs(en.x)+i.y*Math.abs(en.y)+i.z*Math.abs(en.z),s=t.dot(en),c=n.dot(en),l=r.dot(en);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var nn=new Vt,rn=new A,an=new A,on=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?nn.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;rn.subVectors(e,this.center);let t=rn.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector(rn,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(an.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(rn.copy(e.center).add(an)),this.expandByPoint(rn.copy(e.center).sub(an))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},sn=new A,cn=new A,ln=new A,un=new A,dn=new A,fn=new A,pn=new A,mn=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,sn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=sn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(sn.copy(this.origin).addScaledVector(this.direction,t),sn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){cn.copy(e).add(t).multiplyScalar(.5),ln.copy(t).sub(e).normalize(),un.copy(this.origin).sub(cn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(ln),o=un.dot(this.direction),s=-un.dot(ln),c=un.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(cn).addScaledVector(ln,d),f}intersectSphere(e,t){sn.subVectors(e.center,this.origin);let n=sn.dot(this.direction),r=sn.dot(sn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,sn)!==null}intersectTriangle(e,t,n,r,i){dn.subVectors(t,e),fn.subVectors(n,e),pn.crossVectors(dn,fn);let a=this.direction.dot(pn),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;un.subVectors(this.origin,e);let s=o*this.direction.dot(fn.crossVectors(un,fn));if(s<0)return null;let c=o*this.direction.dot(dn.cross(un));if(c<0||s+c>a)return null;let l=-o*un.dot(pn);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},hn=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/gn.setFromMatrixColumn(e,0).length(),i=1/gn.setFromMatrixColumn(e,1).length(),a=1/gn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vn,e,yn)}lookAt(e,t,n){let r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),bn.crossVectors(n,Sn),bn.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),bn.crossVectors(n,Sn)),bn.normalize(),xn.crossVectors(Sn,bn),r[0]=bn.x,r[4]=xn.x,r[8]=Sn.x,r[1]=bn.y,r[5]=xn.y,r[9]=Sn.y,r[2]=bn.z,r[6]=xn.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],ee=r[1],T=r[5],te=r[9],ne=r[13],E=r[2],re=r[6],D=r[10],ie=r[14],ae=r[3],oe=r[7],se=r[11],ce=r[15];return i[0]=a*x+o*ee+s*E+c*ae,i[4]=a*S+o*T+s*re+c*oe,i[8]=a*C+o*te+s*D+c*se,i[12]=a*w+o*ne+s*ie+c*ce,i[1]=l*x+u*ee+d*E+f*ae,i[5]=l*S+u*T+d*re+f*oe,i[9]=l*C+u*te+d*D+f*se,i[13]=l*w+u*ne+d*ie+f*ce,i[2]=p*x+m*ee+h*E+g*ae,i[6]=p*S+m*T+h*re+g*oe,i[10]=p*C+m*te+h*D+g*se,i[14]=p*w+m*ne+h*ie+g*ce,i[3]=_*x+v*ee+y*E+b*ae,i[7]=_*S+v*T+y*re+b*oe,i[11]=_*C+v*te+y*D+b*se,i[15]=_*w+v*ne+y*ie+b*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=gn.set(r[0],r[1],r[2]).length(),a=gn.set(r[4],r[5],r[6]).length(),o=gn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],_n.copy(this);let s=1/i,c=1/a,l=1/o;return _n.elements[0]*=s,_n.elements[1]*=s,_n.elements[2]*=s,_n.elements[4]*=c,_n.elements[5]*=c,_n.elements[6]*=c,_n.elements[8]*=l,_n.elements[9]*=l,_n.elements[10]*=l,t.setFromRotationMatrix(_n),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Ze){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Ze){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},gn=new A,_n=new hn,vn=new A(0,0,0),yn=new A(1,1,1),bn=new A,xn=new A,Sn=new A,Cn=new hn,wn=new Rt,Tn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(rt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-rt(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(rt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-rt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(rt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-rt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return wn.setFromEuler(this),this.setFromQuaternion(wn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Tn.DEFAULT_ORDER=`XYZ`;var En=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Dn=0,On=new A,kn=new Rt,An=new hn,jn=new A,Mn=new A,Nn=new A,Pn=new Rt,Fn=new A(1,0,0),In=new A(0,1,0),Ln=new A(0,0,1),Rn={type:`added`},zn={type:`removed`},Bn={type:`childadded`,child:null},Vn={type:`childremoved`,child:null},Hn=class e extends Qe{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dn++}),this.uuid=nt(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new A,n=new Tn,r=new Rt,i=new A(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new hn},normalMatrix:{value:new ct}}),this.matrix=new hn,this.matrixWorld=new hn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new En,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.multiply(kn),this}rotateOnWorldAxis(e,t){return kn.setFromAxisAngle(e,t),this.quaternion.premultiply(kn),this}rotateX(e){return this.rotateOnAxis(Fn,e)}rotateY(e){return this.rotateOnAxis(In,e)}rotateZ(e){return this.rotateOnAxis(Ln,e)}translateOnAxis(e,t){return On.copy(e).applyQuaternion(this.quaternion),this.position.add(On.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fn,e)}translateY(e){return this.translateOnAxis(In,e)}translateZ(e){return this.translateOnAxis(Ln,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jn.copy(e):jn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Mn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(Mn,jn,this.up):An.lookAt(jn,Mn,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),kn.setFromRotationMatrix(An),this.quaternion.premultiply(kn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Rn),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(zn),Vn.child=e,this.dispatchEvent(Vn),Vn.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Rn),Bn.child=e,this.dispatchEvent(Bn),Bn.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mn,e,Nn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mn,Pn,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Hn.DEFAULT_UP=new A(0,1,0),Hn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Hn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Un=new A,Wn=new A,Gn=new A,Kn=new A,qn=new A,Jn=new A,Yn=new A,Xn=new A,Zn=new A,Qn=new A,$n=new Nt,er=new Nt,tr=new Nt,nr=class e{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Un.subVectors(e,t),r.cross(Un);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){Un.subVectors(r,t),Wn.subVectors(n,t),Gn.subVectors(e,t);let a=Un.dot(Un),o=Un.dot(Wn),s=Un.dot(Gn),c=Wn.dot(Wn),l=Wn.dot(Gn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Kn)!==null&&Kn.x>=0&&Kn.y>=0&&Kn.x+Kn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Kn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Kn.x),s.addScaledVector(a,Kn.y),s.addScaledVector(o,Kn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return $n.setScalar(0),er.setScalar(0),tr.setScalar(0),$n.fromBufferAttribute(e,t),er.fromBufferAttribute(e,n),tr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector($n,i.x),a.addScaledVector(er,i.y),a.addScaledVector(tr,i.z),a}static isFrontFacing(e,t,n,r){return Un.subVectors(n,t),Wn.subVectors(e,t),Un.cross(Wn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),Un.cross(Wn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;qn.subVectors(r,n),Jn.subVectors(i,n),Xn.subVectors(e,n);let s=qn.dot(Xn),c=Jn.dot(Xn);if(s<=0&&c<=0)return t.copy(n);Zn.subVectors(e,r);let l=qn.dot(Zn),u=Jn.dot(Zn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(qn,a);Qn.subVectors(e,i);let f=qn.dot(Qn),p=Jn.dot(Qn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Jn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Yn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Yn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(qn,a).addScaledVector(Jn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},rr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ir={h:0,s:0,l:0},ar={h:0,s:0,l:0};function or(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var j=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=We){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,vt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=vt.workingColorSpace){if(e=it(e,1),t=rt(t,0,1),n=rt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=or(i,r,e+1/3),this.g=or(i,r,e),this.b=or(i,r,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,t=We){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=We){let n=rr[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=yt(e.r),this.g=yt(e.g),this.b=yt(e.b),this}copyLinearToSRGB(e){return this.r=bt(e.r),this.g=bt(e.g),this.b=bt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=We){return vt.fromWorkingColorSpace(sr.copy(this),e),Math.round(rt(sr.r*255,0,255))*65536+Math.round(rt(sr.g*255,0,255))*256+Math.round(rt(sr.b*255,0,255))}getHexString(e=We){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(sr.copy(this),t);let n=sr.r,r=sr.g,i=sr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(sr.copy(this),t),e.r=sr.r,e.g=sr.g,e.b=sr.b,e}getStyle(e=We){vt.fromWorkingColorSpace(sr.copy(this),e);let t=sr.r,n=sr.g,r=sr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(ir),this.setHSL(ir.h+e,ir.s+t,ir.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ir),e.getHSL(ar);let n=at(ir.h,ar.h,t),r=at(ir.s,ar.s,t),i=at(ir.l,ar.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},sr=new j;j.NAMES=rr;var cr=0,lr=class extends Qe{static get type(){return`Material`}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:cr++}),this.uuid=nt(),this.name=``,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new j(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Je,this.stencilZFail=Je,this.stencilZPass=Je,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},ur=class extends lr{static get type(){return`MeshBasicMaterial`}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},dr=new A,fr=new k,pr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ye,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)fr.fromBufferAttribute(this,t),fr.applyMatrix3(e),this.setXY(t,fr.x,fr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix3(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyMatrix4(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.applyNormalMatrix(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dr.fromBufferAttribute(this,t),dr.transformDirection(e),this.setXYZ(t,dr.x,dr.y,dr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ot(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ot(t,this.array)),t}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ot(t,this.array)),t}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ot(t,this.array)),t}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ot(t,this.array)),t}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array),i=st(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},mr=class extends pr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},hr=class extends pr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},gr=class extends pr{constructor(e,t,n){super(new Float32Array(e),t,n)}},_r=0,vr=new hn,yr=new Hn,br=new A,xr=new Vt,Sr=new Vt,Cr=new A,wr=class e extends Qe{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_r++}),this.uuid=nt(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ut(e)?hr:mr)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new ct().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return vr.makeRotationFromQuaternion(e),this.applyMatrix4(vr),this}rotateX(e){return vr.makeRotationX(e),this.applyMatrix4(vr),this}rotateY(e){return vr.makeRotationY(e),this.applyMatrix4(vr),this}rotateZ(e){return vr.makeRotationZ(e),this.applyMatrix4(vr),this}translate(e,t,n){return vr.makeTranslation(e,t,n),this.applyMatrix4(vr),this}scale(e,t,n){return vr.makeScale(e,t,n),this.applyMatrix4(vr),this}lookAt(e){return yr.lookAt(e),yr.updateMatrix(),this.applyMatrix4(yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(br).negate(),this.translate(br.x,br.y,br.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new gr(t,3))}else{for(let n=0,r=t.count;n<r;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];xr.setFromBufferAttribute(n),this.morphTargetsRelative?(Cr.addVectors(this.boundingBox.min,xr.min),this.boundingBox.expandByPoint(Cr),Cr.addVectors(this.boundingBox.max,xr.max),this.boundingBox.expandByPoint(Cr)):(this.boundingBox.expandByPoint(xr.min),this.boundingBox.expandByPoint(xr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new on);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(xr.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];Sr.setFromBufferAttribute(n),this.morphTargetsRelative?(Cr.addVectors(xr.min,Sr.min),xr.expandByPoint(Cr),Cr.addVectors(xr.max,Sr.max),xr.expandByPoint(Cr)):(xr.expandByPoint(Sr.min),xr.expandByPoint(Sr.max))}xr.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)Cr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(Cr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)Cr.fromBufferAttribute(a,t),o&&(br.fromBufferAttribute(e,t),Cr.add(br)),r=Math.max(r,n.distanceToSquared(Cr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new pr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new A,s[e]=new A;let c=new A,l=new A,u=new A,d=new k,f=new k,p=new k,m=new A,h=new A;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new A,y=new A,b=new A,x=new A;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new pr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new A,i=new A,a=new A,o=new A,s=new A,c=new A,l=new A,u=new A;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Cr.fromBufferAttribute(e,t),Cr.normalize(),e.setXYZ(t,Cr.x,Cr.y,Cr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new pr(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},Tr=new hn,Er=new mn,Dr=new on,Or=new A,kr=new A,Ar=new A,jr=new A,Mr=new A,Nr=new A,Pr=new A,Fr=new A,M=class extends Hn{constructor(e=new wr,t=new ur){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){Nr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Mr.fromBufferAttribute(s,e),a?Nr.addScaledVector(Mr,r):Nr.addScaledVector(Mr.sub(t),r))}t.add(Nr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(i),Er.copy(e.ray).recast(e.near),!(Dr.containsPoint(Er.origin)===!1&&(Er.intersectSphere(Dr,Or)===null||Er.origin.distanceToSquared(Or)>(e.far-e.near)**2))&&(Tr.copy(i).invert(),Er.copy(e.ray).applyMatrix4(Tr),(n.boundingBox===null||Er.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Er)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Lr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Lr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Lr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Lr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Ir(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;Fr.copy(s),Fr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(Fr);return l<n.near||l>n.far?null:{distance:l,point:Fr.clone(),object:e}}function Lr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,kr),e.getVertexPosition(c,Ar),e.getVertexPosition(l,jr);let u=Ir(e,t,n,r,kr,Ar,jr,Pr);if(u){let e=new A;nr.getBarycoord(Pr,kr,Ar,jr,e),i&&(u.uv=nr.getInterpolatedAttribute(i,s,c,l,e,new k)),a&&(u.uv1=nr.getInterpolatedAttribute(a,s,c,l,e,new k)),o&&(u.normal=nr.getInterpolatedAttribute(o,s,c,l,e,new A),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new A,materialIndex:0};nr.getNormal(kr,Ar,jr,t.normal),u.face=t,u.barycoord=e}return u}var Rr=class e extends wr{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new gr(c,3)),this.setAttribute(`normal`,new gr(l,3)),this.setAttribute(`uv`,new gr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,ee=0,T=0,te=new A;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)te[e]=(s*v-b)*r,te[t]=o*i,te[n]=S,c.push(te.x,te.y,te.z),te[e]=0,te[t]=0,te[n]=m>0?1:-1,l.push(te.x,te.y,te.z),u.push(s/h),u.push(1-a/g),ee+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),T+=6}o.addGroup(f,T,_),f+=T,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function zr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Br(e){let t={};for(let n=0;n<e.length;n++){let r=zr(e[n]);for(let e in r)t[e]=r[e]}return t}function Vr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Hr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:vt.workingColorSpace}var Ur={clone:zr,merge:Br},Wr=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kr=class extends lr{static get type(){return`ShaderMaterial`}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wr,this.fragmentShader=Gr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zr(e.uniforms),this.uniformsGroups=Vr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},qr=class extends Hn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new hn,this.projectionMatrix=new hn,this.projectionMatrixInverse=new hn,this.coordinateSystem=Ze}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jr=new A,Yr=new k,Xr=new k,Zr=class extends qr{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=tt*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(et*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return tt*2*Math.atan(Math.tan(et*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jr.x,Jr.y).multiplyScalar(-e/Jr.z)}getViewSize(e,t){return this.getViewBounds(e,Yr,Xr),t.subVectors(Xr,Yr)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(et*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Qr=-90,$r=1,ei=class extends Hn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new Zr(Qr,$r,e,t);r.layers=this.layers,this.add(r);let i=new Zr(Qr,$r,e,t);i.layers=this.layers,this.add(i);let a=new Zr(Qr,$r,e,t);a.layers=this.layers,this.add(a);let o=new Zr(Qr,$r,e,t);o.layers=this.layers,this.add(o);let s=new Zr(Qr,$r,e,t);s.layers=this.layers,this.add(s);let c=new Zr(Qr,$r,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},ti=class extends Mt{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ni=class extends Ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new ti(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?o:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Rr(5,5,5),i=new Kr({name:`CubemapFromEquirect`,uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new M(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new ei(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},ri=new A,ii=new A,ai=new ct,oi=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=ri.subVectors(n,t).cross(ii.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ri),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ai.getNormalMatrix(e),r=this.coplanarPoint(ri).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},si=new on,ci=new A,li=class{constructor(e=new oi,t=new oi,n=new oi,r=new oi,i=new oi,a=new oi){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ze){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(si)}intersectsSprite(e){return si.center.set(0,0,0),si.radius=.7071067811865476,si.applyMatrix4(e.matrixWorld),this.intersectsSphere(si)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ci.x=r.normal.x>0?e.max.x:e.min.x,ci.y=r.normal.y>0?e.max.y:e.min.y,ci.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ci)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function ui(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function di(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var fi=class e extends wr{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new gr(p,3)),this.setAttribute(`normal`,new gr(m,3)),this.setAttribute(`uv`,new gr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},pi={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},N={common:{diffuse:{value:new j(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ct}},envmap:{envMap:{value:null},envMapRotation:{value:new ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ct},normalScale:{value:new k(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new j(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new j(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0},uvTransform:{value:new ct}},sprite:{diffuse:{value:new j(16777215)},opacity:{value:1},center:{value:new k(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ct},alphaMap:{value:null},alphaMapTransform:{value:new ct},alphaTest:{value:0}}},mi={basic:{uniforms:Br([N.common,N.specularmap,N.envmap,N.aomap,N.lightmap,N.fog]),vertexShader:pi.meshbasic_vert,fragmentShader:pi.meshbasic_frag},lambert:{uniforms:Br([N.common,N.specularmap,N.envmap,N.aomap,N.lightmap,N.emissivemap,N.bumpmap,N.normalmap,N.displacementmap,N.fog,N.lights,{emissive:{value:new j(0)}}]),vertexShader:pi.meshlambert_vert,fragmentShader:pi.meshlambert_frag},phong:{uniforms:Br([N.common,N.specularmap,N.envmap,N.aomap,N.lightmap,N.emissivemap,N.bumpmap,N.normalmap,N.displacementmap,N.fog,N.lights,{emissive:{value:new j(0)},specular:{value:new j(1118481)},shininess:{value:30}}]),vertexShader:pi.meshphong_vert,fragmentShader:pi.meshphong_frag},standard:{uniforms:Br([N.common,N.envmap,N.aomap,N.lightmap,N.emissivemap,N.bumpmap,N.normalmap,N.displacementmap,N.roughnessmap,N.metalnessmap,N.fog,N.lights,{emissive:{value:new j(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:pi.meshphysical_vert,fragmentShader:pi.meshphysical_frag},toon:{uniforms:Br([N.common,N.aomap,N.lightmap,N.emissivemap,N.bumpmap,N.normalmap,N.displacementmap,N.gradientmap,N.fog,N.lights,{emissive:{value:new j(0)}}]),vertexShader:pi.meshtoon_vert,fragmentShader:pi.meshtoon_frag},matcap:{uniforms:Br([N.common,N.bumpmap,N.normalmap,N.displacementmap,N.fog,{matcap:{value:null}}]),vertexShader:pi.meshmatcap_vert,fragmentShader:pi.meshmatcap_frag},points:{uniforms:Br([N.points,N.fog]),vertexShader:pi.points_vert,fragmentShader:pi.points_frag},dashed:{uniforms:Br([N.common,N.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:pi.linedashed_vert,fragmentShader:pi.linedashed_frag},depth:{uniforms:Br([N.common,N.displacementmap]),vertexShader:pi.depth_vert,fragmentShader:pi.depth_frag},normal:{uniforms:Br([N.common,N.bumpmap,N.normalmap,N.displacementmap,{opacity:{value:1}}]),vertexShader:pi.meshnormal_vert,fragmentShader:pi.meshnormal_frag},sprite:{uniforms:Br([N.sprite,N.fog]),vertexShader:pi.sprite_vert,fragmentShader:pi.sprite_frag},background:{uniforms:{uvTransform:{value:new ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:pi.background_vert,fragmentShader:pi.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ct}},vertexShader:pi.backgroundCube_vert,fragmentShader:pi.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:pi.cube_vert,fragmentShader:pi.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:pi.equirect_vert,fragmentShader:pi.equirect_frag},distanceRGBA:{uniforms:Br([N.common,N.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:pi.distanceRGBA_vert,fragmentShader:pi.distanceRGBA_frag},shadow:{uniforms:Br([N.lights,N.fog,{color:{value:new j(0)},opacity:{value:1}}]),vertexShader:pi.shadow_vert,fragmentShader:pi.shadow_frag}};mi.physical={uniforms:Br([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ct},clearcoatNormalScale:{value:new k(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ct},sheen:{value:0},sheenColor:{value:new j(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ct},transmissionSamplerSize:{value:new k},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ct},attenuationDistance:{value:0},attenuationColor:{value:new j(0)},specularColor:{value:new j(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ct},anisotropyVector:{value:new k},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ct}}]),vertexShader:pi.meshphysical_vert,fragmentShader:pi.meshphysical_frag};var hi={r:0,b:0,g:0},gi=new Tn,_i=new hn;function vi(e,t,n,r,i,a,o){let s=new j(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new M(new Rr(1,1,1),new Kr({name:`BackgroundCubeMaterial`,uniforms:zr(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),gi.copy(n.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(_i.makeRotationFromEuler(gi)),u.material.toneMapped=vt.getTransfer(r.colorSpace)!==qe,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new M(new fi(2,2),new Kr({name:`BackgroundMaterial`,uniforms:zr(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=vt.getTransfer(r.colorSpace)!==qe,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(hi,Hr(e)),r.buffers.color.setClear(hi.r,hi.g,hi.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function yi(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){ee(),o=!0,a!==i&&(a=i,l(a.object))}function ee(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:ee,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function bi(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function xi(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function Si(e){let t=this,n=null,r=0,i=!1,a=!1,o=new oi,s=new ct,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function Ci(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new ni(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var wi=class extends qr{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ti=4,Ei=[.125,.215,.35,.446,.526,.582],Di=20,Oi=new wi,ki=new j,Ai=null,ji=0,Mi=0,Ni=!1,Pi=(1+Math.sqrt(5))/2,Fi=1/Pi,Ii=[new A(-Pi,Fi,0),new A(Pi,Fi,0),new A(-Fi,0,Pi),new A(Fi,0,Pi),new A(0,Pi,-Fi),new A(0,Pi,Fi),new A(-1,1,-1),new A(1,1,-1),new A(-1,1,1),new A(1,1,1)],Li=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ai=this._renderer.getRenderTarget(),ji=this._renderer.getActiveCubeFace(),Mi=this._renderer.getActiveMipmapLevel(),Ni=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ui(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hi(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ai,ji,Mi),this._renderer.xr.enabled=Ni,e.scissorTest=!1,Bi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ai=this._renderer.getRenderTarget(),ji=this._renderer.getActiveCubeFace(),Mi=this._renderer.getActiveMipmapLevel(),Ni=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:C,colorSpace:Ge,depthBuffer:!1},r=zi(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zi(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ri(r)),this._blurMaterial=Vi(r,e,t)}return r}_compileMaterial(e){let t=new M(this._lodPlanes[0],e);this._renderer.compile(t,Oi)}_sceneToCubeUV(e,t,n,r){let i=new Zr(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(ki),s.toneMapping=0,s.autoClear=!1;let u=new ur({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new M(new Rr,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(ki),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Bi(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ui()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hi());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new M(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Bi(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Oi)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=Ii[(r-t-1)%Ii.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new M(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Di;m>Di&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Di}`);let h=[],g=0;for(let e=0;e<Di;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Bi(t,3*v*(r>_-Ti?r-_+Ti:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Oi)}};function Ri(e){let t=[],n=[],r=[],i=e,a=e-Ti+1+Ei.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-Ti?s=Ei[o-e+Ti-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new wr;h.setAttribute(`position`,new pr(f,3)),h.setAttribute(`uv`,new pr(p,2)),h.setAttribute(`faceIndex`,new pr(m,1)),t.push(h),i>Ti&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function zi(e,t,n){let r=new Ft(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Bi(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Vi(e,t,n){let r=new Float32Array(Di),i=new A(0,1,0);return new Kr({name:`SphericalGaussianBlur`,defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Wi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Hi(){return new Kr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Wi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ui(){return new Kr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Wi(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Gi(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Li(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Li(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Ki(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&mt(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function qi(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(ut(n)?hr:mr)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ji(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Yi(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Xi(e,t,n){let r=new WeakMap,i=new Nt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new It(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new k(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Zi(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var Qi=class extends Mt{constructor(e,t,n,i,a,o,s,c,l,u=T){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&u===1026&&(n=m),n===void 0&&u===1027&&(n=y),super(null,i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?r:s,this.minFilter=c===void 0?r:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},$i=new Mt,ea=new Qi(1,1),ta=new It,na=new Lt,ra=new ti,ia=[],aa=[],oa=new Float32Array(16),sa=new Float32Array(9),ca=new Float32Array(4);function la(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=ia[i];if(a===void 0&&(a=new Float32Array(i),ia[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function ua(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function da(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function fa(e,t){let n=aa[t];n===void 0&&(n=new Int32Array(t),aa[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function pa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function ma(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ua(n,t))return;e.uniform2fv(this.addr,t),da(n,t)}}function ha(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(ua(n,t))return;e.uniform3fv(this.addr,t),da(n,t)}}function ga(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ua(n,t))return;e.uniform4fv(this.addr,t),da(n,t)}}function _a(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ua(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),da(n,t)}else{if(ua(n,r))return;ca.set(r),e.uniformMatrix2fv(this.addr,!1,ca),da(n,r)}}function va(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ua(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),da(n,t)}else{if(ua(n,r))return;sa.set(r),e.uniformMatrix3fv(this.addr,!1,sa),da(n,r)}}function ya(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(ua(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),da(n,t)}else{if(ua(n,r))return;oa.set(r),e.uniformMatrix4fv(this.addr,!1,oa),da(n,r)}}function ba(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function xa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ua(n,t))return;e.uniform2iv(this.addr,t),da(n,t)}}function Sa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ua(n,t))return;e.uniform3iv(this.addr,t),da(n,t)}}function Ca(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ua(n,t))return;e.uniform4iv(this.addr,t),da(n,t)}}function wa(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function Ta(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(ua(n,t))return;e.uniform2uiv(this.addr,t),da(n,t)}}function Ea(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(ua(n,t))return;e.uniform3uiv(this.addr,t),da(n,t)}}function Da(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(ua(n,t))return;e.uniform4uiv(this.addr,t),da(n,t)}}function Oa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(ea.compareFunction=515,a=ea):a=$i,n.setTexture2D(t||a,i)}function ka(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||na,i)}function Aa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||ra,i)}function ja(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||ta,i)}function Ma(e){switch(e){case 5126:return pa;case 35664:return ma;case 35665:return ha;case 35666:return ga;case 35674:return _a;case 35675:return va;case 35676:return ya;case 5124:case 35670:return ba;case 35667:case 35671:return xa;case 35668:case 35672:return Sa;case 35669:case 35673:return Ca;case 5125:return wa;case 36294:return Ta;case 36295:return Ea;case 36296:return Da;case 35678:case 36198:case 36298:case 36306:case 35682:return Oa;case 35679:case 36299:case 36307:return ka;case 35680:case 36300:case 36308:case 36293:return Aa;case 36289:case 36303:case 36311:case 36292:return ja}}function Na(e,t){e.uniform1fv(this.addr,t)}function Pa(e,t){let n=la(t,this.size,2);e.uniform2fv(this.addr,n)}function Fa(e,t){let n=la(t,this.size,3);e.uniform3fv(this.addr,n)}function Ia(e,t){let n=la(t,this.size,4);e.uniform4fv(this.addr,n)}function La(e,t){let n=la(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Ra(e,t){let n=la(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function za(e,t){let n=la(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Ba(e,t){e.uniform1iv(this.addr,t)}function Va(e,t){e.uniform2iv(this.addr,t)}function Ha(e,t){e.uniform3iv(this.addr,t)}function Ua(e,t){e.uniform4iv(this.addr,t)}function Wa(e,t){e.uniform1uiv(this.addr,t)}function Ga(e,t){e.uniform2uiv(this.addr,t)}function Ka(e,t){e.uniform3uiv(this.addr,t)}function qa(e,t){e.uniform4uiv(this.addr,t)}function Ja(e,t,n){let r=this.cache,i=t.length,a=fa(n,i);ua(r,a)||(e.uniform1iv(this.addr,a),da(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||$i,a[e])}function Ya(e,t,n){let r=this.cache,i=t.length,a=fa(n,i);ua(r,a)||(e.uniform1iv(this.addr,a),da(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||na,a[e])}function Xa(e,t,n){let r=this.cache,i=t.length,a=fa(n,i);ua(r,a)||(e.uniform1iv(this.addr,a),da(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||ra,a[e])}function Za(e,t,n){let r=this.cache,i=t.length,a=fa(n,i);ua(r,a)||(e.uniform1iv(this.addr,a),da(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||ta,a[e])}function Qa(e){switch(e){case 5126:return Na;case 35664:return Pa;case 35665:return Fa;case 35666:return Ia;case 35674:return La;case 35675:return Ra;case 35676:return za;case 5124:case 35670:return Ba;case 35667:case 35671:return Va;case 35668:case 35672:return Ha;case 35669:case 35673:return Ua;case 5125:return Wa;case 36294:return Ga;case 36295:return Ka;case 36296:return qa;case 35678:case 36198:case 36298:case 36306:case 35682:return Ja;case 35679:case 36299:case 36307:return Ya;case 35680:case 36300:case 36308:case 36293:return Xa;case 36289:case 36303:case 36311:case 36292:return Za}}var $a=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Ma(t.type)}},eo=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qa(t.type)}},to=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},no=/(\w+)(\])?(\[|\.)?/g;function ro(e,t){e.seq.push(t),e.map[t.id]=t}function io(e,t,n){let r=e.name,i=r.length;for(no.lastIndex=0;;){let a=no.exec(r),o=no.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){ro(n,l===void 0?new $a(s,e,t):new eo(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new to(s),ro(n,e)),n=e}}}var ao=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);io(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function oo(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var so=37297,co=0;function lo(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var uo=new ct;function fo(e){vt._getMatrix(uo,vt.workingColorSpace,e);let t=`mat3( ${uo.elements.map(e=>e.toFixed(4))} )`;switch(vt.getTransfer(e)){case Ke:return[t,`LinearTransferOETF`];case qe:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function po(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+lo(e.getShaderSource(t),r)}return i}function mo(e,t){let n=fo(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function ho(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var go=new A;function _o(){return vt.getLuminanceCoefficients(go),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${go.x.toFixed(4)}, ${go.y.toFixed(4)}, ${go.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function vo(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(xo).join(`
`)}function yo(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function bo(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function xo(e){return e!==``}function So(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Co(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var wo=/^[ \t]*#include +<([\w\d./]+)>/gm;function To(e){return e.replace(wo,Do)}var Eo=new Map;function Do(e,t){let n=pi[t];if(n===void 0){let e=Eo.get(t);if(e!==void 0)n=pi[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return To(n)}var Oo=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ko(e){return e.replace(Oo,Ao)}function Ao(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function jo(e){let t=`precision ${e.precision} float;
	precision ${e.precision} int;
	precision ${e.precision} sampler2D;
	precision ${e.precision} samplerCube;
	precision ${e.precision} sampler3D;
	precision ${e.precision} sampler2DArray;
	precision ${e.precision} sampler2DShadow;
	precision ${e.precision} samplerCubeShadow;
	precision ${e.precision} sampler2DArrayShadow;
	precision ${e.precision} isampler2D;
	precision ${e.precision} isampler3D;
	precision ${e.precision} isamplerCube;
	precision ${e.precision} isampler2DArray;
	precision ${e.precision} usampler2D;
	precision ${e.precision} usampler3D;
	precision ${e.precision} usamplerCube;
	precision ${e.precision} usampler2DArray;
	`;return e.precision===`highp`?t+=`
#define HIGH_PRECISION`:e.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:e.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}function Mo(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function No(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function Po(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function Fo(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function Io(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Lo(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Mo(n),l=No(n),u=Po(n),d=Fo(n),f=Io(n),p=vo(n),m=yo(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(xo).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(xo).join(`
`),_.length>0&&(_+=`
`)):(g=[jo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(xo).join(`
`),_=[jo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:pi.tonemapping_pars_fragment,n.toneMapping===0?``:ho(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,pi.colorspace_pars_fragment,mo(`linearToOutputTexel`,n.outputColorSpace),_o(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(xo).join(`
`)),o=To(o),o=So(o,n),o=Co(o,n),s=To(s),s=So(s,n),s=Co(s,n),o=ko(o),s=ko(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=oo(i,i.VERTEX_SHADER,y),S=oo(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=po(i,x,`vertex`),r=po(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new ao(i,h),ee=bo(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let ee;this.getAttributes=function(){return ee===void 0&&C(this),ee};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=i.getProgramParameter(h,so)),T},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=co++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var Ro=0,zo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Bo(e),t.set(e,n)),n}},Bo=class{constructor(e){this.id=Ro++,this.code=e,this.usedTimes=0}};function Vo(e,t,n,r,i,a,o){let s=new En,c=new zo,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,ee=w===void 0?0:w.length,T=0;y.morphAttributes.position!==void 0&&(T=1),y.morphAttributes.normal!==void 0&&(T=2),y.morphAttributes.color!==void 0&&(T=3);let te,ne,E,re;if(C){let e=mi[C];te=e.vertexShader,ne=e.fragmentShader}else te=a.vertexShader,ne=a.fragmentShader,c.update(a),E=c.getVertexShaderID(a),re=c.getFragmentShaderID(a);let D=e.getRenderTarget(),ie=e.state.buffers.depth.getReversed(),ae=_.isInstancedMesh===!0,oe=_.isBatchedMesh===!0,se=!!a.map,ce=!!a.matcap,le=!!x,ue=!!a.aoMap,de=!!a.lightMap,fe=!!a.bumpMap,pe=!!a.normalMap,me=!!a.displacementMap,he=!!a.emissiveMap,ge=!!a.metalnessMap,_e=!!a.roughnessMap,ve=a.anisotropy>0,ye=a.clearcoat>0,be=a.dispersion>0,xe=a.iridescence>0,Se=a.sheen>0,Ce=a.transmission>0,O=ve&&!!a.anisotropyMap,we=ye&&!!a.clearcoatMap,Te=ye&&!!a.clearcoatNormalMap,Ee=ye&&!!a.clearcoatRoughnessMap,De=xe&&!!a.iridescenceMap,Oe=xe&&!!a.iridescenceThicknessMap,ke=Se&&!!a.sheenColorMap,Ae=Se&&!!a.sheenRoughnessMap,je=!!a.specularMap,Me=!!a.specularColorMap,Ne=!!a.specularIntensityMap,Pe=Ce&&!!a.transmissionMap,Fe=Ce&&!!a.thicknessMap,Ie=!!a.gradientMap,Le=!!a.alphaMap,Re=a.alphaTest>0,ze=!!a.alphaHash,Be=!!a.extensions,Ve=0;a.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(Ve=e.toneMapping);let He={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:te,fragmentShader:ne,defines:a.defines,customVertexShaderID:E,customFragmentShaderID:re,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:oe,batchingColor:oe&&_._colorsTexture!==null,instancing:ae,instancingColor:ae&&_.instanceColor!==null,instancingMorph:ae&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:D===null?e.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:Ge,alphaToCoverage:!!a.alphaToCoverage,map:se,matcap:ce,envMap:le,envMapMode:le&&x.mapping,envMapCubeUVHeight:S,aoMap:ue,lightMap:de,bumpMap:fe,normalMap:pe,displacementMap:f&&me,emissiveMap:he,normalMapObjectSpace:pe&&a.normalMapType===1,normalMapTangentSpace:pe&&a.normalMapType===0,metalnessMap:ge,roughnessMap:_e,anisotropy:ve,anisotropyMap:O,clearcoat:ye,clearcoatMap:we,clearcoatNormalMap:Te,clearcoatRoughnessMap:Ee,dispersion:be,iridescence:xe,iridescenceMap:De,iridescenceThicknessMap:Oe,sheen:Se,sheenColorMap:ke,sheenRoughnessMap:Ae,specularMap:je,specularColorMap:Me,specularIntensityMap:Ne,transmission:Ce,transmissionMap:Pe,thicknessMap:Fe,gradientMap:Ie,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Le,alphaTest:Re,alphaHash:ze,combine:a.combine,mapUv:se&&h(a.map.channel),aoMapUv:ue&&h(a.aoMap.channel),lightMapUv:de&&h(a.lightMap.channel),bumpMapUv:fe&&h(a.bumpMap.channel),normalMapUv:pe&&h(a.normalMap.channel),displacementMapUv:me&&h(a.displacementMap.channel),emissiveMapUv:he&&h(a.emissiveMap.channel),metalnessMapUv:ge&&h(a.metalnessMap.channel),roughnessMapUv:_e&&h(a.roughnessMap.channel),anisotropyMapUv:O&&h(a.anisotropyMap.channel),clearcoatMapUv:we&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:Te&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&h(a.sheenRoughnessMap.channel),specularMapUv:je&&h(a.specularMap.channel),specularColorMapUv:Me&&h(a.specularColorMap.channel),specularIntensityMapUv:Ne&&h(a.specularIntensityMap.channel),transmissionMapUv:Pe&&h(a.transmissionMap.channel),thicknessMapUv:Fe&&h(a.thicknessMap.channel),alphaMapUv:Le&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(pe||ve),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(se||Le),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:ie,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:T,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Ve,decodeVideoTexture:se&&a.map.isVideoTexture===!0&&vt.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:he&&a.emissiveMap.isVideoTexture===!0&&vt.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Be&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Be&&a.extensions.multiDraw===!0||oe)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return He.vertexUv1s=l.has(1),He.vertexUv2s=l.has(2),He.vertexUv3s=l.has(3),l.clear(),He}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=mi[t];n=Ur.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Lo(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Ho(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Uo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Wo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Go(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Uo),r.length>1&&r.sort(t||Wo),i.length>1&&i.sort(t||Wo)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Ko(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Go,e.set(t,[i])):n>=r.length?(i=new Go,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function qo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new A,color:new j};break;case`SpotLight`:n={position:new A,direction:new A,color:new j,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new A,color:new j,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new A,skyColor:new j,groundColor:new j};break;case`RectAreaLight`:n={color:new j,position:new A,halfWidth:new A,halfHeight:new A}}return e[t.id]=n,n}}}function Jo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new k,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Yo=0;function Xo(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Zo(e){let t=new qo,n=Jo(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new A);let i=new A,a=new hn,o=new hn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Xo);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=N.LTC_FLOAT_1,r.rectAreaLTC2=N.LTC_FLOAT_2):(r.rectAreaLTC1=N.LTC_HALF_1,r.rectAreaLTC2=N.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Yo++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function Qo(e){let t=new Zo(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function $o(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new Qo(e),t.set(n,[a])):r>=i.length?(a=new Qo(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var es=class extends lr{static get type(){return`MeshDepthMaterial`}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=He,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ts=class extends lr{static get type(){return`MeshDistanceMaterial`}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},ns=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rs=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function is(e,t,n){let i=new li,a=new k,o=new k,s=new Nt,c=new es({depthPacking:Ue}),l=new ts,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new Kr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new k},radius:{value:4}},vertexShader:ns,fragmentShader:rs}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new wr;h.setAttribute(`position`,new pr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new M(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();if(a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:r,magFilter:r};f.map!==null&&f.map.dispose(),f.map=new Ft(a.x,a.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),i=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let i=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new Ft(a.x,a.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],r,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var as={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function os(e,t){function n(){let t=!1,n=new Nt,r=null,i=new Nt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let e=t.get(`EXT_clip_control`);r?e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT):e.clipControlEXT(e.LOWER_LEFT_EXT,e.NEGATIVE_ONE_TO_ONE_EXT);let n=o;o=null,this.setClear(n)}r=e},getReversed:function(){return r},setTest:function(t){t?he(e.DEPTH_TEST):ge(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=as[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?he(e.STENCIL_TEST):ge(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new j(0,0,0),w=0,ee=!1,T=null,te=null,ne=null,E=null,re=null,D=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),ie=!1,ae=0,oe=e.getParameter(e.VERSION);oe.indexOf(`WebGL`)===-1?oe.indexOf(`OpenGL ES`)!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(oe)[1]),ie=ae>=2):(ae=parseFloat(/^WebGL (\d)/.exec(oe)[1]),ie=ae>=1);let se=null,ce={},le=e.getParameter(e.SCISSOR_BOX),ue=e.getParameter(e.VIEWPORT),de=new Nt().fromArray(le),fe=new Nt().fromArray(ue);function pe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let me={};me[e.TEXTURE_2D]=pe(e.TEXTURE_2D,e.TEXTURE_2D,1),me[e.TEXTURE_CUBE_MAP]=pe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[e.TEXTURE_2D_ARRAY]=pe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),me[e.TEXTURE_3D]=pe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),he(e.DEPTH_TEST),o.setFunc(3),O(!1),we(1),he(e.CULL_FACE),Se(0);function he(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function ge(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function _e(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function ve(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ye(t){return m!==t&&(e.useProgram(t),m=t,!0)}let be={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};be[103]=e.MIN,be[104]=e.MAX;let xe={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function Se(t,n,r,i,a,o,s,c,l,u){if(t===0){h===!0&&(ge(e.BLEND),h=!1);return}if(h===!1&&(he(e.BLEND),h=!0),t!==5){if(t!==g||u!==ee){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,ee=u}return}a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(be[n],be[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(xe[r],xe[i],xe[o],xe[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,ee=!1}function Ce(t,n){t.side===2?ge(e.CULL_FACE):he(e.CULL_FACE);let r=t.side===1;n&&(r=!r),O(r),t.blending===1&&t.transparent===!1?Se(0):Se(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Ee(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?he(e.SAMPLE_ALPHA_TO_COVERAGE):ge(e.SAMPLE_ALPHA_TO_COVERAGE)}function O(t){T!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),T=t)}function we(t){t===0?ge(e.CULL_FACE):(he(e.CULL_FACE),t!==te&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),te=t}function Te(t){t!==ne&&(ie&&e.lineWidth(t),ne=t)}function Ee(t,n,r){t?(he(e.POLYGON_OFFSET_FILL),(E!==n||re!==r)&&(e.polygonOffset(n,r),E=n,re=r)):ge(e.POLYGON_OFFSET_FILL)}function De(t){t?he(e.SCISSOR_TEST):ge(e.SCISSOR_TEST)}function Oe(t){t===void 0&&(t=e.TEXTURE0+D-1),se!==t&&(e.activeTexture(t),se=t)}function ke(t,n,r){r===void 0&&(r=se===null?e.TEXTURE0+D-1:se);let i=ce[r];i===void 0&&(i={type:void 0,texture:void 0},ce[r]=i),(i.type!==t||i.texture!==n)&&(se!==r&&(e.activeTexture(r),se=r),e.bindTexture(t,n||me[t]),i.type=t,i.texture=n)}function Ae(){let t=ce[se];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function je(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Me(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ne(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Pe(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Fe(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ie(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Le(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Re(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ze(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Be(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ve(t){de.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),de.copy(t))}function He(t){fe.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),fe.copy(t))}function Ue(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function We(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function Ge(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},se=null,ce={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new j(0,0,0),w=0,ee=!1,T=null,te=null,ne=null,E=null,re=null,de.set(0,0,e.canvas.width,e.canvas.height),fe.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:he,disable:ge,bindFramebuffer:_e,drawBuffers:ve,useProgram:ye,setBlending:Se,setMaterial:Ce,setFlipSided:O,setCullFace:we,setLineWidth:Te,setPolygonOffset:Ee,setScissorTest:De,activeTexture:Oe,bindTexture:ke,unbindTexture:Ae,compressedTexImage2D:je,compressedTexImage3D:Me,texImage2D:ze,texImage3D:Be,updateUBOMapping:Ue,uniformBlockBinding:We,texStorage2D:Le,texStorage3D:Re,texSubImage2D:Ne,texSubImage3D:Pe,compressedTexSubImage2D:Fe,compressedTexSubImage3D:Ie,scissor:Ve,viewport:He,reset:Ge}}function ss(e,t,n,r){let i=cs(r);switch(n){case x:return e*t;case w:return e*t;case ee:return e*t*2;case ne:return e*t/i.components*i.byteLength;case E:return e*t/i.components*i.byteLength;case re:return e*t*2/i.components*i.byteLength;case D:return e*t*2/i.components*i.byteLength;case S:return e*t*3/i.components*i.byteLength;case C:return e*t*4/i.components*i.byteLength;case ie:return e*t*4/i.components*i.byteLength;case ae:case oe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case se:case ce:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ue:case fe:return Math.max(e,16)*Math.max(t,8)/4;case le:case de:return Math.max(e,8)*Math.max(t,8)/2;case pe:case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case ve:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case be:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Ce:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case O:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Ee:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case De:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Oe:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case ke:case Ae:case je:return Math.ceil(e/4)*Math.ceil(t/4)*16;case Me:case Ne:return Math.ceil(e/4)*Math.ceil(t/4)*8;case Pe:case Fe:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function cs(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function ls(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new k,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):dt(`canvas`)}function w(e,t,n){let r=1,i=Le(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function ee(e){return e.generateMipmaps}function T(e){l.generateMipmap(e)}function ne(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function E(e,t,n,r,i=!1){if(e!==null){if(l[e]!==void 0)return l[e];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let a=t;if(t===l.RED&&(n===l.FLOAT&&(a=l.R32F),n===l.HALF_FLOAT&&(a=l.R16F),n===l.UNSIGNED_BYTE&&(a=l.R8)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.R8UI),n===l.UNSIGNED_SHORT&&(a=l.R16UI),n===l.UNSIGNED_INT&&(a=l.R32UI),n===l.BYTE&&(a=l.R8I),n===l.SHORT&&(a=l.R16I),n===l.INT&&(a=l.R32I)),t===l.RG&&(n===l.FLOAT&&(a=l.RG32F),n===l.HALF_FLOAT&&(a=l.RG16F),n===l.UNSIGNED_BYTE&&(a=l.RG8)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RG8UI),n===l.UNSIGNED_SHORT&&(a=l.RG16UI),n===l.UNSIGNED_INT&&(a=l.RG32UI),n===l.BYTE&&(a=l.RG8I),n===l.SHORT&&(a=l.RG16I),n===l.INT&&(a=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGB8UI),n===l.UNSIGNED_SHORT&&(a=l.RGB16UI),n===l.UNSIGNED_INT&&(a=l.RGB32UI),n===l.BYTE&&(a=l.RGB8I),n===l.SHORT&&(a=l.RGB16I),n===l.INT&&(a=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(a=l.RGBA16UI),n===l.UNSIGNED_INT&&(a=l.RGBA32UI),n===l.BYTE&&(a=l.RGBA8I),n===l.SHORT&&(a=l.RGBA16I),n===l.INT&&(a=l.RGBA32I)),t===l.RGB&&n===l.UNSIGNED_INT_5_9_9_9_REV&&(a=l.RGB9_E5),t===l.RGBA){let e=i?Ke:vt.getTransfer(r);n===l.FLOAT&&(a=l.RGBA32F),n===l.HALF_FLOAT&&(a=l.RGBA16F),n===l.UNSIGNED_BYTE&&(a=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT_4_4_4_4&&(a=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(a=l.RGB5_A1)}return(a===l.R16F||a===l.R32F||a===l.RG16F||a===l.RG32F||a===l.RGBA16F||a===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),a}function re(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function D(e,t){return ee(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function ie(e){let t=e.target;t.removeEventListener(`dispose`,ie),oe(t),t.isVideoTexture&&y.delete(t)}function ae(e){let t=e.target;t.removeEventListener(`dispose`,ae),ce(t)}function oe(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&se(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function se(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=x.get(n);delete r[t.__cacheKey],h.memory.textures--}function ce(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let le=0;function ue(){le=0}function de(){let e=le;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),le+=1,e}function fe(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function pe(e,t){let n=f.get(e);if(e.isVideoTexture&&Fe(e),e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{Se(n,e,t);return}}d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function me(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){Se(n,e,t);return}d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function he(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){Se(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function ge(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){Ce(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let _e={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},ve={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ye={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function be(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,_e[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,_e[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,_e[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,ve[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,ve[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ye[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function xe(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,ie));let r=t.source,i=x.get(r);i===void 0&&(i={},x.set(r,i));let a=fe(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&se(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function Se(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=xe(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(l.TEXTURE0+n);let e=vt.getPrimaries(vt.workingColorSpace),s=t.colorSpace===``?null:vt.getPrimaries(t.colorSpace),c=t.colorSpace===``||e===s?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let u=w(t.image,!1,p.maxTextureSize);u=Ie(t,u);let f=m.convert(t.format,t.colorSpace),h=m.convert(t.type),g=E(t.internalFormat,f,h,t.colorSpace,t.isVideoTexture);be(r,t);let _,v=t.mipmaps,y=t.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=D(t,u);if(t.isDepthTexture)g=re(t.format===te,t.type),b&&(y?d.texStorage2D(l.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(t.isDataTexture){if(v.length>0){y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data);t.generateMipmaps=!1}else y?(b&&d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height),x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,u.width,u.height,f,h,u.data)):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){y&&b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let e=0,n=v.length;e<n;e++)if(_=v[e],t.format!==1023){if(f!==null){if(y){if(x){if(t.layerUpdates.size>0){let n=ss(_.width,_.height,t.format,t.type);for(let r of t.layerUpdates){let t=_.data.subarray(r*n/_.data.BYTES_PER_ELEMENT,(r+1)*n/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,r,_.width,_.height,1,f,t)}t.clearLayerUpdates()}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,_.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,_.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,n=v.length;e<n;e++)_=v[e],t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,_.data)}}else if(t.isDataArrayTexture){if(y){if(b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x){if(t.layerUpdates.size>0){let e=ss(u.width,u.height,t.format,t.type);for(let n of t.layerUpdates){let t=u.data.subarray(n*e/u.data.BYTES_PER_ELEMENT,(n+1)*e/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,n,u.width,u.height,1,f,h,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data)}else if(t.isData3DTexture)y?(b&&d.texStorage3D(l.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(l.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(t.isFramebufferTexture){if(b){if(y)d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height);else{let e=u.width,t=u.height;for(let n=0;n<S;n++)d.texImage2D(l.TEXTURE_2D,n,g,e,t,0,f,h,null),e>>=1,t>>=1}}}else if(v.length>0){if(y&&b){let e=Le(v[0]);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f,h,_):d.texImage2D(l.TEXTURE_2D,e,g,f,h,_);t.generateMipmaps=!1}else if(y){if(b){let e=Le(u);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(l.TEXTURE_2D,0,g,f,h,u);ee(t)&&T(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Ce(e,t,n){if(t.image.length!==6)return;let r=xe(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=vt.getPrimaries(vt.workingColorSpace),o=t.colorSpace===``?null:vt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=w(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ie(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=E(t.internalFormat,g,_,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=D(t,h);be(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Le(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}ee(t)&&T(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function O(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=E(n.internalFormat,o,s,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),Pe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ne(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function we(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=re(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,s=Ne(t);Pe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,s,a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,s,a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=E(i.internalFormat,a,o,i.colorSpace),c=Ne(t);n&&Pe(t)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,t.width,t.height):Pe(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,c,s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function Te(e,t){if(t&&t.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let n=f.get(t.depthTexture);n.__renderTarget=t,(!n.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),pe(t.depthTexture,0);let r=n.__webglTexture,i=Ne(t);if(t.depthTexture.format===1026)Pe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,r,0,i):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,r,0);else if(t.depthTexture.format===1027)Pe(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,r,0,i):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,r,0);else throw Error(`Unknown depthTexture format`)}function Ee(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)throw Error(`target.depthTexture not supported in Cube render targets`);Te(t.__webglFramebuffer,e)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),we(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),we(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function De(e,t,n){let r=f.get(e);t!==void 0&&O(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Ee(e)}function Oe(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,ae);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&Pe(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=E(r.internalFormat,a,o,r.colorSpace,e.isXRRenderTarget===!0),c=Ne(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),we(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),be(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)O(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else O(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);ee(t)&&T(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r);d.bindTexture(l.TEXTURE_2D,a.__webglTexture),be(l.TEXTURE_2D,r),O(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,l.TEXTURE_2D,0),ee(r)&&T(l.TEXTURE_2D)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),be(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)O(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else O(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);ee(t)&&T(i),d.unbindTexture()}e.depthBuffer&&Ee(e)}function ke(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(ee(r)){let t=ne(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),T(t),d.unbindTexture()}}}let Ae=[],je=[];function Me(e){if(e.samples>0){if(Pe(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(Ae.length=0,je.length=0,Ae.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(Ae.push(a),je.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,je)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,Ae))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ne(e){return Math.min(p.maxSamples,e.samples)}function Pe(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Fe(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ie(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(vt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function Le(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=de,this.resetTextureUnits=ue,this.setTexture2D=pe,this.setTexture2DArray=me,this.setTexture3D=he,this.setTextureCube=ge,this.rebindTextures=De,this.setupRenderTarget=Oe,this.updateRenderTargetMipmap=ke,this.updateMultisampleRenderTarget=Me,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=O,this.useMultisampledRTT=Pe}function us(e,t){function n(n,r=``){let i,a=vt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var ds=class extends Zr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},P=class extends Hn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},fs={type:`move`},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new P,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new P,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new P,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fs)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new P;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ms=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hs=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,gs=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Mt,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Kr({vertexShader:ms,fragmentShader:hs,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new M(new fi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_s=class extends Qe{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=new gs,_=t.getContextAttributes(),v=null,b=null,x=[],S=[],w=new k,ee=null,ne=new Zr;ne.viewport=new Nt;let E=new Zr;E.viewport=new Nt;let re=[ne,E],D=new ds,ie=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new ps,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new ps,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new ps,x[e]=t),t.getHandSpace()};function oe(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function se(){r.removeEventListener(`select`,oe),r.removeEventListener(`selectstart`,oe),r.removeEventListener(`selectend`,oe),r.removeEventListener(`squeeze`,oe),r.removeEventListener(`squeezestart`,oe),r.removeEventListener(`squeezeend`,oe),r.removeEventListener(`end`,se),r.removeEventListener(`inputsourceschange`,ce);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}ie=null,ae=null,g.reset(),e.setRenderTarget(v),p=null,f=null,d=null,r=null,b=null,ge.stop(),n.isPresenting=!1,e.setPixelRatio(ee),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,oe),r.addEventListener(`selectstart`,oe),r.addEventListener(`selectend`,oe),r.addEventListener(`squeeze`,oe),r.addEventListener(`squeezestart`,oe),r.addEventListener(`squeezeend`,oe),r.addEventListener(`end`,se),r.addEventListener(`inputsourceschange`,ce),_.xrCompatible!==!0&&await t.makeXRCompatible(),ee=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Ft(p.framebufferWidth,p.framebufferHeight,{format:C,type:l,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?te:T,a=_.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new Ft(f.textureWidth,f.textureHeight,{format:C,type:l,depthTexture:new Qi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),ge.setContext(r),ge.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function ce(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let le=new A,ue=new A;function de(e,t,n){le.setFromMatrixPosition(t.matrixWorld),ue.setFromMatrixPosition(n.matrixWorld);let r=le.distanceTo(ue),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function fe(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),D.near=E.near=ne.near=t,D.far=E.far=ne.far=n,(ie!==D.near||ae!==D.far)&&(r.updateRenderState({depthNear:D.near,depthFar:D.far}),ie=D.near,ae=D.far),ne.layers.mask=e.layers.mask|2,E.layers.mask=e.layers.mask|4,D.layers.mask=ne.layers.mask|E.layers.mask;let i=e.parent,a=D.cameras;fe(D,i);for(let e=0;e<a.length;e++)fe(a[e],i);a.length===2?de(D,ne,E):D.projectionMatrix.copy(ne.projectionMatrix),pe(e,D,i)};function pe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=tt*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(D)};let me=null;function he(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let n=!1;t.length!==D.cameras.length&&(D.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(p!==null)a=p.getViewport(i);else{let t=d.getViewSubImage(f,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(b,t.colorTexture,f.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(b))}let o=re[r];o===void 0&&(o=new Zr,o.layers.enable(r),o.viewport=new Nt,re[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(D.matrix.copy(o.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),n===!0&&D.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=d.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&g.init(e,n,r.renderState)}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}me&&me(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let ge=new ui;ge.setAnimationLoop(he),this.setAnimationLoop=function(e){me=e},this.dispose=function(){}}},vs=new Tn,ys=new hn;function bs(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Hr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,vs.copy(o),vs.x*=-1,vs.y*=-1,vs.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(vs.y*=-1,vs.z*=-1),e.envMapRotation.value.setFromMatrix4(ys.makeRotationFromEuler(vs)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function xs(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var Ss=class{constructor(e={}){let{canvas:t=ft(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let h=new Uint32Array(4),_=new Int32Array(4),v=null,y=null,b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=0,this.toneMappingExposure=1;let S=this,C=!1,w=0,ee=0,T=null,te=-1,ne=null,E=new Nt,re=new Nt,D=null,ie=new j(0),ae=0,oe=t.width,se=t.height,ce=1,le=null,ue=null,de=new Nt(0,0,oe,se),fe=new Nt(0,0,oe,se),pe=!1,me=new li,he=!1,ge=!1,_e=new hn,ve=new hn,ye=new A,be=new Nt,xe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Se=!1;function Ce(){return T===null?ce:1}let O=n;function we(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r170`),t.addEventListener(`webglcontextlost`,$e,!1),t.addEventListener(`webglcontextrestored`,et,!1),t.addEventListener(`webglcontextcreationerror`,tt,!1),O===null){let t=`webgl2`;if(O=we(t,e),O===null)throw we(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,Ke,qe,Je,Ye,Xe;function Ze(){Te=new Ki(O),Te.init(),Je=new us(O,Te),Ee=new xi(O,Te,e,Je),De=new os(O,Te),Ee.reverseDepthBuffer&&p&&De.buffers.depth.setReversed(!0),Oe=new Yi(O),ke=new Ho,Ae=new ls(O,Te,De,ke,Ee,Je,Oe),je=new Ci(S),Me=new Gi(S),Ne=new di(O),Ye=new yi(O,Ne),Pe=new qi(O,Ne,Oe,Ye),Fe=new Zi(O,Pe,Ne,Oe),Ue=new Xi(O,Ee,Ae),Be=new Si(ke),Ie=new Vo(S,je,Me,Te,Ee,Ye,Be),Le=new bs(S,ke),Re=new Ko,ze=new $o(Te),He=new vi(S,je,Me,De,Fe,m,s),Ve=new is(S,Fe,Ee),Xe=new xs(O,Oe,Ee,De),Ke=new bi(O,Te,Oe),qe=new Ji(O,Te,Oe),Oe.programs=Ie.programs,S.capabilities=Ee,S.extensions=Te,S.properties=ke,S.renderLists=Re,S.shadowMap=Ve,S.state=De,S.info=Oe}Ze();let Qe=new _s(S,O);this.xr=Qe,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=Te.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return ce},this.setPixelRatio=function(e){e!==void 0&&(ce=e,this.setSize(oe,se,!1))},this.getSize=function(e){return e.set(oe,se)},this.setSize=function(e,n,r=!0){if(Qe.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}oe=e,se=n,t.width=Math.floor(e*ce),t.height=Math.floor(n*ce),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(oe*ce,se*ce).floor()},this.setDrawingBufferSize=function(e,n,r){oe=e,se=n,ce=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(E)},this.getViewport=function(e){return e.copy(de)},this.setViewport=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),De.viewport(E.copy(de).multiplyScalar(ce).round())},this.getScissor=function(e){return e.copy(fe)},this.setScissor=function(e,t,n,r){e.isVector4?fe.set(e.x,e.y,e.z,e.w):fe.set(e,t,n,r),De.scissor(re.copy(fe).multiplyScalar(ce).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(e){De.setScissorTest(pe=e)},this.setOpaqueSort=function(e){le=e},this.setTransparentSort=function(e){ue=e},this.getClearColor=function(e){return e.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(T!==null){let t=T.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=T.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=He.getClearColor(),r=He.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,O.clearBufferuiv(O.COLOR,0,h)):(_[0]=i,_[1]=a,_[2]=o,_[3]=r,O.clearBufferiv(O.COLOR,0,_))}else r|=O.COLOR_BUFFER_BIT}t&&(r|=O.DEPTH_BUFFER_BIT),n&&(r|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,$e,!1),t.removeEventListener(`webglcontextrestored`,et,!1),t.removeEventListener(`webglcontextcreationerror`,tt,!1),Re.dispose(),ze.dispose(),ke.dispose(),je.dispose(),Me.dispose(),Fe.dispose(),Ye.dispose(),Xe.dispose(),Ie.dispose(),Qe.dispose(),Qe.removeEventListener(`sessionstart`,k),Qe.removeEventListener(`sessionend`,ct),lt.stop()};function $e(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),C=!0}function et(){console.log(`THREE.WebGLRenderer: Context Restored.`),C=!1;let e=Oe.autoReset,t=Ve.enabled,n=Ve.autoUpdate,r=Ve.needsUpdate,i=Ve.type;Ze(),Oe.autoReset=e,Ve.enabled=t,Ve.autoUpdate=n,Ve.needsUpdate=r,Ve.type=i}function tt(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function nt(e){let t=e.target;t.removeEventListener(`dispose`,nt),rt(t)}function rt(e){it(e),ke.remove(e)}function it(e){let t=ke.get(e).programs;t!==void 0&&(t.forEach(function(e){Ie.releaseProgram(e)}),e.isShaderMaterial&&Ie.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=xe);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=wt(e,t,n,r,i);De.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=Pe.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ye.setup(i,r,s,n,c);let h,g=Ke;if(c!==null&&(h=Ne.get(c),g=qe,g.setIndex(h)),i.isMesh)r.wireframe===!0?(De.setLineWidth(r.wireframeLinewidth*Ce()),g.setMode(O.LINES)):g.setMode(O.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),De.setLineWidth(e*Ce()),i.isLineSegments?g.setMode(O.LINES):i.isLineLoop?g.setMode(O.LINE_LOOP):g.setMode(O.LINE_STRIP)}else i.isPoints?g.setMode(O.POINTS):i.isSprite&&g.setMode(O.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(Te.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ne.get(c).bytesPerElement:1,o=ke.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(O,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function at(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,xt(e,t,n),e.side=0,e.needsUpdate=!0,xt(e,t,n),e.side=2):xt(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),y=ze.get(n),y.init(t),x.push(y),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),y.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];at(a,n,e),r.add(a)}else at(t,n,e),r.add(t)}}),x.pop(),y=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){ke.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}Te.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let ot=null;function st(e){ot&&ot(e)}function k(){lt.stop()}function ct(){lt.start()}let lt=new ui;lt.setAnimationLoop(st),typeof self<`u`&&lt.setContext(self),this.setAnimationLoop=function(e){ot=e,Qe.setAnimationLoop(e),e===null?lt.stop():lt.start()},Qe.addEventListener(`sessionstart`,k),Qe.addEventListener(`sessionend`,ct),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(C===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Qe.enabled===!0&&Qe.isPresenting===!0&&(Qe.cameraAutoUpdate===!0&&Qe.updateCamera(t),t=Qe.getCamera()),e.isScene===!0&&e.onBeforeRender(S,e,t,T),y=ze.get(e,x.length),y.init(t),x.push(y),ve.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),me.setFromProjectionMatrix(ve),ge=this.localClippingEnabled,he=Be.init(this.clippingPlanes,ge),v=Re.get(e,b.length),v.init(),b.push(v),Qe.enabled===!0&&Qe.isPresenting===!0){let e=S.xr.getDepthSensingMesh();e!==null&&ut(e,t,-1/0,S.sortObjects)}ut(e,t,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(le,ue),Se=Qe.enabled===!1||Qe.isPresenting===!1||Qe.hasDepthSensing()===!1,Se&&He.addToRenderList(v,e),this.info.render.frame++,he===!0&&Be.beginShadows();let n=y.state.shadowsArray;Ve.render(n,e,t),he===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=v.opaque,i=v.transmissive;if(y.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];pt(r,i,e,a)}Se&&He.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];dt(v,e,r,r.viewport)}}else i.length>0&&pt(r,i,e,t),Se&&He.render(e),dt(v,e,t);T!==null&&(Ae.updateMultisampleRenderTarget(T),Ae.updateRenderTargetMipmap(T)),e.isScene===!0&&e.onAfterRender(S,e,t),Ye.resetDefaultState(),te=-1,ne=null,x.pop(),x.length>0?(y=x[x.length-1],he===!0&&Be.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,b.pop(),v=b.length>0?b[b.length-1]:null};function ut(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)y.pushLight(e),e.castShadow&&y.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||me.intersectsSprite(e)){r&&be.setFromMatrixPosition(e.matrixWorld).applyMatrix4(ve);let t=Fe.update(e),i=e.material;i.visible&&v.push(e,t,i,n,be.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||me.intersectsObject(e))){let t=Fe.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),be.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),be.copy(e.boundingSphere.center)),be.applyMatrix4(e.matrixWorld).applyMatrix4(ve)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&v.push(e,t,s,n,be.z,o)}}else i.visible&&v.push(e,t,i,n,be.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ut(i[e],t,n,r)}function dt(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;y.setupLightsView(n),he===!0&&Be.setGlobalState(S.clippingPlanes,n),r&&De.viewport(E.copy(r)),i.length>0&&yt(i,t,n),a.length>0&&yt(a,t,n),o.length>0&&yt(o,t,n),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function pt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[r.id]===void 0&&(y.state.transmissionRenderTarget[r.id]=new Ft(1,1,{generateMipmaps:!0,type:Te.has(`EXT_color_buffer_half_float`)||Te.has(`EXT_color_buffer_float`)?g:l,minFilter:c,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));let a=y.state.transmissionRenderTarget[r.id],o=r.viewport||E;a.setSize(o.z,o.w);let s=S.getRenderTarget();S.setRenderTarget(a),S.getClearColor(ie),ae=S.getClearAlpha(),ae<1&&S.setClearColor(16777215,.5),S.clear(),Se&&He.render(n);let u=S.toneMapping;S.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),y.setupLightsView(r),he===!0&&Be.setGlobalState(S.clippingPlanes,r),yt(e,n,r),Ae.updateMultisampleRenderTarget(a),Ae.updateRenderTargetMipmap(a),Te.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,bt(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(Ae.updateMultisampleRenderTarget(a),Ae.updateRenderTargetMipmap(a))}S.setRenderTarget(s),S.setClearColor(ie,ae),d!==void 0&&(r.viewport=d),S.toneMapping=u}function yt(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&bt(o,t,n,s,c,l)}}function bt(e,t,n,r,i,a){e.onBeforeRender(S,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(S,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=2):S.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(S,t,n,r,i,a)}function xt(e,t,n){t.isScene!==!0&&(t=xe);let r=ke.get(e),i=y.state.lights,a=y.state.shadowsArray,o=i.state.version,s=Ie.getParameters(e,i.state,a,t,n),c=Ie.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?Me:je).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,nt),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return Ct(e,s),u}else s.uniforms=Ie.getUniforms(e),e.onBeforeCompile(s,S),u=Ie.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Be.uniform),Ct(e,s),r.needsLights=Et(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function St(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=ao.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function Ct(e,t){let n=ke.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function wt(e,t,n,r,i){t.isScene!==!0&&(t=xe),Ae.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=T===null?S.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Ge,c=(r.isMeshStandardMaterial?Me:je).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(m=S.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=ke.get(r),v=y.state.lights;if(he===!0&&(ge===!0||e!==ne)){let t=e===ne&&r.id===te;Be.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==v.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Be.numPlanes||_.numIntersection!==Be.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let x=_.currentProgram;b===!0&&(x=xt(r,t,i));let C=!1,w=!1,ee=!1,E=x.getUniforms(),re=_.uniforms;if(De.useProgram(x.program)&&(C=!0,w=!0,ee=!0),r.id!==te&&(te=r.id,w=!0),C||ne!==e){De.buffers.depth.getReversed()?(_e.copy(e.projectionMatrix),gt(_e),_t(_e),E.setValue(O,`projectionMatrix`,_e)):E.setValue(O,`projectionMatrix`,e.projectionMatrix),E.setValue(O,`viewMatrix`,e.matrixWorldInverse);let t=E.map.cameraPosition;t!==void 0&&t.setValue(O,ye.setFromMatrixPosition(e.matrixWorld)),Ee.logarithmicDepthBuffer&&E.setValue(O,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&E.setValue(O,`isOrthographic`,e.isOrthographicCamera===!0),ne!==e&&(ne=e,w=!0,ee=!0)}if(i.isSkinnedMesh){E.setOptional(O,i,`bindMatrix`),E.setOptional(O,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),E.setValue(O,`boneTexture`,e.boneTexture,Ae))}i.isBatchedMesh&&(E.setOptional(O,i,`batchingTexture`),E.setValue(O,`batchingTexture`,i._matricesTexture,Ae),E.setOptional(O,i,`batchingIdTexture`),E.setValue(O,`batchingIdTexture`,i._indirectTexture,Ae),E.setOptional(O,i,`batchingColorTexture`),i._colorsTexture!==null&&E.setValue(O,`batchingColorTexture`,i._colorsTexture,Ae));let D=n.morphAttributes;if((D.position!==void 0||D.normal!==void 0||D.color!==void 0)&&Ue.update(i,n,x),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,E.setValue(O,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(re.envMap.value=c,re.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(re.envMapIntensity.value=t.environmentIntensity),w&&(E.setValue(O,`toneMappingExposure`,S.toneMappingExposure),_.needsLights&&Tt(re,ee),a&&r.fog===!0&&Le.refreshFogUniforms(re,a),Le.refreshMaterialUniforms(re,r,ce,se,y.state.transmissionRenderTarget[e.id]),ao.upload(O,St(_),re,Ae)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(ao.upload(O,St(_),re,Ae),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&E.setValue(O,`center`,i.center),E.setValue(O,`modelViewMatrix`,i.modelViewMatrix),E.setValue(O,`normalMatrix`,i.normalMatrix),E.setValue(O,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];Xe.update(n,x),Xe.bind(n,x)}}return x}function Tt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function Et(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return ee},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(e,t,n){ke.get(e.texture).__webglTexture=t,ke.get(e.depthTexture).__webglTexture=n;let r=ke.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||Te.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=ke.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){T=e,w=t,ee=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=ke.get(e);if(s.__useDefaultFramebuffer!==void 0)De.bindFramebuffer(O.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)Ae.setupRenderTarget(e);else if(s.__hasExternalTextures)Ae.rebindTextures(e,ke.get(e.texture).__webglTexture,ke.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&ke.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);Ae.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=ke.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&Ae.useMultisampledRTT(e)===!1?ke.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,E.copy(e.viewport),re.copy(e.scissor),D=e.scissorTest}else E.copy(de).multiplyScalar(ce).floor(),re.copy(fe).multiplyScalar(ce).floor(),D=pe;if(De.bindFramebuffer(O.FRAMEBUFFER,i)&&r&&De.drawBuffers(e,i),De.viewport(E),De.scissor(re),De.setScissorTest(D),a){let r=ke.get(e.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=ke.get(e.texture),i=t||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}te=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=ke.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){De.bindFramebuffer(O.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!Ee.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Ee.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&O.readPixels(t,n,r,i,Je.convert(s),Je.convert(c),a)}finally{let e=T===null?null:ke.get(T).__webglFramebuffer;De.bindFramebuffer(O.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=ke.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!Ee.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Ee.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){De.bindFramebuffer(O.FRAMEBUFFER,s);let e=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,e),O.bufferData(O.PIXEL_PACK_BUFFER,a.byteLength,O.STREAM_READ),O.readPixels(t,n,r,i,Je.convert(c),Je.convert(l),0);let o=T===null?null:ke.get(T).__webglFramebuffer;De.bindFramebuffer(O.FRAMEBUFFER,o);let u=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await ht(O,u,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,e),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,a),O.deleteBuffer(e),O.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(mt(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;Ae.setTexture2D(e,0),O.copyTexSubImage2D(O.TEXTURE_2D,n,0,0,o,s,i,a),De.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(mt(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth||1,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.isBox3?n.max.z-n.min.z:1,c=n.min.x,l=n.min.y,u=n.isBox3?n.min.z:0),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Je.convert(t.format),g=Je.convert(t.type),_;t.isData3DTexture?(Ae.setTexture3D(t,0),_=O.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(Ae.setTexture2DArray(t,0),_=O.TEXTURE_2D_ARRAY):(Ae.setTexture2D(t,0),_=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,t.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,t.unpackAlignment);let v=O.getParameter(O.UNPACK_ROW_LENGTH),y=O.getParameter(O.UNPACK_IMAGE_HEIGHT),b=O.getParameter(O.UNPACK_SKIP_PIXELS),x=O.getParameter(O.UNPACK_SKIP_ROWS),S=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,m.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,m.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,c),O.pixelStorei(O.UNPACK_SKIP_ROWS,l),O.pixelStorei(O.UNPACK_SKIP_IMAGES,u);let C=e.isDataArrayTexture||e.isData3DTexture,w=t.isDataArrayTexture||t.isData3DTexture;if(e.isRenderTargetTexture||e.isDepthTexture){let n=ke.get(e),r=ke.get(t),m=ke.get(n.__renderTarget),h=ke.get(r.__renderTarget);De.bindFramebuffer(O.READ_FRAMEBUFFER,m.__webglFramebuffer),De.bindFramebuffer(O.DRAW_FRAMEBUFFER,h.__webglFramebuffer);for(let n=0;n<s;n++)C&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.get(e).__webglTexture,i,u+n),e.isDepthTexture?(w&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,ke.get(t).__webglTexture,i,p+n),O.blitFramebuffer(c,l,a,o,d,f,a,o,O.DEPTH_BUFFER_BIT,O.NEAREST)):w?O.copyTexSubImage3D(_,i,d,f,p+n,c,l,a,o):O.copyTexSubImage2D(_,i,d,f,p+n,c,l,a,o);De.bindFramebuffer(O.READ_FRAMEBUFFER,null),De.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else w?e.isDataTexture||e.isData3DTexture?O.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?O.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):O.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m):e.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,i,d,f,a,o,h,g,m.data):e.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,i,d,f,m.width,m.height,h,m.data):O.texSubImage2D(O.TEXTURE_2D,i,d,f,a,o,h,g,m);O.pixelStorei(O.UNPACK_ROW_LENGTH,v),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,y),O.pixelStorei(O.UNPACK_SKIP_PIXELS,b),O.pixelStorei(O.UNPACK_SKIP_ROWS,x),O.pixelStorei(O.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&O.generateMipmap(_),De.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){return e.isTexture!==!0&&(mt(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0),mt(`WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.`),this.copyTextureToTexture(e,t,n,r,i)},this.initRenderTarget=function(e){ke.get(e).__webglFramebuffer===void 0&&Ae.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?Ae.setTextureCube(e,0):e.isData3DTexture?Ae.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?Ae.setTexture2DArray(e,0):Ae.setTexture2D(e,0),De.unbindTexture()},this.resetState=function(){w=0,ee=0,T=null,De.reset(),Ye.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}},Cs=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new j(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},ws=class extends Hn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},Ts=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ye,this.updateRanges=[],this.version=0,this.uuid=nt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=nt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Es=new A,Ds=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Es.fromBufferAttribute(this,t),Es.applyMatrix4(e),this.setXYZ(t,Es.x,Es.y,Es.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Es.fromBufferAttribute(this,t),Es.applyNormalMatrix(e),this.setXYZ(t,Es.x,Es.y,Es.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Es.fromBufferAttribute(this,t),Es.transformDirection(e),this.setXYZ(t,Es.x,Es.y,Es.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ot(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=st(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ot(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ot(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ot(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ot(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=st(t,this.array),n=st(n,this.array),r=st(r,this.array),i=st(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new pr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Os=class extends lr{static get type(){return`SpriteMaterial`}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new j(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ks,As=new A,js=new A,Ms=new A,Ns=new k,Ps=new k,Fs=new hn,Is=new A,Ls=new A,Rs=new A,zs=new k,Bs=new k,Vs=new k,Hs=class extends Hn{constructor(e=new Os){if(super(),this.isSprite=!0,this.type=`Sprite`,ks===void 0){ks=new wr;let e=new Ts(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);ks.setIndex([0,1,2,0,2,3]),ks.setAttribute(`position`,new Ds(e,3,0,!1)),ks.setAttribute(`uv`,new Ds(e,2,3,!1))}this.geometry=ks,this.material=e,this.center=new k(.5,.5)}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),js.setFromMatrixScale(this.matrixWorld),Fs.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&js.multiplyScalar(-Ms.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Us(Is.set(-.5,-.5,0),Ms,a,js,r,i),Us(Ls.set(.5,-.5,0),Ms,a,js,r,i),Us(Rs.set(.5,.5,0),Ms,a,js,r,i),zs.set(0,0),Bs.set(1,0),Vs.set(1,1);let o=e.ray.intersectTriangle(Is,Ls,Rs,!1,As);if(o===null&&(Us(Ls.set(-.5,.5,0),Ms,a,js,r,i),Bs.set(0,1),o=e.ray.intersectTriangle(Is,Rs,Ls,!1,As),o===null))return;let s=e.ray.origin.distanceTo(As);s<e.near||s>e.far||t.push({distance:s,point:As.clone(),uv:nr.getInterpolation(As,Is,Ls,Rs,zs,Bs,Vs,new k),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Us(e,t,n,r,i,a){Ns.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?Ps.copy(Ns):(Ps.x=a*Ns.x-i*Ns.y,Ps.y=i*Ns.x+a*Ns.y),e.copy(t),e.x+=Ps.x,e.y+=Ps.y,e.applyMatrix4(Fs)}var Ws=class extends Mt{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Gs=class extends pr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ks=new hn,qs=new hn,Js=[],Ys=new Vt,Xs=new hn,Zs=new M,Qs=new on,$s=class extends M{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Xs)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),Ys.copy(e.boundingBox).applyMatrix4(Ks),this.boundingBox.union(Ys)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new on),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ks),Qs.copy(e.boundingSphere).applyMatrix4(Ks),this.boundingSphere.union(Qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Zs.geometry=this.geometry,Zs.material=this.material,Zs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(n),e.ray.intersectsSphere(Qs)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Ks),qs.multiplyMatrices(n,Ks),Zs.matrixWorld=qs,Zs.raycast(e,Js);for(let e=0,n=Js.length;e<n;e++){let n=Js[e];n.instanceId=i,n.object=this,t.push(n)}Js.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ws(new Float32Array(r*this.count),r,this.count,ne,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},ec=class extends lr{static get type(){return`LineBasicMaterial`}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new j(16777215),this.map=null,this.linewidth=1,this.linecap=`round`,this.linejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},tc=new A,nc=new A,rc=new hn,ic=new mn,ac=new on,oc=new A,sc=new A,cc=class extends Hn{constructor(e=new wr,t=new ec){super(),this.isLine=!0,this.type=`Line`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let e=1,r=t.count;e<r;e++)tc.fromBufferAttribute(t,e-1),nc.fromBufferAttribute(t,e),n[e]=n[e-1],n[e]+=tc.distanceTo(nc);e.setAttribute(`lineDistance`,new gr(n,1))}else console.warn(`THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.`);return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ac.copy(n.boundingSphere),ac.applyMatrix4(r),ac.radius+=i,e.ray.intersectsSphere(ac)===!1)return;rc.copy(r).invert(),ic.copy(e.ray).applyMatrix4(rc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=this.isLineSegments?2:1,l=n.index,u=n.attributes.position;if(l!==null){let n=Math.max(0,a.start),r=Math.min(l.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=l.getX(i),r=l.getX(i+1),a=lc(this,e,ic,s,n,r);a&&t.push(a)}if(this.isLineLoop){let i=l.getX(r-1),a=l.getX(n),o=lc(this,e,ic,s,i,a);o&&t.push(o)}}else{let n=Math.max(0,a.start),r=Math.min(u.count,a.start+a.count);for(let i=n,a=r-1;i<a;i+=c){let n=lc(this,e,ic,s,i,i+1);n&&t.push(n)}if(this.isLineLoop){let i=lc(this,e,ic,s,r-1,n);i&&t.push(i)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function lc(e,t,n,r,i,a){let o=e.geometry.attributes.position;if(tc.fromBufferAttribute(o,i),nc.fromBufferAttribute(o,a),n.distanceSqToSegment(tc,nc,oc,sc)>r)return;oc.applyMatrix4(e.matrixWorld);let s=t.ray.origin.distanceTo(oc);if(!(s<t.near||s>t.far))return{distance:s,point:sc.clone().applyMatrix4(e.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:e}}var uc=class extends lr{static get type(){return`PointsMaterial`}constructor(e){super(),this.isPointsMaterial=!0,this.color=new j(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},dc=new hn,fc=new mn,pc=new on,mc=new A,hc=class extends Hn{constructor(e=new wr,t=new uc){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(r),pc.radius+=i,e.ray.intersectsSphere(pc)===!1)return;dc.copy(r).invert(),fc.copy(e.ray).applyMatrix4(dc);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);mc.fromBufferAttribute(l,n),gc(mc,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)mc.fromBufferAttribute(l,a),gc(mc,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function gc(e,t,n,r,i,a,o){let s=fc.distanceSqToPoint(e);if(s<n){let n=new A;fc.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var _c=class extends Mt{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},vc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new k:new A);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new A,r=[],i=[],a=[],o=new A,s=new hn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new A)}i[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(rt(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(rt(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},yc=class extends vc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new k){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},bc=class extends yc{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function xc(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var Sc=new A,Cc=new xc,wc=new xc,Tc=new xc,Ec=class extends vc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new A){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(Sc.subVectors(r[0],r[1]).add(r[0]),c=Sc);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(Sc.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=Sc),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),Cc.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),wc.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),Tc.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(Cc.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),wc.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),Tc.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(Cc.calc(s),wc.calc(s),Tc.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new A().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Dc(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function Oc(e,t){let n=1-e;return n*n*t}function kc(e,t){return 2*(1-e)*e*t}function Ac(e,t){return e*e*t}function jc(e,t,n,r){return Oc(e,t)+kc(e,n)+Ac(e,r)}function Mc(e,t){let n=1-e;return n*n*n*t}function Nc(e,t){let n=1-e;return 3*n*n*e*t}function Pc(e,t){return 3*(1-e)*e*e*t}function Fc(e,t){return e*e*e*t}function Ic(e,t,n,r,i){return Mc(e,t)+Nc(e,n)+Pc(e,r)+Fc(e,i)}var Lc=class extends vc{constructor(e=new k,t=new k,n=new k,r=new k){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new k){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ic(e,r.x,i.x,a.x,o.x),Ic(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rc=class extends vc{constructor(e=new A,t=new A,n=new A,r=new A){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new A){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(Ic(e,r.x,i.x,a.x,o.x),Ic(e,r.y,i.y,a.y,o.y),Ic(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zc=class extends vc{constructor(e=new k,t=new k){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new k){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new k){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Bc=class extends vc{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends vc{constructor(e=new k,t=new k,n=new k){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new k){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(jc(e,r.x,i.x,a.x),jc(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hc=class extends vc{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(jc(e,r.x,i.x,a.x),jc(e,r.y,i.y,a.y),jc(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Uc=class extends vc{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new k){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(Dc(o,s.x,c.x,l.x,u.x),Dc(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new k().fromArray(n))}return this}},Wc=Object.freeze({__proto__:null,ArcCurve:bc,CatmullRomCurve3:Ec,CubicBezierCurve:Lc,CubicBezierCurve3:Rc,EllipseCurve:yc,LineCurve:zc,LineCurve3:Bc,QuadraticBezierCurve:Vc,QuadraticBezierCurve3:Hc,SplineCurve:Uc}),Gc=class extends vc{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new Wc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new Wc[n.type]().fromJSON(n))}return this}},Kc=class extends Gc{constructor(e){super(),this.type=`Path`,this.currentPoint=new k,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new zc(this.currentPoint.clone(),new k(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Vc(this.currentPoint.clone(),new k(e,t),new k(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Lc(this.currentPoint.clone(),new k(e,t),new k(n,r),new k(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Uc([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new yc(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qc=class e extends wr{constructor(e=[new k(0,-.5),new k(.5,0),new k(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=rt(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new A,d=new k,f=new A,p=new A,m=new A,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new gr(a,3)),this.setAttribute(`uv`,new gr(o,2)),this.setAttribute(`normal`,new gr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Jc=class e extends qc{constructor(e=1,t=1,n=4,r=8){let i=new Kc;i.absarc(0,-t/2,e,Math.PI*1.5,0),i.absarc(0,t/2,e,0,Math.PI*.5),super(i.getPoints(n),r),this.type=`CapsuleGeometry`,this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(t){return new e(t.radius,t.length,t.capSegments,t.radialSegments)}},Yc=class e extends wr{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new A,l=new k;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new gr(a,3)),this.setAttribute(`normal`,new gr(o,3)),this.setAttribute(`uv`,new gr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Xc=class e extends wr{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new gr(u,3)),this.setAttribute(`normal`,new gr(d,3)),this.setAttribute(`uv`,new gr(f,2));function _(){let a=new A,_=new A,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new k,m=new A,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Zc=class e extends Xc{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Qc=class e extends wr{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new gr(i,3)),this.setAttribute(`normal`,new gr(i.slice(),3)),this.setAttribute(`uv`,new gr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new A,r=new A,i=new A;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new A;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new A;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new A,t=new A,n=new A,r=new A,o=new k,s=new k,c=new k;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}},$c=class e extends Qc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},el=class extends Kc{constructor(e){super(e),this.uuid=nt(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new Kc().fromJSON(n))}return this}},tl={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=nl(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=ll(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return il(a,o,n,s,c,p,0),o}};function nl(e,t,n,r,i){let a,o;if(i===Ml(e,t,n,r)>0)for(a=t;a<n;a+=r)o=kl(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=kl(a,e[a],e[a+1],o);return o&&xl(o,o.next)&&(Al(o),o=o.next),o}function rl(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(xl(n,n.next)||bl(n.prev,n,n.next)===0)){if(Al(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function il(e,t,n,r,i,a,o){if(!e)return;!o&&a&&ml(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,a?ol(e,r,i,a):al(e)){t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),Al(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=sl(rl(e),t,n),il(e,t,n,r,i,a,2)):o===2&&cl(e,t,n,r,i,a):il(rl(e),t,n,r,i,a,1);break}}}function al(e){let t=e.prev,n=e,r=e.next;if(bl(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&vl(i,s,a,c,o,l,m.x,m.y)&&bl(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function ol(e,t,n,r){let i=e.prev,a=e,o=e.next;if(bl(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=gl(p,m,t,n,r),v=gl(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&vl(s,u,c,d,l,f,y.x,y.y)&&bl(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&vl(s,u,c,d,l,f,b.x,b.y)&&bl(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&vl(s,u,c,d,l,f,y.x,y.y)&&bl(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&vl(s,u,c,d,l,f,b.x,b.y)&&bl(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function sl(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!xl(i,a)&&Sl(i,r,r.next,a)&&El(i,a)&&El(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),Al(r),Al(r.next),r=e=a),r=r.next}while(r!==e);return rl(r)}function cl(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&yl(o,e)){let s=Ol(o,e);o=rl(o,o.next),s=rl(s,s.next),il(o,t,n,r,i,a,0),il(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function ll(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=nl(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(_l(l));for(i.sort(ul),a=0;a<i.length;a++)n=dl(i[a],n);return n}function ul(e,t){return e.x-t.x}function dl(e,t){let n=fl(e,t);if(!n)return t;let r=Ol(n,e);return rl(r,r.next),rl(n,n.next)}function fl(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&vl(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),El(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&pl(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function pl(e,t){return bl(e.prev,e,t.prev)<0&&bl(t.next,e,e.next)<0}function ml(e,t,n,r){let i=e;do i.z===0&&(i.z=gl(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,hl(i)}function hl(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function gl(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function _l(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function vl(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function yl(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!Tl(e,t)&&(El(e,t)&&El(t,e)&&Dl(e,t)&&(bl(e.prev,e,t.prev)||bl(e,t.prev,t))||xl(e,t)&&bl(e.prev,e,e.next)>0&&bl(t.prev,t,t.next)>0)}function bl(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function xl(e,t){return e.x===t.x&&e.y===t.y}function Sl(e,t,n,r){let i=wl(bl(e,t,n)),a=wl(bl(e,t,r)),o=wl(bl(n,r,e)),s=wl(bl(n,r,t));return!!(i!==a&&o!==s||i===0&&Cl(e,n,t)||a===0&&Cl(e,r,t)||o===0&&Cl(n,e,r)||s===0&&Cl(n,t,r))}function Cl(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function wl(e){return e>0?1:e<0?-1:0}function Tl(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&Sl(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function El(e,t){return bl(e.prev,e,e.next)<0?bl(e,t,e.next)>=0&&bl(e,e.prev,t)>=0:bl(e,t,e.prev)<0||bl(e,e.next,t)<0}function Dl(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function Ol(e,t){let n=new jl(e.i,e.x,e.y),r=new jl(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function kl(e,t,n,r){let i=new jl(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function Al(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function jl(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ml(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var Nl=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];Pl(e),Fl(n,e);let a=e.length;t.forEach(Pl);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,Fl(n,t[e]);let o=tl.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function Pl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function Fl(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var Il=class e extends wr{constructor(e=new el([new k(.5,.5),new k(-.5,.5),new k(-.5,-.5),new k(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new gr(r,3)),this.setAttribute(`uv`,new gr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Ll:t.UVGenerator,g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new A,b=new A,x=new A),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!Nl.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];Nl.isClockWise(t)&&(w[e]=t.reverse())}}let ee=Nl.triangulateShape(C,w),T=C;for(let e=0,t=w.length;e<t;e++){let t=w[e];C=C.concat(t)}function te(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let ne=C.length,E=ee.length;function re(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new k(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new k(r/a,i/a)}let D=[];for(let e=0,t=T.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),D[e]=re(T[e],T[n],T[r]);let ie=[],ae,oe=D.concat();for(let e=0,t=w.length;e<t;e++){let t=w[e];ae=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),ae[e]=re(t[e],t[r],t[i]);ie.push(ae),oe=oe.concat(ae)}for(let e=0;e<p;e++){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=T.length;e<t;e++){let t=te(T[e],D[e],r);de(t.x,t.y,-n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ae=ie[e];for(let e=0,i=t.length;e<i;e++){let i=te(t[e],ae[e],r);de(i.x,i.y,-n)}}}let se=d+f;for(let e=0;e<ne;e++){let t=l?te(C[e],oe[e],se):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),de(x.x,x.y,x.z)):de(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<ne;t++){let n=l?te(C[t],oe[t],se):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),de(x.x,x.y,x.z)):de(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=T.length;e<t;e++){let t=te(T[e],D[e],r);de(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ae=ie[e];for(let e=0,i=t.length;e<i;e++){let i=te(t[e],ae[e],r);_?de(i.x,i.y+g[s-1].y,g[s-1].x+n):de(i.x,i.y,c+n)}}}ce(),le();function ce(){let e=r.length/3;if(l){let e=0,t=ne*e;for(let e=0;e<E;e++){let n=ee[e];fe(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=ne*e;for(let e=0;e<E;e++){let n=ee[e];fe(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<E;e++){let t=ee[e];fe(t[2],t[1],t[0])}for(let e=0;e<E;e++){let t=ee[e];fe(t[0]+ne*s,t[1]+ne*s,t[2]+ne*s)}}n.addGroup(e,r.length/3-e,0)}function le(){let e=r.length/3,t=0;ue(T,t),t+=T.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];ue(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function ue(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=ne*e,a=ne*(e+1);pe(t+r+n,t+i+n,t+i+a,t+r+a)}}}function de(e,t,n){a.push(e),a.push(t),a.push(n)}function fe(e,t,i){me(e),me(t),me(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);he(o[0]),he(o[1]),he(o[2])}function pe(e,t,i,a){me(e),me(t),me(a),me(t),me(i),me(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);he(s[0]),he(s[1]),he(s[3]),he(s[1]),he(s[2]),he(s[3])}function me(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function he(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Rl(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new Wc[i.type]().fromJSON(i)),new e(r,t.options)}},Ll={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new k(a,o),new k(s,c),new k(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new k(o,1-c),new k(l,1-d),new k(f,1-m),new k(h,1-_)]:[new k(s,1-c),new k(u,1-d),new k(p,1-m),new k(g,1-_)]}};function Rl(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var zl=class e extends Qc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Bl=class e extends Qc{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Vl=class e extends wr{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new A,p=new k;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new gr(s,3)),this.setAttribute(`normal`,new gr(c,3)),this.setAttribute(`uv`,new gr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Hl=class e extends wr{constructor(e=new el([new k(0,.5),new k(-.5,-.5),new k(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new gr(r,3)),this.setAttribute(`normal`,new gr(i,3)),this.setAttribute(`uv`,new gr(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;Nl.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];Nl.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=Nl.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ul(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Ul(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var Wl=class e extends wr{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new A,d=new A,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new gr(p,3)),this.setAttribute(`normal`,new gr(m,3)),this.setAttribute(`uv`,new gr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Gl=class e extends wr{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new A,u=new A,d=new A;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new gr(o,3)),this.setAttribute(`normal`,new gr(s,3)),this.setAttribute(`uv`,new gr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Kl=class extends Kr{static get type(){return`RawShaderMaterial`}constructor(e){super(e),this.isRawShaderMaterial=!0}},ql=class extends lr{static get type(){return`MeshPhongMaterial`}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new j(16777215),this.specular=new j(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Jl=class extends lr{static get type(){return`MeshLambertMaterial`}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new j(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new j(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new k(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Yl(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Xl(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Zl=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Ql=class extends Zl{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ze,endingEnd:ze}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Be:i=e,o=2*t-n;break;case Ve:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Be:a=e,s=2*n-t;break;case Ve:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},$l=class extends Zl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},eu=class extends Zl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},tu=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Yl(t,this.TimeBufferType),this.values=Yl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yl(e.times,Array),values:Yl(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new eu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new $l(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ql(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ie:t=this.InterpolantFactoryMethodDiscrete;break;case Le:t=this.InterpolantFactoryMethodLinear;break;case Re:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ie;case this.InterpolantFactoryMethodLinear:return Le;case this.InterpolantFactoryMethodSmooth:return Re}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Xl(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Re,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};tu.prototype.TimeBufferType=Float32Array,tu.prototype.ValueBufferType=Float32Array,tu.prototype.DefaultInterpolation=Le;var nu=class extends tu{constructor(e,t,n){super(e,t,n)}};nu.prototype.ValueTypeName=`bool`,nu.prototype.ValueBufferType=Array,nu.prototype.DefaultInterpolation=Ie,nu.prototype.InterpolantFactoryMethodLinear=void 0,nu.prototype.InterpolantFactoryMethodSmooth=void 0;var ru=class extends tu{};ru.prototype.ValueTypeName=`color`;var iu=class extends tu{};iu.prototype.ValueTypeName=`number`;var au=class extends Zl{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Rt.slerpFlat(i,0,a,c-o,a,c,s);return i}},ou=class extends tu{InterpolantFactoryMethodLinear(e){return new au(this.times,this.values,this.getValueSize(),e)}};ou.prototype.ValueTypeName=`quaternion`,ou.prototype.InterpolantFactoryMethodSmooth=void 0;var su=class extends tu{constructor(e,t,n){super(e,t,n)}};su.prototype.ValueTypeName=`string`,su.prototype.ValueBufferType=Array,su.prototype.DefaultInterpolation=Ie,su.prototype.InterpolantFactoryMethodLinear=void 0,su.prototype.InterpolantFactoryMethodSmooth=void 0;var cu=class extends tu{};cu.prototype.ValueTypeName=`vector`;var lu=class extends Hn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new j(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},uu=class extends lu{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new j(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},du=new hn,fu=new A,pu=new A,mu=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new k(512,512),this.map=null,this.mapPass=null,this.matrix=new hn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new li,this._frameExtents=new k(1,1),this._viewportCount=1,this._viewports=[new Nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fu.setFromMatrixPosition(e.matrixWorld),t.position.copy(fu),pu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pu),t.updateMatrixWorld(),du.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},hu=new hn,gu=new A,_u=new A,vu=class extends mu{constructor(){super(new Zr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new k(4,2),this._viewportCount=6,this._viewports=[new Nt(2,1,1,1),new Nt(0,1,1,1),new Nt(3,1,1,1),new Nt(1,1,1,1),new Nt(3,0,1,1),new Nt(1,0,1,1)],this._cubeDirections=[new A(1,0,0),new A(-1,0,0),new A(0,0,1),new A(0,0,-1),new A(0,1,0),new A(0,-1,0)],this._cubeUps=[new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,1,0),new A(0,0,1),new A(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),gu.setFromMatrixPosition(e.matrixWorld),n.position.copy(gu),_u.copy(n.position),_u.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(_u),n.updateMatrixWorld(),r.makeTranslation(-gu.x,-gu.y,-gu.z),hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu)}},yu=class extends lu{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new vu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},bu=class extends mu{constructor(){super(new wi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},xu=class extends lu{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Hn.DEFAULT_UP),this.updateMatrix(),this.target=new Hn,this.shadow=new bu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Su=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Cu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Cu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Cu(){return performance.now()}var wu=`\\[\\]\\.:\\/`,Tu=RegExp(`[\\[\\]\\.:\\/]`,`g`),Eu=`[^\\[\\]\\.:\\/]`,Du=`[^`+wu.replace(`\\.`,``)+`]`,Ou=`((?:WC+[\\/:])*)`.replace(`WC`,Eu),ku=`(WCOD+)?`.replace(`WCOD`,Du),Au=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,Eu),ju=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,Eu),Mu=RegExp(`^`+Ou+ku+Au+ju+`$`),Nu=[`material`,`materials`,`bones`,`map`],Pu=class{constructor(e,t,n){let r=n||Fu.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Fu=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Tu,``)}static parseTrackName(e){let t=Mu.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);Nu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Fu.Composite=Pu,Fu.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},Fu.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},Fu.prototype.GetterByBindingType=[Fu.prototype._getValue_direct,Fu.prototype._getValue_array,Fu.prototype._getValue_arrayElement,Fu.prototype._getValue_toArray],Fu.prototype.SetterByBindingTypeAndVersioning=[[Fu.prototype._setValue_direct,Fu.prototype._setValue_direct_setNeedsUpdate,Fu.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Fu.prototype._setValue_array,Fu.prototype._setValue_array_setNeedsUpdate,Fu.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Fu.prototype._setValue_arrayElement,Fu.prototype._setValue_arrayElement_setNeedsUpdate,Fu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Fu.prototype._setValue_fromArray,Fu.prototype._setValue_fromArray_setNeedsUpdate,Fu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`170`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`170`);var F=e=>document.querySelector(e),I=Math.PI*2,Iu=(e,t,n)=>Math.max(t,Math.min(n,e)),Lu=(e,t,n)=>e+(t-e)*n,Ru=(e,t,n)=>{let r=Iu((n-e)/(t-e),0,1);return r*r*(3-2*r)},zu=e=>1-(1-e)*(1-e),Bu=e=>e*e,Vu=e=>e<.5?2*e*e:1-(-2*e+2)**2/2;function Hu(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Uu(e,t){let n=(t-e)%I;return n>Math.PI&&(n-=I),n<-Math.PI&&(n+=I),n}var Wu={get(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},set(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch{return!1}},del(e){try{localStorage.removeItem(e)}catch{}}},Gu=`evyrim-ata-hoyugu-v1`,Ku=`evyrim-ata-prefs-v1`,L,qu=()=>Wu.set(Ku,L);function Ju(e,t){e._v!==t&&(e._v=t,e.textContent=t)}function Yu(e,t){e.hidden!==t&&(e.hidden=t)}var Xu=e=>{if(!(L&&L.vibrate===!1))try{navigator.vibrate&&navigator.vibrate(e)}catch{}};function Zu(){L=Object.assign({muted:!1,fps:!1,gfx:`auto`,rotHint:!0,sens:1,invertY:!1,btnSize:`m`,btnAlpha:1,lefty:!1,vibrate:!0,music:.6},Wu.get(`evyrim-ata-prefs-v1`)||{})}var R={ctx:null,out:null,noise:null,wind:null,init(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}try{let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.out=this.ctx.createGain(),this.out.gain.value=L.muted?0:.55,this.out.connect(this.ctx.destination);let t=this.ctx.sampleRate,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),r=n.getChannelData(0);for(let e=0;e<t;e++)r[e]=Math.random()*2-1;this.noise=n;let i=this.ctx.createBufferSource();i.buffer=n,i.loop=!0;let a=this.ctx.createBiquadFilter();a.type=`bandpass`,a.frequency.value=380,a.Q.value=.6;let o=this.ctx.createGain();o.gain.value=.05;let s=this.ctx.createOscillator();s.frequency.value=.08;let c=this.ctx.createGain();c.gain.value=.03,s.connect(c),c.connect(o.gain),i.connect(a),a.connect(o),o.connect(this.out),i.start(),s.start(),this.wind=o}catch{this.ctx=null}},setMuted(e){L.muted=e,qu(),this.out&&(this.out.gain.value=e?0:.55)},tone(e,t,n,r,i,a=0){let o=this.ctx,s=o.currentTime+a,c=o.createOscillator();c.type=e,c.frequency.setValueAtTime(t,s),n&&c.frequency.exponentialRampToValueAtTime(Math.max(1,n),s+r);let l=o.createGain();l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(i,s+.01),l.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(l),l.connect(this.out),c.start(s),c.stop(s+r+.03)},burst(e,t,n,r,i,a=0,o=1){let s=this.ctx,c=s.currentTime+a,l=s.createBufferSource();l.buffer=this.noise;let u=s.createBiquadFilter();u.type=n,u.frequency.setValueAtTime(r,c),i&&u.frequency.exponentialRampToValueAtTime(i,c+e),u.Q.value=o;let d=s.createGain();d.gain.setValueAtTime(t,c),d.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(u),u.connect(d),d.connect(this.out),l.start(c,Math.random()*.5),l.stop(c+e+.03)}};function z(e){if(R.ctx&&!L.muted)try{switch(e){case`swing`:R.burst(.14,.2,`bandpass`,2200,500);break;case`hit`:R.tone(`sine`,140,45,.16,.5),R.burst(.08,.25,`lowpass`,1800,300);break;case`block`:R.tone(`triangle`,1250,900,.12,.18),R.tone(`square`,2100,1800,.06,.04),R.burst(.05,.15,`highpass`,3e3);break;case`hurt`:R.tone(`sawtooth`,220,90,.18,.12),R.burst(.1,.2,`lowpass`,900,200);break;case`dodge`:R.burst(.2,.12,`bandpass`,600,1400);break;case`rune`:R.tone(`sine`,70,35,.9,.6),R.burst(.6,.25,`bandpass`,300,3e3,0,2),R.tone(`sine`,880,1320,.8,.08,.05),R.tone(`sine`,1320,1760,.7,.05,.12);break;case`pickup`:R.tone(`sine`,660,0,.12,.15),R.tone(`sine`,990,0,.18,.12,.08);break;case`gold`:R.tone(`triangle`,1400,0,.08,.1),R.tone(`triangle`,1900,0,.1,.08,.06);break;case`level`:[440,554,659,880].forEach((e,t)=>R.tone(`triangle`,e,0,.35,.14,t*.1));break;case`skill`:R.tone(`sine`,520,780,.25,.1);break;case`wolf`:R.tone(`sawtooth`,160,90,.5,.07),R.burst(.4,.08,`lowpass`,500,200);break;case`draugr`:R.burst(.8,.2,`lowpass`,400,120),R.tone(`sine`,80,55,.8,.25);break;case`roar`:R.tone(`sawtooth`,70,40,1.4,.22),R.burst(1.2,.3,`lowpass`,600,100);break;case`slam`:R.tone(`sine`,60,28,.8,.8),R.burst(.6,.5,`lowpass`,900,80);break;case`death`:R.burst(.5,.18,`lowpass`,700,120);break;case`click`:R.burst(.03,.2,`highpass`,2500);break;case`strain`:R.tone(`square`,180+Math.random()*40,0,.04,.025);break;case`break`:R.tone(`square`,900,200,.15,.1),R.burst(.1,.3,`highpass`,2e3);break;case`splash`:R.burst(.35,.22,`lowpass`,1400,250),R.tone(`sine`,300,120,.2,.05);break;case`unlock`:R.tone(`triangle`,500,0,.08,.15),R.tone(`triangle`,750,0,.15,.15,.08);break;case`door`:R.burst(.7,.3,`lowpass`,400,90),R.tone(`sine`,55,40,.7,.3);break;case`drink`:R.burst(.25,.12,`bandpass`,800,1600,0,4),R.tone(`sine`,400,700,.25,.06);break;case`gate`:R.burst(1,.25,`bandpass`,300,200,0,3),R.tone(`square`,90,70,1,.04);break;case`ui`:R.tone(`sine`,700,0,.05,.05);break;case`bite`:R.burst(.06,.35,`highpass`,1800),R.tone(`square`,240,120,.08,.08)}}catch{}}var Qu={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`},$u=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},ed=new wi(-1,1,1,-1,0,1),td=new class extends wr{constructor(){super(),this.setAttribute(`position`,new gr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new gr([0,2,0,0,2,0],2))}},nd=class{constructor(e){this._mesh=new M(td,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,ed)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},rd=class extends $u{constructor(e,t){super(),this.textureID=t===void 0?`tDiffuse`:t,e instanceof Kr?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ur.clone(e.uniforms),this.material=new Kr({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new nd(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},id=class extends $u{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},ad=class extends $u{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},od=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new k);this._width=n.width,this._height=n.height,t=new Ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new rd(Qu),this.copyPass.material.blending=0,this.clock=new Su}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}id!==void 0&&(r instanceof id?n=!0:r instanceof ad&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new k);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},sd=class extends $u{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new j}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},cd={name:`LuminosityHighPassShader`,shaderID:`luminosityHighPass`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new j(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`},ld=class e extends $u{constructor(e,t,n,r){super(),this.strength=t===void 0?1:t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new k(256,256):new k(e.x,e.y),this.clearColor=new j(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Ft(i,a,{type:g}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new Ft(i,a,{type:g});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new Ft(i,a,{type:g});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=cd;this.highPassUniforms=Ur.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Kr({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new k(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let l=Qu;this.copyUniforms=Ur.clone(l.uniforms),this.blendMaterial=new Kr({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new j,this.oldClearAlpha=1,this.basic=new ur,this.fsQuad=new nd(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new k(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this.fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this.fsQuad.render(t),s=this.renderTargetsVertical[n];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Kr({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new k(.5,.5)},direction:{value:new k(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Kr({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};ld.BlurDirectionX=new k(1,0),ld.BlurDirectionY=new k(0,1);var ud={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`},dd=class extends $u{constructor(){super();let e=ud;this.uniforms=Ur.clone(e.uniforms),this.material=new Kl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new nd(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},vt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7&&(this.material.defines.NEUTRAL_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},fd,pd,md,hd,gd,_d,B=1e3,vd,yd,bd,xd,Sd,Cd,wd,Td,Ed,Dd,Od,kd,Ad,jd,Md,V,Nd,Pd={uniforms:{tDiffuse:{value:null},time:{value:0},dungeon:{value:0}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`uniform sampler2D tDiffuse; uniform float time; uniform float dungeon; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      vec3 cool = mix(vec3(0.9, 0.97, 1.1), vec3(0.94, 0.95, 1.06), dungeon);
      vec3 warm = mix(vec3(1.06, 1.0, 0.92), vec3(1.12, 0.98, 0.84), dungeon);
      c.rgb *= mix(cool, warm, smoothstep(0.04, 0.7, l));
      c.rgb = max(mix(vec3(l), c.rgb, 1.1), 0.0);
      vec2 d = vUv - 0.5; c.rgb *= 1.0 - smoothstep(0.32, 0.85, length(d * vec2(1.15, 1.0))) * (0.42 + 0.2 * dungeon);
      float n = fract(sin(dot(vUv * 1000.0 + time, vec2(12.9898, 78.233))) * 43758.5453);
      c.rgb += (n - 0.5) * 0.012;
      gl_FragColor = c; }`},Fd=null,Id=null;function Ld(e){xd=e,yd.setPixelRatio(e),Fd&&(Fd.setPixelRatio(e),Fd.setSize(innerWidth,innerHeight))}var Rd=(e,t)=>new Jl(Object.assign({color:e},t||{})),zd=(e,t)=>new ur(Object.assign({color:e},t||{}));function H(e,t,n,r,i=0,a=0,o=0,s=null){let c=new Rr(e,t,n);r.userData&&r.userData.uv&&Vd(c,e,t,n,r.userData.uv);let l=new M(c,r);return l.position.set(i,a,o),l.castShadow=_d,l.receiveShadow=_d,s&&s.add(l),l}var Bd=(e,t)=>new ur({color:new j(e).multiplyScalar(t)});function Vd(e,t,n,r,i){let a=e.attributes.uv,o=[[r,n],[r,n],[t,r],[t,r],[t,n],[t,n]];for(let e=0;e<6;e++)for(let t=0;t<4;t++){let n=e*4+t;a.setXY(n,a.getX(n)*o[e][0]/i,a.getY(n)*o[e][1]/i)}}function Hd(){fd=window.matchMedia(`(pointer: coarse)`).matches,pd=[`low`,`medium`,`high`].includes(L.gfx)?L.gfx:fd?`medium`:`high`,md={low:`Düşük`,medium:`Orta`,high:`Yüksek`}[pd],hd=pd===`high`,gd=pd===`low`,_d=hd,vd=F(`#c`);try{yd=new Ss({canvas:vd,antialias:!fd&&!hd,powerPreference:`high-performance`})}catch(e){throw F(`#boot p`).textContent=`Bu tarayıcı WebGL desteklemiyor, demo açılamadı.`,e}if(bd=Math.min(window.devicePixelRatio||1,fd?1.5:2),xd=gd?Math.min(bd,.85):bd,yd.setPixelRatio(xd),yd.setSize(innerWidth,innerHeight),yd.toneMapping=4,yd.toneMappingExposure=1.12,yd.shadowMap.enabled=_d,yd.shadowMap.type=2,Sd=new ws,Cd=new Zr(58,innerWidth/innerHeight,.1,1200),wd=new j(9345968),Td=new j(395275),Sd.fog=new Cs(wd.clone(),.0095),Ed=new uu(11846880,4608618,2.4),Sd.add(Ed),Dd=new xu(16759183,2.7),Dd.castShadow=_d,_d){Dd.shadow.mapSize.set(2048,2048);let e=Dd.shadow.camera;e.left=-30,e.right=30,e.top=30,e.bottom=-30,e.near=1,e.far=170,Dd.shadow.bias=-6e-4,Dd.shadow.normalBias=.03}if(Sd.add(Dd,Dd.target),Od=new A(-55,36,44),kd=new yu(16747068,55,26,2),kd.position.set(0,1.6,0),Sd.add(kd),Ad=new yu(16753242,0,16,1.6),Sd.add(Ad),jd=new yu(16749640,0,22,2),jd.position.set(B,2.6,38),Sd.add(jd),Md=new yu(6280902,0,26,2),Md.position.set(1050,3.6,37),Sd.add(Md),V=new P,Sd.add(V),Nd=new P,Nd.visible=!1,Sd.add(Nd),hd)try{let e={EffectComposer:od},t={RenderPass:sd},n={UnrealBloomPass:ld},r={ShaderPass:rd},i={OutputPass:dd},a=new Ft(innerWidth*xd,innerHeight*xd,{type:g,samples:4});Fd=new e.EffectComposer(yd,a),Fd.setPixelRatio(xd),Fd.setSize(innerWidth,innerHeight),Fd.addPass(new t.RenderPass(Sd,Cd)),Fd.addPass(new n.UnrealBloomPass(new k(innerWidth,innerHeight),.55,.5,.95)),Id=new r.ShaderPass(Pd),Fd.addPass(Id),Fd.addPass(new i.OutputPass),document.getElementById(`vig`).hidden=!0}catch(e){console.warn(`Son işleme yüklenemedi`,e),Fd=null}}var Ud={x:72,z:-72},Wd={x:-48,z:38},Gd=[[3,-3],[28,-20],[50,-50],[65,-65]],Kd={x:-8,z:70,rx:20,rz:14},qd={x:3,z:49},Jd={x:-10,z:87},Yd={x:-10,z:102},Xd={x:-2,z:59.5},Zd=[[-9,21],[-13,33],[-6,42],[3,47]],Qd={x:76,z:60,r:12},$d={x:38,z:29},ef={x:57,z:45},tf=[[12,5],[26,17],[38,27],[50,38],[60,48],[64.5,57]],nf=[[[50,76],[92,82]],[[64,38],[94,42]]],rf,af=[[-40,30],[-55,44],[-53,31],[-42,47],[15,-32],[-22,-36],[42,-10],[62,-24],[26,26],[-30,14],[52,-76],[-62,-12]],of={x:-Math.SQRT1_2,z:Math.SQRT1_2},sf,cf=[33,38,43],lf=[[24,-31],[57,-57],[-34,-48],[-58,52],[33,60]],uf=[[-31,71],[15,75],[-23,96]],df=[[-42,-18],[46,22],[-64,8]],ff=[[20,31],[-26,-14],[62,-8],[-16,54]],pf=[-38,50],mf=[[-62,-22],[40,52],[-30,-62],[72,12],[-70,60]];function hf(){rf=[Gd,Zd,tf]}function gf(){sf={x:Ud.x+of.x*10.6,z:Ud.z+of.z*10.6}}var _f,vf,yf,bf,xf=(e,t)=>Math.hypot((e-Kd.x)/Kd.rx,(t-Kd.z)/Kd.rz);function Sf(e,t,n=0){return Math.hypot((e-Kd.x)/(Kd.rx+4+n),(t-Kd.z)/(Kd.rz+4+n))<1||Math.hypot(e-qd.x,t-qd.z)<9+n||Math.hypot(e-Jd.x,t-Jd.z)<9+n||lf.some(n=>Math.hypot(e-n[0],t-n[1])<3)||uf.some(n=>Math.hypot(e-n[0],t-n[1])<3)||Math.hypot(e-Qd.x,t-Qd.z)<Qd.r+4+n||Math.hypot(e-$d.x,t-$d.z)<7+n||Math.hypot(e-ef.x,t-ef.z)<5+n}function Cf(e,t,n,r,i,a){let o=i-n,s=a-r,c=e-n,l=t-r,u=Iu((c*o+l*s)/(o*o+s*s),0,1);return Math.hypot(e-(n+o*u),t-(r+s*u))}function wf(e,t){let n=1e9;for(let r of rf)for(let i=0;i<r.length-1;i++)n=Math.min(n,Cf(e,t,r[i][0],r[i][1],r[i+1][0],r[i+1][1]));return n}function Tf(e,t){let n=2.2*Math.sin(e*.045)*Math.cos(t*.05)+1.4*Math.sin((e+t)*.08+1)+.7*Math.sin(e*.19+1.3)*Math.sin(t*.16+.4)+.3*Math.sin(e*.5)*Math.cos(t*.43);n*=Ru(16,34,Math.hypot(e,t)),n*=Ru(12,26,Math.hypot(e-Ud.x,t-Ud.z)),n*=Ru(6,14,Math.hypot(e-Wd.x,t-Wd.z)),n=Lu(n*.45,n,Ru(1.5,7,wf(e,t))),n+=7.5*(1-Ru(3,13,Math.hypot(e-Yd.x,t-Yd.z))),n*=Ru(4,10,Math.hypot(e-qd.x,t-qd.z)),n*=Ru(4,8,Math.hypot(e-Jd.x,t-Jd.z));for(let[r,i]of nf)n+=11*(1-Ru(3,12,Cf(e,t,r[0],r[1],i[0],i[1])))*(.8+.2*Math.sin(e*.4+t*.3));n*=Ru(Qd.r-1,Qd.r+7,Math.hypot(e-Qd.x,t-Qd.z)),n*=Ru(3,8,Math.hypot(e-$d.x,t-$d.z))*Ru(2.5,6,Math.hypot(e-ef.x,t-ef.z)),n=Lu(-1,n,Ru(.9,1.3,xf(e,t)));let r=Ru(86,128,Math.max(Math.abs(e),Math.abs(t)));return n+r*r*38+r*6*Math.sin(e*.13)*Math.cos(t*.11)}var Ef;function U(e,t){let n=(e+_f)/yf,r=(t+_f)/yf,i=Iu(Math.floor(n),0,vf-1),a=Iu(Math.floor(r),0,vf-1),o=Iu(n-i,0,1),s=Iu(r-a,0,1),c=Ef[a*bf+i],l=Ef[a*bf+i+1],u=Ef[(a+1)*bf+i],d=Ef[(a+1)*bf+i+1];return o+s<=1?c+(l-c)*o+(u-c)*s:d+(u-d)*(1-o)+(l-d)*(1-s)}function Df(){_f=130,vf=130,yf=_f*2/vf,bf=vf+1}function Of(){Ef=new Float32Array(bf*bf);for(let e=0;e<bf;e++)for(let t=0;t<bf;t++)Ef[e*bf+t]=Tf(-_f+t*yf,-_f+e*yf);{let e=vf*vf*2,t=new Float32Array(e*9),n=new Float32Array(e*9),r=new Float32Array(e*6),i=new j(15265526),a=new j(12832995),o=new j(6252144),s=new j(8021842),c=new j(12169893),l=new j,u=Hu(7),d=0,f=(e,f,p,m,h,g,_,v,y)=>{let b=m-e,x=h-f,S=g-p,C=_-e,w=v-f,ee=y-p,T=x*ee-S*w,te=S*C-b*ee,ne=b*w-x*C,E=te/(Math.hypot(T,te,ne)||1),re=(e+m+_)/3,D=(f+h+v)/3,ie=(p+g+y)/3;l.copy(i).lerp(a,Iu(.45-D*.1,0,.6)),l.offsetHSL(0,0,u()*.05-.025);let ae=Math.hypot(re,ie);ae<15&&l.lerp(c,(1-Ru(9,15,ae))*.7);let oe=wf(re,ie);oe<3&&l.lerp(s,(1-Ru(1.2,3,oe))*.85),E<.9&&l.lerp(o,Ru(.9,.72,E)),D>20&&E>.75&&l.lerp(i,Ru(20,30,D)*.8),t.set([e,f,p,m,h,g,_,v,y],d*9),r.set([e/7,p/7,m/7,g/7,_/7,y/7],d*6);for(let e=0;e<3;e++)n[d*9+e*3]=l.r,n[d*9+e*3+1]=l.g,n[d*9+e*3+2]=l.b;d++};for(let e=0;e<vf;e++)for(let t=0;t<vf;t++){let n=-_f+t*yf,r=n+yf,i=-_f+e*yf,a=i+yf,o=Ef[e*bf+t],s=Ef[e*bf+t+1],c=Ef[(e+1)*bf+t],l=Ef[(e+1)*bf+t+1];f(n,o,i,n,c,a,r,s,i),f(n,c,a,r,l,a,r,s,i)}let p=new wr;p.setAttribute(`position`,new pr(t,3)),p.setAttribute(`color`,new pr(n,3)),p.computeVertexNormals(),p.setAttribute(`uv`,new pr(r,2));let m=new M(p,new Jl({vertexColors:!0,map:If.snowDetail}));m.receiveShadow=_d,V.add(m)}}var kf,W;function Af(t,n,r,i=!0,a=!1){let o=document.createElement(`canvas`);o.width=t,o.height=n,r(o.getContext(`2d`),t,n);let s=new _c(o);return i&&(s.colorSpace=We),a||(s.wrapS=s.wrapT=e),s.anisotropy=kf,s}function jf(e,t,n,r,i,a,o){for(let s=0;s<r;s++){let r=(W()-.5)*i;e.fillStyle=r>0?`rgba(255,255,255,${r})`:`rgba(0,0,0,${-r})`;let s=a+W()*(o-a);e.fillRect(W()*t,W()*n,s,s*(.5+W()))}}function Mf(e,t){let n=e=>Math.max(0,Math.min(255,Math.round(e*(1+t))));return`rgb(${n(e>>16&255)},${n(e>>8&255)},${n(e&255)})`}function Nf(e,t,n,r,i){for(let a=0;a<r;a++){e.strokeStyle=`rgba(0,0,0,${i+W()*.2})`,e.lineWidth=1,e.beginPath();let r=W()*t,a=W()*n;e.moveTo(r,a);for(let t=0;t<5;t++)r+=(W()-.5)*44,a+=(W()-.5)*44,e.lineTo(r,a);e.stroke()}}function Pf(e){return Af(256,256,(t,n,r)=>{let i=n/5;for(let n=0;n<5;n++){t.fillStyle=Mf(e,(W()-.5)*.28),t.fillRect(n*i,0,i,r);for(let e=0;e<14;e++){t.strokeStyle=`rgba(0,0,0,${.05+W()*.1})`,t.lineWidth=1+W(),t.beginPath();let a=n*i+W()*i;t.moveTo(a,0);for(let n=0;n<=r;n+=16)t.lineTo(a+Math.sin(n*.05+e)*2.5,n);t.stroke()}W()<.7&&(t.fillStyle=`rgba(30,18,10,.45)`,t.beginPath(),t.ellipse(n*i+i*(.3+W()*.4),W()*r,3+W()*3,6+W()*5,0,0,I),t.fill()),t.fillStyle=`rgba(15,9,5,.75)`,t.fillRect(n*i,0,2.5,r),t.fillStyle=`rgba(255,230,200,.07)`,t.fillRect(n*i+2.5,0,2,r)}jf(t,n,r,500,.12,1,2)})}function Ff(e){return Af(256,256,(t,n,r)=>{t.fillStyle=Mf(e,0),t.fillRect(0,0,n,r),jf(t,n,r,1400,.22,1,4),Nf(t,n,r,7,.22);for(let e=0;e<14;e++)t.fillStyle=`rgba(160,170,90,${.06+W()*.1})`,t.beginPath(),t.arc(W()*n,W()*r,3+W()*10,0,I),t.fill()})}var If={},Lf=e=>(t,n,r)=>{let i=t.createRadialGradient(n/2,r/2,0,n/2,r/2,n/2);for(let[t,n]of e)i.addColorStop(t,`rgba(255,255,255,${n})`);t.fillStyle=i,t.fillRect(0,0,n,r)};function Rf(e,t,n){let r=Rd(16777215,Object.assign({map:e},n||{}));return r.userData.uv=t,r}var zf;function Bf(e,t,n,r,i,a,o=.7){if(gd)return null;let s=a+`:`+o,c=zf.get(s);c||(c=new Os({map:If.glow,color:a,transparent:!0,opacity:o,blending:2,depthWrite:!1}),zf.set(s,c));let l=new Hs(c);return l.position.set(t,n,r),l.scale.set(i,i,1),e.add(l),l}var Vf=[],Hf=[],Uf=[],Wf,Gf;function Kf(e,t,n){if(_d)return null;let r=new M(Gf,Wf);r.scale.set(n,1,n),r.renderOrder=1,Sd.add(r);let i={m:r,pos:e,vis:t};return Uf.push(i),i}function qf(){for(let e of Uf){let t=e.vis();if(e.m.visible=t,!t)continue;let n=e.pos();e.m.position.set(n.x,(Q.zone===`world`?U(n.x,n.z):0)+.04,n.z)}}var G;function Jf(){kf=Math.min(8,yd.capabilities.getMaxAnisotropy()),W=Hu(99),If.wood=Pf(6965813),If.woodD=Pf(4600618),If.stone=Ff(7829629),If.dstone=Ff(6051149),If.roof=Af(256,256,(e,t,n)=>{e.fillStyle=`#2b221c`,e.fillRect(0,0,t,n);let r=n/8;for(let n=0;n<8;n++){let i=n%2*16;for(let a=-32;a<t+32;a+=32)e.fillStyle=Mf(4864558,(W()-.5)*.3),e.fillRect(a+i+1,n*r+1,30,r-2),e.fillStyle=`rgba(0,0,0,.35)`,e.fillRect(a+i+1,n*r+r-5,30,4)}jf(e,t,n,400,.12,1,2)}),If.snow=Af(256,256,(e,t,n)=>{e.fillStyle=`#eef3f8`,e.fillRect(0,0,t,n);for(let r=0;r<40;r++){let r=W()*t,i=W()*n,a=20+W()*50,o=e.createRadialGradient(r,i,0,r,i,a);o.addColorStop(0,`rgba(160,182,215,.16)`),o.addColorStop(1,`rgba(160,182,215,0)`),e.fillStyle=o,e.fillRect(r-a,i-a,a*2,a*2)}jf(e,t,n,300,.1,1,2)}),If.brick=Af(256,256,(e,t,n)=>{e.fillStyle=`#1d1a17`,e.fillRect(0,0,t,n);let r=n/6,i=t/3;for(let t=0;t<6;t++){let n=t%2*i/2;for(let a=-1;a<4;a++){let o=a*i+n+2,s=t*r+2,c=i-4,l=r-4;e.fillStyle=Mf(6248269,(W()-.5)*.36),e.fillRect(o,s,c,l),e.fillStyle=`rgba(255,255,255,.07)`,e.fillRect(o,s,c,3),e.fillStyle=`rgba(0,0,0,.28)`,e.fillRect(o,s+l-4,c,4),W()<.14&&(e.fillStyle=`rgba(80,105,55,.35)`,e.fillRect(o,s+l*.35,c*W(),l*.65))}}jf(e,t,n,1500,.18,1,3),Nf(e,t,n,4,.2)}),If.flag=Af(256,256,(e,t,n)=>{e.fillStyle=`#15120f`,e.fillRect(0,0,t,n);for(let[t,n,r,i]of[[0,0,128,128],[128,0,128,80],[128,80,128,48],[0,128,80,128],[80,128,176,128]])e.fillStyle=Mf(4932926,(W()-.5)*.3),e.fillRect(t+3,n+3,r-6,i-6),e.fillStyle=`rgba(255,255,255,.05)`,e.fillRect(t+3,n+3,r-6,3);jf(e,t,n,1600,.2,1,3),Nf(e,t,n,5,.3)}),If.snowDetail=Af(256,256,(e,t,n)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,n);for(let r=0;r<70;r++){e.strokeStyle=`rgba(110,132,170,${.04+W()*.06})`,e.lineWidth=1+W()*2,e.beginPath();let r=W()*n,i=W()*t,a=40+W()*90;e.moveTo(i,r),e.quadraticCurveTo(i+a/2,r+(W()-.5)*14,i+a,r+(W()-.5)*6),e.stroke()}jf(e,t,n,900,.12,1,2)}),If.soft=Af(64,64,Lf([[0,1],[.35,.8],[1,0]]),!0,!0),If.glow=Af(128,128,Lf([[0,1],[.15,.55],[.45,.12],[1,0]]),!0,!0),If.smoke=Af(128,128,e=>{for(let t=0;t<14;t++){let t=40+W()*48,n=40+W()*48,r=18+W()*26,i=e.createRadialGradient(t,n,0,t,n,r);i.addColorStop(0,`rgba(255,255,255,.35)`),i.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=i,e.fillRect(0,0,128,128)}},!0,!0),If.cloud=Af(256,96,(e,t,n)=>{for(let r=0;r<22;r++){let r=30+W()*(t-60),i=n*.5+(W()-.5)*n*.3,a=14+W()*30,o=e.createRadialGradient(r,i,0,r,i,a);o.addColorStop(0,`rgba(255,255,255,.4)`),o.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=o,e.fillRect(0,0,t,n)}},!0,!0),zf=new Map,Wf=new ur({map:If.soft,color:659224,transparent:!0,opacity:.42,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),Gf=new fi(1,1).rotateX(-Math.PI/2),G={wood:Rf(If.wood,2),woodD:Rf(If.woodD,1.5),roof:Rf(If.roof,2),stone:Rf(If.stone,2),snow:Rf(If.snow,3),rstone:Rd(16777215,{map:If.stone,flatShading:!0}),iron:Rd(4014406),dstone:Rf(If.dstone,2),bone:Rd(13616816)}}var Yf,Xf,Zf,Qf;function $f(e,t,n,r,i){let a=new fi(1,1,80,1),o=a.attributes.position;for(let a=0;a<o.count;a++){let s=o.getX(a)+.5,c=o.getY(a)+.5,l=r+(i-r)*s,u=Math.sin(s*9)*18;o.setXYZ(a,Math.cos(l)*(e+u),t+c*n,Math.sin(l)*(e+u))}a.computeBoundingSphere();let s=new M(a,Zf);return s.frustumCulled=!1,s}var ep,tp,np,rp,ip;function ap(){Yf=new P,Sd.add(Yf),Xf=new M(new Wl(500,32,16),new Kr({uniforms:{top:{value:new j(792368)},horizon:{value:wd.clone()},glow:{value:new j(15769722)},sunDir:{value:Od.clone().normalize()}},side:1,depthWrite:!1,vertexShader:`varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 glow; uniform vec3 sunDir; varying vec3 vDir;
      void main(){ vec3 d = normalize(vDir); float h = d.y;
        vec3 col = mix(horizon, top, smoothstep(0.0, 0.55, h));
        float s = max(dot(d, normalize(sunDir)), 0.0);
        col += glow * pow(s, 5.0) * (1.0 - smoothstep(0.0, 0.42, h)) * 0.85;
        col = mix(col, horizon, 1.0 - smoothstep(-0.25, 0.0, h));
        gl_FragColor = vec4(col, 1.0);
        #include <colorspace_fragment>
      }`})),Xf.renderOrder=-10,Xf.frustumCulled=!1,Yf.add(Xf);{let e=Hu(3),t=[];for(let n=0;n<800;n++){let n=e()*I,r=.12+e()*.88,i=Math.sqrt(1-r*r);t.push(Math.cos(n)*i*470,r*470,Math.sin(n)*i*470)}let n=new wr;n.setAttribute(`position`,new gr(t,3)),Qf=new hc(n,new uc({color:14674175,size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.8,depthWrite:!1})),Qf.frustumCulled=!1,Yf.add(Qf);let r=new M(new Wl(9,20,12),zd(15331061,{fog:!1}));r.position.set(.42,.5,-.76).multiplyScalar(440),Yf.add(r)}Zf=new Kr({uniforms:{t:{value:0},k:{value:1}},transparent:!0,depthWrite:!1,blending:2,side:2,vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`uniform float t; uniform float k; varying vec2 vUv;
      void main(){ float x = vUv.x * 40.0;
        float band = 0.55 + 0.45 * sin(x * 0.9 + t * 0.35 + sin(x * 0.23 + t * 0.2) * 2.0);
        float rays = 0.6 + 0.4 * sin(x * 7.0 + t * 1.3) * sin(x * 3.1 - t * 0.9);
        float v = vUv.y;
        float a = smoothstep(0.0, 0.12, v) * (1.0 - smoothstep(0.25, 1.0, v)) * band * rays;
        a *= smoothstep(0.0, 0.08, vUv.x) * (1.0 - smoothstep(0.92, 1.0, vUv.x));
        vec3 c = mix(vec3(0.25, 1.0, 0.62), vec3(0.58, 0.36, 0.95), smoothstep(0.35, 1.0, v));
        gl_FragColor = vec4(c, a * 0.62 * k);
        #include <colorspace_fragment>
      }`}),Yf.add($f(380,70,120,-2.5,-.8),$f(430,95,95,-1.9,-.15)),ep=fd?650:1400,tp=new Float32Array(ep*3),np=new Float32Array(ep);for(let e=0;e<ep;e++)tp[e*3]=(Math.random()-.5)*60,tp[e*3+1]=Math.random()*26,tp[e*3+2]=(Math.random()-.5)*60,np[e]=1+Math.random()*1.2;rp=new wr,rp.setAttribute(`position`,new pr(tp,3)),ip=new hc(rp,new uc({map:If.soft,color:16777215,size:.16,transparent:!0,opacity:.85,depthWrite:!1})),ip.frustumCulled=!1,V.add(ip)}var op=.68,sp=[{t:0,top:264212,hor:1581882,glow:2109520,fog:1713464,dens:.012,hs:5333914,hg:1449004,hi:1.25,sc:9348312,si:.75,dir:[30,60,-50],stars:1,dark:1},{t:.22,top:1713992,hor:6974086,glow:16751216,fog:6187136,dens:.011,hs:8949944,hg:3028040,hi:1.6,sc:16751210,si:1.4,dir:[70,12,30],stars:.5,dark:.7},{t:.32,top:3495308,hor:12889250,glow:16760976,fog:10263724,dens:.0085,hs:11844822,hg:5002862,hi:1.9,sc:16765608,si:2.2,dir:[60,30,30],stars:0,dark:0},{t:.5,top:4157358,hor:10926284,glow:16773336,fog:10005184,dens:.007,hs:12109532,hg:5266030,hi:1.8,sc:16773340,si:2.2,dir:[-15,75,30],stars:0,dark:0},{t:.7,top:792368,hor:9345968,glow:15769722,fog:9345968,dens:.0095,hs:11846880,hg:4608618,hi:2.4,sc:16759183,si:2.7,dir:[-55,36,44],stars:.8,dark:.3},{t:.8,top:528162,hor:4542570,glow:12607562,fog:4410982,dens:.011,hs:8030384,hg:2501692,hi:1.6,sc:13666928,si:1.4,dir:[-70,14,40],stars:1,dark:.8}],cp=new j,lp=new j,up=new A,dp=new A,fp={dark:0};function pp(e){for(let t=0;t<sp.length;t++){let n=sp[t],r=sp[(t+1)%sp.length],i=r.t<=n.t?r.t+1:r.t,a=e<n.t?e+1:e;if(a>=n.t&&a<i)return[n,r,Ru(n.t,i,a)]}return[sp[0],sp[0],0]}var mp=(e,t,n,r)=>e.copy(cp.setHex(t)).lerp(lp.setHex(n),r),hp=(e,t,n)=>e+(t-e)*n,gp=()=>Q.zone===`world`?fp.dark:0;function _p(){let e=Q.dayT*24%24,t=Math.floor(e),n=Math.floor((e-t)*6)*10;return`${e>=5&&e<8?`Şafak`:e>=8&&e<17?`Gündüz`:e>=17&&e<20.5?`Akşam`:`Gece`} · ${String(t).padStart(2,`0`)}:${String(n).padStart(2,`0`)}`}function vp(e){if(Q.dayT=(Q.dayT+e/720)%1,Q.zone!==`world`)return;let[t,n,r]=pp(Q.dayT),i=Xf.material.uniforms;mp(i.top.value,t.top,n.top,r),mp(i.horizon.value,t.hor,n.hor,r),mp(i.glow.value,t.glow,n.glow,r);let a=Sd.fog;mp(a.color,t.fog,n.fog,r),a.density=hp(t.dens,n.dens,r),mp(Ed.color,t.hs,n.hs,r),mp(Ed.groundColor,t.hg,n.hg,r),Ed.intensity=hp(t.hi,n.hi,r),mp(Dd.color,t.sc,n.sc,r),Dd.intensity=hp(t.si,n.si,r),up.fromArray(t.dir).normalize(),dp.fromArray(n.dir).normalize(),Od.copy(up.lerp(dp,r).normalize().multiplyScalar(79)),i.sunDir.value.copy(Od).normalize(),Qf.material.opacity=.8*hp(t.stars,n.stars,r),Zf.uniforms.k.value=Iu(hp(t.stars,n.stars,r),0,1),fp.dark=hp(t.dark,n.dark,r)}var yp={G:{rx:-.35,rz:0,w:.9,lx:-.3,lz:0,ty:0,tx:0,drop:0,fL:0,fR:0},slash:{W:{rx:-3.3,rz:-.55,w:.4,lx:-1.1,lz:.3,ty:-.5,tx:-.12,drop:.03,fL:.1,fR:-.12},S:{rx:-.9,rz:.45,w:1.9,lx:.2,lz:0,ty:.4,tx:.28,drop:.1,fL:.3,fR:-.2}},chop:{W:{rx:-3.9,rz:-.1,w:.2,lx:-.9,lz:.1,ty:-.2,tx:-.18,drop:.02,fL:.08,fR:-.08},S:{rx:-1.25,rz:.05,w:1.8,lx:.1,lz:0,ty:.1,tx:.35,drop:.12,fL:.32,fR:-.18}},heavy:{W:{rx:-2.6,rz:-.9,w:.5,lx:-2.4,lz:-.7,ty:-.75,tx:-.1,drop:.06,fL:.1,fR:-.15},S:{rx:-1.3,rz:.7,w:1.4,lx:-1.1,lz:.5,ty:.6,tx:.2,drop:.12,fL:.3,fR:-.2}},p1:{W:{rx:-2.9,rz:-.7,w:.5,lx:-.7,lz:.25,ty:-.55,tx:-.08,drop:.02,fL:.05,fR:-.1},S:{rx:-.8,rz:.55,w:1.6,lx:-.25,lz:.1,ty:.45,tx:.22,drop:.1,fL:.28,fR:-.18}},p2:{W:{rx:-1.5,rz:.9,w:1.45,lx:-.35,lz:.1,ty:.55,tx:.05,drop:.06,fL:.15,fR:-.1},S:{rx:-1.55,rz:-.9,w:1.5,lx:-.6,lz:.3,ty:-.5,tx:.18,drop:.1,fL:.08,fR:.14}},p3:{W:{rx:-3.8,rz:-.1,w:.2,lx:-.9,lz:.2,ty:-.2,tx:-.2,drop:0,fL:.05,fR:-.05},S:{rx:-1.2,rz:.05,w:1.8,lx:-.3,lz:.1,ty:.1,tx:.4,drop:.16,fL:.34,fR:-.2}},pw:{W:{rx:-2.4,rz:-1.1,w:.6,lx:-1.2,lz:.5,ty:-.9,tx:-.1,drop:.08,fL:.05,fR:-.15},S:{rx:-1.4,rz:.9,w:1.3,lx:-.25,lz:.1,ty:.8,tx:.3,drop:.18,fL:.36,fR:-.22}},slam:{W:{rx:-3.5,rz:-.15,w:.3,lx:-3.5,lz:-.15,ty:0,tx:-.2,drop:0,fL:.1,fR:-.1},S:{rx:-.7,rz:0,w:1.3,lx:-.7,lz:0,ty:0,tx:.5,drop:.22,fL:.28,fR:-.18}}},bp=[0,Math.PI,Math.PI,0],xp={p1:{W:.12,S:.1,R:.3,mult:1,cost:9,reach:2.5,arc:1.25,knock:2.5,lunge:3},p2:{W:.1,S:.1,R:.3,mult:1,cost:9,reach:2.5,arc:1.3,knock:2.5,lunge:3},p3:{W:.2,S:.12,R:.4,mult:1.45,cost:12,reach:2.7,arc:.95,knock:5,lunge:4,heavy:!0},pw:{W:.34,S:.14,R:.42,mult:2.2,cost:24,reach:2.9,arc:1.6,knock:6,lunge:4.5,heavy:!0}},Sp=[`#9aa1a8`,`#e4ecf3`,`#86d47e`,`#73b8ff`,`#e6c46f`],Cp={weapon:`Silah`,shield:`Kalkan`,head:`Başlık`,body:`Zırh`,bow:`Yay`},wp={sword:{name:`Kılıç`,speed:1,reach:1,arc:1,cost:1,knock:1,sneak:3,trait:`Dengeli: hızlı kombo, orta menzil.`},axe:{name:`Balta`,speed:.9,reach:1,arc:1,cost:1.1,knock:1,sneak:3,trait:`Kanatır: her darbe 3 saniye boyunca ek hasar verir.`},mace:{name:`Topuz`,speed:.85,reach:.95,arc:1,cost:1.15,knock:1.3,sneak:3,trait:`Zırh ezer: draugr, trol ve Höyük Kralı'na %35 fazla hasar. Güçlü saldırı iri düşmanları da sendeletir.`},dagger:{name:`Hançer`,speed:1.4,reach:.8,arc:.85,cost:.65,knock:.6,sneak:5,trait:`Çok hızlı, kısa menzil. Gizli saldırı ×5.`},bow:{name:`Yay`,speed:1,reach:1,arc:1,cost:0,knock:.5,sneak:3,trait:`Basılı tut: ger, bırak: at. Tam gerilen ok en çok hasarı verir. Fark edilmeden vurursan ×3.`},great:{name:`Büyük silah`,speed:.72,reach:1.25,arc:1.3,cost:1.5,knock:1.6,sneak:3,twoHand:!0,trait:`Yavaş ve çok güçlü, geniş alana vurur. Kalkan kullanılamaz.`}},Tp={share:.35,dur:3},Ep=1.35,Dp=.6,Op=.4,kp=.55,Ap={weapon:2,shield:2,head:2,body:3,bow:2},jp=(e,t,n,r,i,a,o,s,c={})=>({id:e,name:t,slot:`weapon`,cls:n,tier:r,dmg:i,value:a,look:{model:o,blade:s,...c}}),Mp=Object.fromEntries([jp(`rusty_sword`,`Paslı kılıç`,`sword`,0,8,6,`rusty`,8020556),jp(`iron_sword`,`Demir kılıç`,`sword`,1,10,30,`sword`,12042440),jp(`steel_sword`,`Çelik kılıç`,`sword`,2,13,80,`sword`,14081507,{guard:9279134}),jp(`frost_sword`,`Ayaz çeliği kılıç`,`sword`,3,16,180,`sword`,11133685,{guard:7180195,glow:10479359}),jp(`ata_sword`,`Ata kılıcı`,`sword`,4,19,260,`sword`,13620936,{guard:13214282,glow:7329993}),jp(`rusty_axe`,`Paslı balta`,`axe`,0,9,7,`handaxe`,7297608),jp(`iron_axe`,`Demir balta`,`axe`,1,11,35,`handaxe`,9344411),jp(`steel_axe`,`Çelik balta`,`axe`,2,14,90,`handaxe`,12897491),jp(`iron_mace`,`Demir topuz`,`mace`,1,11,35,`mace`,9344411),jp(`steel_mace`,`Çelik topuz`,`mace`,2,14,90,`mace`,12897491),jp(`frost_mace`,`Ayaz çeliği topuz`,`mace`,3,17,190,`mace`,11133685,{glow:10479359}),jp(`iron_dagger`,`Demir hançer`,`dagger`,1,7,25,`dagger`,12042440),jp(`steel_dagger`,`Çelik hançer`,`dagger`,2,9,70,`dagger`,14081507,{guard:9279134}),jp(`frost_dagger`,`Ayaz çeliği hançer`,`dagger`,3,12,170,`dagger`,11133685,{guard:7180195,glow:10479359}),jp(`iron_greataxe`,`Demir savaş baltası`,`great`,1,17,55,`axe`,8423309),jp(`steel_greatsword`,`Çelik büyük kılıç`,`great`,2,21,130,`greatsword`,14081507,{guard:9279134}),jp(`ata_greataxe`,`Höyük Kralı'nın baltası`,`great`,4,30,320,`axe`,6254444,{glow:7329993}),{id:`hunt_bow`,name:`Av yayı`,slot:`bow`,cls:`bow`,tier:1,dmg:10,draw:.7,vel:34,value:45,look:{blade:7031342}},{id:`long_bow`,name:`Uzun yay`,slot:`bow`,cls:`bow`,tier:2,dmg:14,draw:.9,vel:42,value:120,look:{blade:4862756}},{id:`frost_bow`,name:`Ayaz yayı`,slot:`bow`,cls:`bow`,tier:3,dmg:18,draw:.8,vel:44,value:230,look:{blade:9419981,glow:10479359}},{id:`wood_shield`,name:`Tahta kalkan`,slot:`shield`,tier:1,block:.62,armor:2,value:15,look:{face:[`#8c3226`,`#e3d6b4`],rim:7172986}},{id:`iron_shield`,name:`Demir kalkan`,slot:`shield`,tier:1,block:.68,armor:4,value:45,look:{face:[`#2f4a63`,`#d8c48a`],rim:9344411}},{id:`steel_shield`,name:`Çelik kalkan`,slot:`shield`,tier:2,block:.74,armor:6,value:95,look:{face:[`#1f2a33`,`#c8d0d8`],rim:12897491}},{id:`red_shield`,name:`Kızılkalkan`,slot:`shield`,tier:4,block:.8,armor:9,value:240,look:{face:[`#7a1f1a`,`#d8c48a`],rim:13214282}},{id:`frost_shield`,name:`Ayaz çeliği kalkan`,slot:`shield`,tier:3,block:.8,armor:8,value:190,look:{face:[`#20384a`,`#a9e2f5`],rim:11133685}},{id:`fur_cap`,name:`Kürk başlık`,slot:`head`,tier:1,armor:4,value:20,look:{helm:`cap`,color:5914412,fur:14077373}},{id:`wolf_hood`,name:`Kurt başlığı`,slot:`head`,tier:2,armor:7,value:70,look:{helm:`wolf`,color:9078144,fur:13617341}},{id:`rusty_helm`,name:`Paslı miğfer`,slot:`head`,tier:0,armor:5,heavy:!0,value:8,look:{helm:`helm`,color:7168597}},{id:`iron_helm`,name:`Demir miğfer`,slot:`head`,tier:1,armor:8,heavy:!0,value:45,look:{helm:`helm`,color:10726581}},{id:`steel_helm`,name:`Çelik miğfer`,slot:`head`,tier:2,armor:11,heavy:!0,value:100,look:{helm:`guard`,color:12897491}},{id:`frost_helm`,name:`Ayaz çeliği miğfer`,slot:`head`,tier:3,armor:14,heavy:!0,value:190,look:{helm:`guard`,color:11131370}},{id:`leather_armor`,name:`Deri zırh`,slot:`body`,tier:1,armor:10,value:30,look:{vest:5913896}},{id:`wolf_armor`,name:`Kurt kürkü zırh`,slot:`body`,tier:2,armor:15,value:90,look:{vest:7037528,fur:13617341}},{id:`chain_armor`,name:`Demir zincir zırh`,slot:`body`,tier:1,armor:18,heavy:!0,value:70,look:{vest:8225931,pauldron:`plate`,metal:9344411}},{id:`steel_armor`,name:`Çelik zırh`,slot:`body`,tier:2,armor:26,heavy:!0,value:150,look:{vest:11187131,pauldron:`plate`,metal:13160664}},{id:`guard_armor`,name:`Isvik muhafız zırhı`,slot:`body`,tier:4,armor:30,heavy:!0,value:260,look:{vest:3425898,pauldron:`plate`,metal:13160664}},{id:`frost_armor`,name:`Ayaz çeliği zırh`,slot:`body`,tier:3,armor:32,heavy:!0,value:240,look:{vest:9419981,pauldron:`spiky`,metal:12116720,rune:10479359}}].map(e=>[e.id,e])),Np={weapon:`iron_sword`,shield:`wood_shield`,head:`fur_cap`,body:`leather_armor`},Pp={draugr:[[`rusty_sword`,3],[`rusty_axe`,3],[`rusty_helm`,2],[`iron_axe`,1],[`iron_mace`,1],[`iron_dagger`,1],[`chain_armor`,.5]],ruin:[[`iron_mace`,1],[`steel_dagger`,1],[`wolf_hood`,1],[`iron_shield`,1],[`steel_axe`,.6]],bandit:[[`iron_axe`,2],[`iron_sword`,2],[`iron_shield`,1],[`iron_helm`,1],[`chain_armor`,.6],[`steel_dagger`,.5],[`hunt_bow`,.6]],fort:[[`steel_axe`,1],[`steel_sword`,1],[`steel_helm`,1],[`long_bow`,1],[`steel_greatsword`,.6]],troll:[[`frost_mace`,1],[`frost_shield`,1],[`frost_helm`,1],[`frost_armor`,1],[`frost_dagger`,1],[`frost_sword`,1]]},Fp=[`hunt_bow`,`long_bow`,`iron_axe`,`iron_mace`,`iron_dagger`,`iron_greataxe`,`iron_shield`,`iron_helm`,`chain_armor`,`wolf_hood`,`wolf_armor`,`steel_sword`,`steel_axe`,`steel_mace`,`steel_greatsword`,`steel_shield`,`steel_helm`,`steel_armor`],Ip={iron:`Demir külçesi`,frost:`Ayaz kristali`,pelts:`Kurt postu`,herbs:`Kar çiçeği`,hide:`Geyik postu`,meat:`Çiğ et`},Lp=(e,t,n=0,r=0)=>({id:e,mats:t,gold:n,smith:r}),Rp=[{id:`arrows`,mats:{iron:1},arrows:12},Lp(`leather_armor`,{hide:2}),Lp(`wolf_hood`,{pelts:3}),Lp(`wolf_armor`,{pelts:4,iron:1}),Lp(`hunt_bow`,{hide:1},10),Lp(`iron_sword`,{iron:2}),Lp(`iron_axe`,{iron:2}),Lp(`iron_mace`,{iron:3}),Lp(`iron_dagger`,{iron:1}),Lp(`iron_greataxe`,{iron:4}),Lp(`iron_shield`,{iron:3}),Lp(`iron_helm`,{iron:2}),Lp(`chain_armor`,{iron:5}),Lp(`long_bow`,{hide:2,iron:1},20,18),Lp(`steel_sword`,{iron:4},25,18),Lp(`steel_axe`,{iron:4},25,18),Lp(`steel_mace`,{iron:5},25,18),Lp(`steel_dagger`,{iron:3},15,18),Lp(`steel_greatsword`,{iron:6},35,18),Lp(`steel_shield`,{iron:5},25,18),Lp(`steel_helm`,{iron:4},25,18),Lp(`steel_armor`,{iron:8},40,18),Lp(`frost_sword`,{iron:3,frost:2},0,20),Lp(`frost_dagger`,{iron:2,frost:1},0,20),Lp(`frost_mace`,{iron:3,frost:2},0,20),Lp(`frost_shield`,{iron:3,frost:2},0,20),Lp(`frost_helm`,{iron:3,frost:2},0,20),Lp(`frost_armor`,{iron:5,frost:3},0,20),Lp(`frost_bow`,{frost:2,pelts:1},0,20)],zp=e=>4+e*3,Bp=e=>e>=35?2:+(e>=25),Vp={frost:{name:`Ayaz`,color:10479359,css:`#9fe6ff`,desc:`+3 soğuk hasar; vurulan düşman 2,5 saniye yavaşlar.`,mats:{frost:2},gold:30},fire:{name:`Alev`,color:16747068,css:`#ff9a50`,desc:`Vurulan düşman 3 saniye yanar (vuruşun %45'i kadar ek hasar).`,mats:{iron:1},gold:60},drain:{name:`Can emme`,color:14698074,css:`#ef6b7c`,desc:`Verdiğin hasarın %20'si kadar canın yenilenir.`,mats:{herbs:3},gold:40}},Hp={dur:2.5,slow:.55,dmg:3},Up={share:.45,dur:3},Wp=.2,Gp=[2,3],Kp={n:10,price:8},qp={deer:{meat:2,hide:1},hare:{meat:1}},Jp={fur_cap:1,wolf_hood:2,wolf_armor:2,guard_armor:1},Yp={dur:12,hps:3},Xp={onehand:`Silah`,block:`Blok`,sneak:`Gizlilik`,rune:`Rün Büyüsü`,lock:`Kilit Açma`,archery:`Okçuluk`,smith:`Demircilik`},Zp={wolves:{title:`Kurt sürüsü`,need:3,reward:30,text:`Batı ormanında bir sürü ağıllara diş geçiriyor. Üç kurt avlayana otuz altın. — Köy meclisi`},fish:{title:`Balıkçının siparişi`,need:3,reward:30,text:`Kış erzakı için taze balık lazım. Üç balık getirene otuz altın. Tahtaya teslim et. — Bjorn`},herbs:{title:`Şifacının derdi`,need:4,reward:25,text:`Kışın ortasında öksürük yayıldı. Dört kar çiçeği getirene yirmi beş altın. Tahtaya teslim et. — Sigrun`},bandits:{title:`Haydut avı`,need:4,reward:50,text:`Kızıl Kalkan çetesinden geriye kalanlar doğu yolunda pusu kuruyor. Dört haydudu yola çıkamaz hâle getirene elli altın. — Astrid`},draugr:{title:`Höyük temizliği`,need:3,reward:45,text:`Höyükten gelen sesler durmuyor. Üç draugru toprağa geri gönderene kırk beş altın. — Köy meclisi`}},Qp={ringa:{name:`Ringa`,v:6,w:60},alabalik:{name:`Alabalık`,v:11,w:32},turna:{name:`Buz turnası`,v:28,w:8}},$p=e=>5+(e-15)*2;function em(e,t){let n=Z.skills[e];for(n.xp+=t;n.xp>=$p(n.lvl);)n.xp-=$p(n.lvl),n.lvl++,X(`${Xp[e]} ${n.lvl}`,`skill`),z(`skill`),Z.charXp++,Z.charXp>=3&&(Z.charXp-=3,Z.pendingLevels++,z(`level`),eS(`SEVİYE ATLADIN`))}function tm(e){Z.pendingLevels<=0||(Z.pendingLevels--,Z.charLvl++,Z.perkPts=(Z.perkPts||0)+1,e===`hp`?Z.maxHp+=15:e===`st`?Z.maxSt+=15:(Z.runeMult+=.15,Z.runeCdMax=Math.max(8,Z.runeCdMax-1.5)),Z.hp=Z.maxHp,Z.st=Z.maxSt,X(`Seviye ${Z.charLvl}`,`skill`),X(`Özellik puanı kazandın · Karakter sekmesi`,`skill`))}var nm=(e,t)=>t.map(([t,n,r],i)=>({id:t,skill:e,name:n,desc:r,req:[20,25,30][i]})),rm=[...nm(`onehand`,[[`keen`,`Keskin kenar`,`Silah hasarın %15 artar.`],[`combo`,`Kombo ustası`,`Kombonun üçüncü darbesi %35 daha güçlü vurur ve %25 daha az güç harcar.`],[`crusher`,`Sarsıcı güç`,`Güçlü saldırın trol, reis ve höyük kralı gibi iri düşmanları da sendeletir.`]]),...nm(`block`,[[`wall`,`Kalkan duvarı`,`Blok yaparken %10 daha fazla hasar durdurursun.`],[`riposte`,`Karşı darbe`,`Başarılı bir bloktan sonraki 1 saniye içinde vurduğun darbe ×1,5 hasar verir ve düşmanı sendeletir.`],[`deflect`,`Ok savuşturma`,`Blok yaparken oklardan hiç hasar almazsın.`]]),...nm(`sneak`,[[`shadow`,`Gölge adım`,`Çömelerek yürürken çıkardığın ses yarıya iner.`],[`assassin`,`Suikastçı`,`Gizli yakın dövüş saldırıların ayrıca ×1,5 hasar verir.`],[`silent`,`Sessiz yuvarlanma`,`Çömelmişken yuvarlanmak ses çıkarmaz.`]]),...nm(`archery`,[[`steady`,`Sabit el`,`Yayı %25 daha hızlı gerersin.`],[`breath`,`Nefes tut`,`Yay tam gerilmişken zaman yarı hızda akar (en fazla 3 saniye).`],[`hunter`,`Avcı gözü`,`Okların %25 daha fazla hasar verir.`]]),...nm(`rune`,[[`echo`,`Rün yankısı`,`Rün gücünün bekleme süresi %20 kısalır.`],[`wave`,`Geniş dalga`,`Rün gücü %30 daha geniş bir alana yayılır.`],[`frostwave`,`Ayaz dalgası`,`Rün gücünün vurduğu düşmanlar 3 saniye yavaşlar.`]]),...nm(`lock`,[[`touch`,`Hassas parmak`,`Kilitlerin açılma aralığı genişler.`],[`sturdy`,`Sağlam maymuncuk`,`Maymuncukların iki kat daha geç kırılır.`],[`treasure`,`Hazine avcısı`,`Sandık ve küplerden %50 daha fazla altın çıkar.`]]),...nm(`smith`,[[`thrifty`,`Tutumlu ocak`,`Dövmede bir demir külçesi daha az harcarsın (en az bir).`],[`master`,`Usta iyileştirme`,`Eşyalar bir kez daha (+4'e kadar) iyileştirilebilir.`],[`haggle`,`Pazarlık`,`Bjorn'den %15 ucuza alır, ona %15 pahalıya satarsın.`]])],im=e=>!!Z.perks?.includes(e),am=e=>rm.find(t=>t.id===e);function om(e){if(im(e.id))return{st:`taken`};let t=rm.filter(t=>t.skill===e.skill),n=t[t.indexOf(e)-1];return n&&!im(n.id)?{st:`locked`,reason:`Önce: ${n.name}`}:Z.skills[e.skill].lvl<e.req?{st:`locked`,reason:`Yetenek seviyesi ${e.req} gerekir`}:(Z.perkPts||0)<=0?{st:`locked`,reason:`Özellik puanın yok`}:{st:`open`}}function sm(e){let t=am(e);return!t||om(t).st!==`open`?!1:(Z.perks.push(e),Z.perkPts--,z(`level`),!0)}function cm(){Array.isArray(Z.perks)||(Z.perks=[]),typeof Z.perkPts!=`number`&&(Z.perkPts=Math.max(0,Z.charLvl-1-Z.perks.length))}var lm=[`weapon`,`shield`,`head`,`body`,`bow`],um=e=>Mp[e.id],dm=e=>e==null?null:Z.inv.items.find(t=>t.uid===e)||null,fm=e=>dm(Z.inv.eq[e]),pm=e=>Z.inv.eq[um(e).slot]===e.uid,mm=e=>Z.inv.items.some(t=>t.id===e);function hm(e){let t=um(e),n=e.blessed?`Kutsanmış `+t.name.toLocaleLowerCase(`tr-TR`):t.name;return e.up?`${n} +${e.up}`:n}var gm=e=>(um(e).dmg||0)+e.up*Ap[um(e).slot]+(e.blessed?4:0),_m=e=>(um(e).armor||0)+e.up*Ap[um(e).slot],vm=e=>Math.max(1,Math.round(um(e).value*.4*(1+e.up*.15)*(im(`haggle`)?1.15:1))),ym=e=>Math.round(e.value*(im(`haggle`)?.85:1)),bm=()=>3+ +!!im(`master`),xm=e=>Math.round(20+um(e).value*.3+e.up*20),Sm=()=>fm(`weapon`),Cm=()=>fm(`bow`),wm=()=>{let e=Cm();return e?gm(e)*(1+(Z.skills.archery.lvl-15)*.04)*(im(`hunter`)?1.25:1):0},Tm=()=>{let e=Sm();return e&&um(e).cls||`sword`},Em=()=>!!wp[Tm()].twoHand,Dm=()=>{let e=Sm();return(e?gm(e):4)*(1+(Z.skills.onehand.lvl-15)*.04)*(im(`keen`)?1.15:1)},Om=()=>[`shield`,`head`,`body`].reduce((e,t)=>{let n=fm(t);return e+(n?_m(n):0)},0),km=(e=Om())=>Math.min(Dp,e/(e+70));function Am(){let e=fm(`shield`),t=e?um(e).block:Em()?kp:Op;return Math.min(.9,t+(Z.skills.block.lvl-15)*.015+(im(`wall`)?.1:0))}var jm=()=>[`head`,`body`].reduce((e,t)=>{let n=fm(t);return e+(n&&um(n).heavy?t===`body`?2:1:0)},0),Mm=()=>18+jm()*3,Nm=new Map;function Pm(e){let t=Tm(),n=t+e,r=Nm.get(n);if(!r){let i=wp[t],a=xp[e];r={...a,W:a.W/i.speed,S:a.S/i.speed,R:a.R/i.speed,cost:a.cost*i.cost,reach:a.reach*i.reach,arc:a.arc*i.arc,knock:a.knock*i.knock,lunge:a.lunge*Math.min(1,i.reach),cls:t},Nm.set(n,r)}return r}function Fm(e,t={}){if(!Mp[e])return null;let n={uid:Z.inv.uid++,id:e,up:t.up||0};return Z.inv.items.push(n),t.quiet||(X(`Ganimet: ${um(n).name}`,`loot t`+um(n).tier),z(`pickup`)),n}function Im(e){let t=um(e);return t.slot===`shield`&&Em()?!1:(Z.inv.eq[t.slot]=e.uid,t.slot===`weapon`&&wp[t.cls].twoHand&&Z.inv.eq.shield!=null&&(Z.inv.eq.shield=null,X(`Kalkan çıkarıldı: iki elli silah`)),z(t.slot===`weapon`?`swing`:`block`),MS(),!0)}function Lm(e){e!==`weapon`&&(Z.inv.eq[e]=null,z(`ui`),MS())}function Rm(e){return!pm(e)&&(Z.inv.items.splice(Z.inv.items.indexOf(e),1),!0)}function zm(e){let t=vm(e);return Rm(e)?(Z.inv.gold+=t,z(`gold`),t):0}function Bm(e){let t=Mp[e];return!t||Z.inv.gold<ym(t)?null:(Z.inv.gold-=ym(t),z(`gold`),Fm(e,{quiet:!0}))}function Vm(e){let t=xm(e);return e.up>=bm()||Z.inv.gold<t?!1:(Z.inv.gold-=t,e.up++,z(`block`),!0)}var Hm=()=>Fp.filter(e=>!mm(e));function Um(e,t=!1){let n=Pp[e];if(t){let e=n.filter(([e])=>!mm(e));e.length&&(n=e)}let r=Math.random()*n.reduce((e,[,t])=>e+t,0);for(let[e,t]of n)if(r-=t,r<=0)return e;return n[n.length-1][0]}function Wm(e){e===`draugr`&&Math.random()<.35&&Fm(Um(`draugr`)),e===`draugr`&&Math.random()<.4&&Xm(`iron`,1),(e===`bandit`||e===`archer`)&&Math.random()<.3&&Fm(Um(`bandit`)),e===`troll`&&(Fm(Um(`troll`,!0)),Xm(`frost`,2)),e===`boss`&&!mm(`ata_greataxe`)&&Fm(`ata_greataxe`)}function Gm(e){e.items=[],e.uid=1,e.eq={weapon:null,shield:null,head:null,body:null,bow:null};for(let t of lm){if(!Np[t])continue;let n={uid:e.uid++,id:Np[t],up:0};e.items.push(n),e.eq[t]=n.uid}}function Km(e){for(let t of[`iron`,`frost`,`arrows`,`meat`,`cooked`,`hide`])e[t]??=0;if(Array.isArray(e.items)){e.eq={weapon:null,shield:null,head:null,body:null,bow:null,...e.eq};return}let t=e.sword||`Demir kılıç`;Gm(e);let n=e.items.find(t=>t.uid===e.eq.weapon);n.id=/ata/i.test(t)?`ata_sword`:`iron_sword`,n.up=Math.min(3,e.sharpen||0),n.blessed=/^kutsanmış/i.test(t),delete e.weaponBonus,delete e.sharpen,delete e.sword}var qm={body:8010542,skin:14268572,dark:4931640,leather:5125670,metal:10726581,cloak:6114107,cloakBack:!0,beard:9067059,beardBraid:!0,hair:9067059,longHair:!0,skirt:`tunic`,trim:14202986,buckle:!0,wraps:11904394,gloves:!0};function Jm(){let e={...qm},t=Sm(),n=fm(`shield`),r=fm(`head`),i=fm(`body`);if(t){let n=um(t).look;e.weapon=n.model,e.weaponTint={blade:n.blade,guard:n.guard,glow:t.rune?Vp[t.rune].color:n.glow},e.twoHand=Em()}let a=Cm();if(a&&(e.bow={limb:um(a).look.blade,glow:a.rune?Vp[a.rune].color:um(a).look.glow}),n&&(e.shield=um(n).look.face,e.shieldRim=um(n).look.rim),r){let t=um(r).look;e.helmet=!0,e.helmStyle=t.helm,e.helmetColor=t.color,e.helmFur=t.fur}if(i){let t=um(i).look;e.vest=t.vest,t.pauldron&&(e.pauldron=t.pauldron,e.metal=t.metal),t.fur?e.fur=t.fur:um(i).heavy||(e.fur=14077373),t.rune&&(e.chestRune=t.rune)}else e.fur=14077373;return e}var Ym=e=>Z.inv[e];function Xm(e,t){Z.inv[e]=Ym(e)+t,X(`${Ip[e]} ×${t}`,`loot t1`),z(`pickup`)}var Zm=(e,t=0)=>Z.inv.gold>=t&&Object.entries(e).every(([e,t])=>Ym(e)>=t);function Qm(e,t=0){Z.inv.gold-=t;for(let[t,n]of Object.entries(e))Z.inv[t]-=n}var $m=()=>Z.skills.smith.lvl;function eh(e){let t={...e.mats};return im(`thrifty`)&&t.iron>1&&t.iron--,t}function th(e){return e.smith&&$m()<e.smith?`Demircilik ${e.smith} gerekir`:Zm(eh(e),e.gold)?``:`Malzemen yetmiyor`}function nh(e){if(th(e))return null;if(Qm(eh(e),e.gold),z(`block`),e.arrows)return Z.inv.arrows+=e.arrows,em(`smith`,1),null;let t=Fm(e.id,{quiet:!0,up:Math.min(3,Bp($m()))});return em(`smith`,zp(um(t).tier)),t}var rh=e=>e.up+1;function ih(e){return e.up>=bm()||Z.inv.iron<rh(e)?!1:(Z.inv.iron-=rh(e),e.up++,z(`block`),em(`smith`,2),pm(e)&&MS(),!0)}var ah=e=>um(e).slot===`weapon`||um(e).slot===`bow`;function oh(e,t){let n=Vp[t];return!ah(e)||e.rune===t||!Zm(n.mats,n.gold)?!1:(Qm(n.mats,n.gold),e.rune=t,z(`rune`),em(`rune`,3),pm(e)&&MS(),!0)}var sh=e=>(e?Cm():Sm())?.rune||null,ch={clear:0,snow:1,storm:2},lh={clear:`Açık`,snow:`Kar`,storm:`Kar fırtınası`},uh={k:1,next:200,cold:!1},dh=new j(12897496),fh=new j(3818066),ph=new j,mh=()=>Q.zone===`world`?Iu(uh.k-1,0,1):0;function hh(e,t=!1){Q.weather=e,uh.next=e===`storm`?90+Math.random()*60:150+Math.random()*150,t&&(uh.k=ch[e])}function gh(){let e=Math.random(),t=Q.weather;hh(t===`clear`?e<.7?`snow`:`storm`:t===`snow`?e<.45?`clear`:e<.75?`storm`:`snow`:e<.7?`snow`:`clear`)}var _h=()=>[`head`,`body`].reduce((e,t)=>{let n=fm(t);return e+(n&&Jp[n.id]||0)},0),vh=()=>_h()>=2;function yh(e,t){uh.next-=e,uh.next<=0&&gh();let n=ch[Q.weather]??1;uh.k+=Iu(n-uh.k,-e/18,e/18);let r=uh.k,i=Iu(r-1,0,1),a=Iu(r,0,1);if(rp.setDrawRange(0,Math.floor(ep*(.75*a+.25*i))),ip.material.size=.16+.07*i,R.wind&&R.wind.gain.setTargetAtTime(.025+.025*a+.09*i,R.ctx.currentTime,1.5),Q.zone!==`world`){uh.cold=!1;return}let o=Sd.fog;o.density*=.82+.18*a+1.6*i,o.color.lerp(ph.copy(dh).lerp(fh,t),.55*i),Dd.intensity*=1-.6*i,Ed.intensity*=1-.18*i,uh.cold=i>.5&&Math.hypot(Z.pos.x,Z.pos.z)>22&&!vh()&&!Hf.some(e=>e.zone===`world`&&e.obj.visible&&e.obj.getWorldPosition(bh).distanceTo(Z.pos)<7)}var bh=new A,xh={world:[],dungeon:[]},Sh=(e,t,n,r)=>xh[e].push({x:t,z:n,r}),Ch=(e,t,n,r,i)=>xh[e].push({x0:t,x1:n,z0:r,z1:i});function wh(e,t,n,r,i,a){let o=Iu(e.x,n,r),s=Iu(e.z,i,a),c=e.x-o,l=e.z-s,u=c*c+l*l;if(u>=t*t)return;if(u<1e-8){let o=e.x-n,s=r-e.x,c=e.z-i,l=a-e.z,u=Math.min(o,s,c,l);u===o?e.x=n-t:u===s?e.x=r+t:e.z=u===c?i-t:a+t;return}let d=Math.sqrt(u);e.x=o+c/d*t,e.z=s+l/d*t}function Th(e,t,n){for(let r of xh[n])if(r.r!==void 0){let n=e.x-r.x,i=e.z-r.z,a=t+r.r;if(Math.abs(n)>a||Math.abs(i)>a)continue;let o=Math.hypot(n,i);o<a&&o>1e-6&&(e.x=r.x+n/o*a,e.z=r.z+i/o*a)}else e.x>r.x0-t&&e.x<r.x1+t&&e.z>r.z0-t&&e.z<r.z1+t&&wh(e,t,r.x0,r.x1,r.z0,r.z1)}var Eh={fehu:[[.35,0,.35,1],[.35,.35,.75,.1],[.35,.6,.75,.35]],thurisaz:[[.35,0,.35,1],[.35,.3,.7,.5],[.7,.5,.35,.7]],algiz:[[.5,0,.5,1],[.5,.4,.2,.05],[.5,.4,.8,.05]],raido:[[.3,0,.3,1],[.3,0,.7,.25],[.7,.25,.3,.5],[.3,.5,.72,1]],othala:[[.5,0,.8,.35],[.8,.35,.2,.85],[.5,0,.2,.35],[.2,.35,.8,.85]],ansuz:[[.35,0,.35,1],[.35,.05,.7,.3],[.35,.35,.7,.6]],tiwaz:[[.5,0,.5,1],[.5,0,.2,.3],[.5,0,.8,.3]],sowilo:[[.65,0,.3,.4],[.3,.4,.7,.6],[.7,.6,.35,1]]},Dh;function Oh(){Dh=Object.values(Eh)}function kh(e,t,n,r,i,a,o,s){e.strokeStyle=o,e.lineWidth=s,e.lineCap=`round`,e.beginPath();for(let o of t)e.moveTo(n+o[0]*i,r+o[1]*a),e.lineTo(n+o[2]*i,r+o[3]*a);e.stroke()}function Ah(e){let t=(t,n,r)=>{let i=document.createElement(`canvas`);i.width=128,i.height=256;let a=i.getContext(`2d`);if(a.fillStyle=t,a.fillRect(0,0,128,256),!r){let t=Hu(e.length*13);for(let e=0;e<90;e++)a.fillStyle=`rgba(0,0,0,${t()*.18})`,a.fillRect(t()*128,t()*256,3+t()*8,2+t()*5)}e.forEach((e,t)=>{r&&(a.shadowColor=`#fff`,a.shadowBlur=10),kh(a,Eh[e],34,22+t*76,60,62,n,r?7:9)});let o=new _c(i);return o.colorSpace=We,o};return{map:t(`#7a7f87`,`#2e3238`,!1),emap:t(`#000`,`#fff`,!0)}}function jh(e,t){let n=e.index?e.toNonIndexed():e;n.computeVertexNormals();let r=new j(t),i=n.attributes.position.count,a=new Float32Array(i*3);for(let e=0;e<i;e++)a[e*3]=r.r,a[e*3+1]=r.g,a[e*3+2]=r.b;return n.setAttribute(`color`,new pr(a,3)),n}function Mh(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=0;for(let t of e)n.set(t.attributes.position.array,a*3),r.set(t.attributes.normal.array,a*3),i.set(t.attributes.color.array,a*3),a+=t.attributes.position.count;let o=new wr;return o.setAttribute(`position`,new pr(n,3)),o.setAttribute(`normal`,new pr(r,3)),o.setAttribute(`color`,new pr(i,3)),o}function Nh(e,t){let n=[jh(new Xc(.16,.24,1.4,5).translate(0,.7,0),4863270)];for(let[r,i,a]of[[1,2.4,1.7],[2.2,2.1,1.3],[3.3,1.8,.9]]){n.push(jh(new Zc(a,i,7).translate(0,r+i/2,0),e));let o=i*t;n.push(jh(new Zc(a*(t+.06),o,7).translate(0,r+i-o/2+.03,0),15660024))}return Mh(n)}function Ph(e,t,n,r,i,a){let o=new P;o.position.set(e,U(e,t),t),o.rotation.y=a,V.add(o),H(n+.3,1,r+.3,G.stone,0,0,0,o),H(n,i,r,G.wood,0,i/2,0,o);let s=.62,c=n/2+.5,l=c/Math.cos(s);for(let e of[-1,1]){let t=H(l,.3,r+1,G.roof,e*c/2,i+Math.tan(s)*c/2,0,o);t.rotation.z=-e*s;let n=H(l,.14,r+1,G.snow,e*c/2+e*Math.sin(s)*.2,i+Math.tan(s)*c/2+Math.cos(s)*.2,0,o);n.rotation.z=-e*s}let u=new el;u.moveTo(-n/2,0),u.lineTo(n/2,0),u.lineTo(0,n/2*Math.tan(s)),u.closePath();let d=new Hl(u),f=If.woodD.clone();f.repeat.set(.6,.6),f.needsUpdate=!0;let p=Rd(16777215,{side:2,map:f});for(let e of[-1,1]){let t=new M(d,p);t.position.set(0,i,e*r/2),o.add(t);for(let t of[-1,1]){let n=H(.16,1.7,.12,G.woodD,t*.34,i+Math.tan(s)*c+.3,e*(r/2+.5),o);n.rotation.z=t*.6}}H(1.2,2,.15,G.woodD,0,1,r/2+.05,o);let m=Bd(16757340,2.4);for(let e of[-1,1])for(let t of[-1,1]){let i=new M(new Rr(.06,.45,.6),m);i.position.set(e*(n/2+.02),1.7,t*r/4),o.add(i),Bf(o,e*(n/2+.3),1.7,t*r/4,1.5,16757340,.4)}Vf.push({x:e,y:o.position.y+i+Math.tan(s)*c+.3,z:t});let h=Math.abs(Math.sin(a))>.5,g=h?r/2:n/2,_=h?n/2:r/2;Ch(`world`,e-g-.15,e+g+.15,t-_-.15,t+_+.15)}var Fh=[];function Ih(e,t,n,r,i=1,a=`world`){let o=new P;o.position.set(t,n,r),o.scale.setScalar(i),e.add(o);for(let e=0;e<4;e++){let t=H(.16,.16,1.1,G.woodD,0,.1,0,o);t.rotation.y=e/4*Math.PI}let s=new M(new Zc(.42,1.2,7),Bd(16738836,2.4));s.position.y=.65,o.add(s);let c=new M(new Zc(.24,.8,7),Bd(16765562,3.4));c.position.y=.5,o.add(c);let l=Bf(o,0,.75,0,3.8,16751168,.5);return Fh.push({f1:s,f2:c,g:o,gl:l,base:3.8,seed:Math.random()*10}),Hf.push({obj:o,zone:a,scale:i}),o}function Lh(e,t,n,r,i=V,a=`world`,o=null){let s=Ah(r),c=new Jl({map:s.map,emissive:7329993,emissiveMap:s.emap,emissiveIntensity:.9}),l=new M(new Rr(.9,2.6,.45),[G.rstone,G.rstone,G.rstone,G.rstone,c,G.rstone]);return l.position.set(e,(o??U(e,t))+1.2,t),l.rotation.y=n,l.castShadow=_d,i.add(l),Bf(i,e+Math.sin(n)*.32,(o??U(e,t))+1.25,t+Math.cos(n)*.32,2.4,7329993,.22),Sh(a,e,t,.65),Rh.push(c),l}var Rh=[];function zh(){{let e=Hu(42),t=[],n=[];for(let r=0;r<1400&&t.length+n.length<360;r++){let r=(e()*2-1)*120,i=(e()*2-1)*120;if(Math.hypot(r,i)<27||Math.hypot(r-Ud.x,i-Ud.z)<17||wf(r,i)<4.5||Math.hypot(r-Wd.x,i-Wd.z)<10||Sf(r,i)||af.some(e=>Math.hypot(r-e[0],i-e[1])<2.5))continue;let a=.5+.5*Math.sin(r*.07+1)*Math.cos(i*.06-2);e()>a*.85+.2||(e()<.55?t:n).push({x:r,z:i,s:.8+e()*.85,ry:e()*I})}let r=new Jl({vertexColors:!0,flatShading:!0}),i=(e,t)=>{let n=new $s(e,r,t.length),i=new Hn;t.forEach((e,t)=>{i.position.set(e.x,U(e.x,e.z)-.15,e.z),i.rotation.set(0,e.ry,0),i.scale.setScalar(e.s),i.updateMatrix(),n.setMatrixAt(t,i.matrix),Math.abs(e.x)<100&&Math.abs(e.z)<100&&Sh(`world`,e.x,e.z,.32*e.s)}),n.castShadow=_d,n.receiveShadow=_d,n.frustumCulled=!1,V.add(n)};i(Nh(2836536,.42),t),i(Nh(3626051,.62),n);let a=new $c(1,0),o=[];{let e=a.attributes.normal,t=new Float32Array(e.count*3),n=new j(15594231),r=new j(6777973);for(let i=0;i<e.count;i++){let a=e.getY(i)>.5?n:r;t[i*3]=a.r,t[i*3+1]=a.g,t[i*3+2]=a.b}a.setAttribute(`color`,new pr(t,3))}for(let t=0;t<300&&o.length<55;t++){let t=(e()*2-1)*110,n=(e()*2-1)*110;Math.hypot(t,n)<24||wf(t,n)<3.5||Math.hypot(t-Ud.x,n-Ud.z)<15||Sf(t,n,-2)||o.push({x:t,z:n,sx:.8+e()*1.6,sy:.5+e()*.9,sz:.8+e()*1.4,ry:e()*I})}let s=new $s(a,new Jl({vertexColors:!0,flatShading:!0}),o.length),c=new Hn;o.forEach((e,t)=>{c.position.set(e.x,U(e.x,e.z)+e.sy*.2,e.z),c.rotation.set(0,e.ry,0),c.scale.set(e.sx,e.sy,e.sz),c.updateMatrix(),s.setMatrixAt(t,c.matrix),Math.abs(e.x)<100&&Math.abs(e.z)<100&&Sh(`world`,e.x,e.z,Math.min(e.sx,e.sz)*.85)}),s.castShadow=_d,s.receiveShadow=_d,s.frustumCulled=!1,V.add(s)}Ph(-14,-2,6,12,2.8,0),Ph(0,15,6,12,2.8,Math.PI/2),Ph(14,10,6,10,2.6,0),Ph(-4,-16,6,10,2.6,Math.PI/2),Ih(V,0,U(0,0),0);for(let e=0;e<9;e++){let t=e/9*I,n=new M(new $c(.25,0),G.rstone);n.position.set(Math.cos(t)*.95,.1,Math.sin(t)*.95),V.add(n)}Sh(`world`,0,0,1.1);{let e=new P;e.position.set(-8.8,0,5.6),V.add(e);let t=new M(new Wl(.55,12,8,0,I,Math.PI/2.6,Math.PI/1.7),Rd(2237222,{side:2}));t.position.y=.75,t.rotation.x=Math.PI,e.add(t);let n=new M(new Yc(.46,16),zd(8377242));n.rotation.x=-Math.PI/2,n.position.y=.95,e.add(n),Ih(e,0,0,0,.55),Sh(`world`,-8.8,5.6,.7);let r=new P;r.position.set(10.9,0,1),V.add(r),H(.5,.6,.5,G.woodD,0,.3,0,r),H(.35,.25,.9,G.iron,0,.72,0,r),Sh(`world`,10.9,1,.5);let i=new P;i.position.set(13.8,0,2.4),V.add(i),H(1.4,1,1.2,G.stone,0,.5,0,i);let a=new M(new Rr(1,.1,.8),zd(16738842));a.position.y=1.02,i.add(a),Ch(`world`,13.1,14.5,1.8,3);let o=new P;o.position.set(5.6,0,-3.4),o.rotation.y=-.9,V.add(o),H(.14,2.2,.14,G.woodD,-.8,1.1,0,o),H(.14,2.2,.14,G.woodD,.8,1.1,0,o),H(1.9,1.1,.1,G.wood,0,1.5,0,o);for(let[e,t]of[[-.45,1.6],[.2,1.45],[.55,1.75]]){let n=new M(new fi(.34,.42),Rd(15260864));n.position.set(e,t,.06),o.add(n)}Sh(`world`,5.6,-3.4,.9)}Lh(21,-10,-.9,[`fehu`,`raido`,`algiz`]),Lh(46,-41,-.8,[`thurisaz`,`ansuz`,`tiwaz`]);for(let e=0;e<3;e++){let t=-.6+e*.75;Lh(Wd.x+Math.sin(t)*5,Wd.z+Math.cos(t)*5,t+Math.PI,[[`othala`,`sowilo`,`fehu`],[`algiz`,`tiwaz`,`raido`],[`ansuz`,`thurisaz`,`othala`]][e])}for(let[e,t,n]of[[-4,-2,1.1],[3.5,-3,.7],[-2,-5,.5]])H(.8,n,.8,G.rstone,Wd.x+e,U(Wd.x+e,Wd.z+t)+n/2,Wd.z+t,V),Sh(`world`,Wd.x+e,Wd.z+t,.6)}function Bh(){{let e=new M(new Wl(11,20,9,0,I,0,Math.PI/2),Rd(14279146,{flatShading:!0}));e.scale.y=.5,e.position.set(Ud.x,-.3,Ud.z),e.receiveShadow=_d,V.add(e);let t=new P;t.position.set(sf.x,0,sf.z),t.rotation.y=Math.atan2(of.x,of.z),V.add(t),H(.7,2.8,.8,G.rstone,-1.35,1.4,0,t),H(.7,2.8,.8,G.rstone,1.35,1.4,0,t),H(3.6,.6,1,G.rstone,0,3,0,t),H(2.1,2.6,.2,zd(329224),0,1.3,-.25,t),H(3.9,.3,1.2,G.snow,0,3.4,0,t),Sh(`world`,Ud.x,Ud.z,9.6),Lh(sf.x+3.2,sf.z+2.6,Math.atan2(of.x,of.z),[`othala`,`algiz`,`thurisaz`]),Lh(sf.x-2.6,sf.z-3.2,Math.atan2(of.x,of.z),[`tiwaz`,`sowilo`,`raido`])}}var Vh={minX:-12,minZ:-2,cols:34,rows:27},Hh;function Uh(e,t,n,r,i=1){for(let a=(e-Vh.minX)/2;a<(t-Vh.minX)/2;a++)for(let e=(n-Vh.minZ)/2;e<(r-Vh.minZ)/2;e++)Hh[e*Vh.cols+a]=i}var Wh={g1:{cells:[[9,3],[9,4]],open:!1,mesh:null,t:1},g2:{cells:[[26,12],[27,12]],open:!1,mesh:null,t:1}},Gh,Kh=(e,t)=>e>=0&&t>=0&&e<Vh.cols&&t<Vh.rows,qh=(e,t)=>Kh(e,t)?Hh[t*Vh.cols+e]:0;function Jh(e,t){let n=qh(e,t);return n===1||n===2&&Gh.get(e+`,`+t).open}var Yh=e=>Math.floor((e-B-Vh.minX)/2),Xh=e=>Math.floor((e-Vh.minZ)/2),Zh=(e,t)=>({x:B+Vh.minX+e*2+1,z:Vh.minZ+t*2+1});function Qh(e,t){let n=Yh(e.x-t),r=Yh(e.x+t),i=Xh(e.z-t),a=Xh(e.z+t);for(let o=n;o<=r;o++)for(let n=i;n<=a;n++)if(!Jh(o,n)){let r=B+Vh.minX+o*2,i=Vh.minZ+n*2;wh(e,t,r,r+2,i,i+2)}}function $h(e,t,n,r){let i=Math.hypot(n-e,r-t),a=Math.ceil(i/.5);for(let i=1;i<a;i++){let o=i/a;if(qh(Yh(e+(n-e)*o),Xh(t+(r-t)*o))===0)return!1}return!0}var eg=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],tg,ng=-1,rg=!0;function ig(){let e=Yh(Z.pos.x),t=Xh(Z.pos.z),n=t*Vh.cols+e;if(n===ng&&!rg||(ng=n,rg=!1,tg.fill(-1),!Jh(e,t)))return;let r=[n];tg[n]=0;let i=0;for(;i<r.length;){let e=r[i++],t=e%Vh.cols,n=e/Vh.cols|0,a=tg[e];for(let[e,i]of eg){let o=t+e,s=n+i;if(!Jh(o,s)||e&&i&&(!Jh(t+e,n)||!Jh(t,n+i)))continue;let c=s*Vh.cols+o;tg[c]===-1&&(tg[c]=a+1,r.push(c))}}}function ag(e,t){let n=Yh(e),r=Xh(t);if(!Kh(n,r))return null;let i=tg[r*Vh.cols+n],a=null,o=i<0?1e9:i;for(let[e,t]of eg){let i=n+e,s=r+t;if(!Jh(i,s)||e&&t&&(!Jh(n+e,r)||!Jh(n,r+t)))continue;let c=tg[s*Vh.cols+i];c>=0&&c<o&&(o=c,a=[i,s])}return a?Zh(a[0],a[1]):null}var og=[],sg=null;function cg(e){if(!sg)return;let t=sg.geometry.attributes.position.array,n=sg.userData.n;for(let r=0;r<n;r++)t[r*3]+=Math.sin(Q.time*.3+r)*.08*e,t[r*3+1]+=Math.sin(Q.time*.5+r*1.7)*.05*e,t[r*3+2]+=Math.cos(Q.time*.27+r*.7)*.08*e;sg.geometry.attributes.position.needsUpdate=!0}function lg(e,t,n){let r=Wh[e];r.open=t,r.t=+!!n,rg=!0,n?r.mesh.position.y=t?3.1:0:z(`gate`)}function ug(e){return rg=e,e}function dg(){Hh=new Uint8Array(Vh.cols*Vh.rows),Uh(-6,6,0,12),Uh(-2,2,12,30),Uh(-10,10,30,46),Uh(10,30,36,40),Uh(30,54,24,50),Uh(40,44,6,24),Uh(8,44,4,8);for(let[e,t]of[[36,30],[46,30],[36,42],[46,42]])Uh(e,e+2,t,t+2,0);Gh=new Map;for(let[e,t]of Object.entries(Wh))for(let[e,n]of t.cells)Hh[n*Vh.cols+e]=2,Gh.set(e+`,`+n,t);tg=new Int16Array(Vh.cols*Vh.rows);{let e=[],t=[],n=[];for(let n=0;n<Vh.rows;n++)for(let r=0;r<Vh.cols;r++){if(qh(r,n)!==0){e.push([r,n]);continue}let i=!1;for(let[e,t]of eg)qh(r+e,n+t)!==0&&(i=!0);i&&t.push([r,n])}let r=Hu(11),i=new Hn,a=new j,o=new Rr(2,.3,2);Vd(o,2,.3,2,2);let s=new $s(o,Rd(16777215,{map:If.flag}),e.length);e.forEach(([e,t],n)=>{let o=Zh(e,t);i.position.set(o.x,-.15,o.z),i.rotation.set(0,0,0),i.scale.set(1,1,1),i.updateMatrix(),s.setMatrixAt(n,i.matrix),a.setScalar(.82+r()*.3),s.setColorAt(n,a)}),s.receiveShadow=!0,Nd.add(s);let c=new Rr(2,3.4,2);Vd(c,2,3.4,2,2);let l=new $s(c,Rd(16777215,{map:If.brick}),t.length);t.forEach(([e,t],o)=>{let s=Zh(e,t);if(i.position.set(s.x,1.7,s.z),i.updateMatrix(),l.setMatrixAt(o,i.matrix),a.setScalar(.78+r()*.32),l.setColorAt(o,a),o%7==3){for(let[r,i]of[[1,0],[-1,0],[0,1],[0,-1]])if(qh(e+r,t+i)===1){n.push({x:s.x+r*1.02,z:s.z+i*1.02,di:r,dj:i});break}}}),Nd.add(l);let u=Bd(16752704,2.6),d=G.iron;for(let e of n){let t=H(.16,.5,.16,d,e.x,1.9,e.z,Nd);t.castShadow=!1;let n=new M(new Zc(.12,.35,6),u);n.position.set(e.x+e.di*.05,2.3,e.z+e.dj*.05),Nd.add(n);let r=Bf(Nd,e.x+e.di*.15,2.35,e.z+e.dj*.15,1.4,16751168,.5);Fh.push({f1:n,f2:null,g:n,gl:r,base:1.4,seed:Math.random()*10})}H(2.4,2.9,.25,G.woodD,B,1.45,.1,Nd);let f=new M(new fi(2,.12),zd(10467032));f.position.set(B,2.95,.25),Nd.add(f);for(let[e,t]of[[B,38],[B+46,33],[B+46,41]]){let n=new P;n.position.set(e,0,t),Nd.add(n),H(.12,.9,.12,G.iron,-.25,.45,0,n),H(.12,.9,.12,G.iron,.25,.45,0,n);let r=new M(new Xc(.55,.35,.35,10),G.iron);r.position.y=1,n.add(r),Ih(n,0,1.12,0,e>1010?.55:.75,`dungeon`),Sh(`dungeon`,e,t,.6)}let p=new P;p.position.set(B+51.2,0,37),Nd.add(p),H(1.8,.4,3.2,G.dstone,.2,.2,0,p),H(1.2,.85,1.4,G.dstone,0,.62,0,p),H(.35,2.6,1.6,G.dstone,.65,1.3,0,p);for(let e of[-1,1])H(1.2,.5,.25,G.dstone,0,1.1,e*.75,p);Ch(`dungeon`,B+50.4,B+52.3,35.4,38.6);let m=new M(new Vl(3.6,3.85,48),zd(7329993,{transparent:!0,opacity:.35,blending:2,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.set(B+45,.02,37),Nd.add(m);for(let e=0;e<14;e++){let e=B+32+r()*20,t=26+r()*22;if(Math.hypot(e-1e3-45,t-37)<5)continue;let n=H(.5*r()+.2,.06,.08,G.bone,e,.03,t,Nd);n.rotation.y=r()*I,n.castShadow=!1}Lh(B-4.5,11,Math.PI,[`algiz`,`othala`,`fehu`],Nd,`dungeon`,0)}{let e=(e,t,n,r)=>{let i=new P;i.position.set(e,0,t),n||(i.rotation.y=Math.PI/2),Nd.add(i);for(let e of[-1,1])H(.7,3.3,.9,G.dstone,e*(r/2+.2),1.65,0,i);H(r+1.6,.7,1,G.dstone,0,3.15,0,i)};e(B,12,!0,4),e(B,30,!0,4),e(B+10,38,!1,4),e(B+30,38,!1,4);let t=(e,t)=>new Kr({uniforms:{color:{value:new j(e).multiplyScalar(t)},t:{value:0}},transparent:!0,depthWrite:!1,blending:2,side:2,vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv = uv; vec4 mv = modelViewMatrix*vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,fragmentShader:`uniform vec3 color; uniform float t; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
        void main(){ float e = abs(dot(normalize(vN), normalize(vV))); float a = pow(e, 1.8) * mix(0.05, 1.0, vUv.y) * (0.85 + 0.15 * sin(t * 1.3 + vUv.x * 20.0));
          gl_FragColor = vec4(color * a, a);
          #include <colorspace_fragment>
        }`}),n=(e,n,r,i)=>{let a=new M(new Xc(.5,1.7,6,20,1,!0),t(r,i));a.position.set(e,3,n),a.renderOrder=5,Nd.add(a),og.push(a);let o=new M(new Yc(1.8,28).rotateX(-Math.PI/2),new ur({map:If.glow,color:new j(r).multiplyScalar(.55),transparent:!0,blending:2,depthWrite:!1}));o.position.set(e,.03,n),Nd.add(o)};if(n(B+2.5,6.5,10470143,.4),n(B-4,41,10470143,.35),n(B+45,37,7329993,.45),!gd){let e=new Float32Array(780),t=Hu(31),n=0;for(;n<260;){let r=B-10+t()*64,i=t()*50;qh(Yh(r),Xh(i))===1&&(e[n*3]=r,e[n*3+1]=.3+t()*2.8,e[n*3+2]=i,n++)}let r=new wr;r.setAttribute(`position`,new pr(e,3).setUsage(Xe)),sg=new hc(r,new uc({map:If.soft,color:16767400,size:.07,transparent:!0,opacity:.55,blending:2,depthWrite:!1})),sg.userData.n=260,sg.frustumCulled=!1,Nd.add(sg)}let r=Rd(15129280),i=Bd(16760944,3);for(let[e,t]of[[B-5.2,1],[B+5.2,10.8],[B-9.1,30.9],[B+9.1,45.1],[B+31,25],[B+31,49],[B+53,25.2],[B+53,48.8]]){let n=new P;n.position.set(e,0,t),Nd.add(n);for(let e=0;e<3;e++){let t=.18+e*.09,a=Math.cos(e*2.1)*.12,o=Math.sin(e*2.1)*.12,s=new M(new Xc(.045,.05,t,6),r);s.position.set(a,t/2,o),n.add(s);let c=new M(new Zc(.025,.09,5),i);c.position.set(a,t+.05,o),n.add(c)}Bf(n,0,.35,0,1.5,16754768,.45)}let a=Rd(16777215,{map:Af(128,256,(e,t,n)=>{e.fillStyle=`#5a1c22`,e.fillRect(0,0,t,n),jf(e,t,n,500,.25,1,3),e.fillStyle=`#3a1116`,e.fillRect(6,0,4,n),e.fillRect(t-10,0,4,n),kh(e,Eh.othala,30,60,68,90,`#c9a24a`,7),e.globalCompositeOperation=`destination-out`;for(let r=0;r<t;r+=16)e.beginPath(),e.moveTo(r,n),e.lineTo(r+8,n-18-W()*16),e.lineTo(r+16,n),e.fill();e.globalCompositeOperation=`source-over`},!0,!0),alphaTest:.5,side:2});for(let e of[33,37,41]){let t=new M(new fi(1.2,2.6),a);t.position.set(B+53.95,2,e),t.rotation.y=-Math.PI/2,Nd.add(t)}let o=Rd(14274747),s=Hu(4);for(let e=0;e<8;e++){let e=B+32+s()*20,t=26+s()*22;if(Math.hypot(e-1e3-45,t-37)<5)continue;let n=new M(new Wl(.13,7,5),o);n.scale.set(1,.85,1.15),n.position.set(e,.1,t),n.rotation.y=s()*I,Nd.add(n)}}for(let[e,t]of Object.entries(Wh)){let e=t.cells.map(([e])=>Zh(e,0).x),n=t.cells.map(([,e])=>Zh(0,e).z),r=Math.min(...e)-1,i=Math.max(...e)+1,a=Math.min(...n)-1,o=Math.max(...n)+1,s=i-r<o-a,c=s?o-a:i-r,l=new P;l.position.set((r+i)/2,0,(a+o)/2),s||(l.rotation.y=Math.PI/2),Nd.add(l);for(let e=0;e<=Math.round(c/.34);e++)H(.07,3.2,.07,G.iron,0,1.6,-c/2+e*(c/Math.round(c/.34)),l);for(let e of[.6,1.8,2.9])H(.09,.09,c,G.iron,0,e,0,l);t.mesh=l}for(let e of cf){let t=new P;t.position.set(B-8.75,0,e),Nd.add(t),H(2.1,.7,.95,G.dstone,0,.35,0,t);let n=H(2.1,.12,.95,G.dstone,.1,.35,.8,t);n.rotation.x=.9,Ch(`dungeon`,B-9.8,B-7.7,e-.5,e+.5)}}var K={};function fg(e,t,n,r,i,a,o={}){let s=hC(n);V.add(s.root);let c=Object.assign({id:e,name:t,model:s,pos:new A(r,U(r,i),i),yaw:a,home:{x:r,z:i,yaw:a},speed:0,wp:null,wpI:0,wait:0},o);return K[e]=c,Sh(`world`,r,i,.45),c.col=xh.world[xh.world.length-1],c}var pg=()=>Q.dayT>=.875||Q.dayT<.25;function mg(e){if(e.pose===`tied`)return;let t=pg();e.house?t&&!e.inside?e.goingHome?e.dest||(e.inside=!0,e.model.root.visible=!1,e.col.x=e.col.z=9999):(e.goingHome=!0,e.wp=null,e.pose=null,e.dest={x:e.house.x,z:e.house.z,yaw:e.yaw}):!t&&(e.inside||e.goingHome)&&(e.inside=!1,e.goingHome=!1,e.model.root.visible=!0,e.pos.set(e.house.x,0,e.house.z),e.col.x=e.pos.x,e.col.z=e.pos.z,e.dayWp?(e.wp=e.dayWp,e.wpI=0,e.dest=null):e.day&&(e.dest={...e.day})):e.nightWp&&(t&&e.wp!==e.nightWp?(e.wp=e.nightWp,e.wpI=0,e.dest=null,e.pose=null):!t&&e.wp===e.nightWp&&(e.wp=null,e.dest=e.day?{...e.day}:null))}function hg(e){for(let t of Object.values(K)){if(t.companion)continue;if(t.inside){mg(t);continue}mg(t);let n=0;if(t.wp){if(t.wait>0)t.wait-=e;else{let r=t.wp[t.wpI],i=r[0]-t.pos.x,a=r[1]-t.pos.z,o=Math.hypot(i,a);o<.3?(t.wpI=(t.wpI+1)%t.wp.length,t.wait=1.5+Math.random()*2.5):(n=1.3,t.pos.x+=i/o*n*e,t.pos.z+=a/o*n*e,t.yaw+=Uu(t.yaw,Math.atan2(i,a))*Math.min(1,e*6))}if(t.col.x=t.pos.x,t.col.z=t.pos.z,Th(t.pos,.35,`world`),t.col.x=t.pos.x,t.col.z=t.pos.z,Q.zone===`world`){let e=t.pos.x-Z.pos.x,n=t.pos.z-Z.pos.z,r=Math.hypot(e,n);r<.8&&r>.001&&(t.pos.x=Z.pos.x+e/r*.8,t.pos.z=Z.pos.z+n/r*.8)}}else if(t.dest){let r=t.dest.x-t.pos.x,i=t.dest.z-t.pos.z,a=Math.hypot(r,i);a<.4?(t.home={x:t.dest.x,z:t.dest.z,yaw:t.dest.yaw},t.dest=null,t.workPose&&t.day&&Math.hypot(t.pos.x-t.day.x,t.pos.z-t.day.z)<.6&&(t.pose=t.workPose)):(n=1.7,t.pos.x+=r/a*n*e,t.pos.z+=i/a*n*e,t.yaw+=Uu(t.yaw,Math.atan2(r,i))*Math.min(1,e*6)),t.col.x=t.pos.x,t.col.z=t.pos.z,Th(t.pos,.35,`world`),t.col.x=t.pos.x,t.col.z=t.pos.z}else if(Q.zone===`world`&&t.pose!==`tied`){let n=Math.hypot(Z.pos.x-t.pos.x,Z.pos.z-t.pos.z)<6?Math.atan2(Z.pos.x-t.pos.x,Z.pos.z-t.pos.z):t.home.yaw;t.yaw+=Uu(t.yaw,n)*Math.min(1,e*3)}t.pos.y=U(t.pos.x,t.pos.z),t.model.root.position.copy(t.pos),t.model.root.rotation.y=t.yaw,JS(t.model,{speed:n,atkPhase:-1,roll:-1,pose:t.pose,sit:+(t.pose===`tied`)},e)}}function gg(){fg(`sigrun`,`Sigrun`,{body:3425899,skin:14204068,dark:2764605,cloak:8219224,leather:3813160,hood:!0,cloakBack:!0,weapon:`staff`,skirt:`robe`,trim:13214282,hair:13620182,braids:!0,necklace:14197322},-7,3.8,.9,{pose:`staff`}),fg(`bjorn`,`Bjorn`,{body:7297598,skin:13938060,dark:3811870,leather:4074528,hair:11558958,bald:!0,beard:11558958,beardLen:.3,beardBraid:!0,weapon:`hammer`,skirt:`tunic`,apron:4863270,build:1.15,bareArms:!0},9.9,2.4,-1.2,{pose:`hammer`}),fg(`eira`,`Eira`,{body:14208949,skin:14729894,dark:5917242,hair:14267498,braids:!0,skirt:`dress`,skirtColor:4152954,apron:4152954,brooch:!0,necklace:10172974},-3,8,0,{wp:[[-3,8],[6,-1],[-6,-7],[-3,-1]]}),fg(`hakon`,`Hakon`,{body:5201210,skin:13609098,hair:5913378,beard:5913378,beardLen:.14,skirt:`tunic`,trim:9071162,cloak:7035461,cloakBack:!0,wraps:10127984},4,9,0,{wp:[[4,9],[8,-7],[-2,-9],[-10,1]]}),fg(`ulf`,`Ulf`,{body:5925754,skin:14202010,dark:3815992,hair:7031342,beard:7031342,beardLen:.2,hood:!0,cloak:9075300,skirt:`tunic`,wraps:10127984},Jd.x+5.2,Jd.z+2.8,Math.PI,{pose:`tied`}),fg(`astrid`,`Astrid`,{body:3425898,skin:14729378,dark:2764605,leather:3813160,metal:10726581,vest:8225931,pauldron:`plate`,helmet:!0,helmStyle:`guard`,helmetColor:10726581,weapon:`sword`,shield:[`#34466a`,`#d8c48a`],skirt:`tunic`,trim:13214282,hair:14267498,braids:!0,cloak:3425898,cloakBack:!0,wraps:9075300,gloves:!0},19,3,-Math.PI/2),fg(`eirik`,`Eirik`,{body:8022586,skin:14202010,dark:3813928,hair:10123850,beard:10123850,beardLen:.22,skirt:`tunic`,trim:9071162,cloak:5917240,cloakBack:!0,wraps:10127984,buckle:!0},Qd.x-5.5,Qd.z+3,-Math.PI/2,{pose:`tied`}),Kf(()=>Z.pos,()=>!0,1.3),fg(`gunnar`,`Gunnar`,{body:5917234,skin:13608070,dark:3813412,leather:5125670,fur:10127986,cloak:7035461,cloakBack:!0,hood:!0,bow:{limb:5914152},weapon:`dagger`,skirt:`tunic`,beard:8018490,beardLen:.2,wraps:9075300,gloves:!0},-19,9,Math.PI/2),fg(`liv`,`Liv`,{body:9067066,skin:15255724,dark:4864554,hair:14729328,braids:!0,skirt:`dress`,skirtColor:6978122,apron:14208949,build:.82,thin:!0},-3,22,Math.PI),K.liv.model.root.scale.setScalar(.82);let e={h1:{x:-14,z:5},h2:{x:7,z:15},h3:{x:14,z:16},h4:{x:2,z:-16}},t=(e,t,n={})=>{let r=K[e];Object.assign(r,{house:t,day:{x:r.pos.x,z:r.pos.z,yaw:r.yaw},dayWp:r.wp,workPose:r.pose},n)};t(`bjorn`,e.h3),t(`eira`,e.h2),t(`liv`,e.h2),t(`hakon`,e.h4),t(`gunnar`,e.h1),t(`astrid`,null,{nightWp:[[19,3],[21,-12],[2,-25],[-22,-12],[-21,14],[3,25],[20,13]]});for(let e of Object.values(K))Kf(()=>e.pos,()=>Q.zone===`world`&&!e.inside&&e.model.root.visible,1.1)}var q={common:{bye:`Hoşça kal`,go:`Yola çıkıyorum`,rewardToast:e=>`Ödül: ${e}`,potion:`Şifa iksiri`,gold:e=>`${e} altın`},sigrun:{name:`Sigrun`,askWhat:`Höyükte ne oldu?`,whatAnswer:`Höyük Kralı yeniden kalktı. Atalarımızın rünü onun mezarında. Rün yerine dönmezse ölüler köye iner, kış da bizi bitirir.`,askReward:`Karşılığında ne var?`,rewardAnswer:`Köyün minneti. Dönüşünde de seni eli boş göndermem, söz.`,accept:`Rünü ben getiririm.`,acceptToast:`Şifa iksiri ×2`,acceptAnswer:`Güneydoğudaki patikayı izle, rün taşları yolu gösterir. Kurtlar aç, yollarından uzak dur ya da eğilip sessiz geç. Höyükte uyuyan ölülere gizlice yaklaşırsan tek darbede toprağa dönerler.`,later:`Sonra konuşuruz`,greet:`Kuzey rüzgârı seni tam zamanında getirdi, yolcu. Üç gecedir Ata Höyüğü'nden taş sesleri geliyor. Ölüler uyanıyor.`,waiting:`Rün hâlâ höyükte. Gizlilikle yaklaş; uyuyan draugr seni duymazsa güçlü bir darbe yeter.`,askCauldron:`Kazan ne işe yarıyor?`,cauldronAnswer:`Üç kar çiçeği getir, kazanda şifa iksiri kaynatırım. Çiçekler karın içinde mavi parlar; eski taşların çevresinde çok olur.`,understood:`Anladım`,leaving:`Gidiyorum`,returned:`Ata Rünü… Taşın sıcaklığını hissediyor musun? Atalarımız artık uyuyabilir. Sözümü tutuyorum; ödülünü sen seç.`,rewardGold:`100 altın`,rewardBless:`Silahımı kutsa`,rewardBlessNote:e=>`${e} · +4 hasar`,after:`Isvik seni unutmayacak. Kapımız sana hep açık, yolcu.`,runes:`Silahıma rün işle`,runesNote:`Ayaz, Alev, Can emme`},bjorn:{name:`Bjorn`,potionPrice:`15 altın`,soldPotion:`Al bakalım. Tadı kötü ama işini görür.`,picks:`Maymuncuk ×3`,picksPrice:`10 altın`,soldPicks:`İnce çelik. Zorlama, kırılır.`,trained:`Çekici bilekten değil omuzdan indir. İşte böyle, kıvılcım saçılsın.`,wares:`Silah ve zırhlara bak`,waresNote:`al, sat, iyileştir`,soldFish:`Taze mi bunlar? Kokusundan belli. Al paranı.`,soldPelts:`Güzel post. Kışın paraya döner.`,sellFish:e=>`Balıkları sat ×${e}`,sellPelts:e=>`Kurt postu sat ×${e}`,sellHides:e=>`Geyik postu sat ×${e}`,soldHides:`Yumuşak deri. Bundan iyi çizme olur.`,greet:e=>`Örs soğumadan söyle, ne lazım? Kesende ${e} altın var.`},board:{name:`İlan tahtası`,paid:(e,t)=>`“${e}” ilanının ödülü tahtaya iliştirilmiş: ${t} altın.`,more:`Yeni ilanlara bak`,leave:`Bırak`,deliverHerbs:`Çiçekleri teslim et`,deliverFish:`Balıkları teslim et`,ok:`Tamam`,take:`İlanı al`,wolvesHint:`Kurt izleri batıda ve kuzeyde`,herbsStatus:(e,t)=>`${e}\n\nÜzerinde ${t} kar çiçeği var.`,needs:e=>`${e} gerekli`,fishStatus:(e,t)=>`${e}\n\nSepetinde ${t} balık var.`,progress:(e,t,n,r)=>`${e}: ${t}/${n}\n\n${r}`,offer:(e,t)=>`${e.toLocaleUpperCase(`tr-TR`)}\n\n${t}`},cauldron:{name:`Kazan`,ready:`Kazan fokurduyor. Üç kar çiçeği atarsan Sigrun'un tarifiyle bir şifa iksiri kaynar.`,notReady:e=>`Kazan fokurduyor. İksir için üç kar çiçeği gerekiyor; sende ${e} var.`,brew:`İksir kaynat`,brewNote:`3 kar çiçeği`,cancel:`Vazgeç`},hakon:{name:`Hakon`,accept:`Onu bulurum.`,newQuest:`Yeni yan görev: Kayıp Balıkçı`,directions:`Kuzey kapısından çık, fenerli patikayı izle. Kamp gölün güney kıyısında. Kurtlara dikkat et, kış onları da acıktırdı.`,askRumble:`Ne gürlemesi?`,rumbleAnswer:`Eskiler buzdan inen trollerden söz eder; kış erzakı toplarlarmış. Ben hep masal sanırdım. Artık emin değilim.`,notNow:`Şimdi olmaz`,greet:`Yolcu, bir dakika. Kardeşim Ulf iki gün önce kuzeydeki Kuzgun Gölü'ne balığa gitti, dönmedi. Geceleri gölden garip bir gürleme geliyor.`,waiting:`Ulf'tan haber var mı? Kamp gölün güney kıyısında, oradan başla.`,searching:`Arıyorum`,thanks:`Yaşıyor mu? Trol mü dedin... Sağ ol, yolcu. Bu tılsım babamdandı; artık seni korusun. Bu keseyi de al.`,thankYou:`Teşekkürler`,done:`YAN GÖREV TAMAMLANDI`,charm:`Hakon'un tılsımı: en yüksek can +15`,gold50:`50 altın`,after:`Kardeşim sayende evde sayılır. Gölde balık tutarsan Bjorn iyi fiyat verir.`},ulf:{campWrecked:`KAMP DAĞITILMIŞ`,tracks:`Karda devasa ayak izleri var. İzler buzun üstünden kuzeye gidiyor.`,tiedSeen:`Kazığa bağlı biri var. Önce trolü alt et.`,name:`Ulf`,tiedWarn:`(Bağlı, fısıldar) Trol... uyanmadan... dikkat et!`,hush:`Sessiz ol`,freed:`Bağları kes, çabuk! O canavar beni kış erzakı sanmıştı. Kampımı toparlayıp döneceğim. Hakon'a haber ver, meraktan ölmüştür. Al, oltam senin; göldeki delikten balık tutabilirsin.`,cut:`İpleri kes`,rodToast:`Olta aldın: buz deliğinde balık tutabilirsin`,tips:`Şamandıra batınca hemen çek; bekleme, erken de çekme. Buz turnası nadirdir ama Bjorn ona iyi para verir.`,farewell:`Rast gele`},pass:{newQuest:`Yeni görev: Demir Geçidi`,obCaravan:`Doğu yolundaki yağmalanmış kervanı incele`,obTower:`İzleri Demir Geçidi'ndeki gözcü kulesine kadar takip et`,obEirik:`Kızıl Kalkan kampına sız, tutsak Eirik'i kurtar`,obHalvar:`Çete reisi Halvar Kızılkalkan'ı yen`,obReturn:`Astrid'e dön`,crest:`KIZIL KALKAN ARMASI`,caravanTitle:`Yağmalanmış kervan`,caravanText:`Araba devrilmiş, sandıklar boşaltılmış. Kanlı karda kırık bir kalkan duruyor: kızıl zemin üstünde altın sarısı girdap. Kızıl Kalkan çetesinin arması. Ayak izleri ve kızak çizgileri doğuya, geçide doğru gidiyor. Kervancıdan iz yok; ya kaçtı ya da onu da götürdüler.`,follow:`İzleri takip et`,ordersTitle:`Haydut emri`,ordersText:`"Kulede iki göz, gece gündüz. Yoldan geçen her kervanın yükü kampa gelir. Tüccar Eirik kafeste kalsın; Isvik fidye verirse sağ döner, vermezse kurtlara. Muhafız görürseniz ateş yakın. — Halvar"`,ordersOk:`Kampa gidiyorum`,ordersToast:`Kamp geçidin sonunda, kazıklı çitin ardında`,halvarDown:`HALVAR DÜŞTÜ`,toAstrid:`Geçit temizlendi. Astrid'e haber ver`},astrid:{name:`Astrid`,greet:`Dur bakalım yolcu. Üç gündür doğu yolundan kervan gelmiyor. Bjorn'ün demiri de, köyün tuzu da o yoldan gelir.`,askWhat:`Ne olduğunu düşünüyorsun?`,whatAnswer:`Son kervanı tüccar Eirik getiriyordu. Ne Eirik var ne yük. Avcılar geçitte duman gördüklerini söylüyor. Kızıl Kalkan çetesi oraya yerleştiyse köyün kışı zor geçer.`,accept:`Doğu yoluna bakarım`,directions:`Köyün doğusundan çıkan patikayı izle. Kervanın uğradığı yere bak, izleri sür. Geçitte bir gözcü kulesi varsa haydutlar orada nöbet tutar. Okçularına dikkat et: kalkanını kaldır ya da yuvarlan.`,later:`Sonra`,wait1:`Kervanın uğradığı yer doğu patikasının üstünde. Ne bulursan getir.`,wait2:`Kızıl Kalkan, demek. İzler geçide gidiyorsa kuleye bak. Onlar yazışmayı sever; bir emir, bir not bulursun.`,wait3:`Eirik yaşıyorsa onu kurtar. Halvar'ın kellesi de köyün içini rahatlatır.`,onIt:`Gidiyorum`,report:`Eirik köye ulaştı, anlattı her şeyi. Halvar da düştü demek. Geçit yeniden bizim. Köy sana borçlu; ne istersen söyle.`,rewardGold:`150 altın`,rewardArmor:`Muhafız zırhı`,rewardArmorNote:`Isvik muhafız zırhı · ağır, 30 zırh`,passOpen:`DEMİR GEÇİDİ AÇILDI`,ironCheaper:`Doğu yolu açıldı: Bjorn'de demir külçesi ucuzladı`,after:`Yol açık, kervanlar yeniden geliyor. Köy şimdilik sakin; yolda bir kılıç daha işine yararsa söyle.`,cmdJoin:`Benimle gel`,cmdFollow:`Beni takip et`,cmdWait:`Burada bekle`,cmdHome:`Köye dön`,joined:`Astrid yanında: düşmanlarına saldırır`,waitingHere:`Astrid burada bekliyor`,backHome:`Astrid köydeki nöbet yerine döndü`,companionTalk:`Kılıcım hazır. Nereye gidiyoruz?`,combat:[`Arkandayım!`,`Sağdan geliyor!`,`Kalkanını kaldır!`,`Isvik için!`]},eirik:{name:`Eirik`,tied:`(Fısıldar) Sen Isvik'ten misin? Çöz beni, çabuk! Halvar uzun evin önünde. Ben kapıdan kaçarım, sen onların başını meşgul et.`,tiedSafe:`Halvar düştü mü? Atalar seni korusun! Çöz şu ipleri, köye dönüyorum.`,cut:`İpleri kes`,flee:`Eirik kapıya koşuyor. Sıra Halvar'da.`,fleeSafe:`Eirik özgür, köye dönüyor.`,thanks:`Kervanım gitti ama canım bende. Yol açılırsa Bjorn'e yine demir getiririm, hem de ucuza.`,trade:`Doğu yolu açık, yükler yeniden geliyor. Bjorn'ün tezgâhında demir artık daha ucuz; benden selam söyle.`},train:{lesson:e=>`${e} dersi al`,maxed:`öğretebileceği her şeyi öğrendin`},gunnar:{name:`Gunnar`,greet:`Ayak sesin ormanı uyandırır, yolcu. Biraz ders istersen öğretirim; geyik eti ve postu da alırım, Bjorn'den iyi fiyata.`,trained:`Nefesini tut, oku göğsünden değil omzundan bırak. Hah, işte böyle.`,sellMeat:e=>`Çiğ et sat ×${e}`,sellHide:e=>`Geyik postu sat ×${e}`,boughtMeat:`Tütsülerim, kışın işe yarar.`,boughtHide:`Temiz yüzülmüş. Elin alışıyor.`,askHunt:`Av hakkında bir şey söyle`,huntTips:`Geyik seni görmeden duyar. Eğil, rüzgârı yüzüne al, gece yaklaş. Sürüden birini vurursan hepsi kaçar; ilk ok tam gerilmiş olsun. Tavşanlar karda görünmez, kulaklarına bak.`},liv:{name:`Liv`,greet:`Benekli'yi gördün mü? Keçim! Dün akşam batıdaki eski taşlara doğru kaçtı. Kurtlar oradaydı... Getirebilir misin? Babam beni oraya yollamaz.`,accept:`Benekli'yi bulurum`,later:`Şimdi olmaz`,newQuest:`Yeni iş: Kayıp Keçi`,obFind:`Liv'in keçisi Benekli'yi bul (batıdaki eski taşların yakını)`,obBring:`Benekli'yi Liv'e götür`,waiting:`Batıdaki taşlar, göl yolunun solunda. Beyaz, sırtında kahverengi benekler var.`,almost:`Benekli! Arkanda! Getir getir, ağıla getir!`,caught:`Benekli peşinden geliyor. Çok uzaklaşma.`,thanks:`Benekli! Seni haylaz! Teşekkür ederim, yolcu. Al, sakladığım kar çiçekleri; annem Sigrun'a iksir yaptırıyor.`,reward:`Ödül: 40 altın, kar çiçeği ×2`,after:`Benekli artık ağıldan çıkmıyor. Sana kafa atarsa sevdiğindendir.`},barks:{bjorn:[`Örs soğumasın, iş soğumasın.`,`Çelik sabır ister, demir ter.`,`Bıçağın körleşirse getir.`],eira:[`Ekmeğin kokusunu aldın mı?`,`Kuyunun suyu donmuş yine.`,`Sigrun bu sabah yine yıldızları sordu.`],hakon:[`Göl bu kış erken dondu.`,`Ulf olmasa ağlar boş kalır.`],sigrun:[`Rünler fısıldıyor. Dinlersen duyarsın.`,`Kuzey ışıkları bu gece parlak olacak.`],astrid:[`Gözüm doğu yolunda.`,`Kılıcını hep elinin altında tut.`,`Köyde kavga istemem.`],gunnar:[`Rüzgâr kuzeyden; geyikler gölün güneyinde olur.`,`Ayak izine bak: yeni mi eski mi?`],liv:[`Benekli çok inatçıdır!`,`Kurtlardan korkmuyorum. Biraz korkuyorum.`],eirik:[`Bir sonraki kervanı muhafızlarla getireceğim.`,`Halvar'ın yüzü hâlâ aklımda.`],night:[`Geç oldu, yolcu. Kurtlar geceyi sever.`,`Fenerin sönmesin.`,`Bu saatte yollarda ne işin var?`],passDone:[`Doğu yolu yeniden açık, sayende.`,`Kızıl Kalkan'ı dağıtan sen misin?`],runeDone:[`Ata Rünü yerine döndü, ölüler uyuyor.`,`Höyükten ses gelmiyor artık.`],storm:[`Fırtına kopuyor, içeri gir!`,`Bu soğukta parmaklar donar.`]}},_g={mode:null,zone:`world`,target:null,atk:null,cd:0,barkT:0},vg=.42,yg=.15,bg=.5,xg=2.2,Sg=()=>K.astrid,Cg=()=>9+Z.charLvl*1.5;function wg(e){let t=Sg(),n=_g.mode;_g.mode=e,e&&!n?(t.wp=null,t.dest=null,t.pose=null,t.companion=!0,t.col.x=t.col.z=9999,Sd.add(t.model.root),_g.zone=Q.zone):!e&&n&&(t.companion=!1,V.add(t.model.root),t.model.root.visible=!0,t.pos.set(t.day.x,0,t.day.z),t.yaw=t.day.yaw,t.home={...t.day},t.col.x=t.pos.x,t.col.z=t.pos.z,_g.zone=`world`)}function Tg(){if(_g.mode!==`follow`)return;let e=Sg();_g.zone=Q.zone,_g.target=null,_g.atk=null,e.pos.set(Z.pos.x-Math.sin(Z.yaw)*2,Z.pos.y,Z.pos.z-Math.cos(Z.yaw)*2),e.yaw=Z.yaw}function Eg(){let e=hS.target;if(e&&!e.dead&&!e.wild&&e.zone===Q.zone)return e;let t=null,n=14;for(let e of CC){if(e.dead||e.wild||e.zone!==Q.zone||!Rb(e))continue;let r=e.pos.distanceTo(Z.pos);r<n&&(n=r,t=e)}return t}function Dg(e){if(!_g.mode)return;let t=Sg(),n=t.model,r=_g.zone===Q.zone;if(n.root.visible=r,!r)return;let i=0,a=t.pos.x,o=t.pos.z,s=null;if(_g.cd-=e,_g.barkT-=e,_g.mode===`follow`&&!Z.dead){let n=_g.target&&!_g.target.dead&&_g.target.zone===Q.zone?_g.target:_g.target=Eg();if(n&&n.pos.distanceTo(Z.pos)<20){let r=Math.hypot(n.pos.x-t.pos.x,n.pos.z-t.pos.z);if(s=Math.atan2(n.pos.x-t.pos.x,n.pos.z-t.pos.z),_g.barkT<=0&&!_g.atk&&(aS(t.pos,1,q.astrid.combat[Math.floor(Math.random()*q.astrid.combat.length)]),_g.barkT=25),_g.atk){let t=_g.atk;t.t+=e,!t.hit&&t.t>=.51&&(t.hit=!0,r<xg+n.def.r+.4&&Hb(n,Cg()*(.9+Math.random()*.2),{knock:2.5,companion:!0})),t.t>=1.0699999999999998&&(_g.atk=null,_g.cd=.4+Math.random()*.5)}else r>xg+n.def.r*.5?(a=n.pos.x,o=n.pos.z,i=5.6):_g.cd<=0&&Math.abs(Uu(t.yaw,s))<.5&&(_g.atk={type:Math.random()<.5?`slash`:`chop`,t:0,hit:!1},z(`swing`))}else{_g.target=null,_g.atk=null;let e=Z.pos.x-Math.sin(Z.yaw)*2+Math.cos(Z.yaw)*1.3,n=Z.pos.z-Math.cos(Z.yaw)*2-Math.sin(Z.yaw)*1.3,r=Math.hypot(e-t.pos.x,n-t.pos.z);r>.6&&(a=e,o=n,i=Math.min(7.5,r*2.2)),r>40&&Tg()}}else _g.atk=null;if(i>0){let n=a-t.pos.x,r=o-t.pos.z,c=Math.hypot(n,r)||1;t.pos.x+=n/c*i*e,t.pos.z+=r/c*i*e,s===null&&(s=Math.atan2(n,r)),AS(t.pos,.4,Q.zone)}s!==null&&(t.yaw+=Uu(t.yaw,s)*Math.min(1,e*10)),t.pos.y=Q.zone===`world`?U(t.pos.x,t.pos.z):0,n.root.position.copy(t.pos),n.root.rotation.y=t.yaw;let c=_g.atk,l=c?{type:c.type,phase:c.t<vg?`windup`:c.t<.57?`strike`:`recover`,k:c.t<vg?c.t/vg:c.t<.57?(c.t-vg)/yg:Math.min(1,(c.t-vg-yg)/bg)}:null;JS(n,{speed:i>0?i:0,atkPhase:-1,roll:-1,eatk:l},e)}var Og,kg,Ag,jg;function Mg(e,t,n,r,i,a,o,s=6,c=1){jg.setHex(i);for(let i=0;i<r;i++){let r=Og.i;Og.i=(r+1)%500,Og.pos[r*3]=e+(Math.random()-.5)*.2,Og.pos[r*3+1]=t+(Math.random()-.5)*.2,Og.pos[r*3+2]=n+(Math.random()-.5)*.2;let i=Math.random()*I,l=Math.random()*.9,u=a*(.4+Math.random()*.6);Og.vel[r*3]=Math.cos(i)*Math.cos(l)*u,Og.vel[r*3+1]=Math.sin(l)*u+c,Og.vel[r*3+2]=Math.sin(i)*Math.cos(l)*u,Og.base[r*3]=jg.r,Og.base[r*3+1]=jg.g,Og.base[r*3+2]=jg.b,Og.life[r]=Og.max[r]=o*(.6+Math.random()*.4),Og.grav[r]=s}}function Ng(e){for(let t=0;t<500;t++){if(Og.life[t]<=0)continue;if(Og.life[t]-=e,Og.life[t]<=0){Og.pos[t*3+1]=-9999;continue}Og.vel[t*3+1]-=Og.grav[t]*e,Og.pos[t*3]+=Og.vel[t*3]*e,Og.pos[t*3+1]+=Og.vel[t*3+1]*e,Og.pos[t*3+2]+=Og.vel[t*3+2]*e;let n=Og.life[t]/Og.max[t];Og.col[t*3]=Og.base[t*3]*n,Og.col[t*3+1]=Og.base[t*3+1]*n,Og.col[t*3+2]=Og.base[t*3+2]*n}kg.attributes.position.needsUpdate=!0,kg.attributes.color.needsUpdate=!0}var Pg,Fg=[];function Ig(e,t,n,r,i,a){let o=new M(Pg,zd(r,{transparent:!0,opacity:.9,blending:2,depthWrite:!1,side:2}));o.position.set(e,t+.12,n),Sd.add(o),Fg.push({m:o,t:0,dur:a,maxR:i})}var Lg,Rg,zg=[];function Bg(e){let t=e.atkType,n=t===`chop`,r=e.kind===`boss`?1.55:e.kind===`troll`?1.6:1,i=new M(n?Rg:Lg,zd(e.kind===`boss`?7329993:e.kind===`troll`?10479359:13172656,{transparent:!0,opacity:.8,blending:2,depthWrite:!1,side:2}));i.position.set(e.pos.x,e.pos.y+(n?.95:1.15)*r,e.pos.z),i.rotation.set(0,e.yaw,t===`slash`?.45:t===`heavy`?-.2:0),i.scale.setScalar(e.def.range),Sd.add(i),zg.push({m:i,t:0})}function Vg(e){for(let t=zg.length-1;t>=0;t--){let n=zg[t];n.t+=e;let r=n.t/.28;n.m.material.opacity=.8*Math.max(0,1-r),n.m.scale.multiplyScalar(1+e*.6),r>=1&&(Sd.remove(n.m),n.m.material.dispose(),zg.splice(t,1))}for(let t=Fg.length-1;t>=0;t--){let n=Fg[t];n.t+=e;let r=n.t/n.dur,i=Lu(.3,n.maxR,zu(Math.min(1,r)));n.m.scale.set(i,1,i),n.m.material.opacity=Math.max(0,1-r),r>=1&&(Sd.remove(n.m),n.m.material.dispose(),Fg.splice(t,1))}}var Hg,Ug;function Wg(e,t,n,r=1.9){let i=document.createElement(`div`);i.className=`dn `+n,i.textContent=typeof t==`number`?Math.round(t):t,Hg.appendChild(i),Ug.push({el:i,x:e.x+(Math.random()-.5)*.4,y:e.y+r,z:e.z,t:0}),Ug.length>24&&Ug.shift().el.remove()}var Gg;function Kg(e){for(let t=Ug.length-1;t>=0;t--){let n=Ug[t];if(n.t+=e,n.y+=e*.9,Gg.set(n.x,n.y,n.z).project(Cd),n.t>1.1||Gg.z>1){n.el.remove(),Ug.splice(t,1);continue}let r=(Gg.x*.5+.5)*innerWidth,i=(-Gg.y*.5+.5)*innerHeight;n.el.style.transform=`translate(${r}px,${i}px) translate(-50%,-50%) scale(${1+Math.max(0,.25-n.t)*2})`,n.el.style.opacity=String(1-Math.max(0,n.t-.7)/.4)}}var qg,Jg,Yg;function Xg(){let e=Z.atk,t=Z.model.weapon,n=!1;if(e&&!Z.dead&&(n=e.t>e.W-.03&&e.t<e.W+e.S+.07),t.updateWorldMatrix(!0,!1),n){let[n,r]=t.userData.trail||[.35,1.05],i=new A(0,0,n).applyMatrix4(t.matrixWorld),a=new A(0,0,r).applyMatrix4(t.matrixWorld);if(!Jg.on)for(let e=0;e<12;e++)Jg.base[e].copy(i),Jg.tip[e].copy(a);for(let e=11;e>0;e--)Jg.base[e].copy(Jg.base[e-1]),Jg.tip[e].copy(Jg.tip[e-1]);Jg.base[0].copy(i),Jg.tip[0].copy(a),Jg.active=12;let o=sh(!1);Jg.col.setHex(o?Vp[o].color:e.power?16761466:e.type===`p3`?16769712:12574975)}else if(Jg.active>0){Jg.active--;for(let e=11;e>0;e--)Jg.base[e].copy(Jg.base[e-1]),Jg.tip[e].copy(Jg.tip[e-1])}if(Jg.on=n,Yg.visible=Jg.active>0,!Yg.visible)return;let r=Jg.geo.attributes.position.array,i=Jg.geo.attributes.color.array,a=Jg.col;for(let e=0;e<12;e++){Jg.base[e].toArray(r,e*6),Jg.tip[e].toArray(r,e*6+3);let t=(1-e/11)**1.5*(Jg.active/12)*.9;i[e*6]=a.r*t*.25,i[e*6+1]=a.g*t*.25,i[e*6+2]=a.b*t*.25,i[e*6+3]=a.r*t,i[e*6+4]=a.g*t,i[e*6+5]=a.b*t}Jg.geo.attributes.position.needsUpdate=!0,Jg.geo.attributes.color.needsUpdate=!0}var Zg,Qg,$g,e_=0,t_=0,n_=1,r_;function i_(e,t){if(Q.zone===`world`&&!Z.dead&&t>0&&(t_+=t,t_>.75)){t_=0,n_=-n_;let e=Z.yaw,t=Z.pos.x+Math.cos(e)*.14*n_,n=Z.pos.z-Math.sin(e)*.14*n_;r_.position.set(t,U(t,n)+.04,n),r_.rotation.set(0,e,0),r_.updateMatrix(),$g.setMatrixAt(e_,r_.matrix),Qg.array[e_]=1,e_=(e_+1)%56,$g.instanceMatrix.needsUpdate=!0}for(let t=0;t<56;t++)Qg.array[t]>0&&(Qg.array[t]=Math.max(0,Qg.array[t]-e/16));Qg.needsUpdate=!0}var a_;function o_(){Og={pos:new Float32Array(1500),col:new Float32Array(1500),vel:new Float32Array(1500),base:new Float32Array(1500),life:new Float32Array(500),max:new Float32Array(500),grav:new Float32Array(500),i:0};for(let e=0;e<500;e++)Og.pos[e*3+1]=-9999;kg=new wr,kg.setAttribute(`position`,new pr(Og.pos,3).setUsage(Xe)),kg.setAttribute(`color`,new pr(Og.col,3).setUsage(Xe)),Ag=new hc(kg,new uc({map:If.soft,size:.26,vertexColors:!0,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1})),Ag.frustumCulled=!1,Sd.add(Ag),jg=new j,Pg=new Vl(.85,1,48).rotateX(-Math.PI/2),Lg=new Vl(.45,1,20,1,-.95,1.9).rotateX(-Math.PI/2).rotateY(-Math.PI/2),Rg=new Vl(.45,1,20,1,-.95,1.9).rotateY(-Math.PI/2),Hg=F(`#nums`),Ug=[],Gg=new A,qg=new P;{let e=new M(new Xc(.12,.12,40,6,1,!0),zd(7329993,{transparent:!0,opacity:.2,blending:2,depthWrite:!1,fog:!1}));e.position.y=20,qg.add(e);let t=new M(new Bl(.35),zd(10483178,{fog:!1}));t.position.y=3.2,qg.add(t),Bf(t,0,0,0,2.2,7329993,.55),qg.userData.gem=t,Sd.add(qg)}Jg={base:[],tip:[],active:0,on:!1,col:new j,geo:new wr};{let e=[];for(let t=0;t<11;t++){let n=t*2;e.push(n,n+1,n+2,n+1,n+3,n+2)}Jg.geo.setAttribute(`position`,new pr(new Float32Array(72),3).setUsage(Xe)),Jg.geo.setAttribute(`color`,new pr(new Float32Array(72),3).setUsage(Xe)),Jg.geo.setIndex(e);for(let e=0;e<12;e++)Jg.base.push(new A),Jg.tip.push(new A)}Yg=new M(Jg.geo,new ur({vertexColors:!0,transparent:!0,blending:2,depthWrite:!1,side:2,toneMapped:!1})),Yg.frustumCulled=!1,Yg.visible=!1,Sd.add(Yg),Zg=new fi(.2,.34).rotateX(-Math.PI/2),Qg=new Gs(new Float32Array(56),1),Qg.setUsage(Xe),Zg.setAttribute(`aFade`,Qg),$g=new $s(Zg,new Kr({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:`attribute float aFade; varying vec2 vUv; varying float vF; void main(){ vUv = uv; vF = aFade; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }`,fragmentShader:`varying vec2 vUv; varying float vF; void main(){ float d = length(vUv - 0.5) * 2.0; float a = (1.0 - smoothstep(0.55, 1.0, d)) * vF * 0.4; gl_FragColor = vec4(0.36, 0.44, 0.6, a);
      #include <colorspace_fragment>
    }`}),56),$g.frustumCulled=!1,$g.instanceMatrix.setUsage(Xe),V.add($g);{let e=new hn().makeTranslation(0,-999,0);for(let t=0;t<56;t++)$g.setMatrixAt(t,e)}r_=new Hn,a_=new A;{let e=[[qd.x-1,qd.z+3],[Xd.x+1.5,Xd.z-1.5],[-5,70],[Jd.x+.5,Jd.z-3]],t=new fi(.42,.75).rotateX(-Math.PI/2);t.setAttribute(`aFade`,new Gs(new Float32Array(64).fill(1.6),1));let n=new $s(t,$g.material,64),r=new Hn,i=0;for(let t=0;t<e.length-1;t++){let[a,o]=e[t],[s,c]=e[t+1],l=Math.hypot(s-a,c-o),u=Math.atan2(s-a,c-o);for(let e=0;e<l&&i<64;e+=2.2){let t=i%2?1:-1,d=a+(s-a)*e/l+Math.cos(u)*.35*t,f=o+(c-o)*e/l-Math.sin(u)*.35*t;r.position.set(d,U(d,f)+.05,f),r.rotation.set(0,u,0),r.updateMatrix(),n.setMatrixAt(i++,r.matrix)}}n.count=i,n.frustumCulled=!1,V.add(n)}}function s_(){let e=Z.inv.meat;return e<=0?0:(Z.inv.meat=0,Z.inv.cooked+=e,z(`drink`),X(`Pişmiş et ×${e}`,`loot t1`),Mg(Z.pos.x,Z.pos.y+1,Z.pos.z,12,16752704,1.2,.8,-1.5,.5),e)}function c_(){return Q.mode!==`play`&&Q.mode!==`menu`||Z.dead?!1:Z.inv.cooked<=0?(X(`Pişmiş etin yok. Avla, köy ateşinde pişir.`),!1):(Z.inv.cooked--,Z.regen={t:Yp.dur,hps:Yp.hps},z(`drink`),X(`Yemek: ${Yp.dur} sn boyunca can yenilenir`),!0)}function l_(e){let t=Z.regen;t&&!Z.dead&&(t.t-=e,Z.hp=Math.min(Z.maxHp,Z.hp+t.hps*e),t.t<=0&&(Z.regen=null))}function u_(){let e=[jh(new Xc(.11,.17,5.2,6).translate(0,2.6,0),15197146)];for(let t of[.9,1.7,2.4,3.3,4.1]){let n=.17-.06*t/5.2+.008;e.push(jh(new Xc(n,n,.1,6).translate(0,t,0),2762532))}for(let t=0;t<6;t++){let n=1.1+t%3*.4;e.push(jh(new Xc(.02,.045,n,4).translate(0,n/2,0).rotateZ(.7+t%2*.25).rotateY(t*1.1).translate(0,3+t*.32,0),6050378))}for(let t=0;t<4;t++){let n=t*1.6;e.push(jh(new zl(.45,0).scale(1,.7,1).translate(Math.cos(n)*.8,4.4+t%2*.6,Math.sin(n)*.8),t%2?13212218:11896366))}return Mh(e)}function d_(){let e=new zl(.75,0);e.computeVertexNormals();let t=e.attributes.normal,n=new Float32Array(t.count*3),r=new j(15660024),i=new j(3033144);for(let e=0;e<t.count;e++){let a=t.getY(e)>.4?r:i;n[e*3]=a.r,n[e*3+1]=a.g,n[e*3+2]=a.b}return e.setAttribute(`color`,new pr(n,3)),e}function f_(){let e=[];for(let t=0;t<5;t++){let n=.35+t%3*.12;e.push(jh(new Zc(.035,n,3).translate(0,n/2,0).rotateZ((t-2)*.22).rotateY(t*1.3),t%2?11901534:9402956))}return Mh(e)}var p_=null,m_,h_=[];function g_(){for(let e of h_){let t=Q.time*e.sp+e.ph,n=Kd.x+Math.cos(t)*e.r,r=Kd.z+Math.sin(t)*e.r*.8;e.g.position.set(n,e.h+Math.sin(Q.time*.7+e.ph)*.8,r),e.g.rotation.set(0,Math.atan2(-Math.sin(t)*e.r,Math.cos(t)*e.r*.8),Math.sin(t*2)*.15);let i=Math.sin(Q.time*7+e.ph)*.6;e.wings[0].rotation.z=i,e.wings[1].rotation.z=-i}}var __=[];function v_(e){for(let t of __){t.t=(t.t+e*.085)%1;let n=t.t;t.sp.position.set(t.s.x+n*3.2+Math.sin(n*5+t.s.z)*.35,t.s.y+n*8.5,t.s.z-n*1.2);let r=1.1+n*4.8;t.sp.scale.set(r,r,1),t.sp.material.opacity=Math.sin(Math.PI*n)*.3}}var y_=[];function b_(){for(let e of y_)e.sp.position.x=e.x+Math.sin(Q.time*.05+e.ph)*4,e.sp.material.opacity=e.base*Ru(8,24,Cd.position.distanceTo(e.sp.position))}function x_(){{let e=Hu(21),t=[],n=Od.clone().normalize(),r=new j(9345968),i=new j,a=new j(15331318),o=new j(3818839);for(let s=0;s<44;s++){let c=s/44*I+e()*.1,l=290+e()*150,u=55+e()*100,d=new Zc(55+e()*70,u,5+Math.floor(e()*3),3);d.scale(1,1,.6+e()*.6),d.rotateY(e()*I),d=d.toNonIndexed(),d.computeVertexNormals(),d.translate(Math.cos(c)*l,u/2-14,Math.sin(c)*l),d.deleteAttribute(`uv`);let f=d.attributes.position,p=d.attributes.normal,m=new Float32Array(f.count*3),h=(l-290)/150,g=.45+e()*.2;for(let e=0;e<f.count;e+=3){let t=((f.getY(e)+f.getY(e+1)+f.getY(e+2))/3+14)/u,s=p.getX(e),c=p.getY(e),l=p.getZ(e);i.copy(t>g&&c>.15?a:o).multiplyScalar(.5+.65*Math.max(0,s*n.x+c*n.y+l*n.z)),i.lerp(r,Iu(.3+h*.3+(1-t)*.25,0,.85));for(let t=0;t<3;t++)m[(e+t)*3]=i.r,m[(e+t)*3+1]=i.g,m[(e+t)*3+2]=i.b}d.setAttribute(`color`,new pr(m,3)),t.push(d)}let s=new M(Mh(t),new ur({vertexColors:!0,fog:!1}));s.frustumCulled=!1,V.add(s)}{if(!gd){let e=Hu(8),t=Math.atan2(Od.z,Od.x);for(let n=0;n<10;n++){let n=e()*I,r=Math.abs(Uu(n,t))<.9,i=new Hs(new Os({map:If.cloud,color:r?15974822:10004162,transparent:!0,opacity:.5+e()*.2,fog:!1,depthWrite:!1}));i.position.set(Math.cos(n)*420,40+e()*70,Math.sin(n)*420);let a=160+e()*140;i.scale.set(a,a*.32,1),Yf.add(i)}}let e=new Hs(new Os({map:If.glow,color:16762010,transparent:!0,opacity:.7,blending:2,fog:!1,depthWrite:!1}));e.position.copy(Od).normalize().multiplyScalar(430),e.scale.set(150,150,1),Yf.add(e)}{let e=Hu(77),t=new Hn,n=new Jl({vertexColors:!0,flatShading:!0}),r=(e,t,n)=>Math.hypot(e,t)>n&&Math.hypot(e-Ud.x,t-Ud.z)>15&&Math.hypot(e-Wd.x,t-Wd.z)>8&&!Sf(e,t),i=[];for(let t=0;t<800&&i.length<(gd?30:60);t++){let t=(e()*2-1)*100,n=(e()*2-1)*100,a=wf(t,n);!r(t,n,28)||a<4||a>16&&e()<.7||i.push([t,n,.8+e()*.5,e()*I])}let a=new $s(u_(),n,i.length);i.forEach(([e,n,r,i],o)=>{t.position.set(e,U(e,n)-.1,n),t.rotation.set(0,i,0),t.scale.setScalar(r),t.updateMatrix(),a.setMatrixAt(o,t.matrix),Sh(`world`,e,n,.16*r)}),a.castShadow=_d,a.receiveShadow=_d,a.frustumCulled=!1,V.add(a);let o=[];for(let t=0;t<900&&o.length<(gd?40:80);t++){let t=(e()*2-1)*105,n=(e()*2-1)*105;!r(t,n,26)||wf(t,n)<3||o.push([t,n,.7+e()*.7,e()*I])}let s=new $s(d_(),n,o.length);o.forEach(([e,n,r,i],a)=>{t.position.set(e,U(e,n)+.2*r,n),t.rotation.set(0,i,0),t.scale.set(r,r*.8,r),t.updateMatrix(),s.setMatrixAt(a,t.matrix),Math.abs(e)<100&&Math.abs(n)<100&&Sh(`world`,e,n,.5*r)}),s.castShadow=_d,s.receiveShadow=_d,s.frustumCulled=!1,V.add(s);let c=[];for(let t=0;t<4e3&&c.length<(gd?160:420);t++){let t=(e()*2-1)*96,n=(e()*2-1)*96,r=Math.hypot(t,n),i=wf(t,n);r<9||Math.hypot(t-Ud.x,n-Ud.z)<11.5||xf(t,n)<1.12||Math.hypot(t-Jd.x,n-Jd.z)<5||(r>11&&r<30||i>1.8&&i<7||Math.hypot(t-Wd.x,n-Wd.z)<12||e()<.12)&&c.push([t,n,.8+e()*.7,e()*I])}let l=new $s(f_(),new Jl({vertexColors:!0}),c.length);c.forEach(([e,n,r,i],a)=>{t.position.set(e,U(e,n)-.05,n),t.rotation.set(0,i,0),t.scale.setScalar(r),t.updateMatrix(),l.setMatrixAt(a,t.matrix)}),l.frustumCulled=!1,V.add(l)}{let e=[],t=[],n=(n,r,i)=>{let a=[];for(let e=r;e<=i+1e-6;e+=2.2/n)a.push([Math.cos(e)*n,Math.sin(e)*n]);a.forEach(([n,r],i)=>{e.push([n,r]),i<a.length-1&&t.push([n,r,a[i+1][0],a[i+1][1]])})};n(24,.17,1.2),n(24,2.7,5.06);let r=new Rr(.16,1.3,.16);Vd(r,.16,1.3,.16,1.5);let i=new Rr(.07,.1,1);Vd(i,.07,.1,1,1.5);let a=new $s(r,G.woodD,e.length),o=new $s(new Rr(.22,.09,.22),G.snow,e.length),s=new $s(i,G.wood,t.length*2),c=new $s(new Rr(.1,.05,1),G.snow,t.length),l=new Hn;e.forEach(([e,t],n)=>{let r=U(e,t);l.position.set(e,r+.55,t),l.updateMatrix(),a.setMatrixAt(n,l.matrix),l.position.y=r+1.24,l.updateMatrix(),o.setMatrixAt(n,l.matrix),Sh(`world`,e,t,.2)}),t.forEach(([e,t,n,r],i)=>{let a=(e+n)/2,o=(t+r)/2,u=Math.hypot(n-e,r-t),d=U(a,o);l.rotation.set(0,Math.atan2(n-e,r-t),0),l.scale.set(1,1,u),l.position.set(a,d+.5,o),l.updateMatrix(),s.setMatrixAt(i*2,l.matrix),l.position.y=d+.95,l.updateMatrix(),s.setMatrixAt(i*2+1,l.matrix),l.position.y=d+1.02,l.updateMatrix(),c.setMatrixAt(i,l.matrix);for(let i=1;i<3;i++)Sh(`world`,e+(n-e)*i/3,t+(r-t)*i/3,.22)});for(let e of[a,o,s,c])e.castShadow=_d,e.receiveShadow=_d,V.add(e)}for(let[e,t,n]of[[0,.3,1],[0,.72,-1],[1,.45,1],[2,.82,-1]]){let[r,i]=Gd[e],[a,o]=Gd[e+1],s=Math.hypot(a-r,o-i),c=r+(a-r)*t+-(o-i)/s*2.4*n,l=i+(o-i)*t+(a-r)/s*2.4*n,u=U(c,l);H(.14,2.6,.14,G.woodD,c,u+1.3,l,V),H(.08,.08,.55,G.woodD,c,u+2.5,l+.22,V);let d=new M(new Rr(.2,.28,.2),Bd(16757340,2.6));d.position.set(c,u+2.25,l+.45),V.add(d),H(.26,.05,.26,G.iron,c,u+2.41,l+.45,V),Bf(V,c,u+2.25,l+.45,2.6,16754768,.5),Sh(`world`,c,l,.2)}for(let e of[-1,1]){let t=sf.x+of.x*2.2+Math.SQRT1_2*2*e,n=sf.z+of.z*2.2+Math.SQRT1_2*2*e,r=U(t,n);H(.55,.9,.55,G.stone,t,r+.45,n,V),Ih(V,t,r+.9,n,.45),Sh(`world`,t,n,.4)}{let e=[];for(let t=0;t<3;t++)for(let n=0;n<4-t;n++)e.push(jh(new Xc(.14,.14,1.4,7).rotateX(Math.PI/2).translate(-.45+n*.3+t*.15,.14+t*.25,0),n%2?6177586:7031864));let t=new M(Mh(e),new Jl({vertexColors:!0,flatShading:!0}));t.position.set(-10.2,0,-5.5),t.rotation.y=Math.PI/2,t.castShadow=_d,V.add(t),Ch(`world`,-10.9,-9.5,-6.2,-4.8);for(let[e,t]of[[12.3,-.8],[12.9,-.1],[-5.6,6.9]]){let n=new M(new Xc(.33,.3,.85,10),G.woodD);n.position.set(e,.43,t),n.castShadow=_d,V.add(n);let r=new M(new Yc(.33,10).rotateX(-Math.PI/2),G.snow);r.position.set(e,.86,t),V.add(r),Sh(`world`,e,t,.35)}for(let[e,t,n]of[[8.4,4.6,.3],[-11.6,6.4,-.4]])H(.8,.6,.8,G.wood,e,.3,t,V).rotation.y=n,H(.84,.08,.84,G.snow,e,.64,t,V).rotation.y=n,Sh(`world`,e,t,.5)}m_=Af(512,512,(e,t,n)=>{let r=e.createRadialGradient(t/2,n/2,20,t/2,n/2,t/2);r.addColorStop(0,`#7fa9c6`),r.addColorStop(.7,`#a9c9dc`),r.addColorStop(1,`#dfeaf2`),e.fillStyle=r,e.fillRect(0,0,t,n);for(let r=0;r<18;r++){let r=W()*t,i=W()*n,a=20+W()*60,o=e.createRadialGradient(r,i,0,r,i,a);o.addColorStop(0,`rgba(40,80,120,.25)`),o.addColorStop(1,`rgba(40,80,120,0)`),e.fillStyle=o,e.fillRect(r-a,i-a,a*2,a*2)}e.strokeStyle=`rgba(255,255,255,.55)`,e.lineWidth=1.5;for(let r=0;r<26;r++){let r=W()*t,i=W()*n;e.beginPath(),e.moveTo(r,i);for(let t=0;t<6;t++)r+=(W()-.5)*70,i+=(W()-.5)*70,e.lineTo(r,i);e.stroke()}for(let r=0;r<40;r++)e.fillStyle=`rgba(240,246,250,${.25+W()*.35})`,e.beginPath(),e.ellipse(W()*t,W()*n,10+W()*40,3+W()*8,W()*3,0,I),e.fill()},!0,!0);{let e=new M(new Yc(1,72).rotateX(-Math.PI/2),new ql({map:m_,color:16777215,specular:14675967,shininess:80}));e.scale.set(Kd.rx*1.02,1,Kd.rz*1.02),e.position.set(Kd.x,-.97,Kd.z),e.receiveShadow=_d,V.add(e);let t=new M(new Yc(.55,18).rotateX(-Math.PI/2),zd(463645));t.position.set(Xd.x,-.955,Xd.z),V.add(t);let n=new M(new Vl(.55,.78,18).rotateX(-Math.PI/2),Rd(15660024));n.position.set(Xd.x,-.95,Xd.z),V.add(n),H(.4,.35,.4,G.wood,Xd.x+1.1,-.8,Xd.z-.5,V);let r=new P;r.position.set(qd.x,U(qd.x,qd.z),qd.z),V.add(r);let i=new M(new Zc(1.6,2.4,6,1,!0),Rd(10127980,{side:2,flatShading:!0}));i.position.set(-2.2,.9,1.2),i.rotation.set(.9,.4,.3),i.castShadow=_d,r.add(i);for(let e of[-1,1]){let t=H(.1,1.8,.1,G.woodD,1.6+e*.9,.9,-1.4,r);t.rotation.z=e*.08}let a=H(2,.08,.08,G.woodD,1.6,1.7,-1.4,r);a.rotation.z=.35;for(let e=0;e<3;e++){let t=new M(new Zc(.08,.45,5).rotateX(Math.PI),Rd(9412779,{flatShading:!0}));t.position.set(1+e*.45,1.35+e*.12,-1.4),r.add(t)}H(.8,.15,1.8,G.wood,-.6,.2,-2.2,r).rotation.set(.2,.7,.9);for(let e=0;e<3;e++){let t=H(.12,.12,.9,G.woodD,.3+Math.cos(e)*.5,.06,.8+Math.sin(e*2)*.4,r);t.rotation.y=e*1.3}let o=new M(new Xc(.3,.28,.8,10),G.woodD);o.position.set(2.2,.3,1),o.rotation.z=Math.PI/2,r.add(o),Sh(`world`,qd.x-2.2,qd.z+1.2,1.2),Sh(`world`,qd.x+1.6,qd.z-1.4,.6),Sh(`world`,qd.x+2.2,qd.z+1,.4),p_=Ih(V,qd.x+.3,U(qd.x+.3,qd.z+.8),qd.z+.8,.7),p_.visible=!1;let s=U(Jd.x,Jd.z+6.5),c=new P;c.position.set(Jd.x,s-.4,Jd.z+6.8),V.add(c),H(1.4,4.6,1.6,G.rstone,-2.1,2.1,0,c).rotation.z=.12,H(1.4,4.6,1.6,G.rstone,2.1,2.1,0,c).rotation.z=-.12,H(5.8,1.3,1.9,G.rstone,0,4.4,0,c),H(3.2,3.8,.3,zd(263947),0,1.9,.4,c),H(6.2,.35,2.1,G.snow,0,5.15,0,c);for(let e=0;e<9;e++){let e=H(.45*W()+.25,.07,.09,G.bone,Jd.x-3+W()*6,U(Jd.x,Jd.z)+.04,Jd.z+1+W()*4,V);e.rotation.y=W()*I,e.castShadow=!1}H(.18,2,.18,G.woodD,Jd.x+5.2,U(Jd.x+5.2,Jd.z+3.4)+.9,Jd.z+3.4,V);let l=new M(new Xc(.22,.22,1.3,8).rotateZ(Math.PI/2),G.woodD);l.position.set(Jd.x+5.2,U(Jd.x+5.2,Jd.z+2.7)+.2,Jd.z+2.7),V.add(l),Sh(`world`,Jd.x-2.1,Jd.z+6.8,1),Sh(`world`,Jd.x+2.1,Jd.z+6.8,1),Ch(`world`,Jd.x-1.6,Jd.z+1.6,Jd.z+6.2,Jd.z+7.8);for(let[e,t]of[[-11.5,24.5],[-9.5,38]]){let n=U(e,t);H(.14,2.6,.14,G.woodD,e,n+1.3,t,V);let r=new M(new Rr(.2,.28,.2),Bd(16757340,2.6));r.position.set(e,n+2.35,t+.25),V.add(r),Bf(V,e,n+2.35,t+.25,2.4,16754768,.5),Sh(`world`,e,t,.2)}}{let e=Rd(1316379,{flatShading:!0,side:2});for(let t=0;t<3;t++){let n=new P;V.add(n);let r=new M(new Zc(.12,.6,5).rotateX(Math.PI/2),e);n.add(r);let i=[];for(let t of[-1,1]){let r=new P;r.position.x=t*.05,n.add(r);let a=new M(new fi(.7,.28).translate(t*.35,0,0).rotateX(-Math.PI/2),e);r.add(a),i.push(r)}h_.push({g:n,wings:i,r:9+t*4,h:13+t*2.5,sp:.25+t*.07,ph:t*2.1})}}if(!gd)for(let e of Vf)for(let t=0;t<6;t++){let n=new Hs(new Os({map:If.smoke,color:9279139,transparent:!0,opacity:0,depthWrite:!1}));V.add(n),__.push({sp:n,s:e,t:t/6})}if(!gd){let e=Hu(5);for(let t=0;t<(hd?24:14);t++){let t=(e()*2-1)*92,n=(e()*2-1)*92,r=new Hs(new Os({map:If.smoke,color:13884648,transparent:!0,opacity:0,depthWrite:!1})),i=20+e()*16;r.scale.set(i,i*.4,1),r.position.set(t,U(t,n)+1.8,n),V.add(r),y_.push({sp:r,x:t,ph:e()*I,base:.2+e()*.12})}}}var S_=[0,3,5,7,10],C_=146.83,w_=e=>C_*2**((S_[(e%5+5)%5]+12*Math.floor(e/5))/12),T_={explore:{step:.42,mel:.24,oct:0,drone:.05,drums:0},night:{step:.5,mel:.12,oct:-5,drone:.045,drums:0},dungeon:{step:.5,mel:.07,oct:-5,drone:.085,drums:0},combat:{step:.27,mel:.55,oct:-5,drone:.065,drums:1}},E_={mood:`explore`,step:0,nextT:0,deg:5,combatHold:0},D_,O_,k_,A_;function j_(){let e=R.ctx;D_=e.createGain(),D_.gain.value=(L.music??.6)*.5,D_.connect(R.out);let t=e.createDelay(1.5),n=e.createGain(),r=e.createGain();t.delayTime.value=.42,n.gain.value=.38,r.gain.value=.5,O_=e.createGain(),O_.gain.value=.35,O_.connect(t),t.connect(n),n.connect(t),t.connect(r),r.connect(D_),k_=e.createGain(),k_.gain.value=0,A_=e.createBiquadFilter(),A_.type=`lowpass`,A_.frequency.value=360;for(let[t,n]of[[73.42,-6],[110,5]]){let r=e.createOscillator();r.type=`sawtooth`,r.frequency.value=t,r.detune.value=n,r.connect(A_),r.start()}A_.connect(k_),k_.connect(D_),E_.nextT=e.currentTime+.1}function M_(e){L.music=e,D_&&D_.gain.setTargetAtTime(e*.5,R.ctx.currentTime,.1)}function N_(e,t,n,r=1.6){let i=R.ctx,a=i.createOscillator(),o=i.createOscillator(),s=i.createGain(),c=i.createBiquadFilter();a.type=`triangle`,a.frequency.value=e,o.type=`sine`,o.frequency.value=e*2.01,c.type=`lowpass`,c.frequency.setValueAtTime(3200,t),c.frequency.exponentialRampToValueAtTime(700,t+r),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(n,t+.008),s.gain.exponentialRampToValueAtTime(1e-4,t+r);let l=i.createGain();l.gain.value=.25,o.connect(l),l.connect(s),a.connect(s),s.connect(c),c.connect(D_),c.connect(O_),a.start(t),o.start(t),a.stop(t+r+.05),o.stop(t+r+.05)}function P_(e,t,n){let r=R.ctx;for(let[i,a]of[[1,1],[2.76,.35],[5.4,.12]]){let o=r.createOscillator(),s=r.createGain();o.type=`sine`,o.frequency.value=e*i,s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(n*a,t+.01),s.gain.exponentialRampToValueAtTime(1e-4,t+3),o.connect(s),s.connect(D_),s.connect(O_),o.start(t),o.stop(t+3.1)}}function F_(e,t){let n=R.ctx,r=n.createOscillator(),i=n.createGain();r.type=`sine`,r.frequency.setValueAtTime(t?92:150,e),r.frequency.exponentialRampToValueAtTime(t?42:75,e+.3),i.gain.setValueAtTime(t?.55:.28,e),i.gain.exponentialRampToValueAtTime(1e-4,e+(t?.38:.22)),r.connect(i),i.connect(D_),r.start(e),r.stop(e+.42);let a=n.createBufferSource(),o=n.createBiquadFilter(),s=n.createGain();a.buffer=R.noise,o.type=`lowpass`,o.frequency.setValueAtTime(t?380:900,e),o.frequency.exponentialRampToValueAtTime(110,e+.18),s.gain.setValueAtTime(t?.25:.14,e),s.gain.exponentialRampToValueAtTime(1e-4,e+.18),a.connect(o),o.connect(s),s.connect(D_),a.start(e,Math.random()*.5),a.stop(e+.2)}function I_(e){let t=T_[E_.mood],n=E_.step++;if(E_.mood===`combat`){n%4==0&&F_(e,!0),(n%8==6||n%4==2&&Math.random()<.3)&&F_(e,!1),n%2==0&&Math.random()<t.mel&&N_(w_([0,0,3,2,0,4,3,1][n/2%8]+t.oct),e,.11,.5);return}if(E_.mood===`dungeon`){if(Math.random()<t.mel){let t=w_(Math.floor(Math.random()*5)+5);P_(t,e,.05),Math.random()<.4&&P_(t*Math.SQRT2,e+.9,.03)}return}Math.random()<t.mel&&(E_.deg=Math.max(2,Math.min(11,E_.deg+[-2,-1,-1,1,1,2,0][Math.floor(Math.random()*7)])),N_(w_(E_.deg+t.oct),e,E_.mood===`night`?.07:.09),Math.random()<.18&&N_(w_(E_.deg+t.oct-5),e,.05,2.4)),n%32==0&&N_(w_(t.oct),e,.06,4)}function L_(e,t){if(!R.ctx||R.ctx.state!==`running`)return;D_||j_(),t===`combat`?E_.combatHold=4:E_.combatHold>0&&(E_.combatHold-=e,t=`combat`),t!==E_.mood&&(E_.mood=t,E_.step=0);let n=R.ctx.currentTime,r=T_[E_.mood];if(k_.gain.setTargetAtTime(L.muted?0:r.drone,n,1.2),A_.frequency.setTargetAtTime(E_.mood===`dungeon`?240:E_.mood===`combat`?520:360,n,1.2),L.muted||(L.music??.6)<=0){E_.nextT=n+.1;return}for(E_.nextT<n&&(E_.nextT=n+.05);E_.nextT<n+.3;)I_(E_.nextT),E_.nextT+=r.step}var R_=null,z_=!1,B_=e=>`<path d="${e}"/>`,V_={sword:B_(`M19 5 9.5 14.5M19 5h-3.2M19 5v3.2M7.5 12.5l4 4M9.5 14.5 5 19`),dagger:B_(`M17 7l-6 6M17 7h-2.4M17 7v2.4M9 11l4 4M11 13l-4.5 4.5`),axe:B_(`M5 19 15.5 8.5`)+B_(`M13 5.5c2.6-.6 5 .3 6.5 2.8L15 12.8c-.9-2.3-2.6-3.6-4.8-4.3z`),mace:B_(`M5 19l8-8`)+`<circle cx="15.5" cy="8.5" r="3.2"/>`+B_(`M15.5 3.6v1.7M20.4 8.5h-1.7M19 5l-1.2 1.2`),greataxe:B_(`M4 20 16.5 7.5`)+B_(`M12 4c3-1 6.5.3 8 3.6s.7 5.6-1.5 6.9L12 8z`),greatsword:B_(`M20.5 3.5 8 16M20.5 3.5h-3.5M20.5 3.5V7M5.5 13.5l5 5M8 16l-4.5 4.5`),shield:`<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.2"/>`+B_(`M12 4v5.8M12 14.2V20`),helm:B_(`M5 15.5a7 7 0 0 1 14 0V18H5z`)+B_(`M12 8.5V18M9 13h6`),cap:B_(`M5.5 14a6.5 6.5 0 0 1 13 0`)+B_(`M4 14.5h16v3H4z`),body:B_(`M8.5 4 4.5 6.5V12l2.5 1v7h10v-7l2.5-1V6.5L15.5 4c-.8 1.8-2 2.7-3.5 2.7S9.3 5.8 8.5 4z`),bow:B_(`M7 3.5c7.5 2.5 7.5 14.5 0 17`)+B_(`M7 3.5v17`),arrows:B_(`M5 19 18 6M18 6h-3.5M18 6v3.5M5 19l1.5-3.5M5 19l3.5-1.5M8 20l12-12M20 8v2.5`)};function H_(e){return e.slot===`weapon`?e.cls===`great`?e.look.model===`greatsword`?`greatsword`:`greataxe`:e.cls:e.slot===`head`?e.heavy?`helm`:`cap`:e.slot}var U_=e=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${V_[e]}</svg>`,W_={weapon:`sword`,shield:`shield`,head:`helm`,body:`body`,bow:`bow`},G_=e=>e>=1.3?`Çok hızlı`:e>=1?`Hızlı`:e>=.85?`Orta`:`Yavaş`,K_=(e,t,n=!1)=>{if(t==null)return``;let r=Math.round(n?(e-t)*100:e-t);return r===0?``:`<span class="cmp ${r>0?`up`:`down`}">${r>0?`+`:``}${r}${n?`%`:``} ${r>0?`▲`:`▼`}</span>`},q_=e=>1+((e.slot===`bow`?Z.skills.archery.lvl:Z.skills.onehand.lvl)-15)*.04;function J_(e,t){let n=fm(e.slot),r=n&&n!==t?n:null,i=t=>(t?gm(t):e.dmg)*q_(e),a=t=>t?_m(t):e.armor||0;if(e.slot===`bow`)return`<dt>Hasar (tam gerilim)</dt><dd>${Math.round(i(t))}${K_(i(t),r?gm(r)*q_(e):null)}</dd><dt>Germe süresi</dt><dd>${e.draw.toFixed(1)} sn</dd><dt>Ok hızı</dt><dd>${e.vel>=40?`Yüksek`:`Orta`}</dd>`;if(e.slot===`weapon`){let n=wp[e.cls];return`<dt>Hasar</dt><dd>${Math.round(i(t))}${K_(i(t),r?gm(r)*q_(e):null)}</dd><dt>Hız</dt><dd>${G_(n.speed)}</dd><dt>Menzil</dt><dd>${n.reach>=1.2?`Uzun`:n.reach<.9?`Kısa`:`Orta`}</dd><dt>Gizli saldırı</dt><dd>×${n.sneak}</dd>`}let o=`<dt>Zırh</dt><dd>${a(t)}${K_(a(t),r?_m(r):n===t?null:0)}</dd>`;return e.slot===`shield`?`<dt>Blok</dt><dd>%${Math.round(e.block*100)}${K_(e.block,r?um(r).block:null,!0)}</dd>`+o:o}function Y_(e){return e.slot===`bow`?`Yay · uzak menzil`:e.slot===`weapon`?`${wp[e.cls].name}${wp[e.cls].twoHand?` · iki elli`:` · tek el`}`:e.slot===`shield`?`Kalkan`:`${e.heavy?`Ağır`:`Hafif`} ${e.slot===`head`?`başlık`:`gövde zırhı`}`}function X_(e){if(e.slot===`weapon`||e.slot===`bow`)return wp[e.cls].trait;if(e.slot===`shield`)return`Blok yaparken gelen hasarın bu oranını durdurur. Kalkansız da blok yapabilirsin ama daha az korur.`;let t=Jp[e.id]?` Sıcak tutar (${Jp[e.id]}): fırtınada toplam 2 sıcaklık üşümeni önler.`:``;return(e.heavy?`Ağır: gizlilikte daha kolay duyulursun, yuvarlanmak daha çok güç harcar.`:`Hafif: gizliliğe ve harekete engel olmaz.`)+t}var Z_=e=>e?.rune?`<p class="rnl" style="--rc:${Vp[e.rune].css}"><b>${Vp[e.rune].name} rünü:</b> ${Vp[e.rune].desc}</p>`:``,Q_=(e,t=0)=>[...Object.entries(e).map(([e,t])=>`<span class="${Ym(e)>=t?`ok`:`lack`}">${Ip[e]} ${Ym(e)}/${t}</span>`),t?`<span class="${Z.inv.gold>=t?`ok`:`lack`}">${t} altın</span>`:``].filter(Boolean).join(``);function $_(e,t,n){let r=``;if(n===`shop`){if(e.up<bm()){let n=xm(e);r+=`<button class="btn small" data-act="upgrade" ${Z.inv.gold<n?`disabled`:``}>İyileştir · +${Ap[t.slot]} ${t.slot===`weapon`||t.slot===`bow`?`hasar`:`zırh`} · ${n} altın</button>`}else r+=`<small class="why">En iyi hâlinde</small>`;pm(e)||(r+=`<button class="btn small" data-act="sell">Sat · ${vm(e)} altın</button>`)}else if(n===`forge`){if(e.up<bm()){let t=rh(e);r+=`<button class="btn small" data-act="forgeup" ${Z.inv.iron<t?`disabled`:``}>Demirle iyileştir · ${t} külçe</button>`}else r+=`<small class="why">En iyi hâlinde</small>`}else if(n===`rune`){if(!ah(e))r+=`<small class="why">Rün yalnızca silaha ve yaya işlenir</small>`;else for(let[t,n]of Object.entries(Vp)){let i=e.rune===t,a=Zm(n.mats,n.gold);r+=`<button class="btn small rbtn" data-rune="${t}" style="--rc:${n.css}" ${i||!a?`disabled`:``}><b>${n.name}</b>${i?` · işli`:``}<small>${n.desc}</small><span class="cost">${Q_(n.mats,n.gold)}</span></button>`}}return r}function ev(e){if(!R_)return``;if(R_.src===`slot`)return`<h4 style="--tc:var(--muted)">${Cp[R_.slot]} · boş</h4><p class="trait">Çantandan bir ${Cp[R_.slot].toLocaleLowerCase(`tr-TR`)} seçip kuşanabilirsin. Eşyalar draugr'lardan, sandıklardan, Bjorn'den ve demirhaneden gelir.</p>`;if(R_.src===`recipe`){let e=Rp[R_.i],t=th(e);if(e.arrows)return`<h4 style="--tc:var(--frost)">Ok ×${e.arrows}</h4><p class="ity">Mühimmat · elinde ${Z.inv.arrows} ok</p><p class="cost">${Q_(eh(e),e.gold)}</p><div class="iact"><button class="btn small primary" data-act="craft" ${t?`disabled`:``}>Döv</button>${t?`<small class="why">${t}</small>`:``}</div>`;let n=Mp[e.id];return`<h4 style="--tc:${Sp[n.tier]}">${n.name}</h4><p class="ity">${Y_(n)}${mm(e.id)?` · çantanda var`:``}</p><dl class="kv">${J_(n,null)}</dl><p class="trait">${X_(n)}</p><p class="cost">${Q_(eh(e),e.gold)}${e.smith?`<span class="${$m()>=e.smith?`ok`:`lack`}">Demircilik ${e.smith}</span>`:``}</p><div class="iact"><button class="btn small primary" data-act="craft" ${t?`disabled`:``}>Döv</button>${t?`<small class="why">${t}</small>`:``}</div>`}let t=R_.src===`bag`?dm(R_.uid):null,n=t?um(t):Mp[R_.id],r=t?hm(t):n.name,i=t&&pm(t),a=``;if(!t)a=`<button class="btn small primary" data-act="buy" ${Z.inv.gold<ym(n)?`disabled`:``}>Satın al · ${ym(n)} altın</button>${Z.inv.gold<ym(n)?`<small class="why">Altının yetmiyor</small>`:``}`;else{if(i)a+=n.slot===`weapon`?`<small class="why">Kuşanılı. Silah yuvası boş kalamaz; başka bir silah kuşan.</small>`:`<button class="btn small" data-act="unequip">Çıkar</button>`;else{let e=n.slot===`shield`&&Em();a+=`<button class="btn small primary" data-act="equip" ${e?`disabled`:``}>Kuşan</button>${e?`<small class="why">İki elli silahla kalkan kullanılamaz</small>`:``}`}e?a+=$_(t,n,e):i||(a+=`<button class="btn small ghost" data-act="drop">${z_?`Emin misin? Tekrar bas`:`At`}</button>`)}let o=t&&!e?`<p class="ival">Satış değeri: ${vm(t)} altın</p>`:``;return`<h4 style="--tc:${Sp[n.tier]}">${r}</h4><p class="ity">${Y_(n)}${i?` · <b>kuşanılı</b>`:``}</p><dl class="kv">${J_(n,t)}</dl>${Z_(t)}<p class="trait">${X_(n)}</p>${o}<div class="iact">${a}</div>`}var tv=e=>!!R_&&R_.src===e.src&&Object.keys(e).every(t=>R_[t]===e[t]),nv=e=>e.rune?`<i class="rnb" style="background:${Vp[e.rune].css}"></i>`:``;function rv(e){let t=um(e);return`<button class="itile${tv({src:`bag`,uid:e.uid})?` sel`:``}" data-bag="${e.uid}" style="--tc:${Sp[t.tier]}" aria-label="${hm(e)}" title="${hm(e)}">${U_(H_(t))}${e.up?`<i class="upb">+${e.up}</i>`:``}${nv(e)}</button>`}function iv(e){let t=fm(e),n=tv(t?{src:`bag`,uid:t.uid}:{src:`slot`,slot:e});return t?`<button class="slot${n?` sel`:``}" data-bag="${t.uid}" style="--tc:${Sp[um(t).tier]}"><small>${Cp[e]}</small>${U_(H_(um(t)))}<span>${hm(t)}</span>${nv(t)}</button>`:`<button class="slot empty${n?` sel`:``}" data-slot="${e}"><small>${Cp[e]}</small>${U_(W_[e])}<span>Boş</span></button>`}var av=()=>(Z.side.pass??0)>=5?8:12,ov=()=>`<p class="mats">${[`iron`,`frost`,`hide`,`pelts`,`herbs`].map(e=>`<span>${Ip[e]} <b>${Ym(e)}</b></span>`).join(``)}<span>Ok <b>${Z.inv.arrows}</b></span></p>`;function sv(e){if(e===`shop`){let e=Hm();return`<h3 class="sethead">Bjorn'ün tezgâhı <small>· kesende ${Z.inv.gold} altın</small></h3>
      <div class="buyrow"><button class="btn small" data-buy="iron" ${Z.inv.gold<av()?`disabled`:``}>Demir külçesi · ${av()} altın</button><button class="btn small" data-buy="arrows" ${Z.inv.gold<Kp.price?`disabled`:``}>Ok ×${Kp.n} · ${Kp.price} altın</button></div>
      ${e.length?`<div class="igrid">${e.map(e=>{let t=Mp[e];return`<button class="itile${tv({src:`shop`,id:e})?` sel`:``}" data-shop="${e}" style="--tc:${Sp[t.tier]}" aria-label="${t.name}" title="${t.name}">${U_(H_(t))}<i class="prc">${ym(t)}</i></button>`}).join(``)}</div>`:`<p class="empty">Tezgâhta sana satacak bir şey kalmadı.</p>`}`}return e===`forge`?`<h3 class="sethead">Demirhane <small>· Demircilik ${$m()}</small></h3>${ov()}
      <div class="igrid">${Rp.map((e,t)=>{let n=Mp[e.id],r=n?Sp[n.tier]:`var(--frost)`;return`<button class="itile${th(e)?` lack`:``}${tv({src:`recipe`,i:t})?` sel`:``}" data-recipe="${t}" style="--tc:${r}" aria-label="${n?n.name:`Ok`}" title="${n?n.name:`Ok`}">${U_(n?H_(n):`arrows`)}${e.arrows?`<i class="prc">${e.arrows}</i>`:``}</button>`}).join(``)}</div>
      <p class="empty">Demir damarlarını kaz, ayaz kristallerini topla. Dövdükçe Demircilik gelişir; 25'te dövülen eşyalar +1, 35'te +2 iyileştirilmiş çıkar.</p>`:e===`rune`?`<h3 class="sethead">Rün işleme <small>· Sigrun</small></h3>${ov()}<p class="empty">Bir silah ya da yay seç. Yeni rün eskisinin yerini alır.</p>`:``}function cv(){R_=null,z_=!1}function lv(e,t,n){R_?.src===`bag`&&!dm(R_.uid)&&(R_=null),R_?.src===`shop`&&(t!==`shop`||mm(R_.id))&&(R_=null),R_?.src===`recipe`&&t!==`forge`&&(R_=null),R_||={src:`bag`,uid:Z.inv.eq.weapon};let r=Z.inv.items.filter(e=>!pm(e)).sort((e,t)=>lm.indexOf(um(e).slot)-lm.indexOf(um(t).slot)||um(t).tier-um(e).tier),i=jm();e.innerHTML=`<div class="inv"><div class="invMain">
    <div class="eqrow">${lm.map(iv).join(``)}</div>
    <div class="istats"><span>Hasar <b>${Math.round(Dm())}</b></span><span>Zırh <b>${Om()}</b> <small>(hasarı %${Math.round(km()*100)} azaltır)</small></span><span>Blok <b>%${Math.round(Am()*100)}</b></span>${fm(`bow`)?`<span>Ok <b>${Z.inv.arrows}</b></span>`:``}${i?`<span class="hv">Ağır zırh${i>1?` ×${i}`:``}</span>`:``}</div>
    ${sv(t)}
    <h3 class="sethead">Çanta${r.length?` · ${r.length}`:``}</h3>${r.length?`<div class="igrid">${r.map(rv).join(``)}</div>`:`<p class="empty">Çantan boş. Draugr'lardan, sandıklardan, Bjorn'den ve demirhaneden silah ve zırh edinebilirsin.</p>`}
    <h3 class="sethead">Diğer</h3><dl class="kv"><dt>Altın</dt><dd>${Z.inv.gold}</dd><dt>Ok</dt><dd>${Z.inv.arrows}</dd><dt>Şifa iksiri</dt><dd>${Z.inv.potions}</dd><dt>Maymuncuk</dt><dd>${Z.inv.picks}</dd><dt>Demir külçesi</dt><dd>${Z.inv.iron}</dd><dt>Ayaz kristali</dt><dd>${Z.inv.frost}</dd><dt>Pişmiş et</dt><dd>${Z.inv.cooked}${Z.inv.cooked>0?` <button class="btn small mini" data-eat>Ye</button>`:``}</dd><dt>Çiğ et</dt><dd>${Z.inv.meat}</dd><dt>Kar çiçeği</dt><dd>${Z.inv.herbs}</dd><dt>Kurt postu</dt><dd>${Z.inv.pelts}</dd><dt>Geyik postu</dt><dd>${Z.inv.hide}</dd><dt>Balık</dt><dd>${sb()} · ${cb()} altın değerinde</dd>${Z.inv.rod?`<dt>Alet</dt><dd>Olta</dd>`:``}${Z.inv.rune?`<dt>Görev eşyası</dt><dd style="color:var(--rune)">Ata Rünü</dd>`:``}</dl>
  </div><aside class="idet" aria-live="polite">${ev(t)}</aside></div>`;let a=e=>{R_=e,z_=!1,z(`ui`),n()},o=()=>{z_=!1,ib(!0),n()};e.querySelectorAll(`[data-bag]`).forEach(e=>e.addEventListener(`click`,()=>a({src:`bag`,uid:Number(e.dataset.bag)}))),e.querySelectorAll(`[data-shop]`).forEach(e=>e.addEventListener(`click`,()=>a({src:`shop`,id:e.dataset.shop}))),e.querySelectorAll(`[data-slot]`).forEach(e=>e.addEventListener(`click`,()=>a({src:`slot`,slot:e.dataset.slot}))),e.querySelectorAll(`[data-recipe]`).forEach(e=>e.addEventListener(`click`,()=>a({src:`recipe`,i:Number(e.dataset.recipe)}))),e.querySelectorAll(`[data-buy]`).forEach(e=>e.addEventListener(`click`,()=>{e.dataset.buy===`iron`&&Z.inv.gold>=av()?(Z.inv.gold-=av(),Z.inv.iron++,z(`gold`)):e.dataset.buy===`arrows`&&Z.inv.gold>=Kp.price&&(Z.inv.gold-=Kp.price,Z.inv.arrows+=Kp.n,z(`gold`)),o()})),e.querySelectorAll(`[data-eat]`).forEach(e=>e.addEventListener(`click`,()=>{c_(),o()})),e.querySelectorAll(`[data-rune]`).forEach(e=>e.addEventListener(`click`,()=>{let t=R_?.src===`bag`?dm(R_.uid):null;t&&oh(t,e.dataset.rune)&&X(`${Vp[e.dataset.rune].name} rünü işlendi: ${hm(t)}`,`skill`),o()})),e.querySelectorAll(`[data-act]`).forEach(e=>e.addEventListener(`click`,()=>{let t=R_?.src===`bag`?dm(R_.uid):null,r=e.dataset.act;if(r===`buy`&&R_?.src===`shop`){let e=Bm(R_.id);e&&(X(`Satın alındı: ${um(e).name}`),R_={src:`bag`,uid:e.uid})}else if(r===`craft`&&R_?.src===`recipe`){let e=Rp[R_.i],t=nh(e);t?(X(`Dövüldü: ${hm(t)}`,`loot t`+um(t).tier),R_={src:`bag`,uid:t.uid}):e.arrows&&X(`Ok ×${e.arrows}`)}else if(r===`equip`&&t)Im(t);else if(r===`unequip`&&t)Lm(um(t).slot);else if(r===`upgrade`&&t)Vm(t)&&X(hm(t));else if(r===`forgeup`&&t)ih(t)&&X(hm(t));else if(r===`sell`&&t){let e=zm(t);e&&(X(`${e} altın`),R_=null)}else if(r===`drop`&&t){if(!z_){z_=!0,n();return}Rm(t)&&(X(`Atıldı: ${hm(t)}`),R_=null)}o()}))}var uv=null;function dv(){let e=Object.keys(Z.skills);uv||=rm.find(e=>om(e).st===`open`)?.id||rm[0].id;let t=am(uv),n=om(t);return`<h3 class="sethead" style="margin-top:20px">Yetenek ağacı <small>· ${Z.perkPts||0} özellik puanı</small></h3>
    <div class="ptree">${e.map(e=>`<div class="prow"><span>${Xp[e]} <b>${Z.skills[e].lvl}</b></span>${rm.filter(t=>t.skill===e).map(e=>`<button class="perk ${om(e).st}${e.id===uv?` sel`:``}" data-perk="${e.id}" aria-label="${e.name}"><i>${e.req}</i>${e.name}</button>`).join(`<em>›</em>`)}</div>`).join(``)}</div>
    <div class="pdet"><b>${t.name}</b> <small>${Xp[t.skill]} ${t.req}</small><p>${t.desc}</p>${n.st===`taken`?`<small class="ok">Öğrenildi</small>`:n.st===`open`?`<button class="btn small primary" data-learn>Öğren · 1 puan</button>`:`<small class="why">${n.reason}</small>`}</div>`}function fv(e,t){e.querySelectorAll(`[data-perk]`).forEach(e=>e.addEventListener(`click`,()=>{uv=e.dataset.perk,z(`ui`),t()})),e.querySelector(`[data-learn]`)?.addEventListener(`click`,()=>{sm(uv)&&(X(`Özellik: ${am(uv).name}`,`skill`),ib(!0)),t()})}function pv(){Z.pendingLevels<=0||Q.mode!==`play`||(Y.locked&&document.exitPointerLock?.(),Q.mode=`levelup`,Sb(),F(`#luLvl`).textContent=Z.charLvl+1,F(`#levelup`).hidden=!1,Qx(F(`#levelup`)),lS(),fd||F(`#levelup .opt`).focus({preventScroll:!0}))}function mv(){F(`#levelup`).hidden=!0,Q.mode=`play`,lS()}function hv(e){tm(e),z(`level`),mv(),ib()}function gv(){Y.locked&&document.exitPointerLock?.();let e=Math.floor(Z.stats.time/60),t=Math.floor(Z.stats.time%60);F(`#vStats`).innerHTML=[[`${e}:${String(t).padStart(2,`0`)}`,`SÜRE`],[Z.stats.kills,`YENİLEN`],[Z.stats.sneakAtk,`GİZLİ SALDIRI`],[Z.charLvl,`SEVİYE`],[Z.inv.gold,`ALTIN`]].map(([e,t])=>`<div><b>${e}</b><span>${t}</span></div>`).join(``),Q.mode=`victory`,Sb(),F(`#victory`).hidden=!1,Qx(F(`#victory`)),lS()}var _v=`char`,vv=!1,yv=null;function bv(e){Q.mode===`play`&&(Y.locked&&document.exitPointerLock?.(),Q.mode=`menu`,Sb(),e&&(_v=e),vv=!1,F(`#mReset`).textContent=`Yeni oyun`,cv(),Tv(),F(`#menu`).hidden=!1,Qx(F(`#menu`)),lS())}function xv(){F(`#menu`).hidden=!0,yv=null,Q.mode=`play`,lS()}function Sv(){yv=`shop`,bv(`inv`)}function Cv(){yv=`forge`,bv(`inv`)}function wv(){yv=`rune`,bv(`inv`)}function Tv(){document.querySelectorAll(`.tab`).forEach(e=>e.setAttribute(`aria-selected`,String(e.dataset.tab===_v)));let e=F(`#menuBody`);if(_v===`char`){e.innerHTML=`<dl class="kv"><dt>Seviye</dt><dd>${Z.charLvl}${Z.pendingLevels?` <span style="color:var(--rune)">(+${Z.pendingLevels} seçim bekliyor)</span>`:``}</dd><dt>Can</dt><dd>${Math.ceil(Z.hp)} / ${Z.maxHp}</dd><dt>Dayanıklılık</dt><dd>${Math.floor(Z.st)} / ${Z.maxSt}</dd><dt>Rün gücü</dt><dd>×${Z.runeMult.toFixed(2)} · ${Z.runeCdMax.toFixed(1)} sn</dd></dl>
      <h3 style="font:600 13px var(--head);letter-spacing:.2em;color:var(--muted);margin:18px 0 6px">YETENEKLER · KULLANDIKÇA GELİŞİR</h3>`+Object.entries(Z.skills).map(([e,t])=>`<div class="sk"><span>${Xp[e]}</span><b>${t.lvl}</b><div class="bar"><i style="transform:scaleX(${(t.xp/$p(t.lvl)).toFixed(3)})"></i></div></div>`).join(``)+`<p style="font-size:13.5px;color:var(--muted);margin:10px 0 0">Her 3 yetenek artışında bir seviye atlarsın. Gizli saldırı, blok, kilit açma ve rün kullanımı ilgili yeteneği geliştirir.</p>`+(Z.pendingLevels?`<button class="btn small" id="mLevel" style="margin-top:12px">Seviye seçimini yap</button>`:``)+dv();let t=F(`#mLevel`);t&&t.addEventListener(`click`,()=>{xv(),pv()}),fv(e,Tv)}else if(_v===`inv`)lv(e,yv,Tv);else if(_v===`quest`){let t=[`Isvik'te Sigrun ile konuş`,`Ata Höyüğü'ne git`,`Höyüğün derinliklerine in`,`Höyük Kralı'nı yen, Ata Rünü'nü al`,`Höyükten çık`,`Rünü Sigrun'a götür`],n=[0,1,2,3,4,5,5][Math.min(Z.stage,6)];e.innerHTML=`<div class="qs"><h3>Ata Rünü</h3>${t.map((e,t)=>`<div class="${t<n||Z.stage>=6?`done`:``}">${t===n&&Z.stage<6?`▸ `:``}${e}</div>`).join(``)}</div>`+(Z.side.ulf>0?`<div class="qs" style="margin-top:16px"><h3>Kayıp Balıkçı</h3>${[`Kuzgun Gölü'ndeki kampa git`,`Trol izlerini takip et`,`Buz Trolü'nü yen`,`Ulf'u çöz`,`Hakon'a haber ver`].map((e,t)=>`<div class="${t+1<Z.side.ulf?`done`:``}">${t+1===Z.side.ulf?`▸ `:``}${e}</div>`).join(``)}</div>`:``)+((Z.side.pass??0)>0?`<div class="qs" style="margin-top:16px"><h3>Demir Geçidi</h3>${[`Doğu yolundaki yağmalanmış kervanı incele`,`İzleri Demir Geçidi'ndeki gözcü kulesine takip et`,`Kızıl Kalkan kampına sız: Eirik'i kurtar, Halvar'ı yen`,`Astrid'e dön`].map((e,t)=>`<div class="${t+1<Z.side.pass?`done`:``}">${t+1===Z.side.pass?`▸ `:``}${e}</div>`).join(``)}</div>`:``)+`<div class="qs" style="margin-top:16px"><h3>İlan tahtası</h3>${Z.bounty?`${Zp[Z.bounty.tpl].title} · ${Z.bounty.done?`tamamlandı, ödül tahtada`:Z.bounty.tpl===`herbs`?`${Math.min(Z.inv.herbs,4)}/4 çiçek`:Z.bounty.tpl===`fish`?`${Math.min(sb(),3)}/3 balık`:`${Z.bounty.count}/${Zp[Z.bounty.tpl].need}`}`:`Aktif ilan yok. Köydeki tahtadan yeni iş alabilirsin; her seferinde farklı bir iş çıkar.`}</div>`}else{let t=(e,t)=>e===`sens`?`×`+Number(t).toFixed(1):Math.round(t*100)+`%`;L.music??=.6;let n=(e,t)=>`<div class="seg">${t.map(([t,n])=>`<button data-pref="${e}" data-val="${t}" aria-pressed="${String(L[e])===String(t)}">${n}</button>`).join(``)}</div>`,r=e=>n(e,[[!0,`Açık`],[!1,`Kapalı`]]),i=(e,n,r,i)=>`<div class="ctl"><input type="range" id="pref-${e}" data-range="${e}" min="${n}" max="${r}" step="${i}" value="${L[e]}" aria-label="${e}"><output>${t(e,L[e])}</output></div>`;e.innerHTML=`<h3 class="sethead">Görüntü ve ses</h3><div class="set"><span>Ses</span><div class="seg"><button data-snd="1" aria-pressed="${!L.muted}">Açık</button><button data-snd="0" aria-pressed="${L.muted}">Kapalı</button></div></div>
      <div class="set"><span>Müzik</span>${i(`music`,0,1,.05)}</div>
      <div class="set"><span>Grafik</span><div class="seg">${[[`auto`,`Otomatik`],[`low`,`Düşük`],[`medium`,`Orta`],[`high`,`Yüksek`]].map(([e,t])=>`<button data-gfx="${e}" aria-pressed="${L.gfx===e}">${t}</button>`).join(``)}</div></div>
      <div class="set"><span>FPS ve çözünürlük göstergesi</span><div class="seg"><button data-fps="1" aria-pressed="${L.fps}">Açık</button><button data-fps="0" aria-pressed="${!L.fps}">Kapalı</button></div></div>
      <h3 class="sethead">Kamera</h3>
      <div class="set"><span>Kamera hassasiyeti</span>${i(`sens`,.4,2,.1)}</div>
      <div class="set"><span>Dikey kamerayı ters çevir</span>${r(`invertY`)}</div>
      <h3 class="sethead">Dokunmatik kontroller</h3>
      <div class="set"><span>Buton boyutu</span>${n(`btnSize`,[[`s`,`Küçük`],[`m`,`Orta`],[`l`,`Büyük`]])}</div>
      <div class="set"><span>Buton saydamlığı</span>${i(`btnAlpha`,.3,1,.05)}</div>
      <div class="set"><span>Sol elle oynama</span>${r(`lefty`)}</div>
      <div class="set"><span>Titreşim</span>${r(`vibrate`)}</div>
      <p style="font-size:13.5px;color:var(--muted);margin:12px 0 0">Şu an: ${md}. “Otomatik” telefonda Orta, bilgisayarda Yüksek seçer ve kare hızı düşünce çözünürlüğü azaltır. Yüksek ayar ışık parlaması, gölgeler ve renk düzenlemesi ekler. Seçim oyunu kaydedip sayfayı yeniden yükler.</p>`,e.querySelectorAll(`[data-snd]`).forEach(e=>e.addEventListener(`click`,()=>{R.init(),R.setMuted(e.dataset.snd===`0`),Dv(),Tv()})),e.querySelectorAll(`[data-gfx]`).forEach(e=>e.addEventListener(`click`,()=>{L.gfx!==e.dataset.gfx&&(L.gfx=e.dataset.gfx,qu(),ib(!0),location.reload())})),e.querySelectorAll(`[data-fps]`).forEach(e=>e.addEventListener(`click`,()=>{L.fps=e.dataset.fps===`1`,qu(),Tv()})),e.querySelectorAll(`[data-pref]`).forEach(e=>e.addEventListener(`click`,()=>{let t=e.dataset.pref,n=e.dataset.val;L[t]=n===`true`||n!==`false`&&n,qu(),Ab(),t===`vibrate`&&L.vibrate&&Xu(30),Tv()})),e.querySelectorAll(`[data-range]`).forEach(e=>{let n=e.dataset.range,r=e.nextElementSibling;e.addEventListener(`input`,()=>{L[n]=Number(e.value),r.textContent=t(n,L[n]),n===`music`?M_(L[n]):Ab()}),e.addEventListener(`change`,qu)})}}function Ev(){R.init(),R.setMuted(!L.muted),Dv()}function Dv(){F(`#sndWave`).setAttribute(`d`,L.muted?`M15.5 9.5l5 5M20.5 9.5l-5 5`:`M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11`)}function Ov(e){return _v=e,e}function kv(e){return vv=e,e}var Av,jv,Mv,J={chest:null,pick:0,sweet:0,tol:.1,turn:0,strain:0,turning:!1,size:280,dpr:1,dragX:null,keyL:!1,keyR:!1,strainSfx:0};function Nv(){let e=Math.max(180,Math.min(280,Math.floor(Math.min(innerWidth*.5,innerHeight*.62)))),t=Math.min(2,window.devicePixelRatio||1);jv.style.width=e+`px`,jv.style.height=e+`px`,jv.width=e*t,jv.height=e*t,J.size=e,J.dpr=t}function Pv(e){if(Z.inv.picks<=0){X(`Maymuncuğun yok. Bjorn satıyor.`);return}Y.locked&&document.exitPointerLock?.(),J.chest=e,e.sweet===null&&(e.sweet=(Math.random()*2-1)*1.25),J.sweet=e.sweet,J.tol=(e.hard?.075:.2)+(Z.skills.lock.lvl-15)*.006+(im(`touch`)?.04:0),J.pick=0,J.turn=0,J.strain=0,J.turning=!1,F(`#lpTitle`).textContent=e.hard?`Rünlü kilit · zor`:`Rünlü kilit · kolay`,F(`#lpHelp`).textContent=fd?`Kilidin üstünde parmağını kaydırarak maymuncuğu gezdir. Sonra “Çevir”e basılı tut. Kilit direnirse bırak, açıyı değiştir.`:`Fareyle sürükle ya da A/D ile maymuncuğu gezdir. Boşluk veya W basılıyken kilit döner. Kilit direnirse bırak, açıyı değiştir.`,F(`#lpMsg`).textContent=``,Nv(),Q.mode=`lockpick`,Sb(),Av.hidden=!1,Qx(Av),lS()}function Fv(){Av.hidden=!0,J.turning=!1,F(`#lpTurn`).classList.remove(`on`),Q.mode=`play`,lS()}function Iv(e){J.turning||(J.keyL&&(J.pick-=e*1.1),J.keyR&&(J.pick+=e*1.1),J.pick=Iu(J.pick,-1.45,1.45));let t=Math.abs(J.pick-J.sweet);if(J.turning){let n=t<=J.tol?1:Iu(1-(t-J.tol)/.8,0,.85);if(J.turn<n-.001)J.turn=Math.min(n,J.turn+e*1.6);else if(n<1&&(J.strain+=e,J.strainSfx-=e,J.strainSfx<=0&&(z(`strain`),J.strainSfx=.08),J.strain>(im(`sturdy`)?1.5:.75)&&(Z.inv.picks--,J.strain=0,J.turn=0,J.turning=!1,F(`#lpTurn`).classList.remove(`on`),z(`break`),Xu(40),F(`#lpMsg`).textContent=`Maymuncuk kırıldı.`,Z.inv.picks<=0))){Fv(),X(`Maymuncuğun kalmadı`);return}if(J.turn>=1){z(`unlock`),em(`lock`,J.chest.hard?6:3);let e=J.chest;Fv(),Rv(e);return}}else J.turn=Math.max(0,J.turn-e*3),J.strain=Math.max(0,J.strain-e*2);F(`#lpPicks`).textContent=Z.inv.picks,F(`#lpSkill`).textContent=Z.skills.lock.lvl,Lv()}function Lv(){let e=Mv,t=J.size;e.setTransform(J.dpr,0,0,J.dpr,0,0),e.clearRect(0,0,t,t);let n=t/2,r=t/2,i=t*.44,a=J.strain>0?(Math.random()-.5)*.03:0;e.fillStyle=`#141b24`,e.beginPath(),e.arc(n,r,i,0,I),e.fill(),e.lineWidth=2,e.strokeStyle=`rgba(228,236,243,.35)`,e.stroke(),e.strokeStyle=`#6fd8c9`,e.lineWidth=4,e.beginPath(),e.arc(n,r,i-6,-Math.PI/2,-Math.PI/2+J.turn*(Math.PI/2)+1e-4),e.stroke();for(let t=0;t<8;t++){let a=t/8*I;kh(e,Dh[t],n+Math.sin(a)*(i-24)-7,r-Math.cos(a)*(i-24)-9,14,18,`rgba(154,171,190,.55)`,1.5)}e.save(),e.translate(n,r),e.rotate(J.turn*(Math.PI/2)+a),e.fillStyle=`#232d38`,e.beginPath(),e.arc(0,0,i*.58,0,I),e.fill(),e.strokeStyle=`rgba(228,236,243,.25)`,e.lineWidth=1.5,e.stroke(),e.fillStyle=`#05080c`,e.beginPath(),e.arc(0,-i*.12,i*.1,0,I),e.fill(),e.fillRect(-i*.045,-i*.12,i*.09,i*.3),e.restore();let o=J.pick+(J.strain>0?(Math.random()-.5)*.2*J.strain:0);e.strokeStyle=J.strain>0?`rgb(230,${Math.round(200-J.strain*180)},${Math.round(160-J.strain*140)})`:`#dfe8ef`,e.lineWidth=3,e.lineCap=`round`,e.beginPath(),e.moveTo(n,r-i*.12),e.lineTo(n+Math.sin(o)*i*1.02,r-i*.12-Math.cos(o)*i*1.02),e.stroke()}function Rv(e){Q.opened.add(e.id),e.lid.rotation.x=-1.6;let t=e.loot,n=[];if(t.gold){let e=Math.round(t.gold*(im(`treasure`)?1.5:1));Z.inv.gold+=e,n.push(`${e} altın`)}t.potions&&(Z.inv.potions+=t.potions,n.push(`şifa iksiri ×${t.potions}`)),t.picks&&(Z.inv.picks+=t.picks,n.push(`maymuncuk ×${t.picks}`)),z(`gold`),n.forEach(e=>X(e)),t.item&&Fm(Mp[t.item]?t.item:Um(t.item,!0)),ib()}var zv=()=>{J.dragX=null};function Bv(){Av=F(`#lockpick`),jv=F(`#lpCanvas`),Mv=jv.getContext(`2d`),jv.addEventListener(`pointerdown`,e=>{J.dragX=e.clientX,jv.setPointerCapture(e.pointerId)}),jv.addEventListener(`pointermove`,e=>{if(J.dragX===null||J.turning){J.dragX=e.clientX;return}J.pick=Iu(J.pick+(e.clientX-J.dragX)*.011,-1.45,1.45),J.dragX=e.clientX}),jv.addEventListener(`pointerup`,zv),jv.addEventListener(`pointercancel`,zv);{let e=F(`#lpTurn`);e.addEventListener(`pointerdown`,t=>{t.preventDefault(),e.setPointerCapture(t.pointerId),J.turning=!0,e.classList.add(`on`),z(`click`)});let t=()=>{J.turning=!1,e.classList.remove(`on`)};e.addEventListener(`pointerup`,t),e.addEventListener(`pointercancel`,t),e.addEventListener(`lostpointercapture`,t),F(`#lpClose`).addEventListener(`click`,Fv)}}function Vv(e){let t=e===`world`;V.visible=t,Yf.visible=t,Nd.visible=!t,Sd.fog.color.copy(t?wd:Td),Sd.fog.density=t?.0095:.075,Sd.background=t?null:new j(131844),Ed.intensity=t?2.4:.95,Ed.color.setHex(t?11846880:9413560),Ed.groundColor.setHex(t?4608618:2103828),Dd.intensity=t?2.7:0,yd.shadowMap.autoUpdate=t&&_d,kd.intensity=t?40:0,jd.intensity=t?0:60,Md.intensity=t?0:40;for(let e of CC)e.bar.bg.visible=e.bar.fill.visible=!1,e.mark.visible=!1}function Hv(e,t,n,r){Q.zone=e,Vv(e),SS(),Z.pos.set(t,e===`world`?U(t,n):0,n),Z.yaw=r,$.yaw=r+Math.PI,$.pitch=e===`world`?.3:.62,$.target.set(Z.pos.x,Z.pos.y+1.55,Z.pos.z),ug(!0),Tg()}function Uv(e){if(Q.fadeBusy)return;Q.fadeBusy=!0,z(`door`);let t=F(`#fade`);t.style.opacity=`1`,setTimeout(()=>{e===`dungeon`?(Hv(`dungeon`,B,2.6,0),Z.stage===1&&(Z.stage=2),nS(`Ata Höyüğü`,`YENİ YER`)):(Hv(`world`,sf.x+of.x*2.6,sf.z+of.z*2.6,Math.atan2(of.x,of.z)),Z.stage===4&&Z.inv.rune&&(Z.stage=5,X(`Görev güncellendi: rünü Sigrun'a götür`))),ib(!0),setTimeout(()=>{t.style.opacity=`0`,Q.fadeBusy=!1},120)},360)}var Wv=e=>30+(Z.skills[e].lvl-15)*6;function Gv(e,t){let n=Z.skills[e],r=Wv(e),i=n.lvl>=40;return{t:q.train.lesson(Xp[e]),note:i?q.train.maxed:q.common.gold(r),dis:i||Z.inv.gold<r,f:()=>{Z.inv.gold-=r,z(`gold`),em(e,$p(n.lvl)-n.xp),ib(!0),t()}}}var Kv=4,qv=12;function Jv(e=q.gunnar.greet){let t=()=>Jv(q.gunnar.trained);Ry(q.gunnar.name,e,[Gv(`archery`,t),Gv(`sneak`,t),...Z.inv.meat>0?[{t:q.gunnar.sellMeat(Z.inv.meat),note:q.common.gold(Z.inv.meat*Kv),f:()=>{Z.inv.gold+=Z.inv.meat*Kv,Z.inv.meat=0,z(`gold`),Jv(q.gunnar.boughtMeat)}}]:[],...Z.inv.hide>0?[{t:q.gunnar.sellHide(Z.inv.hide),note:q.common.gold(Z.inv.hide*qv),f:()=>{Z.inv.gold+=Z.inv.hide*qv,Z.inv.hide=0,z(`gold`),Jv(q.gunnar.boughtHide)}}]:[],{t:q.gunnar.askHunt,f:()=>Jv(q.gunnar.huntTips)},By()])}var Yv={pos:new A,yaw:0,model:null,speed:0},Xv={x:-1.5,z:23.5},Zv=()=>Z.side.goat??0;function Qv(){let e=Zv();return e===1?{text:q.liv.obFind,t:{zone:`world`,x:Yv.pos.x,z:Yv.pos.z}}:e===2?{text:q.liv.obBring,t:{zone:`world`,x:K.liv.pos.x,z:K.liv.pos.z}}:null}function $v(){let e=Zv();e===0?Ry(q.liv.name,q.liv.greet,[{t:q.liv.accept,f:()=>{Z.side.goat=1,Z.track=`goat`,z(`pickup`),X(q.liv.newQuest),zy(),ib()}},By(q.liv.later)]):e<3?Ry(q.liv.name,e===2?q.liv.almost:q.liv.waiting,[By()]):Ry(q.liv.name,q.liv.after,[By()])}function ey(){Zv()>=2||(Zv()===0&&X(q.liv.newQuest),Z.side.goat=2,Z.track=`goat`,z(`pickup`),X(q.liv.caught),ib())}function ty(){Z.side.goat=3,Z.inv.gold+=40,Z.inv.herbs+=2,Z.track=`main`,z(`level`),X(q.liv.reward),Ry(q.liv.name,q.liv.thanks,[By()]),ib()}function ny(e){let t=Zv(),n=0,r=null;if(t===2&&Q.zone===`world`){let e=Math.hypot(Z.pos.x-Yv.pos.x,Z.pos.z-Yv.pos.z);e>2.4&&e<35&&(r=Z.pos,n=Math.min(6.8,(e-2)*1.6)),Math.hypot(Yv.pos.x-K.liv.pos.x,Yv.pos.z-K.liv.pos.z)<6&&!K.liv.inside&&Q.mode===`play`&&ty()}else t>=3?Math.hypot(Xv.x-Yv.pos.x,Xv.z-Yv.pos.z)>.5&&(r=Xv,n=1.4):(Yv.speed-=e,Yv.speed<-4&&(Yv.speed=1.2),Yv.speed>0&&(r={x:pf[0]+Math.sin(Q.time*.3)*2,z:pf[1]+Math.cos(Q.time*.23)*2},n=.9));if(r){let t=r.x-Yv.pos.x,i=r.z-Yv.pos.z,a=Math.hypot(t,i)||1;Yv.pos.x+=t/a*n*e,Yv.pos.z+=i/a*n*e,Yv.yaw+=Uu(Yv.yaw,Math.atan2(t,i))*Math.min(1,e*8),AS(Yv.pos,.32,`world`)}else n=0;Yv.pos.y=U(Yv.pos.x,Yv.pos.z);let i=Yv.model;i.root.position.copy(Yv.pos),i.root.rotation.y=Yv.yaw,i.root.visible=Q.zone===`world`,$S(i,{speed:n},e)}function ry(e){let t=Zv(),n=t>=3?Xv:t===2&&e?{x:e[0],z:e[1]}:{x:pf[0],z:pf[1]};Yv.pos.set(n.x,U(n.x,n.z),n.z)}var iy={all:0};function ay(e){let t=q.barks,n=Q.dayT>=.875||Q.dayT<.25,r=[];return t[e]&&r.push(...t[e]),n&&r.push(...t.night),(Z.side.pass??0)>=5&&r.push(...t.passDone),Z.stage>=6&&r.push(...t.runeDone),Q.weather===`storm`&&r.push(...t.storm),r.length?r[Math.floor(Math.random()*r.length)]:null}function oy(e){if(ny(e),Q.mode===`play`&&Q.zone===`world`){iy.all-=e;for(let t of Object.values(K)){if(iy[t.id]=(iy[t.id]||0)-e,t.inside||t.pose===`tied`||iy.all>0||iy[t.id]>0||Math.hypot(Z.pos.x-t.pos.x,Z.pos.z-t.pos.z)>4.2)continue;let n=ay(t.id);n&&(aS(t.pos,t.model.root.scale.y,n),iy[t.id]=50,iy.all=7)}}}function sy(){Yv.model=gC(`goat`),Yv.model.root.scale.setScalar(.62),V.add(Yv.model.root),ry(),Kf(()=>Yv.pos,()=>Q.zone===`world`,.8)}function cy(){let e=Z.side.ulf,t=``,n=null;if(e===1)t=`Kuzgun Gölü'ndeki balıkçı kampına git`,n={zone:`world`,x:qd.x,z:qd.z};else if(e===2)t=`Trol izlerini gölün öbür yakasına kadar takip et`,n={zone:`world`,x:Jd.x,z:Jd.z};else if(e===3)t=`Buz Trolü'nü yen`,n={zone:`world`,x:EC.pos.x,z:EC.pos.z};else if(e===4)t=`Ulf'u çöz`,n={zone:`world`,x:K.ulf.pos.x,z:K.ulf.pos.z};else if(e===5)t=`Hakon'a kardeşinin haberini ver`,n={zone:`world`,x:K.hakon.pos.x,z:K.hakon.pos.z};else return null;return Q.zone!==`world`&&(n={zone:`dungeon`,x:B,z:1.4}),{text:t,t:n}}function ly(){let e=Z.side.ulf;e===1&&Math.hypot(Z.pos.x-qd.x,Z.pos.z-qd.z)<7?(Z.side.ulf=2,Z.track=`side`,eS(q.ulf.campWrecked),X(q.ulf.tracks),ib()):e===2&&Math.hypot(Z.pos.x-Jd.x,Z.pos.z-Jd.z)<20&&(Z.side.ulf=EC.dead?4:3,ib(),EC.dead||X(q.ulf.tiedSeen))}function uy(){let e=K.ulf;Z.side.ulf>=5&&(e.pose=null,e.dest=null,e.pos.set(qd.x-.8,0,qd.z-.2),e.yaw=.4,e.home={x:e.pos.x,z:e.pos.z,yaw:.4},p_.visible=!0)}function dy(){let e=Z.side.ulf,t=K.hakon;if(t.wait=4,e===0){let e=t=>Ry(q.hakon.name,t,[{t:q.hakon.accept,f:()=>{Z.side.ulf=1,Z.track=`side`,z(`pickup`),X(q.hakon.newQuest),ib(),Ry(q.hakon.name,q.hakon.directions,[By(q.common.go)])}},{t:q.hakon.askRumble,f:()=>e(q.hakon.rumbleAnswer)},By(q.hakon.notNow)]);e(q.hakon.greet)}else e>=1&&e<=4?Ry(q.hakon.name,q.hakon.waiting,[By(q.hakon.searching)]):e===5?Ry(q.hakon.name,q.hakon.thanks,[{t:q.hakon.thankYou,f:()=>{Z.side.ulf=6,Z.maxHp+=15,Z.hp=Z.maxHp,Z.inv.gold+=50,Z.track=`main`,z(`level`),eS(q.hakon.done),X(q.hakon.charm),X(q.hakon.gold50),zy(),ib()}}]):Ry(q.hakon.name,q.hakon.after,[By()])}function fy(){let e=Z.side.ulf,t=K.ulf;if(e<=3&&!EC.dead){Ry(q.ulf.name,q.ulf.tiedWarn,[By(q.ulf.hush)]);return}if(e<=4){Ry(q.ulf.name,q.ulf.freed,[{t:q.ulf.cut,f:()=>{Z.side.ulf=5,Z.inv.rod=!0,Z.track=`side`,t.pose=null,t.dest={x:qd.x-.8,z:qd.z-.2,yaw:.4},p_.visible=!0,z(`pickup`),X(q.ulf.rodToast),zy(),ib()}}]);return}Ry(q.ulf.name,q.ulf.tips,[By(q.ulf.farewell)])}var py={x:16.5,z:-1,yaw:-1.2},my=()=>CC.find(e=>e.id===`halvar`),hy=()=>Z.side.pass??0;function gy(e,t=!1){if(hy()>=e)return;let n=hy()===0;Z.side.pass=e,Z.track=`pass`,n&&!t&&X(q.pass.newQuest),ib()}function _y(){let e=hy(),t=``,n=null;if(e===1)t=q.pass.obCaravan,n={zone:`world`,x:$d.x,z:$d.z};else if(e===2)t=q.pass.obTower,n={zone:`world`,x:ef.x,z:ef.z};else if(e===3){let e=my();Z.side.eirik?(t=q.pass.obHalvar,n={zone:`world`,x:e.pos.x,z:e.pos.z}):(t=q.pass.obEirik,n={zone:`world`,x:K.eirik.pos.x,z:K.eirik.pos.z})}else if(e===4)t=q.pass.obReturn,n={zone:`world`,x:K.astrid.pos.x,z:K.astrid.pos.z};else return null;return Q.zone!==`world`&&(n={zone:`dungeon`,x:B,z:1.4}),{text:t,t:n}}function vy(){gy(2),z(`pickup`),eS(q.pass.crest),Ry(q.pass.caravanTitle,q.pass.caravanText,[By(q.pass.follow)])}function yy(){Ry(q.pass.ordersTitle,q.pass.ordersText,[{t:q.pass.ordersOk,f:()=>{zy(),gy(3),X(q.pass.ordersToast)}}])}function by(){Z.inv.gold+=120,X(`120 altın`),eS(q.pass.halvarDown),Z.inv.items.some(e=>e.id===`red_shield`)||Fm(`red_shield`),hy()<3&&gy(3,!0),ib()}function xy(){let e=e=>Math.hypot(Z.pos.x-e.x,Z.pos.z-e.z);!Q.seen.has(`caravan`)&&e($d)<12&&(Q.seen.add(`caravan`),nS(`Yağmalanmış Kervan`,`DOĞU YOLU`)),!Q.seen.has(`pass`)&&e(ef)<18&&(Q.seen.add(`pass`),nS(`Demir Geçidi`,`YENİ YER`)),!Q.seen.has(`fort`)&&e(Qd)<Qd.r+6&&(Q.seen.add(`fort`),nS(`Kızıl Kalkan Kampı`,`HAYDUT YATAĞI`)),hy()===3&&Z.side.eirik&&my().dead&&(Z.side.pass=4,X(q.pass.toAstrid),ib());let t=K.eirik;Z.side.eirik&&Math.hypot(t.pos.x-py.x,t.pos.z-py.z)>3&&Math.hypot(Z.pos.x-t.pos.x,Z.pos.z-t.pos.z)>25&&Sy()}function Sy(){let e=K.eirik;e.pose=null,e.dest=null,e.pos.set(py.x,0,py.z),e.yaw=py.yaw,e.home={...py},e.house={x:-14,z:5},e.day={...py},e.col.x=e.pos.x,e.col.z=e.pos.z}function Cy(){Z.side.eirik&&Sy()}function wy(){let e=K.eirik;if(!Z.side.eirik){Ry(q.eirik.name,my().dead?q.eirik.tiedSafe:q.eirik.tied,[{t:q.eirik.cut,f:()=>{Z.side.eirik=!0,e.pose=null,e.dest={x:Qd.x+Math.cos(Math.atan2(57-Qd.z,64.5-Qd.x))*(Qd.r+3),z:Qd.z+Math.sin(Math.atan2(57-Qd.z,64.5-Qd.x))*(Qd.r+3),yaw:-2},hy()<3&&gy(3,!0),z(`pickup`),X(my().dead?q.eirik.fleeSafe:q.eirik.flee),zy(),ib()}}]);return}Ry(q.eirik.name,hy()>=5?q.eirik.trade:q.eirik.thanks,[Gv(`lock`,wy),By()])}function Ty(){let e=hy();if(e===0){let e=t=>Ry(q.astrid.name,t,[{t:q.astrid.askWhat,f:()=>e(q.astrid.whatAnswer)},{t:q.astrid.accept,f:()=>{gy(1),z(`pickup`),Ry(q.astrid.name,q.astrid.directions,[By(q.common.go)])}},By(q.astrid.later)]);e(q.astrid.greet)}else if(e>=1&&e<=3)Ry(q.astrid.name,[q.astrid.wait1,q.astrid.wait2,q.astrid.wait3][e-1],[Gv(`onehand`,Ty),Gv(`block`,Ty),By(q.astrid.onIt)]);else if(e===4){let e=e=>{Z.side.pass=5,Z.track=`main`,z(`level`),eS(q.astrid.passOpen),X(q.common.rewardToast(e)),X(q.astrid.ironCheaper),zy(),ib()};Ry(q.astrid.name,q.astrid.report,[{t:q.astrid.rewardGold,f:()=>{Z.inv.gold+=150,z(`gold`),e(q.astrid.rewardGold)}},{t:q.astrid.rewardArmor,note:q.astrid.rewardArmorNote,f:()=>{let t=Fm(`guard_armor`,{quiet:!0});e(um(t).name)}}])}else{let e=(e,t)=>({t,f:()=>{wg(e),e===`follow`&&Tg(),z(`ui`),zy(),X(e===`follow`?q.astrid.joined:e===`wait`?q.astrid.waitingHere:q.astrid.backHome),ib(!0)}}),t=_g.mode===`follow`?[e(`wait`,q.astrid.cmdWait),e(null,q.astrid.cmdHome)]:_g.mode===`wait`?[e(`follow`,q.astrid.cmdFollow),e(null,q.astrid.cmdHome)]:[e(`follow`,q.astrid.cmdJoin)];Ry(q.astrid.name,_g.mode?q.astrid.companionTalk:q.astrid.after,[...t,Gv(`onehand`,Ty),Gv(`block`,Ty),By()])}}var Ey=0;function Dy(){let e=mf.filter(([e,t])=>Math.hypot(e-Z.pos.x,t-Z.pos.z)>35),[t,n]=e[Math.floor(Math.random()*e.length)]||mf[0];for(let e=0;e<3;e++)wC(`wolf`,`rw`+Ey++,`world`,t+Math.cos(e*2.1)*2.5,n+Math.sin(e*2.1)*2.5,{temp:!0,pack:`R`+Ey});Z.bounty.spot=[t,n]}function Oy(e){let t=Z.bounty;t&&!t.done&&(t.tpl===`wolves`&&e===`wolf`||t.tpl===`draugr`&&e===`draugr`||t.tpl===`bandits`&&(e===`bandit`||e===`archer`))&&(t.count++,X(`${Zp[t.tpl].title}: ${Math.min(t.count,Zp[t.tpl].need)}/${Zp[t.tpl].need}`),t.count>=Zp[t.tpl].need&&(t.done=!0,X(`İlan tamamlandı · ödül tahtada`)))}function ky(){let e=Z.stage,t=``,n=null;return e===0?(t=`Isvik'te Sigrun ile konuş`,n={zone:`world`,x:K.sigrun.pos.x,z:K.sigrun.pos.z}):e===1?(t=`Ata Höyüğü'ne git`,n={zone:`world`,x:sf.x,z:sf.z}):e===2?(t=kC.triggered?`Höyük Kralı'nı yen`:`Höyüğün derinliklerine in`,n={zone:`dungeon`,x:B+44,z:37}):e===3?(t=`Ata Rünü'nü al`,n={zone:`dungeon`,x:$y.x,z:$y.z}):e===4?Wh.g1.open?(t=`Höyükten çık`,n={zone:`dungeon`,x:B,z:1.4}):(t=`Kestirme yolu aç: paslı kolu çek`,n={zone:`dungeon`,x:B+10.5,z:6.8}):e===5?(t=`Rünü Sigrun'a götür`,n={zone:`world`,x:K.sigrun.pos.x,z:K.sigrun.pos.z}):t=`Serbest dolaşım · ilan tahtasına göz at`,n&&n.zone!==Q.zone&&(n=Q.zone===`dungeon`?{zone:`dungeon`,x:B,z:1.4}:{zone:`world`,x:sf.x,z:sf.z}),{text:t,t:n}}function Ay(){let e=[];Z.stage<6&&e.push({key:`main`,title:`GÖREV · ATA RÜNÜ`,name:`Ata Rünü`,ob:ky()});let t=cy();t&&e.push({key:`side`,title:`YAN GÖREV · KAYIP BALIKÇI`,name:`Kayıp Balıkçı`,ob:t});let n=_y();n&&e.push({key:`pass`,title:`GÖREV · DEMİR GEÇİDİ`,name:`Demir Geçidi`,ob:n});let r=Qv();return r&&e.push({key:`goat`,title:`İŞ · KAYIP KEÇİ`,name:`Kayıp Keçi`,ob:r}),e}var jy=(e=Ay())=>e.find(e=>e.key===Z.track)||e[0]||{key:`main`,title:`SERBEST DOLAŞIM`,name:`Serbest dolaşım`,ob:ky()};function My(){F(`#fishPull`).addEventListener(`pointerdown`,e=>{e.preventDefault(),gb()}),F(`#fishClose`).addEventListener(`click`,hb),F(`#objCard`).addEventListener(`click`,()=>{let e=Ay();if(e.length<2)return;let t=e[(e.indexOf(jy(e))+1)%e.length];Z.track=t.key,z(`ui`),X(`İşaret: `+t.name)})}var Ny,Py,Fy,Iy,Ly=[];function Ry(e,t,n){Y.locked&&document.exitPointerLock?.(),Q.mode=`dialog`,Sb(),Py.textContent=e,Fy.textContent=t,Iy.innerHTML=``,Ly=n,n.forEach((e,t)=>{let n=document.createElement(`button`);n.className=`ch`,n.disabled=!!e.dis,n.innerHTML=`<em>${t+1}</em>${e.t}${e.note?`<small>${e.note}</small>`:``}`,n.addEventListener(`click`,()=>{e.dis||(z(`ui`),e.f())}),Iy.appendChild(n)}),Ny.hidden=!1,Qx(Ny),lS();let r=Iy.querySelector(`button:not([disabled])`);r&&!fd&&r.focus({preventScroll:!0})}function zy(){Ny.hidden=!0,Q.mode=`play`,lS()}var By=(e=q.common.bye)=>({t:e,f:zy});function Vy(){let e=Z.stage;if(e===0){let e=t=>Ry(q.sigrun.name,t,[{t:q.sigrun.askWhat,f:()=>e(q.sigrun.whatAnswer)},{t:q.sigrun.askReward,f:()=>e(q.sigrun.rewardAnswer)},{t:q.sigrun.accept,f:()=>{Z.stage=1,Z.inv.potions+=2,z(`pickup`),X(q.sigrun.acceptToast),ib(),Ry(q.sigrun.name,q.sigrun.acceptAnswer,[By(q.common.go)])}},Hy(),By(q.sigrun.later)]);e(q.sigrun.greet)}else e>=1&&e<=4?Ry(q.sigrun.name,q.sigrun.waiting,[{t:q.sigrun.askCauldron,f:()=>Ry(q.sigrun.name,q.sigrun.cauldronAnswer,[By(q.sigrun.understood)])},Hy(),Gv(`rune`,Vy),By(q.sigrun.leaving)]):e===5?Ry(q.sigrun.name,q.sigrun.returned,[{t:q.sigrun.rewardGold,f:()=>{Z.inv.gold+=100,z(`gold`),Uy(q.sigrun.rewardGold)}},{t:q.sigrun.rewardBless,note:q.sigrun.rewardBlessNote(hm(fm(`weapon`))),dis:!!fm(`weapon`).blessed,f:()=>{let e=fm(`weapon`);e.blessed=!0,z(`level`),Uy(hm(e))}}]):Ry(q.sigrun.name,q.sigrun.after,[Hy(),Gv(`rune`,Vy),By()])}var Hy=()=>({t:q.sigrun.runes,note:q.sigrun.runesNote,f:()=>{zy(),wv()}});function Uy(e){Z.stage=6,Z.inv.rune=!1,zy(),ib(),X(q.common.rewardToast(e)),setTimeout(gv,700)}function Wy(){let e=t=>Ry(q.bjorn.name,t,[{t:q.common.potion,note:q.bjorn.potionPrice,dis:Z.inv.gold<15,f:()=>{Z.inv.gold-=15,Z.inv.potions++,z(`gold`),e(q.bjorn.soldPotion)}},{t:q.bjorn.picks,note:q.bjorn.picksPrice,dis:Z.inv.gold<10,f:()=>{Z.inv.gold-=10,Z.inv.picks+=3,z(`gold`),e(q.bjorn.soldPicks)}},{t:q.bjorn.wares,note:q.bjorn.waresNote,f:()=>{zy(),Sv()}},Gv(`smith`,()=>e(q.bjorn.trained)),...sb()>0?[{t:q.bjorn.sellFish(sb()),note:q.common.gold(cb()),f:()=>{Z.inv.gold+=cb(),Z.inv.fish={ringa:0,alabalik:0,turna:0},z(`gold`),e(q.bjorn.soldFish)}}]:[],...Z.inv.hide>0?[{t:q.bjorn.sellHides(Z.inv.hide),note:q.common.gold(Z.inv.hide*10),f:()=>{Z.inv.gold+=Z.inv.hide*10,Z.inv.hide=0,z(`gold`),e(q.bjorn.soldHides)}}]:[],...Z.inv.pelts>0?[{t:q.bjorn.sellPelts(Z.inv.pelts),note:q.common.gold(Z.inv.pelts*8),f:()=>{Z.inv.gold+=Z.inv.pelts*8,Z.inv.pelts=0,z(`gold`),e(q.bjorn.soldPelts)}}]:[],By()]);e(q.bjorn.greet(Z.inv.gold))}function Gy(){let e=Z.bounty;if(e&&e.done){let t=Zp[e.tpl];Z.inv.gold+=t.reward,z(`gold`),Z.lastTpl=e.tpl,Z.bounty=null,ib(),Ry(q.board.name,q.board.paid(t.title,t.reward),[{t:q.board.more,f:Gy},By(q.board.leave)]);return}if(e){let t=Zp[e.tpl];if(e.tpl===`herbs`){let n=Z.inv.herbs>=t.need;Ry(q.board.name,q.board.herbsStatus(t.text,Z.inv.herbs),[{t:q.board.deliverHerbs,dis:!n,note:n?``:q.board.needs(t.need),f:()=>{Z.inv.herbs-=t.need,e.done=!0,Gy()}},By(q.board.leave)])}else if(e.tpl===`fish`){let n=sb()>=t.need;Ry(q.board.name,q.board.fishStatus(t.text,sb()),[{t:q.board.deliverFish,dis:!n,note:n?``:q.board.needs(t.need),f:()=>{lb(t.need),e.done=!0,Gy()}},By(q.board.leave)])}else Ry(q.board.name,q.board.progress(t.title,e.count,t.need,t.text),[By(q.board.ok)]);return}let t=CC.filter(e=>e.kind===`draugr`&&!e.dead).length,n=CC.filter(e=>(e.kind===`bandit`||e.kind===`archer`)&&!e.dead).length,r=Object.keys(Zp).filter(e=>e!==Z.lastTpl&&(e!==`draugr`||t>=3)&&(e!==`fish`||Z.inv.rod)&&(e!==`bandits`||(Z.side.pass??0)>=1&&n>=4)),i=r[Math.floor(Math.random()*r.length)]||`wolves`,a=Zp[i];Ry(q.board.name,q.board.offer(a.title,a.text),[{t:q.board.take,f:()=>{Z.bounty={tpl:i,count:0,done:!1},i===`wolves`&&(Dy(),X(q.board.wolvesHint)),zy(),ib()}},By(q.board.leave)])}function Ky(){Ry(q.cauldron.name,Z.inv.herbs>=3?q.cauldron.ready:q.cauldron.notReady(Z.inv.herbs),[{t:q.cauldron.brew,note:q.cauldron.brewNote,dis:Z.inv.herbs<3,f:()=>{Z.inv.herbs-=3,Z.inv.potions++,z(`drink`),X(q.common.potion),Ky()}},By(q.cauldron.cancel)])}function qy(){Ny=F(`#dialog`),Py=F(`#dlgWho`),Fy=F(`#dlgText`),Iy=F(`#dlgChoices`)}var Jy=[],Yy=e=>(e.r===void 0&&(e.r=2.2),e.can||=()=>!0,Jy.push(e),e),Xy;function Zy(e,t,n,r,i,a,o){let s=new P;s.position.set(n,t===`world`?U(n,r):0,r),s.rotation.y=i,(t===`world`?V:Nd).add(s),H(1,.55,.65,G.wood,0,.28,0,s);let c=new P;c.position.set(0,.55,-.32),s.add(c),H(1.02,.16,.67,G.woodD,0,.08,.32,c);for(let e of[-.3,.3])H(.07,.58,.68,G.iron,e,.29,0,s);Sh(t,n,r,.62);let l={id:e,hard:a,loot:o,lid:c,sweet:null};return Yy({id:e,zone:t,x:n,z:r,r:1.9,can:()=>!Q.opened.has(e),label:()=>`Aç · Kilitli sandık (${a?`zor`:`kolay`})`,act:()=>Pv(l),opened:()=>{c.rotation.x=-1.6}}),l}function Qy(e,t,n){let r=new M(new Xc(.28,.2,.7,8),Rd(8019781));r.position.set(t,.35,n),Nd.add(r),Yy({id:e,zone:`dungeon`,x:t,z:n,r:1.6,can:()=>!Q.opened.has(e),label:()=>`Kır · Eski küp`,act:()=>{Q.opened.add(e),r.visible=!1,Mg(t,.5,n,14,10256998,3,.6,9,1),z(`click`);let i=Math.round((5+Math.floor(Math.random()*11))*(im(`treasure`)?1.5:1));Z.inv.gold+=i,z(`gold`),X(`${i} altın`),Math.random()<.35&&(Z.inv.potions++,X(`Şifa iksiri`)),Math.random()<.25&&Xm(`iron`,1)},opened:()=>{r.visible=!1}})}var $y;function eb(e,t,n,r){Yy({id:e,zone:`world`,get x(){return K[e].pos.x},get z(){return K[e].pos.z},r:t,label:()=>K[e].inside?`Kapıyı çal · ${K[e].name}`:n(),act:()=>{K[e].inside&&X(`${K[e].name} uykulu gözlerle kapıyı açıyor`),r()}})}function tb(){let e=null,t=1e9;for(let n of Jy){if(n.zone!==Q.zone||!n.can())continue;let r=Math.hypot(n.x-Z.pos.x,n.z-Z.pos.z);r<n.r&&r<t&&(t=r,e=n)}return e}function nb(){Yy({id:`sigrun`,zone:`world`,get x(){return K.sigrun.pos.x},get z(){return K.sigrun.pos.z},r:2.6,label:()=>`Konuş · Sigrun`,act:Vy}),eb(`bjorn`,2.6,()=>`Konuş · Bjorn (demirci)`,Wy),eb(`gunnar`,2.6,()=>`Konuş · Gunnar (avcı)`,()=>Jv()),eb(`liv`,2.2,()=>`Konuş · Liv`,$v),Yy({id:`goat`,zone:`world`,get x(){return Yv.pos.x},get z(){return Yv.pos.z},r:2.2,can:()=>(Z.side.goat??0)<=1,label:()=>`Yakala · Benekli (keçi)`,act:ey}),Yy({id:`astrid`,zone:`world`,get x(){return K.astrid.pos.x},get z(){return K.astrid.pos.z},r:2.6,label:()=>`Konuş · Astrid (muhafız)`,act:Ty}),eb(`eirik`,2.4,()=>Z.side.eirik?`Konuş · Eirik`:`Çöz · Eirik`,wy),eb(`hakon`,2.4,()=>`Konuş · Hakon`,dy),Yy({id:`ulf`,zone:`world`,get x(){return K.ulf.pos.x},get z(){return K.ulf.pos.z},r:2.4,label:()=>Z.side.ulf<=4?`Çöz · Ulf`:`Konuş · Ulf`,act:fy}),Yy({id:`fishhole`,zone:`world`,x:Xd.x,z:Xd.z,r:1.9,label:()=>Z.inv.rod?`Balık tut · Buz deliği`:`Buz deliği (olta gerekli)`,act:mb}),Yy({id:`board`,zone:`world`,x:5.6,z:-3.4,r:2.3,label:()=>`Oku · İlan tahtası`,act:Gy}),Yy({id:`cauldron`,zone:`world`,x:-8.8,z:5.6,r:1.9,label:()=>`Kazan · ${Z.inv.herbs}/3 kar çiçeği`,act:Ky}),Yy({id:`barrow`,zone:`world`,x:sf.x+of.x*1.2,z:sf.z+of.z*1.2,r:2.4,label:()=>`Gir · Ata Höyüğü`,act:()=>Uv(`dungeon`)}),Yy({id:`exit`,zone:`dungeon`,x:B,z:1.4,r:2.1,label:()=>`Çık · Isvik yolu`,act:()=>Uv(`world`)}),Yy({id:`lever`,zone:`dungeon`,x:B+10.5,z:6.8,r:2,can:()=>!Wh.g1.open,label:()=>`Çek · Paslı kol`,act:()=>{lg(`g1`,!0,!1),Q.opened.add(`lever`),Xy.rotation.x=.9,X(`Kestirme açıldı: giriş salonuna dönebilirsin`)}}),Xy=(()=>{let e=new P;e.position.set(B+10.5,1.2,7.85),Nd.add(e),H(.5,.5,.15,G.iron,0,0,0,e);let t=new P;return e.add(t),H(.07,.8,.07,G.wood,0,.35,-.05,t),t.rotation.x=-.9,t})(),Zy(`c_ruin`,`world`,Wd.x,Wd.z+1.5,Math.PI,!1,{gold:35,potions:1,picks:2,item:`ruin`}),Zy(`c_crypt`,`dungeon`,B+8.3,44.3,-Math.PI/2,!0,{gold:40,item:`ata_sword`}),Qy(`u1`,B+8.4,31.3),Qy(`u2`,B-2.6,45),Qy(`u3`,B+27.5,38.8),Qy(`u4`,B+30,5),af.forEach(([e,t],n)=>{let r=`h`+n,i=new P;i.position.set(e,U(e,t),t),V.add(i);for(let e=0;e<3;e++){let t=new M(new Zc(.05,.4,4),Rd(4156234));t.position.set(Math.cos(e*2.1)*.08,.2,Math.sin(e*2.1)*.08),t.rotation.z=Math.cos(e*2.1)*.3,i.add(t)}let a=new M(new zl(.09,0),zd(9427199));a.position.y=.42,i.add(a),Yy({id:r,zone:`world`,x:e,z:t,r:1.6,can:()=>!Q.opened.has(r),label:()=>`Topla · Kar çiçeği`,act:()=>{Q.opened.add(r),i.visible=!1,Z.inv.herbs++,z(`pickup`),X(`Kar çiçeği (${Z.inv.herbs})`),Mg(e,i.position.y+.4,t,10,9427199,1.2,.8,-.5,.4)},opened:()=>{i.visible=!1}})});let e=Rd(5919824,{flatShading:!0}),t=Rd(13203514,{flatShading:!0,emissive:6957576});lf.forEach(([n,r],i)=>{let a=`ore`+i,o=U(n,r),s=new P;s.position.set(n,o,r),s.rotation.y=i*1.7,V.add(s);let c=new M(new zl(1.15,0).scale(1.2,.8,1),e);c.position.y=.55,c.castShadow=!0,s.add(c);let l=new P;s.add(l);for(let e=0;e<7;e++){let n=e*.9,r=new M(new zl(.16+e%3*.05,0),t);r.position.set(Math.cos(n)*1.05,.4+e%3*.26,Math.sin(n)*.78),l.add(r)}Sh(`world`,n,r,1.25),Yy({id:a,zone:`world`,x:n,z:r,r:2.4,can:()=>!Q.opened.has(a),label:()=>`Kaz · Demir damarı`,act:()=>{Q.opened.add(a),l.visible=!1,z(`block`),Mg(n,o+.8,r,16,11563066,3,.6,9,1),Xm(`iron`,Gp[0]+Math.floor(Math.random()*(Gp[1]-Gp[0]+1))),ib(!0)},opened:()=>{l.visible=!1}})});let n=Bd(5817599,1.5);uf.forEach(([e,t],r)=>{let i=`crys`+r,a=U(e,t),o=new P;o.position.set(e,a,t),V.add(o);for(let e=0;e<4;e++){let t=new M(new Bl(.2+e%2*.08).scale(1,2.8,1),n);t.position.set(Math.cos(e*1.6)*.26,.42,Math.sin(e*1.6)*.22),t.rotation.set(Math.cos(e)*.35,e,Math.sin(e)*.35),o.add(t)}Bf(o,0,.5,0,2.2,10479359,.45),Yy({id:i,zone:`world`,x:e,z:t,r:1.9,can:()=>!Q.opened.has(i),label:()=>`Topla · Ayaz kristali`,act:()=>{Q.opened.add(i),o.visible=!1,z(`rune`),Mg(e,a+.5,t,18,10479359,2,.8,-.5,.5),Xm(`frost`,2),ib(!0)},opened:()=>{o.visible=!1}})}),Yy({id:`forge`,zone:`world`,x:13.8,z:2.4,r:2.3,label:()=>`Döv · Demirhane`,act:Cv}),Yy({id:`cook`,zone:`world`,x:0,z:0,r:2.6,can:()=>Z.inv.meat>0,label:()=>`Pişir · Ateş (${Z.inv.meat} çiğ et)`,act:()=>{s_(),ib(!0)}}),Yy({id:`cook2`,zone:`world`,x:qd.x+.3,z:qd.z+.8,r:2.4,can:()=>Z.inv.meat>0&&!!p_?.visible,label:()=>`Pişir · Kamp ateşi (${Z.inv.meat} çiğ et)`,act:()=>{s_(),ib(!0)}}),$y={x:B+45,z:37,mesh:null};{let e=new P,t=new M(new Bl(.32),zd(7329993));t.scale.y=1.4,t.position.y=1,e.add(t);let n=new M(new Vl(.5,.62,32).rotateX(-Math.PI/2),zd(7329993,{transparent:!0,opacity:.5,blending:2,depthWrite:!1}));n.position.y=.05,e.add(n),Bf(e,0,1,0,2.6,7329993,.6),e.visible=!1,Nd.add(e),$y.mesh=e,Yy({id:`rune`,zone:`dungeon`,get x(){return $y.x},get z(){return $y.z},r:1.9,can:()=>e.visible,label:()=>`Al · Ata Rünü`,act:()=>{e.visible=!1,Z.inv.rune=!0,Q.opened.add(`rune`),Z.stage=4,z(`level`),eS(`ATA RÜNÜ ALINDI`),X(`Görev güncellendi: höyükten çık`),ib()}})}}function rb(){return{v:2,zone:Q.zone,pos:[Z.pos.x,Z.pos.z],yaw:Z.yaw,hp:Z.hp,maxHp:Z.maxHp,st:Z.st,maxSt:Z.maxSt,runeMult:Z.runeMult,runeCdMax:Z.runeCdMax,skills:Z.skills,charLvl:Z.charLvl,charXp:Z.charXp,pending:Z.pendingLevels,perks:Z.perks,perkPts:Z.perkPts,inv:Z.inv,stage:Z.stage,stats:Z.stats,bounty:Z.bounty,lastTpl:Z.lastTpl,dead:CC.filter(e=>e.dead&&!e.temp&&!e.wild).map(e=>e.id),opened:[...Q.opened],gates:{g1:Wh.g1.open,g2:Wh.g2.open},rune:[$y.x,$y.z],seen:[...Q.seen],side:Z.side,track:Z.track,day:Q.dayT,weather:Q.weather,comp:_g.mode?{mode:_g.mode,x:K.astrid.pos.x,z:K.astrid.pos.z,zone:_g.zone}:null,goatPos:[Yv.pos.x,Yv.pos.z]}}function ib(e){if(!(Q.mode===`title`||Q.mode===`boot`||Z.dead)&&Wu.set(`evyrim-ata-hoyugu-v1`,rb())&&!e){let e=F(`#saved`);e.style.opacity=`1`,setTimeout(()=>{e.style.opacity=`0`},1200)}}function ab(e){Object.assign(Z,{hp:e.hp,maxHp:e.maxHp,st:e.st,maxSt:e.maxSt,runeMult:e.runeMult,runeCdMax:e.runeCdMax,charLvl:e.charLvl,charXp:e.charXp,pendingLevels:e.pending,stage:e.stage,bounty:e.bounty,lastTpl:e.lastTpl});for(let t of Object.keys(Z.skills))e.skills[t]&&(Z.skills[t]=e.skills[t]);Z.perks=e.perks,Z.perkPts=e.perkPts,cm(),Km(e.inv),Object.assign(Z.inv,e.inv),MS(),Object.assign(Z.stats,e.stats);for(let t of e.dead){let e=CC.find(e=>e.id===t);e&&(e.dead=!0,e.deadT=99,e.hp=0,e.model.root.visible=!1)}for(let t of e.opened){Q.opened.add(t);let e=Jy.find(e=>e.id===t);e&&e.opened&&e.opened()}e.opened.includes(`lever`)&&(Xy.rotation.x=.9),e.gates.g1&&lg(`g1`,!0,!0),e.gates.g2&&lg(`g2`,!0,!0),e.rune&&($y.x=e.rune[0],$y.z=e.rune[1],$y.mesh.position.set(e.rune[0],0,e.rune[1])),OC.dead&&(kC.triggered=!0,Z.stage===3&&!Q.opened.has(`rune`)&&($y.mesh.visible=!0)),(e.seen||[]).forEach(e=>Q.seen.add(e)),typeof e.day==`number`&&(Q.dayT=e.day),e.weather&&hh(e.weather,!0),e.side&&(Z.side=Object.assign({ulf:0,pass:0,eirik:!1,goat:0},e.side)),Z.track=e.track||`main`,uy(),Cy(),ry(e.goatPos),wg(e.comp?e.comp.mode:null),Hv(e.zone,e.pos[0],e.pos[1],e.yaw),e.comp?.mode===`wait`&&(_g.zone=e.comp.zone,K.astrid.pos.set(e.comp.x,0,e.comp.z)),Z.hp<=0&&(Z.hp=Z.maxHp*.5),Z.bounty&&Z.bounty.tpl===`wolves`&&!Z.bounty.done&&Dy()}function ob(){document.addEventListener(`visibilitychange`,()=>{document.hidden&&Q.mode===`play`&&(ib(!0),bv())}),addEventListener(`pagehide`,()=>ib(!0))}var sb=()=>Z.inv.fish.ringa+Z.inv.fish.alabalik+Z.inv.fish.turna,cb=()=>Object.entries(Qp).reduce((e,[t,n])=>e+Z.inv.fish[t]*n.v,0);function lb(e){for(let t of[`ringa`,`alabalik`,`turna`]){let n=Math.min(e,Z.inv.fish[t]);Z.inv.fish[t]-=n,e-=n}}var ub={state:`wait`,t:0,next:2,msgT:0},db,fb,pb;function mb(){if(!Z.inv.rod){X(`Oltan yok. Belki biri ödünç verir.`);return}Y.locked&&document.exitPointerLock?.(),ub.state=`wait`,ub.t=0,ub.next=1.6+Math.random()*2.8,F(`#fishMsg`).textContent=``,Q.mode=`fishing`,Sb(),db.hidden=!1,Qx(db),lS(),z(`splash`)}function hb(){db.hidden=!0,Q.mode=`play`,lS(),ib(!0)}function gb(){if(Q.mode!==`fishing`||db.classList.contains(`arming`))return;let e=F(`#fishMsg`);if(ub.state===`bite`){let t=Math.random()*100,n=`ringa`;for(let[e,r]of Object.entries(Qp)){if(t<r.w){n=e;break}t-=r.w}Z.inv.fish[n]++,Z.stats.fish++,e.textContent=`${Qp[n].name} tuttun!`,z(n===`turna`?`level`:`pickup`),Xu(25),ub.state=`caught`,ub.t=0}else ub.state===`wait`&&(e.textContent=`Çok erken çektin, balık ürktü.`,ub.t=0,ub.next=2.2+Math.random()*2.5,z(`splash`))}function _b(e){ub.t+=e,ub.state===`wait`&&ub.t>=ub.next?(ub.state=`bite`,ub.t=0,z(`splash`),Xu(40)):ub.state===`bite`&&ub.t>.75?(ub.state=`wait`,ub.t=0,ub.next=1.8+Math.random()*3,F(`#fishMsg`).textContent=`Balık yemi aldı, kaçtı.`):ub.state===`caught`&&ub.t>1.1&&(ub.state=`wait`,ub.t=0,ub.next=1.6+Math.random()*3),F(`#fishCount`).textContent=sb();let t=fb.width,n=fb.height,r=t/2,i=n*.58,a=Q.time;pb.fillStyle=`#dfe9f1`,pb.fillRect(0,0,t,n),pb.fillStyle=`#b9cfdf`;for(let e=0;e<6;e++)pb.beginPath(),pb.ellipse(e*67%t,e*41%n,40,10,e,0,I),pb.fill();pb.fillStyle=`#0b1b27`,pb.beginPath(),pb.ellipse(r,i,92,58,0,0,I),pb.fill(),pb.strokeStyle=`#f4f8fb`,pb.lineWidth=6,pb.stroke(),pb.fillStyle=`rgba(111,160,190,.25)`;for(let e=0;e<2;e++){let t=a*(.5+e*.3)+e*2;pb.beginPath(),pb.ellipse(r+Math.cos(t)*45,i+Math.sin(t)*22,18,6,t,0,I),pb.fill()}let o=ub.state===`bite`,s=i+(o?10+Math.sin(a*30)*3:Math.sin(a*2.2)*2);if(o){pb.strokeStyle=`rgba(223,240,255,.7)`,pb.lineWidth=2;for(let e=0;e<2;e++){let t=(ub.t*60+e*20)%40+8;pb.beginPath(),pb.ellipse(r,i+4,t,t*.4,0,0,I),pb.stroke()}}pb.strokeStyle=`rgba(30,30,30,.8)`,pb.lineWidth=1.5,pb.beginPath(),pb.moveTo(r+70,6),pb.quadraticCurveTo(r+30,s-60,r,s-8),pb.stroke(),pb.fillStyle=`#e8e2d4`,pb.beginPath(),pb.arc(r,s-6,8,Math.PI,I),pb.fill(),pb.fillStyle=`#c9463c`,pb.beginPath(),pb.arc(r,s-6,8,0,Math.PI),pb.fill(),o&&(pb.fillStyle=`#e6c46f`,pb.font=`700 34px Georgia, serif`,pb.textAlign=`center`,pb.fillText(`!`,r,i-58)),F(`#fishPull`).classList.toggle(`on`,o)}function vb(){db=F(`#fishing`),fb=F(`#fishCanvas`),pb=fb.getContext(`2d`)}var Y,yb=.016;function bb(){let e=0,t=0,n=!1,r=Y.keys;return r.has(`KeyW`)&&(t+=1),r.has(`KeyS`)&&--t,r.has(`KeyD`)&&(e+=1),r.has(`KeyA`)&&--e,(r.has(`ShiftLeft`)||r.has(`ShiftRight`))&&(n=!0),Y.joy.active&&(e=Y.joy.x,t=Y.joy.y,Y.joy.mag>.95?(Y.joy.fullT+=yb,Y.joy.fullT>.45&&(n=!0)):Y.joy.fullT=0),{x:e,y:t,mag:Math.min(1,Math.hypot(e,t)),sprint:n}}function xb(e){let t=-Math.sin($.yaw),n=-Math.cos($.yaw),r=Math.cos($.yaw),i=-Math.sin($.yaw),a=t*e.y+r*e.x,o=n*e.y+i*e.x,s=Math.hypot(a,o);return s>1&&(a/=s,o/=s),{x:a,z:o}}function Sb(){Y.atkHeld=!1,Y.blockKey=Y.blockBtn=Y.blockMouse=!1,Y.queued=!1,Y.rdrag=!1,Y.joy.active=!1,Y.joy.id=null,Y.joy.x=Y.joy.y=Y.joy.mag=0,Y.look.id=null,F(`#joyBase`).hidden=!0,document.querySelectorAll(`.tb.on`).forEach(e=>e.classList.remove(`on`)),hx()}function Cb(){Q.mode===`play`&&(Y.atkHeld=!0,Y.atkT=0,Y.powerFired=!1)}function wb(){Y.atkHeld&&(Y.atkHeld=!1,Y.powerFired||zb(!1))}function Tb(){try{let e=vd.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}}var Eb,Db,Ob,kb=e=>{if(e.pointerId===Y.joy.id){let e=Y.joy;e.id=null,e.active=!1,e.x=e.y=e.mag=0,e.fullT=0,Db.hidden=!0}e.pointerId===Y.look.id&&(Y.look.id=null)};function Ab(){let e=F(`#touch`);e&&(e.style.setProperty(`--bscale`,String({s:.85,m:1,l:1.15}[L.btnSize]??1)),e.style.setProperty(`--balpha`,String(L.btnAlpha)),e.classList.toggle(`lefty`,!!L.lefty))}function jb(e,t,n){e.addEventListener(`pointerdown`,n=>{n.preventDefault(),n.stopPropagation();try{e.setPointerCapture(n.pointerId)}catch{}e.classList.add(`on`),R.init(),t()});let r=()=>{e.classList.contains(`on`)&&(e.classList.remove(`on`),n&&n())};e.addEventListener(`pointerup`,r),e.addEventListener(`pointercancel`,r),e.addEventListener(`lostpointercapture`,r)}function Mb(e){return yb=e,e}function Nb(){Y={keys:new Set,joy:{active:!1,id:null,x:0,y:0,mag:0,ox:0,oy:0,fullT:0},look:{id:null,x:0,y:0},atkHeld:!1,atkT:0,powerFired:!1,blockKey:!1,blockBtn:!1,blockMouse:!1,queued:!1,locked:!1,rdrag:!1},addEventListener(`keydown`,e=>{let t=e.code;if([`Space`,`Tab`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(t)&&Q.mode!==`title`&&e.preventDefault(),R.init(),Q.mode===`play`){if(Y.keys.add(t),e.repeat)return;t===`KeyJ`?Cb():t===`KeyF`||t===`KeyK`?Y.blockKey=!0:t===`Space`?Jb():t===`KeyC`||t===`ControlLeft`?Zb():t===`KeyR`?Yb():t===`KeyQ`?Xb():t===`KeyE`?Qb():t===`Tab`||t===`KeyI`?bv(`char`):t===`Escape`?bv():t===`KeyM`?Ev():t===`KeyL`&&Z.pendingLevels>0?pv():t===`KeyT`?CS():t===`KeyV`?px():t===`KeyH`&&c_()}else if(Q.mode===`dialog`){let n=parseInt(e.key,10);n>=1&&n<=Ly.length&&!Ly[n-1].dis?(z(`ui`),Ly[n-1].f()):t===`Escape`&&zy()}else Q.mode===`lockpick`?t===`KeyA`||t===`ArrowLeft`?J.keyL=!0:t===`KeyD`||t===`ArrowRight`?J.keyR=!0:(t===`Space`||t===`KeyW`||t===`ArrowUp`)&&!e.repeat?(J.turning=!0,F(`#lpTurn`).classList.add(`on`)):t===`Escape`&&Fv():Q.mode===`fishing`?(t===`Space`||t===`KeyE`||t===`Enter`)&&!e.repeat?gb():t===`Escape`&&hb():Q.mode===`menu`?(t===`Escape`||t===`Tab`||t===`KeyI`)&&xv():Q.mode===`levelup`&&(t===`Escape`?mv():[`Digit1`,`Digit2`,`Digit3`].includes(t)&&hv([`hp`,`st`,`rune`][t.slice(-1)-1]))}),addEventListener(`keyup`,e=>{let t=e.code;Y.keys.delete(t),t===`KeyJ`&&wb(),t===`KeyV`&&mx(),(t===`KeyF`||t===`KeyK`)&&(Y.blockKey=!1),(t===`KeyA`||t===`ArrowLeft`)&&(J.keyL=!1),(t===`KeyD`||t===`ArrowRight`)&&(J.keyR=!1),(t===`Space`||t===`KeyW`||t===`ArrowUp`)&&Q.mode===`lockpick`&&(J.turning=!1,F(`#lpTurn`).classList.remove(`on`))}),addEventListener(`blur`,()=>{Y.keys.clear(),Sb()}),vd.addEventListener(`mousedown`,e=>{Q.mode===`play`&&(R.init(),e.button===0?(!Y.locked&&!fd&&Tb(),Cb()):e.button===1?(e.preventDefault(),CS()):e.button===2&&(Y.locked?Y.blockMouse=!0:Y.rdrag=!0))}),addEventListener(`mouseup`,e=>{e.button===0&&wb(),e.button===2&&(Y.blockMouse=!1,Y.rdrag=!1)}),addEventListener(`mousemove`,e=>{Q.mode===`play`&&(Y.locked||Y.rdrag)&&(TS(e.movementX)||($.yaw-=e.movementX*.0026*L.sens),$.pitch+=e.movementY*.0022*L.sens*(L.invertY?-1:1))}),vd.addEventListener(`contextmenu`,e=>e.preventDefault()),document.addEventListener(`pointerlockchange`,()=>{let e=Y.locked;Y.locked=document.pointerLockElement===vd,e&&!Y.locked&&Q.mode===`play`&&bv()}),Eb=F(`#touch`),Db=F(`#joyBase`),Ob=F(`#joyKnob`),Eb.addEventListener(`pointerdown`,e=>{if(Q.mode===`play`&&e.target===Eb){if(R.init(),(L.lefty?e.clientX>innerWidth*.55:e.clientX<innerWidth*.45)&&Y.joy.id===null){let t=Y.joy;t.id=e.pointerId,t.active=!0,t.ox=e.clientX,t.oy=e.clientY,t.x=t.y=t.mag=0,Db.style.left=e.clientX+`px`,Db.style.top=e.clientY+`px`,Ob.style.transform=``,Db.hidden=!1,F(`#joyHint`).hidden=!0}else Y.look.id===null&&(Y.look.id=e.pointerId,Y.look.x=e.clientX,Y.look.y=e.clientY);try{Eb.setPointerCapture(e.pointerId)}catch{}}}),Eb.addEventListener(`pointermove`,e=>{let t=Y.joy;if(e.pointerId===t.id){let n=e.clientX-t.ox,r=e.clientY-t.oy,i=Math.hypot(n,r),a=Math.min(i,56),o=n/(i||1)*a,s=r/(i||1)*a;Ob.style.transform=`translate(${o}px,${s}px)`,t.x=o/56,t.y=-s/56,t.mag=a/56}else if(e.pointerId===Y.look.id){let t=e.clientX-Y.look.x;TS(t)||($.yaw-=t*.0065*L.sens),$.pitch+=(e.clientY-Y.look.y)*.0045*L.sens*(L.invertY?-1:1),Y.look.x=e.clientX,Y.look.y=e.clientY}}),Eb.addEventListener(`pointerup`,kb),Eb.addEventListener(`pointercancel`,kb),jb(F(`#tAttack`),Cb,wb),jb(F(`#tBlock`),()=>{Y.blockBtn=!0},()=>{Y.blockBtn=!1}),jb(F(`#tDodge`),Jb),jb(F(`#tRune`),Yb),jb(F(`#tSneak`),Zb),jb(F(`#tPotion`),Xb),jb(F(`#tInteract`),Qb),jb(F(`#tLock`),CS),jb(F(`#tBow`),px,mx),Ab()}function Pb(e){let t=null,n=1e9;for(let r of CC){if(r.dead||r.zone!==Q.zone||r.state===`throne`)continue;let i=r.pos.x-Z.pos.x,a=r.pos.z-Z.pos.z,o=Math.hypot(i,a);if(o>e+r.def.r)continue;let s=o+Math.abs(Uu(Z.yaw,Math.atan2(i,a)))*1.5;s<n&&(n=s,t=r)}return t}var Fb=e=>e.kind===`draugr`||e.kind===`boss`||e.kind===`troll`,Ib=[[`bleed`,`bd`,10691098,9],[`burn`,`br`,16742954,-2]];function Lb(e){for(let t of CC)for(let[n,r,i,a]of Ib){let o=t[n];if(o&&!t.dead){if(o.t-=e,o.tick-=e,o.tick<=0){o.tick+=.5;let e=o.dps*.5;if(t.hp-=e,Wg(t.pos,e,r,t.def.height*.9),t.zone===Q.zone&&Mg(t.pos.x,t.pos.y+t.def.height*.5,t.pos.z,4,i,1.5,.5,a,1),t.hp<=0){Ub(t);break}}o.t<=0&&(t[n]=null)}}}var Rb=e=>[`chase`,`windup`,`strike`,`recover`,`slam`,`roar`,`rising`].includes(e.state);function zb(e){if(Q.mode!==`play`||Z.dead||Z.dodge||Z.stagger>0||rx.drawing)return;if(Z.atk){e||(Y.queued=!0);return}let t=`pw`;e||(Z.combo=Z.comboT<.45&&(Z.combo||0)<3?(Z.combo||0)+1:1,t=`p`+Z.combo);let n=Pm(t),r=t===`p3`&&im(`combo`)?{...n,cost:n.cost*.75,mult:n.mult*1.35}:n;if(Z.st<(e?r.cost:1)){sS(`stBar`);return}Z.st=Math.max(0,Z.st-r.cost),Z.stDelay=.8;let i=hS.target,a=i&&!i.dead&&Z.pos.distanceTo(i.pos)<6?i:Pb(4.8);a&&(Z.yaw=Math.atan2(a.pos.x-Z.pos.x,a.pos.z-Z.pos.z)),Z.atk={power:e,type:t,d:r,W:r.W,S:r.S,R:r.R,t:0,dur:r.W+r.S+r.R,hitAt:r.W+r.S*.6,hit:!1,swung:!1,target:a},Z.noiseT=.6}function Bb(e){let t=e.t<e.W?`windup`:e.t<e.W+e.S?`strike`:`recover`,n=t===`windup`?e.t/e.W:t===`strike`?(e.t-e.W)/e.S:Math.min(1,(e.t-e.W-e.S)/e.R);return{type:e.type,phase:t,k:n,player:!0}}function Vb(e){let t=e.d,n=Dm()*t.mult;for(let e of CC){if(e.dead||e.zone!==Q.zone||e.state===`throne`)continue;let r=e.pos.x-Z.pos.x,i=e.pos.z-Z.pos.z,a=Math.hypot(r,i);a>t.reach+e.def.r||Math.abs(Uu(Z.yaw,Math.atan2(r,i)))>t.arc&&a>1||Hb(e,n,{melee:!0,power:!!t.heavy,knock:t.knock,cls:t.cls||`sword`})}}function Hb(e,t,n){if(e.dead)return;let r=t*(.9+Math.random()*.2),i=n.power?`pw`:n.rune?`rn`:``,a=!Rb(e)&&e.state!==`flee`,o=n.melee||n.ranged?wp[n.cls]:null,s=n.melee?sh(!1):n.ranged?sh(!0):null;n.melee&&Z.riposteT>0&&(r*=1.5,Z.riposteT=0,e.stagger=Math.max(e.stagger,DC(e)?.4:.8),i=`pw`),o&&Z.sneaking&&a&&(r*=o.sneak*(n.melee&&im(`assassin`)?1.5:1),i=`crit`,Z.stats.sneakAtk++,em(`sneak`,4),eS(`GİZLİ SALDIRI ×${o.sneak}`)),n.cls===`mace`&&Fb(e)&&(r*=Ep),n.cls===`axe`&&(e.bleed={t:Tp.dur,dps:r*Tp.share/Tp.dur,tick:.5}),s===`frost`?(r+=Hp.dmg,e.chill=Hp.dur):s===`fire`?e.burn={t:Up.dur,dps:r*Up.share/Up.dur,tick:.5}:s===`drain`&&(Z.hp=Math.min(Z.maxHp,Z.hp+r*Wp)),s&&Mg(e.pos.x,e.pos.y+e.def.height*.6,e.pos.z,8,Vp[s].color,2.5,.5,s===`fire`?-2:4,1),e.hp-=r,e.flash=1,e.model.recoil=1,Wg(e.pos,r,i,e.def.height*.75),n.melee&&em(`onehand`,.8+r/18),n.ranged&&em(`archery`,1+r/15),n.rune&&em(`rune`,2.5);let c=e.pos.x-Z.pos.x,l=e.pos.z-Z.pos.z,u=Math.hypot(c,l)||1,d=(n.knock||2)*(DC(e)?.12:1);e.kb.x+=c/u*d,e.kb.z+=l/u*d,DC(e)?(n.rune||n.melee&&n.power&&(n.cls===`mace`||im(`crusher`)))&&e.state!==`slam`&&(e.stagger=Math.max(e.stagger,.4)):n.power||n.rune?e.stagger=n.rune?1.2:n.cls===`mace`?.9:.6:(e.kind===`wolf`||e.wild||e.state===`windup`&&e.t<e.def.windup*.5)&&(e.stagger=.35),e.state===`dormant`?(e.state=`rising`,e.t=0,z(`draugr`)):!Rb(e)&&e.state!==`throne`&&Wb(e);let f=e.kind===`wolf`||e.wild?12597547:e.kind===`boss`?7329993:e.kind===`troll`?10479359:12175272;Mg(e.pos.x,e.pos.y+e.def.height*.55,e.pos.z,n.power?18:10,f,4,.5,9,1.5),z(`hit`),RS(n.power?.085:.045),LS(n.power?.22:.08),Xu(12),e.hp<=0&&Ub(e)}function Ub(e){if(e.dead=!0,e.deadT=0,e.hp=0,e.bar.bg.visible=e.bar.fill.visible=!1,e.mark.visible=!1,Z.stats.kills++,z(`death`),qp[e.kind])for(let[t,n]of Object.entries(qp[e.kind]))Xm(t,n);if(e.kind===`wolf`&&(Z.inv.pelts++,X(`Kurt postu`),Math.random()<.1&&(Z.inv.potions++,X(`Şifa iksiri`))),e.kind===`bandit`||e.kind===`archer`){let t=6+Math.floor(Math.random()*12);if(Z.inv.gold+=t,X(`${t} altın`),e.kind===`archer`){let e=3+Math.floor(Math.random()*4);Z.inv.arrows+=e,X(`Ok ×${e}`)}}if(e.kind===`warlord`&&by(),e.kind===`draugr`){let e=5+Math.floor(Math.random()*11);Z.inv.gold+=e,X(`${e} altın`),Math.random()<.25&&(Z.inv.potions++,X(`Şifa iksiri`))}if(e.kind===`boss`){Z.inv.gold+=80,X(`80 altın`),$y.x=e.pos.x,$y.z=e.pos.z,$y.mesh.position.set(e.pos.x,0,e.pos.z),$y.mesh.visible=!0,lg(`g2`,!0,!1),Z.stage=3,eS(`HÖYÜK KRALI DÜŞTÜ`),LS(.5),AC.visible=jC.visible=!1;for(let e of CC)e.temp&&e.zone===`dungeon`&&!e.dead&&(e.hp=0,Ub(e));ib()}e.kind===`troll`&&(Z.inv.gold+=40,X(`40 altın`),eS(`BUZ TROLÜ DEVRİLDİ`),LS(.45),AC.visible=jC.visible=!1,Z.side.ulf>=1&&Z.side.ulf<4&&(Z.side.ulf=4,Z.track=`side`,X(`Yan görev: Ulf'u çöz`)),ib()),Wm(e.kind),e.bleed=e.burn=null,e.chill=0,Oy(e.kind)}function Wb(e){if(e.wild){for(let t of CC)(t===e||e.pack&&t.pack===e.pack&&t.pos.distanceTo(e.pos)<16)&&!t.dead&&(t.state=`flee`,t.t=6,t.aware=1);return}if(e.state===`dormant`){e.state=`rising`,e.t=0,z(`draugr`);return}if(e.state=`chase`,e.aware=1.2,e.alertT=1.6,z(e.kind===`wolf`?`wolf`:e.kind===`troll`?`roar`:`draugr`),e.pack)for(let t of CC)t!==e&&t.pack===e.pack&&!t.dead&&!Rb(t)&&t.pos.distanceTo(e.pos)<14&&(t.state=`chase`,t.aware=1.2,t.alertT=1.6)}function Gb(e,t,n={}){if(Z.dead||Z.iframe>0||Q.mode!==`play`)return;let r=Math.atan2(t.pos.x-Z.pos.x,t.pos.z-Z.pos.z),i=Math.abs(Uu(Z.yaw,r))<1.2,a=!1;if(Z.blocking&&i&&!Z.atk&&!Z.dodge){let r=Am()*(n.slam?.5:1);Z.st>=7?(Z.st=Math.max(0,Z.st-14),Z.stDelay=.9,e*=t.kind===`archer`&&im(`deflect`)?0:1-r,a=!0,im(`riposte`)&&(Z.riposteT=1),em(`block`,1.2+e*.05),z(`block`),Mg(Z.pos.x+Math.sin(Z.yaw)*.6,Z.pos.y+1.3,Z.pos.z+Math.cos(Z.yaw)*.6,10,16765066,3.5,.35,8,1)):(Z.stagger=.6,e*=.6,sS(`stBar`))}e*=1-km(),Z.hp-=e,Z.hurtFlash=a?.25:1,Wg(Z.pos,e,a?`bl`:`pl`,2);let o=Z.pos.x-t.pos.x,s=Z.pos.z-t.pos.z,c=Math.hypot(o,s)||1,l=a?2:n.slam?9:4;Z.kb.x+=o/c*l,Z.kb.z+=s/c*l,a||(z(`hurt`),LS(.28),Xu(30),RS(.05),Z.stagger=Math.max(Z.stagger,n.slam?.5:.12),e>=12&&(Z.atk=null)),Z.hp<=0&&(Z.hp=0,Kb())}function Kb(){Z.dead=!0,Z.deadT=0,Z.atk=null,Z.dodge=null,Z.stats.deaths++,z(`death`),setTimeout(()=>{Z.dead&&(Q.mode=`dead`,F(`#dead`).hidden=!1,Qx(F(`#dead`)),lS(),Y.locked&&document.exitPointerLock?.())},1400)}function qb(){F(`#dead`).hidden=!0,Z.dead=!1,Z.hp=Z.maxHp,Z.st=Z.maxSt,Z.runeCd=0,Z.kb.set(0,0,0),Z.model.root.rotation.x=0,Z.stagger=0;for(let e of CC)!e.dead&&e.zone===Q.zone&&e.state!==`dormant`&&e.state!==`throne`&&(e.hp=e.maxHp,e.aware=0,e.state=`idle`,e.pos.copy(e.home),e.kb.set(0,0,0),e===OC&&(e.state=`throne`,e.phase2=!1,e.slamCd=5,e.yaw=-Math.PI/2,kC.triggered=!1));for(let e of[...CC])e.temp&&e.zone===`dungeon`&&TC(e);AC.visible=jC.visible=!1,Q.zone===`dungeon`?Hv(`dungeon`,B,2.6,0):Hv(`world`,2,7,Math.PI),Q.mode=`play`,lS()}function Jb(){if(Q.mode!==`play`||Z.dead||Z.dodge||Z.stagger>0)return;let e=Mm();if(Z.st<e-6){sS(`stBar`);return}Z.st=Math.max(0,Z.st-e),Z.stDelay=.7,Z.atk=null;let t=bb(),n,r,i=!1;if(t.mag>.2){let e=xb(t);n=e.x,r=e.z,Z.yaw=Math.atan2(n,r)}else n=-Math.sin(Z.yaw),r=-Math.cos(Z.yaw),i=!0;let a=Math.hypot(n,r)||1;Z.dodge={t:0,dur:i?.3:.42,dx:n/a,dz:r/a,back:i},Z.iframe=.32,z(`dodge`)}function Yb(){if(Q.mode!==`play`||Z.dead)return;if(Z.runeCd>0){F(`#tRune`).classList.add(`on`),setTimeout(()=>F(`#tRune`).classList.remove(`on`),120);return}Z.runeCd=Z.runeCdMax*(im(`echo`)?.8:1);let e=0,t=6.5*(im(`wave`)?1.3:1),n=26*Z.runeMult*(1+(Z.skills.rune.lvl-15)*.04);for(let r of CC)r.dead||r.zone!==Q.zone||r.state===`throne`||r.pos.distanceTo(Z.pos)<t+r.def.r&&(Hb(r,n,{rune:!0,knock:9}),im(`frostwave`)&&(r.chill=3),e++);e===0&&em(`rune`,1),Ig(Z.pos.x,Z.pos.y,Z.pos.z,7329993,t+.3,.55),Ig(Z.pos.x,Z.pos.y,Z.pos.z,12582132,4.5,.4),Mg(Z.pos.x,Z.pos.y+1,Z.pos.z,40,7329993,7,.7,2,.5),Ad.color.setHex(7329993),Q.runeFlash=.35,LS(.35),z(`rune`),Xu(25),Z.noiseT=1.2,Z.atk=null}function Xb(){if(!(Q.mode!==`play`||Z.dead||Z.potCd>0)){if(Z.inv.potions<=0){X(`İksirin kalmadı`);return}if(Z.hp>=Z.maxHp){X(`Sağlığın zaten dolu`);return}Z.inv.potions--,Z.hp=Math.min(Z.maxHp,Z.hp+45),Z.potCd=1.5,z(`drink`),Mg(Z.pos.x,Z.pos.y+1.2,Z.pos.z,16,16738906,1.5,.8,-1,.5)}}function Zb(){Q.mode!==`play`||Z.dead||(Z.sneaking=!Z.sneaking,F(`#tSneak`).classList.toggle(`act`,Z.sneaking))}function Qb(){if(Q.mode!==`play`||Z.dead)return;let e=tb();e&&e.act()}var $b=.22,ex=34,tx=9.8,nx=24,rx={drawing:!1,t:0,shotT:0,target:null,breath:0},ix=[],ax,ox,sx,cx=new A,lx=new A,ux=new A,dx=()=>{let e=Cm();return e?Math.min(1,rx.t/(um(e).draw*(im(`steady`)?.75:1))):0},fx=()=>rx.drawing?dx():rx.shotT>0?0:-1;function px(){if(!(Q.mode!==`play`||Z.dead||rx.drawing)){if(!Cm()){X(`Yayın yok. Bjorn satıyor ya da demirhanede dövebilirsin.`);return}if(Z.inv.arrows<=0){X(`Okun kalmadı`);return}Z.dodge||Z.stagger>0||(Z.atk=null,rx.drawing=!0,rx.t=0,rx.breath=0,z(`strain`))}}function mx(){rx.drawing&&(rx.drawing=!1,!(rx.t<.18||Z.dead||Q.mode!==`play`)&&vx(dx()))}function hx(){rx.drawing=!1,rx.shotT=0}function gx(){let e=hS.target;if(e&&!e.dead)return e;let t=$.yaw+Math.PI,n=null,r=1/0;for(let e of CC){if(e.dead||e.zone!==Q.zone||e.state===`throne`||!e.model.root.visible)continue;let i=e.pos.x-Z.pos.x,a=e.pos.z-Z.pos.z,o=Math.hypot(i,a);if(o>ex)continue;let s=Math.abs(Uu(t,Math.atan2(i,a)));if(s>$b+.6/Math.max(o,1)||Q.zone===`dungeon`&&!$h(Z.pos.x,Z.pos.z,e.pos.x,e.pos.z))continue;let c=s*10+o*.05;c<r&&(r=c,n=e)}return n}function _x(e,t,n){let r=t.x-e.x,i=t.z-e.z,a=Math.hypot(r,i),o=t.y-e.y,s=n*n,c=s*s-tx*(tx*a*a+2*o*s),l=c>=0?Math.atan((s-Math.sqrt(c))/(tx*a)):.6;return{yaw:Math.atan2(r,i),ang:l}}function vx(e){let t=Cm();if(!t)return;Z.inv.arrows--,rx.shotT=.3,Ox(),Z.noiseT=Math.max(Z.noiseT,.25);let n=um(t).vel*(.55+.45*e),r=e>=.98;lx.set(Z.pos.x+Math.sin(Z.yaw)*.45,Z.pos.y+1.5,Z.pos.z+Math.cos(Z.yaw)*.45);let i=rx.target||gx(),a=Z.yaw,o=.04;i&&(cx.set(i.pos.x,i.pos.y+i.def.height*.55,i.pos.z),{yaw:a,ang:o}=_x(lx,cx,n));let s=new A(Math.sin(a)*Math.cos(o),Math.sin(o),Math.cos(a)*Math.cos(o)).multiplyScalar(n),c=new M(ax,ox);if(c.position.copy(lx),c.lookAt(cx.copy(lx).add(s)),Sd.add(c),ix.push({m:c,v:s,dmg:wm()*(.35+.65*e),full:r,life:3,stuck:0,zone:Q.zone}),ix.length>nx){let e=ix.shift();Sd.remove(e.m)}z(r?`swing`:`dodge`)}function yx(e){let t=e.model.root.scale.y;lx.set(e.pos.x+Math.sin(e.yaw)*.45,e.pos.y+1.45*t,e.pos.z+Math.cos(e.yaw)*.45);let n=lx.distanceTo(Z.pos)/30,r=Z.moveSpeedNow*n*.6;cx.set(Z.pos.x+Math.sin(Z.yaw)*r,Z.pos.y+1.2,Z.pos.z+Math.cos(Z.yaw)*r);let{yaw:i,ang:a}=_x(lx,cx,30);i+=(Math.random()-.5)*.05,a+=(Math.random()-.5)*.03;let o=new A(Math.sin(i)*Math.cos(a),Math.sin(a),Math.cos(i)*Math.cos(a)).multiplyScalar(30),s=new M(ax,sx);if(s.position.copy(lx),s.lookAt(cx.copy(lx).add(o)),Sd.add(s),ix.push({m:s,v:o,dmg:e.def.dmg*(.9+Math.random()*.2),full:!1,life:3,stuck:0,zone:e.zone,hostile:e}),ix.length>nx){let e=ix.shift();Sd.remove(e.m)}lx.distanceTo(Z.pos)<25&&z(`dodge`)}function bx(e,t){for(let n=0;n<=4;n++){let r=n/4,i=e.x+(t.x-e.x)*r,a=e.y+(t.y-e.y)*r,o=e.z+(t.z-e.z)*r;if(a>Z.pos.y+.1&&a<Z.pos.y+1.85&&Math.hypot(i-Z.pos.x,o-Z.pos.z)<.48)return!0}return!1}function xx(e,t,n){let r=n.def.r+.18,i=n.pos.y+.15,a=n.pos.y+n.def.height*(n.kind===`boss`?1.55:n.kind===`troll`?1.6:1)*.92;for(let o=0;o<=4;o++){let s=o/4,c=e.x+(t.x-e.x)*s,l=e.y+(t.y-e.y)*s,u=e.z+(t.z-e.z)*s;if(!(l<i||l>a)&&Math.hypot(c-n.pos.x,u-n.pos.z)<r)return!0}return!1}function Sx(e){if(e.y>3.2)return!1;for(let t of xh.world)if(`r`in t){if(Math.hypot(e.x-t.x,e.z-t.z)<t.r)return!0}else if(e.x>t.x0&&e.x<t.x1&&e.z>t.z0&&e.z<t.z1)return!0;return!1}function Cx(e){let t=Cm();if(rx.drawing){if(!t||Z.dead||Z.dodge||Z.stagger>0||Q.mode!==`play`)rx.drawing=!1;else{rx.t+=e,rx.target=gx();let t=rx.target?Math.atan2(rx.target.pos.x-Z.pos.x,rx.target.pos.z-Z.pos.z):$.yaw+Math.PI;Z.yaw+=Uu(Z.yaw,t)*Math.min(1,e*14)}}else rx.target=null;rx.shotT=Math.max(0,rx.shotT-e);let n=rx.drawing&&im(`breath`)&&dx()>=1&&rx.breath<3;n&&(rx.breath+=e*2),Q.slowmo=n?.5:1,document.body.classList.toggle(`slowmo`,n),Dx();for(let t=ix.length-1;t>=0;t--){let n=ix[t];if(n.m.visible=n.zone===Q.zone,n.stuck>0){n.stuck-=e,n.stuck<=0&&(Sd.remove(n.m),ix.splice(t,1));continue}if(n.life-=e,n.life<=0||n.zone!==Q.zone){Sd.remove(n.m),ix.splice(t,1);continue}let r=n.m.position,i=ux.copy(r).addScaledVector(n.v,e);if(n.v.y-=tx*e,n.hostile&&!Z.dead&&Z.iframe<=0&&bx(r,i)){Gb(n.dmg,n.hostile),Sd.remove(n.m),ix.splice(t,1);continue}let a=null;if(!n.hostile){for(let e of CC)if(!e.dead&&e.zone===Q.zone&&e.state!==`throne`&&xx(r,i,e)){a=e;break}}if(a){Hb(a,n.dmg,{ranged:!0,power:n.full,knock:n.full?2.5:1,cls:`bow`}),n.full&&a.hp>0&&eS(`TAM GERİLİM`),Sd.remove(n.m),ix.splice(t,1);continue}let o=n.zone===`world`?U(i.x,i.z):0,s=n.zone===`dungeon`?!$h(r.x,r.z,i.x,i.z)||i.y>3.6:Sx(i);if(i.y<=o+.02||s){s||(i.y=o+.05),r.copy(i),n.stuck=6,z(`click`);continue}n.m.lookAt(cx.copy(i).add(n.v)),r.copy(i)}}var wx,Tx,Ex;function Dx(){let e=rx.drawing?rx.target:null;if(!e){wx.hidden=!0;return}if(Tx.set(e.pos.x,e.pos.y+e.def.height*.6,e.pos.z).project(Ex),Tx.z>1){wx.hidden=!0;return}wx.hidden=!1;let t=dx();wx.style.transform=`translate(${(Tx.x+1)/2*innerWidth-14}px,${(1-Tx.y)/2*innerHeight-14}px) scale(${1.6-t*.6})`,wx.classList.toggle(`full`,t>=.98)}function Ox(){let e=Cm();ox.emissive.setHex(e?.rune?Vp[e.rune].color:0)}function kx(e){let t=[new Xc(.012,.012,.72,5).rotateX(Math.PI/2),new Zc(.03,.09,4).rotateX(Math.PI/2).translate(0,0,.4),new Rr(.06,.004,.1).translate(0,0,-.32),new Rr(.004,.06,.1).translate(0,0,-.32)];ax=t.slice(1).reduce(Ax,t[0]),ox=new Jl({color:13481100,flatShading:!0,emissive:0}),sx=new Jl({color:8010282,flatShading:!0}),wx=F(`#aimDot`),Tx=new A,Ex=e}function Ax(e,t){let n=e.index?e.toNonIndexed():e,r=t.index?t.toNonIndexed():t,i=n.attributes.position.array,a=r.attributes.position.array,o=new Float32Array(i.length+a.length);o.set(i),o.set(a,i.length);let s=new wr;return s.setAttribute(`position`,new pr(o,3)),s.computeVertexNormals(),s}var jx,Mx,Nx,Px,Fx,Ix,Lx,Rx,zx,Bx,Vx,Hx,Ux,Wx,Gx,Kx,qx,Jx,Yx,Xx,Zx;function Qx(e){e.classList.add(`arming`),clearTimeout(e._armT),e._armT=setTimeout(()=>e.classList.remove(`arming`),300)}function X(e,t=``){let n=document.createElement(`div`);n.className=`toast `+t,n.textContent=e,F(`#toasts`).appendChild(n),setTimeout(()=>n.remove(),3300);let r=F(`#toasts`).children;r.length>5&&r[0].remove()}var $x=0;function eS(e){let t=F(`#cmsg`);t.textContent=e,t.style.opacity=`1`,clearTimeout($x),$x=setTimeout(()=>{t.style.opacity=`0`},1300)}var tS=0;function nS(e,t){F(`#bannerBig`).textContent=e,F(`#bannerSmall`).textContent=t,F(`#banner`).style.opacity=`1`,clearTimeout(tS),tS=setTimeout(()=>{F(`#banner`).style.opacity=`0`},2600)}var rS=[],iS=new A;function aS(e,t,n){let r=document.createElement(`div`);r.className=`bark`,r.textContent=n,F(`#hud`).appendChild(r),rS.push({el:r,pos:e,h:2.25*t,t:0}),rS.length>3&&rS.shift().el.remove()}function oS(e){for(let t=rS.length-1;t>=0;t--){let n=rS[t];if(n.t+=e,iS.set(n.pos.x,n.pos.y+n.h,n.pos.z).project(Cd),n.t>3.6||iS.z>1||Q.mode!==`play`){n.el.remove(),rS.splice(t,1);continue}n.el.style.transform=`translate(${(iS.x*.5+.5)*innerWidth}px,${(-iS.y*.5+.5)*innerHeight}px) translate(-50%,-100%)`,n.el.style.opacity=String(Math.min(1,n.t*4,(3.6-n.t)*2))}}function sS(e){let t=F(`#`+e);t.classList.add(`flash`),setTimeout(()=>t.classList.remove(`flash`),300)}function cS(){oS(1/60),Mx.style.transform=`scaleX(${Iu(Z.hp/Z.maxHp,0,1)})`,Ju(Px,String(Math.ceil(Z.hp))),Nx.style.transform=`scaleX(${Iu(Z.st/Z.maxSt,0,1)})`,Ju(Fx,String(Math.floor(Z.st))),Yu(Yx,Z.pendingLevels<=0),Ju(F(`#clock`),Q.zone===`world`?`${_p()} · ${lh[Q.weather]}`:`Ata Höyüğü`),F(`#clock`).classList.toggle(`regen`,!!Z.regen),F(`#clock`).classList.toggle(`cold`,uh.cold);let e=Ay(),t=jy(e),n=t.ob;Ju(F(`#objTitle`),t.title),Ju(Ix,n.text);let r=e.filter(e=>e!==t),i=r.length===1?`${r[0].name}: ${r[0].ob.text}`:r.length>1?`+${r.length} görev daha`:``;Yu(F(`#objOther`),!i),i&&Ju(F(`#objOther`),i+` · değiştirmek için dokun`),F(`#objCard`).classList.toggle(`can-toggle`,r.length>0);let a=null;if(n.t&&(a=Math.hypot(n.t.x-Z.pos.x,n.t.z-Z.pos.z)),Ju(Lx,a!==null&&a>4?`${Math.round(a)} m`:``),Z.bounty){let e=Zp[Z.bounty.tpl];Yu(Rx,!1),Ju(Rx,Z.bounty.done?`İlan: ${e.title} · ödül tahtada`:Z.bounty.tpl===`herbs`?`İlan: ${e.title} · ${Math.min(Z.inv.herbs,e.need)}/${e.need} çiçek`:Z.bounty.tpl===`fish`?`İlan: ${e.title} · ${Math.min(sb(),e.need)}/${e.need} balık`:`İlan: ${e.title} · ${Z.bounty.count}/${e.need}`)}else Yu(Rx,!0);if(n.t&&n.t.zone===Q.zone&&a>3.5){qg.visible=!0,qg.position.set(n.t.x,n.t.zone===`world`?U(n.t.x,n.t.z):0,n.t.z),qg.userData.gem.position.y=3.2+Math.sin(Q.time*2)*.2,qg.userData.gem.rotation.y+=.02,Gg.set(n.t.x,qg.position.y+2.5,n.t.z).project(Cd);let e=Gg.z>1;if(e||Math.abs(Gg.x)>.92||Math.abs(Gg.y)>.88){let t=Gg.x,n=Gg.y;e&&(t=-t,n=-n);let r=Math.atan2(n,t),i=innerWidth/2,a=innerHeight/2,o=innerWidth/2-40,s=innerHeight/2-60;Kx.style.transform=`translate(${i+Math.cos(r)*o-9}px,${a-Math.sin(r)*s-8}px) rotate(${Math.PI/2-r}rad)`,Yu(Kx,!1)}else Yu(Kx,!0)}else qg.visible=!1,Yu(Kx,!0);let o=Q.zone===`dungeon`?kC.triggered&&!OC.dead?OC:null:my()&&!my().dead&&Rb(my())?my():!EC.dead&&Rb(EC)?EC:null;if(Yu(zx,!o),o&&(Ju(F(`#bossName`),o.def.name),Bx.style.transform=`scaleX(${Iu(o.hp/o.maxHp,0,1)})`),Z.sneaking){let e=0,t=!1;for(let n of CC)n.dead||n.zone!==Q.zone||n.state===`throne`||n.pos.distanceTo(Z.pos)>22||(Rb(n)?t=!0:e=Math.max(e,n.aware));let n=t?2:+(e>.35);Vx.dataset.s=String(n),Ju(Hx,t?`FARK EDİLDİN`:e>.35?`ŞÜPHELİ`:`GİZLİ`),Ux.setAttribute(`ry`,(t?6:.6+Math.min(1,e)*5.4).toFixed(2)),Yu(Vx,!1)}else Yu(Vx,!0);let s=Q.mode===`play`&&!Z.dead?tb():null;fd?(Yu(Wx,!0),Yu(Xx,!s),s&&Ju(Zx,s.label())):(Yu(Xx,!0),Yu(Wx,!s),s&&Ju(Gx,s.label()));let c=Z.runeCd>0?Z.runeCd/Z.runeCdMax:0;F(`#tRune`).style.setProperty(`--cd`,c.toFixed(3)),Ju(F(`#potCount`),String(Z.inv.potions)),F(`#tLock`).classList.toggle(`act`,!!hS.target);let l=!!Cm();Yu(F(`#tBow`),!l),Ju(F(`#arrowCount`),String(Z.inv.arrows)),F(`#tBow`).classList.toggle(`act`,rx.drawing),fd||(Ju(F(`#chipRune span`),Z.runeCd>0?`Rün ${Math.ceil(Z.runeCd)} sn`:`Rün hazır`),F(`#chipRune`).classList.toggle(`off`,Z.runeCd>0),Ju(F(`#chipPot span`),`İksir ×${Z.inv.potions}`),F(`#chipPot`).classList.toggle(`off`,Z.inv.potions<=0),F(`#chipLock`).classList.toggle(`on`,!!hS.target),Ju(F(`#chipLock span`),hS.target?`Kilitli`:`Kilitlen`),Yu(F(`#chipBow`),!l),Ju(F(`#chipBow span`),`Yay · ${Z.inv.arrows} ok`),F(`#chipBow`).classList.toggle(`off`,Z.inv.arrows<=0),F(`#chipBow`).classList.toggle(`on`,rx.drawing),F(`#chipSneak`).classList.toggle(`on`,Z.sneaking),Ju(F(`#chipSneak span`),Z.sneaking?`Gizleniyor`:`Gizlen`)),Jx.style.opacity=String(Math.max(Z.hurtFlash*.8,Z.hp<Z.maxHp*.3?.35+Math.sin(Q.time*5)*.1:0))}function lS(){let e=Q.mode!==`title`&&Q.mode!==`boot`;Yu(jx,!e),Yu(F(`#touch`),!(fd&&Q.mode===`play`)),Yu(F(`#deskbar`),fd||Q.mode!==`play`),Yu(qx,!L.fps||!e),uS()}function uS(){Yu(F(`#rotHint`),!(fd&&L.rotHint&&innerHeight>innerWidth&&Q.mode!==`boot`))}function dS(){jx=F(`#hud`),Mx=F(`#hpFill`),Nx=F(`#stFill`),Px=F(`#hpNum`),Fx=F(`#stNum`),Ix=F(`#objText`),Lx=F(`#objDist`),Rx=F(`#bountyHud`),zx=F(`#boss`),Bx=F(`#bossFill`),Vx=F(`#stealth`),Hx=F(`#stealthTxt`),Ux=F(`#eyeOpen`),Wx=F(`#prompt`),Gx=F(`#promptTxt`),Kx=F(`#arrow`),qx=F(`#fps`),Jx=F(`#hurt`),Yx=F(`#lvlBadge`),Xx=F(`#tInteract`),Zx=F(`#tInteractTxt`),F(`#rotClose`).addEventListener(`click`,()=>{L.rotHint=!1,qu(),uS()}),document.querySelectorAll(`#levelup .opt`).forEach(e=>e.addEventListener(`click`,()=>hv(e.dataset.lu))),Yx.addEventListener(`click`,pv),document.querySelectorAll(`.tab`).forEach(e=>e.addEventListener(`click`,()=>{Ov(e.dataset.tab),z(`ui`),Tv()})),F(`#mResume`).addEventListener(`click`,xv),F(`#mSave`).addEventListener(`click`,()=>{ib(),X(`Oyun kaydedildi`)}),F(`#mReset`).addEventListener(`click`,()=>{if(!vv){kv(!0),F(`#mReset`).textContent=`Emin misin? Tekrar bas`;return}Wu.del(Gu),location.reload()}),F(`#btnMenu`).addEventListener(`click`,()=>bv()),F(`#btnSound`).addEventListener(`click`,Ev),Dv(),F(`#btnRetry`).addEventListener(`click`,qb),F(`#vFree`).addEventListener(`click`,()=>{F(`#victory`).hidden=!0,Q.mode=`play`,lS()}),F(`#vNew`).addEventListener(`click`,()=>{Wu.del(Gu),location.reload()})}var fS=16,pS=22,mS=90,hS={target:null,swipe:0},gS,_S;function vS(e){return e.dead||e.zone!==Q.zone||e.state===`throne`||!e.model.root.visible||Z.pos.distanceTo(e.pos)>fS?!1:Q.zone!==`dungeon`||$h(Z.pos.x,Z.pos.z,e.pos.x,e.pos.z)}var yS=()=>$.yaw+Math.PI;function bS(e){let t=e.pos.x-Z.pos.x,n=e.pos.z-Z.pos.z;return Math.hypot(t,n)*.35+Math.abs(Uu(yS(),Math.atan2(t,n)))*4-(Rb(e)?2:0)}function xS(){let e=null,t=1/0;for(let n of CC)if(vS(n)){let r=bS(n);r<t&&(t=r,e=n)}return hS.target=e,hS.swipe=0,e&&z(`ui`),!!e}function SS(){hS.target=null,hS.swipe=0}function CS(){Q.mode!==`play`||Z.dead||(hS.target?SS():xS()||X(`Yakında kilitlenecek hedef yok`))}function wS(e){let t=hS.target;if(!t)return;let n=Math.atan2(t.pos.x-Z.pos.x,t.pos.z-Z.pos.z),r=null,i=1/0;for(let a of CC){if(a===t||!vS(a))continue;let o=Uu(n,Math.atan2(a.pos.x-Z.pos.x,a.pos.z-Z.pos.z));o*e>=0||Math.abs(o)<i&&(i=Math.abs(o),r=a)}r&&(hS.target=r,z(`ui`))}function TS(e){return hS.target?(hS.swipe+=e,Math.abs(hS.swipe)>mS&&(wS(Math.sign(hS.swipe)),hS.swipe=0),!0):!1}function ES(e){let t=hS.target;if(t&&(t.dead||t.zone!==Q.zone||Z.dead||Z.pos.distanceTo(t.pos)>pS)){let e=t.dead&&!Z.dead;if(SS(),e){let e=null,t=10;for(let n of CC)if(vS(n)&&Rb(n)){let r=Z.pos.distanceTo(n.pos);r<t&&(t=r,e=n)}hS.target=e}}let n=hS.target;if(gS.visible=_S.visible=!!n,!n)return;let r=n.model.root.position.y;gS.position.set(n.pos.x,r+.06,n.pos.z),gS.scale.setScalar(n.def.r*(n.kind===`boss`?1.55:n.kind===`troll`?1.6:1)*1.5+.45),gS.rotation.y+=e*1.2,_S.position.set(n.pos.x,r+n.def.height+.55+Math.sin(Q.time*4)*.08,n.pos.z),_S.rotation.y+=e*3,$.yaw+=Uu($.yaw,Math.atan2(n.pos.x-Z.pos.x,n.pos.z-Z.pos.z)+Math.PI)*Math.min(1,e*6);let i=Q.zone===`dungeon`?.6:Iu(.26+(n.def.height>2.5?.1:0),.1,.5);$.pitch+=(i-$.pitch)*Math.min(1,e*2)}function DS(){let e=zd(15123567,{transparent:!0,opacity:.85,blending:2,depthWrite:!1,side:2,toneMapped:!1});gS=new M(new Vl(.86,1,6,1,0,I).rotateX(-Math.PI/2),e),_S=new M(new Bl(.14).scale(1,1.4,1),e),gS.visible=_S.visible=!1,gS.renderOrder=_S.renderOrder=6,Sd.add(gS,_S)}var Z,OS=()=>Math.min(.5,(Z.skills.sneak.lvl-15)*.025);function kS(e){let t=Z.model;if(Z.dead){Z.deadT+=e,t.root.position.copy(Z.pos),t.root.rotation.y=Z.yaw,JS(t,{speed:0,atkPhase:-1,roll:-1,dead:Math.min(1,Z.deadT/.6)},e);return}Z.iframe=Math.max(0,Z.iframe-e),Z.potCd=Math.max(0,Z.potCd-e),Z.runeCd=Math.max(0,Z.runeCd-e),Z.stagger=Math.max(0,Z.stagger-e),Z.hurtFlash=Math.max(0,Z.hurtFlash-e*2),Z.noiseT=Math.max(0,Z.noiseT-e),Y.atkHeld&&(Y.atkT+=e,!Y.powerFired&&Y.atkT>=.32&&(Y.powerFired=!0,zb(!0)));let n=bb(),r=xb(n),i=Math.min(1,Math.hypot(r.x,r.z));Z.blocking=(Y.blockKey||Y.blockBtn||Y.blockMouse)&&!Z.dodge&&Z.stagger<=0&&!Z.atk&&!rx.drawing;let a=n.sprint&&i>.5&&!Z.sneaking&&!Z.blocking&&!Z.atk&&!rx.drawing&&Z.st>1,o=(Z.sneaking?2.6:5)*i;if(a&&(o=8.2*i,Z.st-=16*e,Z.stDelay=.6),(Z.blocking||rx.drawing)&&(o=Math.min(o,2.2)),Z.atk&&(o=.8*i),Z.stagger>0&&(o=0),Z.atk){let t=Z.atk;t.t+=e,t.target&&!t.target.dead&&(Z.yaw+=Uu(Z.yaw,Math.atan2(t.target.pos.x-Z.pos.x,t.target.pos.z-Z.pos.z))*Math.min(1,e*12)),!t.swung&&t.t>=t.W&&(t.swung=!0,z(`swing`)),!t.hit&&t.t>=t.hitAt&&(t.hit=!0,Vb(t),Z.lunge=t.d.lunge);let n=!t.power&&t.t>=t.W+t.S+t.R*.35;Y.queued&&n?(Y.queued=!1,Z.atk=null,Z.comboT=0,zb(!1)):t.t>=t.dur&&(Z.atk=null,Z.comboT=0,Y.queued&&(Y.queued=!1,zb(!1)))}else Z.comboT=(Z.comboT||0)+e;let s=r.x*o,c=r.z*o;if(Z.dodge){let t=Z.dodge;t.t+=e;let n=1-t.t/t.dur;s=t.dx*11*Math.max(.25,n),c=t.dz*11*Math.max(.25,n),t.t>=t.dur&&(Z.dodge=null)}if(Z.lunge>0&&(s+=Math.sin(Z.yaw)*Z.lunge,c+=Math.cos(Z.yaw)*Z.lunge,Z.lunge=Math.max(0,Z.lunge-e*18)),!Z.dodge&&!Z.atk){let t=hS.target;if(t&&!a)Z.yaw+=Uu(Z.yaw,Math.atan2(t.pos.x-Z.pos.x,t.pos.z-Z.pos.z))*Math.min(1,e*12);else if(i>.1&&!Z.blocking)Z.yaw+=Uu(Z.yaw,Math.atan2(r.x,r.z))*Math.min(1,e*14);else if(Z.blocking){let t=Pb(6);t&&(Z.yaw+=Uu(Z.yaw,Math.atan2(t.pos.x-Z.pos.x,t.pos.z-Z.pos.z))*Math.min(1,e*10))}}Z.pos.x+=(s+Z.kb.x)*e,Z.pos.z+=(c+Z.kb.z)*e,Z.kb.multiplyScalar(Math.exp(-e*7)),AS(Z.pos,Z.r,Q.zone),Z.pos.y=Q.zone===`world`?U(Z.pos.x,Z.pos.z):0;let l=Math.hypot(s,c);Z.moveSpeedNow=l,Z.moved=l*e,Z.noise=l<.3?0:Z.sneaking&&(!Z.dodge||im(`silent`))?(1.2+jm()*.9)*(im(`shadow`)?.5:1):l>6.5?13:6,Z.riposteT=Math.max(0,(Z.riposteT||0)-e),Z.noiseT>0&&(Z.noise=Math.max(Z.noise,Z.sneaking?3:7)),Z.stDelay-=e,Z.stDelay<=0&&(Z.st=Math.min(Z.maxSt,Z.st+(Z.blocking?10:26)*e*(uh.cold?.5:1))),Z.st=Math.max(0,Z.st);let u=CC.some(e=>!e.dead&&e.zone===Q.zone&&Rb(e));u||(Z.hp=Math.min(Z.maxHp,Z.hp+1.2*e)),Z.sneaking&&!u&&CC.some(e=>!e.dead&&e.zone===Q.zone&&e.state!==`throne`&&e.pos.distanceTo(Z.pos)<10)&&em(`sneak`,.35*e),t.root.position.copy(Z.pos),t.root.rotation.y=Z.yaw,t.root.rotation.x=0,JS(t,{speed:l,crouch:Z.sneaking,block:Z.blocking,atkPhase:-1,eatk:Z.atk?Bb(Z.atk):null,aim:fx(),roll:Z.dodge&&!Z.dodge.back?Z.dodge.t/Z.dodge.dur:-1},e)}function AS(e,t,n){Th(e,t,n),n===`dungeon`?(Qh(e,t),Qh(e,t)):(e.x=Iu(e.x,-97,97),e.z=Iu(e.z,-97,97))}function jS(){Z={pos:new A(3,0,7),yaw:Math.PI,kb:new A,r:.42,hp:100,maxHp:100,st:100,maxSt:100,stDelay:0,runeCd:0,runeCdMax:18,runeMult:1,potCd:0,sneaking:!1,blocking:!1,atk:null,dodge:null,stagger:0,iframe:0,dead:!1,deadT:0,noise:0,noiseT:0,lunge:0,moveSpeedNow:0,hurtFlash:0,skills:{onehand:{lvl:15,xp:0},block:{lvl:15,xp:0},sneak:{lvl:15,xp:0},rune:{lvl:15,xp:0},lock:{lvl:15,xp:0},archery:{lvl:15,xp:0},smith:{lvl:15,xp:0}},charLvl:1,charXp:0,pendingLevels:0,perks:[],perkPts:0,riposteT:0,inv:{gold:12,potions:1,picks:4,herbs:0,pelts:0,rune:!1,rod:!1,fish:{ringa:0,alabalik:0,turna:0},iron:0,frost:0,arrows:0,meat:0,cooked:0,hide:0,items:[],eq:null,uid:1},stage:0,stats:{kills:0,sneakAtk:0,time:0,deaths:0,fish:0},bounty:null,lastTpl:null,side:{ulf:0,pass:0,eirik:!1,goat:0},track:`main`},Gm(Z.inv),Z.model=hC(Jm()),Sd.add(Z.model.root)}function MS(){let e=Z.model,t=hC(Jm());t.walkT=e.walkT,t.crouch=e.crouch,t.blockA=e.blockA,t.root.position.copy(e.root.position),t.root.rotation.copy(e.root.rotation),Sd.remove(e.root),Sd.add(t.root),Z.model=t,e.root.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(e=>e.dispose())})}var Q,$,NS,PS,FS=null;function IS(e){let t=Q.zone===`dungeon`;$.dist=Lu($.dist,t?5.2:6.8,1-Math.exp(-e*4)),$.pitch=Iu($.pitch,t?.35:.02,1.25),PS.set(Z.pos.x,Z.pos.y+1.55-Z.model.crouch*.35,Z.pos.z),$.target.lerp(PS,1-Math.exp(-e*14));let n=Math.cos($.pitch),r=Math.sin($.yaw)*n,i=Math.sin($.pitch),a=Math.cos($.yaw)*n,o=$.dist;if(t)for(let e=.3;e<=o;e+=.2){let t=$.target.x+r*e,n=$.target.y+i*e,s=$.target.z+a*e;if(n<3.5&&qh(Yh(t),Xh(s))===0){o=Math.max(.8,e-.35);break}}else{FS||=xh.world.filter(e=>!(`r`in e));for(let e=.3;e<=o;e+=.25){let t=$.target.x+r*e,n=$.target.y+i*e,s=$.target.z+a*e;if(n<6.5&&FS.some(e=>t>e.x0-.3&&t<e.x1+.3&&s>e.z0-.3&&s<e.z1+.3)){o=Math.max(.8,e-.3);break}}}let s=$.target.x+r*o,c=$.target.y+i*o,l=$.target.z+a*o;if(t||(c=Math.max(c,U(s,l)+.6)),Q.shake>0){let t=Q.shake*.35;s+=(Math.random()-.5)*t,c+=(Math.random()-.5)*t,l+=(Math.random()-.5)*t,Q.shake=Math.max(0,Q.shake-e*2.2)}Cd.position.set(s,c,l),Cd.lookAt($.target)}var LS=e=>{Q.shake=Math.max(Q.shake,e)},RS=e=>{Q.hitstop=Math.max(Q.hitstop,e)};function zS(){Q={mode:`boot`,zone:`world`,time:0,hitstop:0,shake:0,fadeBusy:!1,seen:new Set,opened:new Set,autosaveT:0,dayT:op,weather:`snow`,slowmo:1},$={yaw:Z.yaw+Math.PI,pitch:.32,dist:7,target:new A(3,1.5,7)},NS=new A,PS=new A}var BS=.43,VS=.44,HS=.08;function US(e,t,n){let r=Math.hypot(t,n),i=.868;if(r>i){let e=i/r;t*=e,n*=e,r=i}if(r<.25){let e=.25/Math.max(r,1e-4);t*=e,n*=e,r=.25}let a=Math.atan2(t,n),o=Math.acos(Iu((BS*BS+r*r-VS*VS)/(2*BS*r),-1,1)),s=Math.acos(Iu((.37849999999999995-r*r)/(2*BS*VS),-1,1)),c=-(a+o),l=Math.PI-s;e.rotation.x=c,e.userData.knee.rotation.x=l,e.userData.ankle.rotation.x=-(c+l)}var WS,GS;function KS(e){let t=yp[e.type]||yp.slash,n=yp.G,r,i,a;e.phase===`windup`?(r=n,i=t.W,a=zu(Math.min(1,e.k/(e.player?1:.75)))):e.phase===`strike`?(r=t.W,i=t.S,a=e.k**(e.player?.75:.6)):(r=t.S,i=n,a=Vu(Iu((e.k-.3)/.7,0,1)));for(let e of WS)GS[e]=Lu(r[e],i[e],a);if(!e.player&&e.phase===`windup`&&e.k>.72){let e=Math.sin(Q.time*55)*.035;GS.rx+=e,GS.ty+=e*.5}return GS}function qS(e,t){let n=t?.5:.35,r=t?.68:.6;if(e<n){let t=zu(e/n);return[Lu(-.3,-3.9,t),Lu(.9,.2,t)]}if(e<r){let t=Bu((e-n)/(r-n));return[Lu(-3.9,-1.38,t),Lu(.2,1.8,t)]}let i=Vu((e-r)/(1-r));return[Lu(-1.38,-.3,i),Lu(1.8,.9,i)]}function JS(e,t,n){let r=t.speed>.2;e.walkT+=n*(2.4+t.speed*1.5)*(r?1:.15);let i=Math.min(1,t.speed/4.5),a=Math.sin(e.walkT)*.65*i;e.crouch=Lu(e.crouch,+!!t.crouch,1-Math.exp(-n*12)),e.blockA=Lu(e.blockA,+!!t.block,1-Math.exp(-n*16));let o=t.sit||0,s=e.crouch,c=e.blockA;e.hips.position.y=Lu(.95-.34*s+Math.abs(Math.cos(e.walkT))*.045*i,.55,o)+(r?0:Math.sin(e.walkT*6)*.004),e.torso.rotation.x=.35*s+.08*i+e.lean,e.cloak&&(e.cloak.rotation.x=.12+Math.min(.45,t.speed*.06)*(1-.6*s)+Math.sin(e.walkT*2)*(r?.04:.012)-.75*(.35*s+e.lean));let l=-.3-a*.5,u=.9;if(e.twoHand&&!t.block&&(l=-.5-a*.15,u=-1.35),t.atkPhase>=0&&([l,u]=qS(t.atkPhase,t.atkPower)),t.pose===`staff`&&(l=-.5,u=-1.07),t.pose===`hammer`&&(l=-.35+Math.max(0,Math.sin(e.walkT*3))*-1.2,u=.6),e.armR.rotation.x=Lu(l,-.9,o),e.weapon&&(e.weapon.rotation.x=u),e.armL.rotation.x=Lu(Lu(-.3+a*.5,-1.45,c),-.9,o),e.armL.rotation.z=-.35*c,e.shield&&(e.shield.rotation.z=Lu(-Math.PI/2,-Math.PI,c)),t.roll>=0?(e.hips.rotation.x=Vu(t.roll)*I,e.hips.position.y=.62):e.hips.rotation.x=0,e.torso.rotation.y=t.atkPhase>=0?Math.sin(t.atkPhase*Math.PI)*-.35:0,e.recoil=Math.max(0,e.recoil-n*4),e.torso.rotation.x-=e.recoil*.45,t.dead>0&&(e.root.rotation.x=-Math.PI/2*Bu(t.dead),e.root.position.y+=.15*t.dead),e.legOff=null,t.eatk){let n=KS(t.eatk);e.armR.rotation.x=n.rx,e.armR.rotation.z=n.rz,e.weapon&&(e.weapon.rotation.x=n.w),e.armL.rotation.x=n.lx,e.armL.rotation.z=n.lz,e.torso.rotation.y=n.ty,e.torso.rotation.x+=n.tx,e.hips.position.y-=n.drop,e.legOff=n,e.twoHand&&(e.armL.rotation.x=n.rx*.92,e.armL.rotation.z=Iu(n.rz-.75,-1.2,.2))}else e.armR.rotation.z=0;let d=t.aim!==void 0&&t.aim>=0&&!!e.bowHand;if(e.bowHand){e.bowHand.visible=d,e.bowBack.visible=!d,e.weapon&&(e.weapon.visible=!d),e.shield&&(e.shield.visible=!d);let n=d?t.aim:0,r=e.bowString.geometry.attributes.position;r.setY(1,pC.y+n*.42),r.needsUpdate=!0,d&&(e.armL.rotation.x=-1.52,e.armL.rotation.z=.12,e.torso.rotation.y=-.18,e.armR.rotation.x=Lu(-1.5,-1.25,n),e.armR.rotation.z=Lu(.55,.05,n),e.weapon&&(e.weapon.rotation.x=.9))}t.pose===`tied`?(e.armR.rotation.x=.6,e.armL.rotation.x=.6,e.armR.rotation.z=-.35,e.armL.rotation.z=.35,e.headG.rotation.x=.25):e.headG.rotation.x=0;let f=e.hips.position.y-.02,p=.25*i*(t.speed>6.5?1.35:1)*(1-.35*s),m=.14*i;for(let[n,r]of[[e.legL,1],[e.legR,-1]]){let i=Math.sin(e.walkT)*p*r+.07*s+(e.legOff?r>0?e.legOff.fL:e.legOff.fR:0),a=f-HS-Math.max(0,Math.cos(e.walkT)*r)*m;t.roll>=0?(i=.22,a=.42):t.dead>0?(i=.02,a=.86):o>0&&(i=Lu(i,.45,o)),US(n,i,a)}}var YS=.26,XS=.24,ZS=.04;function QS(e,t,n){let r=YS,i=XS,a=e.userData.dir,o=Math.hypot(t,n),s=.498;if(o>s){let e=s/o;t*=e,n*=e,o=s}if(o<.16){let e=.16/Math.max(o,1e-4);t*=e,n*=e,o=.16}let c=Math.atan2(t,n),l=Math.acos(Iu((r*r+o*o-i*i)/(2*r*o),-1,1)),u=Math.acos(Iu((.1252-o*o)/(2*r*i),-1,1)),d=-(c+a*l),f=a*(Math.PI-u);e.rotation.x=d,e.userData.j.rotation.x=f,e.userData.paw.rotation.x=-(d+f)}function $S(e,t,n){let r=t.speed>.2,i=t.speed>6.5,a=t.atk;e.walkT+=n*(4+t.speed*1.5)*(r&&!(a&&a.phase===`strike`)?1:.1);let o=a?0:Math.min(1,t.speed/5),s=.62+Math.abs(Math.cos(e.walkT))*.03*o,c=Math.sin(e.walkT*2)*.025*o,l=Math.sin(e.walkT*2)*.05*o+(r?0:Math.sin(e.walkT*.5)*.05),u=0,d=r?.08:.03,f=-.35+(i?.25:0),p=Math.sin(e.walkT)*.25*o,m=0,h=0,g=0;if(a){let e=a.k;if(a.phase===`windup`){let t=zu(Math.min(1,e/.6)),n=e>.7?Math.sin(Q.time*50)*.012:0;s-=.2*t,c=.16*t+n,l=.3*t,d=.35*t,f=-.8,m=.08*t,h=-.18*t}else a.phase===`strike`?(s+=Math.sin(Math.PI*e)*.5,c=-.3*Math.cos(Math.PI*e),l=-.18,d=e<.7?.65:.65*Math.max(0,1-(e-.7)/.12),f=-.1,m=.34,h=-.36,g=-.1*Math.sin(Math.PI*e)):(s-=Math.max(0,1-e/.25)*.09,c=.08*Math.max(0,1-e/.3),u=Math.sin(e*32)*.28*(1-e),d=.05,m=.1*(1-e),h=-.1*(1-e))}e.body.position.y=s,e.recoil=Math.max(0,e.recoil-n*4),e.body.rotation.x=c-e.recoil*.3,e.head.rotation.x=l,e.head.rotation.y=u,e.jaw&&(e.jaw.rotation.x=d),e.tail.rotation.x=f+Math.sin(e.walkT*2)*.12,e.tail.rotation.y=p;let _=(i?.3:.2)*o,v=(i?.13:.1)*o,y=s-.1;e.legs.forEach((n,r)=>{let i=e.walkT+bp[r],o=n.userData.dir>0,s=Math.sin(i)*_+(o?m:h),c=y-ZS-Math.max(0,Math.cos(i))*v+(a&&a.phase===`strike`?g+0:0);a&&a.phase===`strike`&&(c=Math.min(c,.4)),t.dead>0&&(s=o?.08:-.08,c=.34),QS(n,s,c)}),t.dead>0&&(e.root.rotation.z=Math.PI/2*Bu(t.dead),e.root.position.y+=.05)}function eC(){WS=Object.keys(yp.G),GS={}}var tC=(e,t,n,r=8)=>new Xc(e,t,n,r),nC=(e,t,n=7)=>new Jc(e,t,2,n),rC=(e,t=1)=>new zl(e,t),iC=(e,t,n)=>new Rr(e,t,n),aC=e=>e.rotateX(Math.PI/2);function oC(){let e=new Map;return{add:(t,n,r,i=0,a=0,o=0,s=0,c=0,l=0)=>{s&&n.rotateX(s),c&&n.rotateY(c),l&&n.rotateZ(l),n.translate(i,a,o),e.has(t)||e.set(t,[]),e.get(t).push(jh(n,r))},bake:t=>{for(let[n,r]of e){let e=new M(Mh(r),t);e.castShadow=_d,e.receiveShadow=_d,n.add(e)}}}}var sC={};function cC(e,t){let n=e+t;return sC[n]?sC[n]:sC[n]=Af(256,256,(n,r,i)=>{n.fillStyle=e,n.fillRect(0,0,r,i),n.save(),n.translate(128,128),n.fillStyle=t;for(let e=0;e<4;e+=2){let t=e*Math.PI/2,r=t+Math.PI/2;n.beginPath(),n.moveTo(0,0),n.quadraticCurveTo(132*.55*Math.cos(t-.6),132*.55*Math.sin(t-.6),132*Math.cos(t),132*Math.sin(t)),n.arc(0,0,132,t,r),n.quadraticCurveTo(132*.55*Math.cos(r-.6),132*.55*Math.sin(r-.6),0,0),n.fill()}n.restore();for(let e=0;e<r;e+=32)n.fillStyle=`rgba(0,0,0,.18)`,n.fillRect(e,0,2,i);jf(n,r,i,900,.22,1,3);let a=n.createRadialGradient(128,128,50,128,128,128);a.addColorStop(0,`rgba(0,0,0,0)`),a.addColorStop(1,`rgba(0,0,0,.38)`),n.fillStyle=a,n.fillRect(0,0,r,i)},!0,!0)}var lC=(e,t)=>new j(e).multiplyScalar(t).getHex();function uC(e){let t=new el;t.moveTo(-.05,0),t.lineTo(.05,0),t.lineTo(.09,.13),t.quadraticCurveTo(.24,.26,.22,.46),t.quadraticCurveTo(0,.36,-.22,.42),t.quadraticCurveTo(-.12,.25,-.08,.12),t.closePath();let n=new Il(t,{depth:.035,bevelEnabled:!1});return n.translate(0,0,-.0175),n.rotateY(-Math.PI/2),n.scale(e,e,e)}function dC(e,t,n,r,i=0){let a=new M(iC(.012,.026,r-n),Bd(t,1.5));a.position.set(0,i,(n+r)/2),e.add(a)}function fC(e,t,n,r={}){let i=[.35,1.05];if(e===`sword`||e===`rusty`||e===`greatsword`){let a=e===`rusty`,o=e===`greatsword`,s=a?.72:o?1.15:.8,c=o?.36:.2,l=o?.085:.068,u=r.blade??(a?8020556:12042440),d=r.guard??(a?6246464:13214282);n.add(t,aC(tC(.024,.024,c,6)),4863270,0,0,.1-c/2),n.add(t,rC(.042,0),d,0,0,.08-c),n.add(t,iC(o?.34:.24,.035,.045),d,0,0,.115),n.add(t,iC(l,.018,s),u,0,0,.14+s/2),n.add(t,iC(.016,.022,s*.8),lC(u,a?.63:.68),0,0,.14+s*.45),n.add(t,aC(new Zc(l*.7,.14,4).rotateY(Math.PI/4).scale(1,1,.3)),u,0,0,.21+s),r.glow&&dC(t,r.glow,.2,.14+s*.85),i=[.35,.2+s]}else if(e===`dagger`){let e=r.blade??12042440,a=r.guard??7166532;n.add(t,aC(tC(.022,.022,.15,6)),4863270,0,0,.02),n.add(t,rC(.032,0),a,0,0,-.07),n.add(t,iC(.15,.03,.035),a,0,0,.105),n.add(t,iC(.05,.016,.34),e,0,0,.29),n.add(t,aC(new Zc(.035,.1,4).rotateY(Math.PI/4).scale(1,1,.3)),e,0,0,.51),r.glow&&dC(t,r.glow,.15,.42),i=[.15,.52]}else if(e===`handaxe`)n.add(t,aC(tC(.026,.03,.74,6)),4863270,0,0,.2),n.add(t,uC(.62),r.blade??9344411,0,.02,.5),n.add(t,aC(tC(.038,.038,.09,6)),lC(r.blade??9344411,.6),0,0,.5),r.glow&&dC(t,r.glow,.42,.62,.26),i=[.3,.62];else if(e===`mace`){let e=r.blade??9344411;n.add(t,aC(tC(.024,.028,.66,6)),4863270,0,0,.17),n.add(t,rC(.08,0),e,0,0,.55);for(let r=0;r<6;r++){let i=r/6*I;n.add(t,iC(.022,.07,.17),lC(e,.85),Math.cos(i)*.07,Math.sin(i)*.07,.55,0,0,i+Math.PI/2)}if(n.add(t,aC(new Zc(.03,.09,5)),e,0,0,.66),r.glow){let e=new M(rC(.05,0),Bd(r.glow,1.5));e.position.z=.55,t.add(e)}i=[.3,.64]}else if(e===`axe`)n.add(t,aC(tC(.032,.036,1.45,6)),3877408,0,0,.45),n.add(t,uC(1),r.blade??7369067,0,.03,1.02),n.add(t,aC(tC(.046,.046,.13,6)),5066056,0,0,1.02),r.glow&&dC(t,r.glow,.88,1.2,.44),i=[.6,1.3];else if(e===`staff`){n.add(t,aC(tC(.024,.034,1.85,6)),5981750,0,0,.38),n.add(t,new Gl(.085,.014,4,10),10125384,0,0,1.28);for(let e of[-1,1])n.add(t,rC(.025,0),13616816,e*.06,-.07,1.12);let e=new M(new Bl(.075),Bd(7329993,1.6));e.position.z=1.3,t.add(e),Bf(t,0,0,1.3,.9,7329993,.5)}else if(e===`club`){n.add(t,aC(tC(.1,.05,1.35,7)),5981750,0,0,.55);for(let e=0;e<4;e++)n.add(t,rC(.07,0),4864556,Math.cos(e*1.7)*.08,Math.sin(e*1.7)*.08,.95+e*.07)}else e===`hammer`&&(n.add(t,aC(tC(.022,.026,.5,6)),5981750,0,0,.2),n.add(t,tC(.075,.075,.26,6),8160654,0,0,.47,0,0,Math.PI/2));t.userData.trail=i}var pC={y:.13,z:.62};function mC(e,t,n,r){t.add(e,iC(.045,.05,.17),3811870);for(let r of[-1,1]){let i=[[.08,0,.38,.035],[.38,.035,pC.z,pC.y]];for(let[a,o,s,c]of i){let i=Math.hypot(s-a,c-o),l=-Math.asin((c-o)/i)*r;t.add(e,iC(.03,.026,i),n,0,(o+c)/2,r*(a+s)/2,l)}}if(r)for(let t of[-1,1]){let n=new M(iC(.012,.012,.24),Bd(r,1.5));n.position.set(0,.03,t*.28),e.add(n)}let i=new cc(new wr().setAttribute(`position`,new gr([0,pC.y,pC.z,0,pC.y,0,0,pC.y,-pC.z],3)),new ec({color:15262416}));return e.add(i),i}function hC(e){let t=oC(),n=new Jl({vertexColors:!0,flatShading:!0}),r=[n],i=new P;i.rotation.order=`YXZ`;let a=e.build??1,o=e.thin?.75:1,s={body:e.body,skin:e.skin,dark:e.dark??3813673,metal:e.metal??10134702,cloak:e.cloak??e.body,leather:e.leather??4863270},c=new P;if(c.position.y=.95,i.add(c),t.add(c,tC(.19*a,.2*a,.2,8).scale(1,1,.72),s.dark,0,.02,0),e.skirt===`robe`||e.skirt===`dress`?(t.add(c,tC(.22*a,.37*a,.92,10).scale(1,1,.8),e.skirtColor??s.body,0,-.4,0),e.trim&&t.add(c,tC(.375*a,.375*a,.05,10).scale(1,1,.8),e.trim,0,-.84,0)):e.skirt&&(t.add(c,tC(.21*a,.28*a,.36,8).scale(1,1,.78),s.body,0,-.12,0),e.trim&&t.add(c,tC(.285*a,.285*a,.04,8).scale(1,1,.78),e.trim,0,-.29,0)),e.tatters)for(let n=0;n<5;n++)t.add(c,iC(.07,.3+n%3*.08,.012),e.tatters,-.16+n*.08,-.2-n%3*.04,.2,.08,0,(n-2)*.06);let l=new P;if(c.add(l),t.add(l,tC(.27*a,.2*a,.6,8).scale(1,1,.66),s.body,0,.4,0),e.vest&&t.add(l,tC(.285*a,.225*a,.44,8).scale(1,1,.7),e.vest,0,.45,0),t.add(l,tC(.215*a,.215*a,.08,8).scale(1,1,.72),s.leather,0,.12,0),e.buckle&&t.add(l,iC(.09,.07,.03),13214282,0,.12,.16*a),t.add(l,iC(.1,.12,.07),s.leather,.17*a,.04,.07),t.add(l,tC(.065,.075,.14,6),s.skin,0,.72,0),e.apron&&t.add(l,iC(.3*a,.62,.02),e.apron,0,.23,.165*a),e.brooch)for(let e of[-1,1])t.add(l,rC(.045,0).scale(1,1.3,.6),13214282,e*.1,.52,.18*a);if(e.necklace)for(let n=0;n<7;n++){let r=-.9+n*.3;t.add(l,rC(.022,0),e.necklace,Math.sin(r)*.12,.62-Math.cos(r)*.06,.14+Math.cos(r)*.04)}if(e.ribs)for(let e=0;e<3;e++)t.add(l,iC(.16,.022,.02),12107176,0,.52-e*.07,.17*a);if(e.fur&&t.add(l,new Gl(.2*a,.075,5,10).rotateX(Math.PI/2).scale(1,1,.8),e.fur,0,.66,-.01),e.chestRune){let t=Bd(e.chestRune,1.8),n=.215*a,r=(e,r,i,a,o)=>{let s=new M(iC(e,r,.01),t);s.position.set(i,a,n),s.rotation.z=o,l.add(s)};r(.022,.24,-.035,.45,0),r(.022,.12,0,.48,.9),r(.022,.12,0,.42,-.9)}let u=null;if(e.cloakBack){u=new P,u.position.set(0,.66,-.03),l.add(u);let e=new Xc(.24*a,.4*a,1.1,10,1,!0,Math.PI/2,Math.PI).translate(0,-.55,0).scale(1,1,.75),t=Rd(s.cloak,{side:2,flatShading:!0});r.push(t);let n=new M(e,t);n.castShadow=_d,u.add(n)}let d=new P;if(d.position.y=.84,l.add(d),t.add(d,rC(.15,1).scale(1,1.12,1.04),s.skin,0,.05,0),t.add(d,iC(.035,.07,.05),s.skin,0,.04,.15),e.eyes){for(let e of[-1,1])t.add(d,iC(.05,.035,.02),1315858,e*.055,.08,.142);let n=zd(e.eyes);for(let e of[-1,1]){let t=new M(iC(.03,.018,.02),n);t.position.set(e*.055,.08,.152),d.add(t)}Bf(d,0,.08,.2,.55,e.eyes,.75)}else for(let e of[-1,1])t.add(d,iC(.035,.022,.02),1907224,e*.055,.08,.146);if(e.hair){if(!e.bald)t.add(d,new Wl(.162,8,6,0,I,0,Math.PI*.55),e.hair,0,.06,-.012,-.35);else for(let n of[-1,1])t.add(d,iC(.04,.1,.16),e.hair,n*.145,.03,-.03);if(e.longHair&&t.add(d,tC(.12,.15,.36,7).scale(1,1,.5),e.hair,0,-.14,-.1),e.braids)for(let n of[-1,1])t.add(d,tC(.025,.02,.42,5),e.hair,n*.13,-.19,.05);t.add(d,iC(.14,.022,.02),e.hair,0,.115,.148)}if(e.beard){let n=e.beardLen??.22;t.add(d,new Zc(.12,n,7).scale(1,1,.6),e.beard,0,-.02-n/2,.075,Math.PI),t.add(d,iC(.13,.03,.03),e.beard,0,.005,.152),e.beardBraid&&t.add(d,tC(.022,.016,.16,5),e.beard,0,-.1-n,.08)}if(e.helmet){let n=e.helmetColor??s.metal,r=e.helmStyle||`helm`,i=e.helmFur??14077373;if(r===`cap`)t.add(d,new Wl(.172,8,5,0,I,0,Math.PI/2).scale(1,1.08,1.05),n,0,.1,0),t.add(d,new Gl(.168,.042,5,12).rotateX(Math.PI/2).scale(1,1,1.05),i,0,.1,0);else if(r===`wolf`){t.add(d,new Wl(.2,8,6,0,I,0,Math.PI*.6).scale(1,1.05,1.08),n,0,.05,-.02,-.35),t.add(d,tC(.19,.25,.16,8).scale(1,1,.8),i,0,-.14,-.02),t.add(d,iC(.12,.07,.16).translate(0,0,.05),n,0,.2,.12,.25),t.add(d,iC(.06,.04,.05),2762018,0,.21,.23,.25);for(let e of[-1,1])t.add(d,new Zc(.045,.11,4),n,e*.1,.27,-.02)}else if(t.add(d,new Wl(.168,8,5,0,I,0,Math.PI/2).scale(1,1.3,1.05),n,0,.09,0),t.add(d,tC(.173,.173,.045,10).scale(1,1,1.05),n,0,.1,0),t.add(d,iC(.03,.13,.03),n,0,.05,.172),t.add(d,rC(.025,0),n,0,.31,0),r===`guard`){for(let e of[-1,1])t.add(d,iC(.03,.14,.12),lC(n,.85),e*.158,0,.06);t.add(d,new Gl(.04,.012,4,8).scale(1.6,1,1),lC(n,.85),0,.085,.165),t.add(d,iC(.02,.06,.2),lC(n,.9),0,.3,0)}}if(e.hood&&(t.add(d,new Wl(.205,8,6,0,I,0,Math.PI*.62).scale(1,1.1,1.05),s.cloak,0,.04,-.03,-.45),t.add(d,tC(.19,.25,.16,8).scale(1,1,.8),s.cloak,0,-.14,-.02)),e.tusks)for(let e of[-1,1])t.add(d,new Zc(.022,.1,4),15920866,e*.065,-.01,.14);if(e.crown){t.add(d,new Xc(.178,.178,.07,8,1,!0),10125384,0,.19,0);for(let e=0;e<6;e++)t.add(d,new Zc(.028,.12,4),10125384,Math.sin(e/6*I)*.178,.28,Math.cos(e/6*I)*.178)}let f=(n,r)=>{let i=new P;if(i.position.set(n*.3*a,.64,0),l.add(i),t.add(i,rC(.095*o*a,0),s.body,0,-.03,0),t.add(i,nC(.068*o*a,.18),s.body,0,-.16,0),e.pauldron&&(t.add(i,new Wl(.13*a,7,4,0,I,0,Math.PI/2).scale(1,.75,1.1),s.metal,0,0,0),e.pauldron===`spiky`))for(let e=0;e<3;e++)t.add(i,new Zc(.025,.13,4),s.metal,(e-1)*.05,.16,0);let c=new P;c.position.y=-.3,c.rotation.x=-r,i.add(c),t.add(c,nC(.058*o*a,.16),e.bareArms?s.skin:s.body,0,-.12,0),t.add(c,tC(.067*o*a,.061*o*a,.12,7),s.leather,0,-.2,0),t.add(c,rC(.055,0).scale(1,1.1,1),e.gloves?s.leather:s.skin,0,-.3,0);let u=new P;return u.position.y=-.32,u.rotation.x=r,c.add(u),{a:i,fa:c,mount:u}},p=f(-1,.28),m=f(1,.22);if(e.armScale)for(let t of[p.a,m.a])t.scale.set(1.1,e.armScale,1.1);let h=n=>{let r=new P;r.position.set(n*.115*a,-.02,0),c.add(r),t.add(r,nC(.085*o*a,.28),s.dark,0,-.215,0);let i=new P;if(i.position.y=-BS,r.add(i),t.add(i,rC(.074*o*a,0),s.dark,0,0,.012),t.add(i,nC(.07*o*a,.26),s.dark,0,-.2,0),e.wraps)for(let n=0;n<3;n++)t.add(i,tC(.078*o*a,.078*o*a,.035,7),e.wraps,0,-.1-n*.09,0);t.add(i,tC(.084*o,.078*o,.14,7),s.leather,0,-.36,0);let l=new P;return l.position.y=-VS,i.add(l),t.add(l,iC(.13*o+.02,.1,.25),s.leather,0,-.03,.045),r.userData.knee=i,r.userData.ankle=l,r},g=h(-1),_=h(1),v=null,y=null;if(e.weapon&&(v=new P,p.mount.add(v),fC(e.weapon,v,t,e.weaponTint)),e.shield){let n=new P;n.position.set(.1,-.14,0),n.rotation.x=.22,m.fa.add(n),y=new P,n.add(y);let i=new Jl({map:cC(e.shield[0],e.shield[1])}),a=Rd(5914672,{flatShading:!0});r.push(i,a);let o=new M(tC(.38,.38,.045,18),[a,i,a]);o.castShadow=_d,y.add(o),t.add(y,new Gl(.38,.022,4,22),e.shieldRim??7172986,0,0,0,Math.PI/2),t.add(y,new Wl(.085,8,4,0,I,0,Math.PI/2),10134702,0,.022,0),y.rotation.z=-Math.PI/2}let b=null,x=null,S=null;if(e.bow){b=new P,m.mount.add(b),S=mC(b,t,e.bow.limb,e.bow.glow),b.visible=!1,x=new P,x.position.set(0,.42,-.21*a),x.rotation.order=`ZYX`,x.rotation.set(Math.PI/2,0,.65),l.add(x),mC(x,t,e.bow.limb,e.bow.glow),t.add(l,tC(.055,.045,.42,7),s.leather,.2*a,.2,-.12,.35,0,-.25);for(let e=0;e<3;e++)t.add(l,iC(.012,.1,.03),14998992,.2*a+(e-1)*.022+.05,.47,-.2+e%2*.02,.35,0,-.25)}return t.bake(n),{kind:`h`,root:i,hips:c,torso:l,headG:d,armR:p.a,armL:m.a,legR:g,legL:_,weapon:v,shield:y,cloak:u,twoHand:!!e.twoHand,bowHand:b,bowBack:x,bowString:S,flash:r,lean:e.lean||0,walkT:Math.random()*6,crouch:0,blockA:0,recoil:0}}function gC(e=`wolf`){let t=oC(),n=new Jl({vertexColors:!0,flatShading:!0}),r=new P;r.rotation.order=`YXZ`;let[i,a,o]={wolf:[8027266,4934995,12830153],deer:[9070152,6046512,14469808],hare:[14078406,10129796,15921128],goat:[15130576,6179898,16052198]}[e],s=e===`goat`,c=e===`deer`||s,l=e===`hare`,u=new P;u.position.y=.62,r.add(u),l?t.add(u,rC(.3,1).scale(1,.9,1.35),i,0,.02,-.05):t.add(u,aC(nC(c?.17:.2,.62,8)).scale(1,c?1.15:1.05,1),i,0,0,-.08),t.add(u,rC(l?.2:.24,1).scale(1,1.1,1.15),o,0,l?-.04:0,l?.2:.28),l||t.add(u,rC(.2,0).scale(1.05,.55,1.6),a,0,.16,-.1);let d=new P;d.position.set(0,c?.5:l?.2:.22,c?.66:l?.42:.58),u.add(d),c&&t.add(u,tC(.07,.11,.46,7).rotateX(.62),i,0,.3,.5),t.add(d,rC(l?.13:.14,1).scale(1,.9,1.1),i,0,0,0),t.add(d,aC(tC(.042,c?.07:.08,c?.26:l?.1:.22,6)).scale(1,.8,1),c?i:o,0,-.03,c?.19:l?.1:.17),t.add(d,rC(l?.022:.032,0),l?14262432:1710618,0,-.02,c?.32:l?.16:.285);let f=new P;if(f.position.set(0,-.075,.07),d.add(f),e===`wolf`){for(let e of[-1,1])t.add(d,new Zc(.012,.035,3).rotateX(Math.PI),15920866,e*.03,-.075,.24);t.add(f,aC(tC(.03,.055,.2,6)).scale(1,.55,1),o,0,-.012,.1);for(let e of[-1,1])t.add(f,new Zc(.01,.03,3),15920866,e*.025,.012,.16);t.add(f,iC(.05,.01,.12),8006186,0,.004,.09)}else t.add(f,aC(tC(.03,.045,c?.18:.08,6)).scale(1,.5,1),o,0,0,c?.11:.05);for(let n of[-1,1]){if(c?t.add(d,new Zc(.045,.15,4),i,n*.12,.06,-.04,0,0,-n*1.15):l?t.add(d,new Zc(.045,.34,5).scale(1,1,.45),i,n*.055,.22,-.05,-.3,0,-n*.12):t.add(d,new Zc(.055,.14,4),a,n*.085,.13,-.03,0,0,-n*.25),e===`wolf`){let e=new M(iC(.04,.025,.02),zd(15778634));e.position.set(n*.07,.035,.145),d.add(e)}else t.add(d,iC(.04,.03,.02),1315344,n*(l?.075:.07),.035,l?.1:.145);if(s)t.add(d,new Zc(.03,.2,5).translate(0,.1,0),9075300,n*.05,.1,-.04,-.9,0,-n*.2),n>0&&t.add(d,new Zc(.03,.1,4).rotateX(Math.PI),o,0,-.1,.2);else if(c){let e=14208176;t.add(d,tC(.016,.022,.34,5).translate(0,.17,0),e,n*.06,.1,-.03,-.35,0,-n*.5),t.add(d,tC(.012,.016,.16,5).translate(0,.08,0),e,n*.13,.22,0,.25,0,-n*.15),t.add(d,tC(.01,.014,.14,5).translate(0,.07,0),e,n*.18,.31,-.08,-.5,0,-n*.8)}}let p=[];for(let[e,n,r]of[[-.13,.3,!0],[.13,.3,!0],[-.13,-.4,!1],[.13,-.4,!1]]){let o=new P;o.position.set(e*(l?1.1:1),-.1,l?n*.7:n),u.add(o),r||t.add(o,rC(l?.13:.1,0).scale(.8,1.2,1.1),i,0,-.04,0);let s=c?.8:1;t.add(o,nC((r?.055:.065)*s,.15),c?i:a,0,-.12,0);let d=new P;d.position.y=-YS,o.add(d),t.add(d,rC(.045*s,0),a,0,0,0),t.add(d,nC(.036*s,.17),c?i:a,0,-.12,0);let f=new P;f.position.y=-XS,d.add(f),t.add(f,rC(.05,0).scale(c?.7:1,c?.8:.55,c?.9:1.35),c?2761760:a,0,-.012,.035),o.userData={j:d,paw:f,dir:r?1:-1},p.push(o)}let m=new P;return m.position.set(0,.08,l?-.42:-.52),u.add(m),e===`wolf`?t.add(m,new Zc(.085,.52,6).translate(0,.26,0).rotateX(-Math.PI/2),i):t.add(m,rC(c?.07:.08,0).scale(1,c?1.4:1,.8),16184559,0,.06,0),t.bake(n),{kind:`w`,root:r,body:u,head:d,jaw:f,legs:p,tail:m,flash:[n],walkT:Math.random()*6,recoil:0}}var _C={wolf:{hp:32,r:.5,speed:6,dmg:7,range:1.8,windup:.42,strike:.24,recover:.55,detect:17,cone:2.4,height:1.15,name:`Kurt`},draugr:{hp:48,r:.45,speed:3.7,dmg:13,range:2.1,windup:.7,strike:.16,recover:.6,detect:13,cone:2,height:2.05,name:`Draugr`},troll:{hp:170,r:.75,speed:3.9,dmg:20,range:2.8,windup:.95,strike:.22,recover:.8,detect:16,cone:2.4,height:3.1,name:`Buz Trolü`},deer:{hp:30,r:.5,speed:8.6,dmg:0,range:0,windup:1,recover:1,detect:22,cone:4.2,height:1.6,name:`Geyik`},hare:{hp:6,r:.25,speed:9.2,dmg:0,range:0,windup:1,recover:1,detect:13,cone:4.6,height:.55,name:`Kar tavşanı`},bandit:{hp:55,r:.45,speed:4.2,dmg:12,range:2.1,windup:.55,strike:.16,recover:.55,detect:15,cone:2,height:1.95,name:`Haydut`},archer:{hp:40,r:.42,speed:4,dmg:11,range:18,windup:.95,strike:.1,recover:.8,detect:21,cone:2.2,height:1.9,name:`Haydut okçu`},warlord:{hp:280,r:.75,speed:4.1,dmg:21,range:2.9,windup:.8,strike:.22,recover:.7,detect:22,cone:2.6,height:2.5,name:`Halvar Kızılkalkan`},boss:{hp:300,r:.85,speed:3.4,dmg:22,range:3.1,windup:.85,strike:.22,recover:.75,detect:40,cone:6.3,height:3.2,name:`Höyük Kralı`}},vC={draugr:{body:4936006,skin:9345932,dark:2895658,metal:7168597,leather:3813928,helmet:!0,weapon:`rusty`,eyes:12124010,skirt:`tunic`,thin:!0,lean:.18,ribs:!0,tatters:4014648,hair:10134170,longHair:!0,beard:9213066,beardLen:.26,wraps:5921354},draugr2:{body:4080185,skin:9937557,dark:2632486,metal:7168597,leather:3484965,hood:!0,cloak:3356463,weapon:`rusty`,eyes:12124010,skirt:`tunic`,thin:!0,lean:.22,ribs:!0,tatters:3093292,hair:11120807,braids:!0,wraps:5592394},troll:{body:8359836,skin:10465727,dark:6254202,leather:4865846,fur:15001836,bareArms:!0,build:1.3,lean:.4,hair:15265008,longHair:!0,beard:14673130,beardLen:.26,eyes:10479359,weapon:`club`,tusks:!0,skirt:`tunic`,armScale:1.25,tatters:7035464},bandit:{body:7219746,skin:13608070,dark:3812388,leather:4862756,metal:8225931,fur:9075302,helmet:!0,helmStyle:`cap`,helmetColor:4862756,helmFur:9075302,weapon:`handaxe`,shield:[`#7a1f1a`,`#d8c48a`],skirt:`tunic`,beard:7031342,beardLen:.18,hair:7031342,wraps:6969928,gloves:!0},bandit2:{body:5907744,skin:14200976,dark:3024416,leather:4074528,metal:9344411,vest:5922662,pauldron:`plate`,helmet:!0,helmetColor:7172986,weapon:`sword`,weaponTint:{blade:10726581},shield:[`#7a1f1a`,`#2a1a14`],skirt:`tunic`,hair:3023904,longHair:!0,beard:3023904,beardLen:.24,beardBraid:!0,wraps:5917242},archer:{body:5192236,skin:13608070,dark:3024416,leather:3811870,cloak:7219746,hood:!0,weapon:`dagger`,bow:{limb:5914152},skirt:`tunic`,beard:9067059,beardLen:.14,wraps:6969928,gloves:!0},warlord:{body:8003354,skin:13606784,dark:2760730,leather:3811870,metal:9076848,cloak:5903890,cloakBack:!0,fur:6181446,vest:4866104,pauldron:`spiky`,helmet:!0,helmStyle:`guard`,helmetColor:9076848,weapon:`axe`,weaponTint:{blade:8221800},twoHand:!0,skirt:`tunic`,trim:13214282,beard:11027498,beardLen:.34,beardBraid:!0,hair:11027498,longHair:!0,build:1.15,buckle:!0,gloves:!0},boss:{body:3093826,skin:8359046,dark:2040619,metal:6117970,cloak:3811902,leather:2761504,crown:!0,cloakBack:!0,weapon:`axe`,eyes:7329993,skirt:`tunic`,pauldron:`spiky`,fur:4867408,vest:3883600,chestRune:7329993,hair:10923172,longHair:!0,beard:10923172,beardLen:.34,beardBraid:!0,build:1.1,lean:.08}},yC=(e,t)=>{let n=document.createElement(`canvas`);n.width=n.height=64;let r=n.getContext(`2d`);r.font=`700 50px Georgia, serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.lineWidth=7,r.strokeStyle=`rgba(0,0,0,.75)`,r.strokeText(e,32,35),r.fillStyle=t,r.fillText(e,32,35);let i=new _c(n);return i.colorSpace=We,i},bC,xC,SC,CC=[];function wC(e,t,n,r,i,a={}){let o=_C[e],s=e===`wolf`||e===`deer`||e===`hare`?gC(e):hC(e===`draugr`?t.charCodeAt(t.length-1)%2?vC.draugr:vC.draugr2:e===`bandit`?t.charCodeAt(t.length-1)%2?vC.bandit:vC.bandit2:vC[e]);e===`boss`&&s.root.scale.setScalar(1.55),e===`troll`&&s.root.scale.setScalar(1.6),e===`deer`&&s.root.scale.setScalar(1.22),e===`warlord`&&s.root.scale.setScalar(1.3),e===`hare`&&s.root.scale.setScalar(.5),(n===`world`?V:Nd).add(s.root);let c={kind:e,id:t,zone:n,def:o,model:s,pos:new A(r,0,i),home:new A(r,0,i),yaw:a.yaw??Math.random()*I,hp:o.hp,maxHp:o.hp,state:a.dormant?`dormant`:a.throne?`throne`:`idle`,t:0,aware:0,atkCd:.8,stagger:0,kb:new A,flash:0,dead:!1,deadT:0,wanderT:Math.random()*3,wanderTo:null,patrol:a.patrol||null,patrolI:0,speedNow:0,slamCd:5,phase2:!1,lastSeen:new A(r,0,i),rise:0,emerge:!!a.emerge,alertT:0,temp:!!a.temp,pack:a.pack||null,wild:!!a.wild},l=new Hs(SC);l.center.set(0,.5),l.scale.set(1,.1,1),l.renderOrder=20;let u=new Hs(new Os({color:13781566,depthTest:!1,toneMapped:!1}));return u.center.set(0,.5),u.scale.set(1,.07,1),u.renderOrder=21,c.bar={bg:l,fill:u},Sd.add(l,u),l.visible=u.visible=!1,c.mark=new Hs(new Os({map:bC,depthTest:!1,toneMapped:!1,transparent:!0})),c.mark.scale.set(.6,.6,1),c.mark.renderOrder=22,c.mark.visible=!1,Sd.add(c.mark),a.emerge&&(c.state=`rising`,c.t=0),c.blob=Kf(()=>c.pos,()=>c.zone===Q.zone&&c.model.root.visible&&c.state!==`dormant`&&!(c.dead&&c.deadT>2.5),e===`boss`?2.4:e===`troll`?2.3:e===`wolf`||e===`deer`?1.4:e===`hare`?.6:1.2),CC.push(c),c}function TC(e){(e.zone===`world`?V:Nd).remove(e.model.root),Sd.remove(e.bar.bg,e.bar.fill,e.mark),e.blob&&(Sd.remove(e.blob.m),Uf.splice(Uf.indexOf(e.blob),1));let t=CC.indexOf(e);t>=0&&CC.splice(t,1)}var EC,DC=e=>e.kind===`boss`||e.kind===`troll`||e.kind===`warlord`,OC,kC={triggered:!1},AC,jC,MC=4.6,NC=1.25;function PC(){bC=yC(`?`,`#e6c46f`),xC=yC(`!`,`#e5503f`),SC=new Os({color:0,opacity:.6,transparent:!0,depthTest:!1,toneMapped:!1}),wC(`wolf`,`w1`,`world`,36,-22,{pack:`A`}),wC(`wolf`,`w2`,`world`,38,-27,{pack:`A`}),wC(`wolf`,`w3`,`world`,34,-28,{pack:`A`}),wC(`wolf`,`w4`,`world`,58,-45,{pack:`B`}),wC(`wolf`,`w5`,`world`,62,-48,{pack:`B`}),wC(`draugr`,`d1`,`dungeon`,B,16,{yaw:0,patrol:[[B,16],[B,27.5]]}),cf.forEach((e,t)=>wC(`draugr`,`d`+(t+2),`dungeon`,B-7.25,e,{yaw:Math.PI/2,dormant:!0})),wC(`draugr`,`d5`,`dungeon`,B+34,6,{yaw:-Math.PI/2,patrol:[[B+34,6],[B+16,6]]}),wC(`wolf`,`w6`,`world`,-22,40,{pack:`C`}),wC(`wolf`,`w7`,`world`,-25,43,{pack:`C`}),EC=wC(`troll`,`troll`,`world`,Jd.x,Jd.z+2,{yaw:Math.PI}),df.forEach(([e,t],n)=>{for(let r=0;r<2;r++)wC(`deer`,`deer${n}_${r}`,`world`,e+r*3,t+r*1.5,{pack:`herd`+n,wild:!0})}),ff.forEach(([e,t],n)=>wC(`hare`,`hare`+n,`world`,e,t,{wild:!0})),OC=wC(`boss`,`boss`,`dungeon`,B+50.1,37,{yaw:-Math.PI/2,throne:!0}),AC=new M(new Yc(1,40).rotateX(-Math.PI/2),zd(15028287,{transparent:!0,opacity:.28,depthWrite:!1})),jC=new M(new Vl(.95,1,48).rotateX(-Math.PI/2),zd(15028287,{transparent:!0,opacity:.8,depthWrite:!1})),AC.visible=jC.visible=!1,Sd.add(AC,jC)}function FC(e,t,n,r){if(Rb(e)){e.aware=Math.max(e.aware,1);return}if(e.state===`throne`)return;if(Z.dead){e.aware=Math.max(0,e.aware-r*.3);return}let i=e.def,a=e.state===`dormant`,o=0;if(!a&&t<i.detect&&(Math.abs(Uu(e.yaw,n))<i.cone/2||t<2.2)&&(e.zone===`world`||$h(e.pos.x,e.pos.z,Z.pos.x,Z.pos.z))){let e=.35+(1-t/i.detect)*2.4;Z.sneaking&&(e*=.3*(1-OS())),o+=e*(1-.45*gp())*(1-.35*mh())}let s=Z.noise*(a?.55:1);t<s&&(o+=(1-t/s)*(Z.sneaking?.6:1.6)),e.aware=o>0?Math.min(1.25,e.aware+o*r):Math.max(0,e.aware-r*.22)}function IC(e,t){if(e.dead){e.deadT+=t,e.wild&&e.deadT>150&&Z.pos.distanceTo(e.home)>40&&RC(e),zC(e,t);return}e.atkCd-=t,e.chill>0&&(e.chill-=t),e.flash=Math.max(0,e.flash-t*5),e.alertT=Math.max(0,e.alertT-t),e.stagger>0&&(e.stagger-=t);let n=Z.pos.x-e.pos.x,r=Z.pos.z-e.pos.z,i=Math.hypot(n,r),a=Math.atan2(n,r);FC(e,i,a,t);let o=null,s=0,c=null,l=0;switch(e.state){case`dormant`:e.aware>=1&&(e.state=`rising`,e.t=0,z(`draugr`));break;case`throne`:kC.triggered&&(e.state=`rising`,e.t=0,z(`roar`),LS(.4));break;case`rising`:e.t+=t,e.rise=Math.min(1,e.t/1.2),e.t>=1.25&&(e.state=`chase`,e.aware=1.2,e.alertT=1.2,e.kind===`boss`&&e.home.copy(e.pos));break;case`idle`:if(e.aware>=(e.wild?.7:1)){Wb(e);break}if(e.aware>.35){e.state=`suspicious`,e.lastSeen.copy(Z.pos);break}if(e.patrol){let n=e.patrol[e.patrolI];Math.hypot(n[0]-e.pos.x,n[1]-e.pos.z)<.5?(e.wanderT-=t,e.wanderT<=0&&(e.patrolI=(e.patrolI+1)%e.patrol.length,e.wanderT=2+Math.random()*2)):(o={x:n[0],z:n[1]},s=e.def.speed*.35)}else(e.kind===`wolf`||e.wild)&&(e.wanderT-=t,(e.wanderT<=0||!e.wanderTo)&&(e.wanderTo={x:e.home.x+(Math.random()-.5)*10,z:e.home.z+(Math.random()-.5)*10},e.wanderT=3+Math.random()*4),Math.hypot(e.wanderTo.x-e.pos.x,e.wanderTo.z-e.pos.z)>.5&&(o=e.wanderTo,s=1.4));break;case`suspicious`:if(e.wild){c=a,e.aware>=.7?Wb(e):e.aware<.15&&(e.state=`idle`);break}c=a,e.aware>.6&&(e.lastSeen.copy(Z.pos),o=e.lastSeen,s=e.def.speed*.3),e.aware>=1?Wb(e):e.aware<.15&&(e.state=`idle`);break;case`flee`:{e.t-=t;let a=Math.atan2(-n,-r)+Math.sin(Q.time*1.7+e.home.x)*.45;o={x:e.pos.x+Math.sin(a)*8,z:e.pos.z+Math.cos(a)*8},s=e.def.speed,e.t<=0&&i>24&&(e.state=`idle`,e.home.copy(e.pos),e.aware=0,e.wanderTo=null)}break;case`chase`:if(Z.dead){e.state=`return`;break}if(e.kind!==`boss`&&e.home.distanceTo(e.pos)>34&&i>10){e.state=`return`,e.aware=0;break}if(c=a,e.kind===`archer`){if(i<7){let t=Math.atan2(-n,-r);o={x:e.pos.x+Math.sin(t)*4,z:e.pos.z+Math.cos(t)*4},s=e.def.speed*.8}else i>16&&(o=Z.pos,s=e.def.speed);i<e.def.range&&e.atkCd<=0&&e.stagger<=0&&Math.abs(Uu(e.yaw,a))<.5&&i>3&&(e.state=`aim`,e.t=0);break}if(DC(e)){if(e.slamCd-=t,(e.kind===`boss`||e.kind===`warlord`)&&!e.phase2&&e.hp<e.maxHp*.5){e.phase2=!0,e.state=`roar`,e.t=0,z(`roar`),LS(.5),eS(e.kind===`boss`?`ÖLÜLER, KALKIN!`:`KIZIL KALKAN, BANA!`);break}if(e.slamCd<=0&&i<7){e.state=`slam`,e.t=0,e.atkType=`slam`,e.slamCd=e.phase2?6:8.5;break}}i>e.def.range*.8+Z.r&&(o=Z.pos,s=e.def.speed*(e.phase2?1.15:1)),i<=e.def.range+.2&&e.atkCd<=0&&e.stagger<=0&&Math.abs(Uu(e.yaw,a))<.6&&(e.state=`windup`,e.t=0,e.atkType=e.kind===`boss`?`heavy`:e.kind===`troll`||e.kind===`warlord`?Math.random()<.5?`heavy`:`chop`:e.model.kind===`h`?Math.random()<.5?`slash`:`chop`:`bite`);break;case`aim`:if(e.t+=t,c=a,e.stagger>0){e.state=`chase`,e.atkCd=.8;break}e.t>=e.def.windup&&(yx(e),e.state=`recover`,e.t=0);break;case`windup`:e.t+=t,e.t<e.def.windup*.65&&(c=a),e.kind===`wolf`&&(l=-1.1),e.t>=e.def.windup&&(e.state=`strike`,e.t=0,e.hitDone=!1,e.kind===`wolf`?z(`wolf`):(z(`swing`),Bg(e)));break;case`strike`:e.t+=t,l=e.kind===`wolf`?i>.8?9:2:i>e.def.range*.5?e.kind===`boss`?3.2:2.6:0,!e.hitDone&&e.t>=e.def.strike*(e.kind===`wolf`?.7:.55)&&(e.hitDone=!0,e.kind===`wolf`&&z(`bite`),LC(e)),e.t>=e.def.strike&&(e.state=`recover`,e.t=0);break;case`recover`:e.t+=t,e.t>=e.def.recover&&(e.state=`chase`,e.atkCd=e.kind===`archer`?1.4+Math.random()*1.2:.5+Math.random()*(e.kind===`boss`?.6:1));break;case`slam`:{e.t+=t,e.t<.5&&(c=a);let n=Math.min(1,e.t/NC);AC.visible=jC.visible=!0,AC.position.set(e.pos.x,.03,e.pos.z),jC.position.set(e.pos.x,.04,e.pos.z),AC.scale.set(MC*n,1,MC*n),jC.scale.set(MC,1,MC),e.t>=1.25&&(AC.visible=jC.visible=!1,z(`slam`),LS(.6),Xu(50),Ig(e.pos.x,0,e.pos.z,15044671,MC,.45),Mg(e.pos.x,.3,e.pos.z,36,12166538,6,.7,12,2),i<4.6+Z.r&&Gb(30,e,{slam:!0}),e.state=`recover`,e.t=0)}break;case`roar`:if(e.t+=t,e.t>1.3&&e.kind===`warlord`){for(let t of[1,2]){let n=e.yaw+Math.PI+(t===1?.6:-.6),r=wC(`bandit`,`rb`+t+`_`+Math.floor(Q.time),`world`,e.pos.x+Math.sin(n)*6,e.pos.z+Math.cos(n)*6,{temp:!0,pack:`fort`});r.state=`chase`,r.aware=1.2}e.state=`chase`}else e.t>1.3&&(wC(`draugr`,`s1`,`dungeon`,B+38,31,{emerge:!0,temp:!0,yaw:Math.PI/2}),wC(`draugr`,`s2`,`dungeon`,B+38,43,{emerge:!0,temp:!0,yaw:Math.PI/2}),e.state=`chase`);break;case`return`:o=e.home,s=e.def.speed*.7,e.pos.distanceTo(e.home)<1&&(e.state=`idle`,e.hp=e.maxHp),e.aware>=1&&!Z.dead&&Wb(e)}e.stagger>0&&(e.state===`windup`||e.state===`chase`)&&(e.state===`windup`&&(e.state=`recover`,e.t=e.def.recover*.3),o=null,c=null),c!==null&&(e.yaw+=Uu(e.yaw,c)*Math.min(1,t*(e.kind===`wolf`?10:6)));let u=0,d=0;if(o&&s>0){e.chill>0&&(s*=Hp.slow);let n=o.x,r=o.z;if(e.zone===`dungeon`&&!$h(e.pos.x,e.pos.z,n,r)&&o===Z.pos){let t=ag(e.pos.x,e.pos.z);t&&(n=t.x,r=t.z)}let i=n-e.pos.x,a=r-e.pos.z,l=Math.hypot(i,a);l>.05&&(u=i/l*s,d=a/l*s,c===null&&(e.yaw+=Uu(e.yaw,Math.atan2(i,a))*Math.min(1,t*6)))}l&&(u+=Math.sin(e.yaw)*l,d+=Math.cos(e.yaw)*l),e.speedNow=Math.hypot(u,d),e.state!==`dormant`&&e.state!==`throne`&&(e.state!==`rising`||e.kind===`boss`||e.emerge)&&(e.pos.x+=(u+e.kb.x)*t,e.pos.z+=(d+e.kb.z)*t,AS(e.pos,e.def.r,e.zone)),e.kb.multiplyScalar(Math.exp(-t*6)),zC(e,t)}function LC(e){let t=Z.pos.x-e.pos.x,n=Z.pos.z-e.pos.z,r=Math.hypot(t,n),i=Math.abs(Uu(e.yaw,Math.atan2(t,n))),a=e.atkType===`heavy`?1.45:e.atkType===`chop`?.9:1.1;r<=e.def.range+Z.r+.3&&i<a&&Gb(e.def.dmg*(.9+Math.random()*.2)*(e.phase2?1.15:1),e,{})}function RC(e){e.dead=!1,e.deadT=0,e.hp=e.maxHp,e.state=`idle`,e.aware=0,e.pos.copy(e.home),e.kb.set(0,0,0),e.bleed=e.burn=null,e.chill=0,e.model.root.visible=!0,e.model.root.rotation.set(0,e.yaw,0)}function zC(e,t){let n=e.model,r=n.root,i=e.zone===`world`?U(e.pos.x,e.pos.z):0;e.pos.y=i,r.position.set(e.pos.x,i,e.pos.z),r.rotation.set(0,e.yaw,0);let a={speed:e.speedNow,atkPhase:-1,atkPower:!1,roll:-1,sit:0,dead:0};if(e.state===`dormant`)r.position.y=i+.72,r.rotation.x=-Math.PI/2;else if(e.state===`rising`){let t=Vu(e.rise);e.emerge?r.position.y=i-1.9*(1-t):e.kind===`boss`?a.sit=1-t:(r.position.y=i+.72*(1-t),r.rotation.x=-Math.PI/2*(1-t))}else e.state===`throne`&&(a.sit=1);if(e.model.kind===`h`){n.hips.visible=e.zone!==`world`||Math.abs(e.pos.x-Z.pos.x)+Math.abs(e.pos.z-Z.pos.z)<110,n.bowHand&&(a.aim=e.state===`aim`?Math.min(1,e.t/e.def.windup):e.state===`recover`&&e.kind===`archer`&&e.t<.25?0:-1);let t=e.atkType||`slash`;if(e.state===`windup`)a.eatk={type:t,phase:`windup`,k:Math.min(1,e.t/e.def.windup)};else if(e.state===`strike`)a.eatk={type:t,phase:`strike`,k:Math.min(1,e.t/e.def.strike)};else if(e.state===`recover`)a.eatk={type:t,phase:`recover`,k:Math.min(1,e.t/e.def.recover)};else if(e.state===`slam`){let t=NC-.2;a.eatk=e.t<t?{type:`slam`,phase:`windup`,k:Math.min(1,e.t/t)}:{type:`slam`,phase:`strike`,k:Math.min(1,(e.t-t)/.2)}}}if(e.dead&&(a.dead=Math.min(1,e.deadT/.6)),e.model.kind===`w`){n.body.visible=e.zone!==`world`||Math.abs(e.pos.x-Z.pos.x)+Math.abs(e.pos.z-Z.pos.z)<(e.kind===`hare`?45:e.kind===`deer`?80:110);let r=e.wild?null:e.state===`windup`?{phase:`windup`,k:Math.min(1,e.t/e.def.windup)}:e.state===`strike`?{phase:`strike`,k:Math.min(1,e.t/e.def.strike)}:e.state===`recover`?{phase:`recover`,k:Math.min(1,e.t/e.def.recover)}:null;$S(n,{speed:e.speedNow,atk:r,dead:a.dead},t)}else JS(n,a,t);e.dead&&e.deadT>4&&(r.position.y-=Math.min(1.6,(e.deadT-4)*.6),e.deadT>7&&(r.visible=!1));let o=e.state===`windup`?Math.min(1,e.t/e.def.windup):e.state===`slam`?Math.min(1,e.t/NC):0,s=e.flash;for(let e of n.flash)e.emissive.setRGB(s*.8+o*.55,s*.8+o*.2,s*.8+o*.04);let c=e.zone===Q.zone&&!e.dead&&r.visible,l=c&&(e.hp<e.maxHp||e===hS.target)&&!DC(e);e.bar.bg.visible=e.bar.fill.visible=l;let u=r.position.y+e.def.height+.25;if(l){let t=e.pos.x-NS.x*.5,n=e.pos.z-NS.z*.5;e.bar.bg.position.set(t,u,n),e.bar.fill.position.set(t,u,n),e.bar.fill.scale.x=Math.max(.001,e.hp/e.maxHp)}let d=c&&!e.wild&&(e.state===`suspicious`||e.state===`idle`&&e.aware>.35),f=c&&!e.wild&&e.alertT>0&&Rb(e);e.mark.visible=d||f,e.mark.visible&&(e.mark.material.map=f?xC:bC,e.mark.position.set(e.pos.x,u+.45,e.pos.z))}var BC,VC,HC,UC;function WC(e){requestAnimationFrame(WC);let t=Math.min(.05,(e-BC)/1e3);if(BC=e,VC+=t,HC++,VC>=1){let e=HC/VC;VC=0,HC=0,L.gfx===`auto`&&Q.mode===`play`&&(e<42&&xd>.6?(Ld(Math.max(.6,xd-.15)),UC=0):e>57?++UC>=4&&xd<bd&&(Ld(Math.min(bd,xd+.1)),UC=0):UC=0),L.fps&&Ju(qx,`${Math.round(e)} fps · çözünürlük ×${xd.toFixed(2)}`)}let n=t*(Q.slowmo||1);Q.hitstop>0&&(Q.hitstop-=t,n=t*.08),Mb(n),Q.time+=t,Zf.uniforms.t.value=Q.time;for(let e of Fh){let t=1+Math.sin(Q.time*13+e.seed)*.12+Math.sin(Q.time*7.3+e.seed)*.08;if(e.f1.scale.set(1,t,1),e.f2&&e.f2.scale.set(1,1.1-(t-1),1),e.gl){let n=e.base*(.9+(t-1)*.8);e.gl.scale.set(n,n,1)}}kd.intensity=Q.zone===`world`?38+Math.sin(Q.time*11)*5+Math.sin(Q.time*5.3)*4:0;for(let e of Rh)e.emissiveIntensity=(hd?1.3:.8)+Math.sin(Q.time*1.6)*.25;for(let e of Object.values(Wh))e.t<1&&(e.t=Math.min(1,e.t+t/1.2),e.mesh.position.y=(e.open?Vu(e.t):1-Vu(e.t))*3.1);if(Q.mode===`title`||Q.mode===`boot`){let e=Q.time*.05;Cd.position.set(Math.sin(e)*24,8.5+Math.sin(Q.time*.2),Math.cos(e)*24),Cd.lookAt(0,2.2,0),hg(t),JS(Z.model,{speed:0,atkPhase:-1,roll:-1},t),Z.model.root.position.copy(Z.pos);for(let e of CC)e.zone===`world`&&zC(e,t)}else if(Q.mode===`play`){Z.stats.time+=t,vp(t),yh(t,gp()),NS.set(1,0,0).applyQuaternion(Cd.quaternion),Y.keys.has(`ArrowLeft`)&&($.yaw+=t*2.2),Y.keys.has(`ArrowRight`)&&($.yaw-=t*2.2),Y.keys.has(`ArrowUp`)&&($.pitch-=t*1.2),Y.keys.has(`ArrowDown`)&&($.pitch+=t*1.2),Q.zone===`dungeon`?(ig(),!kC.triggered&&!OC.dead&&Z.pos.x>1031&&Z.pos.z>24&&(kC.triggered=!0,nS(`Höyük Kralı`,`MEZARIN SAHİBİ`))):(!Q.seen.has(`lake`)&&xf(Z.pos.x,Z.pos.z)<1.6&&(Q.seen.add(`lake`),nS(`Kuzgun Gölü`,`YENİ YER`)),!Q.seen.has(`lair`)&&Math.hypot(Z.pos.x-Jd.x,Z.pos.z-Jd.z)<16&&(Q.seen.add(`lair`),nS(`Trol İni`,`YENİ YER`)),ly(),xy(),!Q.seen.has(`ruin`)&&Math.hypot(Z.pos.x-Wd.x,Z.pos.z-Wd.z)<14&&(Q.seen.add(`ruin`),nS(`Unutulmuş Taşlar`,`YENİ YER`)),!Q.seen.has(`isvik`)&&Math.hypot(Z.pos.x,Z.pos.z)<20&&(Q.seen.add(`isvik`),nS(`Isvik`,`KUZEY KIYISI`))),kS(n),ES(n),Cx(n),Lb(n),l_(n),Xg(),i_(n,Z.moved||0);for(let e of[...CC])e.zone===Q.zone&&IC(e,n);for(let e of CC){if(e.dead||e.zone!==Q.zone||e.state===`dormant`||e.state===`throne`)continue;let t=Z.pos.x-e.pos.x,n=Z.pos.z-e.pos.z,r=Math.hypot(t,n),i=Z.r+e.def.r;if(r<i&&r>1e-4){let a=i-r,o=DC(e)?1:.35;Z.pos.x+=t/r*a*o,Z.pos.z+=n/r*a*o,e.pos.x-=t/r*a*(1-o),e.pos.z-=n/r*a*(1-o)}for(let t of CC){if(t===e||t.dead||t.zone!==e.zone||t.state===`dormant`||t.state===`throne`)continue;let n=e.pos.x-t.pos.x,r=e.pos.z-t.pos.z,i=Math.hypot(n,r),a=e.def.r+t.def.r;if(i<a&&i>1e-4){let t=(a-i)*.5;e.pos.x+=n/i*t,e.pos.z+=r/i*t}}}hg(n),oy(n),Dg(n),Q.zone===`dungeon`?Ad.position.set(Z.pos.x+Math.sin($.yaw)*1.4,3.9,Z.pos.z+Math.cos($.yaw)*1.4):Ad.position.set(Z.pos.x,Z.pos.y+2.3,Z.pos.z),Q.runeFlash>0?(Q.runeFlash-=t,Ad.intensity=60*Math.max(0,Q.runeFlash/.35),Q.runeFlash<=0&&Ad.color.setHex(16753242)):Ad.intensity=Q.zone===`dungeon`?16+Math.sin(Q.time*9)*1.5:gp()*9,IS(t),Q.autosaveT+=t,Q.autosaveT>25&&(Q.autosaveT=0,ib(!0))}else Q.mode===`lockpick`?Iv(t):Q.mode===`fishing`&&_b(t);if(Q.zone===`world`){let e=mh(),n=Cd.position.x,r=Cd.position.y,i=Cd.position.z,a=(Math.sin(Q.time*.3)*.6+.4)*(1+7*e)+3*e,o=1+.9*e;for(let e=0;e<ep;e++){let s=tp[e*3],c=tp[e*3+1],l=tp[e*3+2];c-=np[e]*t*o,s+=a*t,l+=Math.sin(Q.time+e)*.2*t,c<r-12&&(c+=26),c>r+14&&(c-=26),s-n>30?s-=60:s-n<-30&&(s+=60),l-i>30?l-=60:l-i<-30&&(l+=60),tp[e*3]=s,tp[e*3+1]=c,tp[e*3+2]=l}rp.attributes.position.needsUpdate=!0}if(Yf.position.copy(Cd.position),Q.zone===`world`&&(Dd.position.copy(Z.pos).add(Od),Dd.target.position.copy(Z.pos)),Ng(t),Vg(t),Q.zone===`world`)v_(t),b_(),g_();else{cg(t);for(let e of og)e.material.uniforms.t.value=Q.time}if(qf(),Q.emberT=(Q.emberT||0)-t,Q.emberT<=0&&!gd){Q.emberT=.09;for(let e of Hf)e.zone===Q.zone&&e.obj.visible&&(e.obj.getWorldPosition(a_),!(a_.distanceTo(Cd.position)>50)&&Mg(a_.x+(Math.random()-.5)*.4*e.scale,a_.y+.9*e.scale,a_.z+(Math.random()-.5)*.4*e.scale,1,16752704,.5,1.6,-1.2,.6))}Q.mode!==`title`&&Q.mode!==`boot`&&(cS(),Kg(t)),L_(t,GC()),Fd?(Id.uniforms.time.value=Q.time%100,Id.uniforms.dungeon.value=+(Q.zone===`dungeon`),Fd.render(t)):yd.render(Sd,Cd)}function GC(){return Q.mode===`title`||Q.mode===`boot`?`explore`:CC.some(e=>!e.dead&&!e.wild&&e.zone===Q.zone&&Rb(e)&&e.pos.distanceTo(Z.pos)<28)?`combat`:Q.zone===`dungeon`?`dungeon`:gp()>.6?`night`:`explore`}function KC(){BC=performance.now(),VC=0,HC=0,UC=0}var qC;function JC(){F(`#title`).hidden=!0,Q.mode=`play`,lS(),!Q.seen.has(`isvik`)&&Q.zone===`world`&&(Q.seen.add(`isvik`),nS(`Isvik`,`KUZEY KIYISI`)),Z.stage===0&&setTimeout(()=>X(`Parlayan işaret seni Sigrun'a götürür`),1800)}function YC(){F(`#ctrlBox`).innerHTML=fd?`<h2>DOKUNMATİK KONTROLLER</h2><dl><dt>Sol başparmak</dt><dd>Yürü; sonuna kadar it: koş</dd><dt>Sağda sürükle</dt><dd>Kamerayı çevir</dd><dt>Kılıç</dt><dd>Saldır; basılı tut: güçlü saldırı</dd><dt>Kalkan</dt><dd>Basılı tut: blok</dd><dt>Ok</dt><dd>Yuvarlan, kaç</dd><dt>Rün</dt><dd>Çevreyi iten rün gücü</dd><dt>Çömel</dt><dd>Gizlen; uyuyana gizli saldırı ×3</dd><dt>Hedef</dt><dd>Düşmana kilitlen; kamerayı kaydır: hedef değiştir</dd><dt>Yay</dt><dd>Basılı tut: ger; bırak: at (yay kuşanınca görünür)</dd><dt>El</dt><dd>Konuş, aç, topla</dd></dl>`:`<h2>KLAVYE VE FARE</h2><dl><dt><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></dt><dd>Yürü · <kbd>Shift</kbd> koş</dd><dt>Fare</dt><dd>Kamera (ekrana tıklayınca kilitlenir)</dd><dt>Sol tık</dt><dd>Saldır; basılı tut: güçlü saldırı</dd><dt><kbd>F</kbd> / sağ tık</dt><dd>Blok</dd><dt><kbd>Boşluk</kbd></dt><dd>Yuvarlan, kaç</dd><dt><kbd>C</kbd></dt><dd>Gizlen; fark edilmeden vur: ×3</dd><dt><kbd>R</kbd></dt><dd>Rün gücü</dd><dt><kbd>Q</kbd></dt><dd>Şifa iksiri</dd><dt><kbd>E</kbd></dt><dd>Konuş, aç, topla</dd><dt><kbd>T</kbd> / orta tık</dt><dd>Hedefe kilitlen; fareyi kaydır: hedef değiştir</dd><dt><kbd>V</kbd></dt><dd>Yay: basılı tut, ger; bırak, at</dd><dt><kbd>H</kbd></dt><dd>Pişmiş et ye (can yenilenir)</dd><dt><kbd>Tab</kbd> · <kbd>Esc</kbd></dt><dd>Karakter · menü</dd></dl>`,qC=!!Wu.get(Gu),F(`#btnCont`).hidden=!qC,F(`#btnNew`).addEventListener(`click`,()=>{R.init(),Wu.del(Gu),Hv(`world`,2.5,7,Math.PI+.3),JC(),ib(!0)}),F(`#btnCont`).addEventListener(`click`,()=>{R.init();let e=Wu.get(Gu);if(e)try{ab(e)}catch(e){console.warn(e)}JC()})}var XC=Math.atan2(57-Qd.z,64.5-Qd.x),ZC=.27,QC=Math.atan2(Math.cos(XC),Math.sin(XC));function $C(){let{x:e,z:t}=$d,n=new P;n.position.set(e,U(e,t),t),n.rotation.y=.5,V.add(n);let r=H(2.6,1.3,.14,G.wood,0,.7,0,n);r.rotation.x=.1,H(2.6,.14,1.3,G.woodD,0,.08,.62,n),H(.14,1.3,1.3,G.woodD,1.25,.7,.62,n),H(.14,1.3,1.3,G.woodD,-1.25,.7,.62,n);let i=new Xc(.5,.5,.12,10).rotateX(Math.PI/2),a=Rd(4863270,{flatShading:!0}),o=new M(i,a);o.position.set(-.9,1.45,-.2),n.add(o);let s=new M(i,a);s.position.set(1.9,.07,1.6),s.rotation.x=Math.PI/2,n.add(s);for(let[e,t,r,i]of[[2.6,-.8,.6,.4],[-2.2,1.4,.5,1.1],[.4,2.3,.45,.2]])H(r,r,r,G.wood,e,r/2,t,n).rotation.y=i;let c=new M(new Xc(.32,.32,.8,9).rotateZ(Math.PI/2),Rd(7031342,{flatShading:!0}));c.position.set(-1.6,.32,-1.3),n.add(c);let l=new M(new Xc(.38,.38,.05,16),[Rd(5914672),new Jl({map:cC(`#7a1f1a`,`#d8c48a`)}),Rd(5914672)]);l.position.set(1.2,.05,-1.4),l.rotation.set(.15,0,.1),n.add(l),Sh(`world`,e,t,1.7),Yy({id:`caravan`,zone:`world`,x:e,z:t,r:3.4,can:()=>(Z.side.pass??0)<=1,label:()=>`İncele · Yağmalanmış kervan`,act:vy})}function ew(){let{x:e,z:t}=ef,n=U(e,t),r=new P;r.position.set(e,n,t),r.rotation.y=.6,V.add(r);for(let e of[-1.2,1.2])for(let t of[-1.2,1.2])H(.26,4.6,.26,G.woodD,e,2.3,t,r);H(3.2,.2,3.2,G.wood,0,4.2,0,r);for(let[e,t,n,i]of[[0,1.55,3.2,.1],[0,-1.55,3.2,.1],[1.55,0,.1,3.2],[-1.55,0,.1,3.2]])H(n,.7,i,G.woodD,e,4.65,t,r);let i=new M(new Zc(2.6,1.6,4).rotateY(Math.PI/4),G.roof);i.position.y=6.2,i.castShadow=_d,r.add(i);for(let e=0;e<9;e++)H(.9,.08,.08,G.wood,0,.4+e*.45,1.45,r);H(.7,.55,.7,G.wood,1.9,.28,1.4,r),Sh(`world`,e,t,1.9),Yy({id:`orders`,zone:`world`,x:e+Math.cos(.6)*1.9+Math.sin(.6)*1.4,z:t-Math.sin(.6)*1.9+Math.cos(.6)*1.4,r:2.2,can:()=>(Z.side.pass??0)<=2,label:()=>`Oku · Haydut emri`,act:yy})}function tw(){let{x:e,z:t,r:n}=Qd,r=Hu(11),i=[];for(let a=0,o=0;a<I;a+=.45/n,o++){let s=Math.atan2(Math.sin(a-XC),Math.cos(a-XC));if(Math.abs(s)<.27)continue;let c=e+Math.cos(a)*n,l=t+Math.sin(a)*n,u=U(c,l),d=2.6+r()*.7;i.push(jh(new Xc(.2,.23,d,6).translate(c,u+d/2,l),r()<.5?5914672:4863270)),i.push(jh(new Zc(.2,.5,6).translate(c,u+d+.25,l),7033920)),o%3==0&&Sh(`world`,c,l,.55)}for(let r of[-1,1])for(let a of[.6,1.9]){let o=XC+r*.47000000000000003,s=e+Math.cos(o)*(n-.3),c=t+Math.sin(o)*(n-.3);i.push(jh(new Rr(.16,.16,3.2).rotateY(-o).translate(s,U(s,c)+a,c),3811870))}let a=new M(Mh(i),new Jl({vertexColors:!0,flatShading:!0}));a.castShadow=_d,a.receiveShadow=_d,V.add(a);let o=[];for(let r of[-1,1]){let i=XC+r*ZC,a=e+Math.cos(i)*n,s=t+Math.sin(i)*n,c=U(a,s);H(.4,4.4,.4,G.woodD,a,c+2.2,s,V),Sh(`world`,a,s,.5),o.push([a,c,s]);let l=new M(new fi(1,1),new Jl({map:cC(`#7a1f1a`,`#d8c48a`),side:2}));l.position.set(a-Math.cos(XC)*.25,c+3,s-Math.sin(XC)*.25),l.rotation.y=QC,V.add(l)}let[[s,c,l],[u,,d]]=o,f=H(Math.hypot(u-s,d-l)+.6,.3,.3,G.woodD,(s+u)/2,c+4.2,(l+d)/2,V);f.rotation.y=-Math.atan2(d-l,u-s),Ph(e+5,t+1,6,9,2.6,-Math.PI/2);let p=Rd(8010282,{flatShading:!0});for(let[n,r,i]of[[e-4,t-7.5,.3],[e-1,t+8,-.4],[e+4,t-7,.9]]){let e=new M(new Zc(1.9,2.5,4),p);e.position.set(n,U(n,r)+1.25,r),e.rotation.y=i,e.castShadow=_d,V.add(e),Sh(`world`,n,r,1.45)}Ih(V,e-3.5,U(e-3.5,t-1),t-1,.75),Sh(`world`,e-3.5,t-1,.5);for(let[n,r]of[[e+1.5,t-4.5],[e+2.3,t-4],[e-7.5,t+4.5]])H(.7,.7,.7,G.wood,n,U(n,r)+.35,r,V),Sh(`world`,n,r,.45);{let n=e-8,r=t-3,i=U(n,r);H(.12,1.4,.12,G.woodD,n,i+.7,r-.8,V),H(.12,1.4,.12,G.woodD,n,i+.7,r+.8,V),H(.1,.1,1.8,G.woodD,n,i+1.25,r,V),Ch(`world`,n-.3,n+.3,r-1,r+1)}let m=e-5.5,h=t+3;H(.22,2.2,.22,G.woodD,m+.45,U(m,h)+1.1,h,V),Zy(`c_fort`,`world`,e+3.5,t+8.5,Math.PI,!0,{gold:90,item:`fort`})}function nw(){let{x:e,z:t}=Qd;wC(`bandit`,`b_c1`,`world`,$d.x+3,$d.z+2,{pack:`caravan`,yaw:2.4}),wC(`bandit`,`b_c2`,`world`,$d.x-2.5,$d.z+3.5,{pack:`caravan`,yaw:.8}),wC(`archer`,`a_t1`,`world`,ef.x+1.5,ef.z-2.5,{pack:`tower`,yaw:-2.3}),wC(`bandit`,`b_t1`,`world`,ef.x-3,ef.z-3,{pack:`tower`,patrol:[[ef.x-3,ef.z-3],[50,38]]});let n=e+Math.cos(XC)*(Qd.r+2.2),r=t+Math.sin(XC)*(Qd.r+2.2),i=-Math.sin(XC)*2.6,a=Math.cos(XC)*2.6;wC(`bandit`,`b_f1`,`world`,n+i,r+a,{pack:`fort`,yaw:QC}),wC(`bandit`,`b_f2`,`world`,n-i,r-a,{pack:`fort`,yaw:QC}),wC(`bandit`,`b_f3`,`world`,e-2,t-4,{pack:`fort`,patrol:[[e-2,t-4],[e-1,t+5],[e-6,t+.5]]}),wC(`bandit`,`b_f4`,`world`,e+2,t+6,{pack:`fort`,yaw:Math.PI}),wC(`archer`,`a_f1`,`world`,e-1,t-9,{pack:`fort`,yaw:QC}),wC(`archer`,`a_f2`,`world`,e+6.5,t+7.5,{pack:`fort`,yaw:QC+.6}),wC(`warlord`,`halvar`,`world`,e-.6,t+1.2,{pack:`fort`,yaw:QC})}function rw(){$C(),ew(),tw(),nw()}function iw(e){try{e&&e.save&&(ab(e.save),JC())}catch{}}function aw(){window.__ataReady=!0}function ow(){Hv(`world`,2.5,7,Math.PI+.3),Q.mode=`title`,F(`#boot`).hidden=!0,F(`#title`).hidden=!1,lS(),addEventListener(`resize`,()=>{Cd.aspect=innerWidth/innerHeight,Cd.updateProjectionMatrix(),yd.setSize(innerWidth,innerHeight),Fd&&Fd.setSize(innerWidth,innerHeight),Q.mode===`lockpick`&&Nv(),uS()}),requestAnimationFrame(WC);try{window.claude?.hot?.snapshot?.(()=>({save:Q.mode===`play`?rb():null}))}catch{}try{window.claude?.hot?.ready?window.claude.hot.ready(iw):iw(window.claude?.hot?.data??{})}catch{}}aw(),Zu(),Hd(),Jf(),Oh(),ap(),Df(),hf(),Of(),zh(),gf(),Bh(),x_(),dg(),eC(),jS(),gg(),PC(),o_(),DS(),kx(Cd),zS(),nb(),rw(),sy(),vb(),My(),qy(),Bv(),Nb(),dS(),ob(),YC(),KC(),ow();