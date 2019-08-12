export default {
  title: 'Badge',
  preview: `
  <h1>Example heading <span class="badge badge-secondary">New</span></h1>
  `,
  items: [
    {
      title: 'Basic use',
      content: `
      <h1>Example heading <span class="badge badge-secondary">New</span></h1>
      <h2>Example heading <span class="badge badge-secondary">New</span></h2>
      <h3>Example heading <span class="badge badge-secondary">New</span></h3>
      <h4>Example heading <span class="badge badge-secondary">New</span></h4>
      <h5>Example heading <span class="badge badge-secondary">New</span></h5>
      <h6>Example heading <span class="badge badge-secondary">New</span></h6>
      `,
    },
    {
      title: 'Contextual variations',
      content: `
      <span class="badge badge-primary">Primary</span>
      <span class="badge badge-secondary">Secondary</span>
      <span class="badge badge-success">Success</span>
      <span class="badge badge-danger">Danger</span>
      <span class="badge badge-warning">Warning</span>
      <span class="badge badge-info">Info</span>
      <span class="badge badge-light">Light</span>
      <span class="badge badge-dark">Dark</span>
      `,
    },
    {
      title: 'Pill badges',
      content: `
      <span class="badge badge-pill badge-primary">Primary</span>
      <span class="badge badge-pill badge-secondary">Secondary</span>
      <span class="badge badge-pill badge-success">Success</span>
      <span class="badge badge-pill badge-danger">Danger</span>
      <span class="badge badge-pill badge-warning">Warning</span>
      <span class="badge badge-pill badge-info">Info</span>
      <span class="badge badge-pill badge-light">Light</span>
      <span class="badge badge-pill badge-dark">Dark</span>
      `,
    },
    {
      title: 'Links badges',
      content: `
      <a href="#" class="badge badge-primary">Primary</a>
      <a href="#" class="badge badge-secondary">Secondary</a>
      <a href="#" class="badge badge-success">Success</a>
      <a href="#" class="badge badge-danger">Danger</a>
      <a href="#" class="badge badge-warning">Warning</a>
      <a href="#" class="badge badge-info">Info</a>
      <a href="#" class="badge badge-light">Light</a>
      <a href="#" class="badge badge-dark">Dark</a>
      `,
    },
  ],
};
