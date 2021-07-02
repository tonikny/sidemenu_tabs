import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TestsService {
  constructor(private httpClient: HttpClient) {}

  getCatastroStuff() {
    return this.httpClient.get(
      'http://ovc.catastro.meh.es/' +
        'ovcservweb/OVCSWLocalizacionRC/OVCCoordenadas.asmx/' +
        'Consulta_RCCOOR_Distancia?SRS=EPSG:4258&Coordenada_X=0.8396144176106677&Coordenada_Y=40.9255828349979',
      { responseType: 'text' }
    );
  }
}
