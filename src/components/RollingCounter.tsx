import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'motion/react';

interface RollingCounterProps {
  value: number;
  duration?: number; // in seconds
}

export default function RollingCounter({ value, duration = 2 }: RollingCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  // Convert duration (seconds) to spring stiffness: longer duration = lower stiffness
  const stiffness = Math.max(20, 200 / duration);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat('id-ID').format(Math.round(latest));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}
