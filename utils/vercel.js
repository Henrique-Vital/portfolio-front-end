export async function getVercelProjects() {
  const response = await fetch('https://api.vercel.com/v9/projects', {
    headers: {
      Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch projects');
  }

  const data = await response.json();
  return data.projects.map(project => ({
    name: project.name,
    description: project.description || '',
    image: project.screenshot?.url,
    demo: `https://${project.latestDeployments[0]?.url}`,
    github: project.link?.repo,
    tools: project.framework || [],
  }));
} 