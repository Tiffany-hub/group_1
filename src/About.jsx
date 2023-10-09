import React from "react";
import "./About.css";
import ArcticMONKEYS from '/home/user/development/test/Grabzzz/src/assets/ARCTIC MONKEYS 19 © stefano masselli 1.png'
import Rectangle13 from '/home/user/development/test/Grabzzz/src/assets/Rectangle 13.png'
import ElementFestival from '/home/user/development/test/Grabzzz/src/assets/808 Festival 2.png'
import Vector from '/home/user/development/test/Grabzzz/src/assets/Vector.png'
import Crowd from '/home/user/development/test/Grabzzz/src/assets/HD wallpaper_ silhouette of people inside stage, human, person, crowd, concert 1.png'

export default function App() {
  return (
    <div className="bg-[#e3e7f3] flex flex-row justify-center w-full">
      <div className="bg-[#e3e7f3] overflow-hidden w-[1440px] h-[1048px] relative">
        <div className="absolute w-[1440px] h-[422px] top-[72px] left-0 bg-cover" style={{ backgroundImage: `url(${Crowd})`, backgroundPosition: '50% 50%' }}>
          <div className="absolute w-[1252px] h-[192px] top-[87px] left-[94px] bg-[#d9d9d9b2]" />
          <div className="absolute w-[884px] h-[48px] top-[98px] left-[278px] bg-[#bc9595b2]" />
          <p className="absolute h-[39px] top-[102px] left-[356px] font-bold text-white text-[24px] tracking-[0] leading-[normal]">
            Welcome to Grabzzz- Your Gateway to Unforgettable Experiences!
          </p>
          <p className="absolute w-[1087px] top-[151px] left-[179px] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
            Enabling unforgettable memories through seamless access to extraordinary <br /> global events.
          </p>
          <div className="absolute w-[171px] h-[53px] top-[9px] left-[854px] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
            <button className="button">Products</button>
          </div>
          <div className="absolute w-[127px] h-[48px] top-[12px] left-[1108px] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
            <button className="button">About</button>
          </div>
          <img className="absolute w-[43px] h-[35px] top-[21px] left-[1286px]" alt="Vector" src={Vector} />
          <div className="absolute h-[38px] top-[498px] left-[4px] font-bold text-[#bc9595] text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
            About Grabzzz
          </div>
          <img
            className="absolute w-[132px] h-[30px] top-[2884px] left-[-3242px]"
            alt="Rectangle"
            src={Rectangle13}
          />
          <img
            className="absolute w-[182px] h-[240px] top-[546px] left-[4px] object-cover"
            alt="Arctic MONKEYS"
            src={ArcticMONKEYS}
          />
          <img
            className="absolute w-[214px] h-[240px] top-[546px] left-[223px] object-cover"
            alt="Element festival"
            src={ElementFestival}
          />
          <p className="absolute w-[930px] top-[568px] left-[478px] font-medium text-black text-[24px] tracking-[0] leading-[normal]">
            At Grabzzz, we believe that every moment is an opportunity for an unforgettable experience. We are here to connect you with the hottest tickets to the most sought-after events, from electrifying concerts to glamorous award shows. Our platform is designed with a singular purpose: to make sure you never miss out on the events that matter most to you.
          </p>
          <div className="absolute w-[178px] top-[790px] left-[13px] font-bold text-[#bc9595] text-[32px] tracking-[0] leading-[normal]">
            Our Vision
          </div>
          <p className="absolute w-[858px] top-[833px] left-[10px] font-semibold text-black text-[20px] tracking-[0] leading-[normal]">
            Our vision is to become the go-to destination for event enthusiasts worldwide. We strive to offer an unparalleled level of access to a diverse range of events, ensuring that everyone can find their perfect experience, whether it's front-row at a fashion show, cheering for your favorite artist, or rubbing shoulders with the stars at a red-carpet event. We envision a world where Grabzzz is synonymous with extraordinary moments.
          </p>
          <p className="absolute w-[280px] h-[58px] top-[9px] left-[13px] font-normal text-[#6881cd] text-[96px] tracking-[0] leading-[normal] whitespace-nowrap">
            <span className="font-normal text-[#6881cd] text-[96px] tracking-[0]">G</span>
            <span className="font-bold text-[40px]">RABZZZ</span>
          </p>
        </div>
      </div>
    </div>
  );
}



