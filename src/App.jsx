import { useState } from 'react'
import './App.css'

const files = [
  { id: 1, name: 'Q3 roadmap.pdf', owner: 'Maya Chen', updated: 'Sep 18' },
  { id: 2, name: 'Brand kit.zip', owner: 'Luis Ortega', updated: 'Sep 16' },
  { id: 3, name: 'Launch checklist.docx', owner: 'Ava Brooks', updated: 'Sep 14' },
]

const shareOptions = ['Copy link', 'Invite by email', 'Anyone with link', 'Only my team']

function App() {
  const [openShareId, setOpenShareId] = useState(null)
  const [filterOpen, setFilterOpen] = useState(false)
  const [filterLabel, setFilterLabel] = useState('All files')

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">Harbor</div>
        <nav>
          <a className="nav-link" href="#home">
            Home
          </a>
          <a className="nav-link active" href="#files">
            Files
          </a>
          <a className="nav-link" href="#shared">
            Shared
          </a>
          <a className="nav-link" href="#trash">
            Trash
          </a>
        </nav>
      </aside>

      <main className="main">
        <header className="page-header">
          <div>
            <p className="eyebrow">Workspace</p>
            <h1>Team files</h1>
          </div>

          <div className="filter-wrap">
            <button
              type="button"
              className="ghost-btn"
              onClick={() => setFilterOpen((open) => !open)}
            >
              {filterLabel}
            </button>
            {filterOpen ? (
              <div className="filter-menu">
                {['All files', 'Shared with me', 'Owned by me'].map((label) => (
                  <button
                    key={label}
                    type="button"
                    className="menu-item"
                    onClick={() => {
                      setFilterLabel(label)
                      setFilterOpen(false)
                    }}
                  >
                    {label}
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </header>

        <section className="panel">
          <div className="panel-head">
            <h2>Recent files</h2>
            <p>Share a file with your team from the row actions.</p>
          </div>

          <div className="table-wrap">
            <table className="file-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Owner</th>
                  <th>Updated</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {files.map((file) => (
                  <tr key={file.id}>
                    <td>{file.name}</td>
                    <td>{file.owner}</td>
                    <td>{file.updated}</td>
                    <td>
                      <div className="action-cell">
                        <button
                          type="button"
                          className="share-btn"
                          onClick={() =>
                            setOpenShareId((current) =>
                              current === file.id ? null : file.id,
                            )
                          }
                        >
                          Share
                        </button>
                        {openShareId === file.id ? (
                          <div className="share-menu">
                            {shareOptions.map((option) => (
                              <button
                                key={option}
                                type="button"
                                className="menu-item"
                              >
                                {option}
                              </button>
                            ))}
                          </div>
                        ) : null}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
