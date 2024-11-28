const VERCEL_API_URL = 'https://api.vercel.com';

async function getGitHubRepoInfo(owner, repo) {
  const url = `https://api.github.com/repos/${owner}/${repo}`;
  const headers = {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await fetch(url, { headers });
    if (!response.ok) {
      throw new Error(`Failed to fetch GitHub repo: ${response.statusText}`);
    }
    const data = await response.json();
    return {
      description: data.description,
      html_url: data.html_url,
      owner_avatar_url: data.owner.avatar_url,
    };
  } catch (error) {
    console.error('Error fetching GitHub repo info:', error);
    return null;
  }
}

export async function getVercelProjects() {
  try {
    const headers = {
      Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
      'Content-Type': 'application/json',
    };

    let apiUrl = `${VERCEL_API_URL}/v9/projects`;
    if (process.env.VERCEL_TEAM_ID) {
      apiUrl += `?teamId=${process.env.VERCEL_TEAM_ID}`;
    }

    const response = await fetch(apiUrl, {
      headers,
      method: 'GET',
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.statusText}`);
    }

    const data = await response.json();

    const projects = await Promise.all(data.projects.map(async project => {
      const repoInfo = await getGitHubRepoInfo(project.link.org, project.link.repo);
      return {
        id: project.id,
        name: project.name,
        description: repoInfo?.description || 'Projeto desenvolvido com as melhores tecnologias web.',
        framework: project.framework || 'Not specified',
        repository: repoInfo?.html_url || '',
        deploymentUrl: project.latestDeployments?.[0]?.url 
          ? `https://${project.latestDeployments[0].url}` 
          : '',
        tools: [
          project.framework,
          ...((project.framework === 'nextjs' || project.framework === 'react') ? ['React'] : []),
          project.nodeVersion ? `Node ${project.nodeVersion}` : '',
        ].filter(Boolean),
        ownerAvatarUrl: repoInfo?.owner_avatar_url || '',
      };
    }));

    return projects;

  } catch (error) {
    console.error('Error in getVercelProjects:', error);
    throw error;
  }
} 