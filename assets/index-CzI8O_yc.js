(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=1e3,t=1001,n=1002,r=1003,i=1004,a=1005,o=1006,s=1007,c=1008,l=1009,u=1010,d=1011,f=1012,p=1013,m=1014,h=1015,g=1016,_=1017,v=1018,y=1020,b=35902,x=1021,S=1022,C=1023,w=1024,T=1025,E=1026,ee=1027,te=1028,D=1029,ne=1030,O=1031,re=1033,ie=33776,ae=33777,oe=33778,se=33779,ce=35840,le=35841,ue=35842,de=35843,fe=36196,pe=37492,me=37496,he=37808,ge=37809,_e=37810,ve=37811,ye=37812,be=37813,xe=37814,Se=37815,k=37816,Ce=37817,we=37818,Te=37819,A=37820,Ee=37821,j=36492,De=36494,Oe=36495,ke=36283,Ae=36284,je=36285,Me=36286,Ne=2300,Pe=2301,Fe=2302,Ie=2400,Le=2401,Re=2402,ze=3200,Be=3201,Ve=`srgb`,He=`srgb-linear`,Ue=`linear`,We=`srgb`,Ge=7680,Ke=35044,qe=35048,Je=2e3,Ye=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let n=this._listeners[e];if(n!==void 0){let e=n.indexOf(t);e!==-1&&n.splice(e,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let t=this._listeners[e.type];if(t!==void 0){e.target=this;let n=t.slice(0);for(let t=0,r=n.length;t<r;t++)n[t].call(this,e);e.target=null}}},Xe=`00.01.02.03.04.05.06.07.08.09.0a.0b.0c.0d.0e.0f.10.11.12.13.14.15.16.17.18.19.1a.1b.1c.1d.1e.1f.20.21.22.23.24.25.26.27.28.29.2a.2b.2c.2d.2e.2f.30.31.32.33.34.35.36.37.38.39.3a.3b.3c.3d.3e.3f.40.41.42.43.44.45.46.47.48.49.4a.4b.4c.4d.4e.4f.50.51.52.53.54.55.56.57.58.59.5a.5b.5c.5d.5e.5f.60.61.62.63.64.65.66.67.68.69.6a.6b.6c.6d.6e.6f.70.71.72.73.74.75.76.77.78.79.7a.7b.7c.7d.7e.7f.80.81.82.83.84.85.86.87.88.89.8a.8b.8c.8d.8e.8f.90.91.92.93.94.95.96.97.98.99.9a.9b.9c.9d.9e.9f.a0.a1.a2.a3.a4.a5.a6.a7.a8.a9.aa.ab.ac.ad.ae.af.b0.b1.b2.b3.b4.b5.b6.b7.b8.b9.ba.bb.bc.bd.be.bf.c0.c1.c2.c3.c4.c5.c6.c7.c8.c9.ca.cb.cc.cd.ce.cf.d0.d1.d2.d3.d4.d5.d6.d7.d8.d9.da.db.dc.dd.de.df.e0.e1.e2.e3.e4.e5.e6.e7.e8.e9.ea.eb.ec.ed.ee.ef.f0.f1.f2.f3.f4.f5.f6.f7.f8.f9.fa.fb.fc.fd.fe.ff`.split(`.`),Ze=Math.PI/180,Qe=180/Math.PI;function $e(){let e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Xe[e&255]+Xe[e>>8&255]+Xe[e>>16&255]+Xe[e>>24&255]+`-`+Xe[t&255]+Xe[t>>8&255]+`-`+Xe[t>>16&15|64]+Xe[t>>24&255]+`-`+Xe[n&63|128]+Xe[n>>8&255]+`-`+Xe[n>>16&255]+Xe[n>>24&255]+Xe[r&255]+Xe[r>>8&255]+Xe[r>>16&255]+Xe[r>>24&255]).toLowerCase()}function et(e,t,n){return Math.max(t,Math.min(n,e))}function tt(e,t){return(e%t+t)%t}function nt(e,t,n){return(1-n)*e+n*t}function rt(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return e/4294967295;case Uint16Array:return e/65535;case Uint8Array:return e/255;case Int32Array:return Math.max(e/2147483647,-1);case Int16Array:return Math.max(e/32767,-1);case Int8Array:return Math.max(e/127,-1);default:throw Error(`Invalid component type.`)}}function it(e,t){switch(t.constructor){case Float32Array:return e;case Uint32Array:return Math.round(e*4294967295);case Uint16Array:return Math.round(e*65535);case Uint8Array:return Math.round(e*255);case Int32Array:return Math.round(e*2147483647);case Int16Array:return Math.round(e*32767);case Int8Array:return Math.round(e*127);default:throw Error(`Invalid component type.`)}}var M=class e{constructor(t=0,n=0){e.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*n-a*r+e.x,this.y=i*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},N=class e{constructor(t,n,r,i,a,o,s,c,l){e.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l)}set(e,t,n,r,i,a,o,s,c){let l=this.elements;return l[0]=e,l[1]=r,l[2]=o,l[3]=t,l[4]=i,l[5]=s,l[6]=n,l[7]=a,l[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[3],s=n[6],c=n[1],l=n[4],u=n[7],d=n[2],f=n[5],p=n[8],m=r[0],h=r[3],g=r[6],_=r[1],v=r[4],y=r[7],b=r[2],x=r[5],S=r[8];return i[0]=a*m+o*_+s*b,i[3]=a*h+o*v+s*x,i[6]=a*g+o*y+s*S,i[1]=c*m+l*_+u*b,i[4]=c*h+l*v+u*x,i[7]=c*g+l*y+u*S,i[2]=d*m+f*_+p*b,i[5]=d*h+f*v+p*x,i[8]=d*g+f*y+p*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8];return t*a*l-t*o*c-n*i*l+n*o*s+r*i*c-r*a*s}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=l*a-o*c,d=o*s-l*i,f=c*i-a*s,p=t*u+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/p;return e[0]=u*m,e[1]=(r*c-l*n)*m,e[2]=(o*n-r*a)*m,e[3]=d*m,e[4]=(l*t-r*s)*m,e[5]=(r*i-o*t)*m,e[6]=f*m,e[7]=(n*s-c*t)*m,e[8]=(a*t-n*i)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,i,a,o){let s=Math.cos(i),c=Math.sin(i);return this.set(n*s,n*c,-n*(s*a+c*o)+a+e,-r*c,r*s,-r*(-c*a+s*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(at.makeScale(e,t)),this}rotate(e){return this.premultiply(at.makeRotation(-e)),this}translate(e,t){return this.premultiply(at.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<9;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},at=new N;function ot(e){for(let t=e.length-1;t>=0;--t)if(e[t]>=65535)return!0;return!1}function st(e){return document.createElementNS(`http://www.w3.org/1999/xhtml`,e)}function ct(){let e=st(`canvas`);return e.style.display=`block`,e}var lt={};function ut(e){e in lt||(lt[e]=!0,console.warn(e))}function dt(e,t,n){return new Promise(function(r,i){function a(){switch(e.clientWaitSync(t,e.SYNC_FLUSH_COMMANDS_BIT,0)){case e.WAIT_FAILED:i();break;case e.TIMEOUT_EXPIRED:setTimeout(a,n);break;default:r()}}setTimeout(a,n)})}function ft(e){let t=e.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function pt(e){let t=e.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}var mt={enabled:!0,workingColorSpace:He,spaces:{},convert:function(e,t,n){return this.enabled===!1||t===n||!t||!n?e:(this.spaces[t].transfer===`srgb`&&(e.r=ht(e.r),e.g=ht(e.g),e.b=ht(e.b)),this.spaces[t].primaries!==this.spaces[n].primaries&&(e.applyMatrix3(this.spaces[t].toXYZ),e.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===`srgb`&&(e.r=gt(e.r),e.g=gt(e.g),e.b=gt(e.b)),e)},fromWorkingColorSpace:function(e,t){return this.convert(e,this.workingColorSpace,t)},toWorkingColorSpace:function(e,t){return this.convert(e,t,this.workingColorSpace)},getPrimaries:function(e){return this.spaces[e].primaries},getTransfer:function(e){return e===``?Ue:this.spaces[e].transfer},getLuminanceCoefficients:function(e,t=this.workingColorSpace){return e.fromArray(this.spaces[t].luminanceCoefficients)},define:function(e){Object.assign(this.spaces,e)},_getMatrix:function(e,t,n){return e.copy(this.spaces[t].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(e){return this.spaces[e].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(e=this.workingColorSpace){return this.spaces[e].workingColorSpaceConfig.unpackColorSpace}};function ht(e){return e<.04045?e*.0773993808:(e*.9478672986+.0521327014)**2.4}function gt(e){return e<.0031308?e*12.92:1.055*e**.41666-.055}var _t=[.64,.33,.3,.6,.15,.06],vt=[.2126,.7152,.0722],yt=[.3127,.329],bt=new N().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xt=new N().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);mt.define({[He]:{primaries:_t,whitePoint:yt,transfer:Ue,toXYZ:bt,fromXYZ:xt,luminanceCoefficients:vt,workingColorSpaceConfig:{unpackColorSpace:Ve},outputColorSpaceConfig:{drawingBufferColorSpace:Ve}},[Ve]:{primaries:_t,whitePoint:yt,transfer:We,toXYZ:bt,fromXYZ:xt,luminanceCoefficients:vt,outputColorSpaceConfig:{drawingBufferColorSpace:Ve}}});var St,Ct=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>`u`)return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{St===void 0&&(St=st(`canvas`)),St.width=e.width,St.height=e.height;let n=St.getContext(`2d`);e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=St}return t.width>2048||t.height>2048?(console.warn(`THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons`,e),t.toDataURL(`image/jpeg`,.6)):t.toDataURL(`image/png`)}static sRGBToLinear(e){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap){let t=st(`canvas`);t.width=e.width,t.height=e.height;let n=t.getContext(`2d`);n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),i=r.data;for(let e=0;e<i.length;e++)i[e]=ht(i[e]/255)*255;return n.putImageData(r,0,0),t}if(e.data){let t=e.data.slice(0);for(let e=0;e<t.length;e++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[e]=Math.floor(ht(t[e]/255)*255):t[e]=ht(t[e]);return{data:t,width:e.width,height:e.height}}return console.warn(`THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),e}},wt=0,Tt=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wt++}),this.uuid=$e(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:``},r=this.data;if(r!==null){let e;if(Array.isArray(r)){e=[];for(let t=0,n=r.length;t<n;t++)r[t].isDataTexture?e.push(Et(r[t].image)):e.push(Et(r[t]))}else e=Et(r);n.url=e}return t||(e.images[this.uuid]=n),n}};function Et(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap?Ct.getDataURL(e):e.data?{data:Array.from(e.data),width:e.width,height:e.height,type:e.data.constructor.name}:(console.warn(`THREE.Texture: Unable to serialize Texture.`),{})}var Dt=0,Ot=class r extends Ye{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=t,a=t,s=o,u=c,d=C,f=l,p=r.DEFAULT_ANISOTROPY,m=``){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Dt++}),this.uuid=$e(),this.name=``,this.source=new Tt(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=a,this.magFilter=s,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=f,this.offset=new M(0,0),this.repeat=new M(1,1),this.center=new M(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new N,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e==`string`;if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(r){if(this.mapping!==300)return r;if(r.applyMatrix3(this.matrix),r.x<0||r.x>1)switch(this.wrapS){case e:r.x-=Math.floor(r.x);break;case t:r.x=r.x<0?0:1;break;case n:Math.abs(Math.floor(r.x)%2)===1?r.x=Math.ceil(r.x)-r.x:r.x-=Math.floor(r.x)}if(r.y<0||r.y>1)switch(this.wrapT){case e:r.y-=Math.floor(r.y);break;case t:r.y=r.y<0?0:1;break;case n:Math.abs(Math.floor(r.y)%2)===1?r.y=Math.ceil(r.y)-r.y:r.y-=Math.floor(r.y)}return this.flipY&&(r.y=1-r.y),r}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Ot.DEFAULT_IMAGE=null,Ot.DEFAULT_MAPPING=300,Ot.DEFAULT_ANISOTROPY=1;var kt=class e{constructor(t=0,n=0,r=0,i=1){e.prototype.isVector4=!0,this.x=t,this.y=n,this.z=r,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w===void 0?1:e.w,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*i,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*i,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*i,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,i,a=.01,o=.1,s=e.elements,c=s[0],l=s[4],u=s[8],d=s[1],f=s[5],p=s[9],m=s[2],h=s[6],g=s[10];if(Math.abs(l-d)<a&&Math.abs(u-m)<a&&Math.abs(p-h)<a){if(Math.abs(l+d)<o&&Math.abs(u+m)<o&&Math.abs(p+h)<o&&Math.abs(c+f+g-3)<o)return this.set(1,0,0,0),this;t=Math.PI;let e=(c+1)/2,s=(f+1)/2,_=(g+1)/2,v=(l+d)/4,y=(u+m)/4,b=(p+h)/4;return e>s&&e>_?e<a?(n=0,r=.707106781,i=.707106781):(n=Math.sqrt(e),r=v/n,i=y/n):s>_?s<a?(n=.707106781,r=0,i=.707106781):(r=Math.sqrt(s),n=v/r,i=b/r):_<a?(n=.707106781,r=.707106781,i=0):(i=Math.sqrt(_),n=y/i,r=b/i),this.set(n,r,i,t),this}let _=Math.sqrt((h-p)*(h-p)+(u-m)*(u-m)+(d-l)*(d-l));return Math.abs(_)<.001&&(_=1),this.x=(h-p)/_,this.y=(u-m)/_,this.z=(d-l)/_,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},At=class extends Ye{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new kt(0,0,e,t),this.scissorTest=!1,this.viewport=new kt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:o,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let i=new Ot(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);i.flipY=!1,i.generateMipmaps=n.generateMipmaps,i.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let e=0;e<a;e++)this.textures[e]=i.clone(),this.textures[e].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,i=this.textures.length;r<i;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++)this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Tt(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:`dispose`})}},jt=class extends At{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Mt=class extends Ot{constructor(e=null,n=1,i=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},Nt=class extends Ot{constructor(e=null,n=1,i=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:a},this.magFilter=r,this.minFilter=r,this.wrapR=t,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Pt=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,i,a,o){let s=n[r+0],c=n[r+1],l=n[r+2],u=n[r+3],d=i[a+0],f=i[a+1],p=i[a+2],m=i[a+3];if(o===0){e[t+0]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=m;return}if(u!==m||s!==d||c!==f||l!==p){let e=1-o,t=s*d+c*f+l*p+u*m,n=t>=0?1:-1,r=1-t*t;if(r>2**-52){let i=Math.sqrt(r),a=Math.atan2(i,t*n);e=Math.sin(e*a)/i,o=Math.sin(o*a)/i}let i=o*n;if(s=s*e+d*i,c=c*e+f*i,l=l*e+p*i,u=u*e+m*i,e===1-o){let e=1/Math.sqrt(s*s+c*c+l*l+u*u);s*=e,c*=e,l*=e,u*=e}}e[t]=s,e[t+1]=c,e[t+2]=l,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,r,i,a){let o=n[r],s=n[r+1],c=n[r+2],l=n[r+3],u=i[a],d=i[a+1],f=i[a+2],p=i[a+3];return e[t]=o*p+l*u+s*f-c*d,e[t+1]=s*p+l*d+c*u-o*f,e[t+2]=c*p+l*f+o*d-s*u,e[t+3]=l*p-o*u-s*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,i=e._z,a=e._order,o=Math.cos,s=Math.sin,c=o(n/2),l=o(r/2),u=o(i/2),d=s(n/2),f=s(r/2),p=s(i/2);switch(a){case`XYZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`YXZ`:this._x=d*l*u+c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`ZXY`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u-d*f*p;break;case`ZYX`:this._x=d*l*u-c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u+d*f*p;break;case`YZX`:this._x=d*l*u+c*f*p,this._y=c*f*u+d*l*p,this._z=c*l*p-d*f*u,this._w=c*l*u-d*f*p;break;case`XZY`:this._x=d*l*u-c*f*p,this._y=c*f*u-d*l*p,this._z=c*l*p+d*f*u,this._w=c*l*u+d*f*p;break;default:console.warn(`THREE.Quaternion: .setFromEuler() encountered an unknown order: `+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],i=t[8],a=t[1],o=t[5],s=t[9],c=t[2],l=t[6],u=t[10],d=n+o+u;if(d>0){let e=.5/Math.sqrt(d+1);this._w=.25/e,this._x=(l-s)*e,this._y=(i-c)*e,this._z=(a-r)*e}else if(n>o&&n>u){let e=2*Math.sqrt(1+n-o-u);this._w=(l-s)/e,this._x=.25*e,this._y=(r+a)/e,this._z=(i+c)/e}else if(o>u){let e=2*Math.sqrt(1+o-n-u);this._w=(i-c)/e,this._x=(r+a)/e,this._y=.25*e,this._z=(s+l)/e}else{let e=2*Math.sqrt(1+u-n-o);this._w=(a-r)/e,this._x=(i+c)/e,this._y=(s+l)/e,this._z=.25*e}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<2**-52?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x*=e,this._y*=e,this._z*=e,this._w*=e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,i=e._z,a=e._w,o=t._x,s=t._y,c=t._z,l=t._w;return this._x=n*l+a*o+r*c-i*s,this._y=r*l+a*s+i*o-n*c,this._z=i*l+a*c+n*s-r*o,this._w=a*l-n*o-r*s-i*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,i=this._z,a=this._w,o=a*e._w+n*e._x+r*e._y+i*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=i,this;let s=1-o*o;if(s<=2**-52){let e=1-t;return this._w=e*a+t*this._w,this._x=e*n+t*this._x,this._y=e*r+t*this._y,this._z=e*i+t*this._z,this.normalize(),this}let c=Math.sqrt(s),l=Math.atan2(c,o),u=Math.sin((1-t)*l)/c,d=Math.sin(t*l)/c;return this._w=a*u+this._w*d,this._x=n*u+this._x*d,this._y=r*u+this._y*d,this._z=i*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),i=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class e{constructor(t=0,n=0,r=0){e.prototype.isVector3=!0,this.x=t,this.y=n,this.z=r}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw Error(`index is out of range: `+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw Error(`index is out of range: `+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(It.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(It.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6]*r,this.y=i[1]*t+i[4]*n+i[7]*r,this.z=i[2]*t+i[5]*n+i[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,i=e.elements,a=1/(i[3]*t+i[7]*n+i[11]*r+i[15]);return this.x=(i[0]*t+i[4]*n+i[8]*r+i[12])*a,this.y=(i[1]*t+i[5]*n+i[9]*r+i[13])*a,this.z=(i[2]*t+i[6]*n+i[10]*r+i[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,i=e.x,a=e.y,o=e.z,s=e.w,c=2*(a*r-o*n),l=2*(o*t-i*r),u=2*(i*n-a*t);return this.x=t+s*c+a*u-o*l,this.y=n+s*l+o*c-i*u,this.z=r+s*u+i*l-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,i=e.elements;return this.x=i[0]*t+i[4]*n+i[8]*r,this.y=i[1]*t+i[5]*n+i[9]*r,this.z=i[2]*t+i[6]*n+i[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,i=e.z,a=t.x,o=t.y,s=t.z;return this.x=r*s-i*o,this.y=i*a-n*s,this.z=n*o-r*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ft.copy(this).projectOnVector(e),this.sub(Ft)}reflect(e){return this.sub(Ft.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(et(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ft=new P,It=new Pt,Lt=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(zt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(zt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=zt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute(`position`);if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let t=0,n=r.count;t<n;t++)e.isMesh===!0?e.getVertexPosition(t,zt):zt.fromBufferAttribute(r,t),zt.applyMatrix4(e.matrixWorld),this.expandByPoint(zt);else e.boundingBox===void 0?(n.boundingBox===null&&n.computeBoundingBox(),Bt.copy(n.boundingBox)):(e.boundingBox===null&&e.computeBoundingBox(),Bt.copy(e.boundingBox)),Bt.applyMatrix4(e.matrixWorld),this.union(Bt)}let r=e.children;for(let e=0,n=r.length;e<n;e++)this.expandByObject(r[e],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,zt),zt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qt),Jt.subVectors(this.max,qt),Vt.subVectors(e.a,qt),Ht.subVectors(e.b,qt),Ut.subVectors(e.c,qt),Wt.subVectors(Ht,Vt),Gt.subVectors(Ut,Ht),Kt.subVectors(Vt,Ut);let t=[0,-Wt.z,Wt.y,0,-Gt.z,Gt.y,0,-Kt.z,Kt.y,Wt.z,0,-Wt.x,Gt.z,0,-Gt.x,Kt.z,0,-Kt.x,-Wt.y,Wt.x,0,-Gt.y,Gt.x,0,-Kt.y,Kt.x,0];return!Zt(t,Vt,Ht,Ut,Jt)||(t=[1,0,0,0,1,0,0,0,1],!Zt(t,Vt,Ht,Ut,Jt))?!1:(Yt.crossVectors(Wt,Gt),t=[Yt.x,Yt.y,Yt.z],Zt(t,Vt,Ht,Ut,Jt))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Rt=[new P,new P,new P,new P,new P,new P,new P,new P],zt=new P,Bt=new Lt,Vt=new P,Ht=new P,Ut=new P,Wt=new P,Gt=new P,Kt=new P,qt=new P,Jt=new P,Yt=new P,Xt=new P;function Zt(e,t,n,r,i){for(let a=0,o=e.length-3;a<=o;a+=3){Xt.fromArray(e,a);let o=i.x*Math.abs(Xt.x)+i.y*Math.abs(Xt.y)+i.z*Math.abs(Xt.z),s=t.dot(Xt),c=n.dot(Xt),l=r.dot(Xt);if(Math.max(-Math.max(s,c,l),Math.min(s,c,l))>o)return!1}return!0}var Qt=new Lt,$t=new P,en=new P,tn=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t===void 0?Qt.setFromPoints(e).getCenter(n):n.copy(t);let r=0;for(let t=0,i=e.length;t<i;t++)r=Math.max(r,n.distanceToSquared(e[t]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius*=e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$t.subVectors(e,this.center);let t=$t.lengthSq();if(t>this.radius*this.radius){let e=Math.sqrt(t),n=(e-this.radius)*.5;this.center.addScaledVector($t,n/e),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(en.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($t.copy(e.center).add(en)),this.expandByPoint($t.copy(e.center).sub(en))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},nn=new P,rn=new P,an=new P,on=new P,sn=new P,cn=new P,ln=new P,un=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,nn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=nn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(nn.copy(this.origin).addScaledVector(this.direction,t),nn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){rn.copy(e).add(t).multiplyScalar(.5),an.copy(t).sub(e).normalize(),on.copy(this.origin).sub(rn);let i=e.distanceTo(t)*.5,a=-this.direction.dot(an),o=on.dot(this.direction),s=-on.dot(an),c=on.lengthSq(),l=Math.abs(1-a*a),u,d,f,p;if(l>0){if(u=a*s-o,d=a*o-s,p=i*l,u>=0){if(d>=-p){if(d<=p){let e=1/l;u*=e,d*=e,f=u*(u+a*d+2*o)+d*(a*u+d+2*s)+c}else d=i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d=-i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c}else d<=-p?(u=Math.max(0,-(-a*i+o)),d=u>0?-i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c):d<=p?(u=0,d=Math.min(Math.max(-i,-s),i),f=d*(d+2*s)+c):(u=Math.max(0,-(a*i+o)),d=u>0?i:Math.min(Math.max(-i,-s),i),f=-u*u+d*(d+2*s)+c)}else d=a>0?-i:i,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*s)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(rn).addScaledVector(an,d),f}intersectSphere(e,t){nn.subVectors(e.center,this.origin);let n=nn.dot(this.direction),r=nn.dot(nn)-n*n,i=e.radius*e.radius;if(r>i)return null;let a=Math.sqrt(i-r),o=n-a,s=n+a;return s<0?null:o<0?this.at(s,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,i,a,o,s,c=1/this.direction.x,l=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),l>=0?(i=(e.min.y-d.y)*l,a=(e.max.y-d.y)*l):(i=(e.max.y-d.y)*l,a=(e.min.y-d.y)*l),n>a||i>r||((i>n||isNaN(n))&&(n=i),(a<r||isNaN(r))&&(r=a),u>=0?(o=(e.min.z-d.z)*u,s=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,s=(e.min.z-d.z)*u),n>s||o>r)||((o>n||n!==n)&&(n=o),(s<r||r!==r)&&(r=s),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,nn)!==null}intersectTriangle(e,t,n,r,i){sn.subVectors(t,e),cn.subVectors(n,e),ln.crossVectors(sn,cn);let a=this.direction.dot(ln),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;on.subVectors(this.origin,e);let s=o*this.direction.dot(cn.crossVectors(on,cn));if(s<0)return null;let c=o*this.direction.dot(sn.cross(on));if(c<0||s+c>a)return null;let l=-o*on.dot(ln);return l<0?null:this.at(l/a,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},dn=class e{constructor(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g){e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,r,i,a,o,s,c,l,u,d,f,p,m,h,g)}set(e,t,n,r,i,a,o,s,c,l,u,d,f,p,m,h){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=r,g[1]=i,g[5]=a,g[9]=o,g[13]=s,g[2]=c,g[6]=l,g[10]=u,g[14]=d,g[3]=f,g[7]=p,g[11]=m,g[15]=h,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new e().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/fn.setFromMatrixColumn(e,0).length(),i=1/fn.setFromMatrixColumn(e,1).length(),a=1/fn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*i,t[5]=n[5]*i,t[6]=n[6]*i,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,i=e.z,a=Math.cos(n),o=Math.sin(n),s=Math.cos(r),c=Math.sin(r),l=Math.cos(i),u=Math.sin(i);if(e.order===`XYZ`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=-s*u,t[8]=c,t[1]=n+r*c,t[5]=e-i*c,t[9]=-o*s,t[2]=i-e*c,t[6]=r+n*c,t[10]=a*s}else if(e.order===`YXZ`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e+i*o,t[4]=r*o-n,t[8]=a*c,t[1]=a*u,t[5]=a*l,t[9]=-o,t[2]=n*o-r,t[6]=i+e*o,t[10]=a*s}else if(e.order===`ZXY`){let e=s*l,n=s*u,r=c*l,i=c*u;t[0]=e-i*o,t[4]=-a*u,t[8]=r+n*o,t[1]=n+r*o,t[5]=a*l,t[9]=i-e*o,t[2]=-a*c,t[6]=o,t[10]=a*s}else if(e.order===`ZYX`){let e=a*l,n=a*u,r=o*l,i=o*u;t[0]=s*l,t[4]=r*c-n,t[8]=e*c+i,t[1]=s*u,t[5]=i*c+e,t[9]=n*c-r,t[2]=-c,t[6]=o*s,t[10]=a*s}else if(e.order===`YZX`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=i-e*u,t[8]=r*u+n,t[1]=u,t[5]=a*l,t[9]=-o*l,t[2]=-c*l,t[6]=n*u+r,t[10]=e-i*u}else if(e.order===`XZY`){let e=a*s,n=a*c,r=o*s,i=o*c;t[0]=s*l,t[4]=-u,t[8]=c*l,t[1]=e*u+i,t[5]=a*l,t[9]=n*u-r,t[2]=r*u-n,t[6]=o*l,t[10]=i*u+e}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(mn,e,hn)}lookAt(e,t,n){let r=this.elements;return vn.subVectors(e,t),vn.lengthSq()===0&&(vn.z=1),vn.normalize(),gn.crossVectors(n,vn),gn.lengthSq()===0&&(Math.abs(n.z)===1?vn.x+=1e-4:vn.z+=1e-4,vn.normalize(),gn.crossVectors(n,vn)),gn.normalize(),_n.crossVectors(vn,gn),r[0]=gn.x,r[4]=_n.x,r[8]=vn.x,r[1]=gn.y,r[5]=_n.y,r[9]=vn.y,r[2]=gn.z,r[6]=_n.z,r[10]=vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,i=this.elements,a=n[0],o=n[4],s=n[8],c=n[12],l=n[1],u=n[5],d=n[9],f=n[13],p=n[2],m=n[6],h=n[10],g=n[14],_=n[3],v=n[7],y=n[11],b=n[15],x=r[0],S=r[4],C=r[8],w=r[12],T=r[1],E=r[5],ee=r[9],te=r[13],D=r[2],ne=r[6],O=r[10],re=r[14],ie=r[3],ae=r[7],oe=r[11],se=r[15];return i[0]=a*x+o*T+s*D+c*ie,i[4]=a*S+o*E+s*ne+c*ae,i[8]=a*C+o*ee+s*O+c*oe,i[12]=a*w+o*te+s*re+c*se,i[1]=l*x+u*T+d*D+f*ie,i[5]=l*S+u*E+d*ne+f*ae,i[9]=l*C+u*ee+d*O+f*oe,i[13]=l*w+u*te+d*re+f*se,i[2]=p*x+m*T+h*D+g*ie,i[6]=p*S+m*E+h*ne+g*ae,i[10]=p*C+m*ee+h*O+g*oe,i[14]=p*w+m*te+h*re+g*se,i[3]=_*x+v*T+y*D+b*ie,i[7]=_*S+v*E+y*ne+b*ae,i[11]=_*C+v*ee+y*O+b*oe,i[15]=_*w+v*te+y*re+b*se,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],i=e[12],a=e[1],o=e[5],s=e[9],c=e[13],l=e[2],u=e[6],d=e[10],f=e[14],p=e[3],m=e[7],h=e[11],g=e[15];return p*(+i*s*u-r*c*u-i*o*d+n*c*d+r*o*f-n*s*f)+m*(+t*s*f-t*c*d+i*a*d-r*a*f+r*c*l-i*s*l)+h*(+t*c*u-t*o*f-i*a*u+n*a*f+i*o*l-n*c*l)+g*(-r*o*l-t*s*u+t*o*d+r*a*u-n*a*d+n*s*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],i=e[3],a=e[4],o=e[5],s=e[6],c=e[7],l=e[8],u=e[9],d=e[10],f=e[11],p=e[12],m=e[13],h=e[14],g=e[15],_=u*h*c-m*d*c+m*s*f-o*h*f-u*s*g+o*d*g,v=p*d*c-l*h*c-p*s*f+a*h*f+l*s*g-a*d*g,y=l*m*c-p*u*c+p*o*f-a*m*f-l*o*g+a*u*g,b=p*u*s-l*m*s-p*o*d+a*m*d+l*o*h-a*u*h,x=t*_+n*v+r*y+i*b;if(x===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/x;return e[0]=_*S,e[1]=(m*d*i-u*h*i-m*r*f+n*h*f+u*r*g-n*d*g)*S,e[2]=(o*h*i-m*s*i+m*r*c-n*h*c-o*r*g+n*s*g)*S,e[3]=(u*s*i-o*d*i-u*r*c+n*d*c+o*r*f-n*s*f)*S,e[4]=v*S,e[5]=(l*h*i-p*d*i+p*r*f-t*h*f-l*r*g+t*d*g)*S,e[6]=(p*s*i-a*h*i-p*r*c+t*h*c+a*r*g-t*s*g)*S,e[7]=(a*d*i-l*s*i+l*r*c-t*d*c-a*r*f+t*s*f)*S,e[8]=y*S,e[9]=(p*u*i-l*m*i-p*n*f+t*m*f+l*n*g-t*u*g)*S,e[10]=(a*m*i-p*o*i+p*n*c-t*m*c-a*n*g+t*o*g)*S,e[11]=(l*o*i-a*u*i-l*n*c+t*u*c+a*n*f-t*o*f)*S,e[12]=b*S,e[13]=(l*m*r-p*u*r+p*n*d-t*m*d-l*n*h+t*u*h)*S,e[14]=(p*o*r-a*m*r-p*n*s+t*m*s+a*n*h-t*o*h)*S,e[15]=(a*u*r-l*o*r+l*n*s-t*u*s-a*n*d+t*o*d)*S,this}scale(e){let t=this.elements,n=e.x,r=e.y,i=e.z;return t[0]*=n,t[4]*=r,t[8]*=i,t[1]*=n,t[5]*=r,t[9]*=i,t[2]*=n,t[6]*=r,t[10]*=i,t[3]*=n,t[7]*=r,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),i=1-n,a=e.x,o=e.y,s=e.z,c=i*a,l=i*o;return this.set(c*a+n,c*o-r*s,c*s+r*o,0,c*o+r*s,l*o+n,l*s-r*a,0,c*s-r*o,l*s+r*a,i*s*s+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,i,a){return this.set(1,n,i,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,i=t._x,a=t._y,o=t._z,s=t._w,c=i+i,l=a+a,u=o+o,d=i*c,f=i*l,p=i*u,m=a*l,h=a*u,g=o*u,_=s*c,v=s*l,y=s*u,b=n.x,x=n.y,S=n.z;return r[0]=(1-(m+g))*b,r[1]=(f+y)*b,r[2]=(p-v)*b,r[3]=0,r[4]=(f-y)*x,r[5]=(1-(d+g))*x,r[6]=(h+_)*x,r[7]=0,r[8]=(p+v)*S,r[9]=(h-_)*S,r[10]=(1-(d+m))*S,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,i=fn.set(r[0],r[1],r[2]).length(),a=fn.set(r[4],r[5],r[6]).length(),o=fn.set(r[8],r[9],r[10]).length();this.determinant()<0&&(i=-i),e.x=r[12],e.y=r[13],e.z=r[14],pn.copy(this);let s=1/i,c=1/a,l=1/o;return pn.elements[0]*=s,pn.elements[1]*=s,pn.elements[2]*=s,pn.elements[4]*=c,pn.elements[5]*=c,pn.elements[6]*=c,pn.elements[8]*=l,pn.elements[9]*=l,pn.elements[10]*=l,t.setFromRotationMatrix(pn),n.x=i,n.y=a,n.z=o,this}makePerspective(e,t,n,r,i,a,o=Je){let s=this.elements,c=2*i/(t-e),l=2*i/(n-r),u=(t+e)/(t-e),d=(n+r)/(n-r),f,p;if(o===2e3)f=-(a+i)/(a-i),p=-2*a*i/(a-i);else if(o===2001)f=-a/(a-i),p=-a*i/(a-i);else throw Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return s[0]=c,s[4]=0,s[8]=u,s[12]=0,s[1]=0,s[5]=l,s[9]=d,s[13]=0,s[2]=0,s[6]=0,s[10]=f,s[14]=p,s[3]=0,s[7]=0,s[11]=-1,s[15]=0,this}makeOrthographic(e,t,n,r,i,a,o=Je){let s=this.elements,c=1/(t-e),l=1/(n-r),u=1/(a-i),d=(t+e)*c,f=(n+r)*l,p,m;if(o===2e3)p=(a+i)*u,m=-2*u;else if(o===2001)p=i*u,m=-1*u;else throw Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return s[0]=2*c,s[4]=0,s[8]=0,s[12]=-d,s[1]=0,s[5]=2*l,s[9]=0,s[13]=-f,s[2]=0,s[6]=0,s[10]=m,s[14]=-p,s[3]=0,s[7]=0,s[11]=0,s[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let e=0;e<16;e++)if(t[e]!==n[e])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},fn=new P,pn=new dn,mn=new P(0,0,0),hn=new P(1,1,1),gn=new P,_n=new P,vn=new P,yn=new dn,bn=new Pt,xn=class e{constructor(t=0,n=0,r=0,i=e.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=r,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,i=r[0],a=r[4],o=r[8],s=r[1],c=r[5],l=r[9],u=r[2],d=r[6],f=r[10];switch(t){case`XYZ`:this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-l,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(d,c),this._z=0);break;case`YXZ`:this._x=Math.asin(-et(l,-1,1)),Math.abs(l)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(s,c)):(this._y=Math.atan2(-u,i),this._z=0);break;case`ZXY`:this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(s,i));break;case`ZYX`:this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(s,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case`YZX`:this._z=Math.asin(et(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-l,c),this._y=Math.atan2(-u,i)):(this._x=0,this._y=Math.atan2(o,f));break;case`XZY`:this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-l,f),this._y=0);break;default:console.warn(`THREE.Euler: .setFromRotationMatrix() encountered an unknown order: `+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return yn.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yn,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bn.setFromEuler(this),this.setFromQuaternion(bn,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};xn.DEFAULT_ORDER=`XYZ`;var Sn=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return!!(this.mask&(1<<e|0))}},Cn=0,wn=new P,Tn=new Pt,En=new dn,Dn=new P,On=new P,kn=new P,An=new Pt,jn=new P(1,0,0),Mn=new P(0,1,0),Nn=new P(0,0,1),Pn={type:`added`},Fn={type:`removed`},In={type:`childadded`,child:null},Ln={type:`childremoved`,child:null},Rn=class e extends Ye{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cn++}),this.uuid=$e(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=e.DEFAULT_UP.clone();let t=new P,n=new xn,r=new Pt,i=new P(1,1,1);function a(){r.setFromEuler(n,!1)}function o(){n.setFromQuaternion(r,void 0,!1)}n._onChange(a),r._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new dn},normalMatrix:{value:new N}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Sn,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Tn.setFromAxisAngle(e,t),this.quaternion.multiply(Tn),this}rotateOnWorldAxis(e,t){return Tn.setFromAxisAngle(e,t),this.quaternion.premultiply(Tn),this}rotateX(e){return this.rotateOnAxis(jn,e)}rotateY(e){return this.rotateOnAxis(Mn,e)}rotateZ(e){return this.rotateOnAxis(Nn,e)}translateOnAxis(e,t){return wn.copy(e).applyQuaternion(this.quaternion),this.position.add(wn.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jn,e)}translateY(e){return this.translateOnAxis(Mn,e)}translateZ(e){return this.translateOnAxis(Nn,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Dn.copy(e):Dn.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),On.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(On,Dn,this.up):En.lookAt(Dn,On,this.up),this.quaternion.setFromRotationMatrix(En),r&&(En.extractRotation(r.matrixWorld),Tn.setFromRotationMatrix(En),this.quaternion.premultiply(Tn.invert()))}add(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return e===this?(console.error(`THREE.Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Pn),In.child=e,this.dispatchEvent(In),In.child=null):console.error(`THREE.Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.remove(arguments[e]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fn),Ln.child=e,this.dispatchEvent(Ln),Ln.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Pn),In.child=e,this.dispatchEvent(In),In.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let r=this.children[n].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let i=0,a=r.length;i<a;i++)r[i].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,e,kn),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(On,An,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let e=this.children;for(let t=0,n=e.length;t<n;t++)e[t].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e==`string`,n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:`Object`,generator:`Object3D.toJSON`});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==``&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type=`InstancedMesh`,r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type=`BatchedMesh`,r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(e=>({boxInitialized:e.boxInitialized,boxMin:e.box.min.toArray(),boxMax:e.box.max.toArray(),sphereInitialized:e.sphereInitialized,sphereRadius:e.sphere.radius,sphereCenter:e.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function i(t,n){return t[n.uuid]===void 0&&(t[n.uuid]=n.toJSON(e)),n.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=i(e.geometries,this.geometry);let t=this.geometry.parameters;if(t!==void 0&&t.shapes!==void 0){let n=t.shapes;if(Array.isArray(n))for(let t=0,r=n.length;t<r;t++){let r=n[t];i(e.shapes,r)}else i(e.shapes,n)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0){if(Array.isArray(this.material)){let t=[];for(let n=0,r=this.material.length;n<r;n++)t.push(i(e.materials,this.material[n]));r.material=t}else r.material=i(e.materials,this.material)}if(this.children.length>0){r.children=[];for(let t=0;t<this.children.length;t++)r.children.push(this.children[t].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let t=0;t<this.animations.length;t++){let n=this.animations[t];r.animations.push(i(e.animations,n))}}if(t){let t=a(e.geometries),r=a(e.materials),i=a(e.textures),o=a(e.images),s=a(e.shapes),c=a(e.skeletons),l=a(e.animations),u=a(e.nodes);t.length>0&&(n.geometries=t),r.length>0&&(n.materials=r),i.length>0&&(n.textures=i),o.length>0&&(n.images=o),s.length>0&&(n.shapes=s),c.length>0&&(n.skeletons=c),l.length>0&&(n.animations=l),u.length>0&&(n.nodes=u)}return n.object=r,n;function a(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let t=0;t<e.children.length;t++){let n=e.children[t];this.add(n.clone())}return this}};Rn.DEFAULT_UP=new P(0,1,0),Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0,Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zn=new P,Bn=new P,Vn=new P,Hn=new P,Un=new P,Wn=new P,Gn=new P,Kn=new P,qn=new P,Jn=new P,Yn=new kt,Xn=new kt,Zn=new kt,Qn=class e{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zn.subVectors(e,t),r.cross(zn);let i=r.lengthSq();return i>0?r.multiplyScalar(1/Math.sqrt(i)):r.set(0,0,0)}static getBarycoord(e,t,n,r,i){zn.subVectors(r,t),Bn.subVectors(n,t),Vn.subVectors(e,t);let a=zn.dot(zn),o=zn.dot(Bn),s=zn.dot(Vn),c=Bn.dot(Bn),l=Bn.dot(Vn),u=a*c-o*o;if(u===0)return i.set(0,0,0),null;let d=1/u,f=(c*s-o*l)*d,p=(a*l-o*s)*d;return i.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Hn)!==null&&Hn.x>=0&&Hn.y>=0&&Hn.x+Hn.y<=1}static getInterpolation(e,t,n,r,i,a,o,s){return this.getBarycoord(e,t,n,r,Hn)===null?(s.x=0,s.y=0,`z`in s&&(s.z=0),`w`in s&&(s.w=0),null):(s.setScalar(0),s.addScaledVector(i,Hn.x),s.addScaledVector(a,Hn.y),s.addScaledVector(o,Hn.z),s)}static getInterpolatedAttribute(e,t,n,r,i,a){return Yn.setScalar(0),Xn.setScalar(0),Zn.setScalar(0),Yn.fromBufferAttribute(e,t),Xn.fromBufferAttribute(e,n),Zn.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yn,i.x),a.addScaledVector(Xn,i.y),a.addScaledVector(Zn,i.z),a}static isFrontFacing(e,t,n,r){return zn.subVectors(n,t),Bn.subVectors(e,t),zn.cross(Bn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),zn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return e.getNormal(this.a,this.b,this.c,t)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return e.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,r,i,a){return e.getInterpolation(t,this.a,this.b,this.c,n,r,i,a)}containsPoint(t){return e.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return e.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,i=this.c,a,o;Un.subVectors(r,n),Wn.subVectors(i,n),Kn.subVectors(e,n);let s=Un.dot(Kn),c=Wn.dot(Kn);if(s<=0&&c<=0)return t.copy(n);qn.subVectors(e,r);let l=Un.dot(qn),u=Wn.dot(qn);if(l>=0&&u<=l)return t.copy(r);let d=s*u-l*c;if(d<=0&&s>=0&&l<=0)return a=s/(s-l),t.copy(n).addScaledVector(Un,a);Jn.subVectors(e,i);let f=Un.dot(Jn),p=Wn.dot(Jn);if(p>=0&&f<=p)return t.copy(i);let m=f*c-s*p;if(m<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Wn,o);let h=l*p-f*u;if(h<=0&&u-l>=0&&f-p>=0)return Gn.subVectors(i,r),o=(u-l)/(u-l+(f-p)),t.copy(r).addScaledVector(Gn,o);let g=1/(h+m+d);return a=m*g,o=d*g,t.copy(n).addScaledVector(Un,a).addScaledVector(Wn,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$n={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},tr={h:0,s:0,l:0};function nr(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*6*(2/3-n):e}var F=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let t=e;t&&t.isColor?this.copy(t):typeof t==`number`?this.setHex(t):typeof t==`string`&&this.setStyle(t)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ve){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,mt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=mt.workingColorSpace){return this.r=e,this.g=t,this.b=n,mt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=mt.workingColorSpace){if(e=tt(e,1),t=et(t,0,1),n=et(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,i=2*n-r;this.r=nr(i,r,e+1/3),this.g=nr(i,r,e),this.b=nr(i,r,e-1/3)}return mt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ve){function n(t){t!==void 0&&parseFloat(t)<1&&console.warn(`THREE.Color: Alpha component of `+e+` will be ignored.`)}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=r[1],o=r[2];switch(a){case`rgb`:case`rgba`:if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case`hsl`:case`hsla`:if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:console.warn(`THREE.Color: Unknown color model `+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let n=r[1],i=n.length;if(i===3)return this.setRGB(parseInt(n.charAt(0),16)/15,parseInt(n.charAt(1),16)/15,parseInt(n.charAt(2),16)/15,t);if(i===6)return this.setHex(parseInt(n,16),t);console.warn(`THREE.Color: Invalid hex color `+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ve){let n=$n[e.toLowerCase()];return n===void 0?console.warn(`THREE.Color: Unknown color `+e):this.setHex(n,t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ht(e.r),this.g=ht(e.g),this.b=ht(e.b),this}copyLinearToSRGB(e){return this.r=gt(e.r),this.g=gt(e.g),this.b=gt(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ve){return mt.fromWorkingColorSpace(rr.copy(this),e),Math.round(et(rr.r*255,0,255))*65536+Math.round(et(rr.g*255,0,255))*256+Math.round(et(rr.b*255,0,255))}getHexString(e=Ve){return(`000000`+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=mt.workingColorSpace){mt.fromWorkingColorSpace(rr.copy(this),t);let n=rr.r,r=rr.g,i=rr.b,a=Math.max(n,r,i),o=Math.min(n,r,i),s,c,l=(o+a)/2;if(o===a)s=0,c=0;else{let e=a-o;switch(c=l<=.5?e/(a+o):e/(2-a-o),a){case n:s=(r-i)/e+(r<i?6:0);break;case r:s=(i-n)/e+2;break;case i:s=(n-r)/e+4}s/=6}return e.h=s,e.s=c,e.l=l,e}getRGB(e,t=mt.workingColorSpace){return mt.fromWorkingColorSpace(rr.copy(this),t),e.r=rr.r,e.g=rr.g,e.b=rr.b,e}getStyle(e=Ve){mt.fromWorkingColorSpace(rr.copy(this),e);let t=rr.r,n=rr.g,r=rr.b;return e===`srgb`?`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`:`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`}offsetHSL(e,t,n){return this.getHSL(er),this.setHSL(er.h+e,er.s+t,er.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(er),e.getHSL(tr);let n=nt(er.h,tr.h,t),r=nt(er.s,tr.s,t),i=nt(er.l,tr.l,t);return this.setHSL(n,r,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,i=e.elements;return this.r=i[0]*t+i[3]*n+i[6]*r,this.g=i[1]*t+i[4]*n+i[7]*r,this.b=i[2]*t+i[5]*n+i[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},rr=new F;F.NAMES=$n;var ir=0,ar=class extends Ye{static get type(){return`Material`}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ir++}),this.uuid=$e(),this.name=``,this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new F(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ge,this.stencilZFail=Ge,this.stencilZPass=Ge,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e==`string`;t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,this.name!==``&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(n.blending=this.blending),this.side!==0&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==204&&(n.blendSrc=this.blendSrc),this.blendDst!==205&&(n.blendDst=this.blendDst),this.blendEquation!==100&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(n.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==`round`&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==`round`&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(e){let t=[];for(let n in e){let r=e[n];delete r.metadata,t.push(r)}return t}if(t){let t=r(e.textures),i=r(e.images);t.length>0&&(n.textures=t),i.length>0&&(n.images=i)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let e=t.length;n=Array(e);for(let r=0;r!==e;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn(`Material: onBuild() has been removed.`)}},or=class extends ar{static get type(){return`MeshBasicMaterial`}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new F(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},sr=new P,cr=new M,lr=class{constructor(e,t,n=!1){if(Array.isArray(e))throw TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,this.name=``,this.array=e,this.itemSize=t,this.count=e===void 0?0:e.length/t,this.normalized=n,this.usage=Ke,this.updateRanges=[],this.gpuType=h,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,i=this.itemSize;r<i;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cr.fromBufferAttribute(this,t),cr.applyMatrix3(e),this.setXY(t,cr.x,cr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix3(e),this.setXYZ(t,sr.x,sr.y,sr.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.applyMatrix4(e),this.setXYZ(t,sr.x,sr.y,sr.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.applyNormalMatrix(e),this.setXYZ(t,sr.x,sr.y,sr.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)sr.fromBufferAttribute(this,t),sr.transformDirection(e),this.setXYZ(t,sr.x,sr.y,sr.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=rt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=rt(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=rt(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=rt(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=rt(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==``&&(e.name=this.name),this.usage!==35044&&(e.usage=this.usage),e}},ur=class extends lr{constructor(e,t,n){super(new Uint16Array(e),t,n)}},dr=class extends lr{constructor(e,t,n){super(new Uint32Array(e),t,n)}},fr=class extends lr{constructor(e,t,n){super(new Float32Array(e),t,n)}},pr=0,mr=new dn,hr=new Rn,gr=new P,_r=new Lt,vr=new Lt,yr=new P,br=class e extends Ye{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pr++}),this.uuid=$e(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return this.index=Array.isArray(e)?new(ot(e)?dr:ur)(e,1):e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let t=new N().getNormalMatrix(e);n.applyNormalMatrix(t),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mr.makeRotationFromQuaternion(e),this.applyMatrix4(mr),this}rotateX(e){return mr.makeRotationX(e),this.applyMatrix4(mr),this}rotateY(e){return mr.makeRotationY(e),this.applyMatrix4(mr),this}rotateZ(e){return mr.makeRotationZ(e),this.applyMatrix4(mr),this}translate(e,t,n){return mr.makeTranslation(e,t,n),this.applyMatrix4(mr),this}scale(e,t,n){return mr.makeScale(e,t,n),this.applyMatrix4(mr),this}lookAt(e){return hr.lookAt(e),hr.updateMatrix(),this.applyMatrix4(hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){let t=this.getAttribute(`position`);if(t===void 0){let t=[];for(let n=0,r=e.length;n<r;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}this.setAttribute(`position`,new fr(t,3))}else{for(let n=0,r=t.count;n<r;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn(`THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Lt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];_r.setFromBufferAttribute(n),this.morphTargetsRelative?(yr.addVectors(this.boundingBox.min,_r.min),this.boundingBox.expandByPoint(yr),yr.addVectors(this.boundingBox.max,_r.max),this.boundingBox.expandByPoint(yr)):(this.boundingBox.expandByPoint(_r.min),this.boundingBox.expandByPoint(_r.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error(`THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error(`THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(_r.setFromBufferAttribute(e),t)for(let e=0,n=t.length;e<n;e++){let n=t[e];vr.setFromBufferAttribute(n),this.morphTargetsRelative?(yr.addVectors(_r.min,vr.min),_r.expandByPoint(yr),yr.addVectors(_r.max,vr.max),_r.expandByPoint(yr)):(_r.expandByPoint(vr.min),_r.expandByPoint(vr.max))}_r.getCenter(n);let r=0;for(let t=0,i=e.count;t<i;t++)yr.fromBufferAttribute(e,t),r=Math.max(r,n.distanceToSquared(yr));if(t)for(let i=0,a=t.length;i<a;i++){let a=t[i],o=this.morphTargetsRelative;for(let t=0,i=a.count;t<i;t++)yr.fromBufferAttribute(a,t),o&&(gr.fromBufferAttribute(e,t),yr.add(gr)),r=Math.max(r,n.distanceToSquared(yr))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error(`THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error(`THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=t.position,r=t.normal,i=t.uv;this.hasAttribute(`tangent`)===!1&&this.setAttribute(`tangent`,new lr(new Float32Array(4*n.count),4));let a=this.getAttribute(`tangent`),o=[],s=[];for(let e=0;e<n.count;e++)o[e]=new P,s[e]=new P;let c=new P,l=new P,u=new P,d=new M,f=new M,p=new M,m=new P,h=new P;function g(e,t,r){c.fromBufferAttribute(n,e),l.fromBufferAttribute(n,t),u.fromBufferAttribute(n,r),d.fromBufferAttribute(i,e),f.fromBufferAttribute(i,t),p.fromBufferAttribute(i,r),l.sub(c),u.sub(c),f.sub(d),p.sub(d);let a=1/(f.x*p.y-p.x*f.y);isFinite(a)&&(m.copy(l).multiplyScalar(p.y).addScaledVector(u,-f.y).multiplyScalar(a),h.copy(u).multiplyScalar(f.x).addScaledVector(l,-p.x).multiplyScalar(a),o[e].add(m),o[t].add(m),o[r].add(m),s[e].add(h),s[t].add(h),s[r].add(h))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)g(e.getX(t+0),e.getX(t+1),e.getX(t+2))}let v=new P,y=new P,b=new P,x=new P;function S(e){b.fromBufferAttribute(r,e),x.copy(b);let t=o[e];v.copy(t),v.sub(b.multiplyScalar(b.dot(t))).normalize(),y.crossVectors(x,t);let n=y.dot(s[e])<0?-1:1;a.setXYZW(e,v.x,v.y,v.z,n)}for(let t=0,n=_.length;t<n;++t){let n=_[t],r=n.start,i=n.count;for(let t=r,n=r+i;t<n;t+=3)S(e.getX(t+0)),S(e.getX(t+1)),S(e.getX(t+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute(`position`);if(t!==void 0){let n=this.getAttribute(`normal`);if(n===void 0)n=new lr(new Float32Array(t.count*3),3),this.setAttribute(`normal`,n);else for(let e=0,t=n.count;e<t;e++)n.setXYZ(e,0,0,0);let r=new P,i=new P,a=new P,o=new P,s=new P,c=new P,l=new P,u=new P;if(e)for(let d=0,f=e.count;d<f;d+=3){let f=e.getX(d+0),p=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,f),i.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),o.fromBufferAttribute(n,f),s.fromBufferAttribute(n,p),c.fromBufferAttribute(n,m),o.add(l),s.add(l),c.add(l),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(p,s.x,s.y,s.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let e=0,o=t.count;e<o;e+=3)r.fromBufferAttribute(t,e+0),i.fromBufferAttribute(t,e+1),a.fromBufferAttribute(t,e+2),l.subVectors(a,i),u.subVectors(r,i),l.cross(u),n.setXYZ(e+0,l.x,l.y,l.z),n.setXYZ(e+1,l.x,l.y,l.z),n.setXYZ(e+2,l.x,l.y,l.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)yr.fromBufferAttribute(e,t),yr.normalize(),e.setXYZ(t,yr.x,yr.y,yr.z)}toNonIndexed(){function t(e,t){let n=e.array,r=e.itemSize,i=e.normalized,a=new n.constructor(t.length*r),o=0,s=0;for(let i=0,c=t.length;i<c;i++){o=e.isInterleavedBufferAttribute?t[i]*e.data.stride+e.offset:t[i]*r;for(let e=0;e<r;e++)a[s++]=n[o++]}return new lr(a,r,i)}if(this.index===null)return console.warn(`THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let n=new e,r=this.index.array,i=this.attributes;for(let e in i){let a=i[e],o=t(a,r);n.setAttribute(e,o)}let a=this.morphAttributes;for(let e in a){let i=[],o=a[e];for(let e=0,n=o.length;e<n;e++){let n=o[e],a=t(n,r);i.push(a)}n.morphAttributes[e]=i}n.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let e=0,t=o.length;e<t;e++){let t=o[e];n.addGroup(t.start,t.count,t.materialIndex)}return n}toJSON(){let e={metadata:{version:4.6,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(e.uuid=this.uuid,e.type=this.type,this.name!==``&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let t=this.parameters;for(let n in t)t[n]!==void 0&&(e[n]=t[n]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let t in n){let r=n[t];e.data.attributes[t]=r.toJSON(e.data)}let r={},i=!1;for(let t in this.morphAttributes){let n=this.morphAttributes[t],a=[];for(let t=0,r=n.length;t<r;t++){let r=n[t];a.push(r.toJSON(e.data))}a.length>0&&(r[t]=a,i=!0)}i&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let e in r){let n=r[e];this.setAttribute(e,n.clone(t))}let i=e.morphAttributes;for(let e in i){let n=[],r=i[e];for(let e=0,i=r.length;e<i;e++)n.push(r[e].clone(t));this.morphAttributes[e]=n}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let e=0,t=a.length;e<t;e++){let t=a[e];this.addGroup(t.start,t.count,t.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let s=e.boundingSphere;return s!==null&&(this.boundingSphere=s.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:`dispose`})}},xr=new dn,Sr=new un,Cr=new tn,wr=new P,Tr=new P,Er=new P,Dr=new P,Or=new P,kr=new P,Ar=new P,jr=new P,I=class extends Rn{constructor(e=new br,t=new or){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,i=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let o=this.morphTargetInfluences;if(i&&o){kr.set(0,0,0);for(let n=0,r=i.length;n<r;n++){let r=o[n],s=i[n];r!==0&&(Or.fromBufferAttribute(s,e),a?kr.addScaledVector(Or,r):kr.addScaledVector(Or.sub(t),r))}t.add(kr)}return t}raycast(e,t){let n=this.geometry,r=this.material,i=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere),Cr.applyMatrix4(i),Sr.copy(e.ray).recast(e.near),!(Cr.containsPoint(Sr.origin)===!1&&(Sr.intersectSphere(Cr,wr)===null||Sr.origin.distanceToSquared(wr)>(e.far-e.near)**2))&&(xr.copy(i).invert(),Sr.copy(e.ray).applyMatrix4(xr),(n.boundingBox===null||Sr.intersectsBox(n.boundingBox)!==!1)&&this._computeIntersections(e,t,Sr)))}_computeIntersections(e,t,n){let r,i=this.geometry,a=this.material,o=i.index,s=i.attributes.position,c=i.attributes.uv,l=i.attributes.uv1,u=i.attributes.normal,d=i.groups,f=i.drawRange;if(o!==null){if(Array.isArray(a))for(let i=0,s=d.length;i<s;i++){let s=d[i],p=a[s.materialIndex],m=Math.max(s.start,f.start),h=Math.min(o.count,Math.min(s.start+s.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=o.getX(i),d=o.getX(i+1),f=o.getX(i+2);r=Nr(this,p,e,n,c,l,u,a,d,f),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=s.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),s=Math.min(o.count,f.start+f.count);for(let d=i,f=s;d<f;d+=3){let i=o.getX(d),s=o.getX(d+1),f=o.getX(d+2);r=Nr(this,a,e,n,c,l,u,i,s,f),r&&(r.faceIndex=Math.floor(d/3),t.push(r))}}}else if(s!==void 0){if(Array.isArray(a))for(let i=0,o=d.length;i<o;i++){let o=d[i],p=a[o.materialIndex],m=Math.max(o.start,f.start),h=Math.min(s.count,Math.min(o.start+o.count,f.start+f.count));for(let i=m,a=h;i<a;i+=3){let a=i,s=i+1,d=i+2;r=Nr(this,p,e,n,c,l,u,a,s,d),r&&(r.faceIndex=Math.floor(i/3),r.face.materialIndex=o.materialIndex,t.push(r))}}else{let i=Math.max(0,f.start),o=Math.min(s.count,f.start+f.count);for(let s=i,d=o;s<d;s+=3){let i=s,o=s+1,d=s+2;r=Nr(this,a,e,n,c,l,u,i,o,d),r&&(r.faceIndex=Math.floor(s/3),t.push(r))}}}}};function Mr(e,t,n,r,i,a,o,s){let c;if(c=t.side===1?r.intersectTriangle(o,a,i,!0,s):r.intersectTriangle(i,a,o,t.side===0,s),c===null)return null;jr.copy(s),jr.applyMatrix4(e.matrixWorld);let l=n.ray.origin.distanceTo(jr);return l<n.near||l>n.far?null:{distance:l,point:jr.clone(),object:e}}function Nr(e,t,n,r,i,a,o,s,c,l){e.getVertexPosition(s,Tr),e.getVertexPosition(c,Er),e.getVertexPosition(l,Dr);let u=Mr(e,t,n,r,Tr,Er,Dr,Ar);if(u){let e=new P;Qn.getBarycoord(Ar,Tr,Er,Dr,e),i&&(u.uv=Qn.getInterpolatedAttribute(i,s,c,l,e,new M)),a&&(u.uv1=Qn.getInterpolatedAttribute(a,s,c,l,e,new M)),o&&(u.normal=Qn.getInterpolatedAttribute(o,s,c,l,e,new P),u.normal.dot(r.direction)>0&&u.normal.multiplyScalar(-1));let t={a:s,b:c,c:l,normal:new P,materialIndex:0};Qn.getNormal(Tr,Er,Dr,t.normal),u.face=t,u.barycoord=e}return u}var Pr=class e extends br{constructor(e=1,t=1,n=1,r=1,i=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:i,depthSegments:a};let o=this;r=Math.floor(r),i=Math.floor(i),a=Math.floor(a);let s=[],c=[],l=[],u=[],d=0,f=0;p(`z`,`y`,`x`,-1,-1,n,t,e,a,i,0),p(`z`,`y`,`x`,1,-1,n,t,-e,a,i,1),p(`x`,`z`,`y`,1,1,e,n,t,r,a,2),p(`x`,`z`,`y`,1,-1,e,n,-t,r,a,3),p(`x`,`y`,`z`,1,-1,e,t,n,r,i,4),p(`x`,`y`,`z`,-1,-1,e,t,-n,r,i,5),this.setIndex(s),this.setAttribute(`position`,new fr(c,3)),this.setAttribute(`normal`,new fr(l,3)),this.setAttribute(`uv`,new fr(u,2));function p(e,t,n,r,i,a,p,m,h,g,_){let v=a/h,y=p/g,b=a/2,x=p/2,S=m/2,C=h+1,w=g+1,T=0,E=0,ee=new P;for(let a=0;a<w;a++){let o=a*y-x;for(let s=0;s<C;s++)ee[e]=(s*v-b)*r,ee[t]=o*i,ee[n]=S,c.push(ee.x,ee.y,ee.z),ee[e]=0,ee[t]=0,ee[n]=m>0?1:-1,l.push(ee.x,ee.y,ee.z),u.push(s/h),u.push(1-a/g),T+=1}for(let e=0;e<g;e++)for(let t=0;t<h;t++){let n=d+t+C*e,r=d+t+C*(e+1),i=d+(t+1)+C*(e+1),a=d+(t+1)+C*e;s.push(n,r,a),s.push(r,i,a),E+=6}o.addGroup(f,E,_),f+=E,d+=T}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Fr(e){let t={};for(let n in e){t[n]={};for(let r in e[n]){let i=e[n][r];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[n][r]=null):t[n][r]=i.clone():Array.isArray(i)?t[n][r]=i.slice():t[n][r]=i}}return t}function Ir(e){let t={};for(let n=0;n<e.length;n++){let r=Fr(e[n]);for(let e in r)t[e]=r[e]}return t}function Lr(e){let t=[];for(let n=0;n<e.length;n++)t.push(e[n].clone());return t}function Rr(e){let t=e.getRenderTarget();return t===null?e.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:mt.workingColorSpace}var zr={clone:Fr,merge:Ir},Br=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vr=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Hr=class extends ar{static get type(){return`ShaderMaterial`}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Br,this.fragmentShader=Vr,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=Lr(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:`t`,value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:`c`,value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:`v2`,value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:`v3`,value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:`v4`,value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:`m3`,value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:`m4`,value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let e in this.extensions)this.extensions[e]===!0&&(n[e]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ur=class extends Rn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=Je}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Wr=new P,Gr=new M,Kr=new M,qr=class extends Ur{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qe*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ze*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qe*2*Math.atan(Math.tan(Ze*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z),Wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Wr.x,Wr.y).multiplyScalar(-e/Wr.z)}getViewSize(e,t){return this.getViewBounds(e,Gr,Kr),t.subVectors(Kr,Gr)}setViewOffset(e,t,n,r,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ze*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,i=-.5*r,a=this.view;if(this.view!==null&&this.view.enabled){let e=a.fullWidth,o=a.fullHeight;i+=a.offsetX*r/e,t-=a.offsetY*n/o,r*=a.width/e,n*=a.height/o}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Jr=-90,Yr=1,Xr=class extends Rn{constructor(e,t,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new qr(Jr,Yr,e,t);r.layers=this.layers,this.add(r);let i=new qr(Jr,Yr,e,t);i.layers=this.layers,this.add(i);let a=new qr(Jr,Yr,e,t);a.layers=this.layers,this.add(a);let o=new qr(Jr,Yr,e,t);o.layers=this.layers,this.add(o);let s=new qr(Jr,Yr,e,t);s.layers=this.layers,this.add(s);let c=new qr(Jr,Yr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,i,a,o,s]=t;for(let e of t)this.remove(e);if(e===2e3)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),s.up.set(0,1,0),s.lookAt(0,0,-1);else if(e===2001)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),s.up.set(0,-1,0),s.lookAt(0,0,-1);else throw Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+e);for(let e of t)this.add(e),e.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,s,c,l]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,i),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,s),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,r),e.render(t,l),e.setRenderTarget(u,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Zr=class extends Ot{constructor(e,t,n,r,i,a,o,s,c,l){e=e===void 0?[]:e,t=t===void 0?301:t,super(e,t,n,r,i,a,o,s,c,l),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Qr=class extends jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Zr(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0&&t.generateMipmaps,this.texture.minFilter=t.minFilter===void 0?o:t.minFilter}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Pr(5,5,5),i=new Hr({name:`CubemapFromEquirect`,uniforms:Fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:1,blending:0});i.uniforms.tEquirect.value=t;let a=new I(r,i),s=t.minFilter;return t.minFilter===1008&&(t.minFilter=o),new Xr(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){let i=e.getRenderTarget();for(let i=0;i<6;i++)e.setRenderTarget(this,i),e.clear(t,n,r);e.setRenderTarget(i)}},$r=new P,ei=new P,ti=new N,ni=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=$r.subVectors(n,t).cross(ei.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta($r),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let i=-(e.start.dot(this.normal)+this.constant)/r;return i<0||i>1?null:t.copy(e.start).addScaledVector(n,i)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ti.getNormalMatrix(e),r=this.coplanarPoint($r).applyMatrix4(e),i=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},ri=new tn,ii=new P,ai=class{constructor(e=new ni,t=new ni,n=new ni,r=new ni,i=new ni,a=new ni){this.planes=[e,t,n,r,i,a]}set(e,t,n,r,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Je){let n=this.planes,r=e.elements,i=r[0],a=r[1],o=r[2],s=r[3],c=r[4],l=r[5],u=r[6],d=r[7],f=r[8],p=r[9],m=r[10],h=r[11],g=r[12],_=r[13],v=r[14],y=r[15];if(n[0].setComponents(s-i,d-c,h-f,y-g).normalize(),n[1].setComponents(s+i,d+c,h+f,y+g).normalize(),n[2].setComponents(s+a,d+l,h+p,y+_).normalize(),n[3].setComponents(s-a,d-l,h-p,y-_).normalize(),n[4].setComponents(s-o,d-u,h-m,y-v).normalize(),t===2e3)n[5].setComponents(s+o,d+u,h+m,y+v).normalize();else if(t===2001)n[5].setComponents(o,u,m,v).normalize();else throw Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(e){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let e=0;e<6;e++)if(t[e].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(ii.x=r.normal.x>0?e.max.x:e.min.x,ii.y=r.normal.y>0?e.max.y:e.min.y,ii.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ii)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function oi(){let e=null,t=!1,n=null,r=null;function i(t,a){n(t,a),r=e.requestAnimationFrame(i)}return{start:function(){t!==!0&&n!==null&&(r=e.requestAnimationFrame(i),t=!0)},stop:function(){e.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(e){n=e},setContext:function(t){e=t}}}function si(e){let t=new WeakMap;function n(t,n){let r=t.array,i=t.usage,a=r.byteLength,o=e.createBuffer();e.bindBuffer(n,o),e.bufferData(n,r,i),t.onUploadCallback();let s;if(r instanceof Float32Array)s=e.FLOAT;else if(r instanceof Uint16Array)s=t.isFloat16BufferAttribute?e.HALF_FLOAT:e.UNSIGNED_SHORT;else if(r instanceof Int16Array)s=e.SHORT;else if(r instanceof Uint32Array)s=e.UNSIGNED_INT;else if(r instanceof Int32Array)s=e.INT;else if(r instanceof Int8Array)s=e.BYTE;else if(r instanceof Uint8Array)s=e.UNSIGNED_BYTE;else if(r instanceof Uint8ClampedArray)s=e.UNSIGNED_BYTE;else throw Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+r);return{buffer:o,type:s,bytesPerElement:r.BYTES_PER_ELEMENT,version:t.version,size:a}}function r(t,n,r){let i=n.array,a=n.updateRanges;if(e.bindBuffer(r,t),a.length===0)e.bufferSubData(r,0,i);else{a.sort((e,t)=>e.start-t.start);let t=0;for(let e=1;e<a.length;e++){let n=a[t],r=a[e];r.start<=n.start+n.count+1?n.count=Math.max(n.count,r.start+r.count-n.start):(++t,a[t]=r)}a.length=t+1;for(let t=0,n=a.length;t<n;t++){let n=a[t];e.bufferSubData(r,n.start*i.BYTES_PER_ELEMENT,i,n.start,n.count)}n.clearUpdateRanges()}n.onUploadCallback()}function i(e){return e.isInterleavedBufferAttribute&&(e=e.data),t.get(e)}function a(n){n.isInterleavedBufferAttribute&&(n=n.data);let r=t.get(n);r&&(e.deleteBuffer(r.buffer),t.delete(n))}function o(e,i){if(e.isInterleavedBufferAttribute&&(e=e.data),e.isGLBufferAttribute){let n=t.get(e);(!n||n.version<e.version)&&t.set(e,{buffer:e.buffer,type:e.type,bytesPerElement:e.elementSize,version:e.version});return}let a=t.get(e);if(a===void 0)t.set(e,n(e,i));else if(a.version<e.version){if(a.size!==e.array.byteLength)throw Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);r(a.buffer,e,i),a.version=e.version}}return{get:i,remove:a,update:o}}var ci=class e extends br{constructor(e=1,t=1,n=1,r=1){super(),this.type=`PlaneGeometry`,this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let i=e/2,a=t/2,o=Math.floor(n),s=Math.floor(r),c=o+1,l=s+1,u=e/o,d=t/s,f=[],p=[],m=[],h=[];for(let e=0;e<l;e++){let t=e*d-a;for(let n=0;n<c;n++){let r=n*u-i;p.push(r,-t,0),m.push(0,0,1),h.push(n/o),h.push(1-e/s)}}for(let e=0;e<s;e++)for(let t=0;t<o;t++){let n=t+c*e,r=t+c*(e+1),i=t+1+c*(e+1),a=t+1+c*e;f.push(n,r,a),f.push(r,i,a)}this.setIndex(f),this.setAttribute(`position`,new fr(p,3)),this.setAttribute(`normal`,new fr(m,3)),this.setAttribute(`uv`,new fr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.width,t.height,t.widthSegments,t.heightSegments)}},L={alphahash_fragment:`#ifdef USE_ALPHAHASH
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
}`},R={common:{diffuse:{value:new F(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new N},alphaMap:{value:null},alphaMapTransform:{value:new N},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new N}},envmap:{envMap:{value:null},envMapRotation:{value:new N},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new N}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new N}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new N},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new N},normalScale:{value:new M(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new N},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new N}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new N}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new N}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new F(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new F(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new N},alphaTest:{value:0},uvTransform:{value:new N}},sprite:{diffuse:{value:new F(16777215)},opacity:{value:1},center:{value:new M(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new N},alphaMap:{value:null},alphaMapTransform:{value:new N},alphaTest:{value:0}}},li={basic:{uniforms:Ir([R.common,R.specularmap,R.envmap,R.aomap,R.lightmap,R.fog]),vertexShader:L.meshbasic_vert,fragmentShader:L.meshbasic_frag},lambert:{uniforms:Ir([R.common,R.specularmap,R.envmap,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.fog,R.lights,{emissive:{value:new F(0)}}]),vertexShader:L.meshlambert_vert,fragmentShader:L.meshlambert_frag},phong:{uniforms:Ir([R.common,R.specularmap,R.envmap,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.fog,R.lights,{emissive:{value:new F(0)},specular:{value:new F(1118481)},shininess:{value:30}}]),vertexShader:L.meshphong_vert,fragmentShader:L.meshphong_frag},standard:{uniforms:Ir([R.common,R.envmap,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.roughnessmap,R.metalnessmap,R.fog,R.lights,{emissive:{value:new F(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:L.meshphysical_vert,fragmentShader:L.meshphysical_frag},toon:{uniforms:Ir([R.common,R.aomap,R.lightmap,R.emissivemap,R.bumpmap,R.normalmap,R.displacementmap,R.gradientmap,R.fog,R.lights,{emissive:{value:new F(0)}}]),vertexShader:L.meshtoon_vert,fragmentShader:L.meshtoon_frag},matcap:{uniforms:Ir([R.common,R.bumpmap,R.normalmap,R.displacementmap,R.fog,{matcap:{value:null}}]),vertexShader:L.meshmatcap_vert,fragmentShader:L.meshmatcap_frag},points:{uniforms:Ir([R.points,R.fog]),vertexShader:L.points_vert,fragmentShader:L.points_frag},dashed:{uniforms:Ir([R.common,R.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:L.linedashed_vert,fragmentShader:L.linedashed_frag},depth:{uniforms:Ir([R.common,R.displacementmap]),vertexShader:L.depth_vert,fragmentShader:L.depth_frag},normal:{uniforms:Ir([R.common,R.bumpmap,R.normalmap,R.displacementmap,{opacity:{value:1}}]),vertexShader:L.meshnormal_vert,fragmentShader:L.meshnormal_frag},sprite:{uniforms:Ir([R.sprite,R.fog]),vertexShader:L.sprite_vert,fragmentShader:L.sprite_frag},background:{uniforms:{uvTransform:{value:new N},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:L.background_vert,fragmentShader:L.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new N}},vertexShader:L.backgroundCube_vert,fragmentShader:L.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:L.cube_vert,fragmentShader:L.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:L.equirect_vert,fragmentShader:L.equirect_frag},distanceRGBA:{uniforms:Ir([R.common,R.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:L.distanceRGBA_vert,fragmentShader:L.distanceRGBA_frag},shadow:{uniforms:Ir([R.lights,R.fog,{color:{value:new F(0)},opacity:{value:1}}]),vertexShader:L.shadow_vert,fragmentShader:L.shadow_frag}};li.physical={uniforms:Ir([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new N},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new N},clearcoatNormalScale:{value:new M(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new N},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new N},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new N},sheen:{value:0},sheenColor:{value:new F(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new N},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new N},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new N},transmissionSamplerSize:{value:new M},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new N},attenuationDistance:{value:0},attenuationColor:{value:new F(0)},specularColor:{value:new F(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new N},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new N},anisotropyVector:{value:new M},anisotropyMap:{value:null},anisotropyMapTransform:{value:new N}}]),vertexShader:L.meshphysical_vert,fragmentShader:L.meshphysical_frag};var ui={r:0,b:0,g:0},di=new xn,fi=new dn;function pi(e,t,n,r,i,a,o){let s=new F(0),c=a===!0?0:1,l,u,d=null,f=0,p=null;function m(e){let r=e.isScene===!0?e.background:null;return r&&r.isTexture&&(r=(e.backgroundBlurriness>0?n:t).get(r)),r}function h(t){let n=!1,i=m(t);i===null?_(s,c):i&&i.isColor&&(_(i,1),n=!0);let a=e.xr.getEnvironmentBlendMode();a===`additive`?r.buffers.color.setClear(0,0,0,1,o):a===`alpha-blend`&&r.buffers.color.setClear(0,0,0,0,o),(e.autoClear||n)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil))}function g(t,n){let r=m(n);r&&(r.isCubeTexture||r.mapping===306)?(u===void 0&&(u=new I(new Pr(1,1,1),new Hr({name:`BackgroundCubeMaterial`,uniforms:Fr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute(`normal`),u.geometry.deleteAttribute(`uv`),u.onBeforeRender=function(e,t,n){this.matrixWorld.copyPosition(n.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),di.copy(n.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,r.isCubeTexture&&r.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),u.material.uniforms.envMap.value=r,u.material.uniforms.flipEnvMap.value=r.isCubeTexture&&r.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=n.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(fi.makeRotationFromEuler(di)),u.material.toneMapped=mt.getTransfer(r.colorSpace)!==We,(d!==r||f!==r.version||p!==e.toneMapping)&&(u.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),u.layers.enableAll(),t.unshift(u,u.geometry,u.material,0,0,null)):r&&r.isTexture&&(l===void 0&&(l=new I(new ci(2,2),new Hr({name:`BackgroundMaterial`,uniforms:Fr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute(`normal`),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=r,l.material.uniforms.backgroundIntensity.value=n.backgroundIntensity,l.material.toneMapped=mt.getTransfer(r.colorSpace)!==We,r.matrixAutoUpdate===!0&&r.updateMatrix(),l.material.uniforms.uvTransform.value.copy(r.matrix),(d!==r||f!==r.version||p!==e.toneMapping)&&(l.material.needsUpdate=!0,d=r,f=r.version,p=e.toneMapping),l.layers.enableAll(),t.unshift(l,l.geometry,l.material,0,0,null))}function _(t,n){t.getRGB(ui,Rr(e)),r.buffers.color.setClear(ui.r,ui.g,ui.b,n,o)}return{getClearColor:function(){return s},setClearColor:function(e,t=1){s.set(e),c=t,_(s,c)},getClearAlpha:function(){return c},setClearAlpha:function(e){c=e,_(s,c)},render:h,addToRenderList:g}}function mi(e,t){let n=e.getParameter(e.MAX_VERTEX_ATTRIBS),r={},i=f(null),a=i,o=!1;function s(n,r,i,s,c){let u=!1,f=d(s,i,r);a!==f&&(a=f,l(a.object)),u=p(n,s,i,c),u&&m(n,s,i,c),c!==null&&t.update(c,e.ELEMENT_ARRAY_BUFFER),(u||o)&&(o=!1,b(n,r,i,s),c!==null&&e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,t.get(c).buffer))}function c(){return e.createVertexArray()}function l(t){return e.bindVertexArray(t)}function u(t){return e.deleteVertexArray(t)}function d(e,t,n){let i=n.wireframe===!0,a=r[e.id];a===void 0&&(a={},r[e.id]=a);let o=a[t.id];o===void 0&&(o={},a[t.id]=o);let s=o[i];return s===void 0&&(s=f(c()),o[i]=s),s}function f(e){let t=[],r=[],i=[];for(let e=0;e<n;e++)t[e]=0,r[e]=0,i[e]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:t,enabledAttributes:r,attributeDivisors:i,object:e,attributes:{},index:null}}function p(e,t,n,r){let i=a.attributes,o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=i[t],r=o[t];if(r===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(r=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(r=e.instanceColor)),n===void 0||n.attribute!==r||r&&n.data!==r.data)return!0;s++}return a.attributesNum!==s||a.index!==r}function m(e,t,n,r){let i={},o=t.attributes,s=0,c=n.getAttributes();for(let t in c)if(c[t].location>=0){let n=o[t];n===void 0&&(t===`instanceMatrix`&&e.instanceMatrix&&(n=e.instanceMatrix),t===`instanceColor`&&e.instanceColor&&(n=e.instanceColor));let r={};r.attribute=n,n&&n.data&&(r.data=n.data),i[t]=r,s++}a.attributes=i,a.attributesNum=s,a.index=r}function h(){let e=a.newAttributes;for(let t=0,n=e.length;t<n;t++)e[t]=0}function g(e){_(e,0)}function _(t,n){let r=a.newAttributes,i=a.enabledAttributes,o=a.attributeDivisors;r[t]=1,i[t]===0&&(e.enableVertexAttribArray(t),i[t]=1),o[t]!==n&&(e.vertexAttribDivisor(t,n),o[t]=n)}function v(){let t=a.newAttributes,n=a.enabledAttributes;for(let r=0,i=n.length;r<i;r++)n[r]!==t[r]&&(e.disableVertexAttribArray(r),n[r]=0)}function y(t,n,r,i,a,o,s){s===!0?e.vertexAttribIPointer(t,n,r,a,o):e.vertexAttribPointer(t,n,r,i,a,o)}function b(n,r,i,a){h();let o=a.attributes,s=i.getAttributes(),c=r.defaultAttributeValues;for(let r in s){let i=s[r];if(i.location>=0){let s=o[r];if(s===void 0&&(r===`instanceMatrix`&&n.instanceMatrix&&(s=n.instanceMatrix),r===`instanceColor`&&n.instanceColor&&(s=n.instanceColor)),s!==void 0){let r=s.normalized,o=s.itemSize,c=t.get(s);if(c===void 0)continue;let l=c.buffer,u=c.type,d=c.bytesPerElement,f=u===e.INT||u===e.UNSIGNED_INT||s.gpuType===1013;if(s.isInterleavedBufferAttribute){let t=s.data,c=t.stride,p=s.offset;if(t.isInstancedInterleavedBuffer){for(let e=0;e<i.locationSize;e++)_(i.location+e,t.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=t.meshPerAttribute*t.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,c*d,(p+o/i.locationSize*e)*d,f)}else{if(s.isInstancedBufferAttribute){for(let e=0;e<i.locationSize;e++)_(i.location+e,s.meshPerAttribute);n.isInstancedMesh!==!0&&a._maxInstanceCount===void 0&&(a._maxInstanceCount=s.meshPerAttribute*s.count)}else for(let e=0;e<i.locationSize;e++)g(i.location+e);e.bindBuffer(e.ARRAY_BUFFER,l);for(let e=0;e<i.locationSize;e++)y(i.location+e,o/i.locationSize,u,r,o*d,o/i.locationSize*e*d,f)}}else if(c!==void 0){let t=c[r];if(t!==void 0)switch(t.length){case 2:e.vertexAttrib2fv(i.location,t);break;case 3:e.vertexAttrib3fv(i.location,t);break;case 4:e.vertexAttrib4fv(i.location,t);break;default:e.vertexAttrib1fv(i.location,t)}}}}v()}function x(){w();for(let e in r){let t=r[e];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e]}}function S(e){if(r[e.id]===void 0)return;let t=r[e.id];for(let e in t){let n=t[e];for(let e in n)u(n[e].object),delete n[e];delete t[e]}delete r[e.id]}function C(e){for(let t in r){let n=r[t];if(n[e.id]===void 0)continue;let i=n[e.id];for(let e in i)u(i[e].object),delete i[e];delete n[e.id]}}function w(){T(),o=!0,a!==i&&(a=i,l(a.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:s,reset:w,resetDefaultState:T,dispose:x,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:h,enableAttribute:g,disableUnusedAttributes:v}}function hi(e,t,n){let r;function i(e){r=e}function a(t,i){e.drawArrays(r,t,i),n.update(i,r,1)}function o(t,i,a){a!==0&&(e.drawArraysInstanced(r,t,i,a),n.update(i,r,a))}function s(e,i,a){if(a===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(r,e,0,i,0,a);let o=0;for(let e=0;e<a;e++)o+=i[e];n.update(o,r,1)}function c(e,i,a,s){if(a===0)return;let c=t.get(`WEBGL_multi_draw`);if(c===null)for(let t=0;t<e.length;t++)o(e[t],i[t],s[t]);else{c.multiDrawArraysInstancedWEBGL(r,e,0,i,0,s,0,a);let t=0;for(let e=0;e<a;e++)t+=i[e]*s[e];n.update(t,r,1)}}this.setMode=i,this.render=a,this.renderInstances=o,this.renderMultiDraw=s,this.renderMultiDrawInstances=c}function gi(e,t,n,r){let i;function a(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let n=t.get(`EXT_texture_filter_anisotropic`);i=e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(t){return t===1023||r.convert(t)===e.getParameter(e.IMPLEMENTATION_COLOR_READ_FORMAT)}function s(n){let i=n===1016&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(n!==1009&&r.convert(n)!==e.getParameter(e.IMPLEMENTATION_COLOR_READ_TYPE)&&n!==1015&&!i)}function c(t){if(t===`highp`){if(e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.HIGH_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.HIGH_FLOAT).precision>0)return`highp`;t=`mediump`}return t===`mediump`&&e.getShaderPrecisionFormat(e.VERTEX_SHADER,e.MEDIUM_FLOAT).precision>0&&e.getShaderPrecisionFormat(e.FRAGMENT_SHADER,e.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=n.precision===void 0?`highp`:n.precision,u=c(l);u!==l&&(console.warn(`THREE.WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&t.has(`EXT_clip_control`),p=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS),m=e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=e.getParameter(e.MAX_TEXTURE_SIZE),g=e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE),_=e.getParameter(e.MAX_VERTEX_ATTRIBS),v=e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS),y=e.getParameter(e.MAX_VARYING_VECTORS),b=e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS),x=m>0,S=e.getParameter(e.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:s,precision:l,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:h,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:v,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:x,maxSamples:S}}function _i(e){let t=this,n=null,r=0,i=!1,a=!1,o=new ni,s=new N,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(e,t){let n=e.length!==0||t||r!==0||i;return i=t,r=e.length,n},this.beginShadows=function(){a=!0,u(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(e,t){n=u(e,t,0)},this.setState=function(t,o,s){let d=t.clippingPlanes,f=t.clipIntersection,p=t.clipShadows,m=e.get(t);if(!i||d===null||d.length===0||a&&!p)a?u(null):l();else{let e=a?0:r,t=e*4,i=m.clippingState||null;c.value=i,i=u(d,o,t,s);for(let e=0;e!==t;++e)i[e]=n[e];m.clippingState=i,this.numIntersection=f?this.numPlanes:0,this.numPlanes+=e}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function u(e,n,r,i){let a=e===null?0:e.length,l=null;if(a!==0){if(l=c.value,i!==!0||l===null){let t=r+a*4,i=n.matrixWorldInverse;s.getNormalMatrix(i),(l===null||l.length<t)&&(l=new Float32Array(t));for(let t=0,n=r;t!==a;++t,n+=4)o.copy(e[t]).applyMatrix4(i,s),o.normal.toArray(l,n),l[n+3]=o.constant}c.value=l,c.needsUpdate=!0}return t.numPlanes=a,t.numIntersection=0,l}}function vi(e){let t=new WeakMap;function n(e,t){return t===303?e.mapping=301:t===304&&(e.mapping=302),e}function r(r){if(r&&r.isTexture){let a=r.mapping;if(a===303||a===304){if(t.has(r)){let e=t.get(r).texture;return n(e,r.mapping)}{let a=r.image;if(a&&a.height>0){let o=new Qr(a.height);return o.fromEquirectangularTexture(e,r),t.set(r,o),r.addEventListener(`dispose`,i),n(o.texture,r.mapping)}return null}}}return r}function i(e){let n=e.target;n.removeEventListener(`dispose`,i);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function a(){t=new WeakMap}return{get:r,dispose:a}}var yi=class extends Ur{constructor(e=-1,t=1,n=1,r=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,i=n-e,a=n+e,o=r+t,s=r-t;if(this.view!==null&&this.view.enabled){let e=(this.right-this.left)/this.view.fullWidth/this.zoom,t=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=e*this.view.offsetX,a=i+e*this.view.width,o-=t*this.view.offsetY,s=o-t*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,s,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},bi=4,xi=[.125,.215,.35,.446,.526,.582],Si=20,Ci=new yi,wi=new F,Ti=null,Ei=0,Di=0,Oi=!1,ki=(1+Math.sqrt(5))/2,Ai=1/ki,ji=[new P(-ki,Ai,0),new P(ki,Ai,0),new P(-Ai,0,ki),new P(Ai,0,ki),new P(0,ki,-Ai),new P(0,ki,Ai),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)],Mi=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ti=this._renderer.getRenderTarget(),Ei=this._renderer.getActiveCubeFace(),Di=this._renderer.getActiveMipmapLevel(),Oi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let i=this._allocateTargets();return i.depthBuffer=!0,this._sceneToCubeUV(e,n,r,i),t>0&&this._blur(i,0,0,t),this._applyPMREM(i),this._cleanup(i),i}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ri(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Li(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=2**this._lodMax}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ti,Ei,Di),this._renderer.xr.enabled=Oi,e.scissorTest=!1,Fi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===301||e.mapping===302?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ti=this._renderer.getRenderTarget(),Ei=this._renderer.getActiveCubeFace(),Di=this._renderer.getActiveMipmapLevel(),Oi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:o,minFilter:o,generateMipmaps:!1,type:g,format:C,colorSpace:He,depthBuffer:!1},r=Pi(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Pi(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ni(r)),this._blurMaterial=Ii(r,e,t)}return r}_compileMaterial(e){let t=new I(this._lodPlanes[0],e);this._renderer.compile(t,Ci)}_sceneToCubeUV(e,t,n,r){let i=new qr(90,1,t,n),a=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],s=this._renderer,c=s.autoClear,l=s.toneMapping;s.getClearColor(wi),s.toneMapping=0,s.autoClear=!1;let u=new or({name:`PMREM.Background`,side:1,depthWrite:!1,depthTest:!1}),d=new I(new Pr,u),f=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,f=!0):(u.color.copy(wi),f=!0);for(let t=0;t<6;t++){let n=t%3;n===0?(i.up.set(0,a[t],0),i.lookAt(o[t],0,0)):n===1?(i.up.set(0,0,a[t]),i.lookAt(0,o[t],0)):(i.up.set(0,a[t],0),i.lookAt(0,0,o[t]));let c=this._cubeSize;Fi(r,n*c,t>2?c:0,c,c),s.setRenderTarget(r),f&&s.render(d,i),s.render(e,i)}d.geometry.dispose(),d.material.dispose(),s.toneMapping=l,s.autoClear=c,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===301||e.mapping===302;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ri()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Li());let i=r?this._cubemapMaterial:this._equirectMaterial,a=new I(this._lodPlanes[0],i),o=i.uniforms;o.envMap.value=e;let s=this._cubeSize;Fi(t,0,0,3*s,2*s),n.setRenderTarget(t),n.render(a,Ci)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let t=1;t<r;t++){let n=Math.sqrt(this._sigmas[t]*this._sigmas[t]-this._sigmas[t-1]*this._sigmas[t-1]),i=ji[(r-t-1)%ji.length];this._blur(e,t-1,t,n,i)}t.autoClear=n}_blur(e,t,n,r,i){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,`latitudinal`,i),this._halfBlur(a,e,n,n,r,`longitudinal`,i)}_halfBlur(e,t,n,r,i,a,o){let s=this._renderer,c=this._blurMaterial;a!==`latitudinal`&&a!==`longitudinal`&&console.error(`blur direction must be either latitudinal or longitudinal!`);let l=new I(this._lodPlanes[r],c),u=c.uniforms,d=this._sizeLods[n]-1,f=isFinite(i)?Math.PI/(2*d):2*Math.PI/39,p=i/f,m=isFinite(i)?1+Math.floor(3*p):Si;m>Si&&console.warn(`sigmaRadians, ${i}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Si}`);let h=[],g=0;for(let e=0;e<Si;++e){let t=e/p,n=Math.exp(-t*t/2);h.push(n),e===0?g+=n:e<m&&(g+=2*n)}for(let e=0;e<h.length;e++)h[e]=h[e]/g;u.envMap.value=e.texture,u.samples.value=m,u.weights.value=h,u.latitudinal.value=a===`latitudinal`,o&&(u.poleAxis.value=o);let{_lodMax:_}=this;u.dTheta.value=f,u.mipInt.value=_-n;let v=this._sizeLods[r];Fi(t,3*v*(r>_-bi?r-_+bi:0),4*(this._cubeSize-v),3*v,2*v),s.setRenderTarget(t),s.render(l,Ci)}};function Ni(e){let t=[],n=[],r=[],i=e,a=e-bi+1+xi.length;for(let o=0;o<a;o++){let a=2**i;n.push(a);let s=1/a;o>e-bi?s=xi[o-e+bi-1]:o===0&&(s=0),r.push(s);let c=1/(a-2),l=-c,u=1+c,d=[l,l,u,l,u,u,l,l,u,u,l,u],f=new Float32Array(108),p=new Float32Array(72),m=new Float32Array(36);for(let e=0;e<6;e++){let t=e%3*2/3-1,n=e>2?0:-1,r=[t,n,0,t+2/3,n,0,t+2/3,n+1,0,t,n,0,t+2/3,n+1,0,t,n+1,0];f.set(r,18*e),p.set(d,12*e);let i=[e,e,e,e,e,e];m.set(i,6*e)}let h=new br;h.setAttribute(`position`,new lr(f,3)),h.setAttribute(`uv`,new lr(p,2)),h.setAttribute(`faceIndex`,new lr(m,1)),t.push(h),i>bi&&i--}return{lodPlanes:t,sizeLods:n,sigmas:r}}function Pi(e,t,n){let r=new jt(e,t,n);return r.texture.mapping=306,r.texture.name=`PMREM.cubeUv`,r.scissorTest=!0,r}function Fi(e,t,n,r,i){e.viewport.set(t,n,r,i),e.scissor.set(t,n,r,i)}function Ii(e,t,n){let r=new Float32Array(Si),i=new P(0,1,0);return new Hr({name:`SphericalGaussianBlur`,defines:{n:Si,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${e}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:zi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Li(){return new Hr({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:zi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ri(){return new Hr({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:zi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function zi(){return`

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
	`}function Bi(e){let t=new WeakMap,n=null;function r(r){if(r&&r.isTexture){let o=r.mapping,s=o===303||o===304,c=o===301||o===302;if(s||c){let o=t.get(r),l=o===void 0?0:o.texture.pmremVersion;if(r.isRenderTargetTexture&&r.pmremVersion!==l)return n===null&&(n=new Mi(e)),o=s?n.fromEquirectangular(r,o):n.fromCubemap(r,o),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),o.texture;if(o!==void 0)return o.texture;{let l=r.image;return s&&l&&l.height>0||c&&l&&i(l)?(n===null&&(n=new Mi(e)),o=s?n.fromEquirectangular(r):n.fromCubemap(r),o.texture.pmremVersion=r.pmremVersion,t.set(r,o),r.addEventListener(`dispose`,a),o.texture):null}}}return r}function i(e){let t=0;for(let n=0;n<6;n++)e[n]!==void 0&&t++;return t===6}function a(e){let n=e.target;n.removeEventListener(`dispose`,a);let r=t.get(n);r!==void 0&&(t.delete(n),r.dispose())}function o(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:o}}function Vi(e){let t={};function n(n){if(t[n]!==void 0)return t[n];let r;switch(n){case`WEBGL_depth_texture`:r=e.getExtension(`WEBGL_depth_texture`)||e.getExtension(`MOZ_WEBGL_depth_texture`)||e.getExtension(`WEBKIT_WEBGL_depth_texture`);break;case`EXT_texture_filter_anisotropic`:r=e.getExtension(`EXT_texture_filter_anisotropic`)||e.getExtension(`MOZ_EXT_texture_filter_anisotropic`)||e.getExtension(`WEBKIT_EXT_texture_filter_anisotropic`);break;case`WEBGL_compressed_texture_s3tc`:r=e.getExtension(`WEBGL_compressed_texture_s3tc`)||e.getExtension(`MOZ_WEBGL_compressed_texture_s3tc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_s3tc`);break;case`WEBGL_compressed_texture_pvrtc`:r=e.getExtension(`WEBGL_compressed_texture_pvrtc`)||e.getExtension(`WEBKIT_WEBGL_compressed_texture_pvrtc`);break;default:r=e.getExtension(n)}return t[n]=r,r}return{has:function(e){return n(e)!==null},init:function(){n(`EXT_color_buffer_float`),n(`WEBGL_clip_cull_distance`),n(`OES_texture_float_linear`),n(`EXT_color_buffer_half_float`),n(`WEBGL_multisampled_render_to_texture`),n(`WEBGL_render_shared_exponent`)},get:function(e){let t=n(e);return t===null&&ut(`THREE.WebGLRenderer: `+e+` extension not supported.`),t}}}function Hi(e,t,n,r){let i={},a=new WeakMap;function o(e){let s=e.target;s.index!==null&&t.remove(s.index);for(let e in s.attributes)t.remove(s.attributes[e]);for(let e in s.morphAttributes){let n=s.morphAttributes[e];for(let e=0,r=n.length;e<r;e++)t.remove(n[e])}s.removeEventListener(`dispose`,o),delete i[s.id];let c=a.get(s);c&&(t.remove(c),a.delete(s)),r.releaseStatesOfGeometry(s),s.isInstancedBufferGeometry===!0&&delete s._maxInstanceCount,n.memory.geometries--}function s(e,t){return i[t.id]===!0?t:(t.addEventListener(`dispose`,o),i[t.id]=!0,n.memory.geometries++,t)}function c(n){let r=n.attributes;for(let n in r)t.update(r[n],e.ARRAY_BUFFER);let i=n.morphAttributes;for(let n in i){let r=i[n];for(let n=0,i=r.length;n<i;n++)t.update(r[n],e.ARRAY_BUFFER)}}function l(e){let n=[],r=e.index,i=e.attributes.position,o=0;if(r!==null){let e=r.array;o=r.version;for(let t=0,r=e.length;t<r;t+=3){let r=e[t+0],i=e[t+1],a=e[t+2];n.push(r,i,i,a,a,r)}}else if(i!==void 0){let e=i.array;o=i.version;for(let t=0,r=e.length/3-1;t<r;t+=3){let e=t+0,r=t+1,i=t+2;n.push(e,r,r,i,i,e)}}else return;let s=new(ot(n)?dr:ur)(n,1);s.version=o;let c=a.get(e);c&&t.remove(c),a.set(e,s)}function u(e){let t=a.get(e);if(t){let n=e.index;n!==null&&t.version<n.version&&l(e)}else l(e);return a.get(e)}return{get:s,update:c,getWireframeAttribute:u}}function Ui(e,t,n){let r;function i(e){r=e}let a,o;function s(e){a=e.type,o=e.bytesPerElement}function c(t,i){e.drawElements(r,i,a,t*o),n.update(i,r,1)}function l(t,i,s){s!==0&&(e.drawElementsInstanced(r,i,a,t*o,s),n.update(i,r,s))}function u(e,i,o){if(o===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(r,i,0,a,e,0,o);let s=0;for(let e=0;e<o;e++)s+=i[e];n.update(s,r,1)}function d(e,i,s,c){if(s===0)return;let u=t.get(`WEBGL_multi_draw`);if(u===null)for(let t=0;t<e.length;t++)l(e[t]/o,i[t],c[t]);else{u.multiDrawElementsInstancedWEBGL(r,i,0,a,e,0,c,0,s);let t=0;for(let e=0;e<s;e++)t+=i[e]*c[e];n.update(t,r,1)}}this.setMode=i,this.setIndex=s,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=d}function Wi(e){let t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function r(t,r,i){switch(n.calls++,r){case e.TRIANGLES:n.triangles+=t/3*i;break;case e.LINES:n.lines+=t/2*i;break;case e.LINE_STRIP:n.lines+=i*(t-1);break;case e.LINE_LOOP:n.lines+=i*t;break;case e.POINTS:n.points+=i*t;break;default:console.error(`THREE.WebGLInfo: Unknown draw mode:`,r)}}function i(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:i,update:r}}function Gi(e,t,n){let r=new WeakMap,i=new kt;function a(a,o,s){let c=a.morphTargetInfluences,l=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=l===void 0?0:l.length,d=r.get(o);if(d===void 0||d.count!==u){d!==void 0&&d.texture.dispose();let e=o.morphAttributes.position!==void 0,n=o.morphAttributes.normal!==void 0,a=o.morphAttributes.color!==void 0,s=o.morphAttributes.position||[],c=o.morphAttributes.normal||[],l=o.morphAttributes.color||[],f=0;e===!0&&(f=1),n===!0&&(f=2),a===!0&&(f=3);let p=o.attributes.position.count*f,m=1;p>t.maxTextureSize&&(m=Math.ceil(p/t.maxTextureSize),p=t.maxTextureSize);let g=new Float32Array(p*m*4*u),_=new Mt(g,p,m,u);_.type=h,_.needsUpdate=!0;let v=f*4;for(let t=0;t<u;t++){let r=s[t],o=c[t],u=l[t],d=p*m*4*t;for(let t=0;t<r.count;t++){let s=t*v;e===!0&&(i.fromBufferAttribute(r,t),g[d+s+0]=i.x,g[d+s+1]=i.y,g[d+s+2]=i.z,g[d+s+3]=0),n===!0&&(i.fromBufferAttribute(o,t),g[d+s+4]=i.x,g[d+s+5]=i.y,g[d+s+6]=i.z,g[d+s+7]=0),a===!0&&(i.fromBufferAttribute(u,t),g[d+s+8]=i.x,g[d+s+9]=i.y,g[d+s+10]=i.z,g[d+s+11]=u.itemSize===4?i.w:1)}}d={count:u,texture:_,size:new M(p,m)},r.set(o,d);function y(){_.dispose(),r.delete(o),o.removeEventListener(`dispose`,y)}o.addEventListener(`dispose`,y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)s.getUniforms().setValue(e,`morphTexture`,a.morphTexture,n);else{let t=0;for(let e=0;e<c.length;e++)t+=c[e];let n=o.morphTargetsRelative?1:1-t;s.getUniforms().setValue(e,`morphTargetBaseInfluence`,n),s.getUniforms().setValue(e,`morphTargetInfluences`,c)}s.getUniforms().setValue(e,`morphTargetsTexture`,d.texture,n),s.getUniforms().setValue(e,`morphTargetsTextureSize`,d.size)}return{update:a}}function Ki(e,t,n,r){let i=new WeakMap;function a(a){let o=r.render.frame,c=a.geometry,l=t.get(a,c);if(i.get(l)!==o&&(t.update(l),i.set(l,o)),a.isInstancedMesh&&(a.hasEventListener(`dispose`,s)===!1&&a.addEventListener(`dispose`,s),i.get(a)!==o&&(n.update(a.instanceMatrix,e.ARRAY_BUFFER),a.instanceColor!==null&&n.update(a.instanceColor,e.ARRAY_BUFFER),i.set(a,o))),a.isSkinnedMesh){let e=a.skeleton;i.get(e)!==o&&(e.update(),i.set(e,o))}return l}function o(){i=new WeakMap}function s(e){let t=e.target;t.removeEventListener(`dispose`,s),n.remove(t.instanceMatrix),t.instanceColor!==null&&n.remove(t.instanceColor)}return{update:a,dispose:o}}var qi=class extends Ot{constructor(e,t,n,i,a,o,s,c,l,u=E){if(u!==1026&&u!==1027)throw Error(`DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);n===void 0&&u===1026&&(n=m),n===void 0&&u===1027&&(n=y),super(null,i,a,o,s,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s===void 0?r:s,this.minFilter=c===void 0?r:c,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Ji=new Ot,Yi=new qi(1,1),Xi=new Mt,Zi=new Nt,Qi=new Zr,$i=[],ea=[],ta=new Float32Array(16),na=new Float32Array(9),ra=new Float32Array(4);function ia(e,t,n){let r=e[0];if(r<=0||r>0)return e;let i=t*n,a=$i[i];if(a===void 0&&(a=new Float32Array(i),$i[i]=a),t!==0){r.toArray(a,0);for(let r=1,i=0;r!==t;++r)i+=n,e[r].toArray(a,i)}return a}function aa(e,t){if(e.length!==t.length)return!1;for(let n=0,r=e.length;n<r;n++)if(e[n]!==t[n])return!1;return!0}function oa(e,t){for(let n=0,r=t.length;n<r;n++)e[n]=t[n]}function sa(e,t){let n=ea[t];n===void 0&&(n=new Int32Array(t),ea[t]=n);for(let r=0;r!==t;++r)n[r]=e.allocateTextureUnit();return n}function ca(e,t){let n=this.cache;n[0]!==t&&(e.uniform1f(this.addr,t),n[0]=t)}function la(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(aa(n,t))return;e.uniform2fv(this.addr,t),oa(n,t)}}function ua(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(e.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(aa(n,t))return;e.uniform3fv(this.addr,t),oa(n,t)}}function da(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(aa(n,t))return;e.uniform4fv(this.addr,t),oa(n,t)}}function fa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(aa(n,t))return;e.uniformMatrix2fv(this.addr,!1,t),oa(n,t)}else{if(aa(n,r))return;ra.set(r),e.uniformMatrix2fv(this.addr,!1,ra),oa(n,r)}}function pa(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(aa(n,t))return;e.uniformMatrix3fv(this.addr,!1,t),oa(n,t)}else{if(aa(n,r))return;na.set(r),e.uniformMatrix3fv(this.addr,!1,na),oa(n,r)}}function ma(e,t){let n=this.cache,r=t.elements;if(r===void 0){if(aa(n,t))return;e.uniformMatrix4fv(this.addr,!1,t),oa(n,t)}else{if(aa(n,r))return;ta.set(r),e.uniformMatrix4fv(this.addr,!1,ta),oa(n,r)}}function ha(e,t){let n=this.cache;n[0]!==t&&(e.uniform1i(this.addr,t),n[0]=t)}function ga(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(aa(n,t))return;e.uniform2iv(this.addr,t),oa(n,t)}}function _a(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(aa(n,t))return;e.uniform3iv(this.addr,t),oa(n,t)}}function va(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(aa(n,t))return;e.uniform4iv(this.addr,t),oa(n,t)}}function ya(e,t){let n=this.cache;n[0]!==t&&(e.uniform1ui(this.addr,t),n[0]=t)}function ba(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(e.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(aa(n,t))return;e.uniform2uiv(this.addr,t),oa(n,t)}}function xa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(e.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(aa(n,t))return;e.uniform3uiv(this.addr,t),oa(n,t)}}function Sa(e,t){let n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(e.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(aa(n,t))return;e.uniform4uiv(this.addr,t),oa(n,t)}}function Ca(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i);let a;this.type===e.SAMPLER_2D_SHADOW?(Yi.compareFunction=515,a=Yi):a=Ji,n.setTexture2D(t||a,i)}function wa(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture3D(t||Zi,i)}function Ta(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTextureCube(t||Qi,i)}function Ea(e,t,n){let r=this.cache,i=n.allocateTextureUnit();r[0]!==i&&(e.uniform1i(this.addr,i),r[0]=i),n.setTexture2DArray(t||Xi,i)}function Da(e){switch(e){case 5126:return ca;case 35664:return la;case 35665:return ua;case 35666:return da;case 35674:return fa;case 35675:return pa;case 35676:return ma;case 5124:case 35670:return ha;case 35667:case 35671:return ga;case 35668:case 35672:return _a;case 35669:case 35673:return va;case 5125:return ya;case 36294:return ba;case 36295:return xa;case 36296:return Sa;case 35678:case 36198:case 36298:case 36306:case 35682:return Ca;case 35679:case 36299:case 36307:return wa;case 35680:case 36300:case 36308:case 36293:return Ta;case 36289:case 36303:case 36311:case 36292:return Ea}}function Oa(e,t){e.uniform1fv(this.addr,t)}function ka(e,t){let n=ia(t,this.size,2);e.uniform2fv(this.addr,n)}function Aa(e,t){let n=ia(t,this.size,3);e.uniform3fv(this.addr,n)}function ja(e,t){let n=ia(t,this.size,4);e.uniform4fv(this.addr,n)}function Ma(e,t){let n=ia(t,this.size,4);e.uniformMatrix2fv(this.addr,!1,n)}function Na(e,t){let n=ia(t,this.size,9);e.uniformMatrix3fv(this.addr,!1,n)}function Pa(e,t){let n=ia(t,this.size,16);e.uniformMatrix4fv(this.addr,!1,n)}function Fa(e,t){e.uniform1iv(this.addr,t)}function Ia(e,t){e.uniform2iv(this.addr,t)}function La(e,t){e.uniform3iv(this.addr,t)}function Ra(e,t){e.uniform4iv(this.addr,t)}function za(e,t){e.uniform1uiv(this.addr,t)}function Ba(e,t){e.uniform2uiv(this.addr,t)}function Va(e,t){e.uniform3uiv(this.addr,t)}function Ha(e,t){e.uniform4uiv(this.addr,t)}function Ua(e,t,n){let r=this.cache,i=t.length,a=sa(n,i);aa(r,a)||(e.uniform1iv(this.addr,a),oa(r,a));for(let e=0;e!==i;++e)n.setTexture2D(t[e]||Ji,a[e])}function Wa(e,t,n){let r=this.cache,i=t.length,a=sa(n,i);aa(r,a)||(e.uniform1iv(this.addr,a),oa(r,a));for(let e=0;e!==i;++e)n.setTexture3D(t[e]||Zi,a[e])}function Ga(e,t,n){let r=this.cache,i=t.length,a=sa(n,i);aa(r,a)||(e.uniform1iv(this.addr,a),oa(r,a));for(let e=0;e!==i;++e)n.setTextureCube(t[e]||Qi,a[e])}function Ka(e,t,n){let r=this.cache,i=t.length,a=sa(n,i);aa(r,a)||(e.uniform1iv(this.addr,a),oa(r,a));for(let e=0;e!==i;++e)n.setTexture2DArray(t[e]||Xi,a[e])}function qa(e){switch(e){case 5126:return Oa;case 35664:return ka;case 35665:return Aa;case 35666:return ja;case 35674:return Ma;case 35675:return Na;case 35676:return Pa;case 5124:case 35670:return Fa;case 35667:case 35671:return Ia;case 35668:case 35672:return La;case 35669:case 35673:return Ra;case 5125:return za;case 36294:return Ba;case 36295:return Va;case 36296:return Ha;case 35678:case 36198:case 36298:case 36306:case 35682:return Ua;case 35679:case 36299:case 36307:return Wa;case 35680:case 36300:case 36308:case 36293:return Ga;case 36289:case 36303:case 36311:case 36292:return Ka}}var Ja=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Da(t.type)}},Ya=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=qa(t.type)}},Xa=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let i=0,a=r.length;i!==a;++i){let a=r[i];a.setValue(e,t[a.id],n)}}},Za=/(\w+)(\])?(\[|\.)?/g;function Qa(e,t){e.seq.push(t),e.map[t.id]=t}function $a(e,t,n){let r=e.name,i=r.length;for(Za.lastIndex=0;;){let a=Za.exec(r),o=Za.lastIndex,s=a[1],c=a[2]===`]`,l=a[3];if(c&&(s|=0),l===void 0||l===`[`&&o+2===i){Qa(n,l===void 0?new Ja(s,e,t):new Ya(s,e,t));break}{let e=n.map[s];e===void 0&&(e=new Xa(s),Qa(n,e)),n=e}}}var eo=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let n=e.getActiveUniform(t,r);$a(n,e.getUniformLocation(t,n.name),this)}}setValue(e,t,n,r){let i=this.map[t];i!==void 0&&i.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let i=0,a=t.length;i!==a;++i){let a=t[i],o=n[a.id];o.needsUpdate!==!1&&a.setValue(e,o.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,i=e.length;r!==i;++r){let i=e[r];i.id in t&&n.push(i)}return n}};function to(e,t,n){let r=e.createShader(t);return e.shaderSource(r,n),e.compileShader(r),r}var no=37297,ro=0;function io(e,t){let n=e.split(`
`),r=[],i=Math.max(t-6,0),a=Math.min(t+6,n.length);for(let e=i;e<a;e++){let i=e+1;r.push(`${i===t?`>`:` `} ${i}: ${n[e]}`)}return r.join(`
`)}var ao=new N;function oo(e){mt._getMatrix(ao,mt.workingColorSpace,e);let t=`mat3( ${ao.elements.map(e=>e.toFixed(4))} )`;switch(mt.getTransfer(e)){case Ue:return[t,`LinearTransferOETF`];case We:return[t,`sRGBTransferOETF`];default:return console.warn(`THREE.WebGLProgram: Unsupported color space: `,e),[t,`LinearTransferOETF`]}}function so(e,t,n){let r=e.getShaderParameter(t,e.COMPILE_STATUS),i=e.getShaderInfoLog(t).trim();if(r&&i===``)return``;let a=/ERROR: 0:(\d+)/.exec(i);if(a){let r=parseInt(a[1]);return n.toUpperCase()+`

`+i+`

`+io(e.getShaderSource(t),r)}return i}function co(e,t){let n=oo(t);return[`vec4 ${e}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,`}`].join(`
`)}function lo(e,t){let n;switch(t){case 1:n=`Linear`;break;case 2:n=`Reinhard`;break;case 3:n=`Cineon`;break;case 4:n=`ACESFilmic`;break;case 6:n=`AgX`;break;case 7:n=`Neutral`;break;case 5:n=`Custom`;break;default:console.warn(`THREE.WebGLProgram: Unsupported toneMapping:`,t),n=`Linear`}return`vec3 `+e+`( vec3 color ) { return `+n+`ToneMapping( color ); }`}var uo=new P;function fo(){return mt.getLuminanceCoefficients(uo),[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${uo.x.toFixed(4)}, ${uo.y.toFixed(4)}, ${uo.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function po(e){return[e.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,e.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(go).join(`
`)}function mo(e){let t=[];for(let n in e){let r=e[n];r!==!1&&t.push(`#define `+n+` `+r)}return t.join(`
`)}function ho(e,t){let n={},r=e.getProgramParameter(t,e.ACTIVE_ATTRIBUTES);for(let i=0;i<r;i++){let r=e.getActiveAttrib(t,i),a=r.name,o=1;r.type===e.FLOAT_MAT2&&(o=2),r.type===e.FLOAT_MAT3&&(o=3),r.type===e.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:e.getAttribLocation(t,a),locationSize:o}}return n}function go(e){return e!==``}function _o(e,t){let n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return e.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function vo(e,t){return e.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var yo=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(e){return e.replace(yo,So)}var xo=new Map;function So(e,t){let n=L[t];if(n===void 0){let e=xo.get(t);if(e!==void 0)n=L[e],console.warn(`THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,e);else throw Error(`Can not resolve #include <`+t+`>`)}return bo(n)}var Co=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wo(e){return e.replace(Co,To)}function To(e,t,n,r){let i=``;for(let e=parseInt(t);e<parseInt(n);e++)i+=r.replace(/\[\s*i\s*\]/g,`[ `+e+` ]`).replace(/UNROLLED_LOOP_INDEX/g,e);return i}function Eo(e){let t=`precision ${e.precision} float;
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
#define LOW_PRECISION`),t}function Do(e){let t=`SHADOWMAP_TYPE_BASIC`;return e.shadowMapType===1?t=`SHADOWMAP_TYPE_PCF`:e.shadowMapType===2?t=`SHADOWMAP_TYPE_PCF_SOFT`:e.shadowMapType===3&&(t=`SHADOWMAP_TYPE_VSM`),t}function Oo(e){let t=`ENVMAP_TYPE_CUBE`;if(e.envMap)switch(e.envMapMode){case 301:case 302:t=`ENVMAP_TYPE_CUBE`;break;case 306:t=`ENVMAP_TYPE_CUBE_UV`}return t}function ko(e){let t=`ENVMAP_MODE_REFLECTION`;if(e.envMap)switch(e.envMapMode){case 302:t=`ENVMAP_MODE_REFRACTION`}return t}function Ao(e){let t=`ENVMAP_BLENDING_NONE`;if(e.envMap)switch(e.combine){case 0:t=`ENVMAP_BLENDING_MULTIPLY`;break;case 1:t=`ENVMAP_BLENDING_MIX`;break;case 2:t=`ENVMAP_BLENDING_ADD`}return t}function jo(e){let t=e.envMapCubeUVHeight;if(t===null)return null;let n=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(2**n,112)),texelHeight:r,maxMip:n}}function Mo(e,t,n,r){let i=e.getContext(),a=n.defines,o=n.vertexShader,s=n.fragmentShader,c=Do(n),l=Oo(n),u=ko(n),d=Ao(n),f=jo(n),p=po(n),m=mo(a),h=i.createProgram(),g,_,v=n.glslVersion?`#version `+n.glslVersion+`
`:``;n.isRawShaderMaterial?(g=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(go).join(`
`),g.length>0&&(g+=`
`),_=[`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m].filter(go).join(`
`),_.length>0&&(_+=`
`)):(g=[Eo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,n.batching?`#define USE_BATCHING`:``,n.batchingColor?`#define USE_BATCHING_COLOR`:``,n.instancing?`#define USE_INSTANCING`:``,n.instancingColor?`#define USE_INSTANCING_COLOR`:``,n.instancingMorph?`#define USE_INSTANCING_MORPH`:``,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.map?`#define USE_MAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+u:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.displacementMap?`#define USE_DISPLACEMENTMAP`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.mapUv?`#define MAP_UV `+n.mapUv:``,n.alphaMapUv?`#define ALPHAMAP_UV `+n.alphaMapUv:``,n.lightMapUv?`#define LIGHTMAP_UV `+n.lightMapUv:``,n.aoMapUv?`#define AOMAP_UV `+n.aoMapUv:``,n.emissiveMapUv?`#define EMISSIVEMAP_UV `+n.emissiveMapUv:``,n.bumpMapUv?`#define BUMPMAP_UV `+n.bumpMapUv:``,n.normalMapUv?`#define NORMALMAP_UV `+n.normalMapUv:``,n.displacementMapUv?`#define DISPLACEMENTMAP_UV `+n.displacementMapUv:``,n.metalnessMapUv?`#define METALNESSMAP_UV `+n.metalnessMapUv:``,n.roughnessMapUv?`#define ROUGHNESSMAP_UV `+n.roughnessMapUv:``,n.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+n.anisotropyMapUv:``,n.clearcoatMapUv?`#define CLEARCOATMAP_UV `+n.clearcoatMapUv:``,n.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+n.clearcoatNormalMapUv:``,n.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+n.clearcoatRoughnessMapUv:``,n.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+n.iridescenceMapUv:``,n.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+n.iridescenceThicknessMapUv:``,n.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+n.sheenColorMapUv:``,n.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+n.sheenRoughnessMapUv:``,n.specularMapUv?`#define SPECULARMAP_UV `+n.specularMapUv:``,n.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+n.specularColorMapUv:``,n.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+n.specularIntensityMapUv:``,n.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+n.transmissionMapUv:``,n.thicknessMapUv?`#define THICKNESSMAP_UV `+n.thicknessMapUv:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.flatShading?`#define FLAT_SHADED`:``,n.skinning?`#define USE_SKINNING`:``,n.morphTargets?`#define USE_MORPHTARGETS`:``,n.morphNormals&&n.flatShading===!1?`#define USE_MORPHNORMALS`:``,n.morphColors?`#define USE_MORPHCOLORS`:``,n.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+n.morphTextureStride:``,n.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+n.morphTargetsCount:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(go).join(`
`),_=[Eo(n),`#define SHADER_TYPE `+n.shaderType,`#define SHADER_NAME `+n.shaderName,m,n.useFog&&n.fog?`#define USE_FOG`:``,n.useFog&&n.fogExp2?`#define FOG_EXP2`:``,n.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,n.map?`#define USE_MAP`:``,n.matcap?`#define USE_MATCAP`:``,n.envMap?`#define USE_ENVMAP`:``,n.envMap?`#define `+l:``,n.envMap?`#define `+u:``,n.envMap?`#define `+d:``,f?`#define CUBEUV_TEXEL_WIDTH `+f.texelWidth:``,f?`#define CUBEUV_TEXEL_HEIGHT `+f.texelHeight:``,f?`#define CUBEUV_MAX_MIP `+f.maxMip+`.0`:``,n.lightMap?`#define USE_LIGHTMAP`:``,n.aoMap?`#define USE_AOMAP`:``,n.bumpMap?`#define USE_BUMPMAP`:``,n.normalMap?`#define USE_NORMALMAP`:``,n.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,n.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,n.emissiveMap?`#define USE_EMISSIVEMAP`:``,n.anisotropy?`#define USE_ANISOTROPY`:``,n.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,n.clearcoat?`#define USE_CLEARCOAT`:``,n.clearcoatMap?`#define USE_CLEARCOATMAP`:``,n.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,n.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,n.dispersion?`#define USE_DISPERSION`:``,n.iridescence?`#define USE_IRIDESCENCE`:``,n.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,n.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,n.specularMap?`#define USE_SPECULARMAP`:``,n.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,n.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,n.roughnessMap?`#define USE_ROUGHNESSMAP`:``,n.metalnessMap?`#define USE_METALNESSMAP`:``,n.alphaMap?`#define USE_ALPHAMAP`:``,n.alphaTest?`#define USE_ALPHATEST`:``,n.alphaHash?`#define USE_ALPHAHASH`:``,n.sheen?`#define USE_SHEEN`:``,n.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,n.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,n.transmission?`#define USE_TRANSMISSION`:``,n.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,n.thicknessMap?`#define USE_THICKNESSMAP`:``,n.vertexTangents&&n.flatShading===!1?`#define USE_TANGENT`:``,n.vertexColors||n.instancingColor||n.batchingColor?`#define USE_COLOR`:``,n.vertexAlphas?`#define USE_COLOR_ALPHA`:``,n.vertexUv1s?`#define USE_UV1`:``,n.vertexUv2s?`#define USE_UV2`:``,n.vertexUv3s?`#define USE_UV3`:``,n.pointsUvs?`#define USE_POINTS_UV`:``,n.gradientMap?`#define USE_GRADIENTMAP`:``,n.flatShading?`#define FLAT_SHADED`:``,n.doubleSided?`#define DOUBLE_SIDED`:``,n.flipSided?`#define FLIP_SIDED`:``,n.shadowMapEnabled?`#define USE_SHADOWMAP`:``,n.shadowMapEnabled?`#define `+c:``,n.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,n.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,n.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,n.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,n.logarithmicDepthBuffer?`#define USE_LOGDEPTHBUF`:``,n.reverseDepthBuffer?`#define USE_REVERSEDEPTHBUF`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,n.toneMapping===0?``:`#define TONE_MAPPING`,n.toneMapping===0?``:L.tonemapping_pars_fragment,n.toneMapping===0?``:lo(`toneMapping`,n.toneMapping),n.dithering?`#define DITHERING`:``,n.opaque?`#define OPAQUE`:``,L.colorspace_pars_fragment,co(`linearToOutputTexel`,n.outputColorSpace),fo(),n.useDepthPacking?`#define DEPTH_PACKING `+n.depthPacking:``,`
`].filter(go).join(`
`)),o=bo(o),o=_o(o,n),o=vo(o,n),s=bo(s),s=_o(s,n),s=vo(s,n),o=wo(o),s=wo(s),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[p,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+g,_=[`#define varying in`,n.glslVersion===`300 es`?``:`layout(location = 0) out highp vec4 pc_fragColor;`,n.glslVersion===`300 es`?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+_);let y=v+g+o,b=v+_+s,x=to(i,i.VERTEX_SHADER,y),S=to(i,i.FRAGMENT_SHADER,b);i.attachShader(h,x),i.attachShader(h,S),n.index0AttributeName===void 0?n.morphTargets===!0&&i.bindAttribLocation(h,0,`position`):i.bindAttribLocation(h,0,n.index0AttributeName),i.linkProgram(h);function C(t){if(e.debug.checkShaderErrors){let n=i.getProgramInfoLog(h).trim(),r=i.getShaderInfoLog(x).trim(),a=i.getShaderInfoLog(S).trim(),o=!0,s=!0;if(i.getProgramParameter(h,i.LINK_STATUS)===!1){if(o=!1,typeof e.debug.onShaderError==`function`)e.debug.onShaderError(i,h,x,S);else{let e=so(i,x,`vertex`),r=so(i,S,`fragment`);console.error(`THREE.WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(h,i.VALIDATE_STATUS)+`

Material Name: `+t.name+`
Material Type: `+t.type+`

Program Info Log: `+n+`
`+e+`
`+r)}}else n===``?(r===``||a===``)&&(s=!1):console.warn(`THREE.WebGLProgram: Program Info Log:`,n);s&&(t.diagnostics={runnable:o,programLog:n,vertexShader:{log:r,prefix:g},fragmentShader:{log:a,prefix:_}})}i.deleteShader(x),i.deleteShader(S),w=new eo(i,h),T=ho(i,h)}let w;this.getUniforms=function(){return w===void 0&&C(this),w};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let E=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(h,no)),E},this.destroy=function(){r.releaseStatesOfProgram(this),i.deleteProgram(h),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ro++,this.cacheKey=t,this.usedTimes=1,this.program=h,this.vertexShader=x,this.fragmentShader=S,this}var No=0,Po=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),i=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(i)===!1&&(a.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let e of t)e.usedTimes--,e.usedTimes===0&&this.shaderCache.delete(e.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Fo(e),t.set(e,n)),n}},Fo=class{constructor(e){this.id=No++,this.code=e,this.usedTimes=0}};function Io(e,t,n,r,i,a,o){let s=new Sn,c=new Po,l=new Set,u=[],d=i.logarithmicDepthBuffer,f=i.vertexTextures,p=i.precision,m={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distanceRGBA`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function h(e){return l.add(e),e===0?`uv`:`uv${e}`}function g(a,s,u,g,_){let v=g.fog,y=_.geometry,b=a.isMeshStandardMaterial?g.environment:null,x=(a.isMeshStandardMaterial?n:t).get(a.envMap||b),S=x&&x.mapping===306?x.image.height:null,C=m[a.type];a.precision!==null&&(p=i.getMaxPrecision(a.precision),p!==a.precision&&console.warn(`THREE.WebGLProgram.getParameters:`,a.precision,`not supported, using`,p,`instead.`));let w=y.morphAttributes.position||y.morphAttributes.normal||y.morphAttributes.color,T=w===void 0?0:w.length,E=0;y.morphAttributes.position!==void 0&&(E=1),y.morphAttributes.normal!==void 0&&(E=2),y.morphAttributes.color!==void 0&&(E=3);let ee,te,D,ne;if(C){let e=li[C];ee=e.vertexShader,te=e.fragmentShader}else ee=a.vertexShader,te=a.fragmentShader,c.update(a),D=c.getVertexShaderID(a),ne=c.getFragmentShaderID(a);let O=e.getRenderTarget(),re=e.state.buffers.depth.getReversed(),ie=_.isInstancedMesh===!0,ae=_.isBatchedMesh===!0,oe=!!a.map,se=!!a.matcap,ce=!!x,le=!!a.aoMap,ue=!!a.lightMap,de=!!a.bumpMap,fe=!!a.normalMap,pe=!!a.displacementMap,me=!!a.emissiveMap,he=!!a.metalnessMap,ge=!!a.roughnessMap,_e=a.anisotropy>0,ve=a.clearcoat>0,ye=a.dispersion>0,be=a.iridescence>0,xe=a.sheen>0,Se=a.transmission>0,k=_e&&!!a.anisotropyMap,Ce=ve&&!!a.clearcoatMap,we=ve&&!!a.clearcoatNormalMap,Te=ve&&!!a.clearcoatRoughnessMap,A=be&&!!a.iridescenceMap,Ee=be&&!!a.iridescenceThicknessMap,j=xe&&!!a.sheenColorMap,De=xe&&!!a.sheenRoughnessMap,Oe=!!a.specularMap,ke=!!a.specularColorMap,Ae=!!a.specularIntensityMap,je=Se&&!!a.transmissionMap,Me=Se&&!!a.thicknessMap,Ne=!!a.gradientMap,Pe=!!a.alphaMap,Fe=a.alphaTest>0,Ie=!!a.alphaHash,Le=!!a.extensions,Re=0;a.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Re=e.toneMapping);let ze={shaderID:C,shaderType:a.type,shaderName:a.name,vertexShader:ee,fragmentShader:te,defines:a.defines,customVertexShaderID:D,customFragmentShaderID:ne,isRawShaderMaterial:a.isRawShaderMaterial===!0,glslVersion:a.glslVersion,precision:p,batching:ae,batchingColor:ae&&_._colorsTexture!==null,instancing:ie,instancingColor:ie&&_.instanceColor!==null,instancingMorph:ie&&_.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:O===null?e.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:He,alphaToCoverage:!!a.alphaToCoverage,map:oe,matcap:se,envMap:ce,envMapMode:ce&&x.mapping,envMapCubeUVHeight:S,aoMap:le,lightMap:ue,bumpMap:de,normalMap:fe,displacementMap:f&&pe,emissiveMap:me,normalMapObjectSpace:fe&&a.normalMapType===1,normalMapTangentSpace:fe&&a.normalMapType===0,metalnessMap:he,roughnessMap:ge,anisotropy:_e,anisotropyMap:k,clearcoat:ve,clearcoatMap:Ce,clearcoatNormalMap:we,clearcoatRoughnessMap:Te,dispersion:ye,iridescence:be,iridescenceMap:A,iridescenceThicknessMap:Ee,sheen:xe,sheenColorMap:j,sheenRoughnessMap:De,specularMap:Oe,specularColorMap:ke,specularIntensityMap:Ae,transmission:Se,transmissionMap:je,thicknessMap:Me,gradientMap:Ne,opaque:a.transparent===!1&&a.blending===1&&a.alphaToCoverage===!1,alphaMap:Pe,alphaTest:Fe,alphaHash:Ie,combine:a.combine,mapUv:oe&&h(a.map.channel),aoMapUv:le&&h(a.aoMap.channel),lightMapUv:ue&&h(a.lightMap.channel),bumpMapUv:de&&h(a.bumpMap.channel),normalMapUv:fe&&h(a.normalMap.channel),displacementMapUv:pe&&h(a.displacementMap.channel),emissiveMapUv:me&&h(a.emissiveMap.channel),metalnessMapUv:he&&h(a.metalnessMap.channel),roughnessMapUv:ge&&h(a.roughnessMap.channel),anisotropyMapUv:k&&h(a.anisotropyMap.channel),clearcoatMapUv:Ce&&h(a.clearcoatMap.channel),clearcoatNormalMapUv:we&&h(a.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Te&&h(a.clearcoatRoughnessMap.channel),iridescenceMapUv:A&&h(a.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&h(a.iridescenceThicknessMap.channel),sheenColorMapUv:j&&h(a.sheenColorMap.channel),sheenRoughnessMapUv:De&&h(a.sheenRoughnessMap.channel),specularMapUv:Oe&&h(a.specularMap.channel),specularColorMapUv:ke&&h(a.specularColorMap.channel),specularIntensityMapUv:Ae&&h(a.specularIntensityMap.channel),transmissionMapUv:je&&h(a.transmissionMap.channel),thicknessMapUv:Me&&h(a.thicknessMap.channel),alphaMapUv:Pe&&h(a.alphaMap.channel),vertexTangents:!!y.attributes.tangent&&(fe||_e),vertexColors:a.vertexColors,vertexAlphas:a.vertexColors===!0&&!!y.attributes.color&&y.attributes.color.itemSize===4,pointsUvs:_.isPoints===!0&&!!y.attributes.uv&&(oe||Pe),fog:!!v,useFog:a.fog===!0,fogExp2:!!v&&v.isFogExp2,flatShading:a.flatShading===!0,sizeAttenuation:a.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:re,skinning:_.isSkinnedMesh===!0,morphTargets:y.morphAttributes.position!==void 0,morphNormals:y.morphAttributes.normal!==void 0,morphColors:y.morphAttributes.color!==void 0,morphTargetsCount:T,morphTextureStride:E,numDirLights:s.directional.length,numPointLights:s.point.length,numSpotLights:s.spot.length,numSpotLightMaps:s.spotLightMap.length,numRectAreaLights:s.rectArea.length,numHemiLights:s.hemi.length,numDirLightShadows:s.directionalShadowMap.length,numPointLightShadows:s.pointShadowMap.length,numSpotLightShadows:s.spotShadowMap.length,numSpotLightShadowsWithMaps:s.numSpotLightShadowsWithMaps,numLightProbes:s.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:a.dithering,shadowMapEnabled:e.shadowMap.enabled&&u.length>0,shadowMapType:e.shadowMap.type,toneMapping:Re,decodeVideoTexture:oe&&a.map.isVideoTexture===!0&&mt.getTransfer(a.map.colorSpace)===`srgb`,decodeVideoTextureEmissive:me&&a.emissiveMap.isVideoTexture===!0&&mt.getTransfer(a.emissiveMap.colorSpace)===`srgb`,premultipliedAlpha:a.premultipliedAlpha,doubleSided:a.side===2,flipSided:a.side===1,useDepthPacking:a.depthPacking>=0,depthPacking:a.depthPacking||0,index0AttributeName:a.index0AttributeName,extensionClipCullDistance:Le&&a.extensions.clipCullDistance===!0&&r.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(Le&&a.extensions.multiDraw===!0||ae)&&r.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:r.has(`KHR_parallel_shader_compile`),customProgramCacheKey:a.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function _(t){let n=[];if(t.shaderID?n.push(t.shaderID):(n.push(t.customVertexShaderID),n.push(t.customFragmentShaderID)),t.defines!==void 0)for(let e in t.defines)n.push(e),n.push(t.defines[e]);return t.isRawShaderMaterial===!1&&(v(n,t),y(n,t),n.push(e.outputColorSpace)),n.push(t.customProgramCacheKey),n.join()}function v(e,t){e.push(t.precision),e.push(t.outputColorSpace),e.push(t.envMapMode),e.push(t.envMapCubeUVHeight),e.push(t.mapUv),e.push(t.alphaMapUv),e.push(t.lightMapUv),e.push(t.aoMapUv),e.push(t.bumpMapUv),e.push(t.normalMapUv),e.push(t.displacementMapUv),e.push(t.emissiveMapUv),e.push(t.metalnessMapUv),e.push(t.roughnessMapUv),e.push(t.anisotropyMapUv),e.push(t.clearcoatMapUv),e.push(t.clearcoatNormalMapUv),e.push(t.clearcoatRoughnessMapUv),e.push(t.iridescenceMapUv),e.push(t.iridescenceThicknessMapUv),e.push(t.sheenColorMapUv),e.push(t.sheenRoughnessMapUv),e.push(t.specularMapUv),e.push(t.specularColorMapUv),e.push(t.specularIntensityMapUv),e.push(t.transmissionMapUv),e.push(t.thicknessMapUv),e.push(t.combine),e.push(t.fogExp2),e.push(t.sizeAttenuation),e.push(t.morphTargetsCount),e.push(t.morphAttributeCount),e.push(t.numDirLights),e.push(t.numPointLights),e.push(t.numSpotLights),e.push(t.numSpotLightMaps),e.push(t.numHemiLights),e.push(t.numRectAreaLights),e.push(t.numDirLightShadows),e.push(t.numPointLightShadows),e.push(t.numSpotLightShadows),e.push(t.numSpotLightShadowsWithMaps),e.push(t.numLightProbes),e.push(t.shadowMapType),e.push(t.toneMapping),e.push(t.numClippingPlanes),e.push(t.numClipIntersection),e.push(t.depthPacking)}function y(e,t){s.disableAll(),t.supportsVertexTextures&&s.enable(0),t.instancing&&s.enable(1),t.instancingColor&&s.enable(2),t.instancingMorph&&s.enable(3),t.matcap&&s.enable(4),t.envMap&&s.enable(5),t.normalMapObjectSpace&&s.enable(6),t.normalMapTangentSpace&&s.enable(7),t.clearcoat&&s.enable(8),t.iridescence&&s.enable(9),t.alphaTest&&s.enable(10),t.vertexColors&&s.enable(11),t.vertexAlphas&&s.enable(12),t.vertexUv1s&&s.enable(13),t.vertexUv2s&&s.enable(14),t.vertexUv3s&&s.enable(15),t.vertexTangents&&s.enable(16),t.anisotropy&&s.enable(17),t.alphaHash&&s.enable(18),t.batching&&s.enable(19),t.dispersion&&s.enable(20),t.batchingColor&&s.enable(21),e.push(s.mask),s.disableAll(),t.fog&&s.enable(0),t.useFog&&s.enable(1),t.flatShading&&s.enable(2),t.logarithmicDepthBuffer&&s.enable(3),t.reverseDepthBuffer&&s.enable(4),t.skinning&&s.enable(5),t.morphTargets&&s.enable(6),t.morphNormals&&s.enable(7),t.morphColors&&s.enable(8),t.premultipliedAlpha&&s.enable(9),t.shadowMapEnabled&&s.enable(10),t.doubleSided&&s.enable(11),t.flipSided&&s.enable(12),t.useDepthPacking&&s.enable(13),t.dithering&&s.enable(14),t.transmission&&s.enable(15),t.sheen&&s.enable(16),t.opaque&&s.enable(17),t.pointsUvs&&s.enable(18),t.decodeVideoTexture&&s.enable(19),t.decodeVideoTextureEmissive&&s.enable(20),t.alphaToCoverage&&s.enable(21),e.push(s.mask)}function b(e){let t=m[e.type],n;if(t){let e=li[t];n=zr.clone(e.uniforms)}else n=e.uniforms;return n}function x(t,n){let r;for(let e=0,t=u.length;e<t;e++){let t=u[e];if(t.cacheKey===n){r=t,++r.usedTimes;break}}return r===void 0&&(r=new Mo(e,n,t,a),u.push(r)),r}function S(e){if(--e.usedTimes===0){let t=u.indexOf(e);u[t]=u[u.length-1],u.pop(),e.destroy()}}function C(e){c.remove(e)}function w(){c.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:b,acquireProgram:x,releaseProgram:S,releaseShaderCache:C,programs:u,dispose:w}}function Lo(){let e=new WeakMap;function t(t){return e.has(t)}function n(t){let n=e.get(t);return n===void 0&&(n={},e.set(t,n)),n}function r(t){e.delete(t)}function i(t,n,r){e.get(t)[n]=r}function a(){e=new WeakMap}return{has:t,get:n,remove:r,update:i,dispose:a}}function Ro(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.material.id===t.material.id?e.z===t.z?e.id-t.id:e.z-t.z:e.material.id-t.material.id:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function zo(e,t){return e.groupOrder===t.groupOrder?e.renderOrder===t.renderOrder?e.z===t.z?e.id-t.id:t.z-e.z:e.renderOrder-t.renderOrder:e.groupOrder-t.groupOrder}function Bo(){let e=[],t=0,n=[],r=[],i=[];function a(){t=0,n.length=0,r.length=0,i.length=0}function o(n,r,i,a,o,s){let c=e[t];return c===void 0?(c={id:n.id,object:n,geometry:r,material:i,groupOrder:a,renderOrder:n.renderOrder,z:o,group:s},e[t]=c):(c.id=n.id,c.object=n,c.geometry=r,c.material=i,c.groupOrder=a,c.renderOrder=n.renderOrder,c.z=o,c.group=s),t++,c}function s(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.push(u):a.transparent===!0?i.push(u):n.push(u)}function c(e,t,a,s,c,l){let u=o(e,t,a,s,c,l);a.transmission>0?r.unshift(u):a.transparent===!0?i.unshift(u):n.unshift(u)}function l(e,t){n.length>1&&n.sort(e||Ro),r.length>1&&r.sort(t||zo),i.length>1&&i.sort(t||zo)}function u(){for(let n=t,r=e.length;n<r;n++){let t=e[n];if(t.id===null)break;t.id=null,t.object=null,t.geometry=null,t.material=null,t.group=null}}return{opaque:n,transmissive:r,transparent:i,init:a,push:s,unshift:c,finish:u,sort:l}}function Vo(){let e=new WeakMap;function t(t,n){let r=e.get(t),i;return r===void 0?(i=new Bo,e.set(t,[i])):n>=r.length?(i=new Bo,r.push(i)):i=r[n],i}function n(){e=new WeakMap}return{get:t,dispose:n}}function Ho(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={direction:new P,color:new F};break;case`SpotLight`:n={position:new P,direction:new P,color:new F,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:n={position:new P,color:new F,distance:0,decay:0};break;case`HemisphereLight`:n={direction:new P,skyColor:new F,groundColor:new F};break;case`RectAreaLight`:n={color:new F,position:new P,halfWidth:new P,halfHeight:new P}}return e[t.id]=n,n}}}function Uo(){let e={};return{get:function(t){if(e[t.id]!==void 0)return e[t.id];let n;switch(t.type){case`DirectionalLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new M};break;case`SpotLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new M};break;case`PointLight`:n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new M,shadowCameraNear:1,shadowCameraFar:1e3}}return e[t.id]=n,n}}}var Wo=0;function Go(e,t){return(t.castShadow?2:0)-(e.castShadow?2:0)+ +!!t.map-!!e.map}function Ko(e){let t=new Ho,n=Uo(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let e=0;e<9;e++)r.probe.push(new P);let i=new P,a=new dn,o=new dn;function s(i){let a=0,o=0,s=0;for(let e=0;e<9;e++)r.probe[e].set(0,0,0);let c=0,l=0,u=0,d=0,f=0,p=0,m=0,h=0,g=0,_=0,v=0;i.sort(Go);for(let e=0,y=i.length;e<y;e++){let y=i[e],b=y.color,x=y.intensity,S=y.distance,C=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)a+=b.r*x,o+=b.g*x,s+=b.b*x;else if(y.isLightProbe){for(let e=0;e<9;e++)r.probe[e].addScaledVector(y.sh.coefficients[e],x);v++}else if(y.isDirectionalLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,r.directionalShadow[c]=t,r.directionalShadowMap[c]=C,r.directionalShadowMatrix[c]=y.shadow.matrix,p++}r.directional[c]=e,c++}else if(y.isSpotLight){let e=t.get(y);e.position.setFromMatrixPosition(y.matrixWorld),e.color.copy(b).multiplyScalar(x),e.distance=S,e.coneCos=Math.cos(y.angle),e.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),e.decay=y.decay,r.spot[u]=e;let i=y.shadow;if(y.map&&(r.spotLightMap[g]=y.map,g++,i.updateMatrices(y),y.castShadow&&_++),r.spotLightMatrix[u]=i.matrix,y.castShadow){let e=n.get(y);e.shadowIntensity=i.intensity,e.shadowBias=i.bias,e.shadowNormalBias=i.normalBias,e.shadowRadius=i.radius,e.shadowMapSize=i.mapSize,r.spotShadow[u]=e,r.spotShadowMap[u]=C,h++}u++}else if(y.isRectAreaLight){let e=t.get(y);e.color.copy(b).multiplyScalar(x),e.halfWidth.set(y.width*.5,0,0),e.halfHeight.set(0,y.height*.5,0),r.rectArea[d]=e,d++}else if(y.isPointLight){let e=t.get(y);if(e.color.copy(y.color).multiplyScalar(y.intensity),e.distance=y.distance,e.decay=y.decay,y.castShadow){let e=y.shadow,t=n.get(y);t.shadowIntensity=e.intensity,t.shadowBias=e.bias,t.shadowNormalBias=e.normalBias,t.shadowRadius=e.radius,t.shadowMapSize=e.mapSize,t.shadowCameraNear=e.camera.near,t.shadowCameraFar=e.camera.far,r.pointShadow[l]=t,r.pointShadowMap[l]=C,r.pointShadowMatrix[l]=y.shadow.matrix,m++}r.point[l]=e,l++}else if(y.isHemisphereLight){let e=t.get(y);e.skyColor.copy(y.color).multiplyScalar(x),e.groundColor.copy(y.groundColor).multiplyScalar(x),r.hemi[f]=e,f++}}d>0&&(e.has(`OES_texture_float_linear`)===!0?(r.rectAreaLTC1=R.LTC_FLOAT_1,r.rectAreaLTC2=R.LTC_FLOAT_2):(r.rectAreaLTC1=R.LTC_HALF_1,r.rectAreaLTC2=R.LTC_HALF_2)),r.ambient[0]=a,r.ambient[1]=o,r.ambient[2]=s;let y=r.hash;(y.directionalLength!==c||y.pointLength!==l||y.spotLength!==u||y.rectAreaLength!==d||y.hemiLength!==f||y.numDirectionalShadows!==p||y.numPointShadows!==m||y.numSpotShadows!==h||y.numSpotMaps!==g||y.numLightProbes!==v)&&(r.directional.length=c,r.spot.length=u,r.rectArea.length=d,r.point.length=l,r.hemi.length=f,r.directionalShadow.length=p,r.directionalShadowMap.length=p,r.pointShadow.length=m,r.pointShadowMap.length=m,r.spotShadow.length=h,r.spotShadowMap.length=h,r.directionalShadowMatrix.length=p,r.pointShadowMatrix.length=m,r.spotLightMatrix.length=h+g-_,r.spotLightMap.length=g,r.numSpotLightShadowsWithMaps=_,r.numLightProbes=v,y.directionalLength=c,y.pointLength=l,y.spotLength=u,y.rectAreaLength=d,y.hemiLength=f,y.numDirectionalShadows=p,y.numPointShadows=m,y.numSpotShadows=h,y.numSpotMaps=g,y.numLightProbes=v,r.version=Wo++)}function c(e,t){let n=0,s=0,c=0,l=0,u=0,d=t.matrixWorldInverse;for(let t=0,f=e.length;t<f;t++){let f=e[t];if(f.isDirectionalLight){let e=r.directional[n];e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),n++}else if(f.isSpotLight){let e=r.spot[c];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),e.direction.setFromMatrixPosition(f.matrixWorld),i.setFromMatrixPosition(f.target.matrixWorld),e.direction.sub(i),e.direction.transformDirection(d),c++}else if(f.isRectAreaLight){let e=r.rectArea[l];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),o.identity(),a.copy(f.matrixWorld),a.premultiply(d),o.extractRotation(a),e.halfWidth.set(f.width*.5,0,0),e.halfHeight.set(0,f.height*.5,0),e.halfWidth.applyMatrix4(o),e.halfHeight.applyMatrix4(o),l++}else if(f.isPointLight){let e=r.point[s];e.position.setFromMatrixPosition(f.matrixWorld),e.position.applyMatrix4(d),s++}else if(f.isHemisphereLight){let e=r.hemi[u];e.direction.setFromMatrixPosition(f.matrixWorld),e.direction.transformDirection(d),u++}}}return{setup:s,setupView:c,state:r}}function qo(e){let t=new Ko(e),n=[],r=[];function i(e){l.camera=e,n.length=0,r.length=0}function a(e){n.push(e)}function o(e){r.push(e)}function s(){t.setup(n)}function c(e){t.setupView(n,e)}let l={lightsArray:n,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:s,setupLightsView:c,pushLight:a,pushShadow:o}}function Jo(e){let t=new WeakMap;function n(n,r=0){let i=t.get(n),a;return i===void 0?(a=new qo(e),t.set(n,[a])):r>=i.length?(a=new qo(e),i.push(a)):a=i[r],a}function r(){t=new WeakMap}return{get:n,dispose:r}}var Yo=class extends ar{static get type(){return`MeshDepthMaterial`}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ze,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xo=class extends ar{static get type(){return`MeshDistanceMaterial`}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Zo=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qo=`uniform sampler2D shadow_pass;
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
}`;function $o(e,t,n){let i=new ai,a=new M,o=new M,s=new kt,c=new Yo({depthPacking:Be}),l=new Xo,u={},d=n.maxTextureSize,f={0:1,1:0,2:2},p=new Hr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new M},radius:{value:4}},vertexShader:Zo,fragmentShader:Qo}),m=p.clone();m.defines.HORIZONTAL_PASS=1;let h=new br;h.setAttribute(`position`,new lr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new I(h,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let v=this.type;this.render=function(t,n,c){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||t.length===0)return;let l=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.state;p.setBlending(0),p.buffers.color.setClear(1,1,1,1),p.buffers.depth.setTest(!0),p.setScissorTest(!1);let m=v!==3&&this.type===3,h=v===3&&this.type!==3;for(let l=0,u=t.length;l<u;l++){let u=t[l],f=u.shadow;if(f===void 0){console.warn(`THREE.WebGLShadowMap:`,u,`has no shadow.`);continue}if(f.autoUpdate===!1&&f.needsUpdate===!1)continue;a.copy(f.mapSize);let g=f.getFrameExtents();if(a.multiply(g),o.copy(f.mapSize),(a.x>d||a.y>d)&&(a.x>d&&(o.x=Math.floor(d/g.x),a.x=o.x*g.x,f.mapSize.x=o.x),a.y>d&&(o.y=Math.floor(d/g.y),a.y=o.y*g.y,f.mapSize.y=o.y)),f.map===null||m===!0||h===!0){let e=this.type===3?{}:{minFilter:r,magFilter:r};f.map!==null&&f.map.dispose(),f.map=new jt(a.x,a.y,e),f.map.texture.name=u.name+`.shadowMap`,f.camera.updateProjectionMatrix()}e.setRenderTarget(f.map),e.clear();let _=f.getViewportCount();for(let e=0;e<_;e++){let t=f.getViewport(e);s.set(o.x*t.x,o.y*t.y,o.x*t.z,o.y*t.w),p.viewport(s),f.updateMatrices(u,e),i=f.getFrustum(),x(n,c,f.camera,u,this.type)}f.isPointLightShadow!==!0&&this.type===3&&y(f,c),f.needsUpdate=!1}v=this.type,_.needsUpdate=!1,e.setRenderTarget(l,u,f)};function y(n,r){let i=t.update(g);p.defines.VSM_SAMPLES!==n.blurSamples&&(p.defines.VSM_SAMPLES=n.blurSamples,m.defines.VSM_SAMPLES=n.blurSamples,p.needsUpdate=!0,m.needsUpdate=!0),n.mapPass===null&&(n.mapPass=new jt(a.x,a.y)),p.uniforms.shadow_pass.value=n.map.texture,p.uniforms.resolution.value=n.mapSize,p.uniforms.radius.value=n.radius,e.setRenderTarget(n.mapPass),e.clear(),e.renderBufferDirect(r,null,i,p,g,null),m.uniforms.shadow_pass.value=n.mapPass.texture,m.uniforms.resolution.value=n.mapSize,m.uniforms.radius.value=n.radius,e.setRenderTarget(n.map),e.clear(),e.renderBufferDirect(r,null,i,m,g,null)}function b(t,n,r,i){let a=null,o=r.isPointLight===!0?t.customDistanceMaterial:t.customDepthMaterial;if(o!==void 0)a=o;else if(a=r.isPointLight===!0?l:c,e.localClippingEnabled&&n.clipShadows===!0&&Array.isArray(n.clippingPlanes)&&n.clippingPlanes.length!==0||n.displacementMap&&n.displacementScale!==0||n.alphaMap&&n.alphaTest>0||n.map&&n.alphaTest>0){let e=a.uuid,t=n.uuid,r=u[e];r===void 0&&(r={},u[e]=r);let i=r[t];i===void 0&&(i=a.clone(),r[t]=i,n.addEventListener(`dispose`,S)),a=i}if(a.visible=n.visible,a.wireframe=n.wireframe,i===3?a.side=n.shadowSide===null?n.side:n.shadowSide:a.side=n.shadowSide===null?f[n.side]:n.shadowSide,a.alphaMap=n.alphaMap,a.alphaTest=n.alphaTest,a.map=n.map,a.clipShadows=n.clipShadows,a.clippingPlanes=n.clippingPlanes,a.clipIntersection=n.clipIntersection,a.displacementMap=n.displacementMap,a.displacementScale=n.displacementScale,a.displacementBias=n.displacementBias,a.wireframeLinewidth=n.wireframeLinewidth,a.linewidth=n.linewidth,r.isPointLight===!0&&a.isMeshDistanceMaterial===!0){let t=e.properties.get(a);t.light=r}return a}function x(n,r,a,o,s){if(n.visible===!1)return;if(n.layers.test(r.layers)&&(n.isMesh||n.isLine||n.isPoints)&&(n.castShadow||n.receiveShadow&&s===3)&&(!n.frustumCulled||i.intersectsObject(n))){n.modelViewMatrix.multiplyMatrices(a.matrixWorldInverse,n.matrixWorld);let i=t.update(n),c=n.material;if(Array.isArray(c)){let t=i.groups;for(let l=0,u=t.length;l<u;l++){let u=t[l],d=c[u.materialIndex];if(d&&d.visible){let t=b(n,d,o,s);n.onBeforeShadow(e,n,r,a,i,t,u),e.renderBufferDirect(a,null,i,t,n,u),n.onAfterShadow(e,n,r,a,i,t,u)}}}else if(c.visible){let t=b(n,c,o,s);n.onBeforeShadow(e,n,r,a,i,t,null),e.renderBufferDirect(a,null,i,t,n,null),n.onAfterShadow(e,n,r,a,i,t,null)}}let c=n.children;for(let e=0,t=c.length;e<t;e++)x(c[e],r,a,o,s)}function S(e){e.target.removeEventListener(`dispose`,S);for(let t in u){let n=u[t],r=e.target.uuid;r in n&&(n[r].dispose(),delete n[r])}}}var es={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function ts(e,t){function n(){let t=!1,n=new kt,r=null,i=new kt(0,0,0,0);return{setMask:function(n){r!==n&&!t&&(e.colorMask(n,n,n,n),r=n)},setLocked:function(e){t=e},setClear:function(t,r,a,o,s){s===!0&&(t*=o,r*=o,a*=o),n.set(t,r,a,o),i.equals(n)===!1&&(e.clearColor(t,r,a,o),i.copy(n))},reset:function(){t=!1,r=null,i.set(-1,0,0,0)}}}function r(){let n=!1,r=!1,i=null,a=null,o=null;return{setReversed:function(e){if(r!==e){let e=t.get(`EXT_clip_control`);r?e.clipControlEXT(e.LOWER_LEFT_EXT,e.ZERO_TO_ONE_EXT):e.clipControlEXT(e.LOWER_LEFT_EXT,e.NEGATIVE_ONE_TO_ONE_EXT);let n=o;o=null,this.setClear(n)}r=e},getReversed:function(){return r},setTest:function(t){t?me(e.DEPTH_TEST):he(e.DEPTH_TEST)},setMask:function(t){i!==t&&!n&&(e.depthMask(t),i=t)},setFunc:function(t){if(r&&(t=es[t]),a!==t){switch(t){case 0:e.depthFunc(e.NEVER);break;case 1:e.depthFunc(e.ALWAYS);break;case 2:e.depthFunc(e.LESS);break;case 3:e.depthFunc(e.LEQUAL);break;case 4:e.depthFunc(e.EQUAL);break;case 5:e.depthFunc(e.GEQUAL);break;case 6:e.depthFunc(e.GREATER);break;case 7:e.depthFunc(e.NOTEQUAL);break;default:e.depthFunc(e.LEQUAL)}a=t}},setLocked:function(e){n=e},setClear:function(t){o!==t&&(r&&(t=1-t),e.clearDepth(t),o=t)},reset:function(){n=!1,i=null,a=null,o=null,r=!1}}}function i(){let t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null;return{setTest:function(n){t||(n?me(e.STENCIL_TEST):he(e.STENCIL_TEST))},setMask:function(r){n!==r&&!t&&(e.stencilMask(r),n=r)},setFunc:function(t,n,o){(r!==t||i!==n||a!==o)&&(e.stencilFunc(t,n,o),r=t,i=n,a=o)},setOp:function(t,n,r){(o!==t||s!==n||c!==r)&&(e.stencilOp(t,n,r),o=t,s=n,c=r)},setLocked:function(e){t=e},setClear:function(t){l!==t&&(e.clearStencil(t),l=t)},reset:function(){t=!1,n=null,r=null,i=null,a=null,o=null,s=null,c=null,l=null}}}let a=new n,o=new r,s=new i,c=new WeakMap,l=new WeakMap,u={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new F(0,0,0),w=0,T=!1,E=null,ee=null,te=null,D=null,ne=null,O=e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS),re=!1,ie=0,ae=e.getParameter(e.VERSION);ae.indexOf(`WebGL`)===-1?ae.indexOf(`OpenGL ES`)!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),re=ie>=2):(ie=parseFloat(/^WebGL (\d)/.exec(ae)[1]),re=ie>=1);let oe=null,se={},ce=e.getParameter(e.SCISSOR_BOX),le=e.getParameter(e.VIEWPORT),ue=new kt().fromArray(ce),de=new kt().fromArray(le);function fe(t,n,r,i){let a=new Uint8Array(4),o=e.createTexture();e.bindTexture(t,o),e.texParameteri(t,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(t,e.TEXTURE_MAG_FILTER,e.NEAREST);for(let o=0;o<r;o++)t===e.TEXTURE_3D||t===e.TEXTURE_2D_ARRAY?e.texImage3D(n,0,e.RGBA,1,1,i,0,e.RGBA,e.UNSIGNED_BYTE,a):e.texImage2D(n+o,0,e.RGBA,1,1,0,e.RGBA,e.UNSIGNED_BYTE,a);return o}let pe={};pe[e.TEXTURE_2D]=fe(e.TEXTURE_2D,e.TEXTURE_2D,1),pe[e.TEXTURE_CUBE_MAP]=fe(e.TEXTURE_CUBE_MAP,e.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[e.TEXTURE_2D_ARRAY]=fe(e.TEXTURE_2D_ARRAY,e.TEXTURE_2D_ARRAY,1,1),pe[e.TEXTURE_3D]=fe(e.TEXTURE_3D,e.TEXTURE_3D,1,1),a.setClear(0,0,0,1),o.setClear(1),s.setClear(0),me(e.DEPTH_TEST),o.setFunc(3),k(!1),Ce(1),me(e.CULL_FACE),xe(0);function me(t){u[t]!==!0&&(e.enable(t),u[t]=!0)}function he(t){u[t]!==!1&&(e.disable(t),u[t]=!1)}function ge(t,n){return d[t]!==n&&(e.bindFramebuffer(t,n),d[t]=n,t===e.DRAW_FRAMEBUFFER&&(d[e.FRAMEBUFFER]=n),t===e.FRAMEBUFFER&&(d[e.DRAW_FRAMEBUFFER]=n),!0)}function _e(t,n){let r=p,i=!1;if(t){r=f.get(n),r===void 0&&(r=[],f.set(n,r));let a=t.textures;if(r.length!==a.length||r[0]!==e.COLOR_ATTACHMENT0){for(let t=0,n=a.length;t<n;t++)r[t]=e.COLOR_ATTACHMENT0+t;r.length=a.length,i=!0}}else r[0]!==e.BACK&&(r[0]=e.BACK,i=!0);i&&e.drawBuffers(r)}function ve(t){return m!==t&&(e.useProgram(t),m=t,!0)}let ye={100:e.FUNC_ADD,101:e.FUNC_SUBTRACT,102:e.FUNC_REVERSE_SUBTRACT};ye[103]=e.MIN,ye[104]=e.MAX;let be={200:e.ZERO,201:e.ONE,202:e.SRC_COLOR,204:e.SRC_ALPHA,210:e.SRC_ALPHA_SATURATE,208:e.DST_COLOR,206:e.DST_ALPHA,203:e.ONE_MINUS_SRC_COLOR,205:e.ONE_MINUS_SRC_ALPHA,209:e.ONE_MINUS_DST_COLOR,207:e.ONE_MINUS_DST_ALPHA,211:e.CONSTANT_COLOR,212:e.ONE_MINUS_CONSTANT_COLOR,213:e.CONSTANT_ALPHA,214:e.ONE_MINUS_CONSTANT_ALPHA};function xe(t,n,r,i,a,o,s,c,l,u){if(t===0){h===!0&&(he(e.BLEND),h=!1);return}if(h===!1&&(me(e.BLEND),h=!0),t!==5){if(t!==g||u!==T){if((_!==100||b!==100)&&(e.blendEquation(e.FUNC_ADD),_=100,b=100),u)switch(t){case 1:e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.ONE,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFuncSeparate(e.ZERO,e.SRC_COLOR,e.ZERO,e.SRC_ALPHA);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}else switch(t){case 1:e.blendFuncSeparate(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA);break;case 2:e.blendFunc(e.SRC_ALPHA,e.ONE);break;case 3:e.blendFuncSeparate(e.ZERO,e.ONE_MINUS_SRC_COLOR,e.ZERO,e.ONE);break;case 4:e.blendFunc(e.ZERO,e.SRC_COLOR);break;default:console.error(`THREE.WebGLState: Invalid blending: `,t)}v=null,y=null,x=null,S=null,C.set(0,0,0),w=0,g=t,T=u}return}a||=n,o||=r,s||=i,(n!==_||a!==b)&&(e.blendEquationSeparate(ye[n],ye[a]),_=n,b=a),(r!==v||i!==y||o!==x||s!==S)&&(e.blendFuncSeparate(be[r],be[i],be[o],be[s]),v=r,y=i,x=o,S=s),(c.equals(C)===!1||l!==w)&&(e.blendColor(c.r,c.g,c.b,l),C.copy(c),w=l),g=t,T=!1}function Se(t,n){t.side===2?he(e.CULL_FACE):me(e.CULL_FACE);let r=t.side===1;n&&(r=!r),k(r),t.blending===1&&t.transparent===!1?xe(0):xe(t.blending,t.blendEquation,t.blendSrc,t.blendDst,t.blendEquationAlpha,t.blendSrcAlpha,t.blendDstAlpha,t.blendColor,t.blendAlpha,t.premultipliedAlpha),o.setFunc(t.depthFunc),o.setTest(t.depthTest),o.setMask(t.depthWrite),a.setMask(t.colorWrite);let i=t.stencilWrite;s.setTest(i),i&&(s.setMask(t.stencilWriteMask),s.setFunc(t.stencilFunc,t.stencilRef,t.stencilFuncMask),s.setOp(t.stencilFail,t.stencilZFail,t.stencilZPass)),Te(t.polygonOffset,t.polygonOffsetFactor,t.polygonOffsetUnits),t.alphaToCoverage===!0?me(e.SAMPLE_ALPHA_TO_COVERAGE):he(e.SAMPLE_ALPHA_TO_COVERAGE)}function k(t){E!==t&&(t?e.frontFace(e.CW):e.frontFace(e.CCW),E=t)}function Ce(t){t===0?he(e.CULL_FACE):(me(e.CULL_FACE),t!==ee&&(t===1?e.cullFace(e.BACK):t===2?e.cullFace(e.FRONT):e.cullFace(e.FRONT_AND_BACK))),ee=t}function we(t){t!==te&&(re&&e.lineWidth(t),te=t)}function Te(t,n,r){t?(me(e.POLYGON_OFFSET_FILL),(D!==n||ne!==r)&&(e.polygonOffset(n,r),D=n,ne=r)):he(e.POLYGON_OFFSET_FILL)}function A(t){t?me(e.SCISSOR_TEST):he(e.SCISSOR_TEST)}function Ee(t){t===void 0&&(t=e.TEXTURE0+O-1),oe!==t&&(e.activeTexture(t),oe=t)}function j(t,n,r){r===void 0&&(r=oe===null?e.TEXTURE0+O-1:oe);let i=se[r];i===void 0&&(i={type:void 0,texture:void 0},se[r]=i),(i.type!==t||i.texture!==n)&&(oe!==r&&(e.activeTexture(r),oe=r),e.bindTexture(t,n||pe[t]),i.type=t,i.texture=n)}function De(){let t=se[oe];t!==void 0&&t.type!==void 0&&(e.bindTexture(t.type,null),t.type=void 0,t.texture=void 0)}function Oe(){try{e.compressedTexImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function ke(){try{e.compressedTexImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ae(){try{e.texSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function je(){try{e.texSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Me(){try{e.compressedTexSubImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ne(){try{e.compressedTexSubImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Pe(){try{e.texStorage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Fe(){try{e.texStorage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Ie(){try{e.texImage2D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Le(){try{e.texImage3D.apply(e,arguments)}catch(e){console.error(`THREE.WebGLState:`,e)}}function Re(t){ue.equals(t)===!1&&(e.scissor(t.x,t.y,t.z,t.w),ue.copy(t))}function ze(t){de.equals(t)===!1&&(e.viewport(t.x,t.y,t.z,t.w),de.copy(t))}function Be(t,n){let r=l.get(n);r===void 0&&(r=new WeakMap,l.set(n,r));let i=r.get(t);i===void 0&&(i=e.getUniformBlockIndex(n,t.name),r.set(t,i))}function Ve(t,n){let r=l.get(n).get(t);c.get(n)!==r&&(e.uniformBlockBinding(n,r,t.__bindingPointIndex),c.set(n,r))}function He(){e.disable(e.BLEND),e.disable(e.CULL_FACE),e.disable(e.DEPTH_TEST),e.disable(e.POLYGON_OFFSET_FILL),e.disable(e.SCISSOR_TEST),e.disable(e.STENCIL_TEST),e.disable(e.SAMPLE_ALPHA_TO_COVERAGE),e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ZERO),e.blendFuncSeparate(e.ONE,e.ZERO,e.ONE,e.ZERO),e.blendColor(0,0,0,0),e.colorMask(!0,!0,!0,!0),e.clearColor(0,0,0,0),e.depthMask(!0),e.depthFunc(e.LESS),o.setReversed(!1),e.clearDepth(1),e.stencilMask(4294967295),e.stencilFunc(e.ALWAYS,0,4294967295),e.stencilOp(e.KEEP,e.KEEP,e.KEEP),e.clearStencil(0),e.cullFace(e.BACK),e.frontFace(e.CCW),e.polygonOffset(0,0),e.activeTexture(e.TEXTURE0),e.bindFramebuffer(e.FRAMEBUFFER,null),e.bindFramebuffer(e.DRAW_FRAMEBUFFER,null),e.bindFramebuffer(e.READ_FRAMEBUFFER,null),e.useProgram(null),e.lineWidth(1),e.scissor(0,0,e.canvas.width,e.canvas.height),e.viewport(0,0,e.canvas.width,e.canvas.height),u={},oe=null,se={},d={},f=new WeakMap,p=[],m=null,h=!1,g=null,_=null,v=null,y=null,b=null,x=null,S=null,C=new F(0,0,0),w=0,T=!1,E=null,ee=null,te=null,D=null,ne=null,ue.set(0,0,e.canvas.width,e.canvas.height),de.set(0,0,e.canvas.width,e.canvas.height),a.reset(),o.reset(),s.reset()}return{buffers:{color:a,depth:o,stencil:s},enable:me,disable:he,bindFramebuffer:ge,drawBuffers:_e,useProgram:ve,setBlending:xe,setMaterial:Se,setFlipSided:k,setCullFace:Ce,setLineWidth:we,setPolygonOffset:Te,setScissorTest:A,activeTexture:Ee,bindTexture:j,unbindTexture:De,compressedTexImage2D:Oe,compressedTexImage3D:ke,texImage2D:Ie,texImage3D:Le,updateUBOMapping:Be,uniformBlockBinding:Ve,texStorage2D:Pe,texStorage3D:Fe,texSubImage2D:Ae,texSubImage3D:je,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ne,scissor:Re,viewport:ze,reset:He}}function ns(e,t,n,r){let i=rs(r);switch(n){case x:return e*t;case w:return e*t;case T:return e*t*2;case te:return e*t/i.components*i.byteLength;case D:return e*t/i.components*i.byteLength;case ne:return e*t*2/i.components*i.byteLength;case O:return e*t*2/i.components*i.byteLength;case S:return e*t*3/i.components*i.byteLength;case C:return e*t*4/i.components*i.byteLength;case re:return e*t*4/i.components*i.byteLength;case ie:case ae:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case oe:case se:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case le:case de:return Math.max(e,16)*Math.max(t,8)/4;case ce:case ue:return Math.max(e,8)*Math.max(t,8)/2;case fe:case pe:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*8;case me:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case he:return Math.floor((e+3)/4)*Math.floor((t+3)/4)*16;case ge:return Math.floor((e+4)/5)*Math.floor((t+3)/4)*16;case _e:return Math.floor((e+4)/5)*Math.floor((t+4)/5)*16;case ve:return Math.floor((e+5)/6)*Math.floor((t+4)/5)*16;case ye:return Math.floor((e+5)/6)*Math.floor((t+5)/6)*16;case be:return Math.floor((e+7)/8)*Math.floor((t+4)/5)*16;case xe:return Math.floor((e+7)/8)*Math.floor((t+5)/6)*16;case Se:return Math.floor((e+7)/8)*Math.floor((t+7)/8)*16;case k:return Math.floor((e+9)/10)*Math.floor((t+4)/5)*16;case Ce:return Math.floor((e+9)/10)*Math.floor((t+5)/6)*16;case we:return Math.floor((e+9)/10)*Math.floor((t+7)/8)*16;case Te:return Math.floor((e+9)/10)*Math.floor((t+9)/10)*16;case A:return Math.floor((e+11)/12)*Math.floor((t+9)/10)*16;case Ee:return Math.floor((e+11)/12)*Math.floor((t+11)/12)*16;case j:case De:case Oe:return Math.ceil(e/4)*Math.ceil(t/4)*16;case ke:case Ae:return Math.ceil(e/4)*Math.ceil(t/4)*8;case je:case Me:return Math.ceil(e/4)*Math.ceil(t/4)*16}throw Error(`Unable to determine texture byte length for ${n} format.`)}function rs(e){switch(e){case l:case u:return{byteLength:1,components:1};case f:case d:case g:return{byteLength:2,components:1};case _:case v:return{byteLength:2,components:4};case m:case p:case h:return{byteLength:4,components:1};case b:return{byteLength:4,components:3}}throw Error(`Unknown texture type ${e}.`)}function is(l,u,d,f,p,m,h){let g=u.has(`WEBGL_multisampled_render_to_texture`)?u.get(`WEBGL_multisampled_render_to_texture`):null,_=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),v=new M,y=new WeakMap,b,x=new WeakMap,S=!1;try{S=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function C(e,t){return S?new OffscreenCanvas(e,t):st(`canvas`)}function w(e,t,n){let r=1,i=Pe(e);if((i.width>n||i.height>n)&&(r=n/Math.max(i.width,i.height)),r<1){if(typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&e instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&e instanceof ImageBitmap||typeof VideoFrame<`u`&&e instanceof VideoFrame){let n=Math.floor(r*i.width),a=Math.floor(r*i.height);b===void 0&&(b=C(n,a));let o=t?C(n,a):b;return o.width=n,o.height=a,o.getContext(`2d`).drawImage(e,0,0,n,a),console.warn(`THREE.WebGLRenderer: Texture has been resized from (`+i.width+`x`+i.height+`) to (`+n+`x`+a+`).`),o}return`data`in e&&console.warn(`THREE.WebGLRenderer: Image in DataTexture is too big (`+i.width+`x`+i.height+`).`),e}return e}function T(e){return e.generateMipmaps}function E(e){l.generateMipmap(e)}function te(e){return e.isWebGLCubeRenderTarget?l.TEXTURE_CUBE_MAP:e.isWebGL3DRenderTarget?l.TEXTURE_3D:e.isWebGLArrayRenderTarget||e.isCompressedArrayTexture?l.TEXTURE_2D_ARRAY:l.TEXTURE_2D}function D(e,t,n,r,i=!1){if(e!==null){if(l[e]!==void 0)return l[e];console.warn(`THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '`+e+`'`)}let a=t;if(t===l.RED&&(n===l.FLOAT&&(a=l.R32F),n===l.HALF_FLOAT&&(a=l.R16F),n===l.UNSIGNED_BYTE&&(a=l.R8)),t===l.RED_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.R8UI),n===l.UNSIGNED_SHORT&&(a=l.R16UI),n===l.UNSIGNED_INT&&(a=l.R32UI),n===l.BYTE&&(a=l.R8I),n===l.SHORT&&(a=l.R16I),n===l.INT&&(a=l.R32I)),t===l.RG&&(n===l.FLOAT&&(a=l.RG32F),n===l.HALF_FLOAT&&(a=l.RG16F),n===l.UNSIGNED_BYTE&&(a=l.RG8)),t===l.RG_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RG8UI),n===l.UNSIGNED_SHORT&&(a=l.RG16UI),n===l.UNSIGNED_INT&&(a=l.RG32UI),n===l.BYTE&&(a=l.RG8I),n===l.SHORT&&(a=l.RG16I),n===l.INT&&(a=l.RG32I)),t===l.RGB_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGB8UI),n===l.UNSIGNED_SHORT&&(a=l.RGB16UI),n===l.UNSIGNED_INT&&(a=l.RGB32UI),n===l.BYTE&&(a=l.RGB8I),n===l.SHORT&&(a=l.RGB16I),n===l.INT&&(a=l.RGB32I)),t===l.RGBA_INTEGER&&(n===l.UNSIGNED_BYTE&&(a=l.RGBA8UI),n===l.UNSIGNED_SHORT&&(a=l.RGBA16UI),n===l.UNSIGNED_INT&&(a=l.RGBA32UI),n===l.BYTE&&(a=l.RGBA8I),n===l.SHORT&&(a=l.RGBA16I),n===l.INT&&(a=l.RGBA32I)),t===l.RGB&&n===l.UNSIGNED_INT_5_9_9_9_REV&&(a=l.RGB9_E5),t===l.RGBA){let e=i?Ue:mt.getTransfer(r);n===l.FLOAT&&(a=l.RGBA32F),n===l.HALF_FLOAT&&(a=l.RGBA16F),n===l.UNSIGNED_BYTE&&(a=e===`srgb`?l.SRGB8_ALPHA8:l.RGBA8),n===l.UNSIGNED_SHORT_4_4_4_4&&(a=l.RGBA4),n===l.UNSIGNED_SHORT_5_5_5_1&&(a=l.RGB5_A1)}return(a===l.R16F||a===l.R32F||a===l.RG16F||a===l.RG32F||a===l.RGBA16F||a===l.RGBA32F)&&u.get(`EXT_color_buffer_float`),a}function ne(e,t){let n;return e?t===null||t===1014||t===1020?n=l.DEPTH24_STENCIL8:t===1015?n=l.DEPTH32F_STENCIL8:t===1012&&(n=l.DEPTH24_STENCIL8,console.warn(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):t===null||t===1014||t===1020?n=l.DEPTH_COMPONENT24:t===1015?n=l.DEPTH_COMPONENT32F:t===1012&&(n=l.DEPTH_COMPONENT16),n}function O(e,t){return T(e)===!0||e.isFramebufferTexture&&e.minFilter!==1003&&e.minFilter!==1006?Math.log2(Math.max(t.width,t.height))+1:e.mipmaps!==void 0&&e.mipmaps.length>0?e.mipmaps.length:e.isCompressedTexture&&Array.isArray(e.image)?t.mipmaps.length:1}function re(e){let t=e.target;t.removeEventListener(`dispose`,re),ae(t),t.isVideoTexture&&y.delete(t)}function ie(e){let t=e.target;t.removeEventListener(`dispose`,ie),se(t)}function ae(e){let t=f.get(e);if(t.__webglInit===void 0)return;let n=e.source,r=x.get(n);if(r){let i=r[t.__cacheKey];i.usedTimes--,i.usedTimes===0&&oe(e),Object.keys(r).length===0&&x.delete(n)}f.remove(e)}function oe(e){let t=f.get(e);l.deleteTexture(t.__webglTexture);let n=e.source,r=x.get(n);delete r[t.__cacheKey],h.memory.textures--}function se(e){let t=f.get(e);if(e.depthTexture&&(e.depthTexture.dispose(),f.remove(e.depthTexture)),e.isWebGLCubeRenderTarget)for(let e=0;e<6;e++){if(Array.isArray(t.__webglFramebuffer[e]))for(let n=0;n<t.__webglFramebuffer[e].length;n++)l.deleteFramebuffer(t.__webglFramebuffer[e][n]);else l.deleteFramebuffer(t.__webglFramebuffer[e]);t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer[e])}else{if(Array.isArray(t.__webglFramebuffer))for(let e=0;e<t.__webglFramebuffer.length;e++)l.deleteFramebuffer(t.__webglFramebuffer[e]);else l.deleteFramebuffer(t.__webglFramebuffer);if(t.__webglDepthbuffer&&l.deleteRenderbuffer(t.__webglDepthbuffer),t.__webglMultisampledFramebuffer&&l.deleteFramebuffer(t.__webglMultisampledFramebuffer),t.__webglColorRenderbuffer)for(let e=0;e<t.__webglColorRenderbuffer.length;e++)t.__webglColorRenderbuffer[e]&&l.deleteRenderbuffer(t.__webglColorRenderbuffer[e]);t.__webglDepthRenderbuffer&&l.deleteRenderbuffer(t.__webglDepthRenderbuffer)}let n=e.textures;for(let e=0,t=n.length;e<t;e++){let t=f.get(n[e]);t.__webglTexture&&(l.deleteTexture(t.__webglTexture),h.memory.textures--),f.remove(n[e])}f.remove(e)}let ce=0;function le(){ce=0}function ue(){let e=ce;return e>=p.maxTextures&&console.warn(`THREE.WebGLTextures: Trying to use `+e+` texture units while this GPU supports only `+p.maxTextures),ce+=1,e}function de(e){let t=[];return t.push(e.wrapS),t.push(e.wrapT),t.push(e.wrapR||0),t.push(e.magFilter),t.push(e.minFilter),t.push(e.anisotropy),t.push(e.internalFormat),t.push(e.format),t.push(e.type),t.push(e.generateMipmaps),t.push(e.premultiplyAlpha),t.push(e.flipY),t.push(e.unpackAlignment),t.push(e.colorSpace),t.join()}function fe(e,t){let n=f.get(e);if(e.isVideoTexture&&Me(e),e.isRenderTargetTexture===!1&&e.version>0&&n.__version!==e.version){let r=e.image;if(r===null)console.warn(`THREE.WebGLRenderer: Texture marked for update but no image data found.`);else if(r.complete===!1)console.warn(`THREE.WebGLRenderer: Texture marked for update but image is incomplete`);else{xe(n,e,t);return}}d.bindTexture(l.TEXTURE_2D,n.__webglTexture,l.TEXTURE0+t)}function pe(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){xe(n,e,t);return}d.bindTexture(l.TEXTURE_2D_ARRAY,n.__webglTexture,l.TEXTURE0+t)}function me(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){xe(n,e,t);return}d.bindTexture(l.TEXTURE_3D,n.__webglTexture,l.TEXTURE0+t)}function he(e,t){let n=f.get(e);if(e.version>0&&n.__version!==e.version){Se(n,e,t);return}d.bindTexture(l.TEXTURE_CUBE_MAP,n.__webglTexture,l.TEXTURE0+t)}let ge={[e]:l.REPEAT,[t]:l.CLAMP_TO_EDGE,[n]:l.MIRRORED_REPEAT},_e={[r]:l.NEAREST,[i]:l.NEAREST_MIPMAP_NEAREST,[a]:l.NEAREST_MIPMAP_LINEAR,[o]:l.LINEAR,[s]:l.LINEAR_MIPMAP_NEAREST,[c]:l.LINEAR_MIPMAP_LINEAR},ve={512:l.NEVER,519:l.ALWAYS,513:l.LESS,515:l.LEQUAL,514:l.EQUAL,518:l.GEQUAL,516:l.GREATER,517:l.NOTEQUAL};function ye(e,t){if(t.type===1015&&u.has(`OES_texture_float_linear`)===!1&&(t.magFilter===1006||t.magFilter===1007||t.magFilter===1005||t.magFilter===1008||t.minFilter===1006||t.minFilter===1007||t.minFilter===1005||t.minFilter===1008)&&console.warn(`THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),l.texParameteri(e,l.TEXTURE_WRAP_S,ge[t.wrapS]),l.texParameteri(e,l.TEXTURE_WRAP_T,ge[t.wrapT]),(e===l.TEXTURE_3D||e===l.TEXTURE_2D_ARRAY)&&l.texParameteri(e,l.TEXTURE_WRAP_R,ge[t.wrapR]),l.texParameteri(e,l.TEXTURE_MAG_FILTER,_e[t.magFilter]),l.texParameteri(e,l.TEXTURE_MIN_FILTER,_e[t.minFilter]),t.compareFunction&&(l.texParameteri(e,l.TEXTURE_COMPARE_MODE,l.COMPARE_REF_TO_TEXTURE),l.texParameteri(e,l.TEXTURE_COMPARE_FUNC,ve[t.compareFunction])),u.has(`EXT_texture_filter_anisotropic`)===!0){if(t.magFilter===1003||t.minFilter!==1005&&t.minFilter!==1008||t.type===1015&&u.has(`OES_texture_float_linear`)===!1)return;if(t.anisotropy>1||f.get(t).__currentAnisotropy){let n=u.get(`EXT_texture_filter_anisotropic`);l.texParameterf(e,n.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(t.anisotropy,p.getMaxAnisotropy())),f.get(t).__currentAnisotropy=t.anisotropy}}}function be(e,t){let n=!1;e.__webglInit===void 0&&(e.__webglInit=!0,t.addEventListener(`dispose`,re));let r=t.source,i=x.get(r);i===void 0&&(i={},x.set(r,i));let a=de(t);if(a!==e.__cacheKey){i[a]===void 0&&(i[a]={texture:l.createTexture(),usedTimes:0},h.memory.textures++,n=!0),i[a].usedTimes++;let r=i[e.__cacheKey];r!==void 0&&(i[e.__cacheKey].usedTimes--,r.usedTimes===0&&oe(t)),e.__cacheKey=a,e.__webglTexture=i[a].texture}return n}function xe(e,t,n){let r=l.TEXTURE_2D;(t.isDataArrayTexture||t.isCompressedArrayTexture)&&(r=l.TEXTURE_2D_ARRAY),t.isData3DTexture&&(r=l.TEXTURE_3D);let i=be(e,t),a=t.source;d.bindTexture(r,e.__webglTexture,l.TEXTURE0+n);let o=f.get(a);if(a.version!==o.__version||i===!0){d.activeTexture(l.TEXTURE0+n);let e=mt.getPrimaries(mt.workingColorSpace),s=t.colorSpace===``?null:mt.getPrimaries(t.colorSpace),c=t.colorSpace===``||e===s?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,c);let u=w(t.image,!1,p.maxTextureSize);u=Ne(t,u);let f=m.convert(t.format,t.colorSpace),h=m.convert(t.type),g=D(t.internalFormat,f,h,t.colorSpace,t.isVideoTexture);ye(r,t);let _,v=t.mipmaps,y=t.isVideoTexture!==!0,b=o.__version===void 0||i===!0,x=a.dataReady,S=O(t,u);if(t.isDepthTexture)g=ne(t.format===ee,t.type),b&&(y?d.texStorage2D(l.TEXTURE_2D,1,g,u.width,u.height):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,null));else if(t.isDataTexture){if(v.length>0){y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data);t.generateMipmaps=!1}else y?(b&&d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height),x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,u.width,u.height,f,h,u.data)):d.texImage2D(l.TEXTURE_2D,0,g,u.width,u.height,0,f,h,u.data)}else if(t.isCompressedTexture){if(t.isCompressedArrayTexture){y&&b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,v[0].width,v[0].height,u.depth);for(let e=0,n=v.length;e<n;e++)if(_=v[e],t.format!==1023){if(f!==null){if(y){if(x){if(t.layerUpdates.size>0){let n=ns(_.width,_.height,t.format,t.type);for(let r of t.layerUpdates){let t=_.data.subarray(r*n/_.data.BYTES_PER_ELEMENT,(r+1)*n/_.data.BYTES_PER_ELEMENT);d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,r,_.width,_.height,1,f,t)}t.clearLayerUpdates()}else d.compressedTexSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,_.data)}}else d.compressedTexImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,_.data,0,0)}else console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`)}else y?x&&d.texSubImage3D(l.TEXTURE_2D_ARRAY,e,0,0,0,_.width,_.height,u.depth,f,h,_.data):d.texImage3D(l.TEXTURE_2D_ARRAY,e,g,_.width,_.height,u.depth,0,f,h,_.data)}else{y&&b&&d.texStorage2D(l.TEXTURE_2D,S,g,v[0].width,v[0].height);for(let e=0,n=v.length;e<n;e++)_=v[e],t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,h,_.data):d.texImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,f,h,_.data):f===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_2D,e,0,0,_.width,_.height,f,_.data):d.compressedTexImage2D(l.TEXTURE_2D,e,g,_.width,_.height,0,_.data)}}else if(t.isDataArrayTexture){if(y){if(b&&d.texStorage3D(l.TEXTURE_2D_ARRAY,S,g,u.width,u.height,u.depth),x){if(t.layerUpdates.size>0){let e=ns(u.width,u.height,t.format,t.type);for(let n of t.layerUpdates){let t=u.data.subarray(n*e/u.data.BYTES_PER_ELEMENT,(n+1)*e/u.data.BYTES_PER_ELEMENT);d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,n,u.width,u.height,1,f,h,t)}t.clearLayerUpdates()}else d.texSubImage3D(l.TEXTURE_2D_ARRAY,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)}}else d.texImage3D(l.TEXTURE_2D_ARRAY,0,g,u.width,u.height,u.depth,0,f,h,u.data)}else if(t.isData3DTexture)y?(b&&d.texStorage3D(l.TEXTURE_3D,S,g,u.width,u.height,u.depth),x&&d.texSubImage3D(l.TEXTURE_3D,0,0,0,0,u.width,u.height,u.depth,f,h,u.data)):d.texImage3D(l.TEXTURE_3D,0,g,u.width,u.height,u.depth,0,f,h,u.data);else if(t.isFramebufferTexture){if(b){if(y)d.texStorage2D(l.TEXTURE_2D,S,g,u.width,u.height);else{let e=u.width,t=u.height;for(let n=0;n<S;n++)d.texImage2D(l.TEXTURE_2D,n,g,e,t,0,f,h,null),e>>=1,t>>=1}}}else if(v.length>0){if(y&&b){let e=Pe(v[0]);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}for(let e=0,t=v.length;e<t;e++)_=v[e],y?x&&d.texSubImage2D(l.TEXTURE_2D,e,0,0,f,h,_):d.texImage2D(l.TEXTURE_2D,e,g,f,h,_);t.generateMipmaps=!1}else if(y){if(b){let e=Pe(u);d.texStorage2D(l.TEXTURE_2D,S,g,e.width,e.height)}x&&d.texSubImage2D(l.TEXTURE_2D,0,0,0,f,h,u)}else d.texImage2D(l.TEXTURE_2D,0,g,f,h,u);T(t)&&E(r),o.__version=a.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function Se(e,t,n){if(t.image.length!==6)return;let r=be(e,t),i=t.source;d.bindTexture(l.TEXTURE_CUBE_MAP,e.__webglTexture,l.TEXTURE0+n);let a=f.get(i);if(i.version!==a.__version||r===!0){d.activeTexture(l.TEXTURE0+n);let e=mt.getPrimaries(mt.workingColorSpace),o=t.colorSpace===``?null:mt.getPrimaries(t.colorSpace),s=t.colorSpace===``||e===o?l.NONE:l.BROWSER_DEFAULT_WEBGL;l.pixelStorei(l.UNPACK_FLIP_Y_WEBGL,t.flipY),l.pixelStorei(l.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),l.pixelStorei(l.UNPACK_ALIGNMENT,t.unpackAlignment),l.pixelStorei(l.UNPACK_COLORSPACE_CONVERSION_WEBGL,s);let c=t.isCompressedTexture||t.image[0].isCompressedTexture,u=t.image[0]&&t.image[0].isDataTexture,f=[];for(let e=0;e<6;e++)!c&&!u?f[e]=w(t.image[e],!0,p.maxCubemapSize):f[e]=u?t.image[e].image:t.image[e],f[e]=Ne(t,f[e]);let h=f[0],g=m.convert(t.format,t.colorSpace),_=m.convert(t.type),v=D(t.internalFormat,g,_,t.colorSpace),y=t.isVideoTexture!==!0,b=a.__version===void 0||r===!0,x=i.dataReady,S=O(t,h);ye(l.TEXTURE_CUBE_MAP,t);let C;if(c){y&&b&&d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,h.width,h.height);for(let e=0;e<6;e++){C=f[e].mipmaps;for(let n=0;n<C.length;n++){let r=C[n];t.format===1023?y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,_,r.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,g,_,r.data):g===null?console.warn(`THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):y?x&&d.compressedTexSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,0,0,r.width,r.height,g,r.data):d.compressedTexImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,n,v,r.width,r.height,0,r.data)}}}else{if(C=t.mipmaps,y&&b){C.length>0&&S++;let e=Pe(f[0]);d.texStorage2D(l.TEXTURE_CUBE_MAP,S,v,e.width,e.height)}for(let e=0;e<6;e++)if(u){y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,f[e].width,f[e].height,g,_,f[e].data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,f[e].width,f[e].height,0,g,_,f[e].data);for(let t=0;t<C.length;t++){let n=C[t].image[e].image;y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,n.width,n.height,g,_,n.data):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,n.width,n.height,0,g,_,n.data)}}else{y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,0,0,g,_,f[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,0,v,g,_,f[e]);for(let t=0;t<C.length;t++){let n=C[t];y?x&&d.texSubImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,0,0,g,_,n.image[e]):d.texImage2D(l.TEXTURE_CUBE_MAP_POSITIVE_X+e,t+1,v,g,_,n.image[e])}}}T(t)&&E(l.TEXTURE_CUBE_MAP),a.__version=i.version,t.onUpdate&&t.onUpdate(t)}e.__version=t.version}function k(e,t,n,r,i,a){let o=m.convert(n.format,n.colorSpace),s=m.convert(n.type),c=D(n.internalFormat,o,s,n.colorSpace),u=f.get(t),p=f.get(n);if(p.__renderTarget=t,!u.__hasExternalTextures){let e=Math.max(1,t.width>>a),n=Math.max(1,t.height>>a);i===l.TEXTURE_3D||i===l.TEXTURE_2D_ARRAY?d.texImage3D(i,a,c,e,n,t.depth,0,o,s,null):d.texImage2D(i,a,c,e,n,0,o,s,null)}d.bindFramebuffer(l.FRAMEBUFFER,e),je(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,r,i,p.__webglTexture,0,Ae(t)):(i===l.TEXTURE_2D||i>=l.TEXTURE_CUBE_MAP_POSITIVE_X&&i<=l.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&l.framebufferTexture2D(l.FRAMEBUFFER,r,i,p.__webglTexture,a),d.bindFramebuffer(l.FRAMEBUFFER,null)}function Ce(e,t,n){if(l.bindRenderbuffer(l.RENDERBUFFER,e),t.depthBuffer){let r=t.depthTexture,i=r&&r.isDepthTexture?r.type:null,a=ne(t.stencilBuffer,i),o=t.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,s=Ae(t);je(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,s,a,t.width,t.height):n?l.renderbufferStorageMultisample(l.RENDERBUFFER,s,a,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,a,t.width,t.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,o,l.RENDERBUFFER,e)}else{let e=t.textures;for(let r=0;r<e.length;r++){let i=e[r],a=m.convert(i.format,i.colorSpace),o=m.convert(i.type),s=D(i.internalFormat,a,o,i.colorSpace),c=Ae(t);n&&je(t)===!1?l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,t.width,t.height):je(t)?g.renderbufferStorageMultisampleEXT(l.RENDERBUFFER,c,s,t.width,t.height):l.renderbufferStorage(l.RENDERBUFFER,s,t.width,t.height)}}l.bindRenderbuffer(l.RENDERBUFFER,null)}function we(e,t){if(t&&t.isWebGLCubeRenderTarget)throw Error(`Depth Texture with cube render targets is not supported`);if(d.bindFramebuffer(l.FRAMEBUFFER,e),!(t.depthTexture&&t.depthTexture.isDepthTexture))throw Error(`renderTarget.depthTexture must be an instance of THREE.DepthTexture`);let n=f.get(t.depthTexture);n.__renderTarget=t,(!n.__webglTexture||t.depthTexture.image.width!==t.width||t.depthTexture.image.height!==t.height)&&(t.depthTexture.image.width=t.width,t.depthTexture.image.height=t.height,t.depthTexture.needsUpdate=!0),fe(t.depthTexture,0);let r=n.__webglTexture,i=Ae(t);if(t.depthTexture.format===1026)je(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,r,0,i):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_ATTACHMENT,l.TEXTURE_2D,r,0);else if(t.depthTexture.format===1027)je(t)?g.framebufferTexture2DMultisampleEXT(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,r,0,i):l.framebufferTexture2D(l.FRAMEBUFFER,l.DEPTH_STENCIL_ATTACHMENT,l.TEXTURE_2D,r,0);else throw Error(`Unknown depthTexture format`)}function Te(e){let t=f.get(e),n=e.isWebGLCubeRenderTarget===!0;if(t.__boundDepthTexture!==e.depthTexture){let n=e.depthTexture;if(t.__depthDisposeCallback&&t.__depthDisposeCallback(),n){let e=()=>{delete t.__boundDepthTexture,delete t.__depthDisposeCallback,n.removeEventListener(`dispose`,e)};n.addEventListener(`dispose`,e),t.__depthDisposeCallback=e}t.__boundDepthTexture=n}if(e.depthTexture&&!t.__autoAllocateDepthBuffer){if(n)throw Error(`target.depthTexture not supported in Cube render targets`);we(t.__webglFramebuffer,e)}else if(n){t.__webglDepthbuffer=[];for(let n=0;n<6;n++)if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer[n]),t.__webglDepthbuffer[n]===void 0)t.__webglDepthbuffer[n]=l.createRenderbuffer(),Ce(t.__webglDepthbuffer[n],e,!1);else{let r=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,i=t.__webglDepthbuffer[n];l.bindRenderbuffer(l.RENDERBUFFER,i),l.framebufferRenderbuffer(l.FRAMEBUFFER,r,l.RENDERBUFFER,i)}}else if(d.bindFramebuffer(l.FRAMEBUFFER,t.__webglFramebuffer),t.__webglDepthbuffer===void 0)t.__webglDepthbuffer=l.createRenderbuffer(),Ce(t.__webglDepthbuffer,e,!1);else{let n=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,r=t.__webglDepthbuffer;l.bindRenderbuffer(l.RENDERBUFFER,r),l.framebufferRenderbuffer(l.FRAMEBUFFER,n,l.RENDERBUFFER,r)}d.bindFramebuffer(l.FRAMEBUFFER,null)}function A(e,t,n){let r=f.get(e);t!==void 0&&k(r.__webglFramebuffer,e,e.texture,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,0),n!==void 0&&Te(e)}function Ee(e){let t=e.texture,n=f.get(e),r=f.get(t);e.addEventListener(`dispose`,ie);let i=e.textures,a=e.isWebGLCubeRenderTarget===!0,o=i.length>1;if(o||(r.__webglTexture===void 0&&(r.__webglTexture=l.createTexture()),r.__version=t.version,h.memory.textures++),a){n.__webglFramebuffer=[];for(let e=0;e<6;e++)if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer[e]=[];for(let r=0;r<t.mipmaps.length;r++)n.__webglFramebuffer[e][r]=l.createFramebuffer()}else n.__webglFramebuffer[e]=l.createFramebuffer()}else{if(t.mipmaps&&t.mipmaps.length>0){n.__webglFramebuffer=[];for(let e=0;e<t.mipmaps.length;e++)n.__webglFramebuffer[e]=l.createFramebuffer()}else n.__webglFramebuffer=l.createFramebuffer();if(o)for(let e=0,t=i.length;e<t;e++){let t=f.get(i[e]);t.__webglTexture===void 0&&(t.__webglTexture=l.createTexture(),h.memory.textures++)}if(e.samples>0&&je(e)===!1){n.__webglMultisampledFramebuffer=l.createFramebuffer(),n.__webglColorRenderbuffer=[],d.bindFramebuffer(l.FRAMEBUFFER,n.__webglMultisampledFramebuffer);for(let t=0;t<i.length;t++){let r=i[t];n.__webglColorRenderbuffer[t]=l.createRenderbuffer(),l.bindRenderbuffer(l.RENDERBUFFER,n.__webglColorRenderbuffer[t]);let a=m.convert(r.format,r.colorSpace),o=m.convert(r.type),s=D(r.internalFormat,a,o,r.colorSpace,e.isXRRenderTarget===!0),c=Ae(e);l.renderbufferStorageMultisample(l.RENDERBUFFER,c,s,e.width,e.height),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+t,l.RENDERBUFFER,n.__webglColorRenderbuffer[t])}l.bindRenderbuffer(l.RENDERBUFFER,null),e.depthBuffer&&(n.__webglDepthRenderbuffer=l.createRenderbuffer(),Ce(n.__webglDepthRenderbuffer,e,!0)),d.bindFramebuffer(l.FRAMEBUFFER,null)}}if(a){d.bindTexture(l.TEXTURE_CUBE_MAP,r.__webglTexture),ye(l.TEXTURE_CUBE_MAP,t);for(let r=0;r<6;r++)if(t.mipmaps&&t.mipmaps.length>0)for(let i=0;i<t.mipmaps.length;i++)k(n.__webglFramebuffer[r][i],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,i);else k(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,l.TEXTURE_CUBE_MAP_POSITIVE_X+r,0);T(t)&&E(l.TEXTURE_CUBE_MAP),d.unbindTexture()}else if(o){for(let t=0,r=i.length;t<r;t++){let r=i[t],a=f.get(r);d.bindTexture(l.TEXTURE_2D,a.__webglTexture),ye(l.TEXTURE_2D,r),k(n.__webglFramebuffer,e,r,l.COLOR_ATTACHMENT0+t,l.TEXTURE_2D,0),T(r)&&E(l.TEXTURE_2D)}d.unbindTexture()}else{let i=l.TEXTURE_2D;if((e.isWebGL3DRenderTarget||e.isWebGLArrayRenderTarget)&&(i=e.isWebGL3DRenderTarget?l.TEXTURE_3D:l.TEXTURE_2D_ARRAY),d.bindTexture(i,r.__webglTexture),ye(i,t),t.mipmaps&&t.mipmaps.length>0)for(let r=0;r<t.mipmaps.length;r++)k(n.__webglFramebuffer[r],e,t,l.COLOR_ATTACHMENT0,i,r);else k(n.__webglFramebuffer,e,t,l.COLOR_ATTACHMENT0,i,0);T(t)&&E(i),d.unbindTexture()}e.depthBuffer&&Te(e)}function j(e){let t=e.textures;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(T(r)){let t=te(e),n=f.get(r).__webglTexture;d.bindTexture(t,n),E(t),d.unbindTexture()}}}let De=[],Oe=[];function ke(e){if(e.samples>0){if(je(e)===!1){let t=e.textures,n=e.width,r=e.height,i=l.COLOR_BUFFER_BIT,a=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT,o=f.get(e),s=t.length>1;if(s)for(let e=0;e<t.length;e++)d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,null),d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,null,0);d.bindFramebuffer(l.READ_FRAMEBUFFER,o.__webglMultisampledFramebuffer),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglFramebuffer);for(let c=0;c<t.length;c++){if(e.resolveDepthBuffer&&(e.depthBuffer&&(i|=l.DEPTH_BUFFER_BIT),e.stencilBuffer&&e.resolveStencilBuffer&&(i|=l.STENCIL_BUFFER_BIT)),s){l.framebufferRenderbuffer(l.READ_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.RENDERBUFFER,o.__webglColorRenderbuffer[c]);let e=f.get(t[c]).__webglTexture;l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0,l.TEXTURE_2D,e,0)}l.blitFramebuffer(0,0,n,r,0,0,n,r,i,l.NEAREST),_===!0&&(De.length=0,Oe.length=0,De.push(l.COLOR_ATTACHMENT0+c),e.depthBuffer&&e.resolveDepthBuffer===!1&&(De.push(a),Oe.push(a),l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,Oe)),l.invalidateFramebuffer(l.READ_FRAMEBUFFER,De))}if(d.bindFramebuffer(l.READ_FRAMEBUFFER,null),d.bindFramebuffer(l.DRAW_FRAMEBUFFER,null),s)for(let e=0;e<t.length;e++){d.bindFramebuffer(l.FRAMEBUFFER,o.__webglMultisampledFramebuffer),l.framebufferRenderbuffer(l.FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.RENDERBUFFER,o.__webglColorRenderbuffer[e]);let n=f.get(t[e]).__webglTexture;d.bindFramebuffer(l.FRAMEBUFFER,o.__webglFramebuffer),l.framebufferTexture2D(l.DRAW_FRAMEBUFFER,l.COLOR_ATTACHMENT0+e,l.TEXTURE_2D,n,0)}d.bindFramebuffer(l.DRAW_FRAMEBUFFER,o.__webglMultisampledFramebuffer)}else if(e.depthBuffer&&e.resolveDepthBuffer===!1&&_){let t=e.stencilBuffer?l.DEPTH_STENCIL_ATTACHMENT:l.DEPTH_ATTACHMENT;l.invalidateFramebuffer(l.DRAW_FRAMEBUFFER,[t])}}}function Ae(e){return Math.min(p.maxSamples,e.samples)}function je(e){let t=f.get(e);return e.samples>0&&u.has(`WEBGL_multisampled_render_to_texture`)===!0&&t.__useRenderToTexture!==!1}function Me(e){let t=h.render.frame;y.get(e)!==t&&(y.set(e,t),e.update())}function Ne(e,t){let n=e.colorSpace,r=e.format,i=e.type;return e.isCompressedTexture===!0||e.isVideoTexture===!0||n!==`srgb-linear`&&n!==``&&(mt.getTransfer(n)===`srgb`?(r!==1023||i!==1009)&&console.warn(`THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):console.error(`THREE.WebGLTextures: Unsupported texture color space:`,n)),t}function Pe(e){return typeof HTMLImageElement<`u`&&e instanceof HTMLImageElement?(v.width=e.naturalWidth||e.width,v.height=e.naturalHeight||e.height):typeof VideoFrame<`u`&&e instanceof VideoFrame?(v.width=e.displayWidth,v.height=e.displayHeight):(v.width=e.width,v.height=e.height),v}this.allocateTextureUnit=ue,this.resetTextureUnits=le,this.setTexture2D=fe,this.setTexture2DArray=pe,this.setTexture3D=me,this.setTextureCube=he,this.rebindTextures=A,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Te,this.setupFrameBufferTexture=k,this.useMultisampledRTT=je}function as(e,t){function n(n,r=``){let i,a=mt.getTransfer(r);if(n===1009)return e.UNSIGNED_BYTE;if(n===1017)return e.UNSIGNED_SHORT_4_4_4_4;if(n===1018)return e.UNSIGNED_SHORT_5_5_5_1;if(n===35902)return e.UNSIGNED_INT_5_9_9_9_REV;if(n===1010)return e.BYTE;if(n===1011)return e.SHORT;if(n===1012)return e.UNSIGNED_SHORT;if(n===1013)return e.INT;if(n===1014)return e.UNSIGNED_INT;if(n===1015)return e.FLOAT;if(n===1016)return e.HALF_FLOAT;if(n===1021)return e.ALPHA;if(n===1022)return e.RGB;if(n===1023)return e.RGBA;if(n===1024)return e.LUMINANCE;if(n===1025)return e.LUMINANCE_ALPHA;if(n===1026)return e.DEPTH_COMPONENT;if(n===1027)return e.DEPTH_STENCIL;if(n===1028)return e.RED;if(n===1029)return e.RED_INTEGER;if(n===1030)return e.RG;if(n===1031)return e.RG_INTEGER;if(n===1033)return e.RGBA_INTEGER;if(n===33776||n===33777||n===33778||n===33779){if(a===`srgb`){if(i=t.get(`WEBGL_compressed_texture_s3tc_srgb`),i!==null){if(n===33776)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null}else if(i=t.get(`WEBGL_compressed_texture_s3tc`),i!==null){if(n===33776)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===33777)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===33778)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===33779)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null}if(n===35840||n===35841||n===35842||n===35843){if(i=t.get(`WEBGL_compressed_texture_pvrtc`),i!==null){if(n===35840)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===35841)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===35842)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===35843)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null}if(n===36196||n===37492||n===37496){if(i=t.get(`WEBGL_compressed_texture_etc`),i!==null){if(n===36196||n===37492)return a===`srgb`?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(n===37496)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC}else return null}if(n===37808||n===37809||n===37810||n===37811||n===37812||n===37813||n===37814||n===37815||n===37816||n===37817||n===37818||n===37819||n===37820||n===37821){if(i=t.get(`WEBGL_compressed_texture_astc`),i!==null){if(n===37808)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===37809)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===37810)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===37811)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===37812)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===37813)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===37814)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===37815)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===37816)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===37817)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===37818)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===37819)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===37820)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===37821)return a===`srgb`?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null}if(n===36492||n===36494||n===36495){if(i=t.get(`EXT_texture_compression_bptc`),i!==null){if(n===36492)return a===`srgb`?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===36494)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===36495)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null}if(n===36283||n===36284||n===36285||n===36286){if(i=t.get(`EXT_texture_compression_rgtc`),i!==null){if(n===36492)return i.COMPRESSED_RED_RGTC1_EXT;if(n===36284)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===36285)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===36286)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null}return n===1020?e.UNSIGNED_INT_24_8:e[n]===void 0?null:e[n]}return{convert:n}}var os=class extends qr{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},z=class extends Rn{constructor(){super(),this.isGroup=!0,this.type=`Group`}},ss={type:`move`},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new z,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new z,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new z,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:`connected`,data:e}),this}disconnect(e){return this.dispatchEvent({type:`disconnected`,data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,i=null,a=null,o=this._targetRay,s=this._grip,c=this._hand;if(e&&t.session.visibilityState!==`visible-blurred`){if(c&&e.hand){a=!0;for(let r of e.hand.values()){let e=t.getJointPose(r,n),i=this._getHandJoint(c,r);e!==null&&(i.matrix.fromArray(e.transform.matrix),i.matrix.decompose(i.position,i.rotation,i.scale),i.matrixWorldNeedsUpdate=!0,i.jointRadius=e.radius),i.visible=e!==null}let r=c.joints[`index-finger-tip`],i=c.joints[`thumb-tip`],o=r.position.distanceTo(i.position);c.inputState.pinching&&o>.025?(c.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:e.handedness,target:this})):!c.inputState.pinching&&o<=.015&&(c.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:e.handedness,target:this}))}else s!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,n),i!==null&&(s.matrix.fromArray(i.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,i.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(i.linearVelocity)):s.hasLinearVelocity=!1,i.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(i.angularVelocity)):s.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&i!==null&&(r=i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(ss)))}return o!==null&&(o.visible=r!==null),s!==null&&(s.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new z;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ls=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,us=`
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

}`,ds=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new Ot,i=e.properties.get(r);i.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Hr({vertexShader:ls,fragmentShader:us,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new I(new ci(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fs=class extends Ye{constructor(e,t){super();let n=this,r=null,i=1,a=null,o=`local-floor`,s=1,c=null,u=null,d=null,f=null,p=null,h=null,g=new ds,_=t.getContextAttributes(),v=null,b=null,x=[],S=[],w=new M,T=null,te=new qr;te.viewport=new kt;let D=new qr;D.viewport=new kt;let ne=[te,D],O=new os,re=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(e){let t=x[e];return t===void 0&&(t=new cs,x[e]=t),t.getTargetRaySpace()},this.getControllerGrip=function(e){let t=x[e];return t===void 0&&(t=new cs,x[e]=t),t.getGripSpace()},this.getHand=function(e){let t=x[e];return t===void 0&&(t=new cs,x[e]=t),t.getHandSpace()};function ae(e){let t=S.indexOf(e.inputSource);if(t===-1)return;let n=x[t];n!==void 0&&(n.update(e.inputSource,e.frame,c||a),n.dispatchEvent({type:e.type,data:e.inputSource}))}function oe(){r.removeEventListener(`select`,ae),r.removeEventListener(`selectstart`,ae),r.removeEventListener(`selectend`,ae),r.removeEventListener(`squeeze`,ae),r.removeEventListener(`squeezestart`,ae),r.removeEventListener(`squeezeend`,ae),r.removeEventListener(`end`,oe),r.removeEventListener(`inputsourceschange`,se);for(let e=0;e<x.length;e++){let t=S[e];t!==null&&(S[e]=null,x[e].disconnect(t))}re=null,ie=null,g.reset(),e.setRenderTarget(v),p=null,f=null,d=null,r=null,b=null,he.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(e){i=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(e){o=e,n.isPresenting===!0&&console.warn(`THREE.WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(e){c=e},this.getBaseLayer=function(){return f===null?p:f},this.getBinding=function(){return d},this.getFrame=function(){return h},this.getSession=function(){return r},this.setSession=async function(u){if(r=u,r!==null){if(v=e.getRenderTarget(),r.addEventListener(`select`,ae),r.addEventListener(`selectstart`,ae),r.addEventListener(`selectend`,ae),r.addEventListener(`squeeze`,ae),r.addEventListener(`squeezestart`,ae),r.addEventListener(`squeezeend`,ae),r.addEventListener(`end`,oe),r.addEventListener(`inputsourceschange`,se),_.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0){let n={antialias:_.antialias,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:i};p=new XRWebGLLayer(r,t,n),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new jt(p.framebufferWidth,p.framebufferHeight,{format:C,type:l,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let n=null,a=null,o=null;_.depth&&(o=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,n=_.stencil?ee:E,a=_.stencil?y:m);let s={colorFormat:t.RGBA8,depthFormat:o,scaleFactor:i};d=new XRWebGLBinding(r,t),f=d.createProjectionLayer(s),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new jt(f.textureWidth,f.textureHeight,{format:C,type:l,depthTexture:new qi(f.textureWidth,f.textureHeight,a,void 0,void 0,void 0,void 0,void 0,void 0,n),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(s),c=null,a=await r.requestReferenceSpace(o),he.setContext(r),he.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function se(e){for(let t=0;t<e.removed.length;t++){let n=e.removed[t],r=S.indexOf(n);r>=0&&(S[r]=null,x[r].disconnect(n))}for(let t=0;t<e.added.length;t++){let n=e.added[t],r=S.indexOf(n);if(r===-1){for(let e=0;e<x.length;e++)if(e>=S.length){S.push(n),r=e;break}else if(S[e]===null){S[e]=n,r=e;break}if(r===-1)break}let i=x[r];i&&i.connect(n)}}let ce=new P,le=new P;function ue(e,t,n){ce.setFromMatrixPosition(t.matrixWorld),le.setFromMatrixPosition(n.matrixWorld);let r=ce.distanceTo(le),i=t.projectionMatrix.elements,a=n.projectionMatrix.elements,o=i[14]/(i[10]-1),s=i[14]/(i[10]+1),c=(i[9]+1)/i[5],l=(i[9]-1)/i[5],u=(i[8]-1)/i[0],d=(a[8]+1)/a[0],f=o*u,p=o*d,m=r/(-u+d),h=m*-u;if(t.matrixWorld.decompose(e.position,e.quaternion,e.scale),e.translateX(h),e.translateZ(m),e.matrixWorld.compose(e.position,e.quaternion,e.scale),e.matrixWorldInverse.copy(e.matrixWorld).invert(),i[10]===-1)e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse);else{let t=o+m,n=s+m,i=f-h,a=p+(r-h),u=c*s/n*t,d=l*s/n*t;e.projectionMatrix.makePerspective(i,a,u,d,t,n),e.projectionMatrixInverse.copy(e.projectionMatrix).invert()}}function de(e,t){t===null?e.matrixWorld.copy(e.matrix):e.matrixWorld.multiplyMatrices(t.matrixWorld,e.matrix),e.matrixWorldInverse.copy(e.matrixWorld).invert()}this.updateCamera=function(e){if(r===null)return;let t=e.near,n=e.far;g.texture!==null&&(g.depthNear>0&&(t=g.depthNear),g.depthFar>0&&(n=g.depthFar)),O.near=D.near=te.near=t,O.far=D.far=te.far=n,(re!==O.near||ie!==O.far)&&(r.updateRenderState({depthNear:O.near,depthFar:O.far}),re=O.near,ie=O.far),te.layers.mask=e.layers.mask|2,D.layers.mask=e.layers.mask|4,O.layers.mask=te.layers.mask|D.layers.mask;let i=e.parent,a=O.cameras;de(O,i);for(let e=0;e<a.length;e++)de(a[e],i);a.length===2?ue(O,te,D):O.projectionMatrix.copy(te.projectionMatrix),fe(e,O,i)};function fe(e,t,n){n===null?e.matrix.copy(t.matrixWorld):(e.matrix.copy(n.matrixWorld),e.matrix.invert(),e.matrix.multiply(t.matrixWorld)),e.matrix.decompose(e.position,e.quaternion,e.scale),e.updateMatrixWorld(!0),e.projectionMatrix.copy(t.projectionMatrix),e.projectionMatrixInverse.copy(t.projectionMatrixInverse),e.isPerspectiveCamera&&(e.fov=Qe*2*Math.atan(1/e.projectionMatrix.elements[5]),e.zoom=1)}this.getCamera=function(){return O},this.getFoveation=function(){if(f!==null||p!==null)return s},this.setFoveation=function(e){s=e,f!==null&&(f.fixedFoveation=e),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=e)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(O)};let pe=null;function me(t,i){if(u=i.getViewerPose(c||a),h=i,u!==null){let t=u.views;p!==null&&(e.setRenderTargetFramebuffer(b,p.framebuffer),e.setRenderTarget(b));let n=!1;t.length!==O.cameras.length&&(O.cameras.length=0,n=!0);for(let r=0;r<t.length;r++){let i=t[r],a=null;if(p!==null)a=p.getViewport(i);else{let t=d.getViewSubImage(f,i);a=t.viewport,r===0&&(e.setRenderTargetTextures(b,t.colorTexture,f.ignoreDepthValues?void 0:t.depthStencilTexture),e.setRenderTarget(b))}let o=ne[r];o===void 0&&(o=new qr,o.layers.enable(r),o.viewport=new kt,ne[r]=o),o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.projectionMatrix.fromArray(i.projectionMatrix),o.projectionMatrixInverse.copy(o.projectionMatrix).invert(),o.viewport.set(a.x,a.y,a.width,a.height),r===0&&(O.matrix.copy(o.matrix),O.matrix.decompose(O.position,O.quaternion,O.scale)),n===!0&&O.cameras.push(o)}let i=r.enabledFeatures;if(i&&i.includes(`depth-sensing`)){let n=d.getDepthInformation(t[0]);n&&n.isValid&&n.texture&&g.init(e,n,r.renderState)}}for(let e=0;e<x.length;e++){let t=S[e],n=x[e];t!==null&&n!==void 0&&n.update(t,i,c||a)}pe&&pe(t,i),i.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:i}),h=null}let he=new oi;he.setAnimationLoop(me),this.setAnimationLoop=function(e){pe=e},this.dispose=function(){}}},ps=new xn,ms=new dn;function hs(e,t){function n(e,t){e.matrixAutoUpdate===!0&&e.updateMatrix(),t.value.copy(e.matrix)}function r(t,n){n.color.getRGB(t.fogColor.value,Rr(e)),n.isFog?(t.fogNear.value=n.near,t.fogFar.value=n.far):n.isFogExp2&&(t.fogDensity.value=n.density)}function i(e,t,n,r,i){t.isMeshBasicMaterial||t.isMeshLambertMaterial?a(e,t):t.isMeshToonMaterial?(a(e,t),d(e,t)):t.isMeshPhongMaterial?(a(e,t),u(e,t)):t.isMeshStandardMaterial?(a(e,t),f(e,t),t.isMeshPhysicalMaterial&&p(e,t,i)):t.isMeshMatcapMaterial?(a(e,t),m(e,t)):t.isMeshDepthMaterial?a(e,t):t.isMeshDistanceMaterial?(a(e,t),h(e,t)):t.isMeshNormalMaterial?a(e,t):t.isLineBasicMaterial?(o(e,t),t.isLineDashedMaterial&&s(e,t)):t.isPointsMaterial?c(e,t,n,r):t.isSpriteMaterial?l(e,t):t.isShadowMaterial?(e.color.value.copy(t.color),e.opacity.value=t.opacity):t.isShaderMaterial&&(t.uniformsNeedUpdate=!1)}function a(e,r){e.opacity.value=r.opacity,r.color&&e.diffuse.value.copy(r.color),r.emissive&&e.emissive.value.copy(r.emissive).multiplyScalar(r.emissiveIntensity),r.map&&(e.map.value=r.map,n(r.map,e.mapTransform)),r.alphaMap&&(e.alphaMap.value=r.alphaMap,n(r.alphaMap,e.alphaMapTransform)),r.bumpMap&&(e.bumpMap.value=r.bumpMap,n(r.bumpMap,e.bumpMapTransform),e.bumpScale.value=r.bumpScale,r.side===1&&(e.bumpScale.value*=-1)),r.normalMap&&(e.normalMap.value=r.normalMap,n(r.normalMap,e.normalMapTransform),e.normalScale.value.copy(r.normalScale),r.side===1&&e.normalScale.value.negate()),r.displacementMap&&(e.displacementMap.value=r.displacementMap,n(r.displacementMap,e.displacementMapTransform),e.displacementScale.value=r.displacementScale,e.displacementBias.value=r.displacementBias),r.emissiveMap&&(e.emissiveMap.value=r.emissiveMap,n(r.emissiveMap,e.emissiveMapTransform)),r.specularMap&&(e.specularMap.value=r.specularMap,n(r.specularMap,e.specularMapTransform)),r.alphaTest>0&&(e.alphaTest.value=r.alphaTest);let i=t.get(r),a=i.envMap,o=i.envMapRotation;a&&(e.envMap.value=a,ps.copy(o),ps.x*=-1,ps.y*=-1,ps.z*=-1,a.isCubeTexture&&a.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),e.envMapRotation.value.setFromMatrix4(ms.makeRotationFromEuler(ps)),e.flipEnvMap.value=a.isCubeTexture&&a.isRenderTargetTexture===!1?-1:1,e.reflectivity.value=r.reflectivity,e.ior.value=r.ior,e.refractionRatio.value=r.refractionRatio),r.lightMap&&(e.lightMap.value=r.lightMap,e.lightMapIntensity.value=r.lightMapIntensity,n(r.lightMap,e.lightMapTransform)),r.aoMap&&(e.aoMap.value=r.aoMap,e.aoMapIntensity.value=r.aoMapIntensity,n(r.aoMap,e.aoMapTransform))}function o(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform))}function s(e,t){e.dashSize.value=t.dashSize,e.totalSize.value=t.dashSize+t.gapSize,e.scale.value=t.scale}function c(e,t,r,i){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.size.value=t.size*r,e.scale.value=i*.5,t.map&&(e.map.value=t.map,n(t.map,e.uvTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function l(e,t){e.diffuse.value.copy(t.color),e.opacity.value=t.opacity,e.rotation.value=t.rotation,t.map&&(e.map.value=t.map,n(t.map,e.mapTransform)),t.alphaMap&&(e.alphaMap.value=t.alphaMap,n(t.alphaMap,e.alphaMapTransform)),t.alphaTest>0&&(e.alphaTest.value=t.alphaTest)}function u(e,t){e.specular.value.copy(t.specular),e.shininess.value=Math.max(t.shininess,1e-4)}function d(e,t){t.gradientMap&&(e.gradientMap.value=t.gradientMap)}function f(e,t){e.metalness.value=t.metalness,t.metalnessMap&&(e.metalnessMap.value=t.metalnessMap,n(t.metalnessMap,e.metalnessMapTransform)),e.roughness.value=t.roughness,t.roughnessMap&&(e.roughnessMap.value=t.roughnessMap,n(t.roughnessMap,e.roughnessMapTransform)),t.envMap&&(e.envMapIntensity.value=t.envMapIntensity)}function p(e,t,r){e.ior.value=t.ior,t.sheen>0&&(e.sheenColor.value.copy(t.sheenColor).multiplyScalar(t.sheen),e.sheenRoughness.value=t.sheenRoughness,t.sheenColorMap&&(e.sheenColorMap.value=t.sheenColorMap,n(t.sheenColorMap,e.sheenColorMapTransform)),t.sheenRoughnessMap&&(e.sheenRoughnessMap.value=t.sheenRoughnessMap,n(t.sheenRoughnessMap,e.sheenRoughnessMapTransform))),t.clearcoat>0&&(e.clearcoat.value=t.clearcoat,e.clearcoatRoughness.value=t.clearcoatRoughness,t.clearcoatMap&&(e.clearcoatMap.value=t.clearcoatMap,n(t.clearcoatMap,e.clearcoatMapTransform)),t.clearcoatRoughnessMap&&(e.clearcoatRoughnessMap.value=t.clearcoatRoughnessMap,n(t.clearcoatRoughnessMap,e.clearcoatRoughnessMapTransform)),t.clearcoatNormalMap&&(e.clearcoatNormalMap.value=t.clearcoatNormalMap,n(t.clearcoatNormalMap,e.clearcoatNormalMapTransform),e.clearcoatNormalScale.value.copy(t.clearcoatNormalScale),t.side===1&&e.clearcoatNormalScale.value.negate())),t.dispersion>0&&(e.dispersion.value=t.dispersion),t.iridescence>0&&(e.iridescence.value=t.iridescence,e.iridescenceIOR.value=t.iridescenceIOR,e.iridescenceThicknessMinimum.value=t.iridescenceThicknessRange[0],e.iridescenceThicknessMaximum.value=t.iridescenceThicknessRange[1],t.iridescenceMap&&(e.iridescenceMap.value=t.iridescenceMap,n(t.iridescenceMap,e.iridescenceMapTransform)),t.iridescenceThicknessMap&&(e.iridescenceThicknessMap.value=t.iridescenceThicknessMap,n(t.iridescenceThicknessMap,e.iridescenceThicknessMapTransform))),t.transmission>0&&(e.transmission.value=t.transmission,e.transmissionSamplerMap.value=r.texture,e.transmissionSamplerSize.value.set(r.width,r.height),t.transmissionMap&&(e.transmissionMap.value=t.transmissionMap,n(t.transmissionMap,e.transmissionMapTransform)),e.thickness.value=t.thickness,t.thicknessMap&&(e.thicknessMap.value=t.thicknessMap,n(t.thicknessMap,e.thicknessMapTransform)),e.attenuationDistance.value=t.attenuationDistance,e.attenuationColor.value.copy(t.attenuationColor)),t.anisotropy>0&&(e.anisotropyVector.value.set(t.anisotropy*Math.cos(t.anisotropyRotation),t.anisotropy*Math.sin(t.anisotropyRotation)),t.anisotropyMap&&(e.anisotropyMap.value=t.anisotropyMap,n(t.anisotropyMap,e.anisotropyMapTransform))),e.specularIntensity.value=t.specularIntensity,e.specularColor.value.copy(t.specularColor),t.specularColorMap&&(e.specularColorMap.value=t.specularColorMap,n(t.specularColorMap,e.specularColorMapTransform)),t.specularIntensityMap&&(e.specularIntensityMap.value=t.specularIntensityMap,n(t.specularIntensityMap,e.specularIntensityMapTransform))}function m(e,t){t.matcap&&(e.matcap.value=t.matcap)}function h(e,n){let r=t.get(n).light;e.referencePosition.value.setFromMatrixPosition(r.matrixWorld),e.nearDistance.value=r.shadow.camera.near,e.farDistance.value=r.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:i}}function gs(e,t,n,r){let i={},a={},o=[],s=e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS);function c(e,t){let n=t.program;r.uniformBlockBinding(e,n)}function l(e,n){let o=i[e.id];o===void 0&&(m(e),o=u(e),i[e.id]=o,e.addEventListener(`dispose`,g));let s=n.program;r.updateUBOMapping(e,s);let c=t.render.frame;a[e.id]!==c&&(f(e),a[e.id]=c)}function u(t){let n=d();t.__bindingPointIndex=n;let r=e.createBuffer(),i=t.__size,a=t.usage;return e.bindBuffer(e.UNIFORM_BUFFER,r),e.bufferData(e.UNIFORM_BUFFER,i,a),e.bindBuffer(e.UNIFORM_BUFFER,null),e.bindBufferBase(e.UNIFORM_BUFFER,n,r),r}function d(){for(let e=0;e<s;e++)if(o.indexOf(e)===-1)return o.push(e),e;return console.error(`THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function f(t){let n=i[t.id],r=t.uniforms,a=t.__cache;e.bindBuffer(e.UNIFORM_BUFFER,n);for(let t=0,n=r.length;t<n;t++){let n=Array.isArray(r[t])?r[t]:[r[t]];for(let r=0,i=n.length;r<i;r++){let i=n[r];if(p(i,t,r,a)===!0){let t=i.__offset,n=Array.isArray(i.value)?i.value:[i.value],r=0;for(let a=0;a<n.length;a++){let o=n[a],s=h(o);typeof o==`number`||typeof o==`boolean`?(i.__data[0]=o,e.bufferSubData(e.UNIFORM_BUFFER,t+r,i.__data)):o.isMatrix3?(i.__data[0]=o.elements[0],i.__data[1]=o.elements[1],i.__data[2]=o.elements[2],i.__data[3]=0,i.__data[4]=o.elements[3],i.__data[5]=o.elements[4],i.__data[6]=o.elements[5],i.__data[7]=0,i.__data[8]=o.elements[6],i.__data[9]=o.elements[7],i.__data[10]=o.elements[8],i.__data[11]=0):(o.toArray(i.__data,r),r+=s.storage/Float32Array.BYTES_PER_ELEMENT)}e.bufferSubData(e.UNIFORM_BUFFER,t,i.__data)}}}e.bindBuffer(e.UNIFORM_BUFFER,null)}function p(e,t,n,r){let i=e.value,a=t+`_`+n;if(r[a]===void 0)return r[a]=typeof i==`number`||typeof i==`boolean`?i:i.clone(),!0;{let e=r[a];if(typeof i==`number`||typeof i==`boolean`){if(e!==i)return r[a]=i,!0}else if(e.equals(i)===!1)return e.copy(i),!0}return!1}function m(e){let t=e.uniforms,n=0;for(let e=0,r=t.length;e<r;e++){let r=Array.isArray(t[e])?t[e]:[t[e]];for(let e=0,t=r.length;e<t;e++){let t=r[e],i=Array.isArray(t.value)?t.value:[t.value];for(let e=0,r=i.length;e<r;e++){let r=i[e],a=h(r),o=n%16,s=o%a.boundary,c=o+s;n+=s,c!==0&&16-c<a.storage&&(n+=16-c),t.__data=new Float32Array(a.storage/Float32Array.BYTES_PER_ELEMENT),t.__offset=n,n+=a.storage}}}let r=n%16;return r>0&&(n+=16-r),e.__size=n,e.__cache={},this}function h(e){let t={boundary:0,storage:0};return typeof e==`number`||typeof e==`boolean`?(t.boundary=4,t.storage=4):e.isVector2?(t.boundary=8,t.storage=8):e.isVector3||e.isColor?(t.boundary=16,t.storage=12):e.isVector4?(t.boundary=16,t.storage=16):e.isMatrix3?(t.boundary=48,t.storage=48):e.isMatrix4?(t.boundary=64,t.storage=64):e.isTexture?console.warn(`THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.`):console.warn(`THREE.WebGLRenderer: Unsupported uniform value type.`,e),t}function g(t){let n=t.target;n.removeEventListener(`dispose`,g);let r=o.indexOf(n.__bindingPointIndex);o.splice(r,1),e.deleteBuffer(i[n.id]),delete i[n.id],delete a[n.id]}function _(){for(let t in i)e.deleteBuffer(i[t]);o=[],i={},a={}}return{bind:c,update:l,dispose:_}}var _s=class{constructor(e={}){let{canvas:t=ct(),context:n=null,depth:r=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:s=!0,preserveDrawingBuffer:u=!1,powerPreference:d=`default`,failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:p=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);m=n.getContextAttributes().alpha}else m=a;let h=new Uint32Array(4),_=new Int32Array(4),v=null,y=null,b=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ve,this.toneMapping=0,this.toneMappingExposure=1;let S=this,C=!1,w=0,T=0,E=null,ee=-1,te=null,D=new kt,ne=new kt,O=null,re=new F(0),ie=0,ae=t.width,oe=t.height,se=1,ce=null,le=null,ue=new kt(0,0,ae,oe),de=new kt(0,0,ae,oe),fe=!1,pe=new ai,me=!1,he=!1,ge=new dn,_e=new dn,ve=new P,ye=new kt,be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xe=!1;function Se(){return E===null?se:1}let k=n;function Ce(e,n){return t.getContext(e,n)}try{let e={alpha:!0,depth:r,stencil:i,antialias:o,premultipliedAlpha:s,preserveDrawingBuffer:u,powerPreference:d,failIfMajorPerformanceCaveat:f};if(`setAttribute`in t&&t.setAttribute(`data-engine`,`three.js r170`),t.addEventListener(`webglcontextlost`,Xe,!1),t.addEventListener(`webglcontextrestored`,Ze,!1),t.addEventListener(`webglcontextcreationerror`,Qe,!1),k===null){let t=`webgl2`;if(k=Ce(t,e),k===null)throw Ce(t)?Error(`Error creating WebGL context with your selected attributes.`):Error(`Error creating WebGL context.`)}}catch(e){throw console.error(`THREE.WebGLRenderer: `+e.message),e}let we,Te,A,Ee,j,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ue,We,Ge,Ke,qe;function Je(){we=new Vi(k),we.init(),Ge=new as(k,we),Te=new gi(k,we,e,Ge),A=new ts(k,we),Te.reverseDepthBuffer&&p&&A.buffers.depth.setReversed(!0),Ee=new Wi(k),j=new Lo,De=new is(k,we,A,j,Te,Ge,Ee),Oe=new vi(S),ke=new Bi(S),Ae=new si(k),Ke=new mi(k,Ae),je=new Hi(k,Ae,Ee,Ke),Me=new Ki(k,je,Ae,Ee),Be=new Gi(k,Te,De),Le=new _i(j),Ne=new Io(S,Oe,ke,we,Te,Ke,Le),Pe=new hs(S,j),Fe=new Vo,Ie=new Jo(we),ze=new pi(S,Oe,ke,A,Me,m,s),Re=new $o(S,Me,Te),qe=new gs(k,Ee,Te,A),Ue=new hi(k,we,Ee),We=new Ui(k,we,Ee),Ee.programs=Ne.programs,S.capabilities=Te,S.extensions=we,S.properties=j,S.renderLists=Fe,S.shadowMap=Re,S.state=A,S.info=Ee}Je();let Ye=new fs(S,k);this.xr=Ye,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let e=we.get(`WEBGL_lose_context`);e&&e.loseContext()},this.forceContextRestore=function(){let e=we.get(`WEBGL_lose_context`);e&&e.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(e){e!==void 0&&(se=e,this.setSize(ae,oe,!1))},this.getSize=function(e){return e.set(ae,oe)},this.setSize=function(e,n,r=!0){if(Ye.isPresenting){console.warn(`THREE.WebGLRenderer: Can't change size while VR device is presenting.`);return}ae=e,oe=n,t.width=Math.floor(e*se),t.height=Math.floor(n*se),r===!0&&(t.style.width=e+`px`,t.style.height=n+`px`),this.setViewport(0,0,e,n)},this.getDrawingBufferSize=function(e){return e.set(ae*se,oe*se).floor()},this.setDrawingBufferSize=function(e,n,r){ae=e,oe=n,se=r,t.width=Math.floor(e*r),t.height=Math.floor(n*r),this.setViewport(0,0,e,n)},this.getCurrentViewport=function(e){return e.copy(D)},this.getViewport=function(e){return e.copy(ue)},this.setViewport=function(e,t,n,r){e.isVector4?ue.set(e.x,e.y,e.z,e.w):ue.set(e,t,n,r),A.viewport(D.copy(ue).multiplyScalar(se).round())},this.getScissor=function(e){return e.copy(de)},this.setScissor=function(e,t,n,r){e.isVector4?de.set(e.x,e.y,e.z,e.w):de.set(e,t,n,r),A.scissor(ne.copy(de).multiplyScalar(se).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(e){A.setScissorTest(fe=e)},this.setOpaqueSort=function(e){ce=e},this.setTransparentSort=function(e){le=e},this.getClearColor=function(e){return e.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor.apply(ze,arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha.apply(ze,arguments)},this.clear=function(e=!0,t=!0,n=!0){let r=0;if(e){let e=!1;if(E!==null){let t=E.texture.format;e=t===1033||t===1031||t===1029}if(e){let e=E.texture.type,t=e===1009||e===1014||e===1012||e===1020||e===1017||e===1018,n=ze.getClearColor(),r=ze.getClearAlpha(),i=n.r,a=n.g,o=n.b;t?(h[0]=i,h[1]=a,h[2]=o,h[3]=r,k.clearBufferuiv(k.COLOR,0,h)):(_[0]=i,_[1]=a,_[2]=o,_[3]=r,k.clearBufferiv(k.COLOR,0,_))}else r|=k.COLOR_BUFFER_BIT}t&&(r|=k.DEPTH_BUFFER_BIT),n&&(r|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(r)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener(`webglcontextlost`,Xe,!1),t.removeEventListener(`webglcontextrestored`,Ze,!1),t.removeEventListener(`webglcontextcreationerror`,Qe,!1),Fe.dispose(),Ie.dispose(),j.dispose(),Oe.dispose(),ke.dispose(),Me.dispose(),Ke.dispose(),qe.dispose(),Ne.dispose(),Ye.dispose(),Ye.removeEventListener(`sessionstart`,M),Ye.removeEventListener(`sessionend`,N),at.stop()};function Xe(e){e.preventDefault(),console.log(`THREE.WebGLRenderer: Context Lost.`),C=!0}function Ze(){console.log(`THREE.WebGLRenderer: Context Restored.`),C=!1;let e=Ee.autoReset,t=Re.enabled,n=Re.autoUpdate,r=Re.needsUpdate,i=Re.type;Je(),Ee.autoReset=e,Re.enabled=t,Re.autoUpdate=n,Re.needsUpdate=r,Re.type=i}function Qe(e){console.error(`THREE.WebGLRenderer: A WebGL context could not be created. Reason: `,e.statusMessage)}function $e(e){let t=e.target;t.removeEventListener(`dispose`,$e),et(t)}function et(e){tt(e),j.remove(e)}function tt(e){let t=j.get(e).programs;t!==void 0&&(t.forEach(function(e){Ne.releaseProgram(e)}),e.isShaderMaterial&&Ne.releaseShaderCache(e))}this.renderBufferDirect=function(e,t,n,r,i,a){t===null&&(t=be);let o=i.isMesh&&i.matrixWorld.determinant()<0,s=bt(e,t,n,r,i);A.setMaterial(r,o);let c=n.index,l=1;if(r.wireframe===!0){if(c=je.getWireframeAttribute(n),c===void 0)return;l=2}let u=n.drawRange,d=n.attributes.position,f=u.start*l,p=(u.start+u.count)*l;a!==null&&(f=Math.max(f,a.start*l),p=Math.min(p,(a.start+a.count)*l)),c===null?d!=null&&(f=Math.max(f,0),p=Math.min(p,d.count)):(f=Math.max(f,0),p=Math.min(p,c.count));let m=p-f;if(m<0||m===1/0)return;Ke.setup(i,r,s,n,c);let h,g=Ue;if(c!==null&&(h=Ae.get(c),g=We,g.setIndex(h)),i.isMesh)r.wireframe===!0?(A.setLineWidth(r.wireframeLinewidth*Se()),g.setMode(k.LINES)):g.setMode(k.TRIANGLES);else if(i.isLine){let e=r.linewidth;e===void 0&&(e=1),A.setLineWidth(e*Se()),i.isLineSegments?g.setMode(k.LINES):i.isLineLoop?g.setMode(k.LINE_LOOP):g.setMode(k.LINE_STRIP)}else i.isPoints?g.setMode(k.POINTS):i.isSprite&&g.setMode(k.TRIANGLES);if(i.isBatchedMesh){if(i._multiDrawInstances!==null)g.renderMultiDrawInstances(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount,i._multiDrawInstances);else if(we.get(`WEBGL_multi_draw`))g.renderMultiDraw(i._multiDrawStarts,i._multiDrawCounts,i._multiDrawCount);else{let e=i._multiDrawStarts,t=i._multiDrawCounts,n=i._multiDrawCount,a=c?Ae.get(c).bytesPerElement:1,o=j.get(r).currentProgram.getUniforms();for(let r=0;r<n;r++)o.setValue(k,`_gl_DrawID`,r),g.render(e[r]/a,t[r])}}else if(i.isInstancedMesh)g.renderInstances(f,m,i.count);else if(n.isInstancedBufferGeometry){let e=n._maxInstanceCount===void 0?1/0:n._maxInstanceCount,t=Math.min(n.instanceCount,e);g.renderInstances(f,m,t)}else g.render(f,m)};function nt(e,t,n){e.transparent===!0&&e.side===2&&e.forceSinglePass===!1?(e.side=1,e.needsUpdate=!0,_t(e,t,n),e.side=0,e.needsUpdate=!0,_t(e,t,n),e.side=2):_t(e,t,n)}this.compile=function(e,t,n=null){n===null&&(n=e),y=Ie.get(n),y.init(t),x.push(y),n.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),e!==n&&e.traverseVisible(function(e){e.isLight&&e.layers.test(t.layers)&&(y.pushLight(e),e.castShadow&&y.pushShadow(e))}),y.setupLights();let r=new Set;return e.traverse(function(e){if(!(e.isMesh||e.isPoints||e.isLine||e.isSprite))return;let t=e.material;if(t){if(Array.isArray(t))for(let i=0;i<t.length;i++){let a=t[i];nt(a,n,e),r.add(a)}else nt(t,n,e),r.add(t)}}),x.pop(),y=null,r},this.compileAsync=function(e,t,n=null){let r=this.compile(e,t,n);return new Promise(t=>{function n(){if(r.forEach(function(e){j.get(e).currentProgram.isReady()&&r.delete(e)}),r.size===0){t(e);return}setTimeout(n,10)}we.get(`KHR_parallel_shader_compile`)===null?setTimeout(n,10):n()})};let rt=null;function it(e){rt&&rt(e)}function M(){at.stop()}function N(){at.start()}let at=new oi;at.setAnimationLoop(it),typeof self<`u`&&at.setContext(self),this.setAnimationLoop=function(e){rt=e,Ye.setAnimationLoop(e),e===null?at.stop():at.start()},Ye.addEventListener(`sessionstart`,M),Ye.addEventListener(`sessionend`,N),this.render=function(e,t){if(t!==void 0&&t.isCamera!==!0){console.error(`THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(C===!0)return;if(e.matrixWorldAutoUpdate===!0&&e.updateMatrixWorld(),t.parent===null&&t.matrixWorldAutoUpdate===!0&&t.updateMatrixWorld(),Ye.enabled===!0&&Ye.isPresenting===!0&&(Ye.cameraAutoUpdate===!0&&Ye.updateCamera(t),t=Ye.getCamera()),e.isScene===!0&&e.onBeforeRender(S,e,t,E),y=Ie.get(e,x.length),y.init(t),x.push(y),_e.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),pe.setFromProjectionMatrix(_e),he=this.localClippingEnabled,me=Le.init(this.clippingPlanes,he),v=Fe.get(e,b.length),v.init(),b.push(v),Ye.enabled===!0&&Ye.isPresenting===!0){let e=S.xr.getDepthSensingMesh();e!==null&&ot(e,t,-1/0,S.sortObjects)}ot(e,t,0,S.sortObjects),v.finish(),S.sortObjects===!0&&v.sort(ce,le),xe=Ye.enabled===!1||Ye.isPresenting===!1||Ye.hasDepthSensing()===!1,xe&&ze.addToRenderList(v,e),this.info.render.frame++,me===!0&&Le.beginShadows();let n=y.state.shadowsArray;Re.render(n,e,t),me===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset();let r=v.opaque,i=v.transmissive;if(y.setupLights(),t.isArrayCamera){let n=t.cameras;if(i.length>0)for(let t=0,a=n.length;t<a;t++){let a=n[t];lt(r,i,e,a)}xe&&ze.render(e);for(let t=0,r=n.length;t<r;t++){let r=n[t];st(v,e,r,r.viewport)}}else i.length>0&&lt(r,i,e,t),xe&&ze.render(e),st(v,e,t);E!==null&&(De.updateMultisampleRenderTarget(E),De.updateRenderTargetMipmap(E)),e.isScene===!0&&e.onAfterRender(S,e,t),Ke.resetDefaultState(),ee=-1,te=null,x.pop(),x.length>0?(y=x[x.length-1],me===!0&&Le.setGlobalState(S.clippingPlanes,y.state.camera)):y=null,b.pop(),v=b.length>0?b[b.length-1]:null};function ot(e,t,n,r){if(e.visible===!1)return;if(e.layers.test(t.layers)){if(e.isGroup)n=e.renderOrder;else if(e.isLOD)e.autoUpdate===!0&&e.update(t);else if(e.isLight)y.pushLight(e),e.castShadow&&y.pushShadow(e);else if(e.isSprite){if(!e.frustumCulled||pe.intersectsSprite(e)){r&&ye.setFromMatrixPosition(e.matrixWorld).applyMatrix4(_e);let t=Me.update(e),i=e.material;i.visible&&v.push(e,t,i,n,ye.z,null)}}else if((e.isMesh||e.isLine||e.isPoints)&&(!e.frustumCulled||pe.intersectsObject(e))){let t=Me.update(e),i=e.material;if(r&&(e.boundingSphere===void 0?(t.boundingSphere===null&&t.computeBoundingSphere(),ye.copy(t.boundingSphere.center)):(e.boundingSphere===null&&e.computeBoundingSphere(),ye.copy(e.boundingSphere.center)),ye.applyMatrix4(e.matrixWorld).applyMatrix4(_e)),Array.isArray(i)){let r=t.groups;for(let a=0,o=r.length;a<o;a++){let o=r[a],s=i[o.materialIndex];s&&s.visible&&v.push(e,t,s,n,ye.z,o)}}else i.visible&&v.push(e,t,i,n,ye.z,null)}}let i=e.children;for(let e=0,a=i.length;e<a;e++)ot(i[e],t,n,r)}function st(e,t,n,r){let i=e.opaque,a=e.transmissive,o=e.transparent;y.setupLightsView(n),me===!0&&Le.setGlobalState(S.clippingPlanes,n),r&&A.viewport(D.copy(r)),i.length>0&&ht(i,t,n),a.length>0&&ht(a,t,n),o.length>0&&ht(o,t,n),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function lt(e,t,n,r){if((n.isScene===!0?n.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[r.id]===void 0&&(y.state.transmissionRenderTarget[r.id]=new jt(1,1,{generateMipmaps:!0,type:we.has(`EXT_color_buffer_half_float`)||we.has(`EXT_color_buffer_float`)?g:l,minFilter:c,samples:4,stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:mt.workingColorSpace}));let a=y.state.transmissionRenderTarget[r.id],o=r.viewport||D;a.setSize(o.z,o.w);let s=S.getRenderTarget();S.setRenderTarget(a),S.getClearColor(re),ie=S.getClearAlpha(),ie<1&&S.setClearColor(16777215,.5),S.clear(),xe&&ze.render(n);let u=S.toneMapping;S.toneMapping=0;let d=r.viewport;if(r.viewport!==void 0&&(r.viewport=void 0),y.setupLightsView(r),me===!0&&Le.setGlobalState(S.clippingPlanes,r),ht(e,n,r),De.updateMultisampleRenderTarget(a),De.updateRenderTargetMipmap(a),we.has(`WEBGL_multisampled_render_to_texture`)===!1){let e=!1;for(let i=0,a=t.length;i<a;i++){let a=t[i],o=a.object,s=a.geometry,c=a.material,l=a.group;if(c.side===2&&o.layers.test(r.layers)){let t=c.side;c.side=1,c.needsUpdate=!0,gt(o,n,r,s,c,l),c.side=t,c.needsUpdate=!0,e=!0}}e===!0&&(De.updateMultisampleRenderTarget(a),De.updateRenderTargetMipmap(a))}S.setRenderTarget(s),S.setClearColor(re,ie),d!==void 0&&(r.viewport=d),S.toneMapping=u}function ht(e,t,n){let r=t.isScene===!0?t.overrideMaterial:null;for(let i=0,a=e.length;i<a;i++){let a=e[i],o=a.object,s=a.geometry,c=r===null?a.material:r,l=a.group;o.layers.test(n.layers)&&gt(o,t,n,s,c,l)}}function gt(e,t,n,r,i,a){e.onBeforeRender(S,t,n,r,i,a),e.modelViewMatrix.multiplyMatrices(n.matrixWorldInverse,e.matrixWorld),e.normalMatrix.getNormalMatrix(e.modelViewMatrix),i.onBeforeRender(S,t,n,r,e,a),i.transparent===!0&&i.side===2&&i.forceSinglePass===!1?(i.side=1,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=0,i.needsUpdate=!0,S.renderBufferDirect(n,t,r,i,e,a),i.side=2):S.renderBufferDirect(n,t,r,i,e,a),e.onAfterRender(S,t,n,r,i,a)}function _t(e,t,n){t.isScene!==!0&&(t=be);let r=j.get(e),i=y.state.lights,a=y.state.shadowsArray,o=i.state.version,s=Ne.getParameters(e,i.state,a,t,n),c=Ne.getProgramCacheKey(s),l=r.programs;r.environment=e.isMeshStandardMaterial?t.environment:null,r.fog=t.fog,r.envMap=(e.isMeshStandardMaterial?ke:Oe).get(e.envMap||r.environment),r.envMapRotation=r.environment!==null&&e.envMap===null?t.environmentRotation:e.envMapRotation,l===void 0&&(e.addEventListener(`dispose`,$e),l=new Map,r.programs=l);let u=l.get(c);if(u!==void 0){if(r.currentProgram===u&&r.lightsStateVersion===o)return yt(e,s),u}else s.uniforms=Ne.getUniforms(e),e.onBeforeCompile(s,S),u=Ne.acquireProgram(s,c),l.set(c,u),r.uniforms=s.uniforms;let d=r.uniforms;return(!e.isShaderMaterial&&!e.isRawShaderMaterial||e.clipping===!0)&&(d.clippingPlanes=Le.uniform),yt(e,s),r.needsLights=St(e),r.lightsStateVersion=o,r.needsLights&&(d.ambientLightColor.value=i.state.ambient,d.lightProbe.value=i.state.probe,d.directionalLights.value=i.state.directional,d.directionalLightShadows.value=i.state.directionalShadow,d.spotLights.value=i.state.spot,d.spotLightShadows.value=i.state.spotShadow,d.rectAreaLights.value=i.state.rectArea,d.ltc_1.value=i.state.rectAreaLTC1,d.ltc_2.value=i.state.rectAreaLTC2,d.pointLights.value=i.state.point,d.pointLightShadows.value=i.state.pointShadow,d.hemisphereLights.value=i.state.hemi,d.directionalShadowMap.value=i.state.directionalShadowMap,d.directionalShadowMatrix.value=i.state.directionalShadowMatrix,d.spotShadowMap.value=i.state.spotShadowMap,d.spotLightMatrix.value=i.state.spotLightMatrix,d.spotLightMap.value=i.state.spotLightMap,d.pointShadowMap.value=i.state.pointShadowMap,d.pointShadowMatrix.value=i.state.pointShadowMatrix),r.currentProgram=u,r.uniformsList=null,u}function vt(e){if(e.uniformsList===null){let t=e.currentProgram.getUniforms();e.uniformsList=eo.seqWithValue(t.seq,e.uniforms)}return e.uniformsList}function yt(e,t){let n=j.get(e);n.outputColorSpace=t.outputColorSpace,n.batching=t.batching,n.batchingColor=t.batchingColor,n.instancing=t.instancing,n.instancingColor=t.instancingColor,n.instancingMorph=t.instancingMorph,n.skinning=t.skinning,n.morphTargets=t.morphTargets,n.morphNormals=t.morphNormals,n.morphColors=t.morphColors,n.morphTargetsCount=t.morphTargetsCount,n.numClippingPlanes=t.numClippingPlanes,n.numIntersection=t.numClipIntersection,n.vertexAlphas=t.vertexAlphas,n.vertexTangents=t.vertexTangents,n.toneMapping=t.toneMapping}function bt(e,t,n,r,i){t.isScene!==!0&&(t=be),De.resetTextureUnits();let a=t.fog,o=r.isMeshStandardMaterial?t.environment:null,s=E===null?S.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:He,c=(r.isMeshStandardMaterial?ke:Oe).get(r.envMap||o),l=r.vertexColors===!0&&!!n.attributes.color&&n.attributes.color.itemSize===4,u=!!n.attributes.tangent&&(!!r.normalMap||r.anisotropy>0),d=!!n.morphAttributes.position,f=!!n.morphAttributes.normal,p=!!n.morphAttributes.color,m=0;r.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(m=S.toneMapping);let h=n.morphAttributes.position||n.morphAttributes.normal||n.morphAttributes.color,g=h===void 0?0:h.length,_=j.get(r),v=y.state.lights;if(me===!0&&(he===!0||e!==te)){let t=e===te&&r.id===ee;Le.setState(r,e,t)}let b=!1;r.version===_.__version?_.needsLights&&_.lightsStateVersion!==v.state.version?b=!0:_.outputColorSpace===s?i.isBatchedMesh&&_.batching===!1||!i.isBatchedMesh&&_.batching===!0||i.isBatchedMesh&&_.batchingColor===!0&&i.colorTexture===null||i.isBatchedMesh&&_.batchingColor===!1&&i.colorTexture!==null||i.isInstancedMesh&&_.instancing===!1||!i.isInstancedMesh&&_.instancing===!0||i.isSkinnedMesh&&_.skinning===!1||!i.isSkinnedMesh&&_.skinning===!0||i.isInstancedMesh&&_.instancingColor===!0&&i.instanceColor===null||i.isInstancedMesh&&_.instancingColor===!1&&i.instanceColor!==null||i.isInstancedMesh&&_.instancingMorph===!0&&i.morphTexture===null||i.isInstancedMesh&&_.instancingMorph===!1&&i.morphTexture!==null?b=!0:_.envMap===c?r.fog===!0&&_.fog!==a||_.numClippingPlanes!==void 0&&(_.numClippingPlanes!==Le.numPlanes||_.numIntersection!==Le.numIntersection)?b=!0:_.vertexAlphas===l&&_.vertexTangents===u&&_.morphTargets===d&&_.morphNormals===f&&_.morphColors===p&&_.toneMapping===m?_.morphTargetsCount!==g&&(b=!0):b=!0:b=!0:b=!0:(b=!0,_.__version=r.version);let x=_.currentProgram;b===!0&&(x=_t(r,t,i));let C=!1,w=!1,T=!1,D=x.getUniforms(),ne=_.uniforms;if(A.useProgram(x.program)&&(C=!0,w=!0,T=!0),r.id!==ee&&(ee=r.id,w=!0),C||te!==e){A.buffers.depth.getReversed()?(ge.copy(e.projectionMatrix),ft(ge),pt(ge),D.setValue(k,`projectionMatrix`,ge)):D.setValue(k,`projectionMatrix`,e.projectionMatrix),D.setValue(k,`viewMatrix`,e.matrixWorldInverse);let t=D.map.cameraPosition;t!==void 0&&t.setValue(k,ve.setFromMatrixPosition(e.matrixWorld)),Te.logarithmicDepthBuffer&&D.setValue(k,`logDepthBufFC`,2/(Math.log(e.far+1)/Math.LN2)),(r.isMeshPhongMaterial||r.isMeshToonMaterial||r.isMeshLambertMaterial||r.isMeshBasicMaterial||r.isMeshStandardMaterial||r.isShaderMaterial)&&D.setValue(k,`isOrthographic`,e.isOrthographicCamera===!0),te!==e&&(te=e,w=!0,T=!0)}if(i.isSkinnedMesh){D.setOptional(k,i,`bindMatrix`),D.setOptional(k,i,`bindMatrixInverse`);let e=i.skeleton;e&&(e.boneTexture===null&&e.computeBoneTexture(),D.setValue(k,`boneTexture`,e.boneTexture,De))}i.isBatchedMesh&&(D.setOptional(k,i,`batchingTexture`),D.setValue(k,`batchingTexture`,i._matricesTexture,De),D.setOptional(k,i,`batchingIdTexture`),D.setValue(k,`batchingIdTexture`,i._indirectTexture,De),D.setOptional(k,i,`batchingColorTexture`),i._colorsTexture!==null&&D.setValue(k,`batchingColorTexture`,i._colorsTexture,De));let O=n.morphAttributes;if((O.position!==void 0||O.normal!==void 0||O.color!==void 0)&&Be.update(i,n,x),(w||_.receiveShadow!==i.receiveShadow)&&(_.receiveShadow=i.receiveShadow,D.setValue(k,`receiveShadow`,i.receiveShadow)),r.isMeshGouraudMaterial&&r.envMap!==null&&(ne.envMap.value=c,ne.flipEnvMap.value=c.isCubeTexture&&c.isRenderTargetTexture===!1?-1:1),r.isMeshStandardMaterial&&r.envMap===null&&t.environment!==null&&(ne.envMapIntensity.value=t.environmentIntensity),w&&(D.setValue(k,`toneMappingExposure`,S.toneMappingExposure),_.needsLights&&xt(ne,T),a&&r.fog===!0&&Pe.refreshFogUniforms(ne,a),Pe.refreshMaterialUniforms(ne,r,se,oe,y.state.transmissionRenderTarget[e.id]),eo.upload(k,vt(_),ne,De)),r.isShaderMaterial&&r.uniformsNeedUpdate===!0&&(eo.upload(k,vt(_),ne,De),r.uniformsNeedUpdate=!1),r.isSpriteMaterial&&D.setValue(k,`center`,i.center),D.setValue(k,`modelViewMatrix`,i.modelViewMatrix),D.setValue(k,`normalMatrix`,i.normalMatrix),D.setValue(k,`modelMatrix`,i.matrixWorld),r.isShaderMaterial||r.isRawShaderMaterial){let e=r.uniformsGroups;for(let t=0,n=e.length;t<n;t++){let n=e[t];qe.update(n,x),qe.bind(n,x)}}return x}function xt(e,t){e.ambientLightColor.needsUpdate=t,e.lightProbe.needsUpdate=t,e.directionalLights.needsUpdate=t,e.directionalLightShadows.needsUpdate=t,e.pointLights.needsUpdate=t,e.pointLightShadows.needsUpdate=t,e.spotLights.needsUpdate=t,e.spotLightShadows.needsUpdate=t,e.rectAreaLights.needsUpdate=t,e.hemisphereLights.needsUpdate=t}function St(e){return e.isMeshLambertMaterial||e.isMeshToonMaterial||e.isMeshPhongMaterial||e.isMeshStandardMaterial||e.isShadowMaterial||e.isShaderMaterial&&e.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(e,t,n){j.get(e.texture).__webglTexture=t,j.get(e.depthTexture).__webglTexture=n;let r=j.get(e);r.__hasExternalTextures=!0,r.__autoAllocateDepthBuffer=n===void 0,r.__autoAllocateDepthBuffer||we.has(`WEBGL_multisampled_render_to_texture`)===!0&&(console.warn(`THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided`),r.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(e,t){let n=j.get(e);n.__webglFramebuffer=t,n.__useDefaultFramebuffer=t===void 0},this.setRenderTarget=function(e,t=0,n=0){E=e,w=t,T=n;let r=!0,i=null,a=!1,o=!1;if(e){let s=j.get(e);if(s.__useDefaultFramebuffer!==void 0)A.bindFramebuffer(k.FRAMEBUFFER,null),r=!1;else if(s.__webglFramebuffer===void 0)De.setupRenderTarget(e);else if(s.__hasExternalTextures)De.rebindTextures(e,j.get(e.texture).__webglTexture,j.get(e.depthTexture).__webglTexture);else if(e.depthBuffer){let t=e.depthTexture;if(s.__boundDepthTexture!==t){if(t!==null&&j.has(t)&&(e.width!==t.image.width||e.height!==t.image.height))throw Error(`WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.`);De.setupDepthRenderbuffer(e)}}let c=e.texture;(c.isData3DTexture||c.isDataArrayTexture||c.isCompressedArrayTexture)&&(o=!0);let l=j.get(e).__webglFramebuffer;e.isWebGLCubeRenderTarget?(i=Array.isArray(l[t])?l[t][n]:l[t],a=!0):i=e.samples>0&&De.useMultisampledRTT(e)===!1?j.get(e).__webglMultisampledFramebuffer:Array.isArray(l)?l[n]:l,D.copy(e.viewport),ne.copy(e.scissor),O=e.scissorTest}else D.copy(ue).multiplyScalar(se).floor(),ne.copy(de).multiplyScalar(se).floor(),O=fe;if(A.bindFramebuffer(k.FRAMEBUFFER,i)&&r&&A.drawBuffers(e,i),A.viewport(D),A.scissor(ne),A.setScissorTest(O),a){let r=j.get(e.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+t,r.__webglTexture,n)}else if(o){let r=j.get(e.texture),i=t||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,r.__webglTexture,n||0,i)}ee=-1},this.readRenderTargetPixels=function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let s=j.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){A.bindFramebuffer(k.FRAMEBUFFER,s);try{let o=e.texture,s=o.format,c=o.type;if(!Te.textureFormatReadable(s)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(!Te.textureTypeReadable(c)){console.error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i&&k.readPixels(t,n,r,i,Ge.convert(s),Ge.convert(c),a)}finally{let e=E===null?null:j.get(E).__webglFramebuffer;A.bindFramebuffer(k.FRAMEBUFFER,e)}}},this.readRenderTargetPixelsAsync=async function(e,t,n,r,i,a,o){if(!(e&&e.isWebGLRenderTarget))throw Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let s=j.get(e).__webglFramebuffer;if(e.isWebGLCubeRenderTarget&&o!==void 0&&(s=s[o]),s){let o=e.texture,c=o.format,l=o.type;if(!Te.textureFormatReadable(c))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(!Te.textureTypeReadable(l))throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);if(t>=0&&t<=e.width-r&&n>=0&&n<=e.height-i){A.bindFramebuffer(k.FRAMEBUFFER,s);let e=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,e),k.bufferData(k.PIXEL_PACK_BUFFER,a.byteLength,k.STREAM_READ),k.readPixels(t,n,r,i,Ge.convert(c),Ge.convert(l),0);let o=E===null?null:j.get(E).__webglFramebuffer;A.bindFramebuffer(k.FRAMEBUFFER,o);let u=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await dt(k,u,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,e),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,a),k.deleteBuffer(e),k.deleteSync(u),a}throw Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)}},this.copyFramebufferToTexture=function(e,t=null,n=0){e.isTexture!==!0&&(ut(`WebGLRenderer: copyFramebufferToTexture function signature has changed.`),t=arguments[0]||null,e=arguments[1]);let r=2**-n,i=Math.floor(e.image.width*r),a=Math.floor(e.image.height*r),o=t===null?0:t.x,s=t===null?0:t.y;De.setTexture2D(e,0),k.copyTexSubImage2D(k.TEXTURE_2D,n,0,0,o,s,i,a),A.unbindTexture()},this.copyTextureToTexture=function(e,t,n=null,r=null,i=0){e.isTexture!==!0&&(ut(`WebGLRenderer: copyTextureToTexture function signature has changed.`),r=arguments[0]||null,e=arguments[1],t=arguments[2],i=arguments[3]||0,n=null);let a,o,s,c,l,u,d,f,p,m=e.isCompressedTexture?e.mipmaps[i]:e.image;n===null?(a=m.width,o=m.height,s=m.depth||1,c=0,l=0,u=0):(a=n.max.x-n.min.x,o=n.max.y-n.min.y,s=n.isBox3?n.max.z-n.min.z:1,c=n.min.x,l=n.min.y,u=n.isBox3?n.min.z:0),r===null?(d=0,f=0,p=0):(d=r.x,f=r.y,p=r.z);let h=Ge.convert(t.format),g=Ge.convert(t.type),_;t.isData3DTexture?(De.setTexture3D(t,0),_=k.TEXTURE_3D):t.isDataArrayTexture||t.isCompressedArrayTexture?(De.setTexture2DArray(t,0),_=k.TEXTURE_2D_ARRAY):(De.setTexture2D(t,0),_=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,t.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,t.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,t.unpackAlignment);let v=k.getParameter(k.UNPACK_ROW_LENGTH),y=k.getParameter(k.UNPACK_IMAGE_HEIGHT),b=k.getParameter(k.UNPACK_SKIP_PIXELS),x=k.getParameter(k.UNPACK_SKIP_ROWS),S=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,m.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,m.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,c),k.pixelStorei(k.UNPACK_SKIP_ROWS,l),k.pixelStorei(k.UNPACK_SKIP_IMAGES,u);let C=e.isDataArrayTexture||e.isData3DTexture,w=t.isDataArrayTexture||t.isData3DTexture;if(e.isRenderTargetTexture||e.isDepthTexture){let n=j.get(e),r=j.get(t),m=j.get(n.__renderTarget),h=j.get(r.__renderTarget);A.bindFramebuffer(k.READ_FRAMEBUFFER,m.__webglFramebuffer),A.bindFramebuffer(k.DRAW_FRAMEBUFFER,h.__webglFramebuffer);for(let n=0;n<s;n++)C&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.get(e).__webglTexture,i,u+n),e.isDepthTexture?(w&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,j.get(t).__webglTexture,i,p+n),k.blitFramebuffer(c,l,a,o,d,f,a,o,k.DEPTH_BUFFER_BIT,k.NEAREST)):w?k.copyTexSubImage3D(_,i,d,f,p+n,c,l,a,o):k.copyTexSubImage2D(_,i,d,f,p+n,c,l,a,o);A.bindFramebuffer(k.READ_FRAMEBUFFER,null),A.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else w?e.isDataTexture||e.isData3DTexture?k.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m.data):t.isCompressedArrayTexture?k.compressedTexSubImage3D(_,i,d,f,p,a,o,s,h,m.data):k.texSubImage3D(_,i,d,f,p,a,o,s,h,g,m):e.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,i,d,f,a,o,h,g,m.data):e.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,i,d,f,m.width,m.height,h,m.data):k.texSubImage2D(k.TEXTURE_2D,i,d,f,a,o,h,g,m);k.pixelStorei(k.UNPACK_ROW_LENGTH,v),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,y),k.pixelStorei(k.UNPACK_SKIP_PIXELS,b),k.pixelStorei(k.UNPACK_SKIP_ROWS,x),k.pixelStorei(k.UNPACK_SKIP_IMAGES,S),i===0&&t.generateMipmaps&&k.generateMipmap(_),A.unbindTexture()},this.copyTextureToTexture3D=function(e,t,n=null,r=null,i=0){return e.isTexture!==!0&&(ut(`WebGLRenderer: copyTextureToTexture3D function signature has changed.`),n=arguments[0]||null,r=arguments[1]||null,e=arguments[2],t=arguments[3],i=arguments[4]||0),ut(`WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.`),this.copyTextureToTexture(e,t,n,r,i)},this.initRenderTarget=function(e){j.get(e).__webglFramebuffer===void 0&&De.setupRenderTarget(e)},this.initTexture=function(e){e.isCubeTexture?De.setTextureCube(e,0):e.isData3DTexture?De.setTexture3D(e,0):e.isDataArrayTexture||e.isCompressedArrayTexture?De.setTexture2DArray(e,0):De.setTexture2D(e,0),A.unbindTexture()},this.resetState=function(){w=0,T=0,E=null,A.reset(),Ke.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return Je}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorspace=mt._getDrawingBufferColorSpace(e),t.unpackColorSpace=mt._getUnpackColorSpace()}},vs=class e{constructor(e,t=25e-5){this.isFogExp2=!0,this.name=``,this.color=new F(e),this.density=t}clone(){return new e(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}},ys=class extends Rn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},bs=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e===void 0?0:e.length/t,this.usage=Ke,this.updateRanges=[],this.version=0,this.uuid=$e()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,i=this.stride;r<i;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$e()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=$e()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xs=new P,Ss=class e{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name=``,this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyMatrix4(e),this.setXYZ(t,xs.x,xs.y,xs.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.applyNormalMatrix(e),this.setXYZ(t,xs.x,xs.y,xs.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xs.fromBufferAttribute(this,t),xs.transformDirection(e),this.setXYZ(t,xs.x,xs.y,xs.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=rt(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=it(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=rt(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=rt(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=rt(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=rt(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),n=it(n,this.array),r=it(r,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=i,this}clone(t){if(t===void 0){console.log(`THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return new lr(new this.array.constructor(e),this.itemSize,this.normalized)}return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new e(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log(`THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.`);let e=[];for(let t=0;t<this.count;t++){let n=t*this.data.stride+this.offset;for(let t=0;t<this.itemSize;t++)e.push(this.data.array[n+t])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Cs=class extends ar{static get type(){return`SpriteMaterial`}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new F(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ws,Ts=new P,Es=new P,Ds=new P,Os=new M,ks=new M,As=new dn,js=new P,Ms=new P,Ns=new P,Ps=new M,Fs=new M,Is=new M,Ls=class extends Rn{constructor(e=new Cs){if(super(),this.isSprite=!0,this.type=`Sprite`,ws===void 0){ws=new br;let e=new bs(new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),5);ws.setIndex([0,1,2,0,2,3]),ws.setAttribute(`position`,new Ss(e,3,0,!1)),ws.setAttribute(`uv`,new Ss(e,2,3,!1))}this.geometry=ws,this.material=e,this.center=new M(.5,.5)}raycast(e,t){e.camera===null&&console.error(`THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.`),Es.setFromMatrixScale(this.matrixWorld),As.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Es.multiplyScalar(-Ds.z);let n=this.material.rotation,r,i;n!==0&&(i=Math.cos(n),r=Math.sin(n));let a=this.center;Rs(js.set(-.5,-.5,0),Ds,a,Es,r,i),Rs(Ms.set(.5,-.5,0),Ds,a,Es,r,i),Rs(Ns.set(.5,.5,0),Ds,a,Es,r,i),Ps.set(0,0),Fs.set(1,0),Is.set(1,1);let o=e.ray.intersectTriangle(js,Ms,Ns,!1,Ts);if(o===null&&(Rs(Ms.set(-.5,.5,0),Ds,a,Es,r,i),Fs.set(0,1),o=e.ray.intersectTriangle(js,Ns,Ms,!1,Ts),o===null))return;let s=e.ray.origin.distanceTo(Ts);s<e.near||s>e.far||t.push({distance:s,point:Ts.clone(),uv:Qn.getInterpolation(Ts,js,Ms,Ns,Ps,Fs,Is,new M),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Rs(e,t,n,r,i,a){Os.subVectors(e,n).addScalar(.5).multiply(r),i===void 0?ks.copy(Os):(ks.x=a*Os.x-i*Os.y,ks.y=i*Os.x+a*Os.y),e.copy(t),e.x+=ks.x,e.y+=ks.y,e.applyMatrix4(As)}var zs=class extends Ot{constructor(e=null,t=1,n=1,i,a,o,s,c,l=r,u=r,d,f){super(null,o,s,c,l,u,i,a,d,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Bs=class extends lr{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Vs=new dn,Hs=new dn,Us=[],Ws=new Lt,Gs=new dn,Ks=new I,qs=new tn,Js=class extends I{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Bs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let e=0;e<n;e++)this.setMatrixAt(e,Gs)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Lt),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),Ws.copy(e.boundingBox).applyMatrix4(Vs),this.boundingBox.union(Ws)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new tn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Vs),qs.copy(e.boundingSphere).applyMatrix4(Vs),this.boundingSphere.union(qs)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,i=e*(n.length+1)+1;for(let e=0;e<n.length;e++)n[e]=r[i+e]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Ks.geometry=this.geometry,Ks.material=this.material,Ks.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),e.ray.intersectsSphere(qs)!==!1))for(let i=0;i<r;i++){this.getMatrixAt(i,Vs),Hs.multiplyMatrices(n,Vs),Ks.matrixWorld=Hs,Ks.raycast(e,Us);for(let e=0,n=Us.length;e<n;e++){let n=Us[e];n.instanceId=i,n.object=this,t.push(n)}Us.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Bs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new zs(new Float32Array(r*this.count),r,this.count,te,h));let i=this.morphTexture.source.data.data,a=0;for(let e=0;e<n.length;e++)a+=n[e];let o=this.geometry.morphTargetsRelative?1:1-a,s=r*e;i[s]=o,i.set(n,s+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:`dispose`}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}},Ys=class extends ar{static get type(){return`PointsMaterial`}constructor(e){super(),this.isPointsMaterial=!0,this.color=new F(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Xs=new dn,Zs=new un,Qs=new tn,$s=new P,ec=class extends Rn{constructor(e=new br,t=new Ys){super(),this.isPoints=!0,this.type=`Points`,this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,i=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Qs.copy(n.boundingSphere),Qs.applyMatrix4(r),Qs.radius+=i,e.ray.intersectsSphere(Qs)===!1)return;Xs.copy(r).invert(),Zs.copy(e.ray).applyMatrix4(Xs);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),s=o*o,c=n.index,l=n.attributes.position;if(c!==null){let n=Math.max(0,a.start),i=Math.min(c.count,a.start+a.count);for(let a=n,o=i;a<o;a++){let n=c.getX(a);$s.fromBufferAttribute(l,n),tc($s,n,s,r,e,t,this)}}else{let n=Math.max(0,a.start),i=Math.min(l.count,a.start+a.count);for(let a=n,o=i;a<o;a++)$s.fromBufferAttribute(l,a),tc($s,a,s,r,e,t,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){let n=e[t[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let e=0,t=n.length;e<t;e++){let t=n[e].name||String(e);this.morphTargetInfluences.push(0),this.morphTargetDictionary[t]=e}}}}};function tc(e,t,n,r,i,a,o){let s=Zs.distanceSqToPoint(e);if(s<n){let n=new P;Zs.closestPointToPoint(e,n),n.applyMatrix4(r);let c=i.ray.origin.distanceTo(n);if(c<i.near||c>i.far)return;a.push({distance:c,distanceToRay:Math.sqrt(s),point:n,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var nc=class extends Ot{constructor(e,t,n,r,i,a,o,s,c){super(e,t,n,r,i,a,o,s,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},rc=class{constructor(){this.type=`Curve`,this.arcLengthDivisions=200}getPoint(){return console.warn(`THREE.Curve: .getPoint() not implemented.`),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),i=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),i+=n.distanceTo(r),t.push(i),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,i=n.length,a;a=t||e*n[i-1];let o=0,s=i-1,c;for(;o<=s;)if(r=Math.floor(o+(s-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)s=r-1;else{s=r;break}if(r=s,n[r]===a)return r/(i-1);let l=n[r],u=n[r+1]-l,d=(a-l)/u;return(r+d)/(i-1)}getTangent(e,t){let n=1e-4,r=e-n,i=e+n;r<0&&(r=0),i>1&&(i=1);let a=this.getPoint(r),o=this.getPoint(i),s=t||(a.isVector2?new M:new P);return s.copy(o).sub(a).normalize(),s}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new P,r=[],i=[],a=[],o=new P,s=new dn;for(let t=0;t<=e;t++){let n=t/e;r[t]=this.getTangentAt(n,new P)}i[0]=new P,a[0]=new P;let c=Number.MAX_VALUE,l=Math.abs(r[0].x),u=Math.abs(r[0].y),d=Math.abs(r[0].z);l<=c&&(c=l,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),i[0].crossVectors(r[0],o),a[0].crossVectors(r[0],i[0]);for(let t=1;t<=e;t++){if(i[t]=i[t-1].clone(),a[t]=a[t-1].clone(),o.crossVectors(r[t-1],r[t]),o.length()>2**-52){o.normalize();let e=Math.acos(et(r[t-1].dot(r[t]),-1,1));i[t].applyMatrix4(s.makeRotationAxis(o,e))}a[t].crossVectors(r[t],i[t])}if(t===!0){let t=Math.acos(et(i[0].dot(i[e]),-1,1));t/=e,r[0].dot(o.crossVectors(i[0],i[e]))>0&&(t=-t);for(let n=1;n<=e;n++)i[n].applyMatrix4(s.makeRotationAxis(r[n],t*n)),a[n].crossVectors(r[n],i[n])}return{tangents:r,normals:i,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:`Curve`,generator:`Curve.toJSON`}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ic=class extends rc{constructor(e=0,t=0,n=1,r=1,i=0,a=Math.PI*2,o=!1,s=0){super(),this.isEllipseCurve=!0,this.type=`EllipseCurve`,this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=i,this.aEndAngle=a,this.aClockwise=o,this.aRotation=s}getPoint(e,t=new M){let n=t,r=Math.PI*2,i=this.aEndAngle-this.aStartAngle,a=Math.abs(i)<2**-52;for(;i<0;)i+=r;for(;i>r;)i-=r;i<2**-52&&(i=a?0:r),this.aClockwise===!0&&!a&&(i===r?i=-r:i-=r);let o=this.aStartAngle+e*i,s=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let e=Math.cos(this.aRotation),t=Math.sin(this.aRotation),n=s-this.aX,r=c-this.aY;s=n*e-r*t+this.aX,c=n*t+r*e+this.aY}return n.set(s,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ac=class extends ic{constructor(e,t,n,r,i,a){super(e,t,n,n,r,i,a),this.isArcCurve=!0,this.type=`ArcCurve`}};function oc(){let e=0,t=0,n=0,r=0;function i(i,a,o,s){e=i,t=o,n=-3*i+3*a-2*o-s,r=2*i-2*a+o+s}return{initCatmullRom:function(e,t,n,r,a){i(t,n,a*(n-e),a*(r-t))},initNonuniformCatmullRom:function(e,t,n,r,a,o,s){let c=(t-e)/a-(n-e)/(a+o)+(n-t)/o,l=(n-t)/o-(r-t)/(o+s)+(r-n)/s;c*=o,l*=o,i(t,n,c,l)},calc:function(i){let a=i*i,o=a*i;return e+t*i+n*a+r*o}}}var sc=new P,cc=new oc,lc=new oc,uc=new oc,dc=class extends rc{constructor(e=[],t=!1,n=`centripetal`,r=.5){super(),this.isCatmullRomCurve3=!0,this.type=`CatmullRomCurve3`,this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new P){let n=t,r=this.points,i=r.length,a=(i-+!this.closed)*e,o=Math.floor(a),s=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/i)+1)*i:s===0&&o===i-1&&(o=i-2,s=1);let c,l;this.closed||o>0?c=r[(o-1)%i]:(sc.subVectors(r[0],r[1]).add(r[0]),c=sc);let u=r[o%i],d=r[(o+1)%i];if(this.closed||o+2<i?l=r[(o+2)%i]:(sc.subVectors(r[i-1],r[i-2]).add(r[i-1]),l=sc),this.curveType===`centripetal`||this.curveType===`chordal`){let e=this.curveType===`chordal`?.5:.25,t=c.distanceToSquared(u)**+e,n=u.distanceToSquared(d)**+e,r=d.distanceToSquared(l)**+e;n<1e-4&&(n=1),t<1e-4&&(t=n),r<1e-4&&(r=n),cc.initNonuniformCatmullRom(c.x,u.x,d.x,l.x,t,n,r),lc.initNonuniformCatmullRom(c.y,u.y,d.y,l.y,t,n,r),uc.initNonuniformCatmullRom(c.z,u.z,d.z,l.z,t,n,r)}else this.curveType===`catmullrom`&&(cc.initCatmullRom(c.x,u.x,d.x,l.x,this.tension),lc.initCatmullRom(c.y,u.y,d.y,l.y,this.tension),uc.initCatmullRom(c.z,u.z,d.z,l.z,this.tension));return n.set(cc.calc(s),lc.calc(s),uc.calc(s)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new P().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function fc(e,t,n,r,i){let a=(r-t)*.5,o=(i-n)*.5,s=e*e,c=e*s;return(2*n-2*r+a+o)*c+(-3*n+3*r-2*a-o)*s+a*e+n}function pc(e,t){let n=1-e;return n*n*t}function mc(e,t){return 2*(1-e)*e*t}function hc(e,t){return e*e*t}function gc(e,t,n,r){return pc(e,t)+mc(e,n)+hc(e,r)}function _c(e,t){let n=1-e;return n*n*n*t}function vc(e,t){let n=1-e;return 3*n*n*e*t}function yc(e,t){return 3*(1-e)*e*e*t}function bc(e,t){return e*e*e*t}function xc(e,t,n,r,i){return _c(e,t)+vc(e,n)+yc(e,r)+bc(e,i)}var Sc=class extends rc{constructor(e=new M,t=new M,n=new M,r=new M){super(),this.isCubicBezierCurve=!0,this.type=`CubicBezierCurve`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new M){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(xc(e,r.x,i.x,a.x,o.x),xc(e,r.y,i.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Cc=class extends rc{constructor(e=new P,t=new P,n=new P,r=new P){super(),this.isCubicBezierCurve3=!0,this.type=`CubicBezierCurve3`,this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new P){let n=t,r=this.v0,i=this.v1,a=this.v2,o=this.v3;return n.set(xc(e,r.x,i.x,a.x,o.x),xc(e,r.y,i.y,a.y,o.y),xc(e,r.z,i.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},wc=class extends rc{constructor(e=new M,t=new M){super(),this.isLineCurve=!0,this.type=`LineCurve`,this.v1=e,this.v2=t}getPoint(e,t=new M){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Tc=class extends rc{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type=`LineCurve3`,this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ec=class extends rc{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve=!0,this.type=`QuadraticBezierCurve`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(gc(e,r.x,i.x,a.x),gc(e,r.y,i.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dc=class extends rc{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type=`QuadraticBezierCurve3`,this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,r=this.v0,i=this.v1,a=this.v2;return n.set(gc(e,r.x,i.x,a.x),gc(e,r.y,i.y,a.y),gc(e,r.z,i.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Oc=class extends rc{constructor(e=[]){super(),this.isSplineCurve=!0,this.type=`SplineCurve`,this.points=e}getPoint(e,t=new M){let n=t,r=this.points,i=(r.length-1)*e,a=Math.floor(i),o=i-a,s=r[a===0?a:a-1],c=r[a],l=r[a>r.length-2?r.length-1:a+1],u=r[a>r.length-3?r.length-1:a+2];return n.set(fc(o,s.x,c.x,l.x,u.x),fc(o,s.y,c.y,l.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let n=e.points[t];this.points.push(new M().fromArray(n))}return this}},kc=Object.freeze({__proto__:null,ArcCurve:ac,CatmullRomCurve3:dc,CubicBezierCurve:Sc,CubicBezierCurve3:Cc,EllipseCurve:ic,LineCurve:wc,LineCurve3:Tc,QuadraticBezierCurve:Ec,QuadraticBezierCurve3:Dc,SplineCurve:Oc}),Ac=class extends rc{constructor(){super(),this.type=`CurvePath`,this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?`LineCurve`:`LineCurve3`;this.curves.push(new kc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),i=0;for(;i<r.length;){if(r[i]>=n){let e=r[i]-n,a=this.curves[i],o=a.getLength(),s=o===0?0:1-e/o;return a.getPointAt(s,t)}i++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,i=this.curves;r<i.length;r++){let a=i[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,s=a.getPoints(o);for(let e=0;e<s.length;e++){let r=s[e];n&&n.equals(r)||(t.push(r),n=r)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let n=e.curves[t];this.curves.push(new kc[n.type]().fromJSON(n))}return this}},jc=class extends Ac{constructor(e){super(),this.type=`Path`,this.currentPoint=new M,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new wc(this.currentPoint.clone(),new M(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let i=new Ec(this.currentPoint.clone(),new M(e,t),new M(n,r));return this.curves.push(i),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,i,a){let o=new Sc(this.currentPoint.clone(),new M(e,t),new M(n,r),new M(i,a));return this.curves.push(o),this.currentPoint.set(i,a),this}splineThru(e){let t=new Oc([this.currentPoint.clone()].concat(e));return this.curves.push(t),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,i,a){let o=this.currentPoint.x,s=this.currentPoint.y;return this.absarc(e+o,t+s,n,r,i,a),this}absarc(e,t,n,r,i,a){return this.absellipse(e,t,n,n,r,i,a),this}ellipse(e,t,n,r,i,a,o,s){let c=this.currentPoint.x,l=this.currentPoint.y;return this.absellipse(e+c,t+l,n,r,i,a,o,s),this}absellipse(e,t,n,r,i,a,o,s){let c=new ic(e,t,n,r,i,a,o,s);if(this.curves.length>0){let e=c.getPoint(0);e.equals(this.currentPoint)||this.lineTo(e.x,e.y)}this.curves.push(c);let l=c.getPoint(1);return this.currentPoint.copy(l),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mc=class e extends br{constructor(e=[new M(0,-.5),new M(.5,0),new M(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type=`LatheGeometry`,this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=et(r,0,Math.PI*2);let i=[],a=[],o=[],s=[],c=[],l=1/t,u=new P,d=new M,f=new P,p=new P,m=new P,h=0,g=0;for(let t=0;t<=e.length-1;t++)switch(t){case 0:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,m.copy(f),f.normalize(),s.push(f.x,f.y,f.z);break;case e.length-1:s.push(m.x,m.y,m.z);break;default:h=e[t+1].x-e[t].x,g=e[t+1].y-e[t].y,f.x=g*1,f.y=-h,f.z=g*0,p.copy(f),f.x+=m.x,f.y+=m.y,f.z+=m.z,f.normalize(),s.push(f.x,f.y,f.z),m.copy(p)}for(let i=0;i<=t;i++){let f=n+i*l*r,p=Math.sin(f),m=Math.cos(f);for(let n=0;n<=e.length-1;n++){u.x=e[n].x*p,u.y=e[n].y,u.z=e[n].x*m,a.push(u.x,u.y,u.z),d.x=i/t,d.y=n/(e.length-1),o.push(d.x,d.y);let r=s[3*n+0]*p,l=s[3*n+1],f=s[3*n+0]*m;c.push(r,l,f)}}for(let n=0;n<t;n++)for(let t=0;t<e.length-1;t++){let r=t+n*e.length,a=r,o=r+e.length,s=r+e.length+1,c=r+1;i.push(a,o,c),i.push(s,c,o)}this.setIndex(i),this.setAttribute(`position`,new fr(a,3)),this.setAttribute(`uv`,new fr(o,2)),this.setAttribute(`normal`,new fr(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.points,t.segments,t.phiStart,t.phiLength)}},Nc=class e extends Mc{constructor(e=1,t=1,n=4,r=8){let i=new jc;i.absarc(0,-t/2,e,Math.PI*1.5,0),i.absarc(0,t/2,e,0,Math.PI*.5),super(i.getPoints(n),r),this.type=`CapsuleGeometry`,this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(t){return new e(t.radius,t.length,t.capSegments,t.radialSegments)}},Pc=class e extends br{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type=`CircleGeometry`,this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let i=[],a=[],o=[],s=[],c=new P,l=new M;a.push(0,0,0),o.push(0,0,1),s.push(.5,.5);for(let i=0,u=3;i<=t;i++,u+=3){let d=n+i/t*r;c.x=e*Math.cos(d),c.y=e*Math.sin(d),a.push(c.x,c.y,c.z),o.push(0,0,1),l.x=(a[u]/e+1)/2,l.y=(a[u+1]/e+1)/2,s.push(l.x,l.y)}for(let e=1;e<=t;e++)i.push(e,e+1,0);this.setIndex(i),this.setAttribute(`position`,new fr(a,3)),this.setAttribute(`normal`,new fr(o,3)),this.setAttribute(`uv`,new fr(s,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fc=class e extends br{constructor(e=1,t=1,n=1,r=32,i=1,a=!1,o=0,s=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:s};let c=this;r=Math.floor(r),i=Math.floor(i);let l=[],u=[],d=[],f=[],p=0,m=[],h=n/2,g=0;_(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(l),this.setAttribute(`position`,new fr(u,3)),this.setAttribute(`normal`,new fr(d,3)),this.setAttribute(`uv`,new fr(f,2));function _(){let a=new P,_=new P,v=0,y=(t-e)/n;for(let c=0;c<=i;c++){let l=[],g=c/i,v=g*(t-e)+e;for(let e=0;e<=r;e++){let t=e/r,i=t*s+o,c=Math.sin(i),m=Math.cos(i);_.x=v*c,_.y=-g*n+h,_.z=v*m,u.push(_.x,_.y,_.z),a.set(c,y,m).normalize(),d.push(a.x,a.y,a.z),f.push(t,1-g),l.push(p++)}m.push(l)}for(let n=0;n<r;n++)for(let r=0;r<i;r++){let a=m[r][n],o=m[r+1][n],s=m[r+1][n+1],c=m[r][n+1];(e>0||r!==0)&&(l.push(a,o,c),v+=3),(t>0||r!==i-1)&&(l.push(o,s,c),v+=3)}c.addGroup(g,v,0),g+=v}function v(n){let i=p,a=new M,m=new P,_=0,v=n===!0?e:t,y=n===!0?1:-1;for(let e=1;e<=r;e++)u.push(0,h*y,0),d.push(0,y,0),f.push(.5,.5),p++;let b=p;for(let e=0;e<=r;e++){let t=e/r*s+o,n=Math.cos(t),i=Math.sin(t);m.x=v*i,m.y=h*y,m.z=v*n,u.push(m.x,m.y,m.z),d.push(0,y,0),a.x=n*.5+.5,a.y=i*.5*y+.5,f.push(a.x,a.y),p++}for(let e=0;e<r;e++){let t=i+e,r=b+e;n===!0?l.push(r,r+1,t):l.push(r+1,r,t),_+=3}c.addGroup(g,_,n===!0?1:2),g+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Ic=class e extends Fc{constructor(e=1,t=1,n=32,r=1,i=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,i,a,o),this.type=`ConeGeometry`,this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:i,thetaStart:a,thetaLength:o}}static fromJSON(t){return new e(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Lc=class e extends br{constructor(e=[],t=[],n=1,r=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:e,indices:t,radius:n,detail:r};let i=[],a=[];o(r),c(n),l(),this.setAttribute(`position`,new fr(i,3)),this.setAttribute(`normal`,new fr(i.slice(),3)),this.setAttribute(`uv`,new fr(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(e){let n=new P,r=new P,i=new P;for(let a=0;a<t.length;a+=3)f(t[a+0],n),f(t[a+1],r),f(t[a+2],i),s(n,r,i,e)}function s(e,t,n,r){let i=r+1,a=[];for(let r=0;r<=i;r++){a[r]=[];let o=e.clone().lerp(n,r/i),s=t.clone().lerp(n,r/i),c=i-r;for(let e=0;e<=c;e++)e===0&&r===i?a[r][e]=o:a[r][e]=o.clone().lerp(s,e/c)}for(let e=0;e<i;e++)for(let t=0;t<2*(i-e)-1;t++){let n=Math.floor(t/2);t%2==0?(d(a[e][n+1]),d(a[e+1][n]),d(a[e][n])):(d(a[e][n+1]),d(a[e+1][n+1]),d(a[e+1][n]))}}function c(e){let t=new P;for(let n=0;n<i.length;n+=3)t.x=i[n+0],t.y=i[n+1],t.z=i[n+2],t.normalize().multiplyScalar(e),i[n+0]=t.x,i[n+1]=t.y,i[n+2]=t.z}function l(){let e=new P;for(let t=0;t<i.length;t+=3){e.x=i[t+0],e.y=i[t+1],e.z=i[t+2];let n=h(e)/2/Math.PI+.5,r=g(e)/Math.PI+.5;a.push(n,1-r)}p(),u()}function u(){for(let e=0;e<a.length;e+=6){let t=a[e+0],n=a[e+2],r=a[e+4];Math.max(t,n,r)>.9&&Math.min(t,n,r)<.1&&(t<.2&&(a[e+0]+=1),n<.2&&(a[e+2]+=1),r<.2&&(a[e+4]+=1))}}function d(e){i.push(e.x,e.y,e.z)}function f(t,n){let r=t*3;n.x=e[r+0],n.y=e[r+1],n.z=e[r+2]}function p(){let e=new P,t=new P,n=new P,r=new P,o=new M,s=new M,c=new M;for(let l=0,u=0;l<i.length;l+=9,u+=6){e.set(i[l+0],i[l+1],i[l+2]),t.set(i[l+3],i[l+4],i[l+5]),n.set(i[l+6],i[l+7],i[l+8]),o.set(a[u+0],a[u+1]),s.set(a[u+2],a[u+3]),c.set(a[u+4],a[u+5]),r.copy(e).add(t).add(n).divideScalar(3);let d=h(r);m(o,u+0,e,d),m(s,u+2,t,d),m(c,u+4,n,d)}}function m(e,t,n,r){r<0&&e.x===1&&(a[t]=e.x-1),n.x===0&&n.z===0&&(a[t]=r/2/Math.PI+.5)}function h(e){return Math.atan2(e.z,-e.x)}function g(e){return Math.atan2(-e.y,Math.sqrt(e.x*e.x+e.z*e.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.vertices,t.indices,t.radius,t.details)}},Rc=class e extends Lc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=1/n,i=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r];super(i,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],e,t),this.type=`DodecahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},zc=class extends jc{constructor(e){super(e),this.uuid=$e(),this.type=`Shape`,this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let n=e.holes[t];this.holes.push(new jc().fromJSON(n))}return this}},Bc={triangulate:function(e,t,n=2){let r=t&&t.length,i=r?t[0]*n:e.length,a=Vc(e,0,i,n,!0),o=[];if(!a||a.next===a.prev)return o;let s,c,l,u,d,f,p;if(r&&(a=Jc(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(let t=n;t<i;t+=n)d=e[t],f=e[t+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c),p=p===0?0:32767/p}return Uc(a,o,n,s,c,p,0),o}};function Vc(e,t,n,r,i){let a,o;if(i===_l(e,t,n,r)>0)for(a=t;a<n;a+=r)o=ml(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=ml(a,e[a],e[a+1],o);return o&&ol(o,o.next)&&(hl(o),o=o.next),o}function Hc(e,t){if(!e)return e;t||=e;let n=e,r;do if(r=!1,!n.steiner&&(ol(n,n.next)||al(n.prev,n,n.next)===0)){if(hl(n),n=t=n.prev,n===n.next)break;r=!0}else n=n.next;while(r||n!==t);return t}function Uc(e,t,n,r,i,a,o){if(!e)return;!o&&a&&$c(e,r,i,a);let s=e,c,l;for(;e.prev!==e.next;){if(c=e.prev,l=e.next,a?Gc(e,r,i,a):Wc(e)){t.push(c.i/n|0),t.push(e.i/n|0),t.push(l.i/n|0),hl(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=Kc(Hc(e),t,n),Uc(e,t,n,r,i,a,2)):o===2&&qc(e,t,n,r,i,a):Uc(Hc(e),t,n,r,i,a,1);break}}}function Wc(e){let t=e.prev,n=e,r=e.next;if(al(t,n,r)>=0)return!1;let i=t.x,a=n.x,o=r.x,s=t.y,c=n.y,l=r.y,u=i<a?i<o?i:o:a<o?a:o,d=s<c?s<l?s:l:c<l?c:l,f=i>a?i>o?i:o:a>o?a:o,p=s>c?s>l?s:l:c>l?c:l,m=r.next;for(;m!==t;){if(m.x>=u&&m.x<=f&&m.y>=d&&m.y<=p&&rl(i,s,a,c,o,l,m.x,m.y)&&al(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Gc(e,t,n,r){let i=e.prev,a=e,o=e.next;if(al(i,a,o)>=0)return!1;let s=i.x,c=a.x,l=o.x,u=i.y,d=a.y,f=o.y,p=s<c?s<l?s:l:c<l?c:l,m=u<d?u<f?u:f:d<f?d:f,h=s>c?s>l?s:l:c>l?c:l,g=u>d?u>f?u:f:d>f?d:f,_=tl(p,m,t,n,r),v=tl(h,g,t,n,r),y=e.prevZ,b=e.nextZ;for(;y&&y.z>=_&&b&&b.z<=v;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&rl(s,u,c,d,l,f,y.x,y.y)&&al(y.prev,y,y.next)>=0||(y=y.prevZ,b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&rl(s,u,c,d,l,f,b.x,b.y)&&al(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;y&&y.z>=_;){if(y.x>=p&&y.x<=h&&y.y>=m&&y.y<=g&&y!==i&&y!==o&&rl(s,u,c,d,l,f,y.x,y.y)&&al(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;b&&b.z<=v;){if(b.x>=p&&b.x<=h&&b.y>=m&&b.y<=g&&b!==i&&b!==o&&rl(s,u,c,d,l,f,b.x,b.y)&&al(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function Kc(e,t,n){let r=e;do{let i=r.prev,a=r.next.next;!ol(i,a)&&sl(i,r,r.next,a)&&dl(i,a)&&dl(a,i)&&(t.push(i.i/n|0),t.push(r.i/n|0),t.push(a.i/n|0),hl(r),hl(r.next),r=e=a),r=r.next}while(r!==e);return Hc(r)}function qc(e,t,n,r,i,a){let o=e;do{let e=o.next.next;for(;e!==o.prev;){if(o.i!==e.i&&il(o,e)){let s=pl(o,e);o=Hc(o,o.next),s=Hc(s,s.next),Uc(o,t,n,r,i,a,0),Uc(s,t,n,r,i,a,0);return}e=e.next}o=o.next}while(o!==e)}function Jc(e,t,n,r){let i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=Vc(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(nl(l));for(i.sort(Yc),a=0;a<i.length;a++)n=Xc(i[a],n);return n}function Yc(e,t){return e.x-t.x}function Xc(e,t){let n=Zc(e,t);if(!n)return t;let r=pl(n,e);return Hc(r,r.next),Hc(n,n.next)}function Zc(e,t){let n=t,r=-1/0,i,a=e.x,o=e.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){let e=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(e<=a&&e>r&&(r=e,i=n.x<n.next.x?n:n.next,e===a))return i}n=n.next}while(n!==t);if(!i)return null;let s=i,c=i.x,l=i.y,u=1/0,d;n=i;do a>=n.x&&n.x>=c&&a!==n.x&&rl(o<l?a:r,o,c,l,o<l?r:a,o,n.x,n.y)&&(d=Math.abs(o-n.y)/(a-n.x),dl(n,e)&&(d<u||d===u&&(n.x>i.x||n.x===i.x&&Qc(i,n)))&&(i=n,u=d)),n=n.next;while(n!==s);return i}function Qc(e,t){return al(e.prev,e,t.prev)<0&&al(t.next,e,e.next)<0}function $c(e,t,n,r){let i=e;do i.z===0&&(i.z=tl(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,el(i)}function el(e){let t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function tl(e,t,n,r,i){return e=(e-n)*i|0,t=(t-r)*i|0,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function nl(e){let t=e,n=e;do(t.x<n.x||t.x===n.x&&t.y<n.y)&&(n=t),t=t.next;while(t!==e);return n}function rl(e,t,n,r,i,a,o,s){return(i-o)*(t-s)>=(e-o)*(a-s)&&(e-o)*(r-s)>=(n-o)*(t-s)&&(n-o)*(a-s)>=(i-o)*(r-s)}function il(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ul(e,t)&&(dl(e,t)&&dl(t,e)&&fl(e,t)&&(al(e.prev,e,t.prev)||al(e,t.prev,t))||ol(e,t)&&al(e.prev,e,e.next)>0&&al(t.prev,t,t.next)>0)}function al(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function ol(e,t){return e.x===t.x&&e.y===t.y}function sl(e,t,n,r){let i=ll(al(e,t,n)),a=ll(al(e,t,r)),o=ll(al(n,r,e)),s=ll(al(n,r,t));return!!(i!==a&&o!==s||i===0&&cl(e,n,t)||a===0&&cl(e,r,t)||o===0&&cl(n,e,r)||s===0&&cl(n,t,r))}function cl(e,t,n){return t.x<=Math.max(e.x,n.x)&&t.x>=Math.min(e.x,n.x)&&t.y<=Math.max(e.y,n.y)&&t.y>=Math.min(e.y,n.y)}function ll(e){return e>0?1:e<0?-1:0}function ul(e,t){let n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&sl(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function dl(e,t){return al(e.prev,e,e.next)<0?al(e,t,e.next)>=0&&al(e,e.prev,t)>=0:al(e,t,e.prev)<0||al(e,e.next,t)<0}function fl(e,t){let n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function pl(e,t){let n=new gl(e.i,e.x,e.y),r=new gl(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function ml(e,t,n,r){let i=new gl(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function hl(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function gl(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function _l(e,t,n,r){let i=0;for(let a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}var vl=class e{static area(e){let t=e.length,n=0;for(let r=t-1,i=0;i<t;r=i++)n+=e[r].x*e[i].y-e[i].x*e[r].y;return n*.5}static isClockWise(t){return e.area(t)<0}static triangulateShape(e,t){let n=[],r=[],i=[];yl(e),bl(n,e);let a=e.length;t.forEach(yl);for(let e=0;e<t.length;e++)r.push(a),a+=t[e].length,bl(n,t[e]);let o=Bc.triangulate(n,r);for(let e=0;e<o.length;e+=3)i.push(o.slice(e,e+3));return i}};function yl(e){let t=e.length;t>2&&e[t-1].equals(e[0])&&e.pop()}function bl(e,t){for(let n=0;n<t.length;n++)e.push(t[n].x),e.push(t[n].y)}var xl=class e extends br{constructor(e=new zc([new M(.5,.5),new M(-.5,.5),new M(-.5,-.5),new M(.5,-.5)]),t={}){super(),this.type=`ExtrudeGeometry`,this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],i=[];for(let t=0,n=e.length;t<n;t++){let n=e[t];a(n)}this.setAttribute(`position`,new fr(r,3)),this.setAttribute(`uv`,new fr(i,2)),this.computeVertexNormals();function a(e){let a=[],o=t.curveSegments===void 0?12:t.curveSegments,s=t.steps===void 0?1:t.steps,c=t.depth===void 0?1:t.depth,l=t.bevelEnabled===void 0||t.bevelEnabled,u=t.bevelThickness===void 0?.2:t.bevelThickness,d=t.bevelSize===void 0?u-.1:t.bevelSize,f=t.bevelOffset===void 0?0:t.bevelOffset,p=t.bevelSegments===void 0?3:t.bevelSegments,m=t.extrudePath,h=t.UVGenerator===void 0?Sl:t.UVGenerator,g,_=!1,v,y,b,x;m&&(g=m.getSpacedPoints(s),_=!0,l=!1,v=m.computeFrenetFrames(s,!1),y=new P,b=new P,x=new P),l||(p=0,u=0,d=0,f=0);let S=e.extractPoints(o),C=S.shape,w=S.holes;if(!vl.isClockWise(C)){C=C.reverse();for(let e=0,t=w.length;e<t;e++){let t=w[e];vl.isClockWise(t)&&(w[e]=t.reverse())}}let T=vl.triangulateShape(C,w),E=C;for(let e=0,t=w.length;e<t;e++){let t=w[e];C=C.concat(t)}function ee(e,t,n){return t||console.error(`THREE.ExtrudeGeometry: vec does not exist`),e.clone().addScaledVector(t,n)}let te=C.length,D=T.length;function ne(e,t,n){let r,i,a,o=e.x-t.x,s=e.y-t.y,c=n.x-e.x,l=n.y-e.y,u=o*o+s*s,d=o*l-s*c;if(Math.abs(d)>2**-52){let d=Math.sqrt(u),f=Math.sqrt(c*c+l*l),p=t.x-s/d,m=t.y+o/d,h=n.x-l/f,g=n.y+c/f,_=((h-p)*l-(g-m)*c)/(o*l-s*c);r=p+o*_-e.x,i=m+s*_-e.y;let v=r*r+i*i;if(v<=2)return new M(r,i);a=Math.sqrt(v/2)}else{let e=!1;o>2**-52?c>2**-52&&(e=!0):o<-(2**-52)?c<-(2**-52)&&(e=!0):Math.sign(s)===Math.sign(l)&&(e=!0),e?(r=-s,i=o,a=Math.sqrt(u)):(r=o,i=s,a=Math.sqrt(u/2))}return new M(r/a,i/a)}let O=[];for(let e=0,t=E.length,n=t-1,r=e+1;e<t;e++,n++,r++)n===t&&(n=0),r===t&&(r=0),O[e]=ne(E[e],E[n],E[r]);let re=[],ie,ae=O.concat();for(let e=0,t=w.length;e<t;e++){let t=w[e];ie=[];for(let e=0,n=t.length,r=n-1,i=e+1;e<n;e++,r++,i++)r===n&&(r=0),i===n&&(i=0),ie[e]=ne(t[e],t[r],t[i]);re.push(ie),ae=ae.concat(ie)}for(let e=0;e<p;e++){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=ee(E[e],O[e],r);ue(t.x,t.y,-n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ie=re[e];for(let e=0,i=t.length;e<i;e++){let i=ee(t[e],ie[e],r);ue(i.x,i.y,-n)}}}let oe=d+f;for(let e=0;e<te;e++){let t=l?ee(C[e],ae[e],oe):C[e];_?(b.copy(v.normals[0]).multiplyScalar(t.x),y.copy(v.binormals[0]).multiplyScalar(t.y),x.copy(g[0]).add(b).add(y),ue(x.x,x.y,x.z)):ue(t.x,t.y,0)}for(let e=1;e<=s;e++)for(let t=0;t<te;t++){let n=l?ee(C[t],ae[t],oe):C[t];_?(b.copy(v.normals[e]).multiplyScalar(n.x),y.copy(v.binormals[e]).multiplyScalar(n.y),x.copy(g[e]).add(b).add(y),ue(x.x,x.y,x.z)):ue(n.x,n.y,c/s*e)}for(let e=p-1;e>=0;e--){let t=e/p,n=u*Math.cos(t*Math.PI/2),r=d*Math.sin(t*Math.PI/2)+f;for(let e=0,t=E.length;e<t;e++){let t=ee(E[e],O[e],r);ue(t.x,t.y,c+n)}for(let e=0,t=w.length;e<t;e++){let t=w[e];ie=re[e];for(let e=0,i=t.length;e<i;e++){let i=ee(t[e],ie[e],r);_?ue(i.x,i.y+g[s-1].y,g[s-1].x+n):ue(i.x,i.y,c+n)}}}se(),ce();function se(){let e=r.length/3;if(l){let e=0,t=te*e;for(let e=0;e<D;e++){let n=T[e];de(n[2]+t,n[1]+t,n[0]+t)}e=s+p*2,t=te*e;for(let e=0;e<D;e++){let n=T[e];de(n[0]+t,n[1]+t,n[2]+t)}}else{for(let e=0;e<D;e++){let t=T[e];de(t[2],t[1],t[0])}for(let e=0;e<D;e++){let t=T[e];de(t[0]+te*s,t[1]+te*s,t[2]+te*s)}}n.addGroup(e,r.length/3-e,0)}function ce(){let e=r.length/3,t=0;le(E,t),t+=E.length;for(let e=0,n=w.length;e<n;e++){let n=w[e];le(n,t),t+=n.length}n.addGroup(e,r.length/3-e,1)}function le(e,t){let n=e.length;for(;--n>=0;){let r=n,i=n-1;i<0&&(i=e.length-1);for(let e=0,n=s+p*2;e<n;e++){let n=te*e,a=te*(e+1);fe(t+r+n,t+i+n,t+i+a,t+r+a)}}}function ue(e,t,n){a.push(e),a.push(t),a.push(n)}function de(e,t,i){pe(e),pe(t),pe(i);let a=r.length/3,o=h.generateTopUV(n,r,a-3,a-2,a-1);me(o[0]),me(o[1]),me(o[2])}function fe(e,t,i,a){pe(e),pe(t),pe(a),pe(t),pe(i),pe(a);let o=r.length/3,s=h.generateSideWallUV(n,r,o-6,o-3,o-2,o-1);me(s[0]),me(s[1]),me(s[3]),me(s[1]),me(s[2]),me(s[3])}function pe(e){r.push(a[e*3+0]),r.push(a[e*3+1]),r.push(a[e*3+2])}function me(e){i.push(e.x),i.push(e.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Cl(t,n,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}let i=t.options.extrudePath;return i!==void 0&&(t.options.extrudePath=new kc[i.type]().fromJSON(i)),new e(r,t.options)}},Sl={generateTopUV:function(e,t,n,r,i){let a=t[n*3],o=t[n*3+1],s=t[r*3],c=t[r*3+1],l=t[i*3],u=t[i*3+1];return[new M(a,o),new M(s,c),new M(l,u)]},generateSideWallUV:function(e,t,n,r,i,a){let o=t[n*3],s=t[n*3+1],c=t[n*3+2],l=t[r*3],u=t[r*3+1],d=t[r*3+2],f=t[i*3],p=t[i*3+1],m=t[i*3+2],h=t[a*3],g=t[a*3+1],_=t[a*3+2];return Math.abs(s-u)<Math.abs(o-l)?[new M(o,1-c),new M(l,1-d),new M(f,1-m),new M(h,1-_)]:[new M(s,1-c),new M(u,1-d),new M(p,1-m),new M(g,1-_)]}};function Cl(e,t,n){if(n.shapes=[],Array.isArray(e))for(let t=0,r=e.length;t<r;t++){let r=e[t];n.shapes.push(r.uuid)}else n.shapes.push(e.uuid);return n.options=Object.assign({},t),t.extrudePath!==void 0&&(n.options.extrudePath=t.extrudePath.toJSON()),n}var wl=class e extends Lc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1];super(r,[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1],e,t),this.type=`IcosahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},Tl=class e extends Lc{constructor(e=1,t=0){super([1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2],e,t),this.type=`OctahedronGeometry`,this.parameters={radius:e,detail:t}}static fromJSON(t){return new e(t.radius,t.detail)}},El=class e extends br{constructor(e=.5,t=1,n=32,r=1,i=0,a=Math.PI*2){super(),this.type=`RingGeometry`,this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:i,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);let o=[],s=[],c=[],l=[],u=e,d=(t-e)/r,f=new P,p=new M;for(let e=0;e<=r;e++){for(let e=0;e<=n;e++){let r=i+e/n*a;f.x=u*Math.cos(r),f.y=u*Math.sin(r),s.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,l.push(p.x,p.y)}u+=d}for(let e=0;e<r;e++){let t=e*(n+1);for(let e=0;e<n;e++){let r=e+t,i=r,a=r+n+1,s=r+n+2,c=r+1;o.push(i,a,c),o.push(a,s,c)}}this.setIndex(o),this.setAttribute(`position`,new fr(s,3)),this.setAttribute(`normal`,new fr(c,3)),this.setAttribute(`uv`,new fr(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},Dl=class e extends br{constructor(e=new zc([new M(0,.5),new M(-.5,-.5),new M(.5,-.5)]),t=12){super(),this.type=`ShapeGeometry`,this.parameters={shapes:e,curveSegments:t};let n=[],r=[],i=[],a=[],o=0,s=0;if(Array.isArray(e)===!1)c(e);else for(let t=0;t<e.length;t++)c(e[t]),this.addGroup(o,s,t),o+=s,s=0;this.setIndex(n),this.setAttribute(`position`,new fr(r,3)),this.setAttribute(`normal`,new fr(i,3)),this.setAttribute(`uv`,new fr(a,2));function c(e){let o=r.length/3,c=e.extractPoints(t),l=c.shape,u=c.holes;vl.isClockWise(l)===!1&&(l=l.reverse());for(let e=0,t=u.length;e<t;e++){let t=u[e];vl.isClockWise(t)===!0&&(u[e]=t.reverse())}let d=vl.triangulateShape(l,u);for(let e=0,t=u.length;e<t;e++){let t=u[e];l=l.concat(t)}for(let e=0,t=l.length;e<t;e++){let t=l[e];r.push(t.x,t.y,0),i.push(0,0,1),a.push(t.x,t.y)}for(let e=0,t=d.length;e<t;e++){let t=d[e],r=t[0]+o,i=t[1]+o,a=t[2]+o;n.push(r,i,a),s+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return Ol(t,e)}static fromJSON(t,n){let r=[];for(let e=0,i=t.shapes.length;e<i;e++){let i=n[t.shapes[e]];r.push(i)}return new e(r,t.curveSegments)}};function Ol(e,t){if(t.shapes=[],Array.isArray(e))for(let n=0,r=e.length;n<r;n++){let r=e[n];t.shapes.push(r.uuid)}else t.shapes.push(e.uuid);return t}var kl=class e extends br{constructor(e=1,t=32,n=16,r=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let s=Math.min(a+o,Math.PI),c=0,l=[],u=new P,d=new P,f=[],p=[],m=[],h=[];for(let f=0;f<=n;f++){let g=[],_=f/n,v=0;f===0&&a===0?v=.5/t:f===n&&s===Math.PI&&(v=-.5/t);for(let n=0;n<=t;n++){let s=n/t;u.x=-e*Math.cos(r+s*i)*Math.sin(a+_*o),u.y=e*Math.cos(a+_*o),u.z=e*Math.sin(r+s*i)*Math.sin(a+_*o),p.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),h.push(s+v,1-_),g.push(c++)}l.push(g)}for(let e=0;e<n;e++)for(let r=0;r<t;r++){let t=l[e][r+1],i=l[e][r],o=l[e+1][r],c=l[e+1][r+1];(e!==0||a>0)&&f.push(t,i,c),(e!==n-1||s<Math.PI)&&f.push(i,o,c)}this.setIndex(f),this.setAttribute(`position`,new fr(p,3)),this.setAttribute(`normal`,new fr(m,3)),this.setAttribute(`uv`,new fr(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},Al=class e extends br{constructor(e=1,t=.4,n=12,r=48,i=Math.PI*2){super(),this.type=`TorusGeometry`,this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:i},n=Math.floor(n),r=Math.floor(r);let a=[],o=[],s=[],c=[],l=new P,u=new P,d=new P;for(let a=0;a<=n;a++)for(let f=0;f<=r;f++){let p=f/r*i,m=a/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(p),u.y=(e+t*Math.cos(m))*Math.sin(p),u.z=t*Math.sin(m),o.push(u.x,u.y,u.z),l.x=e*Math.cos(p),l.y=e*Math.sin(p),d.subVectors(u,l).normalize(),s.push(d.x,d.y,d.z),c.push(f/r),c.push(a/n)}for(let e=1;e<=n;e++)for(let t=1;t<=r;t++){let n=(r+1)*e+t-1,i=(r+1)*(e-1)+t-1,o=(r+1)*(e-1)+t,s=(r+1)*e+t;a.push(n,i,s),a.push(i,o,s)}this.setIndex(a),this.setAttribute(`position`,new fr(o,3)),this.setAttribute(`normal`,new fr(s,3)),this.setAttribute(`uv`,new fr(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(t){return new e(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},jl=class extends Hr{static get type(){return`RawShaderMaterial`}constructor(e){super(e),this.isRawShaderMaterial=!0}},Ml=class extends ar{static get type(){return`MeshPhongMaterial`}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new F(16777215),this.specular=new F(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new F(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new M(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Nl=class extends ar{static get type(){return`MeshLambertMaterial`}constructor(e){super(),this.isMeshLambertMaterial=!0,this.color=new F(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new F(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=0,this.normalScale=new M(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function Pl(e,t,n){return!e||!n&&e.constructor===t?e:typeof t.BYTES_PER_ELEMENT==`number`?new t(e):Array.prototype.slice.call(e)}function Fl(e){return ArrayBuffer.isView(e)&&!(e instanceof DataView)}var Il=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r===void 0?new t.constructor(n):r,this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],i=t[n-1];validate_interval:{seek:{let a;linear_scan:{forward_scan:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<i)break forward_scan;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(i=r,r=t[++n],e<r)break seek}a=t.length;break linear_scan}if(!(e>=i)){let o=t[1];e<o&&(n=2,i=o);for(let a=n-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===a)break;if(r=i,i=t[--n-1],e>=i)break seek}a=n,n=0;break linear_scan}break validate_interval}for(;n<a;){let r=n+a>>>1;e<t[r]?a=r:n=r+1}if(r=t[n],i=t[n-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,i,r)}return this.interpolate_(n,i,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,i=e*r;for(let e=0;e!==r;++e)t[e]=n[i+e];return t}interpolate_(){throw Error(`call to abstract method`)}intervalChanged_(){}},Ll=class extends Il{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ie,endingEnd:Ie}}intervalChanged_(e,t,n){let r=this.parameterPositions,i=e-2,a=e+1,o=r[i],s=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Le:i=e,o=2*t-n;break;case Re:i=r.length-2,o=t+r[i]-r[i+1];break;default:i=e,o=n}if(s===void 0)switch(this.getSettings_().endingEnd){case Le:a=e,s=2*n-t;break;case Re:a=1,s=n+r[1]-r[0];break;default:a=e-1,s=t}let c=(n-t)*.5,l=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(s-n),this._offsetPrev=i*l,this._offsetNext=a*l}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),m=p*p,h=m*p,g=-d*h+2*d*m-d*p,_=(1+d)*h+(-1.5-2*d)*m+(-.5+d)*p+1,v=(-1-f)*h+(1.5+f)*m+.5*p,y=f*h-f*m;for(let e=0;e!==o;++e)i[e]=g*a[l+e]+_*a[c+e]+v*a[s+e]+y*a[u+e];return i}},Rl=class extends Il{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=e*o,c=s-o,l=(n-t)/(r-t),u=1-l;for(let e=0;e!==o;++e)i[e]=a[c+e]*u+a[s+e]*l;return i}},zl=class extends Il{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},Bl=class{constructor(e,t,n,r){if(e===void 0)throw Error(`THREE.KeyframeTrack: track name is undefined`);if(t===void 0||t.length===0)throw Error(`THREE.KeyframeTrack: no keyframes in track named `+e);this.name=e,this.times=Pl(t,this.TimeBufferType),this.values=Pl(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pl(e.times,Array),values:Pl(e.values,Array)};let t=e.getInterpolation();t!==e.DefaultInterpolation&&(n.interpolation=t)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new zl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Rl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ll(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ne:t=this.InterpolantFactoryMethodDiscrete;break;case Pe:t=this.InterpolantFactoryMethodLinear;break;case Fe:t=this.InterpolantFactoryMethodSmooth}if(t===void 0){let t=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0){if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw Error(t)}return console.warn(`THREE.KeyframeTrack:`,t),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ne;case this.InterpolantFactoryMethodLinear:return Pe;case this.InterpolantFactoryMethodSmooth:return Fe}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,i=0,a=r-1;for(;i!==r&&n[i]<e;)++i;for(;a!==-1&&n[a]>t;)--a;if(++a,i!==0||a!==r){i>=a&&(a=Math.max(a,1),i=a-1);let e=this.getValueSize();this.times=n.slice(i,a),this.values=this.values.slice(i*e,a*e)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error(`THREE.KeyframeTrack: Invalid value size in track.`,this),e=!1);let n=this.times,r=this.values,i=n.length;i===0&&(console.error(`THREE.KeyframeTrack: Track is empty.`,this),e=!1);let a=null;for(let t=0;t!==i;t++){let r=n[t];if(typeof r==`number`&&isNaN(r)){console.error(`THREE.KeyframeTrack: Time is not a valid number.`,this,t,r),e=!1;break}if(a!==null&&a>r){console.error(`THREE.KeyframeTrack: Out of order keys.`,this,t,r,a),e=!1;break}a=r}if(r!==void 0&&Fl(r))for(let t=0,n=r.length;t!==n;++t){let n=r[t];if(isNaN(n)){console.error(`THREE.KeyframeTrack: Value is not a valid number.`,this,t,n),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===Fe,i=e.length-1,a=1;for(let o=1;o<i;++o){let i=!1,s=e[o];if(s!==e[o+1]&&(o!==1||s!==e[0])){if(r)i=!0;else{let e=o*n,r=e-n,a=e+n;for(let o=0;o!==n;++o){let n=t[e+o];if(n!==t[r+o]||n!==t[a+o]){i=!0;break}}}}if(i){if(o!==a){e[a]=e[o];let r=o*n,i=a*n;for(let e=0;e!==n;++e)t[i+e]=t[r+e]}++a}}if(i>0){e[a]=e[i];for(let e=i*n,r=a*n,o=0;o!==n;++o)t[r+o]=t[e+o];++a}return a===e.length?(this.times=e,this.values=t):(this.times=e.slice(0,a),this.values=t.slice(0,a*n)),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};Bl.prototype.TimeBufferType=Float32Array,Bl.prototype.ValueBufferType=Float32Array,Bl.prototype.DefaultInterpolation=Pe;var Vl=class extends Bl{constructor(e,t,n){super(e,t,n)}};Vl.prototype.ValueTypeName=`bool`,Vl.prototype.ValueBufferType=Array,Vl.prototype.DefaultInterpolation=Ne,Vl.prototype.InterpolantFactoryMethodLinear=void 0,Vl.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Bl{};Hl.prototype.ValueTypeName=`color`;var Ul=class extends Bl{};Ul.prototype.ValueTypeName=`number`;var Wl=class extends Il{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,s=(n-t)/(r-t),c=e*o;for(let e=c+o;c!==e;c+=4)Pt.slerpFlat(i,0,a,c-o,a,c,s);return i}},Gl=class extends Bl{InterpolantFactoryMethodLinear(e){return new Wl(this.times,this.values,this.getValueSize(),e)}};Gl.prototype.ValueTypeName=`quaternion`,Gl.prototype.InterpolantFactoryMethodSmooth=void 0;var Kl=class extends Bl{constructor(e,t,n){super(e,t,n)}};Kl.prototype.ValueTypeName=`string`,Kl.prototype.ValueBufferType=Array,Kl.prototype.DefaultInterpolation=Ne,Kl.prototype.InterpolantFactoryMethodLinear=void 0,Kl.prototype.InterpolantFactoryMethodSmooth=void 0;var ql=class extends Bl{};ql.prototype.ValueTypeName=`vector`;var Jl=class extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type=`Light`,this.color=new F(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Yl=class extends Jl{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new F(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Xl=new dn,Zl=new P,Ql=new P,$l=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new M(512,512),this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ai,this._frameExtents=new M(1,1),this._viewportCount=1,this._viewports=[new kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Zl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zl),Ql.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ql),t.updateMatrixWorld(),Xl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},eu=new dn,tu=new P,nu=new P,ru=class extends $l{constructor(){super(new qr(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new M(4,2),this._viewportCount=6,this._viewports=[new kt(2,1,1,1),new kt(0,1,1,1),new kt(3,1,1,1),new kt(1,1,1,1),new kt(3,0,1,1),new kt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,i=e.distance||n.far;i!==n.far&&(n.far=i,n.updateProjectionMatrix()),tu.setFromMatrixPosition(e.matrixWorld),n.position.copy(tu),nu.copy(n.position),nu.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(nu),n.updateMatrixWorld(),r.makeTranslation(-tu.x,-tu.y,-tu.z),eu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(eu)}},iu=class extends Jl{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=r,this.shadow=new ru}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},au=class extends $l{constructor(){super(new yi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ou=class extends Jl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Rn.DEFAULT_UP),this.updateMatrix(),this.target=new Rn,this.shadow=new au}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},su=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=cu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function cu(){return performance.now()}var lu=`\\[\\]\\.:\\/`,uu=RegExp(`[\\[\\]\\.:\\/]`,`g`),du=`[^\\[\\]\\.:\\/]`,fu=`[^`+lu.replace(`\\.`,``)+`]`,pu=`((?:WC+[\\/:])*)`.replace(`WC`,du),mu=`(WCOD+)?`.replace(`WCOD`,fu),hu=`(?:\\.(WC+)(?:\\[(.+)\\])?)?`.replace(`WC`,du),gu=`\\.(WC+)(?:\\[(.+)\\])?`.replace(`WC`,du),_u=RegExp(`^`+pu+mu+hu+gu+`$`),vu=[`material`,`materials`,`bones`,`map`],yu=class{constructor(e,t,n){let r=n||bu.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,i=n.length;r!==i;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},bu=class e{constructor(t,n,r){this.path=n,this.parsedPath=r||e.parseTrackName(n),this.node=e.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,n,r){return t&&t.isAnimationObjectGroup?new e.Composite(t,n,r):new e(t,n,r)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(uu,``)}static parseTrackName(e){let t=_u.exec(e);if(t===null)throw Error(`PropertyBinding: Cannot parse trackName: `+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(`.`);if(r!==void 0&&r!==-1){let e=n.nodeName.substring(r+1);vu.indexOf(e)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=e)}if(n.propertyName===null||n.propertyName.length===0)throw Error(`PropertyBinding: can not parse propertyName from trackName: `+e);return n}static findNode(e,t){if(t===void 0||t===``||t===`.`||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(e){for(let r=0;r<e.length;r++){let i=e[r];if(i.name===t||i.uuid===t)return i;let a=n(i.children);if(a)return a}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,i=n.length;r!==i;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let t=this.node,n=this.parsedPath,r=n.objectName,i=n.propertyName,a=n.propertyIndex;if(t||(t=e.findNode(this.rootNode,n.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn(`THREE.PropertyBinding: No target node found for track: `+this.path+`.`);return}if(r){let e=n.objectIndex;switch(r){case`materials`:if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.materials){console.error(`THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}t=t.material.materials;break;case`bones`:if(!t.skeleton){console.error(`THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}t=t.skeleton.bones;for(let n=0;n<t.length;n++)if(t[n].name===e){e=n;break}break;case`map`:if(`map`in t){t=t.map;break}if(!t.material){console.error(`THREE.PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!t.material.map){console.error(`THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}t=t.material.map;break;default:if(t[r]===void 0){console.error(`THREE.PropertyBinding: Can not bind to objectName of node undefined.`,this);return}t=t[r]}if(e!==void 0){if(t[e]===void 0){console.error(`THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,t);return}t=t[e]}}let o=t[i];if(o===void 0){let e=n.nodeName;console.error(`THREE.PropertyBinding: Trying to update property for track: `+e+`.`+i+` but it wasn't found.`,t);return}let s=this.Versioning.None;this.targetObject=t,t.needsUpdate===void 0?t.matrixWorldNeedsUpdate!==void 0&&(s=this.Versioning.MatrixWorldNeedsUpdate):s=this.Versioning.NeedsUpdate;let c=this.BindingType.Direct;if(a!==void 0){if(i===`morphTargetInfluences`){if(!t.geometry){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!t.geometry.morphAttributes){console.error(`THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}t.morphTargetDictionary[a]!==void 0&&(a=t.morphTargetDictionary[a])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][s]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};bu.Composite=yu,bu.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3},bu.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2},bu.prototype.GetterByBindingType=[bu.prototype._getValue_direct,bu.prototype._getValue_array,bu.prototype._getValue_arrayElement,bu.prototype._getValue_toArray],bu.prototype.SetterByBindingTypeAndVersioning=[[bu.prototype._setValue_direct,bu.prototype._setValue_direct_setNeedsUpdate,bu.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[bu.prototype._setValue_array,bu.prototype._setValue_array_setNeedsUpdate,bu.prototype._setValue_array_setMatrixWorldNeedsUpdate],[bu.prototype._setValue_arrayElement,bu.prototype._setValue_arrayElement_setNeedsUpdate,bu.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[bu.prototype._setValue_fromArray,bu.prototype._setValue_fromArray_setNeedsUpdate,bu.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]],typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`170`}})),typeof window<`u`&&(window.__THREE__?console.warn(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`170`);var xu={name:`CopyShader`,uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`},Su=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error(`THREE.Pass: .render() must be implemented in derived pass.`)}dispose(){}},Cu=new yi(-1,1,1,-1,0,1),wu=new class extends br{constructor(){super(),this.setAttribute(`position`,new fr([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute(`uv`,new fr([0,2,0,0,2,0],2))}},Tu=class{constructor(e){this._mesh=new I(wu,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Cu)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}},Eu=class extends Su{constructor(e,t){super(),this.textureID=t===void 0?`tDiffuse`:t,e instanceof Hr?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zr.clone(e.uniforms),this.material=new Hr({name:e.name===void 0?`unspecified`:e.name,defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Tu(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}},Du=class extends Su{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let r=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),i.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(r.EQUAL,1,4294967295),i.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),i.buffers.stencil.setLocked(!0)}},Ou=class extends Su{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}},ku=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new M);this._width=n.width,this._height=n.height,t=new jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:g}),t.texture.name=`EffectComposer.rt1`}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name=`EffectComposer.rt2`,this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Eu(xu),this.copyPass.material.blending=0,this.clock=new su}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let t=0,r=this.passes.length;t<r;t++){let r=this.passes[t];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(t),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),r.needsSwap){if(n){let t=this.renderer.getContext(),n=this.renderer.state.buffers.stencil;n.setFunc(t.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),n.setFunc(t.EQUAL,1,4294967295)}this.swapBuffers()}Du!==void 0&&(r instanceof Du?n=!0:r instanceof Ou&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new M);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let e=0;e<this.passes.length;e++)this.passes[e].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}},Au=class extends Su{constructor(e,t,n=null,r=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new F}render(e,t,n){let r=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==1&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}},ju={name:`LuminosityHighPassShader`,shaderID:`luminosityHighPass`,uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new F(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`},Mu=class e extends Su{constructor(e,t,n,r){super(),this.strength=t===void 0?1:t,this.radius=n,this.threshold=r,this.resolution=e===void 0?new M(256,256):new M(e.x,e.y),this.clearColor=new F(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new jt(i,a,{type:g}),this.renderTargetBright.texture.name=`UnrealBloomPass.bright`,this.renderTargetBright.texture.generateMipmaps=!1;for(let e=0;e<this.nMips;e++){let t=new jt(i,a,{type:g});t.texture.name=`UnrealBloomPass.h`+e,t.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(t);let n=new jt(i,a,{type:g});n.texture.name=`UnrealBloomPass.v`+e,n.texture.generateMipmaps=!1,this.renderTargetsVertical.push(n),i=Math.round(i/2),a=Math.round(a/2)}let o=ju;this.highPassUniforms=zr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Hr({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let s=[3,5,7,9,11];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let e=0;e<this.nMips;e++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(s[e])),this.separableBlurMaterials[e].uniforms.invSize.value=new M(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let l=xu;this.copyUniforms=zr.clone(l.uniforms),this.blendMaterial=new Hr({uniforms:this.copyUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,blending:2,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new F,this.oldClearAlpha=1,this.basic=new or,this.fsQuad=new Tu(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let e=0;e<this.nMips;e++)this.renderTargetsHorizontal[e].setSize(n,r),this.renderTargetsVertical[e].setSize(n,r),this.separableBlurMaterials[e].uniforms.invSize.value=new M(1/n,1/r),n=Math.round(n/2),r=Math.round(r/2)}render(t,n,r,i,a){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();let o=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),a&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let s=this.renderTargetBright;for(let n=0;n<this.nMips;n++)this.fsQuad.material=this.separableBlurMaterials[n],this.separableBlurMaterials[n].uniforms.colorTexture.value=s.texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[n]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[n].uniforms.colorTexture.value=this.renderTargetsHorizontal[n].texture,this.separableBlurMaterials[n].uniforms.direction.value=e.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[n]),t.clear(),this.fsQuad.render(t),s=this.renderTargetsVertical[n];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,a&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(r),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Hr({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new M(.5,.5)},direction:{value:new M(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Hr({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}};Mu.BlurDirectionX=new M(1,0),Mu.BlurDirectionY=new M(0,1);var Nu={name:`OutputShader`,uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`},Pu=class extends Su{constructor(){super();let e=Nu;this.uniforms=zr.clone(e.uniforms),this.material=new jl({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Tu(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},mt.getTransfer(this._outputColorSpace)===`srgb`&&(this.material.defines.SRGB_TRANSFER=``),this._toneMapping===1?this.material.defines.LINEAR_TONE_MAPPING=``:this._toneMapping===2?this.material.defines.REINHARD_TONE_MAPPING=``:this._toneMapping===3?this.material.defines.CINEON_TONE_MAPPING=``:this._toneMapping===4?this.material.defines.ACES_FILMIC_TONE_MAPPING=``:this._toneMapping===6?this.material.defines.AGX_TONE_MAPPING=``:this._toneMapping===7&&(this.material.defines.NEUTRAL_TONE_MAPPING=``),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};window.__ataReady=!0;var B=e=>document.querySelector(e),V=Math.PI*2,Fu=(e,t,n)=>Math.max(t,Math.min(n,e)),Iu=(e,t,n)=>e+(t-e)*n,Lu=(e,t,n)=>{let r=Fu((n-e)/(t-e),0,1);return r*r*(3-2*r)},Ru=e=>1-(1-e)*(1-e),zu=e=>e*e,Bu=e=>e<.5?2*e*e:1-(-2*e+2)**2/2;function Vu(e){return function(){e|=0,e=e+1831565813|0;let t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function Hu(e,t){let n=(t-e)%V;return n>Math.PI&&(n-=V),n<-Math.PI&&(n+=V),n}var Uu={get(e){try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},set(e,t){try{return localStorage.setItem(e,JSON.stringify(t)),!0}catch{return!1}},del(e){try{localStorage.removeItem(e)}catch{}}},Wu=`evyrim-ata-hoyugu-v1`,Gu=`evyrim-ata-prefs-v1`,Ku=Object.assign({muted:!1,fps:!1,gfx:`auto`,rotHint:!0},Uu.get(Gu)||{}),qu=()=>Uu.set(Gu,Ku);function Ju(e,t){e._v!==t&&(e._v=t,e.textContent=t)}function Yu(e,t){e.hidden!==t&&(e.hidden=t)}var Xu=e=>{try{navigator.vibrate&&navigator.vibrate(e)}catch{}},Zu=window.matchMedia(`(pointer: coarse)`).matches,Qu=[`low`,`medium`,`high`].includes(Ku.gfx)?Ku.gfx:Zu?`medium`:`high`,$u={low:`Düşük`,medium:`Orta`,high:`Yüksek`}[Qu],ed=Qu===`high`,td=Qu===`low`,nd=ed,rd=1e3,id=B(`#c`),ad;try{ad=new _s({canvas:id,antialias:!Zu&&!ed,powerPreference:`high-performance`})}catch(e){throw B(`#boot p`).textContent=`Bu tarayıcı WebGL desteklemiyor, demo açılamadı.`,e}var od=Math.min(window.devicePixelRatio||1,Zu?1.5:2),sd=td?Math.min(od,.85):od;ad.setPixelRatio(sd),ad.setSize(innerWidth,innerHeight),ad.toneMapping=4,ad.toneMappingExposure=1.12,ad.shadowMap.enabled=nd,ad.shadowMap.type=2;var cd=new ys,ld=new qr(58,innerWidth/innerHeight,.1,1200),ud=new F(9345968),dd=new F(395275);cd.fog=new vs(ud.clone(),.0095);var fd=new Yl(11846880,4608618,2.4);cd.add(fd);var pd=new ou(16759183,2.7);if(pd.castShadow=nd,nd){pd.shadow.mapSize.set(2048,2048);let e=pd.shadow.camera;e.left=-30,e.right=30,e.top=30,e.bottom=-30,e.near=1,e.far=170,pd.shadow.bias=-6e-4,pd.shadow.normalBias=.03}cd.add(pd,pd.target);var md=new P(-55,36,44),hd=new iu(16747068,55,26,2);hd.position.set(0,1.6,0),cd.add(hd);var gd=new iu(16753242,0,16,1.6);cd.add(gd);var _d=new iu(16749640,0,22,2);_d.position.set(rd,2.6,38),cd.add(_d);var vd=new iu(6280902,0,26,2);vd.position.set(1050,3.6,37),cd.add(vd);var H=new z;cd.add(H);var yd=new z;yd.visible=!1,cd.add(yd);var bd={uniforms:{tDiffuse:{value:null},time:{value:0},dungeon:{value:0}},vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`uniform sampler2D tDiffuse; uniform float time; uniform float dungeon; varying vec2 vUv;
    void main(){ vec4 c = texture2D(tDiffuse, vUv);
      float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));
      vec3 cool = mix(vec3(0.9, 0.97, 1.1), vec3(0.94, 0.95, 1.06), dungeon);
      vec3 warm = mix(vec3(1.06, 1.0, 0.92), vec3(1.12, 0.98, 0.84), dungeon);
      c.rgb *= mix(cool, warm, smoothstep(0.04, 0.7, l));
      c.rgb = max(mix(vec3(l), c.rgb, 1.1), 0.0);
      vec2 d = vUv - 0.5; c.rgb *= 1.0 - smoothstep(0.32, 0.85, length(d * vec2(1.15, 1.0))) * (0.42 + 0.2 * dungeon);
      float n = fract(sin(dot(vUv * 1000.0 + time, vec2(12.9898, 78.233))) * 43758.5453);
      c.rgb += (n - 0.5) * 0.012;
      gl_FragColor = c; }`},xd=null,Sd=null;if(ed)try{let e={EffectComposer:ku},t={RenderPass:Au},n={UnrealBloomPass:Mu},r={ShaderPass:Eu},i={OutputPass:Pu},a=new jt(innerWidth*sd,innerHeight*sd,{type:g,samples:4});xd=new e.EffectComposer(ad,a),xd.setPixelRatio(sd),xd.setSize(innerWidth,innerHeight),xd.addPass(new t.RenderPass(cd,ld)),xd.addPass(new n.UnrealBloomPass(new M(innerWidth,innerHeight),.55,.5,.95)),Sd=new r.ShaderPass(bd),xd.addPass(Sd),xd.addPass(new i.OutputPass),document.getElementById(`vig`).hidden=!0}catch(e){console.warn(`Son işleme yüklenemedi`,e),xd=null}function Cd(e){sd=e,ad.setPixelRatio(e),xd&&(xd.setPixelRatio(e),xd.setSize(innerWidth,innerHeight))}var wd=(e,t)=>new Nl(Object.assign({color:e},t||{})),Td=(e,t)=>new or(Object.assign({color:e},t||{}));function U(e,t,n,r,i=0,a=0,o=0,s=null){let c=new Pr(e,t,n);r.userData&&r.userData.uv&&Dd(c,e,t,n,r.userData.uv);let l=new I(c,r);return l.position.set(i,a,o),l.castShadow=nd,l.receiveShadow=nd,s&&s.add(l),l}var Ed=(e,t)=>new or({color:new F(e).multiplyScalar(t)});function Dd(e,t,n,r,i){let a=e.attributes.uv,o=[[r,n],[r,n],[t,r],[t,r],[t,n],[t,n]];for(let e=0;e<6;e++)for(let t=0;t<4;t++){let n=e*4+t;a.setXY(n,a.getX(n)*o[e][0]/i,a.getY(n)*o[e][1]/i)}}var Od=Math.min(8,ad.capabilities.getMaxAnisotropy()),W=Vu(99);function kd(t,n,r,i=!0,a=!1){let o=document.createElement(`canvas`);o.width=t,o.height=n,r(o.getContext(`2d`),t,n);let s=new nc(o);return i&&(s.colorSpace=Ve),a||(s.wrapS=s.wrapT=e),s.anisotropy=Od,s}function Ad(e,t,n,r,i,a,o){for(let s=0;s<r;s++){let r=(W()-.5)*i;e.fillStyle=r>0?`rgba(255,255,255,${r})`:`rgba(0,0,0,${-r})`;let s=a+W()*(o-a);e.fillRect(W()*t,W()*n,s,s*(.5+W()))}}function jd(e,t){let n=e=>Math.max(0,Math.min(255,Math.round(e*(1+t))));return`rgb(${n(e>>16&255)},${n(e>>8&255)},${n(e&255)})`}function Md(e,t,n,r,i){for(let a=0;a<r;a++){e.strokeStyle=`rgba(0,0,0,${i+W()*.2})`,e.lineWidth=1,e.beginPath();let r=W()*t,a=W()*n;e.moveTo(r,a);for(let t=0;t<5;t++)r+=(W()-.5)*44,a+=(W()-.5)*44,e.lineTo(r,a);e.stroke()}}function Nd(e){return kd(256,256,(t,n,r)=>{let i=n/5;for(let n=0;n<5;n++){t.fillStyle=jd(e,(W()-.5)*.28),t.fillRect(n*i,0,i,r);for(let e=0;e<14;e++){t.strokeStyle=`rgba(0,0,0,${.05+W()*.1})`,t.lineWidth=1+W(),t.beginPath();let a=n*i+W()*i;t.moveTo(a,0);for(let n=0;n<=r;n+=16)t.lineTo(a+Math.sin(n*.05+e)*2.5,n);t.stroke()}W()<.7&&(t.fillStyle=`rgba(30,18,10,.45)`,t.beginPath(),t.ellipse(n*i+i*(.3+W()*.4),W()*r,3+W()*3,6+W()*5,0,0,V),t.fill()),t.fillStyle=`rgba(15,9,5,.75)`,t.fillRect(n*i,0,2.5,r),t.fillStyle=`rgba(255,230,200,.07)`,t.fillRect(n*i+2.5,0,2,r)}Ad(t,n,r,500,.12,1,2)})}function Pd(e){return kd(256,256,(t,n,r)=>{t.fillStyle=jd(e,0),t.fillRect(0,0,n,r),Ad(t,n,r,1400,.22,1,4),Md(t,n,r,7,.22);for(let e=0;e<14;e++)t.fillStyle=`rgba(160,170,90,${.06+W()*.1})`,t.beginPath(),t.arc(W()*n,W()*r,3+W()*10,0,V),t.fill()})}var Fd={};Fd.wood=Nd(6965813),Fd.woodD=Nd(4600618),Fd.stone=Pd(7829629),Fd.dstone=Pd(6051149),Fd.roof=kd(256,256,(e,t,n)=>{e.fillStyle=`#2b221c`,e.fillRect(0,0,t,n);let r=n/8;for(let n=0;n<8;n++){let i=n%2*16;for(let a=-32;a<t+32;a+=32)e.fillStyle=jd(4864558,(W()-.5)*.3),e.fillRect(a+i+1,n*r+1,30,r-2),e.fillStyle=`rgba(0,0,0,.35)`,e.fillRect(a+i+1,n*r+r-5,30,4)}Ad(e,t,n,400,.12,1,2)}),Fd.snow=kd(256,256,(e,t,n)=>{e.fillStyle=`#eef3f8`,e.fillRect(0,0,t,n);for(let r=0;r<40;r++){let r=W()*t,i=W()*n,a=20+W()*50,o=e.createRadialGradient(r,i,0,r,i,a);o.addColorStop(0,`rgba(160,182,215,.16)`),o.addColorStop(1,`rgba(160,182,215,0)`),e.fillStyle=o,e.fillRect(r-a,i-a,a*2,a*2)}Ad(e,t,n,300,.1,1,2)}),Fd.brick=kd(256,256,(e,t,n)=>{e.fillStyle=`#1d1a17`,e.fillRect(0,0,t,n);let r=n/6,i=t/3;for(let t=0;t<6;t++){let n=t%2*i/2;for(let a=-1;a<4;a++){let o=a*i+n+2,s=t*r+2,c=i-4,l=r-4;e.fillStyle=jd(6248269,(W()-.5)*.36),e.fillRect(o,s,c,l),e.fillStyle=`rgba(255,255,255,.07)`,e.fillRect(o,s,c,3),e.fillStyle=`rgba(0,0,0,.28)`,e.fillRect(o,s+l-4,c,4),W()<.14&&(e.fillStyle=`rgba(80,105,55,.35)`,e.fillRect(o,s+l*.35,c*W(),l*.65))}}Ad(e,t,n,1500,.18,1,3),Md(e,t,n,4,.2)}),Fd.flag=kd(256,256,(e,t,n)=>{e.fillStyle=`#15120f`,e.fillRect(0,0,t,n);for(let[t,n,r,i]of[[0,0,128,128],[128,0,128,80],[128,80,128,48],[0,128,80,128],[80,128,176,128]])e.fillStyle=jd(4932926,(W()-.5)*.3),e.fillRect(t+3,n+3,r-6,i-6),e.fillStyle=`rgba(255,255,255,.05)`,e.fillRect(t+3,n+3,r-6,3);Ad(e,t,n,1600,.2,1,3),Md(e,t,n,5,.3)}),Fd.snowDetail=kd(256,256,(e,t,n)=>{e.fillStyle=`#ffffff`,e.fillRect(0,0,t,n);for(let r=0;r<70;r++){e.strokeStyle=`rgba(110,132,170,${.04+W()*.06})`,e.lineWidth=1+W()*2,e.beginPath();let r=W()*n,i=W()*t,a=40+W()*90;e.moveTo(i,r),e.quadraticCurveTo(i+a/2,r+(W()-.5)*14,i+a,r+(W()-.5)*6),e.stroke()}Ad(e,t,n,900,.12,1,2)});var Id=e=>(t,n,r)=>{let i=t.createRadialGradient(n/2,r/2,0,n/2,r/2,n/2);for(let[t,n]of e)i.addColorStop(t,`rgba(255,255,255,${n})`);t.fillStyle=i,t.fillRect(0,0,n,r)};Fd.soft=kd(64,64,Id([[0,1],[.35,.8],[1,0]]),!0,!0),Fd.glow=kd(128,128,Id([[0,1],[.15,.55],[.45,.12],[1,0]]),!0,!0),Fd.smoke=kd(128,128,e=>{for(let t=0;t<14;t++){let t=40+W()*48,n=40+W()*48,r=18+W()*26,i=e.createRadialGradient(t,n,0,t,n,r);i.addColorStop(0,`rgba(255,255,255,.35)`),i.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=i,e.fillRect(0,0,128,128)}},!0,!0),Fd.cloud=kd(256,96,(e,t,n)=>{for(let r=0;r<22;r++){let r=30+W()*(t-60),i=n*.5+(W()-.5)*n*.3,a=14+W()*30,o=e.createRadialGradient(r,i,0,r,i,a);o.addColorStop(0,`rgba(255,255,255,.4)`),o.addColorStop(1,`rgba(255,255,255,0)`),e.fillStyle=o,e.fillRect(0,0,t,n)}},!0,!0);function Ld(e,t,n){let r=wd(16777215,Object.assign({map:e},n||{}));return r.userData.uv=t,r}var Rd=new Map;function zd(e,t,n,r,i,a,o=.7){if(td)return null;let s=a+`:`+o,c=Rd.get(s);c||(c=new Cs({map:Fd.glow,color:a,transparent:!0,opacity:o,blending:2,depthWrite:!1}),Rd.set(s,c));let l=new Ls(c);return l.position.set(t,n,r),l.scale.set(i,i,1),e.add(l),l}var Bd=[],Vd=[],Hd=[],Ud=new or({map:Fd.soft,color:659224,transparent:!0,opacity:.42,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),Wd=new ci(1,1).rotateX(-Math.PI/2);function Gd(e,t,n){if(nd)return null;let r=new I(Wd,Ud);r.scale.set(n,1,n),r.renderOrder=1,cd.add(r);let i={m:r,pos:e,vis:t};return Hd.push(i),i}function Kd(){for(let e of Hd){let t=e.vis();if(e.m.visible=t,!t)continue;let n=e.pos();e.m.position.set(n.x,(X.zone===`world`?Tf(n.x,n.z):0)+.04,n.z)}}var G={wood:Ld(Fd.wood,2),woodD:Ld(Fd.woodD,1.5),roof:Ld(Fd.roof,2),stone:Ld(Fd.stone,2),snow:Ld(Fd.snow,3),rstone:wd(16777215,{map:Fd.stone,flatShading:!0}),iron:wd(4014406),dstone:Ld(Fd.dstone,2),bone:wd(13616816)},qd={fehu:[[.35,0,.35,1],[.35,.35,.75,.1],[.35,.6,.75,.35]],thurisaz:[[.35,0,.35,1],[.35,.3,.7,.5],[.7,.5,.35,.7]],algiz:[[.5,0,.5,1],[.5,.4,.2,.05],[.5,.4,.8,.05]],raido:[[.3,0,.3,1],[.3,0,.7,.25],[.7,.25,.3,.5],[.3,.5,.72,1]],othala:[[.5,0,.8,.35],[.8,.35,.2,.85],[.5,0,.2,.35],[.2,.35,.8,.85]],ansuz:[[.35,0,.35,1],[.35,.05,.7,.3],[.35,.35,.7,.6]],tiwaz:[[.5,0,.5,1],[.5,0,.2,.3],[.5,0,.8,.3]],sowilo:[[.65,0,.3,.4],[.3,.4,.7,.6],[.7,.6,.35,1]]},Jd=Object.values(qd);function Yd(e,t,n,r,i,a,o,s){e.strokeStyle=o,e.lineWidth=s,e.lineCap=`round`,e.beginPath();for(let o of t)e.moveTo(n+o[0]*i,r+o[1]*a),e.lineTo(n+o[2]*i,r+o[3]*a);e.stroke()}function Xd(e){let t=(t,n,r)=>{let i=document.createElement(`canvas`);i.width=128,i.height=256;let a=i.getContext(`2d`);if(a.fillStyle=t,a.fillRect(0,0,128,256),!r){let t=Vu(e.length*13);for(let e=0;e<90;e++)a.fillStyle=`rgba(0,0,0,${t()*.18})`,a.fillRect(t()*128,t()*256,3+t()*8,2+t()*5)}e.forEach((e,t)=>{r&&(a.shadowColor=`#fff`,a.shadowBlur=10),Yd(a,qd[e],34,22+t*76,60,62,n,r?7:9)});let o=new nc(i);return o.colorSpace=Ve,o};return{map:t(`#7a7f87`,`#2e3238`,!1),emap:t(`#000`,`#fff`,!0)}}var Zd=new z;cd.add(Zd);var Qd=new I(new kl(500,32,16),new Hr({uniforms:{top:{value:new F(792368)},horizon:{value:ud.clone()},glow:{value:new F(15769722)},sunDir:{value:md.clone().normalize()}},side:1,depthWrite:!1,vertexShader:`varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`uniform vec3 top; uniform vec3 horizon; uniform vec3 glow; uniform vec3 sunDir; varying vec3 vDir;
    void main(){ vec3 d = normalize(vDir); float h = d.y;
      vec3 col = mix(horizon, top, smoothstep(0.0, 0.55, h));
      float s = max(dot(d, normalize(sunDir)), 0.0);
      col += glow * pow(s, 5.0) * (1.0 - smoothstep(0.0, 0.42, h)) * 0.85;
      col = mix(col, horizon, 1.0 - smoothstep(-0.25, 0.0, h));
      gl_FragColor = vec4(col, 1.0);
      #include <colorspace_fragment>
    }`}));Qd.renderOrder=-10,Qd.frustumCulled=!1,Zd.add(Qd);{let e=Vu(3),t=[];for(let n=0;n<800;n++){let n=e()*V,r=.12+e()*.88,i=Math.sqrt(1-r*r);t.push(Math.cos(n)*i*470,r*470,Math.sin(n)*i*470)}let n=new br;n.setAttribute(`position`,new fr(t,3));let r=new ec(n,new Ys({color:14674175,size:1.6,sizeAttenuation:!1,fog:!1,transparent:!0,opacity:.8,depthWrite:!1}));r.frustumCulled=!1,Zd.add(r);let i=new I(new kl(9,20,12),Td(15331061,{fog:!1}));i.position.set(.42,.5,-.76).multiplyScalar(440),Zd.add(i)}var $d=new Hr({uniforms:{t:{value:0}},transparent:!0,depthWrite:!1,blending:2,side:2,vertexShader:`varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,fragmentShader:`uniform float t; varying vec2 vUv;
    void main(){ float x = vUv.x * 40.0;
      float band = 0.55 + 0.45 * sin(x * 0.9 + t * 0.35 + sin(x * 0.23 + t * 0.2) * 2.0);
      float rays = 0.6 + 0.4 * sin(x * 7.0 + t * 1.3) * sin(x * 3.1 - t * 0.9);
      float v = vUv.y;
      float a = smoothstep(0.0, 0.12, v) * (1.0 - smoothstep(0.25, 1.0, v)) * band * rays;
      a *= smoothstep(0.0, 0.08, vUv.x) * (1.0 - smoothstep(0.92, 1.0, vUv.x));
      vec3 c = mix(vec3(0.25, 1.0, 0.62), vec3(0.58, 0.36, 0.95), smoothstep(0.35, 1.0, v));
      gl_FragColor = vec4(c, a * 0.62);
      #include <colorspace_fragment>
    }`});function ef(e,t,n,r,i){let a=new ci(1,1,80,1),o=a.attributes.position;for(let a=0;a<o.count;a++){let s=o.getX(a)+.5,c=o.getY(a)+.5,l=r+(i-r)*s,u=Math.sin(s*9)*18;o.setXYZ(a,Math.cos(l)*(e+u),t+c*n,Math.sin(l)*(e+u))}a.computeBoundingSphere();let s=new I(a,$d);return s.frustumCulled=!1,s}Zd.add(ef(380,70,120,-2.5,-.8),ef(430,95,95,-1.9,-.15));var tf=Zu?650:1400,nf=new Float32Array(tf*3),rf=new Float32Array(tf);for(let e=0;e<tf;e++)nf[e*3]=(Math.random()-.5)*60,nf[e*3+1]=Math.random()*26,nf[e*3+2]=(Math.random()-.5)*60,rf[e]=1+Math.random()*1.2;var af=new br;af.setAttribute(`position`,new lr(nf,3));var of=new ec(af,new Ys({map:Fd.soft,color:16777215,size:.16,transparent:!0,opacity:.85,depthWrite:!1}));of.frustumCulled=!1,H.add(of);var sf=130,cf=130,lf=260/cf,uf=131,df={x:72,z:-72},ff={x:-48,z:38},pf=[[3,-3],[28,-20],[50,-50],[65,-65]],mf={x:-8,z:70,rx:20,rz:14},hf={x:3,z:49},K={x:-10,z:87},gf={x:-10,z:102},_f={x:-2,z:59.5},vf=[pf,[[-9,21],[-13,33],[-6,42],[3,47]]],yf=(e,t)=>Math.hypot((e-mf.x)/mf.rx,(t-mf.z)/mf.rz);function bf(e,t,n=0){return Math.hypot((e-mf.x)/(mf.rx+4+n),(t-mf.z)/(mf.rz+4+n))<1||Math.hypot(e-hf.x,t-hf.z)<9+n||Math.hypot(e-K.x,t-K.z)<9+n}function xf(e,t,n,r,i,a){let o=i-n,s=a-r,c=e-n,l=t-r,u=Fu((c*o+l*s)/(o*o+s*s),0,1);return Math.hypot(e-(n+o*u),t-(r+s*u))}function Sf(e,t){let n=1e9;for(let r of vf)for(let i=0;i<r.length-1;i++)n=Math.min(n,xf(e,t,r[i][0],r[i][1],r[i+1][0],r[i+1][1]));return n}function Cf(e,t){let n=2.2*Math.sin(e*.045)*Math.cos(t*.05)+1.4*Math.sin((e+t)*.08+1)+.7*Math.sin(e*.19+1.3)*Math.sin(t*.16+.4)+.3*Math.sin(e*.5)*Math.cos(t*.43);n*=Lu(16,34,Math.hypot(e,t)),n*=Lu(12,26,Math.hypot(e-df.x,t-df.z)),n*=Lu(6,14,Math.hypot(e-ff.x,t-ff.z)),n=Iu(n*.45,n,Lu(1.5,7,Sf(e,t))),n+=7.5*(1-Lu(3,13,Math.hypot(e-gf.x,t-gf.z))),n*=Lu(4,10,Math.hypot(e-hf.x,t-hf.z)),n*=Lu(4,8,Math.hypot(e-K.x,t-K.z)),n=Iu(-1,n,Lu(.9,1.3,yf(e,t)));let r=Lu(86,128,Math.max(Math.abs(e),Math.abs(t)));return n+r*r*38+r*6*Math.sin(e*.13)*Math.cos(t*.11)}var wf=new Float32Array(17161);for(let e=0;e<uf;e++)for(let t=0;t<uf;t++)wf[e*uf+t]=Cf(-130+t*lf,-130+e*lf);function Tf(e,t){let n=(e+sf)/lf,r=(t+sf)/lf,i=Fu(Math.floor(n),0,129),a=Fu(Math.floor(r),0,129),o=Fu(n-i,0,1),s=Fu(r-a,0,1),c=wf[a*uf+i],l=wf[a*uf+i+1],u=wf[(a+1)*uf+i],d=wf[(a+1)*uf+i+1];return o+s<=1?c+(l-c)*o+(u-c)*s:d+(u-d)*(1-o)+(l-d)*(1-s)}{let e=33800,t=new Float32Array(e*9),n=new Float32Array(e*9),r=new Float32Array(e*6),i=new F(15265526),a=new F(12832995),o=new F(6252144),s=new F(8021842),c=new F(12169893),l=new F,u=Vu(7),d=0,f=(e,f,p,m,h,g,_,v,y)=>{let b=m-e,x=h-f,S=g-p,C=_-e,w=v-f,T=y-p,E=x*T-S*w,ee=S*C-b*T,te=b*w-x*C,D=ee/(Math.hypot(E,ee,te)||1),ne=(e+m+_)/3,O=(f+h+v)/3,re=(p+g+y)/3;l.copy(i).lerp(a,Fu(.45-O*.1,0,.6)),l.offsetHSL(0,0,u()*.05-.025);let ie=Math.hypot(ne,re);ie<15&&l.lerp(c,(1-Lu(9,15,ie))*.7);let ae=Sf(ne,re);ae<3&&l.lerp(s,(1-Lu(1.2,3,ae))*.85),D<.9&&l.lerp(o,Lu(.9,.72,D)),O>20&&D>.75&&l.lerp(i,Lu(20,30,O)*.8),t.set([e,f,p,m,h,g,_,v,y],d*9),r.set([e/7,p/7,m/7,g/7,_/7,y/7],d*6);for(let e=0;e<3;e++)n[d*9+e*3]=l.r,n[d*9+e*3+1]=l.g,n[d*9+e*3+2]=l.b;d++};for(let e=0;e<cf;e++)for(let t=0;t<cf;t++){let n=-130+t*lf,r=n+lf,i=-130+e*lf,a=i+lf,o=wf[e*uf+t],s=wf[e*uf+t+1],c=wf[(e+1)*uf+t],l=wf[(e+1)*uf+t+1];f(n,o,i,n,c,a,r,s,i),f(n,c,a,r,l,a,r,s,i)}let p=new br;p.setAttribute(`position`,new lr(t,3)),p.setAttribute(`color`,new lr(n,3)),p.computeVertexNormals(),p.setAttribute(`uv`,new lr(r,2));let m=new I(p,new Nl({vertexColors:!0,map:Fd.snowDetail}));m.receiveShadow=nd,H.add(m)}var Ef={world:[],dungeon:[]},Df=(e,t,n,r)=>Ef[e].push({x:t,z:n,r}),Of=(e,t,n,r,i)=>Ef[e].push({x0:t,x1:n,z0:r,z1:i});function kf(e,t,n,r,i,a){let o=Fu(e.x,n,r),s=Fu(e.z,i,a),c=e.x-o,l=e.z-s,u=c*c+l*l;if(u>=t*t)return;if(u<1e-8){let o=e.x-n,s=r-e.x,c=e.z-i,l=a-e.z,u=Math.min(o,s,c,l);u===o?e.x=n-t:u===s?e.x=r+t:e.z=u===c?i-t:a+t;return}let d=Math.sqrt(u);e.x=o+c/d*t,e.z=s+l/d*t}function Af(e,t,n){for(let r of Ef[n])if(r.r!==void 0){let n=e.x-r.x,i=e.z-r.z,a=t+r.r;if(Math.abs(n)>a||Math.abs(i)>a)continue;let o=Math.hypot(n,i);o<a&&o>1e-6&&(e.x=r.x+n/o*a,e.z=r.z+i/o*a)}else e.x>r.x0-t&&e.x<r.x1+t&&e.z>r.z0-t&&e.z<r.z1+t&&kf(e,t,r.x0,r.x1,r.z0,r.z1)}function jf(e,t){let n=e.index?e.toNonIndexed():e;n.computeVertexNormals();let r=new F(t),i=n.attributes.position.count,a=new Float32Array(i*3);for(let e=0;e<i;e++)a[e*3]=r.r,a[e*3+1]=r.g,a[e*3+2]=r.b;return n.setAttribute(`color`,new lr(a,3)),n}function Mf(e){let t=0;for(let n of e)t+=n.attributes.position.count;let n=new Float32Array(t*3),r=new Float32Array(t*3),i=new Float32Array(t*3),a=0;for(let t of e)n.set(t.attributes.position.array,a*3),r.set(t.attributes.normal.array,a*3),i.set(t.attributes.color.array,a*3),a+=t.attributes.position.count;let o=new br;return o.setAttribute(`position`,new lr(n,3)),o.setAttribute(`normal`,new lr(r,3)),o.setAttribute(`color`,new lr(i,3)),o}function Nf(e,t){let n=[jf(new Fc(.16,.24,1.4,5).translate(0,.7,0),4863270)];for(let[r,i,a]of[[1,2.4,1.7],[2.2,2.1,1.3],[3.3,1.8,.9]]){n.push(jf(new Ic(a,i,7).translate(0,r+i/2,0),e));let o=i*t;n.push(jf(new Ic(a*(t+.06),o,7).translate(0,r+i-o/2+.03,0),15660024))}return Mf(n)}var Pf=[[-40,30],[-55,44],[-53,31],[-42,47],[15,-32],[-22,-36],[42,-10],[62,-24],[26,26],[-30,14],[52,-76],[-62,-12]];{let e=Vu(42),t=[],n=[];for(let r=0;r<1400&&t.length+n.length<360;r++){let r=(e()*2-1)*120,i=(e()*2-1)*120;if(Math.hypot(r,i)<27||Math.hypot(r-df.x,i-df.z)<17||Sf(r,i)<4.5||Math.hypot(r-ff.x,i-ff.z)<10||bf(r,i)||Pf.some(e=>Math.hypot(r-e[0],i-e[1])<2.5))continue;let a=.5+.5*Math.sin(r*.07+1)*Math.cos(i*.06-2);e()>a*.85+.2||(e()<.55?t:n).push({x:r,z:i,s:.8+e()*.85,ry:e()*V})}let r=new Nl({vertexColors:!0,flatShading:!0}),i=(e,t)=>{let n=new Js(e,r,t.length),i=new Rn;t.forEach((e,t)=>{i.position.set(e.x,Tf(e.x,e.z)-.15,e.z),i.rotation.set(0,e.ry,0),i.scale.setScalar(e.s),i.updateMatrix(),n.setMatrixAt(t,i.matrix),Math.abs(e.x)<100&&Math.abs(e.z)<100&&Df(`world`,e.x,e.z,.32*e.s)}),n.castShadow=nd,n.receiveShadow=nd,n.frustumCulled=!1,H.add(n)};i(Nf(2836536,.42),t),i(Nf(3626051,.62),n);let a=new Rc(1,0),o=[];{let e=a.attributes.normal,t=new Float32Array(e.count*3),n=new F(15594231),r=new F(6777973);for(let i=0;i<e.count;i++){let a=e.getY(i)>.5?n:r;t[i*3]=a.r,t[i*3+1]=a.g,t[i*3+2]=a.b}a.setAttribute(`color`,new lr(t,3))}for(let t=0;t<300&&o.length<55;t++){let t=(e()*2-1)*110,n=(e()*2-1)*110;Math.hypot(t,n)<24||Sf(t,n)<3.5||Math.hypot(t-df.x,n-df.z)<15||bf(t,n,-2)||o.push({x:t,z:n,sx:.8+e()*1.6,sy:.5+e()*.9,sz:.8+e()*1.4,ry:e()*V})}let s=new Js(a,new Nl({vertexColors:!0,flatShading:!0}),o.length),c=new Rn;o.forEach((e,t)=>{c.position.set(e.x,Tf(e.x,e.z)+e.sy*.2,e.z),c.rotation.set(0,e.ry,0),c.scale.set(e.sx,e.sy,e.sz),c.updateMatrix(),s.setMatrixAt(t,c.matrix),Math.abs(e.x)<100&&Math.abs(e.z)<100&&Df(`world`,e.x,e.z,Math.min(e.sx,e.sz)*.85)}),s.castShadow=nd,s.receiveShadow=nd,s.frustumCulled=!1,H.add(s)}function Ff(e,t,n,r,i,a){let o=new z;o.position.set(e,Tf(e,t),t),o.rotation.y=a,H.add(o),U(n+.3,1,r+.3,G.stone,0,0,0,o),U(n,i,r,G.wood,0,i/2,0,o);let s=.62,c=n/2+.5,l=c/Math.cos(s);for(let e of[-1,1]){let t=U(l,.3,r+1,G.roof,e*c/2,i+Math.tan(s)*c/2,0,o);t.rotation.z=-e*s;let n=U(l,.14,r+1,G.snow,e*c/2+e*Math.sin(s)*.2,i+Math.tan(s)*c/2+Math.cos(s)*.2,0,o);n.rotation.z=-e*s}let u=new zc;u.moveTo(-n/2,0),u.lineTo(n/2,0),u.lineTo(0,n/2*Math.tan(s)),u.closePath();let d=new Dl(u),f=Fd.woodD.clone();f.repeat.set(.6,.6),f.needsUpdate=!0;let p=wd(16777215,{side:2,map:f});for(let e of[-1,1]){let t=new I(d,p);t.position.set(0,i,e*r/2),o.add(t);for(let t of[-1,1]){let n=U(.16,1.7,.12,G.woodD,t*.34,i+Math.tan(s)*c+.3,e*(r/2+.5),o);n.rotation.z=t*.6}}U(1.2,2,.15,G.woodD,0,1,r/2+.05,o);let m=Ed(16757340,2.4);for(let e of[-1,1])for(let t of[-1,1]){let i=new I(new Pr(.06,.45,.6),m);i.position.set(e*(n/2+.02),1.7,t*r/4),o.add(i),zd(o,e*(n/2+.3),1.7,t*r/4,1.5,16757340,.4)}Bd.push({x:e,y:o.position.y+i+Math.tan(s)*c+.3,z:t});let h=Math.abs(Math.sin(a))>.5,g=h?r/2:n/2,_=h?n/2:r/2;Of(`world`,e-g-.15,e+g+.15,t-_-.15,t+_+.15)}Ff(-14,-2,6,12,2.8,0),Ff(0,15,6,12,2.8,Math.PI/2),Ff(14,10,6,10,2.6,0),Ff(-4,-16,6,10,2.6,Math.PI/2);var If=[];function Lf(e,t,n,r,i=1,a=`world`){let o=new z;o.position.set(t,n,r),o.scale.setScalar(i),e.add(o);for(let e=0;e<4;e++){let t=U(.16,.16,1.1,G.woodD,0,.1,0,o);t.rotation.y=e/4*Math.PI}let s=new I(new Ic(.42,1.2,7),Ed(16738836,2.4));s.position.y=.65,o.add(s);let c=new I(new Ic(.24,.8,7),Ed(16765562,3.4));c.position.y=.5,o.add(c);let l=zd(o,0,.75,0,3.8,16751168,.5);return If.push({f1:s,f2:c,g:o,gl:l,base:3.8,seed:Math.random()*10}),Vd.push({obj:o,zone:a,scale:i}),o}Lf(H,0,Tf(0,0),0);for(let e=0;e<9;e++){let t=e/9*V,n=new I(new Rc(.25,0),G.rstone);n.position.set(Math.cos(t)*.95,.1,Math.sin(t)*.95),H.add(n)}Df(`world`,0,0,1.1);{let e=new z;e.position.set(-8.8,0,5.6),H.add(e);let t=new I(new kl(.55,12,8,0,V,Math.PI/2.6,Math.PI/1.7),wd(2237222,{side:2}));t.position.y=.75,t.rotation.x=Math.PI,e.add(t);let n=new I(new Pc(.46,16),Td(8377242));n.rotation.x=-Math.PI/2,n.position.y=.95,e.add(n),Lf(e,0,0,0,.55),Df(`world`,-8.8,5.6,.7);let r=new z;r.position.set(10.9,0,1),H.add(r),U(.5,.6,.5,G.woodD,0,.3,0,r),U(.35,.25,.9,G.iron,0,.72,0,r),Df(`world`,10.9,1,.5);let i=new z;i.position.set(13.8,0,2.4),H.add(i),U(1.4,1,1.2,G.stone,0,.5,0,i);let a=new I(new Pr(1,.1,.8),Td(16738842));a.position.y=1.02,i.add(a),Of(`world`,13.1,14.5,1.8,3);let o=new z;o.position.set(5.6,0,-3.4),o.rotation.y=-.9,H.add(o),U(.14,2.2,.14,G.woodD,-.8,1.1,0,o),U(.14,2.2,.14,G.woodD,.8,1.1,0,o),U(1.9,1.1,.1,G.wood,0,1.5,0,o);for(let[e,t]of[[-.45,1.6],[.2,1.45],[.55,1.75]]){let n=new I(new ci(.34,.42),wd(15260864));n.position.set(e,t,.06),o.add(n)}Df(`world`,5.6,-3.4,.9)}function Rf(e,t,n,r,i=H,a=`world`,o=null){let s=Xd(r),c=new Nl({map:s.map,emissive:7329993,emissiveMap:s.emap,emissiveIntensity:.9}),l=new I(new Pr(.9,2.6,.45),[G.rstone,G.rstone,G.rstone,G.rstone,c,G.rstone]);return l.position.set(e,(o??Tf(e,t))+1.2,t),l.rotation.y=n,l.castShadow=nd,i.add(l),zd(i,e+Math.sin(n)*.32,(o??Tf(e,t))+1.25,t+Math.cos(n)*.32,2.4,7329993,.22),Df(a,e,t,.65),zf.push(c),l}var zf=[];Rf(21,-10,-.9,[`fehu`,`raido`,`algiz`]),Rf(46,-41,-.8,[`thurisaz`,`ansuz`,`tiwaz`]);for(let e=0;e<3;e++){let t=-.6+e*.75;Rf(ff.x+Math.sin(t)*5,ff.z+Math.cos(t)*5,t+Math.PI,[[`othala`,`sowilo`,`fehu`],[`algiz`,`tiwaz`,`raido`],[`ansuz`,`thurisaz`,`othala`]][e])}for(let[e,t,n]of[[-4,-2,1.1],[3.5,-3,.7],[-2,-5,.5]])U(.8,n,.8,G.rstone,ff.x+e,Tf(ff.x+e,ff.z+t)+n/2,ff.z+t,H),Df(`world`,ff.x+e,ff.z+t,.6);var Bf={x:-Math.SQRT1_2,z:Math.SQRT1_2},Vf={x:df.x+Bf.x*10.6,z:df.z+Bf.z*10.6};{let e=new I(new kl(11,20,9,0,V,0,Math.PI/2),wd(14279146,{flatShading:!0}));e.scale.y=.5,e.position.set(df.x,-.3,df.z),e.receiveShadow=nd,H.add(e);let t=new z;t.position.set(Vf.x,0,Vf.z),t.rotation.y=Math.atan2(Bf.x,Bf.z),H.add(t),U(.7,2.8,.8,G.rstone,-1.35,1.4,0,t),U(.7,2.8,.8,G.rstone,1.35,1.4,0,t),U(3.6,.6,1,G.rstone,0,3,0,t),U(2.1,2.6,.2,Td(329224),0,1.3,-.25,t),U(3.9,.3,1.2,G.snow,0,3.4,0,t),Df(`world`,df.x,df.z,9.6),Rf(Vf.x+3.2,Vf.z+2.6,Math.atan2(Bf.x,Bf.z),[`othala`,`algiz`,`thurisaz`]),Rf(Vf.x-2.6,Vf.z-3.2,Math.atan2(Bf.x,Bf.z),[`tiwaz`,`sowilo`,`raido`])}function Hf(){let e=[jf(new Fc(.11,.17,5.2,6).translate(0,2.6,0),15197146)];for(let t of[.9,1.7,2.4,3.3,4.1]){let n=.17-.06*t/5.2+.008;e.push(jf(new Fc(n,n,.1,6).translate(0,t,0),2762532))}for(let t=0;t<6;t++){let n=1.1+t%3*.4;e.push(jf(new Fc(.02,.045,n,4).translate(0,n/2,0).rotateZ(.7+t%2*.25).rotateY(t*1.1).translate(0,3+t*.32,0),6050378))}for(let t=0;t<4;t++){let n=t*1.6;e.push(jf(new wl(.45,0).scale(1,.7,1).translate(Math.cos(n)*.8,4.4+t%2*.6,Math.sin(n)*.8),t%2?13212218:11896366))}return Mf(e)}function Uf(){let e=new wl(.75,0);e.computeVertexNormals();let t=e.attributes.normal,n=new Float32Array(t.count*3),r=new F(15660024),i=new F(3033144);for(let e=0;e<t.count;e++){let a=t.getY(e)>.4?r:i;n[e*3]=a.r,n[e*3+1]=a.g,n[e*3+2]=a.b}return e.setAttribute(`color`,new lr(n,3)),e}function Wf(){let e=[];for(let t=0;t<5;t++){let n=.35+t%3*.12;e.push(jf(new Ic(.035,n,3).translate(0,n/2,0).rotateZ((t-2)*.22).rotateY(t*1.3),t%2?11901534:9402956))}return Mf(e)}{let e=Vu(21),t=[],n=md.clone().normalize(),r=new F(9345968),i=new F,a=new F(15331318),o=new F(3818839);for(let s=0;s<44;s++){let c=s/44*V+e()*.1,l=290+e()*150,u=55+e()*100,d=new Ic(55+e()*70,u,5+Math.floor(e()*3),3);d.scale(1,1,.6+e()*.6),d.rotateY(e()*V),d=d.toNonIndexed(),d.computeVertexNormals(),d.translate(Math.cos(c)*l,u/2-14,Math.sin(c)*l),d.deleteAttribute(`uv`);let f=d.attributes.position,p=d.attributes.normal,m=new Float32Array(f.count*3),h=(l-290)/150,g=.45+e()*.2;for(let e=0;e<f.count;e+=3){let t=((f.getY(e)+f.getY(e+1)+f.getY(e+2))/3+14)/u,s=p.getX(e),c=p.getY(e),l=p.getZ(e);i.copy(t>g&&c>.15?a:o).multiplyScalar(.5+.65*Math.max(0,s*n.x+c*n.y+l*n.z)),i.lerp(r,Fu(.3+h*.3+(1-t)*.25,0,.85));for(let t=0;t<3;t++)m[(e+t)*3]=i.r,m[(e+t)*3+1]=i.g,m[(e+t)*3+2]=i.b}d.setAttribute(`color`,new lr(m,3)),t.push(d)}let s=new I(Mf(t),new or({vertexColors:!0,fog:!1}));s.frustumCulled=!1,H.add(s)}{if(!td){let e=Vu(8),t=Math.atan2(md.z,md.x);for(let n=0;n<10;n++){let n=e()*V,r=Math.abs(Hu(n,t))<.9,i=new Ls(new Cs({map:Fd.cloud,color:r?15974822:10004162,transparent:!0,opacity:.5+e()*.2,fog:!1,depthWrite:!1}));i.position.set(Math.cos(n)*420,40+e()*70,Math.sin(n)*420);let a=160+e()*140;i.scale.set(a,a*.32,1),Zd.add(i)}}let e=new Ls(new Cs({map:Fd.glow,color:16762010,transparent:!0,opacity:.7,blending:2,fog:!1,depthWrite:!1}));e.position.copy(md).normalize().multiplyScalar(430),e.scale.set(150,150,1),Zd.add(e)}{let e=Vu(77),t=new Rn,n=new Nl({vertexColors:!0,flatShading:!0}),r=(e,t,n)=>Math.hypot(e,t)>n&&Math.hypot(e-df.x,t-df.z)>15&&Math.hypot(e-ff.x,t-ff.z)>8&&!bf(e,t),i=[];for(let t=0;t<800&&i.length<(td?30:60);t++){let t=(e()*2-1)*100,n=(e()*2-1)*100,a=Sf(t,n);!r(t,n,28)||a<4||a>16&&e()<.7||i.push([t,n,.8+e()*.5,e()*V])}let a=new Js(Hf(),n,i.length);i.forEach(([e,n,r,i],o)=>{t.position.set(e,Tf(e,n)-.1,n),t.rotation.set(0,i,0),t.scale.setScalar(r),t.updateMatrix(),a.setMatrixAt(o,t.matrix),Df(`world`,e,n,.16*r)}),a.castShadow=nd,a.receiveShadow=nd,a.frustumCulled=!1,H.add(a);let o=[];for(let t=0;t<900&&o.length<(td?40:80);t++){let t=(e()*2-1)*105,n=(e()*2-1)*105;!r(t,n,26)||Sf(t,n)<3||o.push([t,n,.7+e()*.7,e()*V])}let s=new Js(Uf(),n,o.length);o.forEach(([e,n,r,i],a)=>{t.position.set(e,Tf(e,n)+.2*r,n),t.rotation.set(0,i,0),t.scale.set(r,r*.8,r),t.updateMatrix(),s.setMatrixAt(a,t.matrix),Math.abs(e)<100&&Math.abs(n)<100&&Df(`world`,e,n,.5*r)}),s.castShadow=nd,s.receiveShadow=nd,s.frustumCulled=!1,H.add(s);let c=[];for(let t=0;t<4e3&&c.length<(td?160:420);t++){let t=(e()*2-1)*96,n=(e()*2-1)*96,r=Math.hypot(t,n),i=Sf(t,n);r<9||Math.hypot(t-df.x,n-df.z)<11.5||yf(t,n)<1.12||Math.hypot(t-K.x,n-K.z)<5||(r>11&&r<30||i>1.8&&i<7||Math.hypot(t-ff.x,n-ff.z)<12||e()<.12)&&c.push([t,n,.8+e()*.7,e()*V])}let l=new Js(Wf(),new Nl({vertexColors:!0}),c.length);c.forEach(([e,n,r,i],a)=>{t.position.set(e,Tf(e,n)-.05,n),t.rotation.set(0,i,0),t.scale.setScalar(r),t.updateMatrix(),l.setMatrixAt(a,t.matrix)}),l.frustumCulled=!1,H.add(l)}{let e=[],t=[],n=(n,r,i)=>{let a=[];for(let e=r;e<=i+1e-6;e+=2.2/n)a.push([Math.cos(e)*n,Math.sin(e)*n]);a.forEach(([n,r],i)=>{e.push([n,r]),i<a.length-1&&t.push([n,r,a[i+1][0],a[i+1][1]])})};n(24,.17,1.2),n(24,2.7,5.06);let r=new Pr(.16,1.3,.16);Dd(r,.16,1.3,.16,1.5);let i=new Pr(.07,.1,1);Dd(i,.07,.1,1,1.5);let a=new Js(r,G.woodD,e.length),o=new Js(new Pr(.22,.09,.22),G.snow,e.length),s=new Js(i,G.wood,t.length*2),c=new Js(new Pr(.1,.05,1),G.snow,t.length),l=new Rn;e.forEach(([e,t],n)=>{let r=Tf(e,t);l.position.set(e,r+.55,t),l.updateMatrix(),a.setMatrixAt(n,l.matrix),l.position.y=r+1.24,l.updateMatrix(),o.setMatrixAt(n,l.matrix),Df(`world`,e,t,.2)}),t.forEach(([e,t,n,r],i)=>{let a=(e+n)/2,o=(t+r)/2,u=Math.hypot(n-e,r-t),d=Tf(a,o);l.rotation.set(0,Math.atan2(n-e,r-t),0),l.scale.set(1,1,u),l.position.set(a,d+.5,o),l.updateMatrix(),s.setMatrixAt(i*2,l.matrix),l.position.y=d+.95,l.updateMatrix(),s.setMatrixAt(i*2+1,l.matrix),l.position.y=d+1.02,l.updateMatrix(),c.setMatrixAt(i,l.matrix);for(let i=1;i<3;i++)Df(`world`,e+(n-e)*i/3,t+(r-t)*i/3,.22)});for(let e of[a,o,s,c])e.castShadow=nd,e.receiveShadow=nd,H.add(e)}for(let[e,t,n]of[[0,.3,1],[0,.72,-1],[1,.45,1],[2,.82,-1]]){let[r,i]=pf[e],[a,o]=pf[e+1],s=Math.hypot(a-r,o-i),c=r+(a-r)*t+-(o-i)/s*2.4*n,l=i+(o-i)*t+(a-r)/s*2.4*n,u=Tf(c,l);U(.14,2.6,.14,G.woodD,c,u+1.3,l,H),U(.08,.08,.55,G.woodD,c,u+2.5,l+.22,H);let d=new I(new Pr(.2,.28,.2),Ed(16757340,2.6));d.position.set(c,u+2.25,l+.45),H.add(d),U(.26,.05,.26,G.iron,c,u+2.41,l+.45,H),zd(H,c,u+2.25,l+.45,2.6,16754768,.5),Df(`world`,c,l,.2)}for(let e of[-1,1]){let t=Vf.x+Bf.x*2.2+Math.SQRT1_2*2*e,n=Vf.z+Bf.z*2.2+Math.SQRT1_2*2*e,r=Tf(t,n);U(.55,.9,.55,G.stone,t,r+.45,n,H),Lf(H,t,r+.9,n,.45),Df(`world`,t,n,.4)}{let e=[];for(let t=0;t<3;t++)for(let n=0;n<4-t;n++)e.push(jf(new Fc(.14,.14,1.4,7).rotateX(Math.PI/2).translate(-.45+n*.3+t*.15,.14+t*.25,0),n%2?6177586:7031864));let t=new I(Mf(e),new Nl({vertexColors:!0,flatShading:!0}));t.position.set(-10.2,0,-5.5),t.rotation.y=Math.PI/2,t.castShadow=nd,H.add(t),Of(`world`,-10.9,-9.5,-6.2,-4.8);for(let[e,t]of[[12.3,-.8],[12.9,-.1],[-5.6,6.9]]){let n=new I(new Fc(.33,.3,.85,10),G.woodD);n.position.set(e,.43,t),n.castShadow=nd,H.add(n);let r=new I(new Pc(.33,10).rotateX(-Math.PI/2),G.snow);r.position.set(e,.86,t),H.add(r),Df(`world`,e,t,.35)}for(let[e,t,n]of[[8.4,4.6,.3],[-11.6,6.4,-.4]])U(.8,.6,.8,G.wood,e,.3,t,H).rotation.y=n,U(.84,.08,.84,G.snow,e,.64,t,H).rotation.y=n,Df(`world`,e,t,.5)}var Gf=null,Kf=kd(512,512,(e,t,n)=>{let r=e.createRadialGradient(t/2,n/2,20,t/2,n/2,t/2);r.addColorStop(0,`#7fa9c6`),r.addColorStop(.7,`#a9c9dc`),r.addColorStop(1,`#dfeaf2`),e.fillStyle=r,e.fillRect(0,0,t,n);for(let r=0;r<18;r++){let r=W()*t,i=W()*n,a=20+W()*60,o=e.createRadialGradient(r,i,0,r,i,a);o.addColorStop(0,`rgba(40,80,120,.25)`),o.addColorStop(1,`rgba(40,80,120,0)`),e.fillStyle=o,e.fillRect(r-a,i-a,a*2,a*2)}e.strokeStyle=`rgba(255,255,255,.55)`,e.lineWidth=1.5;for(let r=0;r<26;r++){let r=W()*t,i=W()*n;e.beginPath(),e.moveTo(r,i);for(let t=0;t<6;t++)r+=(W()-.5)*70,i+=(W()-.5)*70,e.lineTo(r,i);e.stroke()}for(let r=0;r<40;r++)e.fillStyle=`rgba(240,246,250,${.25+W()*.35})`,e.beginPath(),e.ellipse(W()*t,W()*n,10+W()*40,3+W()*8,W()*3,0,V),e.fill()},!0,!0);{let e=new I(new Pc(1,72).rotateX(-Math.PI/2),new Ml({map:Kf,color:16777215,specular:14675967,shininess:80}));e.scale.set(mf.rx*1.02,1,mf.rz*1.02),e.position.set(mf.x,-.97,mf.z),e.receiveShadow=nd,H.add(e);let t=new I(new Pc(.55,18).rotateX(-Math.PI/2),Td(463645));t.position.set(_f.x,-.955,_f.z),H.add(t);let n=new I(new El(.55,.78,18).rotateX(-Math.PI/2),wd(15660024));n.position.set(_f.x,-.95,_f.z),H.add(n),U(.4,.35,.4,G.wood,_f.x+1.1,-.8,_f.z-.5,H);let r=new z;r.position.set(hf.x,Tf(hf.x,hf.z),hf.z),H.add(r);let i=new I(new Ic(1.6,2.4,6,1,!0),wd(10127980,{side:2,flatShading:!0}));i.position.set(-2.2,.9,1.2),i.rotation.set(.9,.4,.3),i.castShadow=nd,r.add(i);for(let e of[-1,1]){let t=U(.1,1.8,.1,G.woodD,1.6+e*.9,.9,-1.4,r);t.rotation.z=e*.08}let a=U(2,.08,.08,G.woodD,1.6,1.7,-1.4,r);a.rotation.z=.35;for(let e=0;e<3;e++){let t=new I(new Ic(.08,.45,5).rotateX(Math.PI),wd(9412779,{flatShading:!0}));t.position.set(1+e*.45,1.35+e*.12,-1.4),r.add(t)}U(.8,.15,1.8,G.wood,-.6,.2,-2.2,r).rotation.set(.2,.7,.9);for(let e=0;e<3;e++){let t=U(.12,.12,.9,G.woodD,.3+Math.cos(e)*.5,.06,.8+Math.sin(e*2)*.4,r);t.rotation.y=e*1.3}let o=new I(new Fc(.3,.28,.8,10),G.woodD);o.position.set(2.2,.3,1),o.rotation.z=Math.PI/2,r.add(o),Df(`world`,hf.x-2.2,hf.z+1.2,1.2),Df(`world`,hf.x+1.6,hf.z-1.4,.6),Df(`world`,hf.x+2.2,hf.z+1,.4),Gf=Lf(H,hf.x+.3,Tf(hf.x+.3,hf.z+.8),hf.z+.8,.7),Gf.visible=!1;let s=Tf(K.x,K.z+6.5),c=new z;c.position.set(K.x,s-.4,K.z+6.8),H.add(c),U(1.4,4.6,1.6,G.rstone,-2.1,2.1,0,c).rotation.z=.12,U(1.4,4.6,1.6,G.rstone,2.1,2.1,0,c).rotation.z=-.12,U(5.8,1.3,1.9,G.rstone,0,4.4,0,c),U(3.2,3.8,.3,Td(263947),0,1.9,.4,c),U(6.2,.35,2.1,G.snow,0,5.15,0,c);for(let e=0;e<9;e++){let e=U(.45*W()+.25,.07,.09,G.bone,K.x-3+W()*6,Tf(K.x,K.z)+.04,K.z+1+W()*4,H);e.rotation.y=W()*V,e.castShadow=!1}U(.18,2,.18,G.woodD,K.x+5.2,Tf(K.x+5.2,K.z+3.4)+.9,K.z+3.4,H);let l=new I(new Fc(.22,.22,1.3,8).rotateZ(Math.PI/2),G.woodD);l.position.set(K.x+5.2,Tf(K.x+5.2,K.z+2.7)+.2,K.z+2.7),H.add(l),Df(`world`,K.x-2.1,K.z+6.8,1),Df(`world`,K.x+2.1,K.z+6.8,1),Of(`world`,K.x-1.6,K.z+1.6,K.z+6.2,K.z+7.8);for(let[e,t]of[[-11.5,24.5],[-9.5,38]]){let n=Tf(e,t);U(.14,2.6,.14,G.woodD,e,n+1.3,t,H);let r=new I(new Pr(.2,.28,.2),Ed(16757340,2.6));r.position.set(e,n+2.35,t+.25),H.add(r),zd(H,e,n+2.35,t+.25,2.4,16754768,.5),Df(`world`,e,t,.2)}}var qf=[];{let e=wd(1316379,{flatShading:!0,side:2});for(let t=0;t<3;t++){let n=new z;H.add(n);let r=new I(new Ic(.12,.6,5).rotateX(Math.PI/2),e);n.add(r);let i=[];for(let t of[-1,1]){let r=new z;r.position.x=t*.05,n.add(r);let a=new I(new ci(.7,.28).translate(t*.35,0,0).rotateX(-Math.PI/2),e);r.add(a),i.push(r)}qf.push({g:n,wings:i,r:9+t*4,h:13+t*2.5,sp:.25+t*.07,ph:t*2.1})}}function Jf(){for(let e of qf){let t=X.time*e.sp+e.ph,n=mf.x+Math.cos(t)*e.r,r=mf.z+Math.sin(t)*e.r*.8;e.g.position.set(n,e.h+Math.sin(X.time*.7+e.ph)*.8,r),e.g.rotation.set(0,Math.atan2(-Math.sin(t)*e.r,Math.cos(t)*e.r*.8),Math.sin(t*2)*.15);let i=Math.sin(X.time*7+e.ph)*.6;e.wings[0].rotation.z=i,e.wings[1].rotation.z=-i}}var Yf=[];if(!td)for(let e of Bd)for(let t=0;t<6;t++){let n=new Ls(new Cs({map:Fd.smoke,color:9279139,transparent:!0,opacity:0,depthWrite:!1}));H.add(n),Yf.push({sp:n,s:e,t:t/6})}function Xf(e){for(let t of Yf){t.t=(t.t+e*.085)%1;let n=t.t;t.sp.position.set(t.s.x+n*3.2+Math.sin(n*5+t.s.z)*.35,t.s.y+n*8.5,t.s.z-n*1.2);let r=1.1+n*4.8;t.sp.scale.set(r,r,1),t.sp.material.opacity=Math.sin(Math.PI*n)*.3}}var Zf=[];if(!td){let e=Vu(5);for(let t=0;t<(ed?24:14);t++){let t=(e()*2-1)*92,n=(e()*2-1)*92,r=new Ls(new Cs({map:Fd.smoke,color:13884648,transparent:!0,opacity:0,depthWrite:!1})),i=20+e()*16;r.scale.set(i,i*.4,1),r.position.set(t,Tf(t,n)+1.8,n),H.add(r),Zf.push({sp:r,x:t,ph:e()*V,base:.2+e()*.12})}}function Qf(){for(let e of Zf)e.sp.position.x=e.x+Math.sin(X.time*.05+e.ph)*4,e.sp.material.opacity=e.base*Lu(8,24,ld.position.distanceTo(e.sp.position))}var $f={minX:-12,minZ:-2,cols:34,rows:27},ep=new Uint8Array($f.cols*$f.rows);function tp(e,t,n,r,i=1){for(let a=(e-$f.minX)/2;a<(t-$f.minX)/2;a++)for(let e=(n-$f.minZ)/2;e<(r-$f.minZ)/2;e++)ep[e*$f.cols+a]=i}tp(-6,6,0,12),tp(-2,2,12,30),tp(-10,10,30,46),tp(10,30,36,40),tp(30,54,24,50),tp(40,44,6,24),tp(8,44,4,8);for(let[e,t]of[[36,30],[46,30],[36,42],[46,42]])tp(e,e+2,t,t+2,0);var np={g1:{cells:[[9,3],[9,4]],open:!1,mesh:null,t:1},g2:{cells:[[26,12],[27,12]],open:!1,mesh:null,t:1}},rp=new Map;for(let[e,t]of Object.entries(np))for(let[e,n]of t.cells)ep[n*$f.cols+e]=2,rp.set(e+`,`+n,t);var ip=(e,t)=>e>=0&&t>=0&&e<$f.cols&&t<$f.rows,ap=(e,t)=>ip(e,t)?ep[t*$f.cols+e]:0;function op(e,t){let n=ap(e,t);return n===1||n===2&&rp.get(e+`,`+t).open}var sp=e=>Math.floor((e-rd-$f.minX)/2),cp=e=>Math.floor((e-$f.minZ)/2),lp=(e,t)=>({x:rd+$f.minX+e*2+1,z:$f.minZ+t*2+1});function up(e,t){let n=sp(e.x-t),r=sp(e.x+t),i=cp(e.z-t),a=cp(e.z+t);for(let o=n;o<=r;o++)for(let n=i;n<=a;n++)if(!op(o,n)){let r=rd+$f.minX+o*2,i=$f.minZ+n*2;kf(e,t,r,r+2,i,i+2)}}function dp(e,t,n,r){let i=Math.hypot(n-e,r-t),a=Math.ceil(i/.5);for(let i=1;i<a;i++){let o=i/a;if(ap(sp(e+(n-e)*o),cp(t+(r-t)*o))===0)return!1}return!0}var fp=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],pp=new Int16Array($f.cols*$f.rows),mp=-1,hp=!0;function gp(){let e=sp(q.pos.x),t=cp(q.pos.z),n=t*$f.cols+e;if(n===mp&&!hp||(mp=n,hp=!1,pp.fill(-1),!op(e,t)))return;let r=[n];pp[n]=0;let i=0;for(;i<r.length;){let e=r[i++],t=e%$f.cols,n=e/$f.cols|0,a=pp[e];for(let[e,i]of fp){let o=t+e,s=n+i;if(!op(o,s)||e&&i&&(!op(t+e,n)||!op(t,n+i)))continue;let c=s*$f.cols+o;pp[c]===-1&&(pp[c]=a+1,r.push(c))}}}function _p(e,t){let n=sp(e),r=cp(t);if(!ip(n,r))return null;let i=pp[r*$f.cols+n],a=null,o=i<0?1e9:i;for(let[e,t]of fp){let i=n+e,s=r+t;if(!op(i,s)||e&&t&&(!op(n+e,r)||!op(n,r+t)))continue;let c=pp[s*$f.cols+i];c>=0&&c<o&&(o=c,a=[i,s])}return a?lp(a[0],a[1]):null}{let e=[],t=[],n=[];for(let n=0;n<$f.rows;n++)for(let r=0;r<$f.cols;r++){if(ap(r,n)!==0){e.push([r,n]);continue}let i=!1;for(let[e,t]of fp)ap(r+e,n+t)!==0&&(i=!0);i&&t.push([r,n])}let r=Vu(11),i=new Rn,a=new F,o=new Pr(2,.3,2);Dd(o,2,.3,2,2);let s=new Js(o,wd(16777215,{map:Fd.flag}),e.length);e.forEach(([e,t],n)=>{let o=lp(e,t);i.position.set(o.x,-.15,o.z),i.rotation.set(0,0,0),i.scale.set(1,1,1),i.updateMatrix(),s.setMatrixAt(n,i.matrix),a.setScalar(.82+r()*.3),s.setColorAt(n,a)}),s.receiveShadow=!0,yd.add(s);let c=new Pr(2,3.4,2);Dd(c,2,3.4,2,2);let l=new Js(c,wd(16777215,{map:Fd.brick}),t.length);t.forEach(([e,t],o)=>{let s=lp(e,t);if(i.position.set(s.x,1.7,s.z),i.updateMatrix(),l.setMatrixAt(o,i.matrix),a.setScalar(.78+r()*.32),l.setColorAt(o,a),o%7==3){for(let[r,i]of[[1,0],[-1,0],[0,1],[0,-1]])if(ap(e+r,t+i)===1){n.push({x:s.x+r*1.02,z:s.z+i*1.02,di:r,dj:i});break}}}),yd.add(l);let u=Ed(16752704,2.6),d=G.iron;for(let e of n){let t=U(.16,.5,.16,d,e.x,1.9,e.z,yd);t.castShadow=!1;let n=new I(new Ic(.12,.35,6),u);n.position.set(e.x+e.di*.05,2.3,e.z+e.dj*.05),yd.add(n);let r=zd(yd,e.x+e.di*.15,2.35,e.z+e.dj*.15,1.4,16751168,.5);If.push({f1:n,f2:null,g:n,gl:r,base:1.4,seed:Math.random()*10})}U(2.4,2.9,.25,G.woodD,rd,1.45,.1,yd);let f=new I(new ci(2,.12),Td(10467032));f.position.set(rd,2.95,.25),yd.add(f);for(let[e,t]of[[rd,38],[1046,33],[1046,41]]){let n=new z;n.position.set(e,0,t),yd.add(n),U(.12,.9,.12,G.iron,-.25,.45,0,n),U(.12,.9,.12,G.iron,.25,.45,0,n);let r=new I(new Fc(.55,.35,.35,10),G.iron);r.position.y=1,n.add(r),Lf(n,0,1.12,0,e>1010?.55:.75,`dungeon`),Df(`dungeon`,e,t,.6)}let p=new z;p.position.set(1051.2,0,37),yd.add(p),U(1.8,.4,3.2,G.dstone,.2,.2,0,p),U(1.2,.85,1.4,G.dstone,0,.62,0,p),U(.35,2.6,1.6,G.dstone,.65,1.3,0,p);for(let e of[-1,1])U(1.2,.5,.25,G.dstone,0,1.1,e*.75,p);Of(`dungeon`,1050.4,1052.3,35.4,38.6);let m=new I(new El(3.6,3.85,48),Td(7329993,{transparent:!0,opacity:.35,blending:2,depthWrite:!1}));m.rotation.x=-Math.PI/2,m.position.set(1045,.02,37),yd.add(m);for(let e=0;e<14;e++){let e=1032+r()*20,t=26+r()*22;if(Math.hypot(e-rd-45,t-37)<5)continue;let n=U(.5*r()+.2,.06,.08,G.bone,e,.03,t,yd);n.rotation.y=r()*V,n.castShadow=!1}Rf(995.5,11,Math.PI,[`algiz`,`othala`,`fehu`],yd,`dungeon`,0)}var vp=[],yp=null;{let e=(e,t,n,r)=>{let i=new z;i.position.set(e,0,t),n||(i.rotation.y=Math.PI/2),yd.add(i);for(let e of[-1,1])U(.7,3.3,.9,G.dstone,e*(r/2+.2),1.65,0,i);U(r+1.6,.7,1,G.dstone,0,3.15,0,i)};e(rd,12,!0,4),e(rd,30,!0,4),e(1010,38,!1,4),e(1030,38,!1,4);let t=(e,t)=>new Hr({uniforms:{color:{value:new F(e).multiplyScalar(t)},t:{value:0}},transparent:!0,depthWrite:!1,blending:2,side:2,vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vV; void main(){ vUv = uv; vec4 mv = modelViewMatrix*vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }`,fragmentShader:`uniform vec3 color; uniform float t; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ float e = abs(dot(normalize(vN), normalize(vV))); float a = pow(e, 1.8) * mix(0.05, 1.0, vUv.y) * (0.85 + 0.15 * sin(t * 1.3 + vUv.x * 20.0));
        gl_FragColor = vec4(color * a, a);
        #include <colorspace_fragment>
      }`}),n=(e,n,r,i)=>{let a=new I(new Fc(.5,1.7,6,20,1,!0),t(r,i));a.position.set(e,3,n),a.renderOrder=5,yd.add(a),vp.push(a);let o=new I(new Pc(1.8,28).rotateX(-Math.PI/2),new or({map:Fd.glow,color:new F(r).multiplyScalar(.55),transparent:!0,blending:2,depthWrite:!1}));o.position.set(e,.03,n),yd.add(o)};if(n(1002.5,6.5,10470143,.4),n(996,41,10470143,.35),n(1045,37,7329993,.45),!td){let e=new Float32Array(780),t=Vu(31),n=0;for(;n<260;){let r=990+t()*64,i=t()*50;ap(sp(r),cp(i))===1&&(e[n*3]=r,e[n*3+1]=.3+t()*2.8,e[n*3+2]=i,n++)}let r=new br;r.setAttribute(`position`,new lr(e,3).setUsage(qe)),yp=new ec(r,new Ys({map:Fd.soft,color:16767400,size:.07,transparent:!0,opacity:.55,blending:2,depthWrite:!1})),yp.userData.n=260,yp.frustumCulled=!1,yd.add(yp)}let r=wd(15129280),i=Ed(16760944,3);for(let[e,t]of[[994.8,1],[1005.2,10.8],[990.9,30.9],[1009.1,45.1],[1031,25],[1031,49],[1053,25.2],[1053,48.8]]){let n=new z;n.position.set(e,0,t),yd.add(n);for(let e=0;e<3;e++){let t=.18+e*.09,a=Math.cos(e*2.1)*.12,o=Math.sin(e*2.1)*.12,s=new I(new Fc(.045,.05,t,6),r);s.position.set(a,t/2,o),n.add(s);let c=new I(new Ic(.025,.09,5),i);c.position.set(a,t+.05,o),n.add(c)}zd(n,0,.35,0,1.5,16754768,.45)}let a=wd(16777215,{map:kd(128,256,(e,t,n)=>{e.fillStyle=`#5a1c22`,e.fillRect(0,0,t,n),Ad(e,t,n,500,.25,1,3),e.fillStyle=`#3a1116`,e.fillRect(6,0,4,n),e.fillRect(t-10,0,4,n),Yd(e,qd.othala,30,60,68,90,`#c9a24a`,7),e.globalCompositeOperation=`destination-out`;for(let r=0;r<t;r+=16)e.beginPath(),e.moveTo(r,n),e.lineTo(r+8,n-18-W()*16),e.lineTo(r+16,n),e.fill();e.globalCompositeOperation=`source-over`},!0,!0),alphaTest:.5,side:2});for(let e of[33,37,41]){let t=new I(new ci(1.2,2.6),a);t.position.set(1053.95,2,e),t.rotation.y=-Math.PI/2,yd.add(t)}let o=wd(14274747),s=Vu(4);for(let e=0;e<8;e++){let e=1032+s()*20,t=26+s()*22;if(Math.hypot(e-rd-45,t-37)<5)continue;let n=new I(new kl(.13,7,5),o);n.scale.set(1,.85,1.15),n.position.set(e,.1,t),n.rotation.y=s()*V,yd.add(n)}}function bp(e){if(!yp)return;let t=yp.geometry.attributes.position.array,n=yp.userData.n;for(let r=0;r<n;r++)t[r*3]+=Math.sin(X.time*.3+r)*.08*e,t[r*3+1]+=Math.sin(X.time*.5+r*1.7)*.05*e,t[r*3+2]+=Math.cos(X.time*.27+r*.7)*.08*e;yp.geometry.attributes.position.needsUpdate=!0}for(let[e,t]of Object.entries(np)){let e=t.cells.map(([e])=>lp(e,0).x),n=t.cells.map(([,e])=>lp(0,e).z),r=Math.min(...e)-1,i=Math.max(...e)+1,a=Math.min(...n)-1,o=Math.max(...n)+1,s=i-r<o-a,c=s?o-a:i-r,l=new z;l.position.set((r+i)/2,0,(a+o)/2),s||(l.rotation.y=Math.PI/2),yd.add(l);for(let e=0;e<=Math.round(c/.34);e++)U(.07,3.2,.07,G.iron,0,1.6,-c/2+e*(c/Math.round(c/.34)),l);for(let e of[.6,1.8,2.9])U(.09,.09,c,G.iron,0,e,0,l);t.mesh=l}function xp(e,t,n){let r=np[e];r.open=t,r.t=+!!n,hp=!0,n?r.mesh.position.y=t?3.1:0:Y(`gate`)}var Sp=[33,38,43];for(let e of Sp){let t=new z;t.position.set(991.25,0,e),yd.add(t),U(2.1,.7,.95,G.dstone,0,.35,0,t);let n=U(2.1,.12,.95,G.dstone,.1,.35,.8,t);n.rotation.x=.9,Of(`dungeon`,990.2,992.3,e-.5,e+.5)}var Cp=(e,t,n,r=8)=>new Fc(e,t,n,r),wp=(e,t,n=7)=>new Nc(e,t,2,n),Tp=(e,t=1)=>new wl(e,t),Ep=(e,t,n)=>new Pr(e,t,n),Dp=e=>e.rotateX(Math.PI/2);function Op(){let e=new Map;return{add:(t,n,r,i=0,a=0,o=0,s=0,c=0,l=0)=>{s&&n.rotateX(s),c&&n.rotateY(c),l&&n.rotateZ(l),n.translate(i,a,o),e.has(t)||e.set(t,[]),e.get(t).push(jf(n,r))},bake:t=>{for(let[n,r]of e){let e=new I(Mf(r),t);e.castShadow=nd,e.receiveShadow=nd,n.add(e)}}}}var kp={};function Ap(e,t){let n=e+t;return kp[n]?kp[n]:kp[n]=kd(256,256,(n,r,i)=>{n.fillStyle=e,n.fillRect(0,0,r,i),n.save(),n.translate(128,128),n.fillStyle=t;for(let e=0;e<4;e+=2){let t=e*Math.PI/2,r=t+Math.PI/2;n.beginPath(),n.moveTo(0,0),n.quadraticCurveTo(132*.55*Math.cos(t-.6),132*.55*Math.sin(t-.6),132*Math.cos(t),132*Math.sin(t)),n.arc(0,0,132,t,r),n.quadraticCurveTo(132*.55*Math.cos(r-.6),132*.55*Math.sin(r-.6),0,0),n.fill()}n.restore();for(let e=0;e<r;e+=32)n.fillStyle=`rgba(0,0,0,.18)`,n.fillRect(e,0,2,i);Ad(n,r,i,900,.22,1,3);let a=n.createRadialGradient(128,128,50,128,128,128);a.addColorStop(0,`rgba(0,0,0,0)`),a.addColorStop(1,`rgba(0,0,0,.38)`),n.fillStyle=a,n.fillRect(0,0,r,i)},!0,!0)}function jp(e,t,n){if(e===`sword`||e===`rusty`){let r=e===`rusty`,i=r?.72:.8,a=r?8020556:12042440;n.add(t,Dp(Cp(.024,.024,.2,6)),4863270),n.add(t,Tp(.042,0),r?6246464:13214282,0,0,-.12),n.add(t,Ep(.24,.035,.045),r?6246464:13214282,0,0,.115),n.add(t,Ep(.068,.018,i),a,0,0,.14+i/2),n.add(t,Ep(.016,.022,i*.8),r?5061936:8160654,0,0,.14+i*.45),n.add(t,Dp(new Ic(.048,.14,4).rotateY(Math.PI/4).scale(1,1,.3)),a,0,0,.21+i)}else if(e===`axe`){n.add(t,Dp(Cp(.032,.036,1.45,6)),3877408,0,0,.45);let e=new zc;e.moveTo(-.05,0),e.lineTo(.05,0),e.lineTo(.09,.13),e.quadraticCurveTo(.24,.26,.22,.46),e.quadraticCurveTo(0,.36,-.22,.42),e.quadraticCurveTo(-.12,.25,-.08,.12),e.closePath();let r=new xl(e,{depth:.035,bevelEnabled:!1});r.translate(0,0,-.0175),r.rotateY(-Math.PI/2),n.add(t,r,7369067,0,.03,1.02),n.add(t,Dp(Cp(.046,.046,.13,6)),5066056,0,0,1.02)}else if(e===`staff`){n.add(t,Dp(Cp(.024,.034,1.85,6)),5981750,0,0,.38),n.add(t,new Al(.085,.014,4,10),10125384,0,0,1.28);for(let e of[-1,1])n.add(t,Tp(.025,0),13616816,e*.06,-.07,1.12);let e=new I(new Tl(.075),Ed(7329993,1.6));e.position.z=1.3,t.add(e),zd(t,0,0,1.3,.9,7329993,.5)}else if(e===`club`){n.add(t,Dp(Cp(.1,.05,1.35,7)),5981750,0,0,.55);for(let e=0;e<4;e++)n.add(t,Tp(.07,0),4864556,Math.cos(e*1.7)*.08,Math.sin(e*1.7)*.08,.95+e*.07)}else e===`hammer`&&(n.add(t,Dp(Cp(.022,.026,.5,6)),5981750,0,0,.2),n.add(t,Cp(.075,.075,.26,6),8160654,0,0,.47,0,0,Math.PI/2))}function Mp(e){let t=Op(),n=new Nl({vertexColors:!0,flatShading:!0}),r=[n],i=new z;i.rotation.order=`YXZ`;let a=e.build??1,o=e.thin?.75:1,s={body:e.body,skin:e.skin,dark:e.dark??3813673,metal:e.metal??10134702,cloak:e.cloak??e.body,leather:e.leather??4863270},c=new z;if(c.position.y=.95,i.add(c),t.add(c,Cp(.19*a,.2*a,.2,8).scale(1,1,.72),s.dark,0,.02,0),e.skirt===`robe`||e.skirt===`dress`?(t.add(c,Cp(.22*a,.37*a,.92,10).scale(1,1,.8),e.skirtColor??s.body,0,-.4,0),e.trim&&t.add(c,Cp(.375*a,.375*a,.05,10).scale(1,1,.8),e.trim,0,-.84,0)):e.skirt&&(t.add(c,Cp(.21*a,.28*a,.36,8).scale(1,1,.78),s.body,0,-.12,0),e.trim&&t.add(c,Cp(.285*a,.285*a,.04,8).scale(1,1,.78),e.trim,0,-.29,0)),e.tatters)for(let n=0;n<5;n++)t.add(c,Ep(.07,.3+n%3*.08,.012),e.tatters,-.16+n*.08,-.2-n%3*.04,.2,.08,0,(n-2)*.06);let l=new z;if(c.add(l),t.add(l,Cp(.27*a,.2*a,.6,8).scale(1,1,.66),s.body,0,.4,0),e.vest&&t.add(l,Cp(.285*a,.225*a,.44,8).scale(1,1,.7),e.vest,0,.45,0),t.add(l,Cp(.215*a,.215*a,.08,8).scale(1,1,.72),s.leather,0,.12,0),e.buckle&&t.add(l,Ep(.09,.07,.03),13214282,0,.12,.16*a),t.add(l,Ep(.1,.12,.07),s.leather,.17*a,.04,.07),t.add(l,Cp(.065,.075,.14,6),s.skin,0,.72,0),e.apron&&t.add(l,Ep(.3*a,.62,.02),e.apron,0,.23,.165*a),e.brooch)for(let e of[-1,1])t.add(l,Tp(.045,0).scale(1,1.3,.6),13214282,e*.1,.52,.18*a);if(e.necklace)for(let n=0;n<7;n++){let r=-.9+n*.3;t.add(l,Tp(.022,0),e.necklace,Math.sin(r)*.12,.62-Math.cos(r)*.06,.14+Math.cos(r)*.04)}if(e.ribs)for(let e=0;e<3;e++)t.add(l,Ep(.16,.022,.02),12107176,0,.52-e*.07,.17*a);if(e.fur&&t.add(l,new Al(.2*a,.075,5,10).rotateX(Math.PI/2).scale(1,1,.8),e.fur,0,.66,-.01),e.chestRune){let t=Ed(e.chestRune,1.8),n=.215*a,r=(e,r,i,a,o)=>{let s=new I(Ep(e,r,.01),t);s.position.set(i,a,n),s.rotation.z=o,l.add(s)};r(.022,.24,-.035,.45,0),r(.022,.12,0,.48,.9),r(.022,.12,0,.42,-.9)}let u=null;if(e.cloakBack){u=new z,u.position.set(0,.66,-.03),l.add(u);let e=new Fc(.24*a,.4*a,1.1,10,1,!0,Math.PI/2,Math.PI).translate(0,-.55,0).scale(1,1,.75),t=wd(s.cloak,{side:2,flatShading:!0});r.push(t);let n=new I(e,t);n.castShadow=nd,u.add(n)}let d=new z;if(d.position.y=.84,l.add(d),t.add(d,Tp(.15,1).scale(1,1.12,1.04),s.skin,0,.05,0),t.add(d,Ep(.035,.07,.05),s.skin,0,.04,.15),e.eyes){for(let e of[-1,1])t.add(d,Ep(.05,.035,.02),1315858,e*.055,.08,.142);let n=Td(e.eyes);for(let e of[-1,1]){let t=new I(Ep(.03,.018,.02),n);t.position.set(e*.055,.08,.152),d.add(t)}zd(d,0,.08,.2,.55,e.eyes,.75)}else for(let e of[-1,1])t.add(d,Ep(.035,.022,.02),1907224,e*.055,.08,.146);if(e.hair){if(!e.bald)t.add(d,new kl(.162,8,6,0,V,0,Math.PI*.55),e.hair,0,.06,-.012,-.35);else for(let n of[-1,1])t.add(d,Ep(.04,.1,.16),e.hair,n*.145,.03,-.03);if(e.longHair&&t.add(d,Cp(.12,.15,.36,7).scale(1,1,.5),e.hair,0,-.14,-.1),e.braids)for(let n of[-1,1])t.add(d,Cp(.025,.02,.42,5),e.hair,n*.13,-.19,.05);t.add(d,Ep(.14,.022,.02),e.hair,0,.115,.148)}if(e.beard){let n=e.beardLen??.22;t.add(d,new Ic(.12,n,7).scale(1,1,.6),e.beard,0,-.02-n/2,.075,Math.PI),t.add(d,Ep(.13,.03,.03),e.beard,0,.005,.152),e.beardBraid&&t.add(d,Cp(.022,.016,.16,5),e.beard,0,-.1-n,.08)}if(e.helmet){let n=e.helmetColor??s.metal;t.add(d,new kl(.168,8,5,0,V,0,Math.PI/2).scale(1,1.3,1.05),n,0,.09,0),t.add(d,Cp(.173,.173,.045,10).scale(1,1,1.05),n,0,.1,0),t.add(d,Ep(.03,.13,.03),n,0,.05,.172),t.add(d,Tp(.025,0),n,0,.31,0)}if(e.hood&&(t.add(d,new kl(.205,8,6,0,V,0,Math.PI*.62).scale(1,1.1,1.05),s.cloak,0,.04,-.03,-.45),t.add(d,Cp(.19,.25,.16,8).scale(1,1,.8),s.cloak,0,-.14,-.02)),e.tusks)for(let e of[-1,1])t.add(d,new Ic(.022,.1,4),15920866,e*.065,-.01,.14);if(e.crown){t.add(d,new Fc(.178,.178,.07,8,1,!0),10125384,0,.19,0);for(let e=0;e<6;e++)t.add(d,new Ic(.028,.12,4),10125384,Math.sin(e/6*V)*.178,.28,Math.cos(e/6*V)*.178)}let f=(n,r)=>{let i=new z;if(i.position.set(n*.3*a,.64,0),l.add(i),t.add(i,Tp(.095*o*a,0),s.body,0,-.03,0),t.add(i,wp(.068*o*a,.18),s.body,0,-.16,0),e.pauldron&&(t.add(i,new kl(.13*a,7,4,0,V,0,Math.PI/2).scale(1,.75,1.1),s.metal,0,0,0),e.pauldron===`spiky`))for(let e=0;e<3;e++)t.add(i,new Ic(.025,.13,4),s.metal,(e-1)*.05,.16,0);let c=new z;c.position.y=-.3,c.rotation.x=-r,i.add(c),t.add(c,wp(.058*o*a,.16),e.bareArms?s.skin:s.body,0,-.12,0),t.add(c,Cp(.067*o*a,.061*o*a,.12,7),s.leather,0,-.2,0),t.add(c,Tp(.055,0).scale(1,1.1,1),e.gloves?s.leather:s.skin,0,-.3,0);let u=new z;return u.position.y=-.32,u.rotation.x=r,c.add(u),{a:i,fa:c,mount:u}},p=f(-1,.28),m=f(1,.22);if(e.armScale)for(let t of[p.a,m.a])t.scale.set(1.1,e.armScale,1.1);let h=n=>{let r=new z;r.position.set(n*.115*a,-.02,0),c.add(r),t.add(r,wp(.085*o*a,.28),s.dark,0,-.215,0);let i=new z;if(i.position.y=-Np,r.add(i),t.add(i,Tp(.074*o*a,0),s.dark,0,0,.012),t.add(i,wp(.07*o*a,.26),s.dark,0,-.2,0),e.wraps)for(let n=0;n<3;n++)t.add(i,Cp(.078*o*a,.078*o*a,.035,7),e.wraps,0,-.1-n*.09,0);t.add(i,Cp(.084*o,.078*o,.14,7),s.leather,0,-.36,0);let l=new z;return l.position.y=-Pp,i.add(l),t.add(l,Ep(.13*o+.02,.1,.25),s.leather,0,-.03,.045),r.userData.knee=i,r.userData.ankle=l,r},g=h(-1),_=h(1),v=null,y=null;if(e.weapon&&(v=new z,p.mount.add(v),jp(e.weapon,v,t)),e.shield){let n=new z;n.position.set(.1,-.14,0),n.rotation.x=.22,m.fa.add(n),y=new z,n.add(y);let i=new Nl({map:Ap(e.shield[0],e.shield[1])}),a=wd(5914672,{flatShading:!0});r.push(i,a);let o=new I(Cp(.38,.38,.045,18),[a,i,a]);o.castShadow=nd,y.add(o),t.add(y,new Al(.38,.022,4,22),7172986,0,0,0,Math.PI/2),t.add(y,new kl(.085,8,4,0,V,0,Math.PI/2),10134702,0,.022,0),y.rotation.z=-Math.PI/2}return t.bake(n),{kind:`h`,root:i,hips:c,torso:l,headG:d,armR:p.a,armL:m.a,legR:g,legL:_,weapon:v,shield:y,cloak:u,flash:r,lean:e.lean||0,walkT:Math.random()*6,crouch:0,blockA:0,recoil:0}}var Np=.43,Pp=.44,Fp=.08;function Ip(e,t,n){let r=Math.hypot(t,n),i=.868;if(r>i){let e=i/r;t*=e,n*=e,r=i}if(r<.25){let e=.25/Math.max(r,1e-4);t*=e,n*=e,r=.25}let a=Math.atan2(t,n),o=Math.acos(Fu((Np*Np+r*r-Pp*Pp)/(2*Np*r),-1,1)),s=Math.acos(Fu((.37849999999999995-r*r)/(2*Np*Pp),-1,1)),c=-(a+o),l=Math.PI-s;e.rotation.x=c,e.userData.knee.rotation.x=l,e.userData.ankle.rotation.x=-(c+l)}var Lp={G:{rx:-.35,rz:0,w:.9,lx:-.3,lz:0,ty:0,tx:0,drop:0,fL:0,fR:0},slash:{W:{rx:-3.3,rz:-.55,w:.4,lx:-1.1,lz:.3,ty:-.5,tx:-.12,drop:.03,fL:.1,fR:-.12},S:{rx:-.9,rz:.45,w:1.9,lx:.2,lz:0,ty:.4,tx:.28,drop:.1,fL:.3,fR:-.2}},chop:{W:{rx:-3.9,rz:-.1,w:.2,lx:-.9,lz:.1,ty:-.2,tx:-.18,drop:.02,fL:.08,fR:-.08},S:{rx:-1.25,rz:.05,w:1.8,lx:.1,lz:0,ty:.1,tx:.35,drop:.12,fL:.32,fR:-.18}},heavy:{W:{rx:-2.6,rz:-.9,w:.5,lx:-2.4,lz:-.7,ty:-.75,tx:-.1,drop:.06,fL:.1,fR:-.15},S:{rx:-1.3,rz:.7,w:1.4,lx:-1.1,lz:.5,ty:.6,tx:.2,drop:.12,fL:.3,fR:-.2}},p1:{W:{rx:-2.9,rz:-.7,w:.5,lx:-.7,lz:.25,ty:-.55,tx:-.08,drop:.02,fL:.05,fR:-.1},S:{rx:-.8,rz:.55,w:1.6,lx:-.25,lz:.1,ty:.45,tx:.22,drop:.1,fL:.28,fR:-.18}},p2:{W:{rx:-1.5,rz:.9,w:1.45,lx:-.35,lz:.1,ty:.55,tx:.05,drop:.06,fL:.15,fR:-.1},S:{rx:-1.55,rz:-.9,w:1.5,lx:-.6,lz:.3,ty:-.5,tx:.18,drop:.1,fL:.08,fR:.14}},p3:{W:{rx:-3.8,rz:-.1,w:.2,lx:-.9,lz:.2,ty:-.2,tx:-.2,drop:0,fL:.05,fR:-.05},S:{rx:-1.2,rz:.05,w:1.8,lx:-.3,lz:.1,ty:.1,tx:.4,drop:.16,fL:.34,fR:-.2}},pw:{W:{rx:-2.4,rz:-1.1,w:.6,lx:-1.2,lz:.5,ty:-.9,tx:-.1,drop:.08,fL:.05,fR:-.15},S:{rx:-1.4,rz:.9,w:1.3,lx:-.25,lz:.1,ty:.8,tx:.3,drop:.18,fL:.36,fR:-.22}},slam:{W:{rx:-3.5,rz:-.15,w:.3,lx:-3.5,lz:-.15,ty:0,tx:-.2,drop:0,fL:.1,fR:-.1},S:{rx:-.7,rz:0,w:1.3,lx:-.7,lz:0,ty:0,tx:.5,drop:.22,fL:.28,fR:-.18}}},Rp=Object.keys(Lp.G),zp={};function Bp(e){let t=Lp[e.type]||Lp.slash,n=Lp.G,r,i,a;e.phase===`windup`?(r=n,i=t.W,a=Ru(Math.min(1,e.k/(e.player?1:.75)))):e.phase===`strike`?(r=t.W,i=t.S,a=e.k**(e.player?.75:.6)):(r=t.S,i=n,a=Bu(Fu((e.k-.3)/.7,0,1)));for(let e of Rp)zp[e]=Iu(r[e],i[e],a);if(!e.player&&e.phase===`windup`&&e.k>.72){let e=Math.sin(X.time*55)*.035;zp.rx+=e,zp.ty+=e*.5}return zp}function Vp(e,t){let n=t?.5:.35,r=t?.68:.6;if(e<n){let t=Ru(e/n);return[Iu(-.3,-3.9,t),Iu(.9,.2,t)]}if(e<r){let t=zu((e-n)/(r-n));return[Iu(-3.9,-1.38,t),Iu(.2,1.8,t)]}let i=Bu((e-r)/(1-r));return[Iu(-1.38,-.3,i),Iu(1.8,.9,i)]}function Hp(e,t,n){let r=t.speed>.2;e.walkT+=n*(2.4+t.speed*1.5)*(r?1:.15);let i=Math.min(1,t.speed/4.5),a=Math.sin(e.walkT)*.65*i;e.crouch=Iu(e.crouch,+!!t.crouch,1-Math.exp(-n*12)),e.blockA=Iu(e.blockA,+!!t.block,1-Math.exp(-n*16));let o=t.sit||0,s=e.crouch,c=e.blockA;e.hips.position.y=Iu(.95-.34*s+Math.abs(Math.cos(e.walkT))*.045*i,.55,o)+(r?0:Math.sin(e.walkT*6)*.004),e.torso.rotation.x=.35*s+.08*i+e.lean,e.cloak&&(e.cloak.rotation.x=.12+Math.min(.45,t.speed*.06)*(1-.6*s)+Math.sin(e.walkT*2)*(r?.04:.012)-.75*(.35*s+e.lean));let l=-.3-a*.5,u=.9;if(t.atkPhase>=0&&([l,u]=Vp(t.atkPhase,t.atkPower)),t.pose===`staff`&&(l=-.5,u=-1.07),t.pose===`hammer`&&(l=-.35+Math.max(0,Math.sin(e.walkT*3))*-1.2,u=.6),e.armR.rotation.x=Iu(l,-.9,o),e.weapon&&(e.weapon.rotation.x=u),e.armL.rotation.x=Iu(Iu(-.3+a*.5,-1.45,c),-.9,o),e.armL.rotation.z=-.35*c,e.shield&&(e.shield.rotation.z=Iu(-Math.PI/2,-Math.PI,c)),t.roll>=0?(e.hips.rotation.x=Bu(t.roll)*V,e.hips.position.y=.62):e.hips.rotation.x=0,e.torso.rotation.y=t.atkPhase>=0?Math.sin(t.atkPhase*Math.PI)*-.35:0,e.recoil=Math.max(0,e.recoil-n*4),e.torso.rotation.x-=e.recoil*.45,t.dead>0&&(e.root.rotation.x=-Math.PI/2*zu(t.dead),e.root.position.y+=.15*t.dead),e.legOff=null,t.eatk){let n=Bp(t.eatk);e.armR.rotation.x=n.rx,e.armR.rotation.z=n.rz,e.weapon&&(e.weapon.rotation.x=n.w),e.armL.rotation.x=n.lx,e.armL.rotation.z=n.lz,e.torso.rotation.y=n.ty,e.torso.rotation.x+=n.tx,e.hips.position.y-=n.drop,e.legOff=n}else e.armR.rotation.z=0;t.pose===`tied`?(e.armR.rotation.x=.6,e.armL.rotation.x=.6,e.armR.rotation.z=-.35,e.armL.rotation.z=.35,e.headG.rotation.x=.25):e.headG.rotation.x=0;let d=e.hips.position.y-.02,f=.25*i*(t.speed>6.5?1.35:1)*(1-.35*s),p=.14*i;for(let[n,r]of[[e.legL,1],[e.legR,-1]]){let i=Math.sin(e.walkT)*f*r+.07*s+(e.legOff?r>0?e.legOff.fL:e.legOff.fR:0),a=d-Fp-Math.max(0,Math.cos(e.walkT)*r)*p;t.roll>=0?(i=.22,a=.42):t.dead>0?(i=.02,a=.86):o>0&&(i=Iu(i,.45,o)),Ip(n,i,a)}}function Up(){let e=Op(),t=new Nl({vertexColors:!0,flatShading:!0}),n=new z;n.rotation.order=`YXZ`;let r=8027266,i=4934995,a=12830153,o=new z;o.position.y=.62,n.add(o),e.add(o,Dp(wp(.2,.62,8)).scale(1,1.05,1),r,0,0,-.08),e.add(o,Tp(.24,1).scale(1,1.1,1.15),a,0,0,.28),e.add(o,Tp(.2,0).scale(1.05,.55,1.6),i,0,.16,-.1);let s=new z;s.position.set(0,.22,.58),o.add(s),e.add(s,Tp(.14,1).scale(1,.9,1.1),r,0,0,0),e.add(s,Dp(Cp(.042,.08,.22,6)).scale(1,.8,1),a,0,-.03,.17);for(let t of[-1,1])e.add(s,new Ic(.012,.035,3).rotateX(Math.PI),15920866,t*.03,-.075,.24);let c=new z;c.position.set(0,-.075,.07),s.add(c),e.add(c,Dp(Cp(.03,.055,.2,6)).scale(1,.55,1),a,0,-.012,.1);for(let t of[-1,1])e.add(c,new Ic(.01,.03,3),15920866,t*.025,.012,.16);e.add(c,Ep(.05,.01,.12),8006186,0,.004,.09),e.add(s,Tp(.032,0),1710618,0,-.02,.285);for(let t of[-1,1]){e.add(s,new Ic(.055,.14,4),i,t*.085,.13,-.03,0,0,-t*.25);let n=new I(Ep(.045,.025,.02),Td(15778634));n.position.set(t*.07,.035,.145),s.add(n)}let l=[];for(let[t,n,a]of[[-.13,.3,!0],[.13,.3,!0],[-.13,-.4,!1],[.13,-.4,!1]]){let s=new z;s.position.set(t,-.1,n),o.add(s),a||e.add(s,Tp(.1,0).scale(.8,1.2,1.1),r,0,-.04,0),e.add(s,wp(a?.055:.065,.15),i,0,-.12,0);let c=new z;c.position.y=-Wp,s.add(c),e.add(c,Tp(.045,0),i,0,0,0),e.add(c,wp(.036,.17),i,0,-.12,0);let u=new z;u.position.y=-Gp,c.add(u),e.add(u,Tp(.05,0).scale(1,.55,1.35),i,0,-.012,.035),s.userData={j:c,paw:u,dir:a?1:-1},l.push(s)}let u=new z;return u.position.set(0,.08,-.52),o.add(u),e.add(u,new Ic(.085,.52,6).translate(0,.26,0).rotateX(-Math.PI/2),r),e.bake(t),{kind:`w`,root:n,body:o,head:s,jaw:c,legs:l,tail:u,flash:[t],walkT:Math.random()*6,recoil:0}}var Wp=.26,Gp=.24,Kp=.04;function qp(e,t,n){let r=Wp,i=Gp,a=e.userData.dir,o=Math.hypot(t,n),s=.498;if(o>s){let e=s/o;t*=e,n*=e,o=s}if(o<.16){let e=.16/Math.max(o,1e-4);t*=e,n*=e,o=.16}let c=Math.atan2(t,n),l=Math.acos(Fu((r*r+o*o-i*i)/(2*r*o),-1,1)),u=Math.acos(Fu((.1252-o*o)/(2*r*i),-1,1)),d=-(c+a*l),f=a*(Math.PI-u);e.rotation.x=d,e.userData.j.rotation.x=f,e.userData.paw.rotation.x=-(d+f)}var Jp=[0,Math.PI,Math.PI,0];function Yp(e,t,n){let r=t.speed>.2,i=t.speed>6.5,a=t.atk;e.walkT+=n*(4+t.speed*1.5)*(r&&!(a&&a.phase===`strike`)?1:.1);let o=a?0:Math.min(1,t.speed/5),s=.62+Math.abs(Math.cos(e.walkT))*.03*o,c=Math.sin(e.walkT*2)*.025*o,l=Math.sin(e.walkT*2)*.05*o+(r?0:Math.sin(e.walkT*.5)*.05),u=0,d=r?.08:.03,f=-.35+(i?.25:0),p=Math.sin(e.walkT)*.25*o,m=0,h=0,g=0;if(a){let e=a.k;if(a.phase===`windup`){let t=Ru(Math.min(1,e/.6)),n=e>.7?Math.sin(X.time*50)*.012:0;s-=.2*t,c=.16*t+n,l=.3*t,d=.35*t,f=-.8,m=.08*t,h=-.18*t}else a.phase===`strike`?(s+=Math.sin(Math.PI*e)*.5,c=-.3*Math.cos(Math.PI*e),l=-.18,d=e<.7?.65:.65*Math.max(0,1-(e-.7)/.12),f=-.1,m=.34,h=-.36,g=-.1*Math.sin(Math.PI*e)):(s-=Math.max(0,1-e/.25)*.09,c=.08*Math.max(0,1-e/.3),u=Math.sin(e*32)*.28*(1-e),d=.05,m=.1*(1-e),h=-.1*(1-e))}e.body.position.y=s,e.recoil=Math.max(0,e.recoil-n*4),e.body.rotation.x=c-e.recoil*.3,e.head.rotation.x=l,e.head.rotation.y=u,e.jaw&&(e.jaw.rotation.x=d),e.tail.rotation.x=f+Math.sin(e.walkT*2)*.12,e.tail.rotation.y=p;let _=(i?.3:.2)*o,v=(i?.13:.1)*o,y=s-.1;e.legs.forEach((n,r)=>{let i=e.walkT+Jp[r],o=n.userData.dir>0,s=Math.sin(i)*_+(o?m:h),c=y-Kp-Math.max(0,Math.cos(i))*v+(a&&a.phase===`strike`?g+0:0);a&&a.phase===`strike`&&(c=Math.min(c,.4)),t.dead>0&&(s=o?.08:-.08,c=.34),qp(n,s,c)}),t.dead>0&&(e.root.rotation.z=Math.PI/2*zu(t.dead),e.root.position.y+=.05)}var Xp={onehand:`Tek El`,block:`Blok`,sneak:`Gizlilik`,rune:`Rün Büyüsü`,lock:`Kilit Açma`},q={pos:new P(3,0,7),yaw:Math.PI,kb:new P,r:.42,hp:100,maxHp:100,st:100,maxSt:100,stDelay:0,runeCd:0,runeCdMax:18,runeMult:1,potCd:0,sneaking:!1,blocking:!1,atk:null,dodge:null,stagger:0,iframe:0,dead:!1,deadT:0,noise:0,noiseT:0,lunge:0,moveSpeedNow:0,hurtFlash:0,skills:{onehand:{lvl:15,xp:0},block:{lvl:15,xp:0},sneak:{lvl:15,xp:0},rune:{lvl:15,xp:0},lock:{lvl:15,xp:0}},charLvl:1,charXp:0,pendingLevels:0,inv:{gold:12,potions:1,picks:4,herbs:0,pelts:0,weaponBonus:0,sharpen:0,sword:`Demir kılıç`,rune:!1,rod:!1,fish:{ringa:0,alabalik:0,turna:0}},stage:0,stats:{kills:0,sneakAtk:0,time:0,deaths:0,fish:0},bounty:null,lastTpl:null,side:{ulf:0},track:`main`};q.model=Mp({body:8010542,skin:14268572,dark:4931640,leather:5125670,metal:10726581,cloak:6114107,fur:14077373,helmet:!0,cloakBack:!0,weapon:`sword`,shield:[`#8c3226`,`#e3d6b4`],beard:9067059,beardBraid:!0,hair:9067059,longHair:!0,skirt:`tunic`,trim:14202986,buckle:!0,pauldron:`plate`,wraps:11904394,gloves:!0}),cd.add(q.model.root);var Zp=()=>Math.min(.5,(q.skills.sneak.lvl-15)*.025),Qp={};function $p(e,t,n,r,i,a,o={}){let s=Mp(n);H.add(s.root);let c=Object.assign({id:e,name:t,model:s,pos:new P(r,Tf(r,i),i),yaw:a,home:{x:r,z:i,yaw:a},speed:0,wp:null,wpI:0,wait:0},o);return Qp[e]=c,Df(`world`,r,i,.45),c.col=Ef.world[Ef.world.length-1],c}$p(`sigrun`,`Sigrun`,{body:3425899,skin:14204068,dark:2764605,cloak:8219224,leather:3813160,hood:!0,cloakBack:!0,weapon:`staff`,skirt:`robe`,trim:13214282,hair:13620182,braids:!0,necklace:14197322},-7,3.8,.9,{pose:`staff`}),$p(`bjorn`,`Bjorn`,{body:7297598,skin:13938060,dark:3811870,leather:4074528,hair:11558958,bald:!0,beard:11558958,beardLen:.3,beardBraid:!0,weapon:`hammer`,skirt:`tunic`,apron:4863270,build:1.15,bareArms:!0},9.9,2.4,-1.2,{pose:`hammer`}),$p(`eira`,`Eira`,{body:14208949,skin:14729894,dark:5917242,hair:14267498,braids:!0,skirt:`dress`,skirtColor:4152954,apron:4152954,brooch:!0,necklace:10172974},-3,8,0,{wp:[[-3,8],[6,-1],[-6,-7],[-3,-1]]}),$p(`hakon`,`Hakon`,{body:5201210,skin:13609098,hair:5913378,beard:5913378,beardLen:.14,skirt:`tunic`,trim:9071162,cloak:7035461,cloakBack:!0,wraps:10127984},4,9,0,{wp:[[4,9],[8,-7],[-2,-9],[-10,1]]}),$p(`ulf`,`Ulf`,{body:5925754,skin:14202010,dark:3815992,hair:7031342,beard:7031342,beardLen:.2,hood:!0,cloak:9075300,skirt:`tunic`,wraps:10127984},K.x+5.2,K.z+2.8,Math.PI,{pose:`tied`}),Gd(()=>q.pos,()=>!0,1.3);for(let e of Object.values(Qp))Gd(()=>e.pos,()=>X.zone===`world`,1.1);function em(e){for(let t of Object.values(Qp)){let n=0;if(t.wp){if(t.wait>0)t.wait-=e;else{let r=t.wp[t.wpI],i=r[0]-t.pos.x,a=r[1]-t.pos.z,o=Math.hypot(i,a);o<.3?(t.wpI=(t.wpI+1)%t.wp.length,t.wait=1.5+Math.random()*2.5):(n=1.3,t.pos.x+=i/o*n*e,t.pos.z+=a/o*n*e,t.yaw+=Hu(t.yaw,Math.atan2(i,a))*Math.min(1,e*6))}if(t.col.x=t.pos.x,t.col.z=t.pos.z,Af(t.pos,.35,`world`),t.col.x=t.pos.x,t.col.z=t.pos.z,X.zone===`world`){let e=t.pos.x-q.pos.x,n=t.pos.z-q.pos.z,r=Math.hypot(e,n);r<.8&&r>.001&&(t.pos.x=q.pos.x+e/r*.8,t.pos.z=q.pos.z+n/r*.8)}}else if(t.dest){let r=t.dest.x-t.pos.x,i=t.dest.z-t.pos.z,a=Math.hypot(r,i);a<.4?(t.home={x:t.dest.x,z:t.dest.z,yaw:t.dest.yaw},t.dest=null):(n=1.7,t.pos.x+=r/a*n*e,t.pos.z+=i/a*n*e,t.yaw+=Hu(t.yaw,Math.atan2(r,i))*Math.min(1,e*6)),t.col.x=t.pos.x,t.col.z=t.pos.z,Af(t.pos,.35,`world`),t.col.x=t.pos.x,t.col.z=t.pos.z}else if(X.zone===`world`&&t.pose!==`tied`){let n=Math.hypot(q.pos.x-t.pos.x,q.pos.z-t.pos.z)<6?Math.atan2(q.pos.x-t.pos.x,q.pos.z-t.pos.z):t.home.yaw;t.yaw+=Hu(t.yaw,n)*Math.min(1,e*3)}t.pos.y=Tf(t.pos.x,t.pos.z),t.model.root.position.copy(t.pos),t.model.root.rotation.y=t.yaw,Hp(t.model,{speed:n,atkPhase:-1,roll:-1,pose:t.pose,sit:+(t.pose===`tied`)},e)}}var tm={wolf:{hp:32,r:.5,speed:6,dmg:7,range:1.8,windup:.42,strike:.24,recover:.55,detect:17,cone:2.4,height:1.15,name:`Kurt`},draugr:{hp:48,r:.45,speed:3.7,dmg:13,range:2.1,windup:.7,strike:.16,recover:.6,detect:13,cone:2,height:2.05,name:`Draugr`},troll:{hp:170,r:.75,speed:3.9,dmg:20,range:2.8,windup:.95,strike:.22,recover:.8,detect:16,cone:2.4,height:3.1,name:`Buz Trolü`},boss:{hp:300,r:.85,speed:3.4,dmg:22,range:3.1,windup:.85,strike:.22,recover:.75,detect:40,cone:6.3,height:3.2,name:`Höyük Kralı`}},nm={draugr:{body:4936006,skin:9345932,dark:2895658,metal:7168597,leather:3813928,helmet:!0,weapon:`rusty`,eyes:12124010,skirt:`tunic`,thin:!0,lean:.18,ribs:!0,tatters:4014648,hair:10134170,longHair:!0,beard:9213066,beardLen:.26,wraps:5921354},draugr2:{body:4080185,skin:9937557,dark:2632486,metal:7168597,leather:3484965,hood:!0,cloak:3356463,weapon:`rusty`,eyes:12124010,skirt:`tunic`,thin:!0,lean:.22,ribs:!0,tatters:3093292,hair:11120807,braids:!0,wraps:5592394},troll:{body:8359836,skin:10465727,dark:6254202,leather:4865846,fur:15001836,bareArms:!0,build:1.3,lean:.4,hair:15265008,longHair:!0,beard:14673130,beardLen:.26,eyes:10479359,weapon:`club`,tusks:!0,skirt:`tunic`,armScale:1.25,tatters:7035464},boss:{body:3093826,skin:8359046,dark:2040619,metal:6117970,cloak:3811902,leather:2761504,crown:!0,cloakBack:!0,weapon:`axe`,eyes:7329993,skirt:`tunic`,pauldron:`spiky`,fur:4867408,vest:3883600,chestRune:7329993,hair:10923172,longHair:!0,beard:10923172,beardLen:.34,beardBraid:!0,build:1.1,lean:.08}},rm=(e,t)=>{let n=document.createElement(`canvas`);n.width=n.height=64;let r=n.getContext(`2d`);r.font=`700 50px Georgia, serif`,r.textAlign=`center`,r.textBaseline=`middle`,r.lineWidth=7,r.strokeStyle=`rgba(0,0,0,.75)`,r.strokeText(e,32,35),r.fillStyle=t,r.fillText(e,32,35);let i=new nc(n);return i.colorSpace=Ve,i},im=rm(`?`,`#e6c46f`),am=rm(`!`,`#e5503f`),om=new Cs({color:0,opacity:.6,transparent:!0,depthTest:!1,toneMapped:!1}),sm=[];function cm(e,t,n,r,i,a={}){let o=tm[e],s=e===`wolf`?Up():Mp(e===`draugr`?t.charCodeAt(t.length-1)%2?nm.draugr:nm.draugr2:nm[e]);e===`boss`&&s.root.scale.setScalar(1.55),e===`troll`&&s.root.scale.setScalar(1.6),(n===`world`?H:yd).add(s.root);let c={kind:e,id:t,zone:n,def:o,model:s,pos:new P(r,0,i),home:new P(r,0,i),yaw:a.yaw??Math.random()*V,hp:o.hp,maxHp:o.hp,state:a.dormant?`dormant`:a.throne?`throne`:`idle`,t:0,aware:0,atkCd:.8,stagger:0,kb:new P,flash:0,dead:!1,deadT:0,wanderT:Math.random()*3,wanderTo:null,patrol:a.patrol||null,patrolI:0,speedNow:0,slamCd:5,phase2:!1,lastSeen:new P(r,0,i),rise:0,emerge:!!a.emerge,alertT:0,temp:!!a.temp,pack:a.pack||null},l=new Ls(om);l.center.set(0,.5),l.scale.set(1,.1,1),l.renderOrder=20;let u=new Ls(new Cs({color:13781566,depthTest:!1,toneMapped:!1}));return u.center.set(0,.5),u.scale.set(1,.07,1),u.renderOrder=21,c.bar={bg:l,fill:u},cd.add(l,u),l.visible=u.visible=!1,c.mark=new Ls(new Cs({map:im,depthTest:!1,toneMapped:!1,transparent:!0})),c.mark.scale.set(.6,.6,1),c.mark.renderOrder=22,c.mark.visible=!1,cd.add(c.mark),a.emerge&&(c.state=`rising`,c.t=0),c.blob=Gd(()=>c.pos,()=>c.zone===X.zone&&c.model.root.visible&&c.state!==`dormant`&&!(c.dead&&c.deadT>2.5),e===`boss`?2.4:e===`troll`?2.3:e===`wolf`?1.4:1.2),sm.push(c),c}function lm(e){(e.zone===`world`?H:yd).remove(e.model.root),cd.remove(e.bar.bg,e.bar.fill,e.mark),e.blob&&(cd.remove(e.blob.m),Hd.splice(Hd.indexOf(e.blob),1));let t=sm.indexOf(e);t>=0&&sm.splice(t,1)}cm(`wolf`,`w1`,`world`,36,-22,{pack:`A`}),cm(`wolf`,`w2`,`world`,38,-27,{pack:`A`}),cm(`wolf`,`w3`,`world`,34,-28,{pack:`A`}),cm(`wolf`,`w4`,`world`,58,-45,{pack:`B`}),cm(`wolf`,`w5`,`world`,62,-48,{pack:`B`}),cm(`draugr`,`d1`,`dungeon`,rd,16,{yaw:0,patrol:[[rd,16],[rd,27.5]]}),Sp.forEach((e,t)=>cm(`draugr`,`d`+(t+2),`dungeon`,992.75,e,{yaw:Math.PI/2,dormant:!0})),cm(`draugr`,`d5`,`dungeon`,1034,6,{yaw:-Math.PI/2,patrol:[[1034,6],[1016,6]]}),cm(`wolf`,`w6`,`world`,-22,40,{pack:`C`}),cm(`wolf`,`w7`,`world`,-25,43,{pack:`C`});var um=cm(`troll`,`troll`,`world`,K.x,K.z+2,{yaw:Math.PI}),dm=e=>e.kind===`boss`||e.kind===`troll`,fm=cm(`boss`,`boss`,`dungeon`,1050.1,37,{yaw:-Math.PI/2,throne:!0}),pm={triggered:!1},mm=new I(new Pc(1,40).rotateX(-Math.PI/2),Td(15028287,{transparent:!0,opacity:.28,depthWrite:!1})),hm=new I(new El(.95,1,48).rotateX(-Math.PI/2),Td(15028287,{transparent:!0,opacity:.8,depthWrite:!1}));mm.visible=hm.visible=!1,cd.add(mm,hm);var gm=4.6,_m=1.25,vm=500,ym={pos:new Float32Array(vm*3),col:new Float32Array(vm*3),vel:new Float32Array(vm*3),base:new Float32Array(vm*3),life:new Float32Array(vm),max:new Float32Array(vm),grav:new Float32Array(vm),i:0};for(let e=0;e<vm;e++)ym.pos[e*3+1]=-9999;var bm=new br;bm.setAttribute(`position`,new lr(ym.pos,3).setUsage(qe)),bm.setAttribute(`color`,new lr(ym.col,3).setUsage(qe));var xm=new ec(bm,new Ys({map:Fd.soft,size:.26,vertexColors:!0,transparent:!0,depthWrite:!1,blending:2,toneMapped:!1}));xm.frustumCulled=!1,cd.add(xm);var Sm=new F;function Cm(e,t,n,r,i,a,o,s=6,c=1){Sm.setHex(i);for(let i=0;i<r;i++){let r=ym.i;ym.i=(r+1)%vm,ym.pos[r*3]=e+(Math.random()-.5)*.2,ym.pos[r*3+1]=t+(Math.random()-.5)*.2,ym.pos[r*3+2]=n+(Math.random()-.5)*.2;let i=Math.random()*V,l=Math.random()*.9,u=a*(.4+Math.random()*.6);ym.vel[r*3]=Math.cos(i)*Math.cos(l)*u,ym.vel[r*3+1]=Math.sin(l)*u+c,ym.vel[r*3+2]=Math.sin(i)*Math.cos(l)*u,ym.base[r*3]=Sm.r,ym.base[r*3+1]=Sm.g,ym.base[r*3+2]=Sm.b,ym.life[r]=ym.max[r]=o*(.6+Math.random()*.4),ym.grav[r]=s}}function wm(e){for(let t=0;t<vm;t++){if(ym.life[t]<=0)continue;if(ym.life[t]-=e,ym.life[t]<=0){ym.pos[t*3+1]=-9999;continue}ym.vel[t*3+1]-=ym.grav[t]*e,ym.pos[t*3]+=ym.vel[t*3]*e,ym.pos[t*3+1]+=ym.vel[t*3+1]*e,ym.pos[t*3+2]+=ym.vel[t*3+2]*e;let n=ym.life[t]/ym.max[t];ym.col[t*3]=ym.base[t*3]*n,ym.col[t*3+1]=ym.base[t*3+1]*n,ym.col[t*3+2]=ym.base[t*3+2]*n}bm.attributes.position.needsUpdate=!0,bm.attributes.color.needsUpdate=!0}var Tm=new El(.85,1,48).rotateX(-Math.PI/2),Em=[];function Dm(e,t,n,r,i,a){let o=new I(Tm,Td(r,{transparent:!0,opacity:.9,blending:2,depthWrite:!1,side:2}));o.position.set(e,t+.12,n),cd.add(o),Em.push({m:o,t:0,dur:a,maxR:i})}var Om=new El(.45,1,20,1,-.95,1.9).rotateX(-Math.PI/2).rotateY(-Math.PI/2),km=new El(.45,1,20,1,-.95,1.9).rotateY(-Math.PI/2),Am=[];function jm(e){let t=e.atkType,n=t===`chop`,r=e.kind===`boss`?1.55:e.kind===`troll`?1.6:1,i=new I(n?km:Om,Td(e.kind===`boss`?7329993:e.kind===`troll`?10479359:13172656,{transparent:!0,opacity:.8,blending:2,depthWrite:!1,side:2}));i.position.set(e.pos.x,e.pos.y+(n?.95:1.15)*r,e.pos.z),i.rotation.set(0,e.yaw,t===`slash`?.45:t===`heavy`?-.2:0),i.scale.setScalar(e.def.range),cd.add(i),Am.push({m:i,t:0})}function Mm(e){for(let t=Am.length-1;t>=0;t--){let n=Am[t];n.t+=e;let r=n.t/.28;n.m.material.opacity=.8*Math.max(0,1-r),n.m.scale.multiplyScalar(1+e*.6),r>=1&&(cd.remove(n.m),n.m.material.dispose(),Am.splice(t,1))}for(let t=Em.length-1;t>=0;t--){let n=Em[t];n.t+=e;let r=n.t/n.dur,i=Iu(.3,n.maxR,Ru(Math.min(1,r)));n.m.scale.set(i,1,i),n.m.material.opacity=Math.max(0,1-r),r>=1&&(cd.remove(n.m),n.m.material.dispose(),Em.splice(t,1))}}var Nm=B(`#nums`),Pm=[];function Fm(e,t,n,r=1.9){let i=document.createElement(`div`);i.className=`dn `+n,i.textContent=typeof t==`number`?Math.round(t):t,Nm.appendChild(i),Pm.push({el:i,x:e.x+(Math.random()-.5)*.4,y:e.y+r,z:e.z,t:0}),Pm.length>24&&Pm.shift().el.remove()}var Im=new P;function Lm(e){for(let t=Pm.length-1;t>=0;t--){let n=Pm[t];if(n.t+=e,n.y+=e*.9,Im.set(n.x,n.y,n.z).project(ld),n.t>1.1||Im.z>1){n.el.remove(),Pm.splice(t,1);continue}let r=(Im.x*.5+.5)*innerWidth,i=(-Im.y*.5+.5)*innerHeight;n.el.style.transform=`translate(${r}px,${i}px) translate(-50%,-50%) scale(${1+Math.max(0,.25-n.t)*2})`,n.el.style.opacity=String(1-Math.max(0,n.t-.7)/.4)}}var Rm=new z;{let e=new I(new Fc(.12,.12,40,6,1,!0),Td(7329993,{transparent:!0,opacity:.2,blending:2,depthWrite:!1,fog:!1}));e.position.y=20,Rm.add(e);let t=new I(new Tl(.35),Td(10483178,{fog:!1}));t.position.y=3.2,Rm.add(t),zd(t,0,0,0,2.2,7329993,.55),Rm.userData.gem=t,cd.add(Rm)}var zm=12,Bm={base:[],tip:[],active:0,on:!1,col:new F,geo:new br};{let e=[];for(let t=0;t<11;t++){let n=t*2;e.push(n,n+1,n+2,n+1,n+3,n+2)}Bm.geo.setAttribute(`position`,new lr(new Float32Array(72),3).setUsage(qe)),Bm.geo.setAttribute(`color`,new lr(new Float32Array(72),3).setUsage(qe)),Bm.geo.setIndex(e);for(let e=0;e<zm;e++)Bm.base.push(new P),Bm.tip.push(new P)}var Vm=new I(Bm.geo,new or({vertexColors:!0,transparent:!0,blending:2,depthWrite:!1,side:2,toneMapped:!1}));Vm.frustumCulled=!1,Vm.visible=!1,cd.add(Vm);function Hm(){let e=q.atk,t=q.model.weapon,n=!1;if(e&&!q.dead&&(n=e.t>e.W-.03&&e.t<e.W+e.S+.07),t.updateWorldMatrix(!0,!1),n){let n=new P(0,0,.35).applyMatrix4(t.matrixWorld),r=new P(0,0,1.05).applyMatrix4(t.matrixWorld);if(!Bm.on)for(let e=0;e<zm;e++)Bm.base[e].copy(n),Bm.tip[e].copy(r);for(let e=11;e>0;e--)Bm.base[e].copy(Bm.base[e-1]),Bm.tip[e].copy(Bm.tip[e-1]);Bm.base[0].copy(n),Bm.tip[0].copy(r),Bm.active=zm,Bm.col.setHex(e.power?16761466:e.type===`p3`?16769712:12574975)}else if(Bm.active>0){Bm.active--;for(let e=11;e>0;e--)Bm.base[e].copy(Bm.base[e-1]),Bm.tip[e].copy(Bm.tip[e-1])}if(Bm.on=n,Vm.visible=Bm.active>0,!Vm.visible)return;let r=Bm.geo.attributes.position.array,i=Bm.geo.attributes.color.array,a=Bm.col;for(let e=0;e<zm;e++){Bm.base[e].toArray(r,e*6),Bm.tip[e].toArray(r,e*6+3);let t=(1-e/11)**1.5*(Bm.active/zm)*.9;i[e*6]=a.r*t*.25,i[e*6+1]=a.g*t*.25,i[e*6+2]=a.b*t*.25,i[e*6+3]=a.r*t,i[e*6+4]=a.g*t,i[e*6+5]=a.b*t}Bm.geo.attributes.position.needsUpdate=!0,Bm.geo.attributes.color.needsUpdate=!0}var Um=56,Wm=new ci(.2,.34).rotateX(-Math.PI/2),Gm=new Bs(new Float32Array(Um),1);Gm.setUsage(qe),Wm.setAttribute(`aFade`,Gm);var Km=new Js(Wm,new Hr({transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2,vertexShader:`attribute float aFade; varying vec2 vUv; varying float vF; void main(){ vUv = uv; vF = aFade; gl_Position = projectionMatrix * modelViewMatrix * instanceMatrix * vec4(position, 1.0); }`,fragmentShader:`varying vec2 vUv; varying float vF; void main(){ float d = length(vUv - 0.5) * 2.0; float a = (1.0 - smoothstep(0.55, 1.0, d)) * vF * 0.4; gl_FragColor = vec4(0.36, 0.44, 0.6, a);
    #include <colorspace_fragment>
  }`}),Um);Km.frustumCulled=!1,Km.instanceMatrix.setUsage(qe),H.add(Km);{let e=new dn().makeTranslation(0,-999,0);for(let t=0;t<Um;t++)Km.setMatrixAt(t,e)}var qm=0,Jm=0,Ym=1,Xm=new Rn;function Zm(e,t){if(X.zone===`world`&&!q.dead&&t>0&&(Jm+=t,Jm>.75)){Jm=0,Ym=-Ym;let e=q.yaw,t=q.pos.x+Math.cos(e)*.14*Ym,n=q.pos.z-Math.sin(e)*.14*Ym;Xm.position.set(t,Tf(t,n)+.04,n),Xm.rotation.set(0,e,0),Xm.updateMatrix(),Km.setMatrixAt(qm,Xm.matrix),Gm.array[qm]=1,qm=(qm+1)%Um,Km.instanceMatrix.needsUpdate=!0}for(let t=0;t<Um;t++)Gm.array[t]>0&&(Gm.array[t]=Math.max(0,Gm.array[t]-e/16));Gm.needsUpdate=!0}var Qm=new P;{let e=[[hf.x-1,hf.z+3],[_f.x+1.5,_f.z-1.5],[-5,70],[K.x+.5,K.z-3]],t=new ci(.42,.75).rotateX(-Math.PI/2);t.setAttribute(`aFade`,new Bs(new Float32Array(64).fill(1.6),1));let n=new Js(t,Km.material,64),r=new Rn,i=0;for(let t=0;t<e.length-1;t++){let[a,o]=e[t],[s,c]=e[t+1],l=Math.hypot(s-a,c-o),u=Math.atan2(s-a,c-o);for(let e=0;e<l&&i<64;e+=2.2){let t=i%2?1:-1,d=a+(s-a)*e/l+Math.cos(u)*.35*t,f=o+(c-o)*e/l-Math.sin(u)*.35*t;r.position.set(d,Tf(d,f)+.05,f),r.rotation.set(0,u,0),r.updateMatrix(),n.setMatrixAt(i++,r.matrix)}}n.count=i,n.frustumCulled=!1,H.add(n)}var J={ctx:null,out:null,noise:null,init(){if(this.ctx){this.ctx.state===`suspended`&&this.ctx.resume();return}try{let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.out=this.ctx.createGain(),this.out.gain.value=Ku.muted?0:.55,this.out.connect(this.ctx.destination);let t=this.ctx.sampleRate,n=this.ctx.createBuffer(1,t,this.ctx.sampleRate),r=n.getChannelData(0);for(let e=0;e<t;e++)r[e]=Math.random()*2-1;this.noise=n;let i=this.ctx.createBufferSource();i.buffer=n,i.loop=!0;let a=this.ctx.createBiquadFilter();a.type=`bandpass`,a.frequency.value=380,a.Q.value=.6;let o=this.ctx.createGain();o.gain.value=.05;let s=this.ctx.createOscillator();s.frequency.value=.08;let c=this.ctx.createGain();c.gain.value=.03,s.connect(c),c.connect(o.gain),i.connect(a),a.connect(o),o.connect(this.out),i.start(),s.start(),this.wind=o}catch{this.ctx=null}},setMuted(e){Ku.muted=e,qu(),this.out&&(this.out.gain.value=e?0:.55)},tone(e,t,n,r,i,a=0){let o=this.ctx,s=o.currentTime+a,c=o.createOscillator();c.type=e,c.frequency.setValueAtTime(t,s),n&&c.frequency.exponentialRampToValueAtTime(Math.max(1,n),s+r);let l=o.createGain();l.gain.setValueAtTime(1e-4,s),l.gain.exponentialRampToValueAtTime(i,s+.01),l.gain.exponentialRampToValueAtTime(1e-4,s+r),c.connect(l),l.connect(this.out),c.start(s),c.stop(s+r+.03)},burst(e,t,n,r,i,a=0,o=1){let s=this.ctx,c=s.currentTime+a,l=s.createBufferSource();l.buffer=this.noise;let u=s.createBiquadFilter();u.type=n,u.frequency.setValueAtTime(r,c),i&&u.frequency.exponentialRampToValueAtTime(i,c+e),u.Q.value=o;let d=s.createGain();d.gain.setValueAtTime(t,c),d.gain.exponentialRampToValueAtTime(1e-4,c+e),l.connect(u),u.connect(d),d.connect(this.out),l.start(c,Math.random()*.5),l.stop(c+e+.03)}};function Y(e){if(J.ctx&&!Ku.muted)try{switch(e){case`swing`:J.burst(.14,.2,`bandpass`,2200,500);break;case`hit`:J.tone(`sine`,140,45,.16,.5),J.burst(.08,.25,`lowpass`,1800,300);break;case`block`:J.tone(`triangle`,1250,900,.12,.18),J.tone(`square`,2100,1800,.06,.04),J.burst(.05,.15,`highpass`,3e3);break;case`hurt`:J.tone(`sawtooth`,220,90,.18,.12),J.burst(.1,.2,`lowpass`,900,200);break;case`dodge`:J.burst(.2,.12,`bandpass`,600,1400);break;case`rune`:J.tone(`sine`,70,35,.9,.6),J.burst(.6,.25,`bandpass`,300,3e3,0,2),J.tone(`sine`,880,1320,.8,.08,.05),J.tone(`sine`,1320,1760,.7,.05,.12);break;case`pickup`:J.tone(`sine`,660,0,.12,.15),J.tone(`sine`,990,0,.18,.12,.08);break;case`gold`:J.tone(`triangle`,1400,0,.08,.1),J.tone(`triangle`,1900,0,.1,.08,.06);break;case`level`:[440,554,659,880].forEach((e,t)=>J.tone(`triangle`,e,0,.35,.14,t*.1));break;case`skill`:J.tone(`sine`,520,780,.25,.1);break;case`wolf`:J.tone(`sawtooth`,160,90,.5,.07),J.burst(.4,.08,`lowpass`,500,200);break;case`draugr`:J.burst(.8,.2,`lowpass`,400,120),J.tone(`sine`,80,55,.8,.25);break;case`roar`:J.tone(`sawtooth`,70,40,1.4,.22),J.burst(1.2,.3,`lowpass`,600,100);break;case`slam`:J.tone(`sine`,60,28,.8,.8),J.burst(.6,.5,`lowpass`,900,80);break;case`death`:J.burst(.5,.18,`lowpass`,700,120);break;case`click`:J.burst(.03,.2,`highpass`,2500);break;case`strain`:J.tone(`square`,180+Math.random()*40,0,.04,.025);break;case`break`:J.tone(`square`,900,200,.15,.1),J.burst(.1,.3,`highpass`,2e3);break;case`splash`:J.burst(.35,.22,`lowpass`,1400,250),J.tone(`sine`,300,120,.2,.05);break;case`unlock`:J.tone(`triangle`,500,0,.08,.15),J.tone(`triangle`,750,0,.15,.15,.08);break;case`door`:J.burst(.7,.3,`lowpass`,400,90),J.tone(`sine`,55,40,.7,.3);break;case`drink`:J.burst(.25,.12,`bandpass`,800,1600,0,4),J.tone(`sine`,400,700,.25,.06);break;case`gate`:J.burst(1,.25,`bandpass`,300,200,0,3),J.tone(`square`,90,70,1,.04);break;case`ui`:J.tone(`sine`,700,0,.05,.05);break;case`bite`:J.burst(.06,.35,`highpass`,1800),J.tone(`square`,240,120,.08,.08)}}catch{}}var X={mode:`boot`,zone:`world`,time:0,hitstop:0,shake:0,fadeBusy:!1,seen:new Set,opened:new Set,autosaveT:0},$m={yaw:q.yaw+Math.PI,pitch:.32,dist:7,target:new P(3,1.5,7)},eh=new P,th=new P,nh=null;function rh(e){let t=X.zone===`dungeon`;$m.dist=Iu($m.dist,t?5.2:6.8,1-Math.exp(-e*4)),$m.pitch=Fu($m.pitch,t?.35:.02,1.25),th.set(q.pos.x,q.pos.y+1.55-q.model.crouch*.35,q.pos.z),$m.target.lerp(th,1-Math.exp(-e*14));let n=Math.cos($m.pitch),r=Math.sin($m.yaw)*n,i=Math.sin($m.pitch),a=Math.cos($m.yaw)*n,o=$m.dist;if(t)for(let e=.3;e<=o;e+=.2){let t=$m.target.x+r*e,n=$m.target.y+i*e,s=$m.target.z+a*e;if(n<3.5&&ap(sp(t),cp(s))===0){o=Math.max(.8,e-.35);break}}else{nh||=Ef.world.filter(e=>e.r===void 0);for(let e=.3;e<=o;e+=.25){let t=$m.target.x+r*e,n=$m.target.y+i*e,s=$m.target.z+a*e;if(n<6.5&&nh.some(e=>t>e.x0-.3&&t<e.x1+.3&&s>e.z0-.3&&s<e.z1+.3)){o=Math.max(.8,e-.3);break}}}let s=$m.target.x+r*o,c=$m.target.y+i*o,l=$m.target.z+a*o;if(t||(c=Math.max(c,Tf(s,l)+.6)),X.shake>0){let t=X.shake*.35;s+=(Math.random()-.5)*t,c+=(Math.random()-.5)*t,l+=(Math.random()-.5)*t,X.shake=Math.max(0,X.shake-e*2.2)}ld.position.set(s,c,l),ld.lookAt($m.target)}var ih=e=>{X.shake=Math.max(X.shake,e)},ah=e=>{X.hitstop=Math.max(X.hitstop,e)},oh=e=>5+(e-15)*2;function sh(e,t){let n=q.skills[e];for(n.xp+=t;n.xp>=oh(n.lvl);)n.xp-=oh(n.lvl),n.lvl++,p_(`${Xp[e]} ${n.lvl}`,`skill`),Y(`skill`),q.charXp++,q.charXp>=3&&(q.charXp-=3,q.pendingLevels++,Y(`level`),h_(`SEVİYE ATLADIN`))}function ch(e){q.pendingLevels<=0||(q.pendingLevels--,q.charLvl++,e===`hp`?q.maxHp+=15:e===`st`?q.maxSt+=15:(q.runeMult+=.15,q.runeCdMax=Math.max(8,q.runeCdMax-1.5)),q.hp=q.maxHp,q.st=q.maxSt,p_(`Seviye ${q.charLvl}`,`skill`))}var lh=[],uh=e=>(e.r===void 0&&(e.r=2.2),e.can||=()=>!0,lh.push(e),e);uh({id:`sigrun`,zone:`world`,get x(){return Qp.sigrun.pos.x},get z(){return Qp.sigrun.pos.z},r:2.6,label:()=>`Konuş · Sigrun`,act:Yh}),uh({id:`bjorn`,zone:`world`,get x(){return Qp.bjorn.pos.x},get z(){return Qp.bjorn.pos.z},r:2.6,label:()=>`Konuş · Bjorn (demirci)`,act:Zh}),uh({id:`hakon`,zone:`world`,get x(){return Qp.hakon.pos.x},get z(){return Qp.hakon.pos.z},r:2.4,label:()=>`Konuş · Hakon`,act:Dh}),uh({id:`ulf`,zone:`world`,get x(){return Qp.ulf.pos.x},get z(){return Qp.ulf.pos.z},r:2.4,label:()=>q.side.ulf<=4?`Çöz · Ulf`:`Konuş · Ulf`,act:Oh}),uh({id:`fishhole`,zone:`world`,x:_f.x,z:_f.z,r:1.9,label:()=>q.inv.rod?`Balık tut · Buz deliği`:`Buz deliği (olta gerekli)`,act:Ih}),uh({id:`board`,zone:`world`,x:5.6,z:-3.4,r:2.3,label:()=>`Oku · İlan tahtası`,act:Qh}),uh({id:`cauldron`,zone:`world`,x:-8.8,z:5.6,r:1.9,label:()=>`Kazan · ${q.inv.herbs}/3 kar çiçeği`,act:$h}),uh({id:`barrow`,zone:`world`,x:Vf.x+Bf.x*1.2,z:Vf.z+Bf.z*1.2,r:2.4,label:()=>`Gir · Ata Höyüğü`,act:()=>vh(`dungeon`)}),uh({id:`exit`,zone:`dungeon`,x:rd,z:1.4,r:2.1,label:()=>`Çık · Isvik yolu`,act:()=>vh(`world`)}),uh({id:`lever`,zone:`dungeon`,x:1010.5,z:6.8,r:2,can:()=>!np.g1.open,label:()=>`Çek · Paslı kol`,act:()=>{xp(`g1`,!0,!1),X.opened.add(`lever`),dh.rotation.x=.9,p_(`Kestirme açıldı: giriş salonuna dönebilirsin`)}});var dh=(()=>{let e=new z;e.position.set(1010.5,1.2,7.85),yd.add(e),U(.5,.5,.15,G.iron,0,0,0,e);let t=new z;return e.add(t),U(.07,.8,.07,G.wood,0,.35,-.05,t),t.rotation.x=-.9,t})();function fh(e,t,n,r,i,a,o){let s=new z;s.position.set(n,t===`world`?Tf(n,r):0,r),s.rotation.y=i,(t===`world`?H:yd).add(s),U(1,.55,.65,G.wood,0,.28,0,s);let c=new z;c.position.set(0,.55,-.32),s.add(c),U(1.02,.16,.67,G.woodD,0,.08,.32,c);for(let e of[-.3,.3])U(.07,.58,.68,G.iron,e,.29,0,s);Df(t,n,r,.62);let l={id:e,hard:a,loot:o,lid:c,sweet:null};return uh({id:e,zone:t,x:n,z:r,r:1.9,can:()=>!X.opened.has(e),label:()=>`Aç · Kilitli sandık (${a?`zor`:`kolay`})`,act:()=>ig(l),opened:()=>{c.rotation.x=-1.6}}),l}fh(`c_ruin`,`world`,ff.x,ff.z+1.5,Math.PI,!1,{gold:35,potions:1,picks:2}),fh(`c_crypt`,`dungeon`,1008.3,44.3,-Math.PI/2,!0,{gold:40,sword:!0});function ph(e,t,n){let r=new I(new Fc(.28,.2,.7,8),wd(8019781));r.position.set(t,.35,n),yd.add(r),uh({id:e,zone:`dungeon`,x:t,z:n,r:1.6,can:()=>!X.opened.has(e),label:()=>`Kır · Eski küp`,act:()=>{X.opened.add(e),r.visible=!1,Cm(t,.5,n,14,10256998,3,.6,9,1),Y(`click`);let i=5+Math.floor(Math.random()*11);q.inv.gold+=i,Y(`gold`),p_(`${i} altın`),Math.random()<.35&&(q.inv.potions++,p_(`Şifa iksiri`))},opened:()=>{r.visible=!1}})}ph(`u1`,1008.4,31.3),ph(`u2`,997.4,45),ph(`u3`,1027.5,38.8),ph(`u4`,1030,5),Pf.forEach(([e,t],n)=>{let r=`h`+n,i=new z;i.position.set(e,Tf(e,t),t),H.add(i);for(let e=0;e<3;e++){let t=new I(new Ic(.05,.4,4),wd(4156234));t.position.set(Math.cos(e*2.1)*.08,.2,Math.sin(e*2.1)*.08),t.rotation.z=Math.cos(e*2.1)*.3,i.add(t)}let a=new I(new wl(.09,0),Td(9427199));a.position.y=.42,i.add(a),uh({id:r,zone:`world`,x:e,z:t,r:1.6,can:()=>!X.opened.has(r),label:()=>`Topla · Kar çiçeği`,act:()=>{X.opened.add(r),i.visible=!1,q.inv.herbs++,Y(`pickup`),p_(`Kar çiçeği (${q.inv.herbs})`),Cm(e,i.position.y+.4,t,10,9427199,1.2,.8,-.5,.4)},opened:()=>{i.visible=!1}})});var mh={x:1045,z:37,mesh:null};{let e=new z,t=new I(new Tl(.32),Td(7329993));t.scale.y=1.4,t.position.y=1,e.add(t);let n=new I(new El(.5,.62,32).rotateX(-Math.PI/2),Td(7329993,{transparent:!0,opacity:.5,blending:2,depthWrite:!1}));n.position.y=.05,e.add(n),zd(e,0,1,0,2.6,7329993,.6),e.visible=!1,yd.add(e),mh.mesh=e,uh({id:`rune`,zone:`dungeon`,get x(){return mh.x},get z(){return mh.z},r:1.9,can:()=>e.visible,label:()=>`Al · Ata Rünü`,act:()=>{e.visible=!1,q.inv.rune=!0,X.opened.add(`rune`),q.stage=4,Y(`level`),h_(`ATA RÜNÜ ALINDI`),p_(`Görev güncellendi: höyükten çık`),P_()}})}function hh(){let e=null,t=1e9;for(let n of lh){if(n.zone!==X.zone||!n.can())continue;let r=Math.hypot(n.x-q.pos.x,n.z-q.pos.z);r<n.r&&r<t&&(t=r,e=n)}return e}function gh(e){let t=e===`world`;H.visible=t,Zd.visible=t,yd.visible=!t,cd.fog.color.copy(t?ud:dd),cd.fog.density=t?.0095:.075,cd.background=t?null:new F(131844),fd.intensity=t?2.4:.95,fd.color.setHex(t?11846880:9413560),fd.groundColor.setHex(t?4608618:2103828),pd.intensity=t?2.7:0,ad.shadowMap.autoUpdate=t&&nd,hd.intensity=t?40:0,_d.intensity=t?0:60,vd.intensity=t?0:40;for(let e of sm)e.bar.bg.visible=e.bar.fill.visible=!1,e.mark.visible=!1}function _h(e,t,n,r){X.zone=e,gh(e),q.pos.set(t,e===`world`?Tf(t,n):0,n),q.yaw=r,$m.yaw=r+Math.PI,$m.pitch=e===`world`?.3:.62,$m.target.set(q.pos.x,q.pos.y+1.55,q.pos.z),hp=!0}function vh(e){if(X.fadeBusy)return;X.fadeBusy=!0,Y(`door`);let t=B(`#fade`);t.style.opacity=`1`,setTimeout(()=>{e===`dungeon`?(_h(`dungeon`,rd,2.6,0),q.stage===1&&(q.stage=2),__(`Ata Höyüğü`,`YENİ YER`)):(_h(`world`,Vf.x+Bf.x*2.6,Vf.z+Bf.z*2.6,Math.atan2(Bf.x,Bf.z)),q.stage===4&&q.inv.rune&&(q.stage=5,p_(`Görev güncellendi: rünü Sigrun'a götür`))),P_(!0),setTimeout(()=>{t.style.opacity=`0`,X.fadeBusy=!1},120)},360)}var yh={wolves:{title:`Kurt sürüsü`,need:3,reward:30,text:`Batı ormanında bir sürü ağıllara diş geçiriyor. Üç kurt avlayana otuz altın. — Köy meclisi`},fish:{title:`Balıkçının siparişi`,need:3,reward:30,text:`Kış erzakı için taze balık lazım. Üç balık getirene otuz altın. Tahtaya teslim et. — Bjorn`},herbs:{title:`Şifacının derdi`,need:4,reward:25,text:`Kışın ortasında öksürük yayıldı. Dört kar çiçeği getirene yirmi beş altın. Tahtaya teslim et. — Sigrun`},draugr:{title:`Höyük temizliği`,need:3,reward:45,text:`Höyükten gelen sesler durmuyor. Üç draugru toprağa geri gönderene kırk beş altın. — Köy meclisi`}},bh=[[-62,-22],[40,52],[-30,-62],[72,12],[-70,60]],xh=0;function Sh(){let e=bh.filter(([e,t])=>Math.hypot(e-q.pos.x,t-q.pos.z)>35),[t,n]=e[Math.floor(Math.random()*e.length)]||bh[0];for(let e=0;e<3;e++)cm(`wolf`,`rw`+xh++,`world`,t+Math.cos(e*2.1)*2.5,n+Math.sin(e*2.1)*2.5,{temp:!0,pack:`R`+xh});q.bounty.spot=[t,n]}function Ch(e){let t=q.bounty;t&&!t.done&&(t.tpl===`wolves`&&e===`wolf`||t.tpl===`draugr`&&e===`draugr`)&&(t.count++,p_(`${yh[t.tpl].title}: ${Math.min(t.count,yh[t.tpl].need)}/${yh[t.tpl].need}`),t.count>=yh[t.tpl].need&&(t.done=!0,p_(`İlan tamamlandı · ödül tahtada`)))}function wh(){let e=q.side.ulf,t=``,n=null;if(e===1)t=`Kuzgun Gölü'ndeki balıkçı kampına git`,n={zone:`world`,x:hf.x,z:hf.z};else if(e===2)t=`Trol izlerini gölün öbür yakasına kadar takip et`,n={zone:`world`,x:K.x,z:K.z};else if(e===3)t=`Buz Trolü'nü yen`,n={zone:`world`,x:um.pos.x,z:um.pos.z};else if(e===4)t=`Ulf'u çöz`,n={zone:`world`,x:Qp.ulf.pos.x,z:Qp.ulf.pos.z};else if(e===5)t=`Hakon'a kardeşinin haberini ver`,n={zone:`world`,x:Qp.hakon.pos.x,z:Qp.hakon.pos.z};else return null;return X.zone!==`world`&&(n={zone:`dungeon`,x:rd,z:1.4}),{text:t,t:n}}function Th(){let e=q.side.ulf;e===1&&Math.hypot(q.pos.x-hf.x,q.pos.z-hf.z)<7?(q.side.ulf=2,q.track=`side`,h_(`KAMP DAĞITILMIŞ`),p_(`Karda devasa ayak izleri var. İzler buzun üstünden kuzeye gidiyor.`),P_()):e===2&&Math.hypot(q.pos.x-K.x,q.pos.z-K.z)<20&&(q.side.ulf=um.dead?4:3,P_(),um.dead||p_(`Kazığa bağlı biri var. Önce trolü alt et.`))}function Eh(){let e=Qp.ulf;q.side.ulf>=5&&(e.pose=null,e.dest=null,e.pos.set(hf.x-.8,0,hf.z-.2),e.yaw=.4,e.home={x:e.pos.x,z:e.pos.z,yaw:.4},Gf.visible=!0)}function Dh(){let e=q.side.ulf,t=Qp.hakon;if(t.wait=4,e===0){let e=t=>Kh(`Hakon`,t,[{t:`Onu bulurum.`,f:()=>{q.side.ulf=1,q.track=`side`,Y(`pickup`),p_(`Yeni yan görev: Kayıp Balıkçı`),P_(),Kh(`Hakon`,`Kuzey kapısından çık, fenerli patikayı izle. Kamp gölün güney kıyısında. Kurtlara dikkat et, kış onları da acıktırdı.`,[Jh(`Yola çıkıyorum`)])}},{t:`Ne gürlemesi?`,f:()=>e(`Eskiler buzdan inen trollerden söz eder; kış erzakı toplarlarmış. Ben hep masal sanırdım. Artık emin değilim.`)},Jh(`Şimdi olmaz`)]);e(`Yolcu, bir dakika. Kardeşim Ulf iki gün önce kuzeydeki Kuzgun Gölü'ne balığa gitti, dönmedi. Geceleri gölden garip bir gürleme geliyor.`)}else e>=1&&e<=4?Kh(`Hakon`,`Ulf'tan haber var mı? Kamp gölün güney kıyısında, oradan başla.`,[Jh(`Arıyorum`)]):e===5?Kh(`Hakon`,`Yaşıyor mu? Trol mü dedin... Sağ ol, yolcu. Bu tılsım babamdandı; artık seni korusun. Bu keseyi de al.`,[{t:`Teşekkürler`,f:()=>{q.side.ulf=6,q.maxHp+=15,q.hp=q.maxHp,q.inv.gold+=50,q.track=`main`,Y(`level`),h_(`YAN GÖREV TAMAMLANDI`),p_(`Hakon'un tılsımı: en yüksek can +15`),p_(`50 altın`),qh(),P_()}}]):Kh(`Hakon`,`Kardeşim sayende evde sayılır. Gölde balık tutarsan Bjorn iyi fiyat verir.`,[Jh()])}function Oh(){let e=q.side.ulf,t=Qp.ulf;if(e<=3&&!um.dead){Kh(`Ulf`,`(Bağlı, fısıldar) Trol... uyanmadan... dikkat et!`,[Jh(`Sessiz ol`)]);return}if(e<=4){Kh(`Ulf`,`Bağları kes, çabuk! O canavar beni kış erzakı sanmıştı. Kampımı toparlayıp döneceğim. Hakon'a haber ver, meraktan ölmüştür. Al, oltam senin; göldeki delikten balık tutabilirsin.`,[{t:`İpleri kes`,f:()=>{q.side.ulf=5,q.inv.rod=!0,q.track=`side`,t.pose=null,t.dest={x:hf.x-.8,z:hf.z-.2,yaw:.4},Gf.visible=!0,Y(`pickup`),p_(`Olta aldın: buz deliğinde balık tutabilirsin`),qh(),P_()}}]);return}Kh(`Ulf`,`Şamandıra batınca hemen çek; bekleme, erken de çekme. Buz turnası nadirdir ama Bjorn ona iyi para verir.`,[Jh(`Rast gele`)])}var kh={ringa:{name:`Ringa`,v:6,w:60},alabalik:{name:`Alabalık`,v:11,w:32},turna:{name:`Buz turnası`,v:28,w:8}},Ah=()=>q.inv.fish.ringa+q.inv.fish.alabalik+q.inv.fish.turna,jh=()=>Object.entries(kh).reduce((e,[t,n])=>e+q.inv.fish[t]*n.v,0);function Mh(e){for(let t of[`ringa`,`alabalik`,`turna`]){let n=Math.min(e,q.inv.fish[t]);q.inv.fish[t]-=n,e-=n}}var Nh={state:`wait`,t:0,next:2,msgT:0},Ph=B(`#fishing`),Fh=B(`#fishCanvas`),Z=Fh.getContext(`2d`);function Ih(){if(!q.inv.rod){p_(`Oltan yok. Belki biri ödünç verir.`);return}$.locked&&document.exitPointerLock?.(),Nh.state=`wait`,Nh.t=0,Nh.next=1.6+Math.random()*2.8,B(`#fishMsg`).textContent=``,X.mode=`fishing`,Ag(),Ph.hidden=!1,f_(Ph),b_(),Y(`splash`)}function Lh(){Ph.hidden=!0,X.mode=`play`,b_(),P_(!0)}function Rh(){if(X.mode!==`fishing`||Ph.classList.contains(`arming`))return;let e=B(`#fishMsg`);if(Nh.state===`bite`){let t=Math.random()*100,n=`ringa`;for(let[e,r]of Object.entries(kh)){if(t<r.w){n=e;break}t-=r.w}q.inv.fish[n]++,q.stats.fish++,e.textContent=`${kh[n].name} tuttun!`,Y(n===`turna`?`level`:`pickup`),Xu(25),Nh.state=`caught`,Nh.t=0}else Nh.state===`wait`&&(e.textContent=`Çok erken çektin, balık ürktü.`,Nh.t=0,Nh.next=2.2+Math.random()*2.5,Y(`splash`))}function zh(e){Nh.t+=e,Nh.state===`wait`&&Nh.t>=Nh.next?(Nh.state=`bite`,Nh.t=0,Y(`splash`),Xu(40)):Nh.state===`bite`&&Nh.t>.75?(Nh.state=`wait`,Nh.t=0,Nh.next=1.8+Math.random()*3,B(`#fishMsg`).textContent=`Balık yemi aldı, kaçtı.`):Nh.state===`caught`&&Nh.t>1.1&&(Nh.state=`wait`,Nh.t=0,Nh.next=1.6+Math.random()*3),B(`#fishCount`).textContent=Ah();let t=Fh.width,n=Fh.height,r=t/2,i=n*.58,a=X.time;Z.fillStyle=`#dfe9f1`,Z.fillRect(0,0,t,n),Z.fillStyle=`#b9cfdf`;for(let e=0;e<6;e++)Z.beginPath(),Z.ellipse(e*67%t,e*41%n,40,10,e,0,V),Z.fill();Z.fillStyle=`#0b1b27`,Z.beginPath(),Z.ellipse(r,i,92,58,0,0,V),Z.fill(),Z.strokeStyle=`#f4f8fb`,Z.lineWidth=6,Z.stroke(),Z.fillStyle=`rgba(111,160,190,.25)`;for(let e=0;e<2;e++){let t=a*(.5+e*.3)+e*2;Z.beginPath(),Z.ellipse(r+Math.cos(t)*45,i+Math.sin(t)*22,18,6,t,0,V),Z.fill()}let o=Nh.state===`bite`,s=i+(o?10+Math.sin(a*30)*3:Math.sin(a*2.2)*2);if(o){Z.strokeStyle=`rgba(223,240,255,.7)`,Z.lineWidth=2;for(let e=0;e<2;e++){let t=(Nh.t*60+e*20)%40+8;Z.beginPath(),Z.ellipse(r,i+4,t,t*.4,0,0,V),Z.stroke()}}Z.strokeStyle=`rgba(30,30,30,.8)`,Z.lineWidth=1.5,Z.beginPath(),Z.moveTo(r+70,6),Z.quadraticCurveTo(r+30,s-60,r,s-8),Z.stroke(),Z.fillStyle=`#e8e2d4`,Z.beginPath(),Z.arc(r,s-6,8,Math.PI,V),Z.fill(),Z.fillStyle=`#c9463c`,Z.beginPath(),Z.arc(r,s-6,8,0,Math.PI),Z.fill(),o&&(Z.fillStyle=`#e6c46f`,Z.font=`700 34px Georgia, serif`,Z.textAlign=`center`,Z.fillText(`!`,r,i-58)),B(`#fishPull`).classList.toggle(`on`,o)}B(`#fishPull`).addEventListener(`pointerdown`,e=>{e.preventDefault(),Rh()}),B(`#fishClose`).addEventListener(`click`,Lh),B(`#objCard`).addEventListener(`click`,()=>{!wh()||q.stage>=6||(q.track=q.track===`side`?`main`:`side`,Y(`ui`),p_(q.track===`side`?`İşaret: Kayıp Balıkçı`:`İşaret: Ata Rünü`))});function Bh(){let e=q.stage,t=``,n=null;return e===0?(t=`Isvik'te Sigrun ile konuş`,n={zone:`world`,x:Qp.sigrun.pos.x,z:Qp.sigrun.pos.z}):e===1?(t=`Ata Höyüğü'ne git`,n={zone:`world`,x:Vf.x,z:Vf.z}):e===2?(t=pm.triggered?`Höyük Kralı'nı yen`:`Höyüğün derinliklerine in`,n={zone:`dungeon`,x:1044,z:37}):e===3?(t=`Ata Rünü'nü al`,n={zone:`dungeon`,x:mh.x,z:mh.z}):e===4?np.g1.open?(t=`Höyükten çık`,n={zone:`dungeon`,x:rd,z:1.4}):(t=`Kestirme yolu aç: paslı kolu çek`,n={zone:`dungeon`,x:1010.5,z:6.8}):e===5?(t=`Rünü Sigrun'a götür`,n={zone:`world`,x:Qp.sigrun.pos.x,z:Qp.sigrun.pos.z}):t=`Serbest dolaşım · ilan tahtasına göz at`,n&&n.zone!==X.zone&&(n=X.zone===`dungeon`?{zone:`dungeon`,x:rd,z:1.4}:{zone:`world`,x:Vf.x,z:Vf.z}),{text:t,t:n}}var Vh=B(`#dialog`),Hh=B(`#dlgWho`),Uh=B(`#dlgText`),Wh=B(`#dlgChoices`),Gh=[];function Kh(e,t,n){$.locked&&document.exitPointerLock?.(),X.mode=`dialog`,Ag(),Hh.textContent=e,Uh.textContent=t,Wh.innerHTML=``,Gh=n,n.forEach((e,t)=>{let n=document.createElement(`button`);n.className=`ch`,n.disabled=!!e.dis,n.innerHTML=`<em>${t+1}</em>${e.t}${e.note?`<small>${e.note}</small>`:``}`,n.addEventListener(`click`,()=>{e.dis||(Y(`ui`),e.f())}),Wh.appendChild(n)}),Vh.hidden=!1,f_(Vh),b_();let r=Wh.querySelector(`button:not([disabled])`);r&&!Zu&&r.focus({preventScroll:!0})}function qh(){Vh.hidden=!0,X.mode=`play`,b_()}var Jh=(e=`Hoşça kal`)=>({t:e,f:qh});function Yh(){let e=q.stage;if(e===0){let e=t=>Kh(`Sigrun`,t,[{t:`Höyükte ne oldu?`,f:()=>e(`Höyük Kralı yeniden kalktı. Atalarımızın rünü onun mezarında. Rün yerine dönmezse ölüler köye iner, kış da bizi bitirir.`)},{t:`Karşılığında ne var?`,f:()=>e(`Köyün minneti. Dönüşünde de seni eli boş göndermem, söz.`)},{t:`Rünü ben getiririm.`,f:()=>{q.stage=1,q.inv.potions+=2,Y(`pickup`),p_(`Şifa iksiri ×2`),P_(),Kh(`Sigrun`,`Güneydoğudaki patikayı izle, rün taşları yolu gösterir. Kurtlar aç, yollarından uzak dur ya da eğilip sessiz geç. Höyükte uyuyan ölülere gizlice yaklaşırsan tek darbede toprağa dönerler.`,[Jh(`Yola çıkıyorum`)])}},Jh(`Sonra konuşuruz`)]);e(`Kuzey rüzgârı seni tam zamanında getirdi, yolcu. Üç gecedir Ata Höyüğü'nden taş sesleri geliyor. Ölüler uyanıyor.`)}else e>=1&&e<=4?Kh(`Sigrun`,`Rün hâlâ höyükte. Gizlilikle yaklaş; uyuyan draugr seni duymazsa güçlü bir darbe yeter.`,[{t:`Kazan ne işe yarıyor?`,f:()=>Kh(`Sigrun`,`Üç kar çiçeği getir, kazanda şifa iksiri kaynatırım. Çiçekler karın içinde mavi parlar; eski taşların çevresinde çok olur.`,[Jh(`Anladım`)])},Jh(`Gidiyorum`)]):e===5?Kh(`Sigrun`,`Ata Rünü… Taşın sıcaklığını hissediyor musun? Atalarımız artık uyuyabilir. Sözümü tutuyorum; ödülünü sen seç.`,[{t:`100 altın`,f:()=>{q.inv.gold+=100,Y(`gold`),Xh(`100 altın`)}},{t:`Kılıcımı kutsa`,note:`+4 hasar`,f:()=>{q.inv.weaponBonus+=4,q.inv.sword=`Kutsanmış `+q.inv.sword.toLocaleLowerCase(`tr-TR`),Y(`level`),Xh(`kutsanmış kılıç`)}}]):Kh(`Sigrun`,`Isvik seni unutmayacak. Kapımız sana hep açık, yolcu.`,[Jh()])}function Xh(e){q.stage=6,q.inv.rune=!1,qh(),P_(),p_(`Ödül: ${e}`),setTimeout(M_,700)}function Zh(){let e=30+q.inv.sharpen*15,t=n=>Kh(`Bjorn`,n,[{t:`Şifa iksiri`,note:`15 altın`,dis:q.inv.gold<15,f:()=>{q.inv.gold-=15,q.inv.potions++,Y(`gold`),t(`Al bakalım. Tadı kötü ama işini görür.`)}},{t:`Maymuncuk ×3`,note:`10 altın`,dis:q.inv.gold<10,f:()=>{q.inv.gold-=10,q.inv.picks+=3,Y(`gold`),t(`İnce çelik. Zorlama, kırılır.`)}},{t:`Kılıcı bile`,note:q.inv.sharpen>=3?`en keskin hâlinde`:`+2 hasar · ${e} altın`,dis:q.inv.sharpen>=3||q.inv.gold<e,f:()=>{q.inv.gold-=e,q.inv.sharpen++,q.inv.weaponBonus+=2,Y(`block`),t(`Kıvılcım gibi kesecek artık.`)}},...Ah()>0?[{t:`Balıkları sat ×${Ah()}`,note:`${jh()} altın`,f:()=>{q.inv.gold+=jh(),q.inv.fish={ringa:0,alabalik:0,turna:0},Y(`gold`),t(`Taze mi bunlar? Kokusundan belli. Al paranı.`)}}]:[],...q.inv.pelts>0?[{t:`Kurt postu sat ×${q.inv.pelts}`,note:`${q.inv.pelts*8} altın`,f:()=>{q.inv.gold+=q.inv.pelts*8,q.inv.pelts=0,Y(`gold`),t(`Güzel post. Kışın paraya döner.`)}}]:[],Jh()]);t(`Örs soğumadan söyle, ne lazım? Kesende ${q.inv.gold} altın var.`)}function Qh(){let e=q.bounty;if(e&&e.done){let t=yh[e.tpl];q.inv.gold+=t.reward,Y(`gold`),q.lastTpl=e.tpl,q.bounty=null,P_(),Kh(`İlan tahtası`,`“${t.title}” ilanının ödülü tahtaya iliştirilmiş: ${t.reward} altın.`,[{t:`Yeni ilanlara bak`,f:Qh},Jh(`Bırak`)]);return}if(e){let t=yh[e.tpl];if(e.tpl===`herbs`){let n=q.inv.herbs>=t.need;Kh(`İlan tahtası`,`${t.text}\n\nÜzerinde ${q.inv.herbs} kar çiçeği var.`,[{t:`Çiçekleri teslim et`,dis:!n,note:n?``:`${t.need} gerekli`,f:()=>{q.inv.herbs-=t.need,e.done=!0,Qh()}},Jh(`Bırak`)])}else if(e.tpl===`fish`){let n=Ah()>=t.need;Kh(`İlan tahtası`,`${t.text}\n\nSepetinde ${Ah()} balık var.`,[{t:`Balıkları teslim et`,dis:!n,note:n?``:`${t.need} gerekli`,f:()=>{Mh(t.need),e.done=!0,Qh()}},Jh(`Bırak`)])}else Kh(`İlan tahtası`,`${t.title}: ${e.count}/${t.need}\n\n${t.text}`,[Jh(`Tamam`)]);return}let t=sm.filter(e=>e.kind===`draugr`&&!e.dead).length,n=Object.keys(yh).filter(e=>e!==q.lastTpl&&(e!==`draugr`||t>=3)&&(e!==`fish`||q.inv.rod)),r=n[Math.floor(Math.random()*n.length)]||`wolves`,i=yh[r];Kh(`İlan tahtası`,`${i.title.toLocaleUpperCase(`tr-TR`)}\n\n${i.text}`,[{t:`İlanı al`,f:()=>{q.bounty={tpl:r,count:0,done:!1},r===`wolves`&&(Sh(),p_(`Kurt izleri batıda ve kuzeyde`)),qh(),P_()}},Jh(`Bırak`)])}function $h(){Kh(`Kazan`,q.inv.herbs>=3?`Kazan fokurduyor. Üç kar çiçeği atarsan Sigrun'un tarifiyle bir şifa iksiri kaynar.`:`Kazan fokurduyor. İksir için üç kar çiçeği gerekiyor; sende ${q.inv.herbs} var.`,[{t:`İksir kaynat`,note:`3 kar çiçeği`,dis:q.inv.herbs<3,f:()=>{q.inv.herbs-=3,q.inv.potions++,Y(`drink`),p_(`Şifa iksiri`),$h()}},Jh(`Vazgeç`)])}var eg=B(`#lockpick`),tg=B(`#lpCanvas`),ng=tg.getContext(`2d`),Q={chest:null,pick:0,sweet:0,tol:.1,turn:0,strain:0,turning:!1,size:280,dpr:1,dragX:null,keyL:!1,keyR:!1,strainSfx:0};function rg(){let e=Math.max(180,Math.min(280,Math.floor(Math.min(innerWidth*.5,innerHeight*.62)))),t=Math.min(2,window.devicePixelRatio||1);tg.style.width=e+`px`,tg.style.height=e+`px`,tg.width=e*t,tg.height=e*t,Q.size=e,Q.dpr=t}function ig(e){if(q.inv.picks<=0){p_(`Maymuncuğun yok. Bjorn satıyor.`);return}$.locked&&document.exitPointerLock?.(),Q.chest=e,e.sweet===null&&(e.sweet=(Math.random()*2-1)*1.25),Q.sweet=e.sweet,Q.tol=(e.hard?.075:.2)+(q.skills.lock.lvl-15)*.006,Q.pick=0,Q.turn=0,Q.strain=0,Q.turning=!1,B(`#lpTitle`).textContent=e.hard?`Rünlü kilit · zor`:`Rünlü kilit · kolay`,B(`#lpHelp`).textContent=Zu?`Kilidin üstünde parmağını kaydırarak maymuncuğu gezdir. Sonra “Çevir”e basılı tut. Kilit direnirse bırak, açıyı değiştir.`:`Fareyle sürükle ya da A/D ile maymuncuğu gezdir. Boşluk veya W basılıyken kilit döner. Kilit direnirse bırak, açıyı değiştir.`,B(`#lpMsg`).textContent=``,rg(),X.mode=`lockpick`,Ag(),eg.hidden=!1,f_(eg),b_()}function ag(){eg.hidden=!0,Q.turning=!1,B(`#lpTurn`).classList.remove(`on`),X.mode=`play`,b_()}function og(e){Q.turning||(Q.keyL&&(Q.pick-=e*1.1),Q.keyR&&(Q.pick+=e*1.1),Q.pick=Fu(Q.pick,-1.45,1.45));let t=Math.abs(Q.pick-Q.sweet);if(Q.turning){let n=t<=Q.tol?1:Fu(1-(t-Q.tol)/.8,0,.85);if(Q.turn<n-.001)Q.turn=Math.min(n,Q.turn+e*1.6);else if(n<1&&(Q.strain+=e,Q.strainSfx-=e,Q.strainSfx<=0&&(Y(`strain`),Q.strainSfx=.08),Q.strain>.75&&(q.inv.picks--,Q.strain=0,Q.turn=0,Q.turning=!1,B(`#lpTurn`).classList.remove(`on`),Y(`break`),Xu(40),B(`#lpMsg`).textContent=`Maymuncuk kırıldı.`,q.inv.picks<=0))){ag(),p_(`Maymuncuğun kalmadı`);return}if(Q.turn>=1){Y(`unlock`),sh(`lock`,Q.chest.hard?6:3);let e=Q.chest;ag(),cg(e);return}}else Q.turn=Math.max(0,Q.turn-e*3),Q.strain=Math.max(0,Q.strain-e*2);B(`#lpPicks`).textContent=q.inv.picks,B(`#lpSkill`).textContent=q.skills.lock.lvl,sg()}function sg(){let e=ng,t=Q.size;e.setTransform(Q.dpr,0,0,Q.dpr,0,0),e.clearRect(0,0,t,t);let n=t/2,r=t/2,i=t*.44,a=Q.strain>0?(Math.random()-.5)*.03:0;e.fillStyle=`#141b24`,e.beginPath(),e.arc(n,r,i,0,V),e.fill(),e.lineWidth=2,e.strokeStyle=`rgba(228,236,243,.35)`,e.stroke(),e.strokeStyle=`#6fd8c9`,e.lineWidth=4,e.beginPath(),e.arc(n,r,i-6,-Math.PI/2,-Math.PI/2+Q.turn*(Math.PI/2)+1e-4),e.stroke();for(let t=0;t<8;t++){let a=t/8*V;Yd(e,Jd[t],n+Math.sin(a)*(i-24)-7,r-Math.cos(a)*(i-24)-9,14,18,`rgba(154,171,190,.55)`,1.5)}e.save(),e.translate(n,r),e.rotate(Q.turn*(Math.PI/2)+a),e.fillStyle=`#232d38`,e.beginPath(),e.arc(0,0,i*.58,0,V),e.fill(),e.strokeStyle=`rgba(228,236,243,.25)`,e.lineWidth=1.5,e.stroke(),e.fillStyle=`#05080c`,e.beginPath(),e.arc(0,-i*.12,i*.1,0,V),e.fill(),e.fillRect(-i*.045,-i*.12,i*.09,i*.3),e.restore();let o=Q.pick+(Q.strain>0?(Math.random()-.5)*.2*Q.strain:0);e.strokeStyle=Q.strain>0?`rgb(230,${Math.round(200-Q.strain*180)},${Math.round(160-Q.strain*140)})`:`#dfe8ef`,e.lineWidth=3,e.lineCap=`round`,e.beginPath(),e.moveTo(n,r-i*.12),e.lineTo(n+Math.sin(o)*i*1.02,r-i*.12-Math.cos(o)*i*1.02),e.stroke()}function cg(e){X.opened.add(e.id),e.lid.rotation.x=-1.6;let t=e.loot,n=[];t.gold&&(q.inv.gold+=t.gold,n.push(`${t.gold} altın`)),t.potions&&(q.inv.potions+=t.potions,n.push(`şifa iksiri ×${t.potions}`)),t.picks&&(q.inv.picks+=t.picks,n.push(`maymuncuk ×${t.picks}`)),t.sword&&(q.inv.weaponBonus+=6,q.inv.sword=`Ata kılıcı`,n.push(`Ata kılıcı (+6 hasar)`)),Y(`gold`),n.forEach(e=>p_(e)),P_()}tg.addEventListener(`pointerdown`,e=>{Q.dragX=e.clientX,tg.setPointerCapture(e.pointerId)}),tg.addEventListener(`pointermove`,e=>{if(Q.dragX===null||Q.turning){Q.dragX=e.clientX;return}Q.pick=Fu(Q.pick+(e.clientX-Q.dragX)*.011,-1.45,1.45),Q.dragX=e.clientX});var lg=()=>{Q.dragX=null};tg.addEventListener(`pointerup`,lg),tg.addEventListener(`pointercancel`,lg);{let e=B(`#lpTurn`);e.addEventListener(`pointerdown`,t=>{t.preventDefault(),e.setPointerCapture(t.pointerId),Q.turning=!0,e.classList.add(`on`),Y(`click`)});let t=()=>{Q.turning=!1,e.classList.remove(`on`)};e.addEventListener(`pointerup`,t),e.addEventListener(`pointercancel`,t),e.addEventListener(`lostpointercapture`,t),B(`#lpClose`).addEventListener(`click`,ag)}function ug(e){let t=null,n=1e9;for(let r of sm){if(r.dead||r.zone!==X.zone||r.state===`throne`)continue;let i=r.pos.x-q.pos.x,a=r.pos.z-q.pos.z,o=Math.hypot(i,a);if(o>e+r.def.r)continue;let s=o+Math.abs(Hu(q.yaw,Math.atan2(i,a)))*1.5;s<n&&(n=s,t=r)}return t}var dg=e=>[`chase`,`windup`,`strike`,`recover`,`slam`,`roar`,`rising`].includes(e.state),fg={p1:{W:.12,S:.1,R:.3,mult:1,cost:9,reach:2.5,arc:1.25,knock:2.5,lunge:3},p2:{W:.1,S:.1,R:.3,mult:1,cost:9,reach:2.5,arc:1.3,knock:2.5,lunge:3},p3:{W:.2,S:.12,R:.4,mult:1.45,cost:12,reach:2.7,arc:.95,knock:5,lunge:4,heavy:!0},pw:{W:.34,S:.14,R:.42,mult:2.2,cost:24,reach:2.9,arc:1.6,knock:6,lunge:4.5,heavy:!0}};function pg(e){if(X.mode!==`play`||q.dead||q.dodge||q.stagger>0)return;if(q.atk){e||($.queued=!0);return}let t=`pw`;e||(q.combo=q.comboT<.45&&(q.combo||0)<3?(q.combo||0)+1:1,t=`p`+q.combo);let n=fg[t];if(q.st<(e?n.cost:1)){v_(`stBar`);return}q.st=Math.max(0,q.st-n.cost),q.stDelay=.8;let r=ug(4.8);r&&(q.yaw=Math.atan2(r.pos.x-q.pos.x,r.pos.z-q.pos.z)),q.atk={power:e,type:t,d:n,W:n.W,S:n.S,R:n.R,t:0,dur:n.W+n.S+n.R,hitAt:n.W+n.S*.6,hit:!1,swung:!1,target:r},q.noiseT=.6}function mg(e){let t=e.t<e.W?`windup`:e.t<e.W+e.S?`strike`:`recover`,n=t===`windup`?e.t/e.W:t===`strike`?(e.t-e.W)/e.S:Math.min(1,(e.t-e.W-e.S)/e.R);return{type:e.type,phase:t,k:n,player:!0}}function hg(e){let t=e.d,n=(10+q.inv.weaponBonus)*(1+(q.skills.onehand.lvl-15)*.04)*t.mult;for(let e of sm){if(e.dead||e.zone!==X.zone||e.state===`throne`)continue;let r=e.pos.x-q.pos.x,i=e.pos.z-q.pos.z,a=Math.hypot(r,i);a>t.reach+e.def.r||Math.abs(Hu(q.yaw,Math.atan2(r,i)))>t.arc&&a>1||gg(e,n,{melee:!0,power:!!t.heavy,knock:t.knock})}}function gg(e,t,n){if(e.dead)return;let r=t*(.9+Math.random()*.2),i=n.power?`pw`:n.rune?`rn`:``,a=!dg(e);n.melee&&q.sneaking&&a&&(r*=3,i=`crit`,q.stats.sneakAtk++,sh(`sneak`,4),h_(`GİZLİ SALDIRI ×3`)),e.hp-=r,e.flash=1,e.model.recoil=1,Fm(e.pos,r,i,e.def.height*.75),n.melee&&sh(`onehand`,.8+r/18),n.rune&&sh(`rune`,2.5);let o=e.pos.x-q.pos.x,s=e.pos.z-q.pos.z,c=Math.hypot(o,s)||1,l=(n.knock||2)*(dm(e)?.12:1);e.kb.x+=o/c*l,e.kb.z+=s/c*l,dm(e)?n.rune&&e.state!==`slam`&&(e.stagger=.4):n.power||n.rune?e.stagger=n.rune?1.2:.6:(e.kind===`wolf`||e.state===`windup`&&e.t<e.def.windup*.5)&&(e.stagger=.35),e.state===`dormant`?(e.state=`rising`,e.t=0,Y(`draugr`)):!dg(e)&&e.state!==`throne`&&vg(e);let u=e.kind===`wolf`?12597547:e.kind===`boss`?7329993:e.kind===`troll`?10479359:12175272;Cm(e.pos.x,e.pos.y+e.def.height*.55,e.pos.z,n.power?18:10,u,4,.5,9,1.5),Y(`hit`),ah(n.power?.085:.045),ih(n.power?.22:.08),Xu(12),e.hp<=0&&_g(e)}function _g(e){if(e.dead=!0,e.deadT=0,e.hp=0,e.bar.bg.visible=e.bar.fill.visible=!1,e.mark.visible=!1,q.stats.kills++,Y(`death`),e.kind===`wolf`&&(q.inv.pelts++,p_(`Kurt postu`),Math.random()<.1&&(q.inv.potions++,p_(`Şifa iksiri`))),e.kind===`draugr`){let e=5+Math.floor(Math.random()*11);q.inv.gold+=e,p_(`${e} altın`),Math.random()<.25&&(q.inv.potions++,p_(`Şifa iksiri`))}if(e.kind===`boss`){q.inv.gold+=80,p_(`80 altın`),mh.x=e.pos.x,mh.z=e.pos.z,mh.mesh.position.set(e.pos.x,0,e.pos.z),mh.mesh.visible=!0,xp(`g2`,!0,!1),q.stage=3,h_(`HÖYÜK KRALI DÜŞTÜ`),ih(.5),mm.visible=hm.visible=!1;for(let e of sm)e.temp&&e.zone===`dungeon`&&!e.dead&&(e.hp=0,_g(e));P_()}e.kind===`troll`&&(q.inv.gold+=40,p_(`40 altın`),h_(`BUZ TROLÜ DEVRİLDİ`),ih(.45),mm.visible=hm.visible=!1,q.side.ulf>=1&&q.side.ulf<4&&(q.side.ulf=4,q.track=`side`,p_(`Yan görev: Ulf'u çöz`)),P_()),Ch(e.kind)}function vg(e){if(e.state===`dormant`){e.state=`rising`,e.t=0,Y(`draugr`);return}if(e.state=`chase`,e.aware=1.2,e.alertT=1.6,Y(e.kind===`wolf`?`wolf`:e.kind===`troll`?`roar`:`draugr`),e.pack)for(let t of sm)t!==e&&t.pack===e.pack&&!t.dead&&!dg(t)&&t.pos.distanceTo(e.pos)<14&&(t.state=`chase`,t.aware=1.2,t.alertT=1.6)}function yg(e,t,n={}){if(q.dead||q.iframe>0||X.mode!==`play`)return;let r=Math.atan2(t.pos.x-q.pos.x,t.pos.z-q.pos.z),i=Math.abs(Hu(q.yaw,r))<1.2,a=!1;if(q.blocking&&i&&!q.atk&&!q.dodge){let t=Math.min(.9,.65+(q.skills.block.lvl-15)*.015)*(n.slam?.5:1);q.st>=7?(q.st=Math.max(0,q.st-14),q.stDelay=.9,e*=1-t,a=!0,sh(`block`,1.2+e*.05),Y(`block`),Cm(q.pos.x+Math.sin(q.yaw)*.6,q.pos.y+1.3,q.pos.z+Math.cos(q.yaw)*.6,10,16765066,3.5,.35,8,1)):(q.stagger=.6,e*=.6,v_(`stBar`))}q.hp-=e,q.hurtFlash=a?.25:1,Fm(q.pos,e,a?`bl`:`pl`,2);let o=q.pos.x-t.pos.x,s=q.pos.z-t.pos.z,c=Math.hypot(o,s)||1,l=a?2:n.slam?9:4;q.kb.x+=o/c*l,q.kb.z+=s/c*l,a||(Y(`hurt`),ih(.28),Xu(30),ah(.05),q.stagger=Math.max(q.stagger,n.slam?.5:.12),e>=12&&(q.atk=null)),q.hp<=0&&(q.hp=0,bg())}function bg(){q.dead=!0,q.deadT=0,q.atk=null,q.dodge=null,q.stats.deaths++,Y(`death`),setTimeout(()=>{q.dead&&(X.mode=`dead`,B(`#dead`).hidden=!1,f_(B(`#dead`)),b_(),$.locked&&document.exitPointerLock?.())},1400)}function xg(){B(`#dead`).hidden=!0,q.dead=!1,q.hp=q.maxHp,q.st=q.maxSt,q.runeCd=0,q.kb.set(0,0,0),q.model.root.rotation.x=0,q.stagger=0;for(let e of sm)!e.dead&&e.zone===X.zone&&e.state!==`dormant`&&e.state!==`throne`&&(e.hp=e.maxHp,e.aware=0,e.state=`idle`,e.pos.copy(e.home),e.kb.set(0,0,0),e===fm&&(e.state=`throne`,e.phase2=!1,e.slamCd=5,e.yaw=-Math.PI/2,pm.triggered=!1));for(let e of[...sm])e.temp&&e.zone===`dungeon`&&lm(e);mm.visible=hm.visible=!1,X.zone===`dungeon`?_h(`dungeon`,rd,2.6,0):_h(`world`,2,7,Math.PI),X.mode=`play`,b_()}function Sg(){if(X.mode!==`play`||q.dead||q.dodge||q.stagger>0)return;if(q.st<12){v_(`stBar`);return}q.st-=18,q.stDelay=.7,q.atk=null;let e=Og(),t,n,r=!1;if(e.mag>.2){let r=kg(e);t=r.x,n=r.z,q.yaw=Math.atan2(t,n)}else t=-Math.sin(q.yaw),n=-Math.cos(q.yaw),r=!0;let i=Math.hypot(t,n)||1;q.dodge={t:0,dur:r?.3:.42,dx:t/i,dz:n/i,back:r},q.iframe=.32,Y(`dodge`)}function Cg(){if(X.mode!==`play`||q.dead)return;if(q.runeCd>0){B(`#tRune`).classList.add(`on`),setTimeout(()=>B(`#tRune`).classList.remove(`on`),120);return}q.runeCd=q.runeCdMax;let e=0,t=26*q.runeMult*(1+(q.skills.rune.lvl-15)*.04);for(let n of sm)n.dead||n.zone!==X.zone||n.state===`throne`||n.pos.distanceTo(q.pos)<6.5+n.def.r&&(gg(n,t,{rune:!0,knock:9}),e++);e===0&&sh(`rune`,1),Dm(q.pos.x,q.pos.y,q.pos.z,7329993,6.8,.55),Dm(q.pos.x,q.pos.y,q.pos.z,12582132,4.5,.4),Cm(q.pos.x,q.pos.y+1,q.pos.z,40,7329993,7,.7,2,.5),gd.color.setHex(7329993),X.runeFlash=.35,ih(.35),Y(`rune`),Xu(25),q.noiseT=1.2,q.atk=null}function wg(){if(!(X.mode!==`play`||q.dead||q.potCd>0)){if(q.inv.potions<=0){p_(`İksirin kalmadı`);return}if(q.hp>=q.maxHp){p_(`Sağlığın zaten dolu`);return}q.inv.potions--,q.hp=Math.min(q.maxHp,q.hp+45),q.potCd=1.5,Y(`drink`),Cm(q.pos.x,q.pos.y+1.2,q.pos.z,16,16738906,1.5,.8,-1,.5)}}function Tg(){X.mode!==`play`||q.dead||(q.sneaking=!q.sneaking,B(`#tSneak`).classList.toggle(`act`,q.sneaking))}function Eg(){if(X.mode!==`play`||q.dead)return;let e=hh();e&&e.act()}var $={keys:new Set,joy:{active:!1,id:null,x:0,y:0,mag:0,ox:0,oy:0,fullT:0},look:{id:null,x:0,y:0},atkHeld:!1,atkT:0,powerFired:!1,blockKey:!1,blockBtn:!1,blockMouse:!1,queued:!1,locked:!1,rdrag:!1},Dg=.016;function Og(){let e=0,t=0,n=!1,r=$.keys;return r.has(`KeyW`)&&(t+=1),r.has(`KeyS`)&&--t,r.has(`KeyD`)&&(e+=1),r.has(`KeyA`)&&--e,(r.has(`ShiftLeft`)||r.has(`ShiftRight`))&&(n=!0),$.joy.active&&(e=$.joy.x,t=$.joy.y,$.joy.mag>.95?($.joy.fullT+=Dg,$.joy.fullT>.45&&(n=!0)):$.joy.fullT=0),{x:e,y:t,mag:Math.min(1,Math.hypot(e,t)),sprint:n}}function kg(e){let t=-Math.sin($m.yaw),n=-Math.cos($m.yaw),r=Math.cos($m.yaw),i=-Math.sin($m.yaw),a=t*e.y+r*e.x,o=n*e.y+i*e.x,s=Math.hypot(a,o);return s>1&&(a/=s,o/=s),{x:a,z:o}}function Ag(){$.atkHeld=!1,$.blockKey=$.blockBtn=$.blockMouse=!1,$.queued=!1,$.rdrag=!1,$.joy.active=!1,$.joy.id=null,$.joy.x=$.joy.y=$.joy.mag=0,$.look.id=null,B(`#joyBase`).hidden=!0,document.querySelectorAll(`.tb.on`).forEach(e=>e.classList.remove(`on`))}function jg(){X.mode===`play`&&($.atkHeld=!0,$.atkT=0,$.powerFired=!1)}function Mg(){$.atkHeld&&($.atkHeld=!1,$.powerFired||pg(!1))}addEventListener(`keydown`,e=>{let t=e.code;if([`Space`,`Tab`,`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`].includes(t)&&X.mode!==`title`&&e.preventDefault(),J.init(),X.mode===`play`){if($.keys.add(t),e.repeat)return;t===`KeyJ`?jg():t===`KeyF`||t===`KeyK`?$.blockKey=!0:t===`Space`?Sg():t===`KeyC`||t===`ControlLeft`?Tg():t===`KeyR`?Cg():t===`KeyQ`?wg():t===`KeyE`?Eg():t===`Tab`||t===`KeyI`?D_(`char`):t===`Escape`?D_():t===`KeyM`?A_():t===`KeyL`&&q.pendingLevels>0&&S_()}else if(X.mode===`dialog`){let n=parseInt(e.key,10);n>=1&&n<=Gh.length&&!Gh[n-1].dis?(Y(`ui`),Gh[n-1].f()):t===`Escape`&&qh()}else X.mode===`lockpick`?t===`KeyA`||t===`ArrowLeft`?Q.keyL=!0:t===`KeyD`||t===`ArrowRight`?Q.keyR=!0:(t===`Space`||t===`KeyW`||t===`ArrowUp`)&&!e.repeat?(Q.turning=!0,B(`#lpTurn`).classList.add(`on`)):t===`Escape`&&ag():X.mode===`fishing`?(t===`Space`||t===`KeyE`||t===`Enter`)&&!e.repeat?Rh():t===`Escape`&&Lh():X.mode===`menu`?(t===`Escape`||t===`Tab`||t===`KeyI`)&&O_():X.mode===`levelup`&&(t===`Escape`?C_():[`Digit1`,`Digit2`,`Digit3`].includes(t)&&w_([`hp`,`st`,`rune`][t.slice(-1)-1]))}),addEventListener(`keyup`,e=>{let t=e.code;$.keys.delete(t),t===`KeyJ`&&Mg(),(t===`KeyF`||t===`KeyK`)&&($.blockKey=!1),(t===`KeyA`||t===`ArrowLeft`)&&(Q.keyL=!1),(t===`KeyD`||t===`ArrowRight`)&&(Q.keyR=!1),(t===`Space`||t===`KeyW`||t===`ArrowUp`)&&X.mode===`lockpick`&&(Q.turning=!1,B(`#lpTurn`).classList.remove(`on`))}),addEventListener(`blur`,()=>{$.keys.clear(),Ag()});function Ng(){try{let e=id.requestPointerLock();e&&e.catch&&e.catch(()=>{})}catch{}}id.addEventListener(`mousedown`,e=>{X.mode===`play`&&(J.init(),e.button===0?(!$.locked&&!Zu&&Ng(),jg()):e.button===2&&($.locked?$.blockMouse=!0:$.rdrag=!0))}),addEventListener(`mouseup`,e=>{e.button===0&&Mg(),e.button===2&&($.blockMouse=!1,$.rdrag=!1)}),addEventListener(`mousemove`,e=>{X.mode===`play`&&($.locked||$.rdrag)&&($m.yaw-=e.movementX*.0026,$m.pitch+=e.movementY*.0022)}),id.addEventListener(`contextmenu`,e=>e.preventDefault()),document.addEventListener(`pointerlockchange`,()=>{let e=$.locked;$.locked=document.pointerLockElement===id,e&&!$.locked&&X.mode===`play`&&D_()});var Pg=B(`#touch`),Fg=B(`#joyBase`),Ig=B(`#joyKnob`);Pg.addEventListener(`pointerdown`,e=>{if(X.mode===`play`&&e.target===Pg){if(J.init(),e.clientX<innerWidth*.45&&$.joy.id===null){let t=$.joy;t.id=e.pointerId,t.active=!0,t.ox=e.clientX,t.oy=e.clientY,t.x=t.y=t.mag=0,Fg.style.left=e.clientX+`px`,Fg.style.top=e.clientY+`px`,Ig.style.transform=``,Fg.hidden=!1,B(`#joyHint`).hidden=!0}else $.look.id===null&&($.look.id=e.pointerId,$.look.x=e.clientX,$.look.y=e.clientY);try{Pg.setPointerCapture(e.pointerId)}catch{}}}),Pg.addEventListener(`pointermove`,e=>{let t=$.joy;if(e.pointerId===t.id){let n=e.clientX-t.ox,r=e.clientY-t.oy,i=Math.hypot(n,r),a=Math.min(i,56),o=n/(i||1)*a,s=r/(i||1)*a;Ig.style.transform=`translate(${o}px,${s}px)`,t.x=o/56,t.y=-s/56,t.mag=a/56}else e.pointerId===$.look.id&&($m.yaw-=(e.clientX-$.look.x)*.0065,$m.pitch+=(e.clientY-$.look.y)*.0045,$.look.x=e.clientX,$.look.y=e.clientY)});var Lg=e=>{if(e.pointerId===$.joy.id){let e=$.joy;e.id=null,e.active=!1,e.x=e.y=e.mag=0,e.fullT=0,Fg.hidden=!0}e.pointerId===$.look.id&&($.look.id=null)};Pg.addEventListener(`pointerup`,Lg),Pg.addEventListener(`pointercancel`,Lg);function Rg(e,t,n){e.addEventListener(`pointerdown`,n=>{n.preventDefault(),n.stopPropagation();try{e.setPointerCapture(n.pointerId)}catch{}e.classList.add(`on`),J.init(),t()});let r=()=>{e.classList.contains(`on`)&&(e.classList.remove(`on`),n&&n())};e.addEventListener(`pointerup`,r),e.addEventListener(`pointercancel`,r),e.addEventListener(`lostpointercapture`,r)}Rg(B(`#tAttack`),jg,Mg),Rg(B(`#tBlock`),()=>{$.blockBtn=!0},()=>{$.blockBtn=!1}),Rg(B(`#tDodge`),Sg),Rg(B(`#tRune`),Cg),Rg(B(`#tSneak`),Tg),Rg(B(`#tPotion`),wg),Rg(B(`#tInteract`),Eg);function zg(e){let t=q.model;if(q.dead){q.deadT+=e,t.root.position.copy(q.pos),t.root.rotation.y=q.yaw,Hp(t,{speed:0,atkPhase:-1,roll:-1,dead:Math.min(1,q.deadT/.6)},e);return}q.iframe=Math.max(0,q.iframe-e),q.potCd=Math.max(0,q.potCd-e),q.runeCd=Math.max(0,q.runeCd-e),q.stagger=Math.max(0,q.stagger-e),q.hurtFlash=Math.max(0,q.hurtFlash-e*2),q.noiseT=Math.max(0,q.noiseT-e),$.atkHeld&&($.atkT+=e,!$.powerFired&&$.atkT>=.32&&($.powerFired=!0,pg(!0)));let n=Og(),r=kg(n),i=Math.min(1,Math.hypot(r.x,r.z));q.blocking=($.blockKey||$.blockBtn||$.blockMouse)&&!q.dodge&&q.stagger<=0&&!q.atk;let a=n.sprint&&i>.5&&!q.sneaking&&!q.blocking&&!q.atk&&q.st>1,o=(q.sneaking?2.6:5)*i;if(a&&(o=8.2*i,q.st-=16*e,q.stDelay=.6),q.blocking&&(o=Math.min(o,2.2)),q.atk&&(o=.8*i),q.stagger>0&&(o=0),q.atk){let t=q.atk;t.t+=e,t.target&&!t.target.dead&&(q.yaw+=Hu(q.yaw,Math.atan2(t.target.pos.x-q.pos.x,t.target.pos.z-q.pos.z))*Math.min(1,e*12)),!t.swung&&t.t>=t.W&&(t.swung=!0,Y(`swing`)),!t.hit&&t.t>=t.hitAt&&(t.hit=!0,hg(t),q.lunge=t.d.lunge);let n=!t.power&&t.t>=t.W+t.S+t.R*.35;$.queued&&n?($.queued=!1,q.atk=null,q.comboT=0,pg(!1)):t.t>=t.dur&&(q.atk=null,q.comboT=0,$.queued&&($.queued=!1,pg(!1)))}else q.comboT=(q.comboT||0)+e;let s=r.x*o,c=r.z*o;if(q.dodge){let t=q.dodge;t.t+=e;let n=1-t.t/t.dur;s=t.dx*11*Math.max(.25,n),c=t.dz*11*Math.max(.25,n),t.t>=t.dur&&(q.dodge=null)}if(q.lunge>0&&(s+=Math.sin(q.yaw)*q.lunge,c+=Math.cos(q.yaw)*q.lunge,q.lunge=Math.max(0,q.lunge-e*18)),!q.dodge&&!q.atk){if(i>.1&&!q.blocking)q.yaw+=Hu(q.yaw,Math.atan2(r.x,r.z))*Math.min(1,e*14);else if(q.blocking){let t=ug(6);t&&(q.yaw+=Hu(q.yaw,Math.atan2(t.pos.x-q.pos.x,t.pos.z-q.pos.z))*Math.min(1,e*10))}}q.pos.x+=(s+q.kb.x)*e,q.pos.z+=(c+q.kb.z)*e,q.kb.multiplyScalar(Math.exp(-e*7)),Bg(q.pos,q.r,X.zone),q.pos.y=X.zone===`world`?Tf(q.pos.x,q.pos.z):0;let l=Math.hypot(s,c);q.moveSpeedNow=l,q.moved=l*e,q.noise=l<.3?0:q.sneaking?1.2:l>6.5?13:6,q.noiseT>0&&(q.noise=Math.max(q.noise,q.sneaking?3:7)),q.stDelay-=e,q.stDelay<=0&&(q.st=Math.min(q.maxSt,q.st+(q.blocking?10:26)*e)),q.st=Math.max(0,q.st);let u=sm.some(e=>!e.dead&&e.zone===X.zone&&dg(e));u||(q.hp=Math.min(q.maxHp,q.hp+1.2*e)),q.sneaking&&!u&&sm.some(e=>!e.dead&&e.zone===X.zone&&e.state!==`throne`&&e.pos.distanceTo(q.pos)<10)&&sh(`sneak`,.35*e),t.root.position.copy(q.pos),t.root.rotation.y=q.yaw,t.root.rotation.x=0,Hp(t,{speed:l,crouch:q.sneaking,block:q.blocking,atkPhase:-1,eatk:q.atk?mg(q.atk):null,roll:q.dodge&&!q.dodge.back?q.dodge.t/q.dodge.dur:-1},e)}function Bg(e,t,n){Af(e,t,n),n===`dungeon`?(up(e,t),up(e,t)):(e.x=Fu(e.x,-97,97),e.z=Fu(e.z,-97,97))}function Vg(e,t,n,r){if(dg(e)){e.aware=Math.max(e.aware,1);return}if(e.state===`throne`)return;if(q.dead){e.aware=Math.max(0,e.aware-r*.3);return}let i=e.def,a=e.state===`dormant`,o=0;if(!a&&t<i.detect&&(Math.abs(Hu(e.yaw,n))<i.cone/2||t<2.2)&&(e.zone===`world`||dp(e.pos.x,e.pos.z,q.pos.x,q.pos.z))){let e=.35+(1-t/i.detect)*2.4;q.sneaking&&(e*=.3*(1-Zp())),o+=e}let s=q.noise*(a?.55:1);t<s&&(o+=(1-t/s)*(q.sneaking?.6:1.6)),e.aware=o>0?Math.min(1.25,e.aware+o*r):Math.max(0,e.aware-r*.22)}function Hg(e,t){if(e.dead){e.deadT+=t,Wg(e,t);return}e.atkCd-=t,e.flash=Math.max(0,e.flash-t*5),e.alertT=Math.max(0,e.alertT-t),e.stagger>0&&(e.stagger-=t);let n=q.pos.x-e.pos.x,r=q.pos.z-e.pos.z,i=Math.hypot(n,r),a=Math.atan2(n,r);Vg(e,i,a,t);let o=null,s=0,c=null,l=0;switch(e.state){case`dormant`:e.aware>=1&&(e.state=`rising`,e.t=0,Y(`draugr`));break;case`throne`:pm.triggered&&(e.state=`rising`,e.t=0,Y(`roar`),ih(.4));break;case`rising`:e.t+=t,e.rise=Math.min(1,e.t/1.2),e.t>=1.25&&(e.state=`chase`,e.aware=1.2,e.alertT=1.2,e.kind===`boss`&&e.home.copy(e.pos));break;case`idle`:if(e.aware>=1){vg(e);break}if(e.aware>.35){e.state=`suspicious`,e.lastSeen.copy(q.pos);break}if(e.patrol){let n=e.patrol[e.patrolI];Math.hypot(n[0]-e.pos.x,n[1]-e.pos.z)<.5?(e.wanderT-=t,e.wanderT<=0&&(e.patrolI=(e.patrolI+1)%e.patrol.length,e.wanderT=2+Math.random()*2)):(o={x:n[0],z:n[1]},s=e.def.speed*.35)}else e.kind===`wolf`&&(e.wanderT-=t,(e.wanderT<=0||!e.wanderTo)&&(e.wanderTo={x:e.home.x+(Math.random()-.5)*10,z:e.home.z+(Math.random()-.5)*10},e.wanderT=3+Math.random()*4),Math.hypot(e.wanderTo.x-e.pos.x,e.wanderTo.z-e.pos.z)>.5&&(o=e.wanderTo,s=1.4));break;case`suspicious`:c=a,e.aware>.6&&(e.lastSeen.copy(q.pos),o=e.lastSeen,s=e.def.speed*.3),e.aware>=1?vg(e):e.aware<.15&&(e.state=`idle`);break;case`chase`:if(q.dead){e.state=`return`;break}if(e.kind!==`boss`&&e.home.distanceTo(e.pos)>34&&i>10){e.state=`return`,e.aware=0;break}if(c=a,dm(e)){if(e.slamCd-=t,e.kind===`boss`&&!e.phase2&&e.hp<e.maxHp*.5){e.phase2=!0,e.state=`roar`,e.t=0,Y(`roar`),ih(.5),h_(`ÖLÜLER, KALKIN!`);break}if(e.slamCd<=0&&i<7){e.state=`slam`,e.t=0,e.atkType=`slam`,e.slamCd=e.phase2?6:8.5;break}}i>e.def.range*.8+q.r&&(o=q.pos,s=e.def.speed*(e.phase2?1.15:1)),i<=e.def.range+.2&&e.atkCd<=0&&e.stagger<=0&&Math.abs(Hu(e.yaw,a))<.6&&(e.state=`windup`,e.t=0,e.atkType=e.kind===`boss`?`heavy`:e.kind===`troll`?Math.random()<.5?`heavy`:`chop`:e.kind===`draugr`?Math.random()<.5?`slash`:`chop`:`bite`);break;case`windup`:e.t+=t,e.t<e.def.windup*.65&&(c=a),e.kind===`wolf`&&(l=-1.1),e.t>=e.def.windup&&(e.state=`strike`,e.t=0,e.hitDone=!1,e.kind===`wolf`?Y(`wolf`):(Y(`swing`),jm(e)));break;case`strike`:e.t+=t,l=e.kind===`wolf`?i>.8?9:2:i>e.def.range*.5?e.kind===`boss`?3.2:2.6:0,!e.hitDone&&e.t>=e.def.strike*(e.kind===`wolf`?.7:.55)&&(e.hitDone=!0,e.kind===`wolf`&&Y(`bite`),Ug(e)),e.t>=e.def.strike&&(e.state=`recover`,e.t=0);break;case`recover`:e.t+=t,e.t>=e.def.recover&&(e.state=`chase`,e.atkCd=.5+Math.random()*(e.kind===`boss`?.6:1));break;case`slam`:{e.t+=t,e.t<.5&&(c=a);let n=Math.min(1,e.t/_m);mm.visible=hm.visible=!0,mm.position.set(e.pos.x,.03,e.pos.z),hm.position.set(e.pos.x,.04,e.pos.z),mm.scale.set(gm*n,1,gm*n),hm.scale.set(gm,1,gm),e.t>=_m&&(mm.visible=hm.visible=!1,Y(`slam`),ih(.6),Xu(50),Dm(e.pos.x,0,e.pos.z,15044671,gm,.45),Cm(e.pos.x,.3,e.pos.z,36,12166538,6,.7,12,2),i<gm+q.r&&yg(30,e,{slam:!0}),e.state=`recover`,e.t=0)}break;case`roar`:e.t+=t,e.t>1.3&&(cm(`draugr`,`s1`,`dungeon`,1038,31,{emerge:!0,temp:!0,yaw:Math.PI/2}),cm(`draugr`,`s2`,`dungeon`,1038,43,{emerge:!0,temp:!0,yaw:Math.PI/2}),e.state=`chase`);break;case`return`:o=e.home,s=e.def.speed*.7,e.pos.distanceTo(e.home)<1&&(e.state=`idle`,e.hp=e.maxHp),e.aware>=1&&!q.dead&&vg(e)}e.stagger>0&&(e.state===`windup`||e.state===`chase`)&&(e.state===`windup`&&(e.state=`recover`,e.t=e.def.recover*.3),o=null,c=null),c!==null&&(e.yaw+=Hu(e.yaw,c)*Math.min(1,t*(e.kind===`wolf`?10:6)));let u=0,d=0;if(o&&s>0){let n=o.x,r=o.z;if(e.zone===`dungeon`&&!dp(e.pos.x,e.pos.z,n,r)&&o===q.pos){let t=_p(e.pos.x,e.pos.z);t&&(n=t.x,r=t.z)}let i=n-e.pos.x,a=r-e.pos.z,l=Math.hypot(i,a);l>.05&&(u=i/l*s,d=a/l*s,c===null&&(e.yaw+=Hu(e.yaw,Math.atan2(i,a))*Math.min(1,t*6)))}l&&(u+=Math.sin(e.yaw)*l,d+=Math.cos(e.yaw)*l),e.speedNow=Math.hypot(u,d),e.state!==`dormant`&&e.state!==`throne`&&(e.state!==`rising`||e.kind===`boss`||e.emerge)&&(e.pos.x+=(u+e.kb.x)*t,e.pos.z+=(d+e.kb.z)*t,Bg(e.pos,e.def.r,e.zone)),e.kb.multiplyScalar(Math.exp(-t*6)),Wg(e,t)}function Ug(e){let t=q.pos.x-e.pos.x,n=q.pos.z-e.pos.z,r=Math.hypot(t,n),i=Math.abs(Hu(e.yaw,Math.atan2(t,n))),a=e.atkType===`heavy`?1.45:e.atkType===`chop`?.9:1.1;r<=e.def.range+q.r+.3&&i<a&&yg(e.def.dmg*(.9+Math.random()*.2)*(e.phase2?1.15:1),e,{})}function Wg(e,t){let n=e.model,r=n.root,i=e.zone===`world`?Tf(e.pos.x,e.pos.z):0;e.pos.y=i,r.position.set(e.pos.x,i,e.pos.z),r.rotation.set(0,e.yaw,0);let a={speed:e.speedNow,atkPhase:-1,atkPower:!1,roll:-1,sit:0,dead:0};if(e.state===`dormant`)r.position.y=i+.72,r.rotation.x=-Math.PI/2;else if(e.state===`rising`){let t=Bu(e.rise);e.emerge?r.position.y=i-1.9*(1-t):e.kind===`boss`?a.sit=1-t:(r.position.y=i+.72*(1-t),r.rotation.x=-Math.PI/2*(1-t))}else e.state===`throne`&&(a.sit=1);if(e.kind!==`wolf`){let t=e.atkType||`slash`;if(e.state===`windup`)a.eatk={type:t,phase:`windup`,k:Math.min(1,e.t/e.def.windup)};else if(e.state===`strike`)a.eatk={type:t,phase:`strike`,k:Math.min(1,e.t/e.def.strike)};else if(e.state===`recover`)a.eatk={type:t,phase:`recover`,k:Math.min(1,e.t/e.def.recover)};else if(e.state===`slam`){let t=1.05;a.eatk=e.t<t?{type:`slam`,phase:`windup`,k:Math.min(1,e.t/t)}:{type:`slam`,phase:`strike`,k:Math.min(1,(e.t-t)/.2)}}}if(e.dead&&(a.dead=Math.min(1,e.deadT/.6)),e.kind===`wolf`){let r=e.state===`windup`?{phase:`windup`,k:Math.min(1,e.t/e.def.windup)}:e.state===`strike`?{phase:`strike`,k:Math.min(1,e.t/e.def.strike)}:e.state===`recover`?{phase:`recover`,k:Math.min(1,e.t/e.def.recover)}:null;Yp(n,{speed:e.speedNow,atk:r,dead:a.dead},t)}else Hp(n,a,t);e.dead&&e.deadT>4&&(r.position.y-=Math.min(1.6,(e.deadT-4)*.6),e.deadT>7&&(r.visible=!1));let o=e.state===`windup`?Math.min(1,e.t/e.def.windup):e.state===`slam`?Math.min(1,e.t/_m):0,s=e.flash;for(let e of n.flash)e.emissive.setRGB(s*.8+o*.55,s*.8+o*.2,s*.8+o*.04);let c=e.zone===X.zone&&!e.dead&&r.visible,l=c&&e.hp<e.maxHp&&!dm(e);e.bar.bg.visible=e.bar.fill.visible=l;let u=r.position.y+e.def.height+.25;if(l){let t=e.pos.x-eh.x*.5,n=e.pos.z-eh.z*.5;e.bar.bg.position.set(t,u,n),e.bar.fill.position.set(t,u,n),e.bar.fill.scale.x=Math.max(.001,e.hp/e.maxHp)}let d=c&&(e.state===`suspicious`||e.state===`idle`&&e.aware>.35),f=c&&e.alertT>0&&dg(e);e.mark.visible=d||f,e.mark.visible&&(e.mark.material.map=f?am:im,e.mark.position.set(e.pos.x,u+.45,e.pos.z))}var Gg=B(`#hud`),Kg=B(`#hpFill`),qg=B(`#stFill`),Jg=B(`#hpNum`),Yg=B(`#stNum`),Xg=B(`#objText`),Zg=B(`#objDist`),Qg=B(`#bountyHud`),$g=B(`#boss`),e_=B(`#bossFill`),t_=B(`#stealth`),n_=B(`#stealthTxt`),r_=B(`#eyeOpen`),i_=B(`#prompt`),a_=B(`#promptTxt`),o_=B(`#arrow`),s_=B(`#fps`),c_=B(`#hurt`),l_=B(`#lvlBadge`),u_=B(`#tInteract`),d_=B(`#tInteractTxt`);function f_(e){e.classList.add(`arming`),clearTimeout(e._armT),e._armT=setTimeout(()=>e.classList.remove(`arming`),300)}function p_(e,t=``){let n=document.createElement(`div`);n.className=`toast `+t,n.textContent=e,B(`#toasts`).appendChild(n),setTimeout(()=>n.remove(),3300);let r=B(`#toasts`).children;r.length>5&&r[0].remove()}var m_=0;function h_(e){let t=B(`#cmsg`);t.textContent=e,t.style.opacity=`1`,clearTimeout(m_),m_=setTimeout(()=>{t.style.opacity=`0`},1300)}var g_=0;function __(e,t){B(`#bannerBig`).textContent=e,B(`#bannerSmall`).textContent=t,B(`#banner`).style.opacity=`1`,clearTimeout(g_),g_=setTimeout(()=>{B(`#banner`).style.opacity=`0`},2600)}function v_(e){let t=B(`#`+e);t.classList.add(`flash`),setTimeout(()=>t.classList.remove(`flash`),300)}function y_(){Kg.style.transform=`scaleX(${Fu(q.hp/q.maxHp,0,1)})`,Ju(Jg,String(Math.ceil(q.hp))),qg.style.transform=`scaleX(${Fu(q.st/q.maxSt,0,1)})`,Ju(Yg,String(Math.floor(q.st))),Yu(l_,q.pendingLevels<=0);let e=Bh(),t=wh(),n=q.stage<6,r=!!t&&(q.track===`side`||!n),i=r?t:e;Ju(B(`#objTitle`),r?`YAN GÖREV · KAYIP BALIKÇI`:`GÖREV · ATA RÜNÜ`),Ju(Xg,i.text);let a=r?n?`Ana görev: `+e.text:``:t?`Yan görev: `+t.text:``;Yu(B(`#objOther`),!a),a&&Ju(B(`#objOther`),a+` · değiştirmek için dokun`),B(`#objCard`).classList.toggle(`can-toggle`,!!t&&n);let o=null;if(i.t&&(o=Math.hypot(i.t.x-q.pos.x,i.t.z-q.pos.z)),Ju(Zg,o!==null&&o>4?`${Math.round(o)} m`:``),q.bounty){let e=yh[q.bounty.tpl];Yu(Qg,!1),Ju(Qg,q.bounty.done?`İlan: ${e.title} · ödül tahtada`:q.bounty.tpl===`herbs`?`İlan: ${e.title} · ${Math.min(q.inv.herbs,e.need)}/${e.need} çiçek`:q.bounty.tpl===`fish`?`İlan: ${e.title} · ${Math.min(Ah(),e.need)}/${e.need} balık`:`İlan: ${e.title} · ${q.bounty.count}/${e.need}`)}else Yu(Qg,!0);if(i.t&&i.t.zone===X.zone&&o>3.5){Rm.visible=!0,Rm.position.set(i.t.x,i.t.zone===`world`?Tf(i.t.x,i.t.z):0,i.t.z),Rm.userData.gem.position.y=3.2+Math.sin(X.time*2)*.2,Rm.userData.gem.rotation.y+=.02,Im.set(i.t.x,Rm.position.y+2.5,i.t.z).project(ld);let e=Im.z>1;if(e||Math.abs(Im.x)>.92||Math.abs(Im.y)>.88){let t=Im.x,n=Im.y;e&&(t=-t,n=-n);let r=Math.atan2(n,t),i=innerWidth/2,a=innerHeight/2,o=innerWidth/2-40,s=innerHeight/2-60;o_.style.transform=`translate(${i+Math.cos(r)*o-9}px,${a-Math.sin(r)*s-8}px) rotate(${Math.PI/2-r}rad)`,Yu(o_,!1)}else Yu(o_,!0)}else Rm.visible=!1,Yu(o_,!0);let s=X.zone===`dungeon`?pm.triggered&&!fm.dead?fm:null:!um.dead&&dg(um)?um:null;if(Yu($g,!s),s&&(Ju(B(`#bossName`),s.def.name),e_.style.transform=`scaleX(${Fu(s.hp/s.maxHp,0,1)})`),q.sneaking){let e=0,t=!1;for(let n of sm)n.dead||n.zone!==X.zone||n.state===`throne`||n.pos.distanceTo(q.pos)>22||(dg(n)?t=!0:e=Math.max(e,n.aware));let n=t?2:+(e>.35);t_.dataset.s=String(n),Ju(n_,t?`FARK EDİLDİN`:e>.35?`ŞÜPHELİ`:`GİZLİ`),r_.setAttribute(`ry`,(t?6:.6+Math.min(1,e)*5.4).toFixed(2)),Yu(t_,!1)}else Yu(t_,!0);let c=X.mode===`play`&&!q.dead?hh():null;Zu?(Yu(i_,!0),Yu(u_,!c),c&&Ju(d_,c.label())):(Yu(u_,!0),Yu(i_,!c),c&&Ju(a_,c.label()));let l=q.runeCd>0?q.runeCd/q.runeCdMax:0;B(`#tRune`).style.setProperty(`--cd`,l.toFixed(3)),Ju(B(`#potCount`),String(q.inv.potions)),Zu||(Ju(B(`#chipRune span`),q.runeCd>0?`Rün ${Math.ceil(q.runeCd)} sn`:`Rün hazır`),B(`#chipRune`).classList.toggle(`off`,q.runeCd>0),Ju(B(`#chipPot span`),`İksir ×${q.inv.potions}`),B(`#chipPot`).classList.toggle(`off`,q.inv.potions<=0),B(`#chipSneak`).classList.toggle(`on`,q.sneaking),Ju(B(`#chipSneak span`),q.sneaking?`Gizleniyor`:`Gizlen`)),c_.style.opacity=String(Math.max(q.hurtFlash*.8,q.hp<q.maxHp*.3?.35+Math.sin(X.time*5)*.1:0))}function b_(){let e=X.mode!==`title`&&X.mode!==`boot`;Yu(Gg,!e),Yu(B(`#touch`),!(Zu&&X.mode===`play`)),Yu(B(`#deskbar`),Zu||X.mode!==`play`),Yu(s_,!Ku.fps||!e),x_()}function x_(){Yu(B(`#rotHint`),!(Zu&&Ku.rotHint&&innerHeight>innerWidth&&X.mode!==`boot`))}B(`#rotClose`).addEventListener(`click`,()=>{Ku.rotHint=!1,qu(),x_()});function S_(){q.pendingLevels<=0||X.mode!==`play`||($.locked&&document.exitPointerLock?.(),X.mode=`levelup`,Ag(),B(`#luLvl`).textContent=q.charLvl+1,B(`#levelup`).hidden=!1,f_(B(`#levelup`)),b_(),Zu||B(`#levelup .opt`).focus({preventScroll:!0}))}function C_(){B(`#levelup`).hidden=!0,X.mode=`play`,b_()}function w_(e){ch(e),Y(`level`),C_(),P_()}document.querySelectorAll(`#levelup .opt`).forEach(e=>e.addEventListener(`click`,()=>w_(e.dataset.lu))),l_.addEventListener(`click`,S_);var T_=`char`,E_=!1;function D_(e){X.mode===`play`&&($.locked&&document.exitPointerLock?.(),X.mode=`menu`,Ag(),e&&(T_=e),E_=!1,B(`#mReset`).textContent=`Yeni oyun`,k_(),B(`#menu`).hidden=!1,f_(B(`#menu`)),b_())}function O_(){B(`#menu`).hidden=!0,X.mode=`play`,b_()}function k_(){document.querySelectorAll(`.tab`).forEach(e=>e.setAttribute(`aria-selected`,String(e.dataset.tab===T_)));let e=B(`#menuBody`);if(T_===`char`){e.innerHTML=`<dl class="kv"><dt>Seviye</dt><dd>${q.charLvl}${q.pendingLevels?` <span style="color:var(--rune)">(+${q.pendingLevels} seçim bekliyor)</span>`:``}</dd><dt>Can</dt><dd>${Math.ceil(q.hp)} / ${q.maxHp}</dd><dt>Dayanıklılık</dt><dd>${Math.floor(q.st)} / ${q.maxSt}</dd><dt>Rün gücü</dt><dd>×${q.runeMult.toFixed(2)} · ${q.runeCdMax.toFixed(1)} sn</dd></dl>
      <h3 style="font:600 13px var(--head);letter-spacing:.2em;color:var(--muted);margin:18px 0 6px">YETENEKLER · KULLANDIKÇA GELİŞİR</h3>`+Object.entries(q.skills).map(([e,t])=>`<div class="sk"><span>${Xp[e]}</span><b>${t.lvl}</b><div class="bar"><i style="transform:scaleX(${(t.xp/oh(t.lvl)).toFixed(3)})"></i></div></div>`).join(``)+`<p style="font-size:13.5px;color:var(--muted);margin:10px 0 0">Her 3 yetenek artışında bir seviye atlarsın. Gizli saldırı, blok, kilit açma ve rün kullanımı ilgili yeteneği geliştirir.</p>`+(q.pendingLevels?`<button class="btn small" id="mLevel" style="margin-top:12px">Seviye seçimini yap</button>`:``);let t=B(`#mLevel`);t&&t.addEventListener(`click`,()=>{O_(),S_()})}else if(T_===`inv`){let t=Math.round((10+q.inv.weaponBonus)*(1+(q.skills.onehand.lvl-15)*.04));e.innerHTML=`<dl class="kv"><dt>Silah</dt><dd>${q.inv.sword} · ${t} hasar</dd><dt>Altın</dt><dd>${q.inv.gold}</dd><dt>Şifa iksiri</dt><dd>${q.inv.potions}</dd><dt>Maymuncuk</dt><dd>${q.inv.picks}</dd><dt>Kar çiçeği</dt><dd>${q.inv.herbs}</dd><dt>Kurt postu</dt><dd>${q.inv.pelts}</dd><dt>Balık</dt><dd>${Ah()} · ${jh()} altın değerinde</dd>${q.inv.rod?`<dt>Alet</dt><dd>Olta</dd>`:``}${q.inv.rune?`<dt>Görev eşyası</dt><dd style="color:var(--rune)">Ata Rünü</dd>`:``}</dl>`}else if(T_===`quest`){let t=[`Isvik'te Sigrun ile konuş`,`Ata Höyüğü'ne git`,`Höyüğün derinliklerine in`,`Höyük Kralı'nı yen, Ata Rünü'nü al`,`Höyükten çık`,`Rünü Sigrun'a götür`],n=[0,1,2,3,4,5,5][Math.min(q.stage,6)];e.innerHTML=`<div class="qs"><h3>Ata Rünü</h3>${t.map((e,t)=>`<div class="${t<n||q.stage>=6?`done`:``}">${t===n&&q.stage<6?`▸ `:``}${e}</div>`).join(``)}</div>`+(q.side.ulf>0?`<div class="qs" style="margin-top:16px"><h3>Kayıp Balıkçı</h3>${[`Kuzgun Gölü'ndeki kampa git`,`Trol izlerini takip et`,`Buz Trolü'nü yen`,`Ulf'u çöz`,`Hakon'a haber ver`].map((e,t)=>`<div class="${t+1<q.side.ulf?`done`:``}">${t+1===q.side.ulf?`▸ `:``}${e}</div>`).join(``)}</div>`:``)+`<div class="qs" style="margin-top:16px"><h3>İlan tahtası</h3>${q.bounty?`${yh[q.bounty.tpl].title} · ${q.bounty.done?`tamamlandı, ödül tahtada`:q.bounty.tpl===`herbs`?`${Math.min(q.inv.herbs,4)}/4 çiçek`:q.bounty.tpl===`fish`?`${Math.min(Ah(),3)}/3 balık`:`${q.bounty.count}/${yh[q.bounty.tpl].need}`}`:`Aktif ilan yok. Köydeki tahtadan yeni iş alabilirsin; her seferinde farklı bir iş çıkar.`}</div>`}else e.innerHTML=`<div class="set"><span>Ses</span><div class="seg"><button data-snd="1" aria-pressed="${!Ku.muted}">Açık</button><button data-snd="0" aria-pressed="${Ku.muted}">Kapalı</button></div></div>
      <div class="set"><span>Grafik</span><div class="seg">${[[`auto`,`Otomatik`],[`low`,`Düşük`],[`medium`,`Orta`],[`high`,`Yüksek`]].map(([e,t])=>`<button data-gfx="${e}" aria-pressed="${Ku.gfx===e}">${t}</button>`).join(``)}</div></div>
      <div class="set"><span>FPS ve çözünürlük göstergesi</span><div class="seg"><button data-fps="1" aria-pressed="${Ku.fps}">Açık</button><button data-fps="0" aria-pressed="${!Ku.fps}">Kapalı</button></div></div>
      <p style="font-size:13.5px;color:var(--muted);margin:12px 0 0">Şu an: ${$u}. “Otomatik” telefonda Orta, bilgisayarda Yüksek seçer ve kare hızı düşünce çözünürlüğü azaltır. Yüksek ayar ışık parlaması, gölgeler ve renk düzenlemesi ekler. Seçim oyunu kaydedip sayfayı yeniden yükler.</p>`,e.querySelectorAll(`[data-snd]`).forEach(e=>e.addEventListener(`click`,()=>{J.init(),J.setMuted(e.dataset.snd===`0`),j_(),k_()})),e.querySelectorAll(`[data-gfx]`).forEach(e=>e.addEventListener(`click`,()=>{Ku.gfx!==e.dataset.gfx&&(Ku.gfx=e.dataset.gfx,qu(),P_(!0),location.reload())})),e.querySelectorAll(`[data-fps]`).forEach(e=>e.addEventListener(`click`,()=>{Ku.fps=e.dataset.fps===`1`,qu(),k_()}))}document.querySelectorAll(`.tab`).forEach(e=>e.addEventListener(`click`,()=>{T_=e.dataset.tab,Y(`ui`),k_()})),B(`#mResume`).addEventListener(`click`,O_),B(`#mSave`).addEventListener(`click`,()=>{P_(),p_(`Oyun kaydedildi`)}),B(`#mReset`).addEventListener(`click`,()=>{if(!E_){E_=!0,B(`#mReset`).textContent=`Emin misin? Tekrar bas`;return}Uu.del(Wu),location.reload()}),B(`#btnMenu`).addEventListener(`click`,()=>D_());function A_(){J.init(),J.setMuted(!Ku.muted),j_()}function j_(){B(`#sndWave`).setAttribute(`d`,Ku.muted?`M15.5 9.5l5 5M20.5 9.5l-5 5`:`M15.5 9a4 4 0 0 1 0 6M18 6.5a7.5 7.5 0 0 1 0 11`)}B(`#btnSound`).addEventListener(`click`,A_),j_(),B(`#btnRetry`).addEventListener(`click`,xg);function M_(){$.locked&&document.exitPointerLock?.();let e=Math.floor(q.stats.time/60),t=Math.floor(q.stats.time%60);B(`#vStats`).innerHTML=[[`${e}:${String(t).padStart(2,`0`)}`,`SÜRE`],[q.stats.kills,`YENİLEN`],[q.stats.sneakAtk,`GİZLİ SALDIRI`],[q.charLvl,`SEVİYE`],[q.inv.gold,`ALTIN`]].map(([e,t])=>`<div><b>${e}</b><span>${t}</span></div>`).join(``),X.mode=`victory`,Ag(),B(`#victory`).hidden=!1,f_(B(`#victory`)),b_()}B(`#vFree`).addEventListener(`click`,()=>{B(`#victory`).hidden=!0,X.mode=`play`,b_()}),B(`#vNew`).addEventListener(`click`,()=>{Uu.del(Wu),location.reload()});function N_(){return{v:1,zone:X.zone,pos:[q.pos.x,q.pos.z],yaw:q.yaw,hp:q.hp,maxHp:q.maxHp,st:q.st,maxSt:q.maxSt,runeMult:q.runeMult,runeCdMax:q.runeCdMax,skills:q.skills,charLvl:q.charLvl,charXp:q.charXp,pending:q.pendingLevels,inv:q.inv,stage:q.stage,stats:q.stats,bounty:q.bounty,lastTpl:q.lastTpl,dead:sm.filter(e=>e.dead&&!e.temp).map(e=>e.id),opened:[...X.opened],gates:{g1:np.g1.open,g2:np.g2.open},rune:[mh.x,mh.z],seen:[...X.seen],side:q.side,track:q.track}}function P_(e){if(!(X.mode===`title`||X.mode===`boot`||q.dead)&&Uu.set(Wu,N_())&&!e){let e=B(`#saved`);e.style.opacity=`1`,setTimeout(()=>{e.style.opacity=`0`},1200)}}function F_(e){Object.assign(q,{hp:e.hp,maxHp:e.maxHp,st:e.st,maxSt:e.maxSt,runeMult:e.runeMult,runeCdMax:e.runeCdMax,charLvl:e.charLvl,charXp:e.charXp,pendingLevels:e.pending,stage:e.stage,bounty:e.bounty,lastTpl:e.lastTpl});for(let t of Object.keys(q.skills))e.skills[t]&&(q.skills[t]=e.skills[t]);Object.assign(q.inv,e.inv),Object.assign(q.stats,e.stats);for(let t of e.dead){let e=sm.find(e=>e.id===t);e&&(e.dead=!0,e.deadT=99,e.hp=0,e.model.root.visible=!1)}for(let t of e.opened){X.opened.add(t);let e=lh.find(e=>e.id===t);e&&e.opened&&e.opened()}e.opened.includes(`lever`)&&(dh.rotation.x=.9),e.gates.g1&&xp(`g1`,!0,!0),e.gates.g2&&xp(`g2`,!0,!0),e.rune&&(mh.x=e.rune[0],mh.z=e.rune[1],mh.mesh.position.set(e.rune[0],0,e.rune[1])),fm.dead&&(pm.triggered=!0,q.stage===3&&!X.opened.has(`rune`)&&(mh.mesh.visible=!0)),(e.seen||[]).forEach(e=>X.seen.add(e)),e.side&&(q.side=Object.assign({ulf:0},e.side)),q.track=e.track||`main`,Eh(),_h(e.zone,e.pos[0],e.pos[1],e.yaw),q.hp<=0&&(q.hp=q.maxHp*.5),q.bounty&&q.bounty.tpl===`wolves`&&!q.bounty.done&&Sh()}document.addEventListener(`visibilitychange`,()=>{document.hidden&&X.mode===`play`&&(P_(!0),D_())}),addEventListener(`pagehide`,()=>P_(!0)),B(`#ctrlBox`).innerHTML=Zu?`<h2>DOKUNMATİK KONTROLLER</h2><dl><dt>Sol başparmak</dt><dd>Yürü; sonuna kadar it: koş</dd><dt>Sağda sürükle</dt><dd>Kamerayı çevir</dd><dt>Kılıç</dt><dd>Saldır; basılı tut: güçlü saldırı</dd><dt>Kalkan</dt><dd>Basılı tut: blok</dd><dt>Ok</dt><dd>Yuvarlan, kaç</dd><dt>Rün</dt><dd>Çevreyi iten rün gücü</dd><dt>Çömel</dt><dd>Gizlen; uyuyana gizli saldırı ×3</dd><dt>El</dt><dd>Konuş, aç, topla</dd></dl>`:`<h2>KLAVYE VE FARE</h2><dl><dt><kbd>W</kbd><kbd>A</kbd><kbd>S</kbd><kbd>D</kbd></dt><dd>Yürü · <kbd>Shift</kbd> koş</dd><dt>Fare</dt><dd>Kamera (ekrana tıklayınca kilitlenir)</dd><dt>Sol tık</dt><dd>Saldır; basılı tut: güçlü saldırı</dd><dt><kbd>F</kbd> / sağ tık</dt><dd>Blok</dd><dt><kbd>Boşluk</kbd></dt><dd>Yuvarlan, kaç</dd><dt><kbd>C</kbd></dt><dd>Gizlen; fark edilmeden vur: ×3</dd><dt><kbd>R</kbd></dt><dd>Rün gücü</dd><dt><kbd>Q</kbd></dt><dd>Şifa iksiri</dd><dt><kbd>E</kbd></dt><dd>Konuş, aç, topla</dd><dt><kbd>Tab</kbd> · <kbd>Esc</kbd></dt><dd>Karakter · menü</dd></dl>`;var I_=!!Uu.get(Wu);B(`#btnCont`).hidden=!I_;function L_(){B(`#title`).hidden=!0,X.mode=`play`,b_(),!X.seen.has(`isvik`)&&X.zone===`world`&&(X.seen.add(`isvik`),__(`Isvik`,`KUZEY KIYISI`)),q.stage===0&&setTimeout(()=>p_(`Parlayan işaret seni Sigrun'a götürür`),1800)}B(`#btnNew`).addEventListener(`click`,()=>{J.init(),Uu.del(Wu),_h(`world`,2.5,7,Math.PI+.3),L_(),P_(!0)}),B(`#btnCont`).addEventListener(`click`,()=>{J.init();let e=Uu.get(Wu);if(e)try{F_(e)}catch(e){console.warn(e)}L_()});var R_=performance.now(),z_=0,B_=0,V_=0;function H_(e){requestAnimationFrame(H_);let t=Math.min(.05,(e-R_)/1e3);if(R_=e,z_+=t,B_++,z_>=1){let e=B_/z_;z_=0,B_=0,Ku.gfx===`auto`&&X.mode===`play`&&(e<42&&sd>.6?(Cd(Math.max(.6,sd-.15)),V_=0):e>57?++V_>=4&&sd<od&&(Cd(Math.min(od,sd+.1)),V_=0):V_=0),Ku.fps&&Ju(s_,`${Math.round(e)} fps · çözünürlük ×${sd.toFixed(2)}`)}let n=t;X.hitstop>0&&(X.hitstop-=t,n=t*.08),Dg=n,X.time+=t,$d.uniforms.t.value=X.time;for(let e of If){let t=1+Math.sin(X.time*13+e.seed)*.12+Math.sin(X.time*7.3+e.seed)*.08;if(e.f1.scale.set(1,t,1),e.f2&&e.f2.scale.set(1,1.1-(t-1),1),e.gl){let n=e.base*(.9+(t-1)*.8);e.gl.scale.set(n,n,1)}}hd.intensity=X.zone===`world`?38+Math.sin(X.time*11)*5+Math.sin(X.time*5.3)*4:0;for(let e of zf)e.emissiveIntensity=(ed?1.3:.8)+Math.sin(X.time*1.6)*.25;for(let e of Object.values(np))e.t<1&&(e.t=Math.min(1,e.t+t/1.2),e.mesh.position.y=(e.open?Bu(e.t):1-Bu(e.t))*3.1);if(X.mode===`title`||X.mode===`boot`){let e=X.time*.05;ld.position.set(Math.sin(e)*24,8.5+Math.sin(X.time*.2),Math.cos(e)*24),ld.lookAt(0,2.2,0),em(t),Hp(q.model,{speed:0,atkPhase:-1,roll:-1},t),q.model.root.position.copy(q.pos);for(let e of sm)e.zone===`world`&&Wg(e,t)}else if(X.mode===`play`){q.stats.time+=t,eh.set(1,0,0).applyQuaternion(ld.quaternion),$.keys.has(`ArrowLeft`)&&($m.yaw+=t*2.2),$.keys.has(`ArrowRight`)&&($m.yaw-=t*2.2),$.keys.has(`ArrowUp`)&&($m.pitch-=t*1.2),$.keys.has(`ArrowDown`)&&($m.pitch+=t*1.2),X.zone===`dungeon`?(gp(),!pm.triggered&&!fm.dead&&q.pos.x>1031&&q.pos.z>24&&(pm.triggered=!0,__(`Höyük Kralı`,`MEZARIN SAHİBİ`))):(!X.seen.has(`lake`)&&yf(q.pos.x,q.pos.z)<1.6&&(X.seen.add(`lake`),__(`Kuzgun Gölü`,`YENİ YER`)),!X.seen.has(`lair`)&&Math.hypot(q.pos.x-K.x,q.pos.z-K.z)<16&&(X.seen.add(`lair`),__(`Trol İni`,`YENİ YER`)),Th(),!X.seen.has(`ruin`)&&Math.hypot(q.pos.x-ff.x,q.pos.z-ff.z)<14&&(X.seen.add(`ruin`),__(`Unutulmuş Taşlar`,`YENİ YER`)),!X.seen.has(`isvik`)&&Math.hypot(q.pos.x,q.pos.z)<20&&(X.seen.add(`isvik`),__(`Isvik`,`KUZEY KIYISI`))),zg(n),Hm(),Zm(n,q.moved||0);for(let e of[...sm])e.zone===X.zone&&Hg(e,n);for(let e of sm){if(e.dead||e.zone!==X.zone||e.state===`dormant`||e.state===`throne`)continue;let t=q.pos.x-e.pos.x,n=q.pos.z-e.pos.z,r=Math.hypot(t,n),i=q.r+e.def.r;if(r<i&&r>1e-4){let a=i-r,o=dm(e)?1:.35;q.pos.x+=t/r*a*o,q.pos.z+=n/r*a*o,e.pos.x-=t/r*a*(1-o),e.pos.z-=n/r*a*(1-o)}for(let t of sm){if(t===e||t.dead||t.zone!==e.zone||t.state===`dormant`||t.state===`throne`)continue;let n=e.pos.x-t.pos.x,r=e.pos.z-t.pos.z,i=Math.hypot(n,r),a=e.def.r+t.def.r;if(i<a&&i>1e-4){let t=(a-i)*.5;e.pos.x+=n/i*t,e.pos.z+=r/i*t}}}em(n),X.zone===`dungeon`?gd.position.set(q.pos.x+Math.sin($m.yaw)*1.4,3.9,q.pos.z+Math.cos($m.yaw)*1.4):gd.position.set(q.pos.x,q.pos.y+2.3,q.pos.z),X.runeFlash>0?(X.runeFlash-=t,gd.intensity=60*Math.max(0,X.runeFlash/.35),X.runeFlash<=0&&gd.color.setHex(16753242)):gd.intensity=X.zone===`dungeon`?16+Math.sin(X.time*9)*1.5:0,rh(t),X.autosaveT+=t,X.autosaveT>25&&(X.autosaveT=0,P_(!0))}else X.mode===`lockpick`?og(t):X.mode===`fishing`&&zh(t);if(X.zone===`world`){let e=ld.position.x,n=ld.position.y,r=ld.position.z,i=Math.sin(X.time*.3)*.6+.4;for(let a=0;a<tf;a++){let o=nf[a*3],s=nf[a*3+1],c=nf[a*3+2];s-=rf[a]*t,o+=i*t,c+=Math.sin(X.time+a)*.2*t,s<n-12&&(s+=26),s>n+14&&(s-=26),o-e>30?o-=60:o-e<-30&&(o+=60),c-r>30?c-=60:c-r<-30&&(c+=60),nf[a*3]=o,nf[a*3+1]=s,nf[a*3+2]=c}af.attributes.position.needsUpdate=!0}if(Zd.position.copy(ld.position),X.zone===`world`&&(pd.position.copy(q.pos).add(md),pd.target.position.copy(q.pos)),wm(t),Mm(t),X.zone===`world`)Xf(t),Qf(),Jf();else{bp(t);for(let e of vp)e.material.uniforms.t.value=X.time}if(Kd(),X.emberT=(X.emberT||0)-t,X.emberT<=0&&!td){X.emberT=.09;for(let e of Vd)e.zone===X.zone&&e.obj.visible&&(e.obj.getWorldPosition(Qm),!(Qm.distanceTo(ld.position)>50)&&Cm(Qm.x+(Math.random()-.5)*.4*e.scale,Qm.y+.9*e.scale,Qm.z+(Math.random()-.5)*.4*e.scale,1,16752704,.5,1.6,-1.2,.6))}X.mode!==`title`&&X.mode!==`boot`&&(y_(),Lm(t)),xd?(Sd.uniforms.time.value=X.time%100,Sd.uniforms.dungeon.value=+(X.zone===`dungeon`),xd.render(t)):ad.render(cd,ld)}_h(`world`,2.5,7,Math.PI+.3),X.mode=`title`,B(`#boot`).hidden=!0,B(`#title`).hidden=!1,b_(),addEventListener(`resize`,()=>{ld.aspect=innerWidth/innerHeight,ld.updateProjectionMatrix(),ad.setSize(innerWidth,innerHeight),xd&&xd.setSize(innerWidth,innerHeight),X.mode===`lockpick`&&rg(),x_()}),requestAnimationFrame(H_);try{window.claude?.hot?.snapshot?.(()=>({save:X.mode===`play`?N_():null}))}catch{}function U_(e){try{e&&e.save&&(F_(e.save),L_())}catch{}}try{window.claude?.hot?.ready?window.claude.hot.ready(U_):U_(window.claude?.hot?.data??{})}catch{}