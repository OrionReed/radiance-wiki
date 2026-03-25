import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/githubEdit.scss"

interface Options {
  repo: string
  branch: string
  editText: string
  newPageText: string
}

const defaultOptions: Options = {
  repo: "OrionReed/radiance-wiki",
  branch: "main",
  editText: "Edit this page",
  newPageText: "Create a new page",
}

export default ((opts?: Partial<Options>) => {
  const options = { ...defaultOptions, ...opts }

  const GithubEdit: QuartzComponent = ({ fileData }: QuartzComponentProps) => {
    const editUrl = `https://github.com/${options.repo}/edit/${options.branch}/content/${fileData.relativePath}`
    const newPageUrl = `https://github.com/${options.repo}/new/${options.branch}/content?filename=untitled.md&value=${encodeURIComponent("---\ntitle: Page Title\ntags:\n  - stub\n---\n\nWrite your content here.\n")}`

    return (
      <div class="github-edit">
        <a href={editUrl} target="_blank" rel="noopener noreferrer" class="edit-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          {options.editText}
        </a>
        <a href={newPageUrl} target="_blank" rel="noopener noreferrer" class="new-page-link">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="12" y1="18" x2="12" y2="12" />
            <line x1="9" y1="15" x2="15" y2="15" />
          </svg>
          {options.newPageText}
        </a>
      </div>
    )
  }

  GithubEdit.css = style
  return GithubEdit
}) satisfies QuartzComponentConstructor
