(function(f,c){function a(b){this.element=b;this.h=b.dataset.renderType||"SVG";this.c=a[this.h]&&new a[this.h](this)||new a.SVG(this);this.b=this.b.bind(this);this.d=this.d.bind(this);this.f=null;this.a()}a.prototype={a:function(){this.c.a&&this.c.a();addEventListener("resize",this.b);this.b()},b:function(){cancelAnimationFrame(this.f);this.f=requestAnimationFrame(this.d)},d:function(){this.c.b&&this.c.b()}};f.Q42Logo=a;var e=c.createElement("style");e.textContent="q42-logo { display: inline-block; }";
c.head.insertBefore(e,c.head.firstChild);a.e=function(){this.elements=[];this.i=[];this.a()};a.e.prototype={querySelector:"q42-logo",a:function(){this.elements=c.querySelectorAll(this.querySelector);for(var b=0;b<this.elements.length;b++)this.print(this.elements[b])},print:function(b){b.k||(this.i.push(new a(b)),b.k=!0)}};addEventListener("DOMContentLoaded",function(){var b=new a.e;addEventListener("DOMNodeInserted",function(d){if(d.target)if("Q42-LOGO"==d.target.tagName)b.print(d.target);else if(d.target.querySelectorAll){d=
d.target.querySelectorAll(b.querySelector);for(var a=0;a<d.length;a++)b.print(d[a])}})});a.SVG=function(b){this.j=b;this.element=c.createElementNS("http://www.w3.org/2000/svg","svg");this.element.setAttribute("viewBox","0 0 333.2 500");this.l=b.element.dataset.theme||"green"};a.SVG.prototype={g:{shape:"M166.6,500C214.8,345.7,273,319,316.9,232.9C371.2,126.5,282.5,0,166.6,0C50.7,0-37.9,126.5,16.4,232.9 C60.2,319,118.4,345.7,166.6,500z",n:"M131.5,243l-22.7,33.9h22.7V243z M90,277.8l41.4-57.9h18.8v56.9h11.3v16.4h-11.3v16.6h-18.7v-16.6H90V277.8z",
m:"M175,251.8c0,0-0.1-2-0.1-4.2c0.2-16.2,12-30.2,33-30.2c20.2,0,32.6,13.4,32.6,29.1c0,11.7-6.4,21.2-17.6,28 l-17.4,10.6c-3.5,2.2-6.4,4.7-7.8,8.2H241v16.6h-66.8c0.1-15.9,5.1-28.8,21.3-38.6l14.9-8.9c7.7-4.6,10.7-9.3,10.7-15.6 c0-6.6-4.6-12.4-13.7-12.4c-9.6,0-14.3,6.5-14.3,15c0,1.7,0.1,2.4,0.1,2.4H175z",o:"M256.4,175.7L237,160.8c6.9-12,10.9-25.8,10.9-40.7c0-44.9-36.4-81.3-81.3-81.3s-81.3,36.4-81.3,81.3 c0,44.9,36.4,81.3,81.3,81.3c20.6,0,39.3-7.6,53.6-20.2l19.8,15.2L256.4,175.7z M166.6,170.3c-27.7,0-50.1-22.4-50.1-50.1 s22.4-50.1,50.1-50.1s50.1,22.4,50.1,50.1c0,7.7-1.7,14.9-4.8,21.4l-21.1-16.2l-16.4,20.7l20.3,15.6 C186.7,167.1,177,170.3,166.6,170.3z"},
a:function(){this.print();this.j.element.appendChild(this.element)},print:function(){for(var b in this.g){var a=c.createElementNS("http://www.w3.org/2000/svg","path");a.setAttribute("d",this.g[b]);switch(this.l){case "green":switch(b){case "shape":a.setAttribute("fill","#84bc2d");break;default:a.setAttribute("fill","#ffffff")}break;case "white":switch(b){case "shape":a.setAttribute("fill","#ffffff");break;default:a.setAttribute("fill","#000000")}}this.element.appendChild(a)}}};e=c.createElement("style");
e.textContent="q42-logo > svg { width: 100%; height: 100%; }";c.head.insertBefore(e,c.head.firstChild)})(window,document);