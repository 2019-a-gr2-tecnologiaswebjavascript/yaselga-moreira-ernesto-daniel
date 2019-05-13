import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-album-item',
  templateUrl: './album-item.component.html',
  styleUrls: ['./album-item.component.css']
})
export class AlbumItemComponent implements OnInit {

  @Input()
  Tag;

  @Input()
  Descripcion;

  @Input()
  Foto;

  constructor() { }

  ngOnInit() {
  }

}
