# Format 1 or more files
[group('Formatting')]
format +file:
    @echo "Formatting {{ file }}..."
    @pnpm prettier -w --config .prettierrc {{ file }}

# Lint
[group('Formatting')]
lint:
    @echo "Linting..."
    @pnpm run lint

# Building
[group('Building')]
[arg('type', pattern='dev|build|start')]
build type='dev':
    @echo "Running {{ type }}..."
    @pnpm run {{ type }}

# Help
[group('Utilities')]
help:
    @echo "Hello, and welcome to my portfolio site!"

# Version
[group('Utilities')]
version:
    @echo "$(cat VERSION.txt)"
