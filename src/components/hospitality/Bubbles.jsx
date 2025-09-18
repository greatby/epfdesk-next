// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import styles from "./Bubbles.module.css";

// const NUM_BUBBLES = 9;

// const Bubbles = () => {
//   const containerRef = useRef(null);
//   const bubblesRef = useRef([]);
//   const [positions, setPositions] = useState([]);
//   const mouse = useRef({ x: 0, y: 0 });
//   const pathRef = useRef(null);

//   useEffect(() => {
//     const updatePath = () => {
//       if (!pathRef.current || bubblesRef.current.length === 0) return;

//       const containerRect = containerRef.current.getBoundingClientRect();

//       const leftBubble = bubblesRef.current[3]?.getBoundingClientRect();
//       const rightBubble = bubblesRef.current[5]?.getBoundingClientRect();

//       if (leftBubble && rightBubble) {
//         const leftX =
//           leftBubble.left + leftBubble.width / 2 - containerRect.left;
//         const leftY =
//           leftBubble.top + leftBubble.height / 2 - containerRect.top;

//         const rightX =
//           rightBubble.left + rightBubble.width / 2 - containerRect.left;
//         const rightY =
//           rightBubble.top + rightBubble.height / 2 - containerRect.top;

//         // Draw a smooth line with circles at edges
//         const path = `
//         M 0 ${leftY}
//         L ${leftX - 15} ${leftY}
//         m 0 0 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0
//         M ${rightX + 15} ${rightY}
//         L ${containerRect.width} ${rightY}
//         m -10 0 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0
//       `;

//         pathRef.current.setAttribute("d", path);
//       }

//       requestAnimationFrame(updatePath);
//     };

//     requestAnimationFrame(updatePath);
//   }, []);

//   // Generate initial positions
//   useEffect(() => {
//     const initial = Array.from({ length: NUM_BUBBLES }).map(() => ({
//       x: (Math.random() - 0.5) * 10,
//       y: (Math.random() - 0.5) * 10,
//       vx: (Math.random() - 0.5) * 0.5,
//       vy: (Math.random() - 0.5) * 0.5,
//     }));
//     setPositions(initial);
//   }, []);

//   // Animate with requestAnimationFrame
//   useEffect(() => {
//     let raf;
//     const animate = () => {
//       setPositions((prev) =>
//         prev.map((p) => {
//           let newX = p.x + p.vx;
//           let newY = p.y + p.vy;

//           // bounce within bounds
//           if (newX > 20 || newX < -20) p.vx *= -1;
//           if (newY > 20 || newY < -20) p.vy *= -1;

//           // mouse interaction
//           const dx = mouse.current.x - newX;
//           const dy = mouse.current.y - newY;
//           const dist = Math.sqrt(dx * dx + dy * dy) || 1;

//           // stronger force, falloff with distance
//           const strength = Math.min(4 / dist, 0.3); // closer = stronger
//           const repel = false; // set true if you want scatter-away effect

//           newX += (dx / dist) * strength * (repel ? -1 : 1);
//           newY += (dy / dist) * strength * (repel ? -1 : 1);

//           return { ...p, x: newX, y: newY };
//         })
//       );
//       raf = requestAnimationFrame(animate);
//     };
//     raf = requestAnimationFrame(animate);
   
//     return () => cancelAnimationFrame(raf);
//   }, []);

//   // Track mouse inside container
//   useEffect(() => {
//     const el = containerRef.current;
//     if (!el) return;

//     const handleMouseMove = (e) => {
//       const rect = el.getBoundingClientRect();
//       mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
//       mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   return (
//     <div
//       ref={containerRef}
//       className={styles["s-interlude"] + " " + styles["s-interlude--bubbles"]}
//       data-plr-component="s-interlude"
//     >
//       <div
//         className={styles["b-interlude-bubbles"]}
//         data-plr-component="b-interlude-bubbles"
//         data-lg-mouse=""
//       >
//         <div className={styles["b__inner"]}>
//           <div
//             className={styles["a-waves"] + " " + styles["a-waves--white"]}
//             data-plr-component="a-waves"
//           ></div>

//           <div className={styles["b__bubbles"] + " " + styles["js-bubbles"]}>
//             {positions.map((p, i) => (
//               <div
//                 key={i}
//                 ref={(el) => (bubblesRef.current[i] = el)}
//                 className={styles["b__bubble"] + " " + styles["js-bubble"]}
//                 style={{
//                   transform: `translate(${p.x}px, ${p.y}px)`,
//                 }}
//               >
//                 <div className={styles["b__circle"]}></div>
//               </div>
//             ))}
//           </div>

//           {/* Line with edge dots */}
//           <svg
//             width="1920"
//             height="5"
//             fill="none"
//             xmlns="http://www.w3.org/2000/svg"
//             className={styles["b__render"] + " " + styles["js-render"]}
//             overflow="visible"
//             preserveAspectRatio="none"
//             data-lg-scroll=""
//           >
//             <path
//               ref={pathRef}
//               d="M 0 2.5 Q 142.638 2.5 356.60231970066695 2.458189018171878 m 0 -8.102813702335153e-141 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 1566 2.5 Q 1223.362 2.5 1009.4092068635429 2.464145658085508 m -10 -8.102813702335153e-141 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
//               fill="#fff"
//               className={styles["js-render-path"]}
//             ></path>
//           </svg>

