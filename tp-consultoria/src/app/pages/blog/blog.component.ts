import { Component } from '@angular/core';
import { BlogImports } from './imports/blog.imports';
import { notices } from './news.json'
import { INotice } from './interfaces/blog.interfaces';

@Component({
  selector: 'app-blog',
  imports: BlogImports,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {
  private news!: Array<INotice>;
  public principalNotice!: INotice;
  public lastTwoNotices!: Array<INotice>;


  ngOnInit(): void {
    this.setNews()
  }

  private setNews(): void {
    this.news = notices;
    this.getLastNotices();
  }

  private getLastNotices(): void {
    const lastNews: Array<INotice> = this.news.slice(-3);
    this.lastTwoNotices = lastNews.slice(-2);
    this.principalNotice = lastNews[0]
  }
}
