"use client";
import { useEffect, useRef } from "react";
import styles from "./Questioning.module.css";
import lottie from "lottie-web";

const Questioning = () => {
  const container = useRef(null);
  const containerCode = useRef(null);
  const containerLearning = useRef(null);
  const pupilRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/usp-tech-stack.json",
    });

    return () => anim.destroy();
  }, []);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerCode.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/usp-project.json",
    });

    return () => anim.destroy();
  }, []);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: containerLearning.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/usp-learning.json",
    });

    return () => anim.destroy();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      // Normalize to 0–1 range
      const progressX = mouseX / innerWidth;
      const progressY = mouseY / innerHeight;

      if (pupilRef.current) {
        pupilRef.current.style.setProperty("--mouse-x", mouseX);
        pupilRef.current.style.setProperty("--mouse-y", mouseY);
        pupilRef.current.style.setProperty("--mouse-progress-x", progressX);
        pupilRef.current.style.setProperty("--mouse-progress-y", progressY);

        // You can also calculate diffs if needed
        pupilRef.current.style.setProperty("--diff-x", progressX - 0.5);
        pupilRef.current.style.setProperty("--diff-y", progressY - 0.5);
        pupilRef.current.style.setProperty(
          "--abs-diff-x",
          Math.abs(progressX - 0.5)
        );
        pupilRef.current.style.setProperty(
          "--abs-diff-y",
          Math.abs(progressY - 0.5)
        );
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={styles["s-usps"] + " " + styles["s-usps--layout-1"]}
      data-plr-component="s-usps"
    >
      <div className={styles["u-container"]}>
        <div
          className={styles["s__header"] + " " + styles["js-header"]}
          data-lg-scroll=""
          data-lg-scroll-start="1"
          data-lg-scroll-end="0.2"
          style={{
            "--progress": "0.7229486003355001",
            "--abs-diff": "0",
            "--diff": "0",
            "--smooth-progress": "0.9149354845132008",
          }}
        >
          <div className={styles["s__header-content"]}>
            <h2 className={styles["s__title"] + " " + styles["t-h-3xl"]}>
              Why Nod?{" "}
            </h2>
          </div>
        </div>

        <div className={styles["s__usps"]}>
          <div className={styles["s__usp"] + " " + styles["sb-usp"]}>
            <div className={styles["sb__content"]}>
              <h3
                className={
                  styles["sb__title"] +
                  " " +
                  styles["t-h-4xs"] +
                  " " +
                  styles["lg-reveal"] +
                  " " +
                  styles["lg-reveal--heading"] +
                  " " +
                  styles["is-in"] +
                  " " +
                  styles["is-out"]
                }
                data-lg-reveal="heading"
              >
                <div
                  className={styles["line"]}
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                    fontSize:"2rem"
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                    }}
                    className={styles["word"]}
                  >
                    {" "}
                    State-of-the-art
                  </div>{" "}
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                    }}
                    className={styles["word"]}
                  >
                    Tech
                  </div>{" "}
                </div>
                <div
                  className={styles["line"]}
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                    }}
                    className={styles["word"]}
                  >
                    Stack
                  </div>{" "}
                </div>
              </h3>

              <p
                className={
                  styles["sb__text"] +
                  " " +
                  styles["lg-reveal"] +
                  " " +
                  styles["lg-reveal--text"] +
                  " " +
                  styles["is-in"] +
                  " " +
                  styles["is-out"]
                }
                data-lg-reveal="text"
                style={{
                  translate: " none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: "1",
                }}
              >
                We constantly curate our curriculum to ensure that you focus on
                learning the most relevant technical skills.{" "}
              </p>
            </div>

            <div
              ref={container}
              className={
                styles["sb__illus"] + " " + styles["sb__illus--tech-stack"]
              }
            >
              <div
                className={
                  styles["sb__illus__lottie"] +
                  " " +
                  styles["lg-lottie"] +
                  " " +
                  styles["is-loaded"] +
                  " " +
                  styles["is-playing"] +
                  " " +
                  styles["is-playing-forward"]
                }
              ></div>
            </div>
          </div>
          <div className={styles["s__usp"] + " " + styles["sb-usp"]}>
            <div className={styles["sb__content"]}>
              <h3
                className={
                  styles["sb__title"] +
                  " " +
                  styles["t-h-4xs"] +
                  " " +
                  styles["lg-reveal"] +
                  " " +
                  styles["lg-reveal--heading"] +
                  " " +
                  styles["is-in"] +
                  " " +
                  styles["is-out"]
                }
                data-lg-reveal="heading"
              >
                <div
                  className={styles["line"]}
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                      fontSize:"2rem"
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                    }}
                    className={styles["word"]}
                  >
                    {" "}
                    Project
                  </div>{" "}
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                    }}
                    className={styles["word"]}
                  >
                    Based
                  </div>{" "}
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                    }}
                    className={styles["word"]}
                  >
                    Learning
                  </div>{" "}
                </div>
              </h3>

              <p
                className={
                  styles["sb__text"] +
                  " " +
                  styles["lg-reveal"] +
                  " " +
                  styles["lg-reveal--text"] +
                  " " +
                  styles["is-in"] +
                  " " +
                  styles["is-out"]
                }
                data-lg-reveal="text"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: "1",
                }}
              >
                Coding is a craft and you need to get your hands dirty to
                succeed. You will get hands-on training solving real-world
                problems and build a portfolio of projects.{" "}
              </p>
            </div>

            <div
              ref={containerCode}
              className={
                styles["sb__illus"] + " " + styles["sb__illus--project"]
              }
            >
              <div
                className={
                  styles["sb__illus__lottie"] +
                  " " +
                  styles["lg-lottie"] +
                  " " +
                  styles["is-loaded"] +
                  " " +
                  styles["is-playing"] +
                  " " +
                  styles["is-playing-forward"]
                }
              ></div>
            </div>
          </div>
          <div className={styles["s__usp"] + " " + styles["sb-usp"]}>
            <div className={styles["sb__content"]}>
              <h3
                className={
                  styles["sb__title"] +
                  " " +
                  styles["t-h-4xs"] +
                  " " +
                  styles["lg-reveal"] +
                  " " +
                  styles["lg-reveal--heading"] +
                  " " +
                  styles["is-in"] +
                  " " +
                  styles["is-out"]
                }
                data-lg-reveal="heading"
              >
                <div
                  className={styles["line"]}
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                      fontSize:"2rem"
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                    }}
                    className={styles["word"]}
                  >
                    {" "}
                    Accelerated
                  </div>{" "}
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                    }}
                    className={styles["word"]}
                  >
                    Onsite
                  </div>{" "}
                </div>
                <div
                  className={styles["line"]}
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                    }}
                    className={styles["word"]}
                  >
                    Learning
                  </div>{" "}
                </div>
              </h3>

              <p
                className={
                  styles["sb__text"] +
                  " " +
                  styles["lg-reveal"] +
                  " " +
                  styles["lg-reveal--text"] +
                  " " +
                  styles["is-in"] +
                  " " +
                  styles["is-out"]
                }
                data-lg-reveal="text"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: "1",
                }}
              >
                Learning to code in a small group of like-minded people with
                interactive lessons and supportive teachers available at all
                times will set you up for success.{" "}
              </p>
            </div>

            <div
              ref={containerLearning}
              className={
                styles["sb__illus"] + " " + styles["sb__illus--learning"]
              }
            >
              <div
                className={
                  styles["sb__illus__lottie"] +
                  " " +
                  styles["lg-lottie"] +
                  " " +
                  styles["is-loaded"] +
                  " " +
                  styles["is-paused"]
                }
              ></div>
            </div>
          </div>
          <div className={styles["s__usp"] + " " + styles["sb-usp"]}>
            <div className={styles["sb__content"]}>
              <h3
                className={
                  styles["sb__title"] +
                  " " +
                  styles["t-h-4xs"] +
                  " " +
                  styles["lg-reveal"] +
                  " " +
                  styles["lg-reveal--heading"] +
                  " " +
                  styles["is-in"] +
                  " " +
                  styles["is-out"]
                }
                data-lg-reveal="heading"
              >
                <div
                  className={styles["line"]}
                  style={{
                    display: "block",
                    textAlign: "start",
                    position: "relative",
                      fontSize:"2rem"
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                    }}
                    className={styles["word"]}
                  >
                    {" "}
                    Get
                  </div>{" "}
                  <div
                    style={{
                      position: "relative",
                      display: "inline-block",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0%)",
                    }}
                    className={styles["word"]}
                  >
                    hired
                  </div>{" "}
                </div>
              </h3>

              <p
                className={
                  styles["sb__text"] +
                  " " +
                  styles["lg-reveal"] +
                  " " +
                  styles["lg-reveal--text"] +
                  " " +
                  styles["is-in"] +
                  " " +
                  styles["is-out"]
                }
                data-lg-reveal="text"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                  opacity: "1",
                }}
              >
                Be like our graduates – change careers and make a difference,
                become a digital nomad, or build an AI startup.{" "}
              </p>
            </div>

            <div
              className={styles["sb__illus"] + " " + styles["sb__illus--hired"]}
            >
              <div
                className={styles["b-usp-hired"]}
                data-plr-component="b-usp-hired"
              >
                <div
                  className={
                    styles["b__eye"] +
                    " " +
                    styles["js-eye"] +
                    " " +
                    styles["is-set"]
                  }
                  style={{
                    "--path-open":
                      "path('M 0 42.5 Q 95.5 -42.5 191 42.5 Q 95.5 127.5 0 42.5 Z')",
                    "--path-close":
                      "path('M 0 42.5 Q 95.5 42.5 191 42.5 Q 95.5 42.5 0 42.5 Z')",
                  }}
                >
                  <div
                    ref={pupilRef}
                    className={styles["b__pupil"]}
                    data-lg-mouse=""
                    data-lg-mouse-inertia="0.05"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questioning;