// import React from "react";
// import "./About.css";
// import ArcticMONKEYS from '/home/user/development/test/Grabzzz/src/assets/ARCTIC MONKEYS 19 © stefano masselli 1.png'
// import Rectangle13 from '/home/user/development/test/Grabzzz/src/assets/Rectangle 13.png'
// import ElementFestival from '/home/user/development/test/Grabzzz/src/assets/808 Festival 2.png'
// import Vector from '/home/user/development/test/Grabzzz/src/assets/Vector.png'
// import Crowd from '/home/user/development/test/Grabzzz/src/assets/HD wallpaper_ silhouette of people inside stage, human, person, crowd, concert 1.png'


// export default function App() {
//   return (
//     <div className="bg-[#e3e7f3] flex flex-row justify-center w-full">
//       <div className="bg-[#e3e7f3] overflow-hidden w-[1440px] h-[1048px] relative">
//         <div className="absolute w-[1440px] h-[422px] top-[72px] left-0 bg-cover" style={{ backgroundImage: `url(${Crowd})`, backgroundPosition: '50% 50%' }}>
//           <div className="absolute w-[1252px] h-[192px] top-[87px] left-[94px] bg-[#d9d9d9b2]" />
//           <div className="absolute w-[884px] h-[48px] top-[98px] left-[278px] bg-[#bc9595b2]" />
//           <p className="absolute h-[39px] top-[102px] left-[356px] font-bold text-white text-[24px] tracking-[0] leading-[normal]">
//             Welcome to Grabzzz- Your Gateway to Unforgettable Experiences!
//           </p>
//           <p className="absolute w-[1087px] top-[151px] left-[179px] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
//             Enabling unforgettable memories through seamless access to extraordinary <br /> global events.
//           </p>
//         </div>
//         <div className="absolute w-[171px] h-[53px] top-[9px] left-[854px] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
//           Products
//         </div>
//         <div className="absolute w-[127px] h-[48px] top-[12px] left-[1108px] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
//           About
//         </div>
//         <img className="absolute w-[43px] h-[35px] top-[21px] left-[1286px]" alt="Vector" src={Vector} />
//         <div className="absolute h-[38px] top-[498px] left-[4px] font-bold text-[#bc9595] text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
//           About Grabzzz
//         </div>
//         <img
//           className="absolute w-[132px] h-[30px] top-[2884px] left-[-3242px]"
//           alt="Rectangle"
//           src={Rectangle13}
//         />
//         <img
//           className="absolute w-[182px] h-[240px] top-[546px] left-[4px] object-cover"
//           alt="Arctic MONKEYS"
//           src={ArcticMONKEYS}
//         />
//         <img
//           className="absolute w-[214px] h-[240px] top-[546px] left-[223px] object-cover"
//           alt="Element festival"
//           src={ElementFestival}
//         />
//         <p className="absolute w-[930px] top-[568px] left-[478px] font-medium text-black text-[24px] tracking-[0] leading-[normal]">
//           At Grabzzz, we believe that every moment is an opportunity for an unforgettable experience. We are here to connect you with the hottest tickets to the most sought-after events, from electrifying concerts to glamorous award shows. Our platform is designed with a singular purpose: to make sure you never miss out on the events that matter most to you.
//         </p>
//         <div className="absolute w-[178px] top-[790px] left-[13px] font-bold text-[#bc9595] text-[32px] tracking-[0] leading-[normal]">
//           Our Vision
//         </div>
//         <p className="absolute w-[858px] top-[833px] left-[10px] font-semibold text-black text-[20px] tracking-[0] leading-[normal]">
//           Our vision is to become the go-to destination for event enthusiasts worldwide. We strive to offer an unparalleled level of access to a diverse range of events, ensuring that everyone can find their perfect experience, whether it`s front-row at a fashion show, cheering for your favorite artist, or rubbing shoulders with the stars at a red-carpet event. We envision a world where Grabzzz is synonymous with extraordinary moments.
//         </p>
//         <p className="absolute w-[280px] h-[58px] top-[9px] left-[13px] font-normal text-[#6881cd] text-[96px] tracking-[0] leading-[normal] whitespace-nowrap">
//           <span className="font-normal text-[#6881cd] text-[96px] tracking-[0]">G</span>
//           <span className="font-bold text-[40px]">RABZZZ</span>
//         </p>
//       </div>
//     </div>
//   );
// }



