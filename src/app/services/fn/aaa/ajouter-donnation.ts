/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { Donation } from '../../models/donation';

export interface AjouterDonnation$Params {
  d: Donation;
}

export function ajouterDonnation(http: HttpClient, rootUrl: string, params: AjouterDonnation$Params, context?: HttpContext): Observable<StrictHttpResponse<Donation>> {
  const rb = new RequestBuilder(rootUrl, ajouterDonnation.PATH, 'post');
  if (params) {
    rb.query('d', params.d, {});
  }

  return http.request(
    rb.build({ responseType: 'blob', accept: '*/*', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<Donation>;
    })
  );
}

ajouterDonnation.PATH = '/ajouterDonation';
