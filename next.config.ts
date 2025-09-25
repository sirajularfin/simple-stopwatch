import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	sassOptions: {
		additionalData: `@use '@/common/styles/theme.scss' as *;`,
	},
};

export default nextConfig;
