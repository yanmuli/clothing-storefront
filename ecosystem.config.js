module.exports = {
  apps: [
    {
      name: 'storefront',
      script: 'npm',
      args: 'run start',
      cwd: '/var/www/medusa-app/storefront',
      env: {
		MEDUSA_BACKEND_URL: 'http://43.134.101.198:9000',
		NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY: 'pk_13311297e90785bfac1b6c4dfad1bd893acc57a45a17ee1ed688419939eba89b',
		NEXT_PUBLIC_BASE_URL: 'http://43.134.101.198:8000'
	  },
    }
  ]
};
