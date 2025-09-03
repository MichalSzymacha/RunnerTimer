import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundService } from '../sound.service';

@Component({
  selector: 'app-volume-control',
  imports: [CommonModule],
  templateUrl: './volume-control.component.html',
  styleUrl: './volume-control.component.scss'
})
export class VolumeControlComponent implements OnInit {
  volume: number = 1;

  constructor(private soundService: SoundService) {}

  ngOnInit() {
    this.volume = this.soundService.getVolume();
  }

  onVolumeChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const newVolume = parseFloat(target.value);
    this.volume = newVolume;
    this.soundService.setVolume(newVolume);
  }

  testSound() {
    this.soundService.playTickSound();
  }
}
