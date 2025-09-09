@echo off
echo 🚀 Starting iCompass Vercel Deployment...

REM Check if Vercel CLI is installed
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Vercel CLI not found. Installing...
    npm install -g vercel
)

REM Test build first
echo 🔨 Testing build...
call npm run vercel-build

if %ERRORLEVEL% EQU 0 (
    echo ✅ Build successful! Deploying to Vercel...
    vercel --prod
) else (
    echo ❌ Build failed. Please fix errors before deploying.
    exit /b 1
)
