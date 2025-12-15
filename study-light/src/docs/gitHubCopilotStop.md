GitHub Copilot — using GPT-5 mini.

Quick options to stop Copilot suggestions in VS Code (macOS)

1) Temporarily disable inline suggestions only
- Open Command Palette (Cmd+Shift+P) → type "Preferences: Open Settings (JSON)" and add:
````json
{
  // ...existing code...
  "github.copilot.inlineSuggest.enable": false,
  "editor.inlineSuggest.enabled": false
  // ...existing code...
}
````
This keeps Copilot extension installed but prevents inline/autocomplete suggestions.

2) Disable Copilot extension (global or workspace)
- Extensions view (Cmd+Shift+X) → find "GitHub Copilot" → click Disable → choose "Disable (Workspace)" or "Disable (Always)".

3) Disable per workspace (settings.json)
- In the workspace .vscode/settings.json add:
````json
{
  // ...existing code...
  "github.copilot.enable": {
    "*": false
  }
  // ...existing code...
}
````

4) Uninstall via CLI (permanent)
```bash
code --uninstall-extension GitHub.copilot
```

5) Quick toggle from Command Palette
- Cmd+Shift+P → type "GitHub Copilot: Disable" or "GitHub Copilot: Enable" (or similar toggle commands provided by the extension).

Which option do you prefer — temporary inline-only off, workspace-only disable, or full uninstall? I can give the exact settings or commands for that choice.