import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaDataService {

  // Service that handles that SEO for the pages
  // It sets meta tags for each page

  private appColor: '#1976d2';
  private appImage: '/assets/shapes.svg';
  private appTitle: 'Publication PWA';
  private appDescription: 'A place where you can find wide range of Novels and Stories';

  constructor(private meta: Meta, private title: Title) { }

  public setMetaData(config) {
    const description = config.description || this.appDescription;
    const image = config.image || this.appImage;
    const title = config.title ? `${config.title}` : this.appTitle;
    this.title.setTitle(title);

    const tags = [
      { name: 'description', content: description },
      { name: 'theme-color', content: this.appColor },
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:image', content: image },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
      { name: 'apple-mobile-web-app-title', content: title },
      { name: 'apple-touch-startup-image', content: image },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
    ];

    tags.forEach(tag => this.meta.updateTag(tag));
  }
}