/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

export interface Donation {
  adresse?: string;
  amount?: number;
  description?: string;
  etat?: 'NEUF' | 'BON_ETAT' | 'USE';
  id?: number;
  moyenPaiement?: 'CARTE_BANCAIRE' | 'VIREMENT' | 'ESPECES' | 'PAYPAL';
  nom?: string;
  numero?: string;
  prenom?: string;
  typeDonation?: 'MATERIEL' | 'MONETAIRE' | 'SERVICES';
}
