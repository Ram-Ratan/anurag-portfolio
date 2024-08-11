import React, { useEffect, useRef } from "react";
import "./styles.css";

interface TxtTypeProps {
  el: HTMLElement;
  toRotate: string[];
  period: number;
}

class TxtType {
  toRotate: string[];
  el: HTMLElement;
  loopNum: number;
  period: number;
  txt: string;
  isDeleting: boolean;

  constructor({ el, toRotate, period }: TxtTypeProps) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = period || 2000;
    this.txt = "";
    this.isDeleting = false;
    this.tick();
  }

  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = `<span class="wrap">${this.txt}</span>`;

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
    //   delta /= 2; // Speed up when deleting
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period; // Pause at the end of each word
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500; // Pause before starting to type the next word
    }

    setTimeout(() => {
      this.tick();
    }, delta);
  }
}


const TypewriterEffect: React.FC = () => {
  const typewriterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typewriterRef.current) {
      const elements =
        typewriterRef.current.getElementsByClassName("typewrite");
      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as HTMLElement;
        const toRotate = element.getAttribute("data-type");
        const period = element.getAttribute("data-period");
        if (toRotate) {
          new TxtType({
            el: element,
            toRotate: JSON.parse(toRotate),
            period: parseInt(period || "2000", 10),
          });
        }
      }
    }
  }, []);

  return (
    <div ref={typewriterRef}>
      <a
        href="/"
        className="typewrite"
        data-period="2000"
        data-type='[ "ROI DRIVEN", "PERFORMANCE"]'
      >
        <span className="wrap"></span>
      </a>
    </div>
  );
};

export default TypewriterEffect;
