import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	sassOptions: {
		additionalData: `@use '@/common/styles/theme.scss' as *;`,
	},
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

