# Vercel Deployment Guide for iCompass

## Prerequisites
- Vercel account
- GitHub repository with your code
- Node.js 18+ installed locally

## Deployment Steps

### 1. Environment Variables
Create these environment variables in your Vercel dashboard:

```
NEXT_PUBLIC_APP_URL=https://your-domain.vercel.app
NODE_ENV=production
NEXT_PUBLIC_API_URL=/api
NEXT_PUBLIC_SPLINE_SCENE_URL=https://prod.spline.design/K3fcfHFiHsgl1gJJ/scene.splinecode
```

### 2. Build Configuration
The project is already configured with:
- ✅ Next.js 14.2.32
- ✅ TypeScript support
- ✅ Tailwind CSS
- ✅ Framer Motion
- ✅ Spline integration
- ✅ Image optimization
- ✅ API routes

### 3. Deploy to Vercel

#### Option A: Vercel CLI
```bash
npm i -g vercel
vercel login
vercel --prod
```

#### Option B: GitHub Integration
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with default settings

### 4. Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Node.js Version**: 18.x

### 5. Domain Configuration
- Custom domain can be added in Vercel dashboard
- SSL certificate is automatically provided
- CDN is enabled by default

## Performance Optimizations
- ✅ Image optimization enabled
- ✅ CSS optimization enabled
- ✅ SWC minification enabled
- ✅ Console logs removed in production
- ✅ Compression enabled
- ✅ ETags enabled

## Security Headers
- ✅ X-Content-Type-Options: nosniff
- ✅ X-Frame-Options: DENY
- ✅ X-XSS-Protection: 1; mode=block
- ✅ Referrer-Policy: strict-origin-when-cross-origin
- ✅ Permissions-Policy configured

## API Routes
All API routes in `/src/app/api/` are automatically deployed as serverless functions.

## Troubleshooting
- If build fails, check TypeScript errors
- Ensure all dependencies are in package.json
- Verify image domains in next.config.js
- Check environment variables are set correctly

