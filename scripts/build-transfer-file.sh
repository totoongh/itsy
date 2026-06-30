#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
OUTPUT_FILE="${1:-"$ROOT_DIR/java-learning-platform-transfer.sh"}"

FILES=(
  "index.html"
  "styles.css"
  "app.js"
  "README.md"
  "ENTWICKLUNGSREGELN.md"
  "scripts/build-transfer-file.sh"
)

for file in "${FILES[@]}"; do
  if [[ ! -f "$ROOT_DIR/$file" ]]; then
    printf 'Fehlt: %s\n' "$file" >&2
    exit 1
  fi
done

TMP_DIR="$(mktemp -d)"
ARCHIVE_FILE="$TMP_DIR/java-learning-platform.tar.gz"
trap 'rm -rf "$TMP_DIR"' EXIT

(
  cd "$ROOT_DIR"
  tar -czf "$ARCHIVE_FILE" "${FILES[@]}"
)

cat > "$OUTPUT_FILE" <<'SCRIPT_HEADER'
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

base64 < "$ARCHIVE_FILE" >> "$OUTPUT_FILE"
printf '\n' >> "$OUTPUT_FILE"
chmod +x "$OUTPUT_FILE"

printf 'Transfer-Datei erstellt: %s\n' "$OUTPUT_FILE"
