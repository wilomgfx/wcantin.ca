import Head from 'next/head';
import Layout, { siteTitle } from '@components/layout';
import { getSortedPostsData } from '@lib/posts';
import Link from 'next/link';
import Date from '@components/Date';
import { GetStaticProps } from 'next';

export default function Home({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2X6J4JJ7HN"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2X6J4JJ7HN');
        `,
          }}
        />
      </Head>
      <section>
        <p>
          Fully committed Fullstack developer. I love to learn new things and to
          develop solutions that help others do more!
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
