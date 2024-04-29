'use client'

import { Comments as CommentsComponent } from 'pliny/comments'
import { useState } from 'react'
import siteMetadata from '@/data/siteMetadata'

export default function Comments({ slug }: { slug: string }) {
  if (!siteMetadata.comments) return null
  return <CommentsComponent commentsConfig={siteMetadata.comments} slug={slug} />
}
