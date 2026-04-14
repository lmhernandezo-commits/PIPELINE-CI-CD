import adapter from '@sveltejs/adapter-static';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';
const repositoryName = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? '';
const basePath = isGithubPages && repositoryName ? `/${repositoryName}` : '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: '404.html',
			precompress: false
		}),
		paths: {
			base: basePath
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
