import{c as r,j as e}from"./index-BqEvqJXo.js";import{S as i}from"./ServiceDetailLayout-Roox_Gu9.js";import"./shield-check-CCn18-0z.js";import"./ruler-Dp1rSS9G.js";import"./droplet-DBSuvbE_.js";import"./ServicePageHeader-PXt-wsCp.js";import"./CallToAction-DFA01yjO.js";import"./arrow-right-BtOoZHHT.js";import"./circle-check-DMc_rYgW.js";/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s=[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]],a=r("cooking-pot",s);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n=[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]],l=r("paint-roller",n);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=[["path",{d:"M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z",key:"e79jfc"}],["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}]],m=r("palette",c);/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]],h=r("smartphone",d),x=[{icon:m,title:"Hard Finishes",imageUrl:"https://source.unsplash.com/random/800x600?marble-texture",items:["Italian marble, anti-skid vitrified","Gypsum, acoustic, & LED-integrated False Ceilings","Plastering & Waterproofing"]},{icon:l,title:"Soft Finishes",imageUrl:"https://source.unsplash.com/random/800x600?wooden-floor",items:["Wooden Flooring (Herringbone, chevron patterns)","3D, metallic, & eco-friendly Wallpaper","Texture painting & murals"]},{icon:h,title:"Glass & Smart Solutions",imageUrl:"https://source.unsplash.com/random/800x600?smart-home",items:["Toughened Glass (Sliding doors, shower cubicles)","Privacy & solar control Window Films","Motorized & blackout Blinds/Curtains"]},{icon:a,title:"Bespoke Furniture",imageUrl:"https://source.unsplash.com/random/800x600?modern-kitchen",items:["Modular Kitchens (Smart storage, quartz tops)","Office Carpentry & Ergonomic workstations"]}];function u(){return e.jsx("section",{className:"bg-white py-20 md:py-28 dark:bg-gray-950",children:e.jsxs("div",{className:"container mx-auto px-6",children:[e.jsxs("div",{className:"mx-auto max-w-3xl text-center",children:[e.jsx("h2",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white",children:"Aesthetic Mastery"}),e.jsx("p",{className:"mt-4 text-lg text-gray-600 leading-8 dark:text-gray-400",children:"From foundations to finishes, our turnkey interior solutions transform empty shells into iconic, ready-to-use spaces."})]}),e.jsx("div",{className:`mx-auto mt-16 grid max-w-none grid-cols-1 gap-8 
                     md:grid-cols-2 lg:max-w-none`,children:x.map(t=>e.jsxs("div",{className:`relative flex flex-col justify-end rounded-2xl 
                         border border-gray-200 overflow-hidden p-8
                         min-h-[450px]
                         dark:border-gray-800`,children:[e.jsx("img",{src:t.imageUrl,alt:t.title,className:`absolute inset-0 h-full w-full object-cover 
                           transition-all duration-500 group-hover:scale-105`}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"}),e.jsxs("div",{className:"relative z-10",children:[e.jsx(t.icon,{className:"h-10 w-10 text-blue-400"}),e.jsx("h3",{className:"mt-4 text-2xl font-bold text-white",children:t.title}),e.jsx("ul",{className:"mt-4 space-y-2",children:t.items.map(o=>e.jsx("li",{className:"flex text-sm text-gray-300",dangerouslySetInnerHTML:{__html:`✓ ${o}`}},o))})]})]},t.title))})]})})}function w(){return e.jsx(i,{serviceId:"interiors",headerTitle:"Premium Interiors",headerDesc:"Turnkey luxury fit-outs and bespoke furniture solutions.",headerImage:"https://picsum.photos/1920/1080?interior",children:e.jsx(u,{})})}export{w as default};
