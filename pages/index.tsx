import { StrictMode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData, PostsData } from '../lib/posts';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

export default function Home({ allPostsData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <StrictMode>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>[8年高级前端工程师]</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => {
              return (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>{title}</Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              );
            })}
          </ul>
        </section>
      </Layout>
    </StrictMode>
  );
}

export const getStaticProps: GetStaticProps<{ allPostsData: PostsData[] }> = async () => {
  console.time('allPostsData');
  const allPostsData = getSortedPostsData();
  console.timeEnd('allPostsData');
  console.log(allPostsData);
  return {
    props: {
      allPostsData
    }
  };
};
