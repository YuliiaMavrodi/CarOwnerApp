import {Injectable} from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Owner} from "../models/owner.model";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const owner = [
      {id: 1, lastName: 'Ivanov', firstName: 'Ivan', middleName: 'Ivanovich', cars: [
          {id: 1, licencePlate: 'AX1111HP', manufacturerName: 'Honda', modelName: 'Civic', manufacturerYear: '2020'},
          {id: 2, licencePlate: 'AA1155BP', manufacturerName: 'BMW', modelName: 'X6', manufacturerYear: '2021'},
          {id: 3, licencePlate: 'AX1111HP', manufacturerName: 'Tesla', modelName: 'Model 3', manufacturerYear: '2018'},
        ]},
      {id: 2, lastName: 'Petrova', firstName: 'Natalia', middleName: 'Igorevna', cars: [
          {id: 1, licencePlate: 'AX2121HP', manufacturerName: 'Hundai', modelName: 'Accent', manufacturerYear: '2009'},
          {id: 2, licencePlate: 'BC7286AE', manufacturerName: 'KIA', modelName: 'Optima', manufacturerYear: '2019'},
          {id: 3, licencePlate: 'AX8888KB', manufacturerName: 'Ferrari', modelName: 'LaFerrari', manufacturerYear: '2020'},        ]},
      {id: 3, lastName: 'Antonov', firstName: 'Alexey', middleName: 'Sergeevich', cars: [
          {id: 1, licencePlate: 'AH1111HP', manufacturerName: 'Honda', modelName: 'Pilot', manufacturerYear: '2020'},
        ]},
      {id: 4, lastName: 'Sidorenko', firstName: 'Katerina', middleName: 'Olegovna', cars: [
          {id: 1, licencePlate: 'AP1547HP', manufacturerName: 'Ford', modelName: 'Focus', manufacturerYear: '2016'},
          {id: 2, licencePlate: 'AA8787BP', manufacturerName: 'Volkswagen', modelName: 'Polo', manufacturerYear: '2012'},
        ]},
      {id: 5, lastName: 'Panasenko', firstName: 'Kirill', middleName: 'Davidovich', cars: [
          {id: 1, licencePlate: 'AP1441HP', manufacturerName: 'Chevrolet', modelName: 'Cruze', manufacturerYear: '2011'},
          {id: 2, licencePlate: 'IB6633BP', manufacturerName: 'Toyota', modelName: 'Auris', manufacturerYear: '2013'},
        ]},
      {id: 6, lastName: 'Kurilenko', firstName: 'Anastasia', middleName: 'Vladimirovna', cars: [
          {id: 1, licencePlate: 'AA4571CC', manufacturerName: 'Subaru', modelName: 'Forest', manufacturerYear: '2006'},
        ]},
      {id: 7, lastName: 'Stasuk', firstName: 'Igor', middleName: 'Andreevich', cars: [
          {id: 1, licencePlate: 'BH4711HP', manufacturerName: 'Volkswagen', modelName: 'Touareg', manufacturerYear: '2018'},
          {id: 2, licencePlate: 'BH4545KP', manufacturerName: 'Toyota', modelName: 'Camry XLE', manufacturerYear: '2018'},
        ]},
      {id: 8, lastName: 'Andreenko', firstName: 'Viktoria', middleName: 'Olegovna', cars: [
          {id: 1, licencePlate: 'AA5563HK', manufacturerName: 'Audi', modelName: 'Q7', manufacturerYear: '2015'},
          {id: 2, licencePlate: 'AA7778KM', manufacturerName: 'Ford', modelName: 'Mustang', manufacturerYear: '2019'},
          {id: 3, licencePlate: 'AA3333HP', manufacturerName: 'Porsche', modelName: 'Cayenne', manufacturerYear: '2012'},
        ]},
    ];
    return {owner};
  }

  // genId(owners: Owner[]): number {
  //   return owners.length > 0 ? Math.max(...owners.map(hero => hero.id)) + 1 : 11;
  // }
}
