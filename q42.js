(function(g,e){function c(a){this.element=a;this.s=a.getAttribute("theme")||"green";this.e={background:"green"==this.s&&"#84bc2d"||"#ffffff",k:"green"==this.s&&"#ffffff"||"transparent"};a.getAttribute("renderer")||a.setAttribute("renderer","svg");this.L=a.getAttribute("renderer");this.q=c[this.L]&&new c[this.L](this)||new c.svg(this);this.c=this.c.bind(this);this.v=this.v.bind(this);this.C=null;this.b()}c.prototype={F:500/333.2,width:2*(100/3),height:1E3*(100/3)/333.2,p:g.devicePixelRatio||1,b:function(){this.q.b&&
this.q.b();addEventListener("resize",this.c);this.c()},c:function(){cancelAnimationFrame(this.C);this.C=requestAnimationFrame(this.v)},v:function(){this.q.c&&this.q.c()}};g.Q42Logo=c;var f=e.createElement("style");f.textContent="q42-logo { display: inline-block; } q42-logo > .fill { width: 100%; height: 100%; pointer-events: none; }";e.head.insertBefore(f,e.head.firstChild);c.A=function(){this.elements=[];this.S=[];this.b()};c.A.prototype={querySelector:"q42-logo",b:function(){this.elements=e.querySelectorAll(this.querySelector);
for(var a=0;a<this.elements.length;a++)this.print(this.elements[a])},print:function(a){a.U||(this.S.push(new c(a)),a.U=!0)}};addEventListener("DOMContentLoaded",function(){var a=new c.A;addEventListener("DOMNodeInserted",function(b){if(b.target)if("Q42-LOGO"==b.target.tagName)a.print(b.target);else if(b.target.querySelectorAll){b=b.target.querySelectorAll(a.querySelector);for(var c=0;c<b.length;c++)a.print(b[c])}})});var h=0;c.B=function(a){this.a=a;this.index=h++;this.l="http://www.w3.org/2000/svg";
this.element=e.createElementNS(this.l,"svg");this.element.setAttribute("viewBox","0 0 333.2 500");this.element.setAttribute("class","fill");"green"!=this.a.s&&(this.G=e.createElementNS(this.l,"defs"),this.n=e.createElementNS(this.l,"mask"),this.n.id="mask_"+this.index,this.rect=e.createElementNS(this.l,"rect"),this.rect.setAttribute("width","100%"),this.rect.setAttribute("height","100%"),this.rect.setAttribute("fill","white"),this.n.appendChild(this.rect),this.G.appendChild(this.n),this.element.appendChild(this.G))};
c.B.prototype={K:{shape:"M166.6,500C214.8,345.7,273,319,316.9,232.9C371.2,126.5,282.5,0,166.6,0C50.7,0-37.9,126.5,16.4,232.9 C60.2,319,118.4,345.7,166.6,500z",Z:"M131.5,243l-22.7,33.9h22.7V243z M90,277.8l41.4-57.9h18.8v56.9h11.3v16.4h-11.3v16.6h-18.7v-16.6H90V277.8z",Y:"M175,251.8c0,0-0.1-2-0.1-4.2c0.2-16.2,12-30.2,33-30.2c20.2,0,32.6,13.4,32.6,29.1c0,11.7-6.4,21.2-17.6,28 l-17.4,10.6c-3.5,2.2-6.4,4.7-7.8,8.2H241v16.6h-66.8c0.1-15.9,5.1-28.8,21.3-38.6l14.9-8.9c7.7-4.6,10.7-9.3,10.7-15.6 c0-6.6-4.6-12.4-13.7-12.4c-9.6,0-14.3,6.5-14.3,15c0,1.7,0.1,2.4,0.1,2.4H175z",
$:"M256.4,175.7L237,160.8c6.9-12,10.9-25.8,10.9-40.7c0-44.9-36.4-81.3-81.3-81.3s-81.3,36.4-81.3,81.3 c0,44.9,36.4,81.3,81.3,81.3c20.6,0,39.3-7.6,53.6-20.2l19.8,15.2L256.4,175.7z M166.6,170.3c-27.7,0-50.1-22.4-50.1-50.1 s22.4-50.1,50.1-50.1s50.1,22.4,50.1,50.1c0,7.7-1.7,14.9-4.8,21.4l-21.1-16.2l-16.4,20.7l20.3,15.6 C186.7,167.1,177,170.3,166.6,170.3z"},b:function(){this.print();this.a.element.appendChild(this.element)},print:function(){for(var a in this.K){var b=e.createElementNS(this.l,"path");b.setAttribute("d",
this.K[a]);"shape"!=a&&"transparent"==this.a.e.k?(b.setAttribute("fill","black"),this.n.appendChild(b)):("shape"==a?(b.setAttribute("fill",this.a.e.background),"transparent"==this.a.e.k&&b.setAttribute("mask","url(#mask_"+this.index+")")):b.setAttribute("fill",this.a.e.k),this.element.appendChild(b))}}};c.svg=c.B;c.w=function(a){this.a=a;this.element=e.createElement("canvas");this.element.className="fill";this.t=this.element.getContext("2d")};c.w.prototype={b:function(){this.a.element.appendChild(this.element)},
j:function(){var a=this.element,b=this.t,c=a.width/2,d=a.height/2;b.clearRect(0,0,a.width,a.height);b.translate(c,d);this.Q();b.translate(-c,-d)},Q:function(){var a=this.t,b=1/Math.max(this.a.width/this.element.width,this.a.height/this.element.height);a.beginPath();a.scale(b,b);a.translate(-33.3,-33.3*this.a.F);a.moveTo(33.3,100);a.bezierCurveTo(43,69.1,54.6,63.8,63.4,46.6);a.bezierCurveTo(74.2,25.3,56.5,0,33.3,0);a.bezierCurveTo(10.2,0,-7.6,25.3,3.3,46.6);a.bezierCurveTo(12,63.8,23.7,69.1,33.3,100);
a.closePath();a.fillStyle=this.a.e.background;a.fill();a.beginPath();a.translate(0,2);a.moveTo(33.3,31.3);a.bezierCurveTo(28,31.3,23.7,27,23.7,21.6);a.bezierCurveTo(23.7,19.1,24.7,16.6,26.5,14.8);a.bezierCurveTo(28.4,13,30.8,12,33.3,12);a.bezierCurveTo(38.7,12,43,16.3,43,21.6);a.bezierCurveTo(43,23.1,42.7,24.5,42.1,25.8);a.lineTo(38,22.6);a.lineTo(34.8,26.6);a.lineTo(38.8,29.6);a.bezierCurveTo(37.2,30.7,35.3,31.3,33.3,31.3);a.moveTo(47.5,36.3);a.lineTo(50.7,32.3);a.lineTo(46.9,29.5);a.bezierCurveTo(48.3,
27.1,49,24.4,49,21.6);a.bezierCurveTo(49,13,42,6,33.3,6);a.lineTo(33.3,6);a.bezierCurveTo(29.2,6,25.2,7.6,22.3,10.6);a.bezierCurveTo(19.3,13.5,17.7,17.5,17.7,21.6);a.bezierCurveTo(17.7,30.3,24.7,37.3,33.4,37.3);a.bezierCurveTo(37.2,37.3,40.8,35.9,43.7,33.4);a.lineTo(47.5,36.3);a.closePath();"transparent"==this.a.e.k?this.t.globalCompositeOperation="xor":a.fillStyle=this.a.e.k;a.fill();a.beginPath();a.moveTo(26.8,45.1);a.lineTo(22.4,51.6);a.lineTo(26.8,51.6);a.lineTo(26.8,45.1);a.closePath();a.moveTo(18.8,
51.8);a.lineTo(26.8,40.7);a.lineTo(30.4,40.7);a.lineTo(30.4,51.6);a.lineTo(32.6,51.6);a.lineTo(32.6,54.8);a.lineTo(30.4,54.8);a.lineTo(30.4,58);a.lineTo(26.8,58);a.lineTo(26.8,54.8);a.lineTo(18.8,54.8);a.lineTo(18.8,51.8);a.closePath();a.fill();a.beginPath();a.moveTo(35,46.8);a.bezierCurveTo(35,46.8,34.9,46.4,34.9,46);a.bezierCurveTo(35,42.9,37.2,40.2,41.3,40.2);a.bezierCurveTo(45.2,40.2,47.6,42.7,47.6,45.8);a.bezierCurveTo(47.6,48,46.3,49.9,44.2,51.2);a.lineTo(40.8,53.2);a.bezierCurveTo(40.2,53.6,
39.6,54.1,39.3,54.8);a.lineTo(47.7,54.8);a.lineTo(47.7,58);a.lineTo(34.8,58);a.bezierCurveTo(34.8,54.9,35.8,52.4,38.9,50.6);a.lineTo(41.8,48.8);a.bezierCurveTo(43.3,47.9,43.8,47,43.8,45.8);a.bezierCurveTo(43.8,44.6,43,43.4,41.2,43.4);a.bezierCurveTo(39.4,43.4,38.5,44.7,38.5,46.3);a.bezierCurveTo(38.5,46.7,38.5,46.8,38.5,46.8);a.lineTo(35,46.8);a.closePath();a.fill()},c:function(){this.element.width=this.a.element.clientWidth*this.a.p;this.element.height=this.a.element.clientHeight*this.a.p;this.j()}};
c.canvas=c.w;c.i=function(a){this.a=a};c.i.prototype={X:"-.231,-.107,0,-.140,.028,0,-.140,-.107,0,-.140,.120,0,-.212,.273,0,-.200,.263,0,-.140,.120,0,-.200,.263,0,-.188,.254,0,-.140,.120,0,-.188,.254,0,-.175,.245,0,-.140,.120,0,-.175,.245,0,-.162,.237,0,-.140,.120,0,-.162,.237,0,-.148,.229,0,-.140,.120,0,-.148,.229,0,-.134,.223,0,-.140,.120,0,-.134,.223,0,-.119,.216,0,-.140,.120,0,-.119,.216,0,-.104,.211,0,-.140,.120,0,-.104,.211,0,-.089,.206,0,-.140,.120,0,-.089,.206,0,-.065,.120,0,-.140,.120,0,-.558,-.008,0,-.212,.273,0,-.140,.120,0,-.306,-.111,0,-.558,-.008,0,-.065,.120,0,.033,.009,0,-.065,-.107,0,-.065,.120,0,.033,.015,0,.033,.009,0,-.065,.120,0,.034,.027,0,.033,.015,0,-.065,.120,0,.036,.039,0,.034,.027,0,-.065,.120,0,.040,.050,0,.036,.039,0,-.065,.120,0,.044,.061,0,.040,.050,0,-.065,.120,0,.049,.071,0,.044,.061,0,-.065,.120,0,.056,.081,0,.049,.071,0,-.065,.120,0,-.089,.206,0,-.073,.202,0,-.065,.120,0,-.073,.202,0,-.057,.199,0,-.065,.120,0,-.057,.199,0,-.041,.197,0,-.065,.120,0,-.041,.197,0,-.025,.195,0,-.065,.120,0,-.025,.195,0,-.008,.194,0,-.065,.120,0,-.008,.194,0,-.000,.194,0,-.065,.120,0,-.000,.194,0,.056,.081,0,-.065,-.107,0,.033,.003,0,.033,-.007,0,-.065,-.107,0,.033,.009,0,.033,.003,0,-.065,-.107,0,.033,-.007,0,-.020,-.107,0,-.020,-.107,0,.046,-.158,0,-.020,-.172,0,-.020,-.107,0,.051,-.148,0,.046,-.158,0,-.020,-.107,0,.056,-.139,0,.051,-.148,0,-.020,-.107,0,.063,-.130,0,.056,-.139,0,-.020,-.107,0,.070,-.121,0,.063,-.130,0,-.020,-.107,0,.079,-.112,0,.070,-.121,0,-.020,-.107,0,.033,-.007,0,.079,-.112,0,-.020,-.172,0,-.065,-.239,0,-.065,-.172,0,-.020,-.172,0,.030,-.222,0,-.065,-.239,0,-.020,-.172,0,.031,-.210,0,.030,-.222,0,-.020,-.172,0,.033,-.199,0,.031,-.210,0,-.020,-.172,0,.035,-.188,0,.033,-.199,0,-.020,-.172,0,.038,-.178,0,.035,-.188,0,-.020,-.172,0,.042,-.168,0,.038,-.178,0,-.020,-.172,0,.046,-.158,0,.042,-.168,0,-.065,-.239,0,.030,-.239,0,-.199,-.530,0,-.065,-.239,0,.030,-.233,0,.030,-.239,0,-.065,-.239,0,.030,-.222,0,.030,-.233,0,-.065,-.239,0,-.238,-.465,0,-.140,-.239,0,-.065,-.239,0,-.219,-.497,0,-.238,-.465,0,-.065,-.239,0,-.199,-.530,0,-.219,-.497,0,-.140,-.239,0,-.306,-.172,0,-.140,-.172,0,-.140,-.239,0,-.336,-.323,0,-.306,-.172,0,-.140,-.239,0,-.316,-.349,0,-.336,-.323,0,-.140,-.239,0,-.297,-.377,0,-.316,-.349,0,-.140,-.239,0,-.277,-.405,0,-.297,-.377,0,-.140,-.239,0,-.258,-.435,0,-.277,-.405,0,-.140,-.239,0,-.238,-.465,0,-.258,-.435,0,-.306,-.172,0,-.441,-.182,0,-.306,-.111,0,-.306,-.172,0,-.403,-.232,0,-.441,-.182,0,-.306,-.172,0,-.365,-.283,0,-.403,-.232,0,-.306,-.172,0,-.336,-.323,0,-.365,-.283,0,.056,.081,0,-.000,.194,0,.007,.194,0,.056,.081,0,.007,.194,0,.061,.087,0,.061,.087,0,.007,.194,0,.065,.092,0,.065,.092,0,.007,.194,0,.022,.195,0,.065,.092,0,.022,.195,0,.069,.096,0,.069,.096,0,.022,.195,0,.074,.100,0,.074,.100,0,.022,.195,0,.037,.196,0,.074,.100,0,.037,.196,0,.079,.104,0,.079,.104,0,.037,.196,0,.084,.107,0,.084,.107,0,.037,.196,0,.052,.198,0,.084,.107,0,.052,.198,0,.089,.110,0,.089,.110,0,.052,.198,0,.094,.113,0,.094,.113,0,.052,.198,0,.067,.201,0,.094,.113,0,.067,.201,0,.100,.116,0,.100,.116,0,.067,.201,0,.081,.204,0,.100,.116,0,.081,.204,0,.106,.119,0,.106,.119,0,.081,.204,0,.112,.121,0,.112,.121,0,.081,.204,0,.095,.208,0,.112,.121,0,.095,.208,0,.118,.123,0,.118,.123,0,.095,.208,0,.125,.125,0,.125,.125,0,.095,.208,0,.109,.213,0,.125,.125,0,.109,.213,0,.131,.127,0,.131,.127,0,.109,.213,0,.138,.128,0,.138,.128,0,.109,.213,0,.123,.218,0,.138,.128,0,.123,.218,0,.146,.129,0,.146,.129,0,.123,.218,0,.153,.130,0,.153,.130,0,.123,.218,0,.136,.224,0,.153,.130,0,.136,.224,0,.161,.130,0,.161,.130,0,.136,.224,0,.168,.130,0,.168,.130,0,.136,.224,0,.149,.230,0,.168,.130,0,.149,.230,0,.176,.130,0,.176,.130,0,.149,.230,0,.162,.237,0,.176,.130,0,.162,.237,0,.183,.129,0,.183,.129,0,.162,.237,0,.190,.128,0,.190,.128,0,.162,.237,0,.174,.245,0,.190,.128,0,.174,.245,0,.197,.127,0,.197,.127,0,.174,.245,0,.203,.125,0,.203,.125,0,.174,.245,0,.186,.253,0,.203,.125,0,.186,.253,0,.293,.214,0,.203,.125,0,.293,.214,0,.210,.124,0,.210,.124,0,.293,.214,0,.216,.122,0,.216,.122,0,.293,.214,0,.222,.119,0,.222,.119,0,.293,.214,0,.228,.117,0,.228,.117,0,.293,.214,0,.233,.114,0,.233,.114,0,.293,.214,0,.239,.111,0,.239,.111,0,.293,.214,0,.244,.108,0,.244,.108,0,.293,.214,0,.249,.105,0,.249,.105,0,.293,.214,0,.256,.099,0,.256,.099,0,.293,.214,0,.264,.091,0,.264,.091,0,.293,.214,0,.272,.083,0,.272,.083,0,.293,.214,0,.278,.073,0,.278,.073,0,.293,.214,0,.284,.063,0,.284,.063,0,.293,.214,0,.592,.052,0,.284,.063,0,.592,.052,0,.288,.053,0,.288,.053,0,.575,.021,0,.291,.042,0,.288,.053,0,.592,.052,0,.575,.021,0,.291,.042,0,.558,-.008,0,.294,.031,0,.291,.042,0,.575,.021,0,.558,-.008,0,.294,.031,0,.541,-.037,0,.295,.019,0,.294,.031,0,.558,-.008,0,.541,-.037,0,.295,.019,0,.541,-.037,0,.295,.014,0,.295,.014,0,.523,-.064,0,.295,.009,0,.295,.014,0,.541,-.037,0,.523,-.064,0,.295,.009,0,.523,-.064,0,.294,.001,0,.294,.001,0,.505,-.091,0,.293,-.007,0,.294,.001,0,.523,-.064,0,.505,-.091,0,.293,-.007,0,.505,-.091,0,.291,-.015,0,.291,-.015,0,.487,-.118,0,.289,-.023,0,.291,-.015,0,.505,-.091,0,.487,-.118,0,.289,-.023,0,.487,-.118,0,.286,-.031,0,.286,-.031,0,.469,-.144,0,.283,-.038,0,.286,-.031,0,.487,-.118,0,.469,-.144,0,.283,-.038,0,.469,-.144,0,.279,-.045,0,.279,-.045,0,.297,-.173,0,.274,-.052,0,.279,-.045,0,.469,-.144,0,.297,-.173,0,.274,-.052,0,.297,-.173,0,.269,-.059,0,.269,-.059,0,.297,-.173,0,.264,-.066,0,.264,-.066,0,.297,-.173,0,.258,-.072,0,.258,-.072,0,.297,-.173,0,.251,-.078,0,.251,-.078,0,.297,-.173,0,.244,-.084,0,.244,-.084,0,.297,-.173,0,.237,-.090,0,.237,-.090,0,.297,-.173,0,.229,-.095,0,.229,-.095,0,.297,-.173,0,.225,-.097,0,.225,-.097,0,.297,-.173,0,.155,-.140,0,.155,-.140,0,.124,-.173,0,.150,-.143,0,.155,-.140,0,.297,-.173,0,.124,-.173,0,.150,-.143,0,.124,-.173,0,.143,-.149,0,.143,-.149,0,.124,-.173,0,.138,-.152,0,.138,-.152,0,.124,-.173,0,.134,-.156,0,.134,-.156,0,.124,-.173,0,.131,-.161,0,.131,-.161,0,.124,-.173,0,.127,-.165,0,.127,-.165,0,.124,-.173,0,.125,-.170,0,.297,-.173,0,.403,-.232,0,.297,-.239,0,.297,-.173,0,.441,-.182,0,.403,-.232,0,.297,-.173,0,.469,-.144,0,.441,-.182,0,.297,-.239,0,.277,-.405,0,.030,-.239,0,.297,-.239,0,.297,-.377,0,.277,-.405,0,.297,-.239,0,.316,-.349,0,.297,-.377,0,.297,-.239,0,.336,-.323,0,.316,-.349,0,.297,-.239,0,.365,-.283,0,.336,-.323,0,.297,-.239,0,.403,-.232,0,.365,-.283,0,.030,-.239,0,.179,-.565,0,-.179,-.565,0,.030,-.239,0,.199,-.530,0,.179,-.565,0,.030,-.239,0,.218,-.497,0,.199,-.530,0,.030,-.239,0,.238,-.465,0,.218,-.497,0,.030,-.239,0,.257,-.435,0,.238,-.465,0,.030,-.239,0,.277,-.405,0,.257,-.435,0,.030,-.239,0,-.179,-.565,0,-.199,-.530,0,.079,-.112,0,.033,-.007,0,.088,-.104,0,.088,-.104,0,.033,-.007,0,.098,-.096,0,.098,-.096,0,.106,-.007,0,.109,-.088,0,.098,-.096,0,.033,-.007,0,.106,-.007,0,.109,-.088,0,.106,-.007,0,.115,-.085,0,.115,-.085,0,.106,-.007,0,.175,-.049,0,.175,-.049,0,.106,-.007,0,.180,-.046,0,.180,-.046,0,.106,-.007,0,.190,-.039,0,.190,-.039,0,.105,.005,0,.196,-.033,0,.190,-.039,0,.105,.002,0,.105,.005,0,.190,-.039,0,.105,-.001,0,.105,.002,0,.190,-.039,0,.106,-.007,0,.105,-.001,0,.196,-.033,0,.107,.017,0,.200,-.030,0,.196,-.033,0,.106,.011,0,.107,.017,0,.196,-.033,0,.105,.005,0,.106,.011,0,.200,-.030,0,.159,.062,0,.203,-.026,0,.200,-.030,0,.107,.017,0,.159,.062,0,.203,-.026,0,.163,.062,0,.206,-.022,0,.203,-.026,0,.159,.062,0,.163,.062,0,.206,-.022,0,.166,.062,0,.209,-.019,0,.206,-.022,0,.163,.062,0,.166,.062,0,.209,-.019,0,.166,.062,0,.211,-.015,0,.211,-.015,0,.166,.062,0,.213,-.011,0,.213,-.011,0,.166,.062,0,.214,-.007,0,.214,-.007,0,.166,.062,0,.216,-.002,0,.216,-.002,0,.166,.062,0,.216,.001,0,.216,.001,0,.172,.061,0,.217,.008,0,.216,.001,0,.166,.062,0,.172,.061,0,.217,.008,0,.178,.060,0,.217,.012,0,.217,.008,0,.172,.061,0,.178,.060,0,.217,.012,0,.184,.059,0,.217,.015,0,.217,.012,0,.178,.060,0,.184,.059,0,.217,.015,0,.184,.059,0,.217,.020,0,.217,.020,0,.189,.057,0,.216,.024,0,.217,.020,0,.184,.059,0,.189,.057,0,.216,.024,0,.194,.054,0,.215,.029,0,.216,.024,0,.189,.057,0,.194,.054,0,.215,.029,0,.194,.054,0,.213,.033,0,.213,.033,0,.198,.052,0,.211,.038,0,.213,.033,0,.194,.054,0,.198,.052,0,.211,.038,0,.202,.049,0,.208,.042,0,.211,.038,0,.198,.052,0,.202,.049,0,.208,.042,0,.202,.049,0,.205,.045,0,.159,.062,0,.107,.017,0,.152,.061,0,.152,.061,0,.108,.023,0,.146,.060,0,.152,.061,0,.107,.017,0,.108,.023,0,.146,.060,0,.112,.033,0,.140,.058,0,.146,.060,0,.110,.028,0,.112,.033,0,.146,.060,0,.108,.023,0,.110,.028,0,.140,.058,0,.115,.038,0,.135,.056,0,.140,.058,0,.112,.033,0,.115,.038,0,.135,.056,0,.118,.043,0,.130,.053,0,.135,.056,0,.115,.038,0,.118,.043,0,.130,.053,0,.121,.047,0,.125,.050,0,.130,.053,0,.118,.043,0,.121,.047,0,.281,.356,0,.283,.361,0,.359,.297,0,.283,.361,0,.288,.370,0,.359,.297,0,.288,.370,0,.293,.379,0,.359,.297,0,.293,.379,0,.297,.389,0,.359,.297,0,.297,.389,0,.301,.398,0,.359,.297,0,.301,.398,0,.305,.408,0,.359,.297,0,.305,.408,0,.309,.418,0,.359,.297,0,.309,.418,0,.312,.428,0,.359,.297,0,.312,.428,0,.314,.438,0,.359,.297,0,.314,.438,0,.317,.449,0,.359,.297,0,.317,.449,0,.319,.459,0,.657,.443,0,.317,.449,0,.657,.443,0,.359,.297,0,.319,.459,0,.321,.470,0,.648,.482,0,.319,.459,0,.653,.463,0,.657,.443,0,.319,.459,0,.648,.482,0,.653,.463,0,.321,.470,0,.322,.481,0,.643,.502,0,.321,.470,0,.643,.502,0,.648,.482,0,.322,.481,0,.323,.491,0,.638,.521,0,.322,.481,0,.638,.521,0,.643,.502,0,.323,.491,0,.324,.502,0,.631,.540,0,.323,.491,0,.631,.540,0,.638,.521,0,.324,.502,0,.324,.514,0,.624,.559,0,.324,.502,0,.624,.559,0,.631,.540,0,.324,.514,0,.325,.519,0,.617,.578,0,.324,.514,0,.617,.578,0,.624,.559,0,.325,.519,0,.324,.527,0,.617,.578,0,.324,.527,0,.324,.544,0,.600,.615,0,.324,.527,0,.609,.596,0,.617,.578,0,.324,.527,0,.600,.615,0,.609,.596,0,.324,.544,0,.322,.561,0,.591,.633,0,.324,.544,0,.591,.633,0,.600,.615,0,.322,.561,0,.319,.577,0,.571,.668,0,.322,.561,0,.582,.650,0,.591,.633,0,.322,.561,0,.571,.668,0,.582,.650,0,.319,.577,0,.316,.593,0,.561,.685,0,.319,.577,0,.561,.685,0,.571,.668,0,.316,.593,0,.312,.608,0,.550,.702,0,.316,.593,0,.550,.702,0,.561,.685,0,.312,.608,0,.307,.623,0,.526,.734,0,.312,.608,0,.538,.718,0,.550,.702,0,.312,.608,0,.526,.734,0,.538,.718,0,.307,.623,0,.302,.638,0,.513,.750,0,.307,.623,0,.513,.750,0,.526,.734,0,.302,.638,0,.296,.653,0,.500,.766,0,.302,.638,0,.500,.766,0,.513,.750,0,.296,.653,0,.289,.667,0,.472,.796,0,.296,.653,0,.486,.781,0,.500,.766,0,.296,.653,0,.472,.796,0,.486,.781,0,.289,.667,0,.281,.681,0,.458,.810,0,.289,.667,0,.458,.810,0,.472,.796,0,.281,.681,0,.273,.694,0,.443,.824,0,.281,.681,0,.443,.824,0,.458,.810,0,.273,.694,0,.265,.707,0,.428,.837,0,.273,.694,0,.428,.837,0,.443,.824,0,.265,.707,0,.255,.720,0,.412,.850,0,.265,.707,0,.412,.850,0,.428,.837,0,.255,.720,0,.245,.732,0,.380,.875,0,.255,.720,0,.396,.863,0,.412,.850,0,.255,.720,0,.380,.875,0,.396,.863,0,.245,.732,0,.235,.743,0,.363,.887,0,.245,.732,0,.363,.887,0,.380,.875,0,.235,.743,0,.224,.755,0,.346,.898,0,.235,.743,0,.346,.898,0,.363,.887,0,.224,.755,0,.212,.765,0,.328,.909,0,.224,.755,0,.328,.909,0,.346,.898,0,.212,.765,0,.200,.775,0,.310,.919,0,.212,.765,0,.310,.919,0,.328,.909,0,.200,.775,0,.188,.784,0,.292,.928,0,.200,.775,0,.292,.928,0,.310,.919,0,.188,.784,0,.175,.793,0,.274,.937,0,.188,.784,0,.274,.937,0,.292,.928,0,.175,.793,0,.161,.801,0,.255,.946,0,.175,.793,0,.255,.946,0,.274,.937,0,.161,.801,0,.147,.809,0,.217,.961,0,.161,.801,0,.236,.954,0,.255,.946,0,.161,.801,0,.217,.961,0,.236,.954,0,.147,.809,0,.133,.816,0,.197,.968,0,.147,.809,0,.197,.968,0,.217,.961,0,.133,.816,0,.119,.822,0,.177,.974,0,.133,.816,0,.177,.974,0,.197,.968,0,.119,.822,0,.104,.827,0,.157,.980,0,.119,.822,0,.157,.980,0,.177,.974,0,.104,.827,0,.088,.832,0,.137,.984,0,.104,.827,0,.137,.984,0,.157,.980,0,.088,.832,0,.073,.836,0,.116,.989,0,.088,.832,0,.116,.989,0,.137,.984,0,.073,.836,0,.057,.839,0,.095,.992,0,.073,.836,0,.095,.992,0,.116,.989,0,.057,.839,0,.041,.842,0,.074,.995,0,.057,.839,0,.074,.995,0,.095,.992,0,.041,.842,0,.024,.843,0,.053,.997,0,.041,.842,0,.053,.997,0,.074,.995,0,.024,.843,0,.008,.844,0,.032,.999,0,.024,.843,0,.032,.999,0,.053,.997,0,.008,.844,0,-.000,.844,0,.010,.999,0,.008,.844,0,.010,.999,0,.032,.999,0,-.000,.844,0,-.008,.844,0,-.011,.999,0,-.000,.844,0,-.000,1,0,.010,.999,0,-.000,.844,0,-.011,.999,0,-.000,1,0,-.008,.844,0,-.025,.843,0,-.032,.999,0,-.008,.844,0,-.032,.999,0,-.011,.999,0,-.025,.843,0,-.041,.842,0,-.053,.997,0,-.025,.843,0,-.053,.997,0,-.032,.999,0,-.041,.842,0,-.057,.839,0,-.075,.995,0,-.041,.842,0,-.075,.995,0,-.053,.997,0,-.057,.839,0,-.073,.836,0,-.096,.992,0,-.057,.839,0,-.096,.992,0,-.075,.995,0,-.073,.836,0,-.089,.832,0,-.116,.989,0,-.073,.836,0,-.116,.989,0,-.096,.992,0,-.089,.832,0,-.104,.827,0,-.137,.984,0,-.089,.832,0,-.137,.984,0,-.116,.989,0,-.104,.827,0,-.119,.822,0,-.157,.980,0,-.104,.827,0,-.157,.980,0,-.137,.984,0,-.119,.822,0,-.134,.816,0,-.178,.974,0,-.119,.822,0,-.178,.974,0,-.157,.980,0,-.134,.816,0,-.148,.809,0,-.197,.968,0,-.134,.816,0,-.197,.968,0,-.178,.974,0,-.148,.809,0,-.162,.801,0,-.217,.961,0,-.148,.809,0,-.217,.961,0,-.197,.968,0,-.162,.801,0,-.175,.793,0,-.255,.946,0,-.162,.801,0,-.236,.954,0,-.217,.961,0,-.162,.801,0,-.255,.946,0,-.236,.954,0,-.175,.793,0,-.188,.784,0,-.274,.937,0,-.175,.793,0,-.274,.937,0,-.255,.946,0,-.188,.784,0,-.200,.775,0,-.293,.928,0,-.188,.784,0,-.293,.928,0,-.274,.937,0,-.200,.775,0,-.212,.765,0,-.311,.919,0,-.200,.775,0,-.311,.919,0,-.293,.928,0,-.212,.765,0,-.224,.755,0,-.329,.909,0,-.212,.765,0,-.329,.909,0,-.311,.919,0,-.224,.755,0,-.235,.743,0,-.346,.898,0,-.224,.755,0,-.346,.898,0,-.329,.909,0,-.235,.743,0,-.246,.732,0,-.363,.887,0,-.235,.743,0,-.363,.887,0,-.346,.898,0,-.246,.732,0,-.256,.720,0,-.380,.875,0,-.246,.732,0,-.380,.875,0,-.363,.887,0,-.256,.720,0,-.265,.707,0,-.412,.850,0,-.256,.720,0,-.396,.863,0,-.380,.875,0,-.256,.720,0,-.412,.850,0,-.396,.863,0,-.265,.707,0,-.274,.694,0,-.428,.837,0,-.265,.707,0,-.428,.837,0,-.412,.850,0,-.274,.694,0,-.282,.681,0,-.443,.824,0,-.274,.694,0,-.443,.824,0,-.428,.837,0,-.282,.681,0,-.289,.667,0,-.458,.810,0,-.282,.681,0,-.458,.810,0,-.443,.824,0,-.289,.667,0,-.296,.653,0,-.473,.796,0,-.289,.667,0,-.473,.796,0,-.458,.810,0,-.296,.653,0,-.302,.638,0,-.500,.766,0,-.296,.653,0,-.487,.781,0,-.473,.796,0,-.296,.653,0,-.500,.766,0,-.487,.781,0,-.302,.638,0,-.308,.623,0,-.513,.750,0,-.302,.638,0,-.513,.750,0,-.500,.766,0,-.308,.623,0,-.313,.608,0,-.526,.734,0,-.308,.623,0,-.526,.734,0,-.513,.750,0,-.313,.608,0,-.317,.593,0,-.550,.702,0,-.313,.608,0,-.538,.718,0,-.526,.734,0,-.313,.608,0,-.550,.702,0,-.538,.718,0,-.317,.593,0,-.320,.577,0,-.561,.685,0,-.317,.593,0,-.561,.685,0,-.550,.702,0,-.320,.577,0,-.322,.561,0,-.582,.650,0,-.320,.577,0,-.572,.668,0,-.561,.685,0,-.320,.577,0,-.582,.650,0,-.572,.668,0,-.322,.561,0,-.324,.544,0,-.591,.633,0,-.322,.561,0,-.591,.633,0,-.582,.650,0,-.324,.544,0,-.325,.527,0,-.601,.615,0,-.324,.544,0,-.601,.615,0,-.591,.633,0,-.325,.527,0,-.325,.519,0,-.617,.578,0,-.325,.527,0,-.609,.596,0,-.601,.615,0,-.325,.527,0,-.617,.578,0,-.609,.596,0,-.325,.519,0,-.325,.511,0,-.617,.578,0,-.325,.511,0,-.324,.494,0,-.631,.540,0,-.325,.511,0,-.625,.559,0,-.617,.578,0,-.325,.511,0,-.631,.540,0,-.625,.559,0,-.324,.494,0,-.322,.478,0,-.638,.521,0,-.324,.494,0,-.638,.521,0,-.631,.540,0,-.322,.478,0,-.320,.462,0,-.648,.482,0,-.322,.478,0,-.643,.502,0,-.638,.521,0,-.322,.478,0,-.648,.482,0,-.643,.502,0,-.320,.462,0,-.317,.446,0,-.657,.443,0,-.320,.462,0,-.653,.463,0,-.648,.482,0,-.320,.462,0,-.657,.443,0,-.653,.463,0,-.317,.446,0,-.313,.430,0,-.660,.423,0,-.317,.446,0,-.660,.423,0,-.657,.443,0,-.313,.430,0,-.308,.415,0,-.664,.383,0,-.313,.430,0,-.662,.403,0,-.660,.423,0,-.313,.430,0,-.664,.383,0,-.662,.403,0,-.308,.415,0,-.302,.400,0,-.666,.342,0,-.308,.415,0,-.665,.363,0,-.664,.383,0,-.308,.415,0,-.666,.342,0,-.665,.363,0,-.302,.400,0,-.296,.385,0,-.665,.302,0,-.302,.400,0,-.666,.322,0,-.666,.342,0,-.302,.400,0,-.665,.302,0,-.666,.322,0,-.296,.385,0,-.289,.371,0,-.663,.281,0,-.296,.385,0,-.663,.281,0,-.665,.302,0,-.289,.371,0,-.282,.357,0,-.658,.240,0,-.289,.371,0,-.661,.261,0,-.663,.281,0,-.289,.371,0,-.658,.240,0,-.661,.261,0,-.282,.357,0,-.274,.344,0,-.649,.199,0,-.282,.357,0,-.654,.220,0,-.658,.240,0,-.282,.357,0,-.649,.199,0,-.654,.220,0,-.274,.344,0,-.265,.331,0,-.638,.159,0,-.274,.344,0,-.644,.179,0,-.649,.199,0,-.274,.344,0,-.638,.159,0,-.644,.179,0,-.265,.331,0,-.256,.318,0,-.623,.118,0,-.265,.331,0,-.631,.138,0,-.638,.159,0,-.265,.331,0,-.623,.118,0,-.631,.138,0,-.256,.318,0,-.246,.306,0,-.605,.078,0,-.256,.318,0,-.615,.098,0,-.623,.118,0,-.256,.318,0,-.605,.078,0,-.615,.098,0,-.246,.306,0,-.235,.295,0,-.592,.052,0,-.246,.306,0,-.600,.068,0,-.605,.078,0,-.246,.306,0,-.592,.052,0,-.600,.068,0,-.235,.295,0,-.224,.284,0,-.575,.021,0,-.235,.295,0,-.575,.021,0,-.592,.052,0,-.224,.284,0,-.212,.273,0,-.558,-.008,0,-.224,.284,0,-.558,-.008,0,-.575,.021,0,.186,.253,0,.197,.261,0,.293,.214,0,.197,.261,0,.208,.270,0,.293,.214,0,.208,.270,0,.214,.275,0,.293,.214,0,.293,.214,0,.601,.068,0,.592,.052,0,.293,.214,0,.606,.078,0,.601,.068,0,.293,.214,0,.359,.297,0,.606,.078,0,-.005,.318,0,-.015,.319,0,.031,.415,0,-.005,.318,0,.031,.415,0,-.000,.318,0,-.015,.319,0,-.025,.320,0,.031,.415,0,-.025,.320,0,-.035,.321,0,.031,.415,0,-.035,.321,0,-.045,.323,0,.031,.415,0,-.045,.323,0,-.055,.326,0,.031,.415,0,-.055,.326,0,-.064,.329,0,.031,.415,0,-.064,.329,0,-.073,.332,0,.031,.415,0,-.073,.332,0,-.082,.336,0,.031,.415,0,-.082,.336,0,-.091,.340,0,.031,.415,0,-.091,.340,0,-.099,.345,0,.031,.415,0,-.099,.345,0,-.108,.350,0,.031,.415,0,-.108,.350,0,-.116,.355,0,.031,.415,0,-.116,.355,0,-.123,.361,0,.031,.415,0,-.123,.361,0,-.131,.367,0,.031,.415,0,-.131,.367,0,-.138,.374,0,.031,.415,0,-.138,.374,0,-.145,.380,0,.031,.415,0,-.145,.380,0,-.151,.388,0,.031,.415,0,-.151,.388,0,-.157,.395,0,.031,.415,0,-.157,.395,0,-.163,.403,0,.031,.415,0,-.163,.403,0,-.169,.411,0,.031,.415,0,-.169,.411,0,-.174,.419,0,.031,.415,0,-.174,.419,0,-.178,.427,0,.031,.415,0,-.178,.427,0,-.182,.436,0,.031,.415,0,-.182,.436,0,-.186,.445,0,.031,.415,0,-.186,.445,0,-.190,.454,0,.031,.415,0,-.190,.454,0,-.192,.464,0,.031,.415,0,-.192,.464,0,-.195,.473,0,.031,.415,0,-.195,.473,0,-.197,.483,0,.031,.415,0,-.197,.483,0,-.198,.493,0,.031,.415,0,-.198,.493,0,-.199,.503,0,.031,.415,0,-.199,.503,0,-.200,.514,0,.031,.415,0,-.200,.514,0,-.200,.519,0,.031,.415,0,-.200,.519,0,-.200,.524,0,.031,.415,0,-.200,.524,0,-.199,.534,0,.031,.415,0,-.199,.534,0,-.198,.544,0,.031,.415,0,-.198,.544,0,-.197,.554,0,.031,.415,0,-.197,.554,0,-.195,.564,0,.031,.415,0,-.195,.564,0,-.192,.574,0,.031,.415,0,-.192,.574,0,-.190,.583,0,.031,.415,0,-.190,.583,0,-.186,.592,0,.031,.415,0,-.186,.592,0,-.182,.601,0,.031,.415,0,-.182,.601,0,-.178,.610,0,.031,.415,0,-.178,.610,0,-.174,.619,0,.096,.498,0,-.178,.610,0,.096,.498,0,.031,.415,0,-.174,.619,0,-.169,.627,0,.096,.498,0,-.169,.627,0,-.163,.635,0,.096,.498,0,-.163,.635,0,-.157,.642,0,.096,.498,0,-.157,.642,0,-.151,.650,0,.096,.498,0,-.151,.650,0,-.145,.657,0,.096,.498,0,-.145,.657,0,-.138,.664,0,.096,.498,0,-.138,.664,0,-.131,.670,0,.096,.498,0,-.131,.670,0,-.123,.676,0,.096,.498,0,-.123,.676,0,-.116,.682,0,.096,.498,0,-.116,.682,0,-.108,.688,0,.096,.498,0,-.108,.688,0,-.099,.693,0,.096,.498,0,-.099,.693,0,-.091,.697,0,.096,.498,0,-.091,.697,0,-.082,.701,0,.096,.498,0,-.082,.701,0,-.073,.705,0,.096,.498,0,-.073,.705,0,-.064,.709,0,.096,.498,0,-.064,.709,0,-.055,.712,0,.096,.498,0,-.055,.712,0,-.045,.714,0,.096,.498,0,-.045,.714,0,-.035,.716,0,.096,.498,0,-.035,.716,0,-.025,.717,0,.096,.498,0,-.025,.717,0,-.015,.719,0,.096,.498,0,-.015,.719,0,-.005,.719,0,.096,.498,0,-.005,.719,0,-.000,.719,0,.096,.498,0,-.000,.719,0,.005,.719,0,.096,.498,0,.005,.719,0,.015,.719,0,.096,.498,0,.015,.719,0,.025,.717,0,.096,.498,0,.025,.717,0,.035,.716,0,.096,.498,0,.035,.716,0,.045,.714,0,.096,.498,0,.045,.714,0,.054,.712,0,.096,.498,0,.054,.712,0,.064,.709,0,.096,.498,0,.064,.709,0,.073,.705,0,.096,.498,0,.073,.705,0,.082,.701,0,.096,.498,0,.082,.701,0,.091,.697,0,.096,.498,0,.091,.697,0,.099,.693,0,.096,.498,0,.099,.693,0,.107,.688,0,.096,.498,0,.107,.688,0,.115,.682,0,.096,.498,0,.115,.682,0,.123,.676,0,.096,.498,0,.123,.676,0,.131,.670,0,.096,.498,0,.131,.670,0,.138,.664,0,.096,.498,0,.138,.664,0,.144,.657,0,.096,.498,0,.144,.657,0,.151,.650,0,.096,.498,0,.151,.650,0,.157,.642,0,.096,.498,0,.157,.642,0,.163,.635,0,.096,.498,0,.163,.635,0,.168,.627,0,.096,.498,0,.168,.627,0,.173,.619,0,.096,.498,0,.173,.619,0,.178,.610,0,.096,.498,0,.178,.610,0,.182,.601,0,.096,.498,0,.182,.601,0,.186,.592,0,.096,.498,0,.186,.592,0,.189,.583,0,.096,.498,0,.189,.583,0,.192,.574,0,.096,.498,0,.192,.574,0,.195,.564,0,.096,.498,0,.195,.564,0,.197,.554,0,.096,.498,0,.197,.554,0,.198,.544,0,.096,.498,0,.198,.544,0,.199,.534,0,.096,.498,0,.199,.534,0,.200,.524,0,.096,.498,0,.200,.524,0,.200,.519,0,.096,.498,0,.200,.519,0,.200,.513,0,.096,.498,0,.200,.513,0,.199,.502,0,.096,.498,0,.199,.502,0,.198,.490,0,.096,.498,0,.198,.490,0,.196,.479,0,.096,.498,0,.196,.479,0,.193,.469,0,.096,.498,0,.193,.469,0,.190,.458,0,.096,.498,0,.190,.458,0,.187,.448,0,.096,.498,0,.187,.448,0,.183,.438,0,.096,.498,0,.183,.438,0,.181,.433,0,.096,.498,0,.031,.415,0,.112,.353,0,.106,.349,0,.031,.415,0,.106,.349,0,.093,.342,0,.031,.415,0,.093,.342,0,.080,.335,0,.031,.415,0,.080,.335,0,.066,.330,0,.031,.415,0,.066,.330,0,.052,.325,0,.031,.415,0,.052,.325,0,.037,.322,0,.031,.415,0,.037,.322,0,.022,.320,0,.031,.415,0,.022,.320,0,.007,.318,0,.031,.415,0,.007,.318,0,-.000,.318,0,.008,-.971,0,-.027,-.916,0,.027,-.916,0,.008,-.971,0,-.009,-.971,0,-.027,-.916,0,.008,-.971,0,-.000,-1,0,-.009,-.971,0,.027,-.916,0,-.046,-.864,0,.045,-.864,0,.027,-.916,0,-.027,-.916,0,-.046,-.864,0,.045,-.864,0,-.064,-.814,0,.064,-.814,0,.045,-.864,0,-.046,-.864,0,-.064,-.814,0,.064,-.814,0,-.083,-.767,0,.083,-.767,0,.064,-.814,0,-.064,-.814,0,-.083,-.767,0,.083,-.767,0,-.102,-.723,0,.102,-.723,0,.083,-.767,0,-.083,-.767,0,-.102,-.723,0,.102,-.723,0,-.121,-.680,0,.121,-.680,0,.102,-.723,0,-.102,-.723,0,-.121,-.680,0,.121,-.680,0,-.141,-.640,0,.140,-.640,0,.121,-.680,0,-.121,-.680,0,-.141,-.640,0,.140,-.640,0,-.160,-.602,0,.160,-.602,0,.140,-.640,0,-.141,-.640,0,-.160,-.602,0,.160,-.602,0,-.179,-.565,0,.179,-.565,0,.160,-.602,0,-.160,-.602,0,-.179,-.565,0,.606,.078,0,.359,.297,0,.615,.098,0,.615,.098,0,.359,.297,0,.623,.118,0,.623,.118,0,.359,.297,0,.631,.138,0,.631,.138,0,.359,.297,0,.638,.159,0,.638,.159,0,.359,.297,0,.644,.179,0,.644,.179,0,.359,.297,0,.649,.199,0,.649,.199,0,.359,.297,0,.654,.220,0,.654,.220,0,.359,.297,0,.658,.240,0,.658,.240,0,.359,.297,0,.661,.261,0,.661,.261,0,.359,.297,0,.663,.281,0,.663,.281,0,.359,.297,0,.665,.302,0,.665,.302,0,.359,.297,0,.666,.322,0,.666,.322,0,.359,.297,0,.666,.342,0,.666,.342,0,.359,.297,0,.665,.363,0,.665,.363,0,.359,.297,0,.664,.383,0,.664,.383,0,.359,.297,0,.662,.403,0,.662,.403,0,.359,.297,0,.660,.423,0,.660,.423,0,.359,.297,0,.657,.443,0,-.558,-.008,0,-.306,-.111,0,-.541,-.037,0,-.541,-.037,0,-.306,-.111,0,-.523,-.064,0,-.523,-.064,0,-.306,-.111,0,-.506,-.091,0,-.506,-.091,0,-.306,-.111,0,-.487,-.118,0,-.487,-.118,0,-.306,-.111,0,-.469,-.144,0,-.469,-.144,0,-.306,-.111,0,-.441,-.182,0",
h:{mousePos:2,mainCol:3},O:"attribute vec2 pos;\nuniform float time;\nuniform vec2 mousePos;\nvoid main()\n{\ngl_Position = vec4(pos.x,pos.y,0.0,1.0);\n}",H:"precision mediump float;\nuniform vec3 mainCol;\nvoid main()\n{\ngl_FragColor = vec4(mainCol.r, mainCol.g, mainCol.b, 1.0);\n}",b:function(){this.element=e.createElement("canvas");this.element.className="fill";this.u=this.element.getContext("webgl");this.uniformValues=this.d={};this.g={};this.W={};this.d.mainCol=new Float32Array("green"==this.a.s&&
[132/255,187/255,37/255]||[1,1,1]);this.D=null;this.m=this.m.bind(this);this.j=this.j.bind(this);this.o=this.o.bind(this);this.J instanceof Function&&this.J();this.V();this.a.element.appendChild(this.element);this.a.element.addEventListener("mousemove",this.o);this.a.element.addEventListener("touchmove",this.o);this.m()},c:function(){this.element.width=this.a.element.clientWidth*this.a.p;this.element.height=this.a.element.clientHeight*this.a.p;this.m()},o:function(a){a=a.touches&&a.touches[0]||a;
var b=a.target.getBoundingClientRect();this.d.mousePos[0]=2*((a.pageX-b.left-this.a.element.clientWidth/2)/this.a.element.clientWidth);this.d.mousePos[1]=2*((this.a.element.clientHeight/2-(a.pageY-b.top))/this.a.element.clientHeight)},V:function(){var a=this.u;this.f=a.createProgram();this.I(this.f,a.VERTEX_SHADER,this.O);this.I(this.f,a.FRAGMENT_SHADER,this.H);a.linkProgram(this.f);this.g.time=a.getUniformLocation(this.f,"time");for(var b in this.h)this.g[b]=a.getUniformLocation(this.f,b),this.g[b]?
(this.d[b]||(this.d[b]=new Float32Array(this.h[b])),this.W[b]=[this.g].concat(Array(this.h[b]))):console.warn("Uniform ["+b+"] not specified or unused");this.M=a.createBuffer();a.bindBuffer(a.ARRAY_BUFFER,this.M);a.bufferData(a.ARRAY_BUFFER,this.P,a.STATIC_DRAW)},I:function(a,b,c){var d=this.u;b=d.createShader(b);d.shaderSource(b,c);d.compileShader(b);d.getShaderParameter(b,d.COMPILE_STATUS)?(d.attachShader(a,b),d.deleteShader(b)):(console.error(d.getShaderInfoLog(b)),d.deleteProgram(a))},m:function(){cancelAnimationFrame(this.D);
this.D=requestAnimationFrame(this.m);this.j()},j:function(){var a=this.u,b=Math.min(this.element.width,this.element.height);1<this.element.height/this.element.width&&(b*=this.a.F);b>this.element.height&&(b=this.element.height);this.N instanceof Function&&this.N();a.viewport((this.element.width-b)/2,(this.element.height-b)/2,b,b);a.useProgram(this.f);a.uniform1f(this.g.time,performance.now());for(var c in this.h)this.g[c]&&a["uniform"+this.h[c]+"f"].apply(a,[this.g[c]].concat(Array.prototype.slice.call(this.d[c])));
b=a.getAttribLocation(this.f,"pos");a.bindBuffer(a.ARRAY_BUFFER,this.M);a.vertexAttribPointer(b,3,a.FLOAT,!1,0,0);a.enableVertexAttribArray(b);a.drawArrays(a.TRIANGLES,0,this.P.length/3);a.disableVertexAttribArray(b)}};c.i.prototype.P=new Float32Array(c.i.prototype.X.split(","));c.webgl=c.i;c["webgl-freak"]=function(a){this.a=a;this.r=0};f=c["webgl-freak"].prototype=Object.create(c.i.prototype);f.h.amp=1;f.O="attribute vec2 pos;\nuniform float time;\nuniform float amp;\nuniform vec2 mousePos;\nvarying vec2 mousePosF;\nvarying float ampF;\nvarying vec3 position;\nvoid main()\n{\nposition = vec3(pos*(1.-amp),0.) + amp * vec3(pos.x*mousePos.x+pos.x*sin((pos.y*time)/200.),-mousePos.y*pos.y+pos.y*cos(pos.x*time/1000.),pos.y*cos(time/2000.));\nmousePosF = mousePos;\nampF = amp;\ngl_Position = vec4(position,1.0);\n}";
f.H="precision mediump float;\nuniform vec3 mainCol;\nvarying float ampF;\nvarying vec2 mousePosF;\nvarying vec3 position;\nvoid main()\n{\nfloat mouseDist = length(mousePosF);\nvec3 color = mainCol;\ncolor.r = (1.-ampF) * mainCol.r + ampF * (mainCol.r + mouseDist * 1. + position.x);\ncolor.g = (1.-ampF) * mainCol.g + ampF * (mainCol.g + position.z);\ncolor.b = (1.-ampF) * mainCol.b + ampF * (mainCol.b + position.y);\ngl_FragColor = vec4(color , 1.0);\n}";f.J=function(){console.log("imod!");this.a.element.addEventListener("mouseenter",
this.R.bind(this));this.a.element.addEventListener("mouseleave",this.T.bind(this))};f.R=function(){this.r=performance.now()};f.T=function(){this.r=0;this.d.amp[0]=0};f.N=function(){this.r&&(this.d.amp[0]=Math.min(1E3,(performance.now()-this.r)/3)/1E3)}})(window,document);
