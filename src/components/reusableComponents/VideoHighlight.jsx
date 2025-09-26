"use client";
import React, { useEffect, useRef } from "react";
import styles from "./VideoHighlight.module.css";

export default function NodCodingExperience({ data }) {
  const eyeRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      eyeRefs.current.forEach((eye) => {
        if (!eye) return;

        const pupil = eye.querySelector(`.${styles["b__pupil"]}`);
        if (!pupil) return;

        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const angle = Math.atan2(
          e.clientY - eyeCenterY,
          e.clientX - eyeCenterX
        );

        const maxMove = 12;
        const pupilX = Math.cos(angle) * maxMove;
        const pupilY = Math.sin(angle) * maxMove;

        pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [data]);

  return (
    <div
      className={`
        ${styles["s-video-highlight"]} 
        ${styles["lg-reveal"]} 
        ${styles["is-in"]} 
        ${styles["is-out"]}
      `}
      data-plr-component="s-video-highlight"
      data-lg-reveal=""
    >
      <div className={styles["u-container"]}>
        <div
          className={`
            ${styles["b-heading-eye-1"]} 
            ${styles["js-heading-eye"]} 
            ${styles["lg-reveal"]} 
            ${styles["is-in"]}
          `}
          data-plr-component="b-heading-eye-1"
          data-lg-reveal=""
          data-lg-reveal-manual=""
        >
          <div className={styles["b__content"]}>
            <div className={styles["b__content__inner"]}>
              <h2
                className={`
                  ${styles["b__title"]} 
                  ${styles["b__title--lg"]} 
                  ${styles["js-heading"]}
                `}
              >
                {data.heading}
              </h2>

              <div className={styles["b__shapes"]}>
                <div className={styles["b__shape"]}></div>
                <div className={styles["b__shape"]}></div>
              </div>
            </div>
          </div>

          <div className={styles["b__head"]}>
            <div className={styles["b__head__background"]}></div>

            <div className={styles["b-head"]} data-plr-component="b-head">
              {/* Left Eye */}
              <div
                className={`${styles["b__eye"]} ${styles["js-eye"]} ${styles["is-set"]}`}
                ref={(el) => (eyeRefs.current[0] = el)}
              >
                <div className={`${styles["b__pupil"]} ${styles["js-pupill"]}`}>
                  <div
                    className={`${styles["b__pupil__inner"]} ${styles["b__pupil__inner--main"]}`}
                  ></div>
                  <div
                    className={`${styles["b__pupil__inner"]} ${styles["b__pupil__inner--secondary"]}`}
                  ></div>
                </div>
              </div>

              {/* Right Eye */}
              <div
                className={`${styles["b__eye"]} ${styles["js-eye"]} ${styles["is-set"]}`}
                ref={(el) => (eyeRefs.current[1] = el)}
              >
                <div
                  className={`${styles["b__pupil"]} ${styles["js-pupill"]}`}
                >
                  <div
                    className={`${styles["b__pupil__inner"]} ${styles["b__pupil__inner--main"]}`}
                  ></div>
                  <div
                    className={`${styles["b__pupil__inner"]} ${styles["b__pupil__inner--secondary"]}`}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles["s__body"]}>
          <div className={styles["s__video-mask"]}></div>
          <div className={styles["s__video-border"]}></div>

          <div
            className={`
              ${styles["s__video-wrapper"]} 
              ${styles["js-wrapper"]}
            `}
          >
            <div className={styles["s__cover"]}>
              <picture
                className={`
                  ${styles["lazy-image__img"]} 
                  ${styles["b-image"]}
                `}
                data-plr-component="b-image"
              >
                <img
                  src={data.coverImage}
                  sizes="(min-width: 1440px) 700px, (min-width: 1024px) 500px, (min-width: 577px) 350px, 100vw"
                  alt={data.alt || "Video Highlight"}
                  width="1080"
                  height="1080"
                  loading="lazy"
                />
              </picture>
            </div>
          </div>

          <div
            className={`
              ${styles["s__text"]} 
              ${styles["t-t-xl"]}
            `}
          >
            <p>
              <span
                className={`
                  ${styles["a-bullet-point"]} 
                  ${styles["js-bullet"]}
                `}
                style={{ left: "0px", opacity: 1 }}
              ></span>
              {data.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}