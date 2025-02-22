import { linkify } from './markdown';

describe('util/markdown', () => {
  describe('.linkify', () => {
    const before = `Some references:

*   Commit: f8083175fe890cbf14f41d0a06e7aa35d4989587
*   Commit (fork): foo@f8083175fe890cbf14f41d0a06e7aa35d4989587
*   Commit (repo): remarkjs/remark@e1aa9f6c02de18b9459b7d269712bcb50183ce89
*   Issue or PR (\`#\`): #1
*   Issue or PR (\`GH-\`): GH-1
*   Issue or PR (fork): foo#1
*   Issue or PR (project): remarkjs/remark#1
*   Mention: @wooorm
`;

    const after = `Some references:

-   Commit: [\`f808317\`](https://github.com/some/repo/commit/f8083175fe890cbf14f41d0a06e7aa35d4989587)
-   Commit (fork): [foo@\`f808317\`](https://github.com/foo/repo/commit/f8083175fe890cbf14f41d0a06e7aa35d4989587)
-   Commit (repo): [remarkjs/remark@\`e1aa9f6\`](https://github.com/remarkjs/remark/commit/e1aa9f6c02de18b9459b7d269712bcb50183ce89)
-   Issue or PR (\`#\`): [#1](https://github.com/some/repo/issues/1)
-   Issue or PR (\`GH-\`): [GH-1](https://github.com/some/repo/issues/1)
-   Issue or PR (fork): [foo#1](https://github.com/foo/repo/issues/1)
-   Issue or PR (project): [remarkjs/remark#1](https://github.com/remarkjs/remark/issues/1)
-   Mention: [@wooorm](https://github.com/wooorm)
`;

    it('works', async () => {
      expect(await linkify(before, { repository: 'some/repo' })).toEqual(after);
    });
  });
});
