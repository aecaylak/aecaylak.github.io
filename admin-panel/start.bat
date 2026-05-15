@echo off
title Admin Panel
cd /d "%~dp0"
echo.
echo ========================================
echo   Admin Panel Baslatiliyor...
echo ========================================
echo.
echo   Kurulum yapiliyor (ilk calistirmada)...
echo.
call npm install
if %errorlevel% neq 0 (
    echo.
    echo HATA: Kurulum basarisiz!
    pause
    exit /b 1
)
echo.
echo ========================================
echo   Admin Panel baslatiliyor...
echo ========================================
echo.
echo   Tarayicida acilacak: http://localhost:3000
echo   Durdurmak icin tarayici penceresini kapatin
echo.
call npm run dev
pause