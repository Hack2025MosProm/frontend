
param(
    [string]$Name = "otkroimospromfrontend",
    [string]$Image = "otkroimospromfrontend:latest",
    [int]$HostPort = 5173,
    [int]$ContainerPort = 80,
    [string]$EnvFile = (Join-Path $PSScriptRoot ".env"),
    [switch]$Pull
)

$ErrorActionPreference = "Stop"

function Fail($msg) {
    Write-Error $msg
    exit 1
}

# 1) Проверки
if (-not (Get-Command docker -ErrorAction SilentlyContinue)) {
    Fail "Docker не найден в PATH. Установите Docker Desktop и перезапустите терминал."
}

if (-not (Test-Path $EnvFile)) {
    Fail "Файл env не найден: $EnvFile. Создайте .env рядом со скриптом (пример в инструкции)."
}

# 2) (опционально) docker pull
if ($Pull) {
    Write-Host "Pulling image $Image ..."
    docker pull $Image | Write-Host
}

# 3) Удаляем старый контейнер, если есть
try {
    Write-Host "Removing old container '$Name' if exists ..."
    docker rm -f $Name 2>$null | Out-Null
}
catch { }

# 4) Запуск
$runArgs = @(
    "run", "-d",
    "--name", $Name,
    "--restart", "unless-stopped",
    "--env-file", $EnvFile,
    "-p", "$HostPort`:$ContainerPort",
    $Image
)

Write-Host "Starting container '$Name' from image '$Image' on port $HostPort -> $ContainerPort ..."
docker @runArgs | Write-Host

Write-Host "`n✅ Up: http://localhost:$HostPort"
Write-Host "Логи: docker logs -f $Name"
Write-Host "Остановить/удалить: docker rm -f $Name"