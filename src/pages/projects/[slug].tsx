import { allProjects, type Project } from 'contentlayer/generated'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { useMDXComponent } from 'next-contentlayer/hooks'

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
      <section className="prose prose-mauve prose-p:text-mauve-11">
        <MDXContent />
      </section>
    </>
  )
}

export default SingleProjectPage