// // import React from "react";
// // import ArcticMONKEYS from '/home/user/development/test/Grabzzz/src/assets/ARCTIC MONKEYS 19 © stefano masselli 1.png'
// // import Rectangle13 from '/home/user/development/test/Grabzzz/src/assets/Rectangle 13.png'
// // import ElementFestival from '/home/user/development/test/Grabzzz/src/assets/808 Festival 2.png'
// // import Vector from '/home/user/development/test/Grabzzz/src/assets/Vector.png'

// // export const App = () => {
// //   return (
// //     <div>
// //       <div>
// //         Welcome to Grabzzz - Your Gateway to Unforgettable Experiences!
// //       </div>
// //       <div>
// //         Enabling unforgettable memories through seamless access to extraordinary <br /> global events.
// //       </div>
// //       <div>
// //         Products
// //       </div>
// //       <div>
// //         About
// //       </div>
// //       <img alt="Vector" src={Vector} />
// //       <div>
// //         About Grabzzz
// //       </div>
// //       <img
// //         alt="Rectangle"
// //         src={Rectangle13}
// //       />
// //       <img
// //         alt="Arctic MONKEY"
// //         src={ArcticMONKEYS}
// //       />
// //       <img
// //         alt="Element Festival"
// //         src={ElementFestival}
// //       />
// //       <div>
// //         At Grabzzz, we believe that every moment is an opportunity for an unforgettable experience. We're here to
// //         connect you with the hottest tickets to the most sought-after events, from electrifying concerts to glamorous
// //         award shows. Our platform is designed with a singular purpose: to make sure you never miss out on the events
// //         that matter most to you.
// //       </div>
// //       <div>
// //         Our Vision
// //       </div>
// //       <div>
// //         Our vision is to become the go-to destination for event enthusiasts worldwide. We strive to offer an
// //         unparalleled level of access to a diverse range of events, ensuring that everyone can find their perfect
// //         experience, whether it's front-row at a fashion show, cheering for your favorite artist, or rubbing
// //         shoulders with the stars at a red-carpet event. We envision a world where Grabzzz is synonymous with
// //         extraordinary moments.
// //       </div>
// //       <div>
// //         <span>G</span>
// //         <span>RABZZZ</span>
// //       </div>
// //     </div>
// //   );
// // };



// // import React from "react";
// // import ArcticMONKEYS from '/home/user/development/test/Grabzzz/src/assets/ARCTIC MONKEYS 19 © stefano masselli 1.png'
// // import Rectangle13 from '/home/user/development/test/Grabzzz/src/assets/Rectangle 13.png'
// // import ElementFestival from '/home/user/development/test/Grabzzz/src/assets/808 Festival 2.png'
// // import Vector from '/home/user/development/test/Grabzzz/src/assets/Vector.png'
// // // import backgroundImage from '/home/user/development/test/Grabzzz/src/assets/HD wallpaper_ silhouette of people inside stage, human, person, crowd, concert 1.png'
// // // <img src={reactLogo} className="logo react" alt="React logo" />

// // export const App = () => {
// //   const divStyle = {
// //     backgroundImage: `url(${Rectangle13})`, // Set the background image using inline styles
// //   };

