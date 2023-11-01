import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Stats from '../components/Stats';
import { fetchPage } from '../services/contentful';

export default function Page({ page }: { page: any }) {
  return (
    <div data-sb-object-id={page?.sys?.id}>
      <Nav/>
      {page.sectionsCollection?.items?.map((section: any) => {
        switch(section?.__typename) {
          case 'Hero':
            return <Hero key={section?.sys?.id} id={section?.sys?.id} heading={section.heading} body={section.body} button={section.button}/>
          case 'Stats':
            return <Stats key={section?.sys?.id} id={section?.sys?.id} heading={section.heading} body={section.body} stats={section.statsCollection?.items || []}/>
        }
      })}
    </div>
  );
}

export async function getStaticPaths() {
  return { paths: ['/', '/about'], fallback: false };
}

export async function getStaticProps({ params }: { params: any }) {
  const slug = params.slug || 'home'
  const page = await fetchPage(slug);

  return { props: { page: page } };
}