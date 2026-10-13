
$ErrorActionPreference = "Stop"

Write-Host "=== Smart Canary Deployment Demo ===" -ForegroundColor Cyan

$canary = kubectl get deployment smart-store-canary -o name 2>$null

if (-not $canary) {
    Write-Host "No canary deployment found." -ForegroundColor Yellow
    exit 1
}

Write-Host "Checking canary health..."

kubectl rollout status deployment/smart-store-canary --timeout=30s

if ($LASTEXITCODE -ne 0) {
    Write-Host "Canary rollout failed. Rolling back..." -ForegroundColor Red
    kubectl delete deployment smart-store-canary --ignore-not-found
    Write-Host "Rollback complete. Stable Version 1 remains deployed." -ForegroundColor Green
    exit 1
}

$health = kubectl exec deployment/smart-store-canary -- wget -qO- http://127.0.0.1:80/health 2>$null

if ($LASTEXITCODE -eq 0 -and $health.Trim() -eq "OK") {
    Write-Host "Canary health check PASSED. Version 2 remains deployed." -ForegroundColor Green
} else {
    Write-Host "Canary health check FAILED. Rolling back..." -ForegroundColor Red
    kubectl delete deployment smart-store-canary --ignore-not-found
    Write-Host "Rollback complete. Stable Version 1 remains deployed." -ForegroundColor Green
    exit 1
}

Write-Host "`nCurrent deployments:"
kubectl get deployments