// //   return (
// //     <div className="flex flex-row justify-center w-full">
// //       <div className="overflow-hidden w-[1440px] h-[1048px] relative">
// //         <div className="absolute w-[1440px] h-[422px] top-[72px] left-0 bg-cover bg-center" style={divStyle}>
// //           <div className="absolute w-[1252px] h-[192px] top-[87px] left-[94px] bg-gray-300" />
// //           <div className="absolute w-[884px] h-[48px] top-[98px] left-[278px] bg-[#bc9595b2]" />
// //           <p className="absolute h-[39px] top-[102px] left-[356px] font-bold text-white text-[24px]">
// //             Welcome to Grabzzz - Your Gateway to Unforgettable Experiences!
// //           </p>
// //           <p className="absolute w-[1087px] top-[151px] left-[179px] font-normal text-black text-[24px]">
// //             Enabling unforgettable memories through seamless access to extraordinary <br /> global events.
// //           </p>
// //         </div>
// //         <div className="absolute w-[171px] h-[53px] top-[9px] left-[854px] font-normal text-black text-[32px]">
// //           Products
// //         </div>
// //         <div className="absolute w-[127px] h-[48px] top-[12px] left-[1108px] font-normal text-black text-[32px]">
// //           About
// //         </div>
// //         <img className="absolute w-[43px] h-[35px] top-[21px] left-[1286px]" alt="Vector" src={Vector}/>
// //         <div className="absolute h-[38px] top-[498px] left-[4px] font-bold text-[#bc9595] text-[32px] whitespace-nowrap">
// //           About Grabzzz
// //         </div>
// //         <img
// //           className="absolute w-[132px] h-[30px] top-[2884px] left-[-3242px]"
// //           alt="Rectangle"
// //           src={Rectangle13}
// //         />
// //         <img
// //           className="absolute w-[182px] h-[240px] top-[546px] left-[4px] object-cover"
// //           alt="Arctic MONKEY"
// //           src={ArcticMONKEYS}
// //         />
// //         <img
// //           className="absolute w-[214px] h-[240px] top-[546px] left-[223px] object-cover"
// //           alt="Element festival"
// //           src={ElementFestival}
// //         />
// //         <p className="absolute w-[930px] top-[568px] left-[478px] font-medium text-black text-[24px]">
// //           At Grabzzz, we believe that every moment is an opportunity for an unforgettable experience. We're here to
// //           connect you with the hottest tickets to the most sought-after events, from electrifying concerts to glamorous
// //           award shows. Our platform is designed with a singular purpose: to make sure you never miss out on the events
// //           that matter most to you.
// //         </p>
// //         <div className="absolute w-[178px] top-[790px] left-[13px] font-bold text-[#bc9595] text-[32px]">
// //           Our Vision
// //         </div>
// //         <p className="absolute w-[858px] top-[833px] left-[10px] font-semibold text-black text-[20px]">
// //           Our vision is to become the go-to destination for event enthusiasts worldwide. We strive to offer an
// //           unparalleled level of access to a diverse range of events, ensuring that everyone can find their perfect
// //           experience, whether it's front-row at a fashion show, cheering for your favorite artist, or rubbing
// //           shoulders with the stars at a red-carpet event. We envision a world where Grabzzz is synonymous with
// //           extraordinary moments.
// //         </p>
// //         <p className="absolute w-[280px] h-[58px] top-[9px] left-[13px] font-normal text-[#6881cd] text-[96px] whitespace-nowrap">
// //           <span className="font-normal text-[#6881cd] text-[96px]">G</span>
// //           <span className="font-bold text-[40px]">RABZZZ</span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };


// // import React from 'react';
// // import './App.css'

