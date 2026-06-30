#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SH_OUTPUT_FILE="${1:-"$ROOT_DIR/java-learning-platform-transfer.sh"}"
PS_OUTPUT_FILE="${2:-"$ROOT_DIR/java-learning-platform-transfer.ps1"}"

FILES=(
  "index.html"
  "styles.css"
  "app.js"
  "README.md"
  "ENTWICKLUNGSREGELN.md"
  ".gitignore"
  "scripts/build-transfer-file.sh"
  "scripts/build-transfer-file.ps1"
)

for file in "${FILES[@]}"; do
  if [[ ! -f "$ROOT_DIR/$file" ]]; then
    printf 'Fehlt: %s\n' "$file" >&2
    exit 1
  fi
done

TMP_DIR="$(mktemp -d)"
ARCHIVE_FILE="$TMP_DIR/java-learning-platform.tar.gz"
ZIP_FILE="$TMP_DIR/java-learning-platform.zip"
trap 'rm -rf "$TMP_DIR"' EXIT

(
  cd "$ROOT_DIR"
  tar -czf "$ARCHIVE_FILE" "${FILES[@]}"
  zip -qr "$ZIP_FILE" "${FILES[@]}"
)

cat > "$SH_OUTPUT_FILE" <<'SCRIPT_HEADER'
#!/usr/bin/env bash
set -euo pipefail

TARGET_DIR="${1:-java-learning-platform}"
INIT_GIT="${2:-}"

if [[ -e "$TARGET_DIR" && ! -d "$TARGET_DIR" ]]; then
  printf 'Ziel existiert, ist aber kein Ordner: %s\n' "$TARGET_DIR" >&2
  exit 1
fi

mkdir -p "$TARGET_DIR"

TMP_ARCHIVE="$(mktemp -t java-learning-platform-transfer.XXXXXX)"
trap 'rm -f "$TMP_ARCHIVE"' EXIT

extract_payload() {
  awk '/^__JAVA_LEARNING_PLATFORM_PAYLOAD__$/ { found = 1; next } found { print }' "$0"
}

if base64 --help 2>/dev/null | grep -q -- '-d'; then
  extract_payload | base64 -d > "$TMP_ARCHIVE"
else
  extract_payload | base64 -D > "$TMP_ARCHIVE"
fi

tar -xzf "$TMP_ARCHIVE" -C "$TARGET_DIR"

if [[ "$INIT_GIT" == "--init-git" ]]; then
  (
    cd "$TARGET_DIR"
    if command -v git >/dev/null 2>&1; then
      git init >/dev/null
      git add .
      git commit -m "Restore Java learning platform snapshot" >/dev/null || true
    else
      printf 'Git ist nicht installiert, überspringe git init.\n' >&2
    fi
  )
fi

printf 'Java Lernplattform wurde nach %s entpackt.\n' "$TARGET_DIR"
printf 'Start: %s/index.html im Browser öffnen.\n' "$TARGET_DIR"
exit 0

__JAVA_LEARNING_PLATFORM_PAYLOAD__
SCRIPT_HEADER

base64 < "$ARCHIVE_FILE" >> "$SH_OUTPUT_FILE"
printf '\n' >> "$SH_OUTPUT_FILE"
chmod +x "$SH_OUTPUT_FILE"

cat > "$PS_OUTPUT_FILE" <<'POWERSHELL_HEADER'
param(
    [string]$TargetDir = "java-learning-platform",
    [switch]$InitGit
)

$ErrorActionPreference = "Stop"

if ((Test-Path -LiteralPath $TargetDir) -and -not (Test-Path -LiteralPath $TargetDir -PathType Container)) {
    Write-Error "Ziel existiert, ist aber kein Ordner: $TargetDir"
    exit 1
}

New-Item -ItemType Directory -Force -Path $TargetDir | Out-Null

$tmpArchive = Join-Path ([System.IO.Path]::GetTempPath()) ("java-learning-platform-transfer-{0}.zip" -f [System.Guid]::NewGuid())

try {
    $payload = @'
POWERSHELL_HEADER

base64 < "$ZIP_FILE" >> "$PS_OUTPUT_FILE"

cat >> "$PS_OUTPUT_FILE" <<'POWERSHELL_FOOTER'
'@

    [System.IO.File]::WriteAllBytes($tmpArchive, [System.Convert]::FromBase64String(($payload -replace "\s", "")))

    if (Get-Command Expand-Archive -ErrorAction SilentlyContinue) {
        Expand-Archive -Path $tmpArchive -DestinationPath $TargetDir -Force
    } else {
        Add-Type -AssemblyName System.IO.Compression.FileSystem
        [System.IO.Compression.ZipFile]::ExtractToDirectory($tmpArchive, $TargetDir)
    }

    if ($InitGit) {
        Push-Location $TargetDir
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

    Write-Host "Java Lernplattform wurde nach $TargetDir entpackt."
    Write-Host "Start: $TargetDir/index.html im Browser öffnen."
} finally {
    if (Test-Path -LiteralPath $tmpArchive) {
        Remove-Item -LiteralPath $tmpArchive -Force
    }
}
POWERSHELL_FOOTER

printf 'Transfer-Datei erstellt: %s\n' "$SH_OUTPUT_FILE"
printf 'Windows-Transfer-Datei erstellt: %s\n' "$PS_OUTPUT_FILE"
