import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [
    trigger('breathingAnimation', [
      state('inhale', style({ transform: 'scale(1.1)' })),  // Breathing in expands the element
      state('exhale', style({ transform: 'scale(0.9)' })),  // Breathing out contracts the element
      transition('inhale <=> exhale', animate('{{duration}}s linear'))
    ])
  ]
})
export class MainComponent implements OnInit {
  insliderValue = 4; // seconds for inhale
  outsliderValue = 6; // seconds for exhale
  breathe: string = 'inhale'; // Default state of the animation
  duration: number = this.insliderValue;  // Initialize with the inhale duration
  animationTimer: any = null; // Timer handle

  constructor() {}

  ngOnInit(): void {
    // Initial setup can be done here if needed
  }

  startAnimation(): void {
    this.stopAnimation(); // Stop any existing animation before starting a new one
    this.cycleBreath(); // Start breathing cycle
  }

  stopAnimation(): void {
    if (this.animationTimer) {
      clearInterval(this.animationTimer);
      this.animationTimer = null;
    }
  }

  cycleBreath(): void {
    this.animationTimer = setInterval(() => {
      this.breathe = (this.breathe === 'inhale' ? 'exhale' : 'inhale');
      this.duration = (this.breathe === 'inhale' ? this.insliderValue : this.outsliderValue);
    }, this.duration * 1000);
  }

  updateDurations(): void {
    this.stopAnimation(); // Reset animation with new values
    this.startAnimation(); // Restart animation with new durations
    }
  }