// // export const App = () => {
// //   return (
// //     <div className="bg-[#e3e7f3] flex flex-row justify-center w-full">
// //       <div className="bg-[#e3e7f3] overflow-hidden w-[1440px] h-[1048px] relative">
// //         <div className="absolute w-[1440px] h-[422px] top-[72px] left-0 bg-[url(HD-wallpaper-silhouette-of-people-inside-stage-human-person-crowd-concert-1.png)] bg-cover bg-[50%_50%]">
// //           <div className="absolute w-[1252px] h-[192px] top-[87px] left-[94px] bg-[#d9d9d9b2]" />
// //           <div className="absolute w-[884px] h-[48px] top-[98px] left-[278px] bg-[#bc9595b2]" />
// //           <p className="absolute h-[39px] top-[102px] left-[356px] font-bold text-white text-[24px] tracking-[0] leading-[normal]">
// //             Welcome to Grabzzz - Your Gateway to Unforgettable Experiences!
// //           </p>
// //           <p className="absolute w-[1087px] top-[151px] left-[179px] font-normal text-black text-[24px] tracking-[0] leading-[normal]">
// //             Enabling unforgettable memories through seamless access to extraordinary <br /> global events.
// //           </p>
// //         </div>
// //         <div className="absolute w-[171px] h-[53px] top-[9px] left-[854px] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
// //           Products
// //         </div>
// //         <div className="absolute w-[127px] h-[48px] top-[12px] left-[1108px] font-normal text-black text-[32px] tracking-[0] leading-[normal]">
// //           About
// //         </div>
// //         <img className="absolute w-[43px] h-[35px] top-[21px] left-[1286px]" alt="Vector" src="vector.svg" />
// //         <div className="absolute h-[38px] top-[498px] left-[4px] font-bold text-[#bc9595] text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
// //           About Grabzzz
// //         </div>
// //         <img
// //           className="absolute w-[132px] h-[30px] top-[2884px] left-[-3242px]"
// //           alt="Rectangle"
// //           src="rectangle-13.png"
// //         />
// //         <img
// //           className="absolute w-[182px] h-[240px] top-[546px] left-[4px] object-cover"
// //           alt="Arctic MONKEYS"
// //           src="ARCTIC-MONKEYS-19-stefano-masselli-1.svg"
// //         />
// //         <img
// //           className="absolute w-[214px] h-[240px] top-[546px] left-[223px] object-cover"
// //           alt="Element festival"
// //           src="808-festival-2.png"
// //         />
// //         <p className="absolute w-[930px] top-[568px] left-[478px] font-medium text-black text-[24px] tracking-[0] leading-[normal]">
// //           At Grabzzz, we believe that every moment is an opportunity for an unforgettable experience. We're here to
// //           connect you with the hottest tickets to the most sought-after events, from electrifying concerts to glamorous
// //           award shows. Our platform is designed with a singular purpose: to make sure you never miss out on the events
// //           that matter most to you.
// //         </p>
// //         <div className="absolute w-[178px] top-[790px] left-[13px] font-bold text-[#bc9595] text-[32px] tracking-[0] leading-[normal]">
// //           Our Vision
// //         </div>
// //         <p className="absolute w-[858px] top-[833px] left-[10px] font-semibold text-black text-[20px] tracking-[0] leading-[normal]">
// //           Our vision is to become the go-to destination for event enthusiasts worldwide. We strive to offer an
// //           unparalleled level of access to a diverse range of events, ensuring that everyone can find their perfect
// //           experience, whether it's front-row at a fashion show, cheering for your favorite artist, or rubbing
// //           shoulders with the stars at a red-carpet event. We envision a world where Grabzzz is synonymous with
// //           extraordinary moments.
// //         </p>
// //         <p className="absolute w-[280px] h-[58px] top-[9px] left-[13px] font-normal text-[#6881cd] text-[96px] tracking-[0] whitespace-nowrap">
// //           <span className="font-normal text-[#6881cd] text-[96px] tracking-[0]">G</span>
// //           <span className="font-bold text-[40px]">RABZZZ</span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };


// // function App() {
// //   return (
// //     <div className="container">
// //       <h2>Welcome to Grabzzz - Your Gateway to Unforgettable Experiences!</h2>
// //       <p>
// //         Enabling unforgettable memories through seamless access to extraordinary global events.
// //       </p>
// //       <h3>Products</h3>
// //       <h3>About</h3>
// //       <img className="vector" src="/vite-project/src/img/Vector.png" alt="Vector" />
// //       <h3>About Grabzzz</h3>
// //       <img className="img" src="img/Rectangle-13.png" alt="Image" />
// //       <img
// //         className="ARCTIC-MONKEYS"
// //         src="./img/ARCTIC MONKEYS 19 © stefano masselli 1.png"
// //         alt="Arctic Monkeys"
// //       />
// //       <img
// //         className="element-festival"
// //         src="808 Festival 2.png"
// //         alt="Festival"
// //       />
// //       <p>
// //         At Grabzzz, we believe that every moment is an opportunity for an unforgettable experience. We're here to connect you with the hottest tickets to the most sought-after events, from electrifying concerts to glamorous award shows. Our platform is designed with a singular purpose: to make sure you never miss out on the events that matter most to you.
// //       </p>
// //       <h3>Our Vision</h3>
// //       <p>
// //         Our vision is to become the go-to destination for event enthusiasts worldwide. We strive to offer an unparalleled level of access to a diverse range of events, ensuring that everyone can find their perfect experience, whether it's front-row at a fashion show, cheering for your favorite artist, or rubbing shoulders with the stars at a red-carpet event. We envision a world where Grabzzz is synonymous with extraordinary moments.
// //       </p>
// //       <h1>GRABZZZ</h1>
// //     </div>
// //   );
// // }

// // export default App;


// // import React from 'react';
// // // import reactLogo from './assets/react.svg'
// // // import Vector from './assets/Vector.png'
// // // import './img/Vector.png';
// // // import './img/808 Festival 2.png';
// // // import './img/ARCTIC MONKEYS 19 © stefano masselli 1.png';
// // // import './img/HD wallpaper_ silhouette of people inside stage, human, person, crowd, concert 1'
// // // import 'tailwindcss/tailwind.css'; 

