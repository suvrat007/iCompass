#!/bin/bash

echo "🚀 Starting iCompass Vercel Deployment..."

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Test build first
echo "🔨 Testing build..."
npm run vercel-build

if [ $? -eq 0 ]; then
    echo "✅ Build successful! Deploying to Vercel..."
    vercel --prod
else
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi
