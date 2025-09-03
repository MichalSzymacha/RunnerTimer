import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {
  private audioContext: AudioContext | null = null;
  private currentOscillators: OscillatorNode[] = [];

  constructor() {
    // Inicjalizacja AudioContext przy pierwszej interakcji użytkownika
    this.initAudioContext();
  }

  private initAudioContext() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    } catch (e) {
      console.warn('Web Audio API nie jest wspierane');
    }
  }

  private async ensureAudioContext() {
    if (!this.audioContext) {
      this.initAudioContext();
    }
    if (this.audioContext?.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  // Metoda do zatrzymania wszystkich dźwięków
  stopAllSounds() {
    this.currentOscillators.forEach(oscillator => {
      try {
        oscillator.stop();
      } catch (e) {
        // Oscillator już zatrzymany
      }
    });
    this.currentOscillators = [];
  }

  // Dźwięk pikania (ostatnie 5 sekund)
  async playTickSound() {
    await this.ensureAudioContext();
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
    oscillator.type = 'sine';

    gainNode.gain.setValueAtTime(0.1, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.1);

    // Dodaj do listy aktywnych oscillatorów
    this.currentOscillators.push(oscillator);
  }

  // Dźwięk zmiany fazy
  async playPhaseChangeSound() {
    await this.ensureAudioContext();
    if (!this.audioContext) return;

    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);

    // Sekwencja dźwięków
    oscillator.frequency.setValueAtTime(600, this.audioContext.currentTime);
    oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime + 0.2);
    oscillator.frequency.setValueAtTime(1000, this.audioContext.currentTime + 0.4);
    oscillator.type = 'triangle';

    gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.6);

    oscillator.start(this.audioContext.currentTime);
    oscillator.stop(this.audioContext.currentTime + 0.6);

    // Dodaj do listy aktywnych oscillatorów
    this.currentOscillators.push(oscillator);
  }

  // Metoda do odtwarzania dźwięku co sekundę przez ostatnie 5 sekund
  startCountdownSound(currentTime: number) {
    if (currentTime <= 5 && currentTime > 0) {
      this.playTickSound();
    }
  }

  // Metoda wywoływana przy zmianie fazy
  playPhaseTransitionSound() {
    this.playPhaseChangeSound();
  }
}
