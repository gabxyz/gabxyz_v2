import type { GetStaticProps, InferGetStaticPropsType } from 'next'
import { allProjects, type Project } from 'contentlayer/generated'

import Card from 'components/Card'
import Carousel from 'components/Carousel'

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
      <h1 className="mb-8 indent-2 text-xl font-semibold">Projects</h1>

      <Carousel>
        {projects.map((project, index) => (
          <Card key={project.slug} index={index} {...project} />
        ))}
      </Carousel>
    </>
  )
}

export default AllProjectsPage
