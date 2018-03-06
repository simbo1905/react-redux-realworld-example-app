import Page from '@/layouts/Base';
import Link from '@/components/generic/Link';
import bear from '@/static/bear.jpeg';

export default () => (
  <Page>
    <h1>This is the onboarding page!</h1>
    <img src={bear} />
    <Link href="/">
      <a>Go home!</a>
    </Link>
  </Page>
);
