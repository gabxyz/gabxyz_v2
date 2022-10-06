import Card from 'components/Card'
import { allProjects, type Project } from 'contentlayer/generated'
import type { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps<{
  projects: Project[]
}> = async () => {
  return { props: { projects: allProjects } }
}

const AllProjectsPage = ({
  projects
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <h1 className="mb-8 text-xl font-semibold">Projects</h1>

      {projects.map((project) => (
        <Card key={project.slug} {...project} />
      ))}
    </>
  )
}

export default AllProjectsPage