// // function Welcome() {
// //   return (
// //     <div className="desktop bg-green-100">
// //       <div className="div">
// //         <div className="overlap-group">
// //           <div className="rectangle bg-blue-500"></div>
// //           <div className="rectangle-2 bg-red-500"></div>
// //           <p className="text-wrapper text-xl text-gray-800">
// //             Welcome to Grabzzz - Your Gateway to Unforgettable Experiences!
// //           </p>
// //           <p className="enabling text-sm text-gray-600">
// //             Enabling unforgettable memories through seamless access to extraordinary <br />global events.
// //           </p>
// //         </div>
// //         <div className="text-wrapper-2 text-lg text-indigo-600">Products</div>
// //         <div className="text-wrapper-3 text-lg text-indigo-600">About</div>
// //         <img className="vector" src="/vite-project/src/img/Vector.png" alt="Vector" />
// //         <div className="text-wrapper-4 text-lg text-indigo-600">About Grabzzz</div>
// //         <img className="img" src="img/Rectangle-13.png" alt="Image" />
// //         <img
// //           className="ARCTIC-MONKEYS"
// //           src="./img/ARCTIC MONKEYS 19 © stefano masselli 1.png"
// //           alt="Arctic Monkeys"
// //         />
// //         <img
// //           className="element-festival"
// //           src="808 Festival 2.png"
// //           alt="Festival"
// //         />
// //         <p className="at-grabzzz-we text-lg text-gray-800">
// //           At Grabzzz, we believe that every moment is an opportunity for an unforgettable experience. We&#39;re here to
// //           connect you with the hottest tickets to the most sought-after events, from electrifying concerts to glamorous
// //           award shows. Our platform is designed with a singular purpose: to make sure you never miss out on the events
// //           that matter most to you.
// //         </p>
// //         <div className="text-wrapper-5 text-lg text-indigo-600">Our Vision</div>
// //         <p className="our-vision-is-to text-lg text-gray-800">
// //           Our vision is to become the go-to destination for event enthusiasts worldwide. We strive to offer an
// //           unparalleled level of access to a diverse range of events, ensuring that everyone can find their perfect
// //           experience, whether it&#39;s front-row at a fashion show, cheering for your favorite artist, or rubbing
// //           shoulders with the stars at a red-carpet event. We envision a world where Grabzzz is synonymous with
// //           extraordinary moments.
// //         </p>
// //         <p className="GRABZZZ text-4xl text-indigo-600">
// //           <span className="span text-red-600">G</span>
// //           <span className="text-wrapper-6 text-red-600">RABZZZ</span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Welcome;


// // function Welcome() {
// //   return (
// //     <div className="desktop">
// //       <div className="div">
// //         <div className="overlap-group">
// //           <div className="rectangle"></div>
// //           <div className="rectangle-2"></div>
// //           <p className="text-wrapper">
// //             Welcome to Grabzzz- Your Gateway to Unforgettable Experiences!
// //           </p>
// //           <p className="enabling">
// //             Enabling unforgettable memories through seamless access to extraordinary <br />global events.
// //           </p>
// //         </div>
// //         <div className="text-wrapper-2">Products</div>
// //         <div className="text-wrapper-3">About</div>
// //         <img className="vector" src="img/vector.svg" alt="Vector" />
// //         <div className="text-wrapper-4">About Grabzzz</div>
// //         <img className="img" src="img/rectangle-13.svg" alt="Image" />
// //         <img
// //           className="ARCTIC-MONKEYS"
// //           src="img/ARCTIC-MONKEYS-19-stefano-masselli-1.png"
// //           alt="Arctic Monkeys"
// //         />
// //         <img
// //           className="element-festival"
// //           src="img/808-festival-2.png"
// //           alt="Festival"
// //         />
// //         <p className="at-grabzzz-we">
// //           At Grabzzz, we believe that every moment is an opportunity for an unforgettable experience. We&#39;re here to
// //           connect you with the hottest tickets to the most sought-after events, from electrifying concerts to glamorous
// //           award shows. Our platform is designed with a singular purpose: to make sure you never miss out on the events
// //           that matter most to you.
// //         </p>
// //         <div className="text-wrapper-5">Our Vision</div>
// //         <p className="our-vision-is-to">
// //           Our vision is to become the go-to destination for event enthusiasts worldwide. We strive to offer an
// //           unparalleled level of access to a diverse range of events, ensuring that everyone can find their perfect
// //           experience, whether it&#39;s front-row at a fashion show, cheering for your favorite artist, or rubbing
// //           shoulders with the stars at a red-carpet event. We envision a world where Grabzzz is synonymous with
// //           extraordinary moments.
// //         </p>
// //         <p className="GRABZZZ">
// //           <span className="span">G</span>
// //           <span className="text-wrapper-6">RABZZZ</span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Welcome; // Export the component


