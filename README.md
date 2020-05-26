# Tag Commit GitHub Action

This action tags the current commit in git.

## Inputs

### `gh_token`

The GitHub token used to authenticate with GitHub to push changes to a PR.

**Required**

### `tag_name`

Tag name to tag commit with.

**Required**

## Example Usage

```yml
- name: Determine next version
  uses: gps/determine_next_version@master
  id: next_version
  with:
    GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}

- name: Tag commit
  uses: gps/tag_commit@master
  with:
    GH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
    TAG_NAME: ${{steps.next_version.outputs.NEXT_BUILD_VERSION}}
```
