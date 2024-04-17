import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import utilStyles from '../../styles/utils.module.css';
import type { InferGetStaticPropsType, GetStaticProps } from 'next';

import { getAllPostIds, getPostData, PostsData } from '../../lib/posts';

export default function Post({ postData }: InferGetStaticPropsType<typeof getStaticProps>) {
  if (postData) {
    return (
      <Layout>
        <Head>
          <title>{postData.title}</title>
        </Head>
        <article>
          <h1 className={utilStyles.headingXl}>{postData.title}</h1>
          <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
        </article>
      </Layout>
    );
  } else {
    return <Layout>文章内容为空</Layout>;
  }
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

export const getStaticProps = (async ({ params }) => {
  let postData;
  if (params && typeof params.id == 'string') {
    postData = await getPostData(params.id);
  }

  return {
    props: {
      postData
    }
  };
}) satisfies GetStaticProps<{ postData: PostsData | undefined }>;
