import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';
@Component({
  selector: 'app-candidate-form',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './candidate-form.component.html',
  styleUrl: './candidate-form.component.css'
})
export class CandidateFormComponent {
   candidate = {
    fullName: '',
    email: '',
    level: '',
    
  };
}