// // import React from 'react'; // Import React

// // function Welcome() {
// //   return (
// //     <div className="desktop">
// //       <div className="div">
// //         <div className="overlap-group">
// //           <div className="rectangle"></div>
// //           <div className="rectangle-2"></div>
// //           <p className="text-wrapper">
// //             Welcome to Grabzzz- Your Gateway to Unforgettable Experiences!
// //           </p>
// //           <p className="enabling">
// //             Enabling unforgettable memories through seamless access to extraordinary <br />global events.
// //           </p>
// //         </div>
// //         <div className="text-wrapper-2">Products</div>
// //         <div className="text-wrapper-3">About</div>
// //         <img className="vector" src="img/vector.svg" alt="Vector" />
// //         <div className="text-wrapper-4">About Grabzzz</div>
// //         <img className="img" src="img/rectangle-13.svg" alt="Image" />
// //         <img
// //           className="ARCTIC-MONKEYS"
// //           src="img/ARCTIC-MONKEYS-19-stefano-masselli-1.png"
// //           alt="Arctic Monkeys"
// //         />
// //         <img
// //           className="element-festival"
// //           src="img/808-festival-2.png"
// //           alt="Festival"
// //         />
// //         <p className="at-grabzzz-we">
// //           At Grabzzz, we believe that every moment is an opportunity for an unforgettable experience. We&#39;re here to
// //           connect you with the hottest tickets to the most sought-after events, from electrifying concerts to glamorous
// //           award shows. Our platform is designed with a singular purpose: to make sure you never miss out on the events
// //           that matter most to you.
// //         </p>
// //         <div className="text-wrapper-5">Our Vision</div>
// //         <p className="our-vision-is-to">
// //           Our vision is to become the go-to destination for event enthusiasts worldwide. We strive to offer an
// //           unparalleled level of access to a diverse range of events, ensuring that everyone can find their perfect
// //           experience, whether it&#39;s front-row at a fashion show, cheering for your favorite artist, or rubbing
// //           shoulders with the stars at a red-carpet event. We envision a world where Grabzzz is synonymous with
// //           extraordinary moments.
// //         </p>
// //         <p className="GRABZZZ">
// //           <span className="span">G</span>
// //           <span className="text-wrapper-6">RABZZZ</span>
// //         </p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Welcome; // Export the component


// // import React from "react";
// // // import "./App.css";

// // export const Desktop = () => {
// //     return (
// //         <div className="desktop">
// //             <div className="div">
// //                 <div className="overlap-group">
// //                     <div className="rectangle" />
// //                     <div className="rectangle-2" />
// //                     <p className="text-wrapper">Welcome to Grabzzz- Your Gateway to Unforgettable Experiences!</p>
// //                     <p className="enabling">
// //                         Enabling unforgettable memories through seamless access to extraordinary <br />
// //                         global events.
// //                     </p>
// //                 </div>
// //                 <div className="text-wrapper-2">Products</div>
// //                 <div className="text-wrapper-3">About</div>
// //                 <img className="vector" alt="Vector" src="vector.svg" />
// //                 <div className="text-wrapper-4">About Grabzzz</div>
// //                 <img className="img" alt="Rectangle" src="rectangle-13.svg" />
// //                 <img className="ARCTIC-MONKEYS" alt="Arctic MONKEYS" src="ARCTIC-MONKEYS-19-stefano-masselli-1.png" />
// //                 <img className="element-festival" alt="Element festival" src="808-festival-2.png" />
// //                 <p className="at-grabzzz-we">
// //                     At Grabzzz, we believe that every moment is an opportunity for an unforgettable experience. We&#39;re here to
// //                     connect you with the hottest tickets to the most sought-after events, from electrifying concerts to glamorous
// //                     award shows. Our platform is designed with a singular purpose: to make sure you never miss out on the events
// //                     that matter most to you.
// //                 </p>
// //                 <div className="text-wrapper-5">Our Vision</div>
// //                 <p className="our-vision-is-to">
// //                     Our vision is to become the go-to destination for event enthusiasts worldwide. We strive to offer an
// //                     unparalleled level of access to a diverse range of events, ensuring that everyone can find their perfect
// //                     experience, whether it&#39;s front-row at a fashion show, cheering for your favorite artist, or rubbing
// //                     shoulders with the stars at a red-carpet event. We envision a world where Grabzzz is synonymous with
// //                     extraordinary moments.
// //                 </p>
// //                 <p className="GRABZZZ">
// //                     <span className="span">G</span>
// //                     <span className="text-wrapper-6">GRABZZZ</span>
// //                 </p>
// //             </div>
// //         </div>
// //     );
// // };



