import { Component } from '@angular/core';
import { CommonModule, NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-form',
  standalone: true,
  imports: [CommonModule, FormsModule, NgIf, NgClass],
  templateUrl: './candidate-form.component.html',
  styleUrl: './candidate-form.component.css'
})
export class CandidateFormComponent {

  candidate = {
    fullName: '',
    email: '',
    level: ''
  };

}
