import { Component } from "@angular/core";

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})

export class HotelListComponent {
  public title = 'List Hotels';

  public hotels: any[] = [{
    hotelId: 1,
    hotelName: 'Hôtel le Bristol Paris',
    description: 'Un luxueux hôtel 5 étoiles situé au cœur de Paris, offrant un hébergement élégant et des services de première classe.',
    price: 350.0,
    imageUrl: 'assets/img/hotel1.jpg'
  }, {
    hotelId: 2,
    hotelName: 'Hôtel Plaza Athénée Paris',
    description: 'Un hôtel de renommée mondiale situé sur l\'avenue Montaigne à Paris, offrant un hébergement de luxe et des installations de pointe.',
    price: 450.0,
    imageUrl: 'assets/img/hotel2.jpg'
  }, {
    hotelId: 3,
    hotelName: 'The Ritz-Carlton New York, Central Park',
    description: 'Un hôtel de luxe emblématique situé en face de Central Park à New York, offrant un hébergement raffiné et un service de classe mondiale.',
    price: 550.75,
    imageUrl: 'assets/img/hotel3.jpg'
  }, {
    hotelId: 4,
    hotelName: 'Four Seasons Hotel George V Paris',
    description: 'Un élégant hôtel de luxe situé sur l\'avenue des Champs-Élysées à Paris, offrant un hébergement somptueux et des équipements de qualité supérieure.',
    price: 500.25,
    imageUrl: 'assets/img/hotel4.jpg'
  }, {
    hotelId: 5,
    hotelName: 'The Waldorf Astoria Beverly Hills',
    description: 'Un hôtel de luxe situé à Beverly Hills, Los Angeles, offrant un hébergement sophistiqué et des vues panoramiques sur la ville.',
    price: 400.0,
    imageUrl: 'assets/img/hotel5.jpg'
  }];


}
