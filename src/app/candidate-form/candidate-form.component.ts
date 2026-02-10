import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgClass } from '@angular/common';

@Component({
  selector: 'app-candidate-form',
  standalone: true,
  imports: [FormsModule, NgIf, NgClass],
  templateUrl: './candidate-form.component.html',
  styleUrls: ['./candidate-form.component.css']
})
export class CandidateFormComponent {

  candidateForm = {
    name: '',
    email: '',
    level: '',
    preferences: {
      contract: 'CDI',
      available: false
    },
    bio: ''
  };

  candidatePreview: any = null;

  submit(form: any) {
    if (form.valid) {

      this.candidatePreview = {
        ...this.candidateForm,
        preferences: { ...this.candidateForm.preferences }
      };

      alert('Candidature envoyée ✅');

      form.resetForm({
        preferences: { contract: 'CDI', available: false }
      });
    }
  }
}