//           <div className={styles["b__ruler"] + " " + styles["js-ruler"]}></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bubbles;


"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Bubbles.module.css";

const NUM_BUBBLES = 9;

const Bubbles = () => {
  const containerRef = useRef(null);
  const bubblesRef = useRef([]);
  const [positions, setPositions] = useState([]);
  const mouse = useRef({ x: 0, y: 0, inside: false });
  const pathRef = useRef(null);

  // Draw the thread path
  useEffect(() => {
    const updatePath = () => {
      if (!pathRef.current || bubblesRef.current.length === 0) return;
      const containerRect = containerRef.current.getBoundingClientRect();

      const leftBubble = bubblesRef.current[3]?.getBoundingClientRect();
      const rightBubble = bubblesRef.current[5]?.getBoundingClientRect();

      if (leftBubble && rightBubble) {
        const leftX =
          leftBubble.left + leftBubble.width / 2 - containerRect.left;
        const leftY =
          leftBubble.top + leftBubble.height / 2 - containerRect.top;

        const rightX =
          rightBubble.left + rightBubble.width / 2 - containerRect.left;
        const rightY =
          rightBubble.top + rightBubble.height / 2 - containerRect.top;

        const path = `
          M 0 ${leftY}
          L ${leftX - 15} ${leftY}
          m 0 0 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0
          M ${rightX + 15} ${rightY}
          L ${containerRect.width} ${rightY}
          m -10 0 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0
        `;
        pathRef.current.setAttribute("d", path);
      }
      requestAnimationFrame(updatePath);
    };
    requestAnimationFrame(updatePath);
  }, []);

  // Initial random offsets
  useEffect(() => {
    const initial = Array.from({ length: NUM_BUBBLES }).map(() => ({
      x: (Math.random() - 0.5) * 10,
      y: (Math.random() - 0.5) * 10,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
    }));
    setPositions(initial);
  }, []);

  // Animation
  useEffect(() => {
    let raf;
    const animate = () => {
      setPositions((prev) =>
        prev.map((p) => {
          let { x, y, vx, vy } = p;
          let newX = x + vx;
          let newY = y + vy;

          // bounce within ±20px
          if (newX > 20 || newX < -20) vx *= -1;
          if (newY > 20 || newY < -20) vy *= -1;

          // apply mouse influence only when inside
          if (mouse.current.inside) {
            const dx = mouse.current.x - newX;
            const dy = mouse.current.y - newY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 60) {
              const strength = Math.min(0.05, 3 / (dist + 10));
              newX += (dx / dist) * strength * 20;
              newY += (dy / dist) * strength * 20;
            }
          }

          return { x: newX, y: newY, vx, vy };
        })
      );
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  // Track mouse only inside container
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleMove = (e) => {
      const rect = el.getBoundingClientRect();
      mouse.current.x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
      mouse.current.y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
    };
    const enter = () => (mouse.current.inside = true);
    const leave = () => {
      mouse.current.inside = false;
      // reset so no force when outside
      mouse.current.x = 0;
      mouse.current.y = 0;
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={styles["s-interlude"] + " " + styles["s-interlude--bubbles"]}
      data-plr-component="s-interlude"
    >
      <div
        className={styles["b-interlude-bubbles"]}
        data-plr-component="b-interlude-bubbles"
        data-lg-mouse=""
      >
        <div className={styles["b__inner"]}>
          <div
            className={styles["a-waves"] + " " + styles["a-waves--white"]}
            data-plr-component="a-waves"
          ></div>

          <div className={styles["b__bubbles"] + " " + styles["js-bubbles"]}>
            {positions.map((p, i) => (
              <div
                key={i}
                ref={(el) => (bubblesRef.current[i] = el)}
                className={styles["b__bubble"] + " " + styles["js-bubble"]}
                style={{
                  transform: `translate(${p.x}px, ${p.y}px)`,
                }}
              >
                <div className={styles["b__circle"]}></div>
              </div>
            ))}
          </div>

          <svg
            width="1920"
            height="5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles["b__render"] + " " + styles["js-render"]}
            overflow="visible"
            preserveAspectRatio="none"
            data-lg-scroll=""
          >
            <path
              ref={pathRef}
              d="M 0 2.5 Q 142.638 2.5 356.60231970066695 2.458189018171878 m 0 -8.102813702335153e-141 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0 M 1566 2.5 Q 1223.362 2.5 1009.4092068635429 2.464145658085508 m -10 -8.102813702335153e-141 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
              fill="#fff"
              className={styles["js-render-path"]}
            ></path>
          </svg>

          <div className={styles["b__ruler"] + " " + styles["js-ruler"]}></div>
        </div>
      </div>
    </div>
  );
};

export default Bubbles;
