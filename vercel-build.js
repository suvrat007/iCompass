#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

console.log('🚀 Starting Vercel build process...');

try {
  // Change to web-platform directory
  process.chdir(path.join(__dirname, 'web-platform'));
  
  console.log('📦 Installing dependencies...');
  execSync('npm install --production=false', { stdio: 'inherit' });
  
  console.log('🔨 Building Next.js application...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error.message);
  process.exit(1);
}