// // import { useState } from 'react'
// // import reactLogo from './assets/react.svg'
// // import viteLogo from '/vite.svg'
// // import './App.css'

// // function App() {
// //   const [count, setCount] = useState(0)

// //   return (
// //     <>
// //       <div>
// //         <a href="https://vitejs.dev" target="_blank">
// //           <img src={viteLogo} className="logo" alt="Vite logo" />
// //         </a>
// //         <a href="https://react.dev" target="_blank">
// //           <img src={reactLogo} className="logo react" alt="React logo" />
// //         </a>
// //       </div>
// //       <h1>Vite + React</h1>
// //       <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi debitis eveniet ipsum, assumenda unde veniam illum, doloremque aliquid ipsam fugiat voluptatibus, possimus at laudantium dolorem.</p>
// //       <div className="card">
// //         <button onClick={() => setCount((count) => count + 1)}>
// //           count is {count}
// //         </button>
// //         <p>
// //           Edit <code>src/App.jsx</code> and save to test HMR
// //         </p>
// //       </div>
// //       <p className="read-the-docs">
// //         Click on the Vite and React logos to learn more
// //       </p>
// //     </>
// //   )
// // }

// // export default App



// export default function App() {
//   return (
//         <div className="desktop">
//             <div className="div">
//                 <div className="overlap-group">
//                     <div className="rectangle" />
//                     <div className="rectangle-2" />
//                     <p className="text-wrapper">Welcome to Grabzzz- Your Gateway to Unforgettable Experiences!</p>
//                     <p className="enabling">
//                         Enabling unforgettable memories through seamless access to extraordinary <br />
//                         global events.
//                     </p>
//                 </div>
//                 <div className="text-wrapper-2">Products</div>
//                 <div className="text-wrapper-3">About</div>
//                 <img className="vector" alt="Vector" src="vector.svg" />
//                 <div className="text-wrapper-4">About Grabzzz</div>
//                 <img className="img" alt="Rectangle" src="rectangle-13.svg" />
//                 <img className="ARCTIC-MONKEYS" alt="Arctic MONKEYS" src="ARCTIC-MONKEYS-19-stefano-masselli-1.png" />
//                 <img className="element-festival" alt="Element festival" src="808-festival-2.png" />
//                 <p className="at-grabzzz-we">
//                     At Grabzzz, we believe that every moment is an opportunity for an unforgettable experience. We&#39;re here to
//                     connect you with the hottest tickets to the most sought-after events, from electrifying concerts to glamorous
//                     award shows. Our platform is designed with a singular purpose: to make sure you never miss out on the events
//                     that matter most to you.
//                 </p>
//                 <div className="text-wrapper-5">Our Vision</div>
//                 <p className="our-vision-is-to">
//                     Our vision is to become the go-to destination for event enthusiasts worldwide. We strive to offer an
//                     unparalleled level of access to a diverse range of events, ensuring that everyone can find their perfect
//                     experience, whether it&#39;s front-row at a fashion show, cheering for your favorite artist, or rubbing
//                     shoulders with the stars at a red-carpet event. We envision a world where Grabzzz is synonymous with
//                     extraordinary moments.
//                 </p>
//                 <p className="GRABZZZ">
//                     <span className="span">G</span>
//                     <span className="text-wrapper-6">GRABZZZ</span>
//                 </p>
//             </div>
//         </div>
//     );
// };


