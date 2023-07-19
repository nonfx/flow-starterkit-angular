import { Component } from '@angular/core';

@Component({
  selector: 'body-section',
  templateUrl: './mainbody.component.html',
  styleUrls: ['./mainbody.component.scss'],
})
export class BodyComponent {
  codebase = [
    {
      icon: 'i-org',
      title: 'Component library',
      subTitle:
        'Discover all Flow components, their usage in a storybook library.',
      link1: {
        name: 'f-button',
        link: 'https://flow.cldcvr.com/v2/index.html?path=/docs/components-f-button--playground',
      },
      link2: {
        name: 'f-icon',
        link: 'https://flow.cldcvr.com/v2/index.html?path=/docs/components-f-icon--anatomy',
      },
      link3: {
        name: 'f-pictogram',
        link: 'https://flow.cldcvr.com/v2/index.html?path=/docs/components-f-pictogram--anatomy',
      },
    },
    {
      icon: 'i-table-1',
      title: 'Templates',
      subTitle:
        'Find all the useful templates with their code in a single storybook.',
      link1: {
        name: 'top-nav',
        link: 'https://flow.cldcvr.com/templates/index.html?path=/docs/top-nav--anatomy',
      },
      link2: {
        name: 'side-nav',
        link: 'https://flow.cldcvr.com/templates/index.html?path=/docs/top-nav--anatomy',
      },
      link3: {
        name: 'slab',
        link: 'https://flow.cldcvr.com/templates/index.html?path=/docs/top-nav--anatomy',
      },
    },
    {
      icon: 'i-git',
      title: 'Dependencies',
      subTitle:
        'Consume what you need by selecting logically grouped dependencies.',
      link1: {
        name: 'Flow system icon',
        link: 'https://flow.cldcvr.com/v2/index.html?path=/docs/dependencies-icons--system-icons',
      },
      link2: {
        name: 'Flow product icon',
        link: 'https://flow.cldcvr.com/v2/index.html?path=/docs/dependencies-icons--product-icons',
      },
      link3: { name: 'Flow forms (coming soon)', link: '' },
    },
    {
      icon: 'i-book',
      title: 'Figma design kit',
      subTitle:
        'Find visual styles, components, and templates to quickly design mockups.',
      link1: { name: 'Flow UI kit', link: '' },
      link2: { name: 'Flow template library', link: '' },
    },
    {
      icon: 'i-file',
      title: 'Help and support',
      subTitle:
        'Get in touch to find answers to your queries and contribute to flow community.',
      link1: { name: 'flow slack', link: '' },
      link2: { name: 'contribution deck', link: '' },
    },
  ];
}
