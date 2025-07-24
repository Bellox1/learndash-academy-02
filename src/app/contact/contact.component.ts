import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  messageSent = false;

  // Variables pour la FAQ
  faqQuestion = 'Proin Gravida Nibh Vel Velit Auctor Aliquet?';
  faqAnswer = 'Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.';

  // Tableau généré à partir des variables
  faqs = Array(4).fill({
    question: this.faqQuestion,
    answer: this.faqAnswer
  });

  // Constante pour la durée d'affichage du message envoyé
  readonly messageSentDuration = 8000; // 8 secondes

  openedIndex: number | null = 0;
  toggleFaq(index: number) {
    this.openedIndex = this.openedIndex === index ? null : index;
  }

  onSubmit(form: any) {
    this.messageSent = true;
    form.resetForm(); // Réinitialise tous les champs du formulaire
    setTimeout(() => {
      this.messageSent = false;
    }, this.messageSentDuration); // Utilisation de la constante
  }
}
