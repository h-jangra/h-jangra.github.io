## Powershell oneliner to get sha256 hashes of zip files

```
Get-ChildItem *.zip | Get-FileHash -Algorithm SHA256 | ForEach-Object { "{0}  {1}" -f $_.Hash.ToLower(), (Split-Path $_.Path -Leaf) }
```
