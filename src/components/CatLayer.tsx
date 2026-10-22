
"use client";

import Oneko from "@/components/oneko";

export default function CatLayer() {
  return (
    <Oneko
      skin="calico"
      speed={18}
      idleThreshold={2500}
      meow
      laserPointer
      followDistance={15}
      animationSpeed={1.4}
      bubbleText={[
        "oh! a new human has arrived",
        "TARGET ACQUIRED",
        "i'm watching your cursor 👀",
        "cursor stopped. time for a nap.",
        "human, take a break. drink some water.",
        "404: motivation not found",
        "even AI can't fix your CSS",
        "that animation needs more bounce",
        "Marchander AI? can it negotiate my snack price?",
        "Dr. Radar, please diagnose my sleepiness",
        "Circlo sounds like a good place to nap",
        "small commits, big dreams",
        "i said stop poking me 😾",
        "come back soon, human!",
      ]}
      freerunChance={0.15}
      freerunDuration={80}
    />
  );
}
