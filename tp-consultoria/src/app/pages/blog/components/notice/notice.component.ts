import { Component } from '@angular/core';
import { NoticeImports } from './imports/notice.imports';
import { ActivatedRoute } from '@angular/router';
import { INotice } from '../../interfaces/blog.interfaces';
import { notices } from '../../news.json'

@Component({
  selector: 'app-notice',
  imports: NoticeImports,
  templateUrl: './notice.component.html',
  styleUrl: './notice.component.scss'
})
export class NoticeComponent {
  public selectedNotice!: INotice;
  private news!: Array<INotice>;

  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.setNews()
  }

  private setNews(): void {
    this.news = notices;

    this.setSelectedNew();
  }

  private setSelectedNew(): void {
    let selectedId: string
    this.activatedRoute.queryParams.subscribe(params => {
      selectedId = params['selectedNotice']
    });

    this.selectedNotice = this.news.find((notice) => notice.id === selectedId)!
  }
}
