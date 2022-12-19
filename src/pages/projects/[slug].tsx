import { allProjects, type Project } from 'contentlayer/generated'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'

import UnstyledLink from 'components/Button/UnstyledLink'
import { PinLeftIcon } from '@radix-ui/react-icons'
import Tooltip from 'components/Tooltip'

export const getStaticPaths = async () => {
  return {
    paths: allProjects.map((project) => ({
      params: {
        slug: project.slug
      }
    })),
    fallback: false
  }
}
export const getStaticProps: GetStaticProps<{
  project: Project
}> = async ({ params }) => {
  const project = allProjects.find((project) => project.slug === params?.slug)

  if (!project) {
    return { notFound: true }
  }

  return { props: { project } }
}

const SingleProjectPage = ({
  project
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXContent = useMDXComponent(project.body.code)
  return (
    <>
      <div className="flex flex-col items-start">
        <Tooltip content="back" side="right">
          <UnstyledLink
            href="/projects"
            className="text-mauve-11 hover:text-mauve-12 motion-safe:duration-150 motion-safe:ease-productive-standard"
          >
            <PinLeftIcon />
          </UnstyledLink>
        </Tooltip>
        <section className="prose prose-mauve mt-10 prose-p:text-mauve-11">
          <MDXContent />
        </section>
      </div>
    </>
  )
}

export default SingleProjectPage
