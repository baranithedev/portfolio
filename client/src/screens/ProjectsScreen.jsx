import BaseLayout from '../layouts/BaseLayout'

const ProjectsScreen = () => {
  return (
    <BaseLayout>
      <div className="container">
        <h1 className="text-center">No Projects Found</h1>
        <p className="text-center text-secondary">Sorry, there are no projects available at the moment. Please check back later.</p>
      </div>
    </BaseLayout>
  )
}

export default ProjectsScreen