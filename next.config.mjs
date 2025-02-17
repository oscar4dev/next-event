/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: 'crydotnlrxbjjtahbibt.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/next-event-images//**',
            search: '',
         },
      ],
   },
};

export default nextConfig;
