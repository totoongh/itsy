param(
    [string]$OutputFile = $null
)

$ErrorActionPreference = "Stop"

$scriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$rootDir = Split-Path -Parent $scriptDir

if (-not $OutputFile) {
    $OutputFile = Join-Path $rootDir "java-learning-platform-transfer.ps1"
}

$files = @(
    "index.html",
    "styles.css",
    "app.js",
    "README.md",
    "ENTWICKLUNGSREGELN.md",
    ".gitignore",
    "scripts/build-transfer-file.sh",
    "scripts/build-transfer-file.ps1"
)

foreach ($file in $files) {
    $path = Join-Path $rootDir $file
    if (-not (Test-Path -LiteralPath $path -PathType Leaf)) {
        Write-Error "Fehlt: $file"
        exit 1
    }
}

$tmpDir = Join-Path ([System.IO.Path]::GetTempPath()) ("java-learning-platform-build-{0}" -f [System.Guid]::NewGuid())
$archiveFile = Join-Path $tmpDir "java-learning-platform.zip"

New-Item -ItemType Directory -Force -Path $tmpDir | Out-Null

try {
    Add-Type -AssemblyName System.IO.Compression.FileSystem
    $zip = [System.IO.Compression.ZipFile]::Open($archiveFile, [System.IO.Compression.ZipArchiveMode]::Create)

    try {
        foreach ($file in $files) {
            $source = Join-Path $rootDir $file
            [System.IO.Compression.ZipFileExtensions]::CreateEntryFromFile(
                $zip,
                $source,
                $file.Replace("\", "/"),
                [System.IO.Compression.CompressionLevel]::Optimal
            ) | Out-Null
        }
    } finally {
        $zip.Dispose()
    }

    $payload = [System.Convert]::ToBase64String([System.IO.File]::ReadAllBytes($archiveFile))

    $script = @"
param(
    [string]`$TargetDir = "java-learning-platform",
    [switch]`$InitGit
)

`$ErrorActionPreference = "Stop"

if ((Test-Path -LiteralPath `$TargetDir) -and -not (Test-Path -LiteralPath `$TargetDir -PathType Container)) {
    Write-Error "Ziel existiert, ist aber kein Ordner: `$TargetDir"
    exit 1
}

New-Item -ItemType Directory -Force -Path `$TargetDir | Out-Null

`$tmpArchive = Join-Path ([System.IO.Path]::GetTempPath()) ("java-learning-platform-transfer-{0}.zip" -f [System.Guid]::NewGuid())

try {
    `$payload = @'
$payload
'@

    [System.IO.File]::WriteAllBytes(`$tmpArchive, [System.Convert]::FromBase64String((`$payload -replace "\s", "")))

    if (Get-Command Expand-Archive -ErrorAction SilentlyContinue) {
        Expand-Archive -Path `$tmpArchive -DestinationPath `$TargetDir -Force
    } else {
        Add-Type -AssemblyName System.IO.Compression.FileSystem
        [System.IO.Compression.ZipFile]::ExtractToDirectory(`$tmpArchive, `$TargetDir)
    }

    if (`$InitGit) {
        Push-Location `$TargetDir
        try {
            if (Get-Command git -ErrorAction SilentlyContinue) {
                git init | Out-Null
                git add .
                git commit -m "Restore Java learning platform snapshot" | Out-Null
            } else {
                Write-Warning "Git ist nicht installiert, überspringe git init."
            }
        } finally {
            Pop-Location
        }
    }

    Write-Host "Java Lernplattform wurde nach `$TargetDir entpackt."
    Write-Host "Start: `$TargetDir/index.html im Browser öffnen."
} finally {
    if (Test-Path -LiteralPath `$tmpArchive) {
        Remove-Item -LiteralPath `$tmpArchive -Force
    }
}
"@

    Set-Content -LiteralPath $OutputFile -Value $script -Encoding UTF8
    Write-Host "Windows-Transfer-Datei erstellt: $OutputFile"
} finally {
    if (Test-Path -LiteralPath $tmpDir) {
        Remove-Item -LiteralPath $tmpDir -Recurse -Force
    }
